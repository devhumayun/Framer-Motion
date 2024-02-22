import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { tabElement } from '../data.js/data'

function TabAnimation() {
    const [selectedTab, setSelectedTab] = useState(tabElement[0])
    return (
        <div>
            <div className='window'>
                <nav>
                    <ul>
                        {
                            tabElement.map((item) => (
                                <li key={item.label}
                                    onClick={() => setSelectedTab(item)}
                                    className='relative'
                                >
                                    {`${item.icon} ${item.label}`}
                                    {
                                        item === selectedTab ? (
                                            <motion.div transition={{ duration: 0.2 }} className='underline absolute top-10'></motion.div>
                                        ) : null
                                    }
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <main>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={selectedTab.label ? selectedTab.label : "empty"}
                            initial={{
                                y: 10, opacity: 0
                            }}
                            animate={{
                                opacity: 1, y: 0
                            }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='flex justify-center items-center flex-col'
                        >
                            {selectedTab ? selectedTab.icon : "😋"}
                            <div className='flex justify-between gap-5 mt-4'>
                                <span className='text-[30px]'>{selectedTab ? selectedTab.price : ""} tk</span>
                                <button className='bg-indigo-600 text-xl p-3 text-white rounded-md'>Add To Cart</button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div >
    )
}

export default TabAnimation
