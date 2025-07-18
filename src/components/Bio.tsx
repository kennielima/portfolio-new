import Link from 'next/link'
import React from 'react'
import Links from './Links'

const Bio = () => {
    return (
        <div className='flex flex-col md:w-1/2 md:overflow-scroll h-full justify-between no-scrollbar'>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-5xl sm:text-6xl font-bold'>Kennie Oyewale</h1>
                    <h3 className='text-xl sm:text-2xl'>Software Developer</h3>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-base sm:text-lg text-neutral-300 leading-tight'>
                        Hi, I&apos;m Kennie, a software developer with front and backend skills specializing in building modern fullstack web applications. I am currently building
                        <Link
                            href='https://github.com/kennielima/reviews'
                            className='text-neutral-400 hover:text-neutral-500'
                            target="_blank"
                        >
                            {' '}Veriview, a reviews app{' '}
                        </Link>
                        and a
                        <Link
                            href='https://github.com/kennielima/banking-app-system'
                            className='text-neutral-400 hover:text-neutral-500'
                            target="_blank"
                        >
                            {' '}backend bank application system
                        </Link>.
                    </p>
                    <div>
                        <h3 className='font-bold text-lg'>Skills:</h3>
                        <p className='text-neutral-300 text-sm'>Typescript, ReactJs, Node.js, Express, Next.js, MySql, Sequelize, Prisma, PostgreSql, Docker, Firebase, Supabase, Shadcn, AntD, Figma</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-bold text-lg'>Recent experience:</h3>
                        <div className=''>
                            <p className='text-neutral-200'>Backend Engineer</p>
                            <p className='text-neutral-400 text-sm'>Sterling Bank: Nov 2024 - Present</p>
                        </div>
                        <div className=''>
                            <p className='text-neutral-200'>Frontend Engineer</p>
                            <p className='text-neutral-400 text-sm'>Sankira: Sept 2024 - Nov-2024</p>
                        </div>
                        <div className=''>
                            <p className='text-neutral-200'>Frontend Engineer</p>
                            <p className='text-neutral-400 text-sm'>Yarami: Jan 2024 - August 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden md:flex'><Links /></div>
        </div>
    )
}

export default Bio