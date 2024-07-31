import { motion } from "framer-motion"
export default function Advantage({ text }) {
    return (
        <motion.div className="advantage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {/* <i className={`${icon}`}></i> */}
            <p>{ text}</p>
      </motion.div>
    )
  }
  
  