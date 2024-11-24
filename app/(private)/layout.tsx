import Header from "@/components/Header";

export default async  function AuthLayout( {children}:{children:React.ReactNode}) {
    return (
        <>
            <Header/>
            <main  className=" container ">

          {children}
            </main>
         
            
        </>
    )
}