'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedContainerProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    animationType?: 'fadeUp' | 'fadeIn' | 'stagger';
}

export default function AnimatedContainer({ children, delay = 0, className = "", animationType = 'fadeUp' }: AnimatedContainerProps) {

    const variants: any = {
        fadeUp: {
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
            }
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: { duration: 0.8, delay, ease: "easeOut" }
            }
        },
        stagger: {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.1,
                    delayChildren: delay
                }
            }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants[animationType]}
            className={className}
        >
            {children}
        </motion.div>
    );
}
