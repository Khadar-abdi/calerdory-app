 
 
import { Button } from '@/components/ui/button'
import { db } from '@/Drizzle/db'
 
import { auth } from '@clerk/nextjs/server'
import { CalendarCheck, CalendarPlus } from 'lucide-react'
import Link from 'next/link'
 
import React from 'react'

const page = async() => {

    const { userId, redirectToSignIn } = await auth()

    if(userId === null )  redirectToSignIn()



      const events = await db.query.EventTable.findMany({
        where: userId
        ? ({ clerkUserId }, { eq }) => eq(clerkUserId, userId)
        : undefined, // No filter if userId is null
        orderBy: ({createdAt}, {desc}) => desc(createdAt)
      })

  
  return (
    <div className="container flex   flex-col   my-4 mx-auto ">
       <div className=" flex gap-4     py-5 items-baseline   ">

        <span className="text-slate-800 font-bold text-base md:text-lg lg:text-xl xl:text-3xl ">Events</span>
          <Button asChild className="bg-slate-700 text-white  text-xs px-4 py-1 rounded-lg flex flex-row">
            <Link href={'/events/new'} className='flex flex-row gap-2  items-center'>  
            <CalendarPlus className=' text-xs'/> Add Event
            </Link>
          </Button>

       </div>
       <div className="flex flex-col gap-4 ">
        {events.length> 0 ? (<h1 className="text-slate-800 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl ">Events</h1>) : 
        
          (<div className="flex flex-col gap-4 items-center mt-20 ">
            <CalendarCheck size={60} className='opacity-60'/>
            <h1 className="text-slate-800 font-bold text-sm  ">No Events Scheduled Yet!</h1>
  
            <Button asChild className="bg-slate-700 text-white px-4 py-2 rounded-lg flex flex-row   items-center w-52">
              <Link href={'/events/new'} className='flex flex-row gap-2 items-center'>  
              <CalendarPlus/> Add Event
              </Link>
            </Button>
  
          </div>)
         
      }
    </div>
    </div>
  )
}

export default page