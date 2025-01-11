import React from 'react'
import { PROJECTS } from './utils/projects'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {
    return (
        <div className='sm:w-1/2 flex flex-col gap-10'>
            <h1 className='text-4xl font-bold mt-12'>
                Some of my projects
            </h1>
            <div className='grid gap-6'>
                {PROJECTS.map((project, index) => (
                    <div className='bg-mutedBackground w-full shadow-neutral-700 shadow-sm' key={index}>
                        <Link
                            href={project.href}
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
                            <ul className='flex gap-2 items-start'>
                                <span className='font-bold'>Stack:</span>
                                <div className='flex flex-wrap gap-x-2 text-neutral-300 w-fit'>
                                    {project.stacks?.map((stack, i) => (
                                        <li key={i}>{stack}</li>
                                    ))}
                                </div>
                            </ul>
                            <div className='flex gap-6 font-bold text-sm text-neutral-300 hover:text-neutral-400'>
                                <Link href={project.code} target="_blank">View code &#x2192;</Link>
                                <Link href={project.href} target="_blank">View site &#x2192;</Link>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Projects