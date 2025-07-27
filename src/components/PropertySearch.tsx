import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface PropertySearchProps {
  onSearch: (term: string) => void
}

export function PropertySearch({ onSearch }: PropertySearchProps) {
  const [searchTerm, setSearchTerm] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md"
    >
      <Input
        type="text"
        placeholder="Search by location, type, or price"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1"
      />
      <Button type="submit">Search</Button>
    </form>
  )
}
