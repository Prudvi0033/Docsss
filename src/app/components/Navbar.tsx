import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { RiStickyNoteAddLine } from "react-icons/ri";
import { IoBookmarksOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className=' sticky top-0 z-50'>
            <div className='flex items-center justify-center p-6'>
                <div className='bg-white/10 backdrop-blur-lg rounded-full shadow-xl px-12 py-2 border border-white/20'>
                    <div className='flex p-2 gap-6 text-slate-800/90 '>
                    <GoHomeFill size={24} />
                    <RiStickyNoteAddLine size={24} />
                    <IoBookmarksOutline size={24} />

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar