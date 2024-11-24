import { SignedIn, UserButton } from '@clerk/nextjs'
import { CalendarCheck2Icon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const Header = () => {
   
    return (
        <div className="flex justify-between items-center  h-16 bg-slate-50 px-10 py-2 ">
            <Link href={'/events'} className="text-slate-800 font-bold flex flex-row gap-2 ">
            <CalendarCheck2Icon/>
            <span className=" sr-only md:not-sr-only">Calendory</span>
            </Link>
            <div className="flex gap-5 items-center ">
                <Link href={'/events'} className="text-slate-800 font-bold">Events</Link>
                <Link href={'/schedule'} className="text-800 font-bold">Schedule</Link>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    )
}

export default Header