import { motion, stagger, useAnimate } from "framer-motion"
import { useEffect, useState } from "react"

const useMenuAnimation = (isOpen) => {
    const [scope, animate] = useAnimate()
    const staggerItem = stagger(0.1, { startDelay: 0.15 })
    useEffect(() => {
        animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: .2 })

        animate(
            "ul",
            {
                clipPath: isOpen
                    ? "inset(0% 0% 0% 0% round 10px)"
                    : "inset(10% 50% 90% 50% round 10px)",
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.5,
            }
        );

        animate("li",
            isOpen ?
                { opacity: 1, scale: 1, filter: "blur(0px)" }
                :
                { opacity: 0, scale: 0, filter: "blur(20px)" },
            {
                duration: 0.2,
                delay: isOpen ? staggerItem : 0
            }
        )



    }, [isOpen])


    return scope
}


function MenubarAnimation() {
    const [isOpen, setIsOpen] = useState(false)
    const scope = useMenuAnimation(isOpen)
    return (
        <nav className="menu mt-10" ref={scope}>
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="w-[300px] p-2 flex justify-between items-center px-2 text-white text-xl font-semibold rounded-md bg-indigo-500"
                whileTap={{
                    scale: .95
                }}
            >
                Menu
                <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </div>
            </motion.button>
            <ul
                style={{
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    pointerEvents: isOpen ? "auto" : "none"
                }}
                className="bg-white w-[300px] mt-4 p-2"
            >
                <li>Item 1 </li>
                <li>Item 2 </li>
                <li>Item 3 </li>
                <li>Item 4 </li>
                <li>Item 5 </li>
            </ul>{" "}
        </nav>
    )
}

export default MenubarAnimation
