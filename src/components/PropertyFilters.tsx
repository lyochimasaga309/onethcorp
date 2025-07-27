import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface FilterProps {
  onFilter: (filters: {
    location: string
    minPrice: string
    maxPrice: string
    type: string
  }) => void
}

export function PropertyFilters({ onFilter }: FilterProps) {
  const [location, setLocation] = React.useState("")
  const [minPrice, setMinPrice] = React.useState("")
  const [maxPrice, setMaxPrice] = React.useState("")
  const [type, setType] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onFilter({ location, minPrice, maxPrice, type })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white p-4 rounded-lg shadow"
    >
      <div>
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          placeholder="e.g. Mikocheni"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="minPrice">Min Price</Label>
        <Input
          id="minPrice"
          type="number"
          placeholder="e.g. 200000"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="maxPrice">Max Price</Label>
        <Input
          id="maxPrice"
          type="number"
          placeholder="e.g. 1000000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="type">Type</Label>
        <Input
          id="type"
          placeholder="rent / sale"
          value={type}
          onChange={(e) => setType(e.targ
