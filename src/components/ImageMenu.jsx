import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const useImageAnimation = (isOpen) => {
    const [scope, animate] = useAnimate();
    const staggerImageItem = stagger(0.1, { startDelay: 0.2 })

    useEffect(() => {

        animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 })

        animate(".imageBox",
            {
                clipPath: isOpen ?
                    "inset(0% 0% 0% 0% round 10px)"
                    :
                    "inset(10% 50% 90% 50% round 10px)",
            },
            {
                type: "spring",
                bounce: 0,
                duration: 0.5
            }
        )
        animate("img",
            isOpen ?
                { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.3, filter: "blur(10px)" },
            { duration: 0.2, delay: isOpen ? staggerImageItem : 0 }

        )

    }, [isOpen, animate, staggerImageItem])

    return scope
}


function ImageMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const scope = useImageAnimation(isOpen)

    return (
        <div className="flex justify-center mt-28" ref={scope}>
            <div>
                <motion.div className="flex justify-between items-center bg-white shadow-md rounded-md p-4 mb-4 text-xl font-semibold cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    whileTap={{
                        scale: 0.95,
                        duration: 0.3
                    }}
                    whileHover={{
                        translateY: -4,
                        duration: 0.3
                    }}
                >See All Image
                    <span className="arrow"><IoIosArrowDown /></span>
                </motion.div>
                <div style={{ clipPath: "inset(10% 50% 90% 50% round 10px)", }} className={`imageBox flex flex-col gap-4 bg-white w-[300px] items-center justify-center h-auto p-10 shadow-lg`}>
                    <img className="w-[100px] h-[100px] object-cover" src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg" alt="" />
                    <img className="w-[100px] h-[100px] object-cover" src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg" alt="" />
                    <img className="w-[100px] h-[100px] object-cover" src="https://images.pexels.com/photos/39517/rose-flower-blossom-bloom-39517.jpeg?cs=srgb&dl=pexels-pixabay-39517.jpg&fm=jpg" alt="" />
                    <img className="w-[100px] h-1200px] object-cover" src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=sph" alt="" />
                    <img className="w-[100px] h-1200px] object-cover" src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg" alt="" />

                </div>
            </div>
        </div >
    )
}

export default ImageMenu
