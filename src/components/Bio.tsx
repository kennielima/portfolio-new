import Link from 'next/link'
import React from 'react'
import Links from './Links'

const Bio = () => {
    return (
        <div className='flex flex-col sm:w-1/2 sm:overflow-scroll h-full justify-between'>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-6xl font-bold'>Kenny Oyewale</h1>
                    <h3 className='text-2xl'>Software developer</h3>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='text-lg text-neutral-300 leading-tight'>
                        Hi, I'm Kenny, a software developer with front and backend skills specializing in modern fullstack web technologies. I am currently building a test
                        <Link
                            href='https://github.com/kennielima/banking-app-system'
                            className='text-neutral-400 hover:text-neutral-500'
                        >
                            {' '}banking application system{' '}
                        </Link>
                        and learning linux fundamentals.
                    </p>
                    <div>
                        <h3 className='font-bold text-lg'>Skills:</h3>
                        <p className='text-neutral-300 text-sm'>Typescript, ReactJs, Node.js, Express, Next.js, MySql, Sequelize, Prisma, PostgreSql, MongoDB, Docker, Firebase, Supabase, Shadcn, AntD, Figma</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='font-bold text-lg'>Experience:</h3>
                        <div className=''>
                            <p className='text-neutral-200'>Backend Engineer</p>
                            <p className='text-neutral-400 text-sm'>Sterling Bank: Nov 2022 - Present</p>
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
            <div className='hidden sm:flex'><Links /></div>
        </div>
    )
}

export default Bio