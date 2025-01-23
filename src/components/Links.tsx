import Link from 'next/link'
import React from 'react'

const Links = () => {
    return (
        <div>
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
    )
}

export default Links