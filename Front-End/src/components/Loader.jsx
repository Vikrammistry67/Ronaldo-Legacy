import { motion } from 'motion/react'

const Loader = () => {
    return (
        <motion.div initial={{ width: 0 }} animate={{ width: "100vw" }}
            transition={{ duration: 2, ease: "anticipate" }}
            className="w-screen flex items-center justify-center h-screen bg-yellow-700">
        </motion.div>
    )
}
export default Loader