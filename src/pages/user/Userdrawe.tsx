import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
 

  


  
  const Userdrawer = () => {
    return (
      <div>
        <Sheet>
  <SheetTrigger> <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>DM</AvatarFallback>
    </Avatar> </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      
      <SheetTitle>
      <div className=" flex items-center  flex-col">

      <Avatar>
      {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}                
      <AvatarFallback className="h-10 w-10"></AvatarFallback>
    </Avatar>
    <div className="">Daniel Mututa</div>
    <div className="font-light italic">mututadaniel54@gmail.com</div>
    </div>
      </SheetTitle>
     
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
    
  </SheetContent>
</Sheet>

      </div>
    )
  }
  
  export default Userdrawer