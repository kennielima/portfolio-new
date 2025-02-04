import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Links = () => {
    return (
        <div>
            <div className='flex gap-3 md:mt-10 font-bold text-base items-center'>
                <Link href='https://github.com/kennielima/'>
                    <div className='flex justify-center items-center rounded-full overflow-clip w-7 h-7 bg-neutral-500 hover:shadow-sm hover:shadow-neutral-400 border hover:border-[1.5px] transition-all border-neutral-400'>
                        <Image src='/git.webp' alt='git' height={30} width={30} />
                    </div>
                </Link>
                <Link href='https://www.linkedin.com/in/kennielima/'>
                    <div className='flex justify-center items-center rounded-full overflow-clip w-7 h-7 bg-neutral-500 hover:shadow-sm hover:shadow-neutral-400 border hover:border-[1.5px] transition-all border-neutral-400'>
                <Image src='/lkdin.png' alt='linkedin' height={30} width={30} />
                    </div>
                </Link>
                <Link href='mailto:kennylima970@gmail.com' target='_blank'>
                        <div className='flex justify-center items-center rounded-full overflow-clip w-7 h-7 bg-neutral-500 hover:shadow-sm hover:shadow-neutral-400 border hover:border-[1.5px] transition-all border-neutral-400'>
                        <Image src='/mail.png' alt='mail' height={30} width={30} />
                    </div>
                </Link>
                <Link href='/OYEWALE-KEHINDE.pdf' target='_blank'>
                        <div className='flex justify-center items-center rounded-full overflow-clip w-7 h-7 bg-neutral-500 hover:shadow-sm hover:shadow-neutral-400 border hover:border-[1.5px] transition-all border-neutral-400'>
                        <Image src='/cv.jpeg' alt='resume' height={30} width={30} />
                    </div>
                </Link>
                <Link href='https://www.figma.com/@kennielima' target='_blank'>
                        <div className='flex justify-center items-center rounded-full overflow-clip w-7 h-7 bg-neutral-500 hover:shadow-sm hover:shadow-neutral-400 border hover:border-[1.5px] transition-all border-neutral-400'>
                        <Image src='/figma.png' alt='figma' height={30} width={30} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Links