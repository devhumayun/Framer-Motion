import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { boxItem } from '../data.js/data'
function StaggerAnimation() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className='mt-[100px] px-28'>
            <div>
                <button className='bg-indigo-800 text-white p-3 text-md font-semibold rounded-md mb-4'
                    onClick={() => setShowMenu(!showMenu)}
                > {showMenu ? "Hide Menu" : "Show Menu"} </button>
                {
                    showMenu &&
                    <div className='flex flex-col justify-between gap-4'>
                        {boxItem.map((item, i) => (
                            <motion.div key={i}
                                className='w-24 h-24 bg-indigo-500 text-white text-xl font-bold flex justify-center items-center rounded-md shadow-md'
                                initial={{
                                    opacity: 0,
                                    translateX: 50,
                                    translateY: i % 2 === 0 ? -50 : 50
                                }}
                                animate={{
                                    opacity: 1,
                                    translateX: 0,
                                    translateY: 0
                                }}
                                transition={{
                                    duration: .4,
                                    delay: i * .4
                                }}
                            >
                                {item.title}
                            </motion.div>
                        ))}
                    </div>
                }
            </div>
            <div>

            </div>
        </div>
    )
}

export default StaggerAnimation
