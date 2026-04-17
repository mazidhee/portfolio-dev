'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface StaggerChildrenProps {
    children: React.ReactNode
    className?: string
    staggerDelay?: number
    once?: boolean
}

export default function StaggerChildren({
    children,
    className = '',
    staggerDelay = 0.08,
    once = true,
}: StaggerChildrenProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: '-30px' }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function StaggerItem({
    children,
    className = '',
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.4,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
