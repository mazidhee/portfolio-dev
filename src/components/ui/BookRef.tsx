
import Link from 'next/link';

interface BookRefProps {

    title: string;
    author: string;
    link?: string;
}

function BookRef({ title, author, link }: BookRefProps) {
    return (


        <Link href={link || '#'} target="_blank" rel="noopener noreferrer">
            <div className='flex items-start gap-12 my-8 p-8 border border-zinc-300 dark:border-zinc-700 rounded-lg'>
                <div className=''>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" ><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" className='fill-theme-dark-pink' /></svg>
                </div>
                <div className=''>
                    <h3 className='font-heading font-light tracking-tight leading-none text-2xl mb-4'>{title}</h3>
                    <h4 className='font-mono uppercase text-sm text-gray-500'>{author}</h4>
                </div>
            </div >
        </Link >

    )
}

export default BookRef