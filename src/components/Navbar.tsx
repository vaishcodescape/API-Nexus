"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 animate-in slide-in-from-top-2 duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">


          {/* Navigation Menu */}
          <div className="hidden md:block animate-in fade-in-0 duration-700 delay-300">
            <NavigationMenu>
              <NavigationMenuList className="space-x-4">
                <NavigationMenuItem className="animate-in slide-in-from-right-4 duration-500 delay-400">
                  <NavigationMenuTrigger className="bg-black text-white hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Getting started
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              API Nexus
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Your gateway to powerful APIs and seamless integration.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105 focus:bg-accent focus:text-accent-foreground"
                            href="/docs"
                          >
                            <div className="text-sm font-medium leading-none">Documentation</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn how to integrate with our APIs.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105 focus:bg-accent focus:text-accent-foreground"
                            href="/api"
                          >
                            <div className="text-sm font-medium leading-none">API Reference</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore our comprehensive API documentation.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105 focus:bg-accent focus:text-accent-foreground"
                            href="/examples"
                          >
                            <div className="text-sm font-medium leading-none">Examples</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              See real-world examples and use cases.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="animate-in slide-in-from-right-4 duration-500 delay-500">
                  <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                </NavigationMenuItem>
                <NavigationMenuItem className="animate-in slide-in-from-right-4 duration-500 delay-600">
                  <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Link href="/pricing">Explore</Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right side - Sign In Button */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block animate-in fade-in-0 duration-700 delay-700">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
                Sign In
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden animate-in fade-in-0 duration-700 delay-400">
              <Button variant="outline" size="sm" className="border-black text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-105">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 