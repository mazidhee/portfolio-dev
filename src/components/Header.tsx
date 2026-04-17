import React from 'react'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu'
import Link from 'next/link'

const menuItems = [
    {
        title: "Me",
        link: "/"
    },
    {
        title: "Projects",
        link: "/projects"
    },
    {
        title: "Notes",
        link: "/notes"
    },
]

const socialLinks = [
    {
        title: "GitHub",
        link: "#github"
    },
    {
        title: "LinkedIn",
        link: "#linkedin"
    },
]


function Header() {

    return (
        <div className='w-full fixed top-0 left-0 rounded-sm flex justify-between items-center z-50 p-4'>
            <div className='w-fit flex justify-between items-center gap-1'>
                {
                    menuItems.map((item) => (
                        <NavButton key={item.title} link={item.link} text={item.title} />
                    ))
                }
            </div>
            <div className='w-fit flex justify-center items-center gap-1'>
                {
                    socialLinks.map((item) => (
                        <NavButton key={item.title} link={item.link} text={item.title} />
                    ))
                }
            </div>


        </div>
    )
}

export default Header

function NavButton({ link, text }: { link: string, text: string }) {
    return (

        <div className='font-mono bg-[#0A2534] py-1 px-2 rounded-xs text-terminal-highlight group hover:bg-theme-lime hover:text-background transition-colors'>
            <Link href={link} className='flex items-center gap-2'>
                {/* <div className='w-1 h-1 rounded-full  bg-terminal-highlight group-hover:bg-background' /> */}
                <div className='uppercase tracking-tighter text-sm'>
                    {text}
                </div>
            </Link>
        </div >


    )
}