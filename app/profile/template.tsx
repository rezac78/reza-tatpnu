'use client'

import {motion} from 'framer-motion'
import React from "react";

export default function Template({children}: any) {
    return (
        <motion.div
            initial={{opacity: 0, translateY: -10}}
            animate={{opacity: 1, translateY: 0}}
            transition={{ease: 'easeInOut', duration: 0.5}}
        >
            {children}
        </motion.div>
    )
}
