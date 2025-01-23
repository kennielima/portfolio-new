import React from 'react'
import { PROJECTS } from '../utils/projects'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    return (
        <div className='md:w-1/2 flex flex-col gap-10 sm:overflow-scroll h-full no-scrollbar'>
            <h1 className='text-3xl font-bold mt-8 flex justify-center'>
                Some of my projects
            </h1>
            <div className='grid gap-6'>
                {PROJECTS.map((project, index) => (
                    <div className='bg-mutedBackground w-full shadow-neutral-700 shadow-sm' key={index}>
                        <Link
                            href={project.href || project.code}
                            className='h-[90%] opacity-60 hover:opacity-90'
                            target="_blank"
                        >
                            <Image
                                src={project.image}
                                alt={project.span}
                                width={500}
                                height={500}
                                className='flex w-full'
                                key={index}
                            />
                        </Link>
                        <div className='h-[10%] w-auto p-3 text-sm flex flex-col gap-2'>
                            <div className='flex gap-6 font-bold text-sm text-neutral-300'>
                                <p>{project.span}:</p>
                                <Link href={project.code} target="_blank" className='hover:text-neutral-400'>View code &#x2192;</Link>
                                {project.href &&
                                    <Link href={project.href} target="_blank" className='hover:text-neutral-400'>View site &#x2192;</Link>
                                }
                            </div>
                            <ul className='flex gap-2 items-start'>
                                <span className='font-bold'>Stack:</span>
                                <div className='flex flex-wrap gap-x-2 text-neutral-300 w-fit'>
                                    {project.stacks?.map((stack, i) => (
                                        <li key={i}>{stack}</li>
                                    ))}
                                </div>
                            </ul>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects