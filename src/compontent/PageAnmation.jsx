import React from 'react'
import { easeInOut, motion } from "framer-motion"
function PageAnmation({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 ,ease:"easeInOut"}}>
            {children}
        </motion.div>
    )
}
export default PageAnmation
