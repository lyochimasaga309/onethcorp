import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

interface PropertyCardProps {
  image?: string
  title?: string
  location?: string
  price?: string
  description?: string
  variant?: string
  type?: "rent" | "sale" | "Villa"
}

export function PropertyCard({ image, title, location, price, type }: PropertyCardProps) {
  return (
    <div className="rounded-xl border shadow-sm overflow-hidden bg-white">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 space-y-2">
        <Badge variant={type === "rent" ? "secondary" : "default"}>
          {type === "rent" ? "For Rent" : "For Sale"}
        </Badge>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </div>
        <div className="text-xl font-bold text-blue-600">{price}</div>
        <Button className="w-full mt-2">View Details</Button>
      </div>
    </div>
  )
}
