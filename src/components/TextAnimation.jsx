
import { motion } from 'framer-motion';

const TextAnimation = () => {
    const message = "Learn freelancing with fun. Enjoy your bright future"
    const messageArray = message.split(" ")

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='text-3xl font-bold text-red-600'>
                <motion.div className='bg-gray-200 p-20 shadow-xl rounded-lg'
                    initial={{
                        opacity: 0,
                        scale: 0,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: .6
                    }}

                >
                    {
                        messageArray.map((msg, index) => (
                            <motion.span key={index}
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: index / 20,
                                }}
                                className='cursor-pointer'> {msg} {" "} </motion.span>
                        ))
                    }
                </motion.div>
            </div>
        </div >
    )
}

export default TextAnimation
