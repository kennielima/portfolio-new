'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const Links = () => {
    const links = [
        { href: 'https://github.com/kennielima/', src: '/git.webp', alt: 'GitHub' },
        { href: 'https://www.linkedin.com/in/kennielima/', src: '/lkdin.png', alt: 'LinkedIn' },
        { href: 'mailto:kennylima970@gmail.com', src: '/mail.png', alt: 'Email' },
        { href: '/OYEWALE-KEHINDE.pdf', src: '/cv.jpeg', alt: 'Resume' },
        { href: 'https://www.figma.com/@kennielima', src: '/figma.png', alt: 'Figma' }
    ]

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='flex gap-4 md:mt-10 font-bold text-base items-center'>
                {links.map((link, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            // rotate: 5,
                            boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href={link.href}
                            target={link.href.startsWith('http') || link.href.startsWith('mailto') ? '_blank' : undefined}
                        >
                            <div className='flex justify-center items-center rounded-full overflow-hidden w-10 h-10 bg-gradient-to-br from-neutral-700 to-neutral-800 border-2 border-neutral-600 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20'>
                                <Image
                                    src={link.src}
                                    alt={link.alt}
                                    height={24}
                                    width={24}
                                    className='transition-transform duration-300 hover:scale-110'
                                />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Links