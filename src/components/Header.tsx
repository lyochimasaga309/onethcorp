import * as React from "react"
import { Menu, Home, LogIn } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm">
      {/* Left: Logo or App Title */}
      <div className="flex items-center gap-2">
        <Home className="h-6 w-6 text-blue-600" />
        <span className="text-xl font-bold text-blue-600">Oneth Real Estate</span>
      </div>

      {/* Middle: Navigation Links */}
      <nav className="hidden md:flex gap-6">
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">Home</a>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">Rent</a>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">Buy</a>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600">Contact</a>
      </nav>

      {/* Right: Action Button */}
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm">
          <LogIn className="w-4 h-4 mr-1" />
          Login
        </Button>
        <Button size="sm">Get Started</Button>
        <Menu className="md:hidden w-6 h-6 text-gray-700 cursor-pointer" />
      </div>
    </header>
  )
}
