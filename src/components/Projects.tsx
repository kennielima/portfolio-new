'use client'

import React from 'react'
import { PROJECTS } from '../utils/projects'
import Image from 'next/image'
import Link from 'next/link'
import { motion, Variants } from 'framer-motion'
import { ExternalLink, Code } from 'lucide-react'

const Projects = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            // transition: {
            //     staggerChildren: 0.1,
            //     delayChildren: 0.3
            // }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div
            className='md:w-1/2 flex flex-col gap-10 sm:overflow-scroll h-full no-scrollbar'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1
                className='text-3xl font-bold mt-8 flex justify-center bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent'
                variants={itemVariants}
            >
                Some of my projects
            </motion.h1>
            <div className='grid gap-6'>
                {PROJECTS.map((project, index) => (
                    <motion.div
                        className='bg-neutral-900/50 w-full shadow-neutral-700 shadow-sm rounded-lg overflow-hidden border border-neutral-800 hover:border-blue-500/30 transition-all duration-300'
                        key={index}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <Link
                            href={project.href || project.code}
                            className='block relative group'
                            target="_blank"
                        >
                            <div className='relative overflow-hidden'>
                                <Image
                                    src={project.image}
                                    alt={project.span}
                                    width={500}
                                    height={500}
                                    className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                <div className='absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <ExternalLink className='w-4 h-4 text-white' />
                                </div>
                            </div>
                        </Link>
                        <div className='p-4 flex flex-col gap-3'>
                            <div className='flex flex-col gap-2'>
                                <h3 className='font-bold text-lg text-white'>{project.span}</h3>
                                <div className='flex flex-wrap gap-3 text-sm'>

                                    {project.href && (
                                        <Link
                                            href={project.href}
                                            target="_blank"
                                            className='flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-300'
                                        >
                                            <ExternalLink className='w-4 h-4' />
                                            View site
                                        </Link>
                                    )}
                                    <Link
                                        href={project.code}
                                        target="_blank"
                                        className='flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors duration-300'
                                    >
                                        <Code className='w-4 h-4' />
                                        View code
                                    </Link>
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-2'>
                                <span className='font-semibold text-neutral-300 text-sm'>Stack:</span>
                                <div className='flex flex-wrap gap-1'>
                                    {project.stacks?.map((stack, i) => (
                                        <span
                                            key={i}
                                            className='px-2 py-1 bg-neutral-800 text-blue-300 rounded-md text-xs border border-neutral-700'
                                        >
                                            {stack}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Projects