 
import { Button } from "@/components/ui/button";
import {   SignInButton,   SignUpButton  } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async  function Home() {

  const { userId } = await auth()

  if(userId )  redirect("/events")
  return (
    <div className=" container flex justify-center h-full items-center flex-col text-center my-4 mx-auto ">
      <h1 className="text-xl  text-slate-800 font-bold">Create Your Calendory Account</h1>
      <div className="flex  justify-center items-center w-screen h-full my-5 gap-5">
    <Button className="bg-slate-700 text-white px-4 py-2 rounded-lg">
      
            <SignInButton />
    </Button>
    <Button className="bg-slate-700 text-white px-4 py-2 rounded-lg">
      
    <SignUpButton/>
    </Button>
          
         
            
      </div>
    </div>
  );
}
