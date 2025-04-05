export default function FoodWasteGallery() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
        <img
          src="/placeholder.svg?height=400&width=400"
          alt="Fresh produce being sorted"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
        <img
          src="/placeholder.svg?height=400&width=400"
          alt="Volunteers distributing food"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
        <img
          src="/placeholder.svg?height=400&width=400"
          alt="Food waste reduction technology"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
        <img
          src="/placeholder.svg?height=400&width=400"
          alt="Community food sharing event"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}

