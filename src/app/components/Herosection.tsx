import React from 'react'
import { Raleway } from 'next/font/google'
import { Oswald } from 'next/font/google'
import PencilAnimation from './PencilAnimation'
import { CgLoadbarDoc } from "react-icons/cg";


const os = Oswald({ subsets: ['latin'] })
const rale = Raleway({ subsets: ['latin'] })

const Herosection = () => {
    return (
        <div>
            <div className={`flex flex-col leading-none mt-4 ml-14 items-start ${rale.className}`}>

                {/* Heading section */}
                <div className={`flex font-extrabold gap-x-16 ${rale.className}`}>
                    <div className={`flex items-start leading-none flex-col font-extrabold gap-x-16 text-[20rem] ${rale.className}`}>
                        <h3 className="relative text-9xl bg-gradient-to-br from-yellow-400 p-2 rounded-3xl">
                            The
                        </h3>
                        <h3 className='text-[16rem]'>
                            Docs
                        </h3>
                    </div>
                </div>

                <div className="flex justify-between items-center px-8 w-full">
                    <p className="text-base leading-6 text-black max-w-2xl">
                        <span className='font-semibold'>Collaborate</span> seamlessly in <span className='text-red-900 font-semibold'>real time</span> with Docs’ rich text editor. Powered by AI, it helps you write faster, keep content clear, and <span className="italic">summarize your work</span> to save time and boost productivity.
                    </p>
                    <div className='mr-16'>
                        <PencilAnimation />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection
