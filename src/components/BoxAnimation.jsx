
import { motion } from 'framer-motion'


function BoxAnimation() {

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen overflow-x-hidden" >
            <motion.div className="flex justify-between items-center gap-5">
                <motion.div className="bg-gray-200 flex flex-col p-4 justify-center items-center shadow-md rounded-md"
                    initial={{
                        x: "-100vh"
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        duration: .7,
                        type: "spring"
                    }}
                >
                    <h1 className="text-xl font-semibold"> Title </h1>
                    <p className="w-[60%] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, molestias.</p>
                    <img className="w-[300px] h-[300px] mt-2 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJuF-5hnFSdwNLj0PQEt3xZN7WFL-sLdrHCzJVd3vrBysd50bzZ6ncnLsqQ&s" alt="" />
                </motion.div>
                <motion.div className="bg-gray-200 flex flex-col p-4 justify-center items-center shadow-md rounded-md"
                    initial={{
                        opacity: 0,
                        scale: 0
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: .7
                    }}
                >
                    <h1 className="text-xl font-semibold"> Title </h1>
                    <p className="w-[60%] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, molestias.</p>
                    <img className="w-[300px] h-[300px] mt-2 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJuF-5hnFSdwNLj0PQEt3xZN7WFL-sLdrHCzJVd3vrBysd50bzZ6ncnLsqQ&s" alt="" />
                </motion.div>
                <motion.div className="bg-gray-200 flex flex-col p-4 justify-center items-center shadow-md rounded-md"
                    initial={{
                        x: "100vh"
                    }}
                    animate={{
                        x: 0
                    }}
                    transition={{
                        duration: .7,
                        type: "spring",
                    }}
                >
                    <h1 className="text-xl font-semibold"> Title </h1>
                    <p className="w-[60%] text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, molestias.</p>
                    <img className="w-[300px] h-[300px] mt-2 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJuF-5hnFSdwNLj0PQEt3xZN7WFL-sLdrHCzJVd3vrBysd50bzZ6ncnLsqQ&s" alt="" />
                </motion.div>
            </motion.div>
            <motion.div className='item-box mt-20 bg-white/30 w-[180px] h-[180px] flex justify-center items-center rounded-2xl shadow-lg'
                initial={{
                    opacity: 1,
                    scale: 0
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 0.3,
                    type: "spring",
                    delay: 0.1
                }}
            >
                <motion.div className='flex flex-wrap justify-center gap-4'
                >
                    {
                        [1, 2, 3, 3].map((item, i) => (
                            <motion.div key={i} className='item w-16 h-16 bg-white rounded-full'
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: i * 0.2
                                }}
                            ></motion.div>
                        ))
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}

export default BoxAnimation
