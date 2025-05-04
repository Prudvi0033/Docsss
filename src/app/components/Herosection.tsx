import React from 'react'
import { Raleway } from 'next/font/google'
import { Oswald } from 'next/font/google'
import PencilAnimation from './PencilAnimation'
import Image from 'next/image'

const os = Oswald({ subsets: ['latin'] })
const rale = Raleway({ subsets: ['latin'] })

const Herosection = () => {
    return (
        <div>
            <div className={`flex flex-col mt-4 ml-14 ${rale.className}`}>

                <div className="flex flex-col leading-38 items-start gap-8 text-[10rem] font-extrabold">
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

                    <span className="italic text-[14rem]">Docs</span>
                </div>

                {/* Description + Pencil */}
                <div className="flex justify-between items-center mt-12 px-8 w-full">
                    <div className="mr-16">
                        <div className="w-[85rem] h-42 rounded-3xl bg-black overflow-hidden flex items-center justify-center">
                             <Image src="/keyboard.jpeg" className='object-cover bg-black' width={1550} height={32} alt='img' />   
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection
