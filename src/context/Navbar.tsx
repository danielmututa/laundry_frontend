import {
    NavigationMenu,
    NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    // NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"

 





  import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"
import Userdrawer from "@/pages/user/Userdrawe";

const Navbar = () => {
  return (
    <div className="">

<div  className="flex justify-between bg-[#36a9e1] py-2 px-[50px]">
        <div className="contact-info" style={{ display: 'flex', gap: '20px', paddingLeft: '20px' }}>
          <div><span role="img" aria-label="phone">📞</span> (323) 238-0682</div>
          <div><span role="img" aria-label="email">✉️</span> info@freshwash.co.zw</div>
        </div>
        <div className="hours-location" style={{ display: 'flex', gap: '20px', paddingRight: '20px' }}>
          <div><span role="img" aria-label="clock">🕒</span> Mon - Fri: 6:00AM - 10:00PM</div>
          <div><span role="img" aria-label="location">📍</span> 149 W 70th St, 9000 Los Angeles, CA</div>
        </div>
      </div>
    

    <div className="flex justify-between pt-5  px-[60px]">
        <Link className="flex items-center gap-2">
        <Button>🧺</Button> 
        <p className="font-bold text-2xl">FreshWash</p>
        </Link>
       
            
           
    <div className="flex items-center">
        
        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
    <NavigationMenuLink className="font-semibold cursor-pointer">Home</NavigationMenuLink>
   </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>



<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
 
   <NavigationMenuLink className="font-semibold  cursor-pointer">About</NavigationMenuLink>
   </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
        


        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="cursor-pointer">Bolg</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>


        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="cursor-pointer">Services</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>


        <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger className="cursor-pointer">Pages</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

<p>cart <span>()</span></p>


    </div>

<div className="flex gap-3 items-center">

      <Button variant="outline">
              Browse packages
            </Button>
            <Userdrawer/>
</div>

            
    </div>
    </div>
  )
}

export default Navbar