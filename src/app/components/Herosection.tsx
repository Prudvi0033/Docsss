import React from 'react'
import { Raleway } from 'next/font/google'
import { Oswald } from 'next/font/google'
import PencilAnimation from './PencilAnimation'

const os = Oswald({ subsets: ['latin'] })
const rale = Raleway({ subsets: ['latin'] })

const Herosection = () => {
    return (
        <div>
            <div className={`flex flex-col leading-none mt-10 ml-12 items-start ${rale.className}`}>

                {/* Heading section */}
                <div className={`flex font-extrabold gap-x-16 text-[20rem] ${rale.className}`}>
                    <div className={`flex font-extrabold gap-x-16 text-[20rem] ${rale.className}`}>
                        <h3 className="relative text-transparent bg-clip-text" style={{
                            WebkitTextStroke: "1px black"
                        }}>
                            The
                        </h3>
                        <h1>
                            Docs
                        </h1>
                    </div>
                </div>

                <div className="flex justify-between items-center mt-12 px-8 w-full">
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
