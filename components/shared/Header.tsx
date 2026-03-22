import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"


import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

const Header = () => {
  return (
    <header className="w-full border-b bg-white py-4 md:h-20 md:py-0"> 
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-5 lg:px-20">
        
        {/* DESKTOP LOGO */}
        <Link href="/" className="relative h-14 w-40 shrink-0">
          <Image 
            src="/3d.png" 
            alt="Zho-Zho Entertainments Logo" 
            fill
            priority 
            className="object-contain object-left md:object-center" 
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <Link href="/mission" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Mission
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/vision" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Vision
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/purpose" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Purpose
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/objectives" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Objectives
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* MOBILE NAVIGATION */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="p-2 transition-opacity hover:opacity-70">
              <Menu className="h-7 w-7" />
            </SheetTrigger>
            
            <SheetContent side="right" className="flex flex-col sm:w-72">
              
             
              <SheetHeader className="mb-4 border-b pb-4 pt-2">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle> 
                <SheetClose asChild>
                  <Link href="/" className="relative h-12 w-32 shrink-0">
                    <Image 
                      src="/3d.png" 
                      alt="Zho-Zho Entertainments Logo" 
                      fill
                      className="object-contain object-left" 
                    />
                  </Link>
                </SheetClose>
              </SheetHeader>

             
              <div className="flex flex-col gap-6 pt-2">
                <SheetClose asChild>
                  <Link href="/mission" className="text-lg font-medium transition-colors hover:text-primary">
                    Mission
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link href="/vision" className="text-lg font-medium transition-colors hover:text-primary">
                    Vision
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link href="/purpose" className="text-lg font-medium transition-colors hover:text-primary">
                    Purpose
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link href="/objectives" className="text-lg font-medium transition-colors hover:text-primary">
                    Objectives
                  </Link>
                </SheetClose>
              </div>

            </SheetContent>
          </Sheet>
        </div>
            
      </div>
    </header>
  )
}

export default Header