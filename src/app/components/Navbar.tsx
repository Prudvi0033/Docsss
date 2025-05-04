import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { RiStickyNoteAddLine } from "react-icons/ri";
import { MdBookmarks } from "react-icons/md";



const Navbar = () => {
    return (
        <div className=' sticky top-0 z-50'>
            <div className='flex items-center justify-center p-6'>
                <div className='bg-white/10 backdrop-blur-lg rounded-full shadow-xl px-12 border border-white/20'>
                    <div className='flex p-2 gap-6 text-neutral-800/90'>
                    <GoHomeFill size={44} className='cursor-pointer hover:bg-white/60 rounded-full p-2 transition-all' />
                    <MdBookmarks size={44} className='cursor-pointer hover:bg-white/60 rounded-full p-2 transition-all' />
                    <RiStickyNoteAddLine size={44} className='cursor-pointer hover:bg-white/60 rounded-full p-2 transition-all' />

                    <div className='h-10 w-px bg-neutral-300 mx-1'></div></div>
                </div>
            </div>
        </div>
    )
}



export default Navbar