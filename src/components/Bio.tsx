'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Links from './Links'
import { motion, Variants } from 'framer-motion'

const Bio = () => {
    const [displayedText, setDisplayedText] = useState('')
    const roles = ['Software Developer', 'Frontend Engineer', 'Backend Engineer', 'Full Stack Developer']
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[currentRoleIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentRole.length) {
                    setDisplayedText(currentRole.slice(0, displayedText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(currentRole.slice(0, displayedText.length - 1))
                } else {
                    setIsDeleting(false)
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [displayedText, currentRoleIndex, isDeleting, roles])

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            // transition: {
            //     staggerChildren: 0.1,
            //     delayChildren: 0.2
            // }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.0,
                ease: "easeOut"
            }
        }
    }

    const skills = [
        'TypeScript', 'React.js', 'Node.js', 'Express', 'Next.js',
        'MySQL', 'Sequelize', 'Prisma', 'PostgreSQL', 'Docker',
        'Firebase', 'Supabase', 'Shadcn', 'AntD', 'Figma'
    ]
    const Roles = [
        { role: 'Backend Engineer', company: 'Sterling Bank', period: 'Nov 2024 - Present' },
        { role: 'Frontend Engineer', company: 'Sankira', period: 'Sept 2024 - Nov 2024' },
        { role: 'Frontend Engineer', company: 'Yarami', period: 'Jan 2024 - August 2024' }
    ]

    return (
        <motion.div
            className='flex flex-col md:w-1/2 mt-12 md:overflow-scroll h-full justify-between no-scrollbar'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='flex flex-col gap-6'>
                <motion.div
                    className='flex flex-col gap-3'
                    variants={itemVariants}
                >
                    <motion.h1
                        className='text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent'
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Kennie Oyewale
                    </motion.h1>
                    <motion.h3
                        className='text-xl sm:text-2xl text-blue-300 min-h-[2rem]'
                        variants={itemVariants}
                    >
                        {displayedText}
                        <span className='animate-pulse text-white'>|</span>
                    </motion.h3>
                </motion.div>

                <motion.div
                    className='flex flex-col gap-5'
                    variants={itemVariants}
                >
                    <motion.p
                        className='text-base sm:text-lg text-neutral-300 leading-relaxed'
                        variants={itemVariants}
                    >
                        Hi, I&apos;m Kennie, a software developer with front and backend skills specializing in building modern fullstack web applications. I am currently building a
                        <Link
                            href='https://github.com/kennielima/playlist_tracker'
                            className='text-blue-400 hover:text-blue-300 transition-colors duration-300 underline decoration-blue-400/30 hover:decoration-blue-300/60'
                            target="_blank"
                        >
                            {' '}playlist tracker
                        </Link>
                        {' '}and a{' '}
                        <Link
                            href='https://github.com/kennielima/banking-app-system'
                            className='text-blue-400 hover:text-blue-300 transition-colors duration-300 underline decoration-blue-400/30 hover:decoration-blue-300/60'
                            target="_blank"
                        >
                            backend bank application system
                        </Link>.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <h3 className='font-bold text-lg text-white mb-2'>Skills:</h3>
                        <div className='flex flex-wrap gap-2'>
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    className='px-3 py-1 bg-neutral-800 text-blue-300 rounded-full text-sm border border-neutral-700 hover:border-blue-400 transition-colors duration-300'
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                // whileHover={{ scale: 1.05 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className='flex flex-col gap-3'
                        variants={itemVariants}
                    >
                        <h3 className='font-bold text-lg text-white'>Recent experience:</h3>
                        {Roles.map((exp, index) => (
                            <motion.div
                                key={index}
                                className='p-3 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-blue-500/30 transition-colors duration-300'
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <p className='text-neutral-200 font-medium'>{exp.role}</p>
                                <p className='text-blue-400 text-sm'>{exp.company}</p>
                                <p className='text-neutral-400 text-xs'>{exp.period}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                className='hidden md:flex'
                variants={itemVariants}
            >
                <Links />
            </motion.div>
        </motion.div>
    )
}

export default Bio

// const Bio = () => {
//     return (
//         <div className='flex flex-col md:w-1/2 mt-12 md:overflow-scroll h-full justify-between no-scrollbar'>
//             <div className='flex flex-col gap-6'>
//                 <div className='flex flex-col gap-3'>
//                     <h1 className='text-5xl sm:text-6xl font-bold'>Kennie Oyewale</h1>
//                     <h3 className='text-xl sm:text-2xl'>Software Developer</h3>
//                 </div>
//                 <div className='flex flex-col gap-5'>
//                     <p className='text-base sm:text-lg text-neutral-300 leading-tight'>
//                         Hi, I&apos;m Kennie, a software developer with front and backend skills specializing in building modern fullstack web applications. I am currently building
//                         <Link
//                             href='https://veriview.com.ng'
//                             className='text-neutral-400 hover:text-neutral-500'
//                             target="_blank"
//                         >
//                             {' '}Veriview, a reviews app{' '}
//                         </Link>
//                         and a
//                         <Link
//                             href='https://github.com/kennielima/banking-app-system'
//                             className='text-neutral-400 hover:text-neutral-500'
//                             target="_blank"
//                         >
//                             {' '}backend bank application system
//                         </Link>.
//                     </p>
//                     <div>
//                         <h3 className='font-bold text-lg'>Skills:</h3>
//                         <p className='text-neutral-300 text-sm'>Typescript, ReactJs, Node.js, Express, Next.js, MySql, Sequelize, Prisma, PostgreSql, Docker, Firebase, Supabase, Shadcn, AntD, Figma</p>
//                     </div>
//                     <div className='flex flex-col gap-2'>
//                         <h3 className='font-bold text-lg'>Recent experience:</h3>
//                         <div className=''>
//                             <p className='text-neutral-200'>Backend Engineer</p>
//                             <p className='text-neutral-400 text-sm'>Sterling Bank: Nov 2024 - Present</p>
//                         </div>
//                         <div className=''>
//                             <p className='text-neutral-200'>Frontend Engineer</p>
//                             <p className='text-neutral-400 text-sm'>Sankira: Sept 2024 - Nov-2024</p>
//                         </div>
//                         <div className=''>
//                             <p className='text-neutral-200'>Frontend Engineer</p>
//                             <p className='text-neutral-400 text-sm'>Yarami: Jan 2024 - August 2024</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='hidden md:flex'><Links /></div>
//         </div>
//     )
// }

// export default Bio