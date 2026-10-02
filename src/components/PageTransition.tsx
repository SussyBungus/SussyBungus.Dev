"use client";

import { motion } from "motion/react";

export default function PageTransition({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            className="min-h-screen"
            initial={{
                opacity: 0,
                y: 14,
                filter: "blur(4px)",
            }}
            animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
            }}
            transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}