"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { FaPlay } from "react-icons/fa"

interface ListItemProps {
  image:string,
  name: string,
  href: string
}

function ListItem({image,name,href} : ListItemProps) {
  const router = useRouter()
  const handleClick = () => {
    //todo: add authentication
    router.push(href)
  }

  return (
    <button onClick={handleClick} className="relative group flex items-center rounded-md overflow-hidden gap-x-4 w-full
     bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4">
      <div className="relative min-h-[64px] min-w-[64px]" >
      <Image className="object-cover" src={image} alt="Image" width={64} height={64} />
      </div>
      <p className="truncate py-5">{name}</p>
      <div className="absolute transition opacity-0 rounded-full grid content-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110">
        <FaPlay className="text-black" />
      </div>
    </button>
  )
}

export default ListItem