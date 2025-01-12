import Link from 'next/link'
import React from 'react'

const Bio = () => {
    return (
        <div className='flex flex-col gap-6 sm:w-1/2'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-6xl font-bold'>Kenny Oyewale</h1>
                <h3 className='text-2xl'>Software developer
                    <span className='text-xl italic'> (Web)</span>
                </h3>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='text-lg'>
                    Hi, I'm Kennie, a software developer specializing in modern fullstack web technologies.
                </p>
                <div>
                    <h3 className='font-bold text-lg'>Skills:</h3>
                    <p className='text-neutral-300'>Typescript, ReactJs, Node.js, Express, MySql, Sequelize, Prisma, PostgreSql, MongoDB, Firebase, Docker, Next.js, TailwindCSS, Shadcn, AntDesign, Git Version Control, Figma</p>
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
                    <div className='flex gap-3 sm:mt-10 font-bold text-base'>
                        <Link href='https://github.com/kennielima/'>
                            <p className='hover:text-neutral-400'>github</p>
                        </Link>
                        <Link href='https://www.linkedin.com/in/kennielima/'>
                            <p className='hover:text-neutral-400'>linkedIn</p>
                        </Link>
                        <Link href='mailto:kennylima970@gmail.com' target='_blank'>
                            <p className='hover:text-neutral-400'>contact</p>
                        </Link>
                        <Link href='/OYEWALE-KEHINDE.pdf' target='_blank'>
                            <p className='hover:text-neutral-400'>resume</p>
                        </Link>
                        <Link href='https://www.figma.com/@kennielima' target='_blank'>
                            <p className='hover:text-neutral-400'>figma</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio