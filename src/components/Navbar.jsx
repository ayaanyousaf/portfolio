import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import { cn } from "../lib/utils"

const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Education", href: "#education"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Work", href: "#work"},
    {name: "Contact", href: "#contact"},
]; 

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false); 
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener("scroll", handleScroll)
      
      return () => window.removeEventListener("scroll", handleScroll); 
    }, []); 

    return (
      <>
        <nav 
          className={cn("fixed w-full z-50 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
          )}
        >
          <div className="px-10 container flex items-center justify-between">
            <a className="text-3xl font-semibold  text-primary flex items-center" href="#home">
              <img src="/Logo.png" className="mr-3 w-12 h-12 rounded-full"/>
              <span className="font-[Allura] relative z-10">
                <span className="text-glow text-foreground"> Ayaan </span> Yousaf
              </span>
            </a>

            {/* Desktop Navbar */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item, key) => (
                  <a 
                    key={key} 
                    href={item.href} 
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </a>
              ))}
            </div>

            {/* Mobile Navbar */}
            <button onClick={() => setIsMenuOpen((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center", 
                            "transition-all duration-300 md:hidden",
                            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a 
                key={key} 
                href={item.href} 
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </>
    )
}