import React from 'react'
import { Raleway } from 'next/font/google'
import { Poiret_One } from 'next/font/google'
import PencilAnimation from './PencilAnimation'
import Image from 'next/image'

const os = Poiret_One({ subsets: ['latin'], weight: "400" })
const rale = Raleway({ subsets: ['latin'] })

const Herosection = () => {
    return (
        <div>
            <div className={`flex flex-col mt-8 ${rale.className}`}>

                <div className="flex flex-col items-center leading-24 gap-8 text-[8rem] font-light">
                    <div className='flex items-center gap-6'>
                        <span>The</span>

                        <div className="bg-black rounded-[10rem] overflow-hidden w-[240px] h-[120px] flex items-center justify-center">
                            <Image
                                src="/hand.jpeg"
                                width={240}
                                height={120}
                                alt="img"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex text-[12rem]">D <div><PencilAnimation /></div> cs</div>

                    <div className='max-w-lg text-center flex items-center justify-center'>
                        <p className='text-lg '>
                        A modern editor where intelligence meets <b>collaboration</b>. Create, <span className='text-red-900 font-semibold'>co-write</span>, and <i>summarize</i> effortlessly.
                        </p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Herosection
