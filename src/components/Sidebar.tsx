"use client"

import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { BiSearch } from "react-icons/bi"
import { HiHome } from "react-icons/hi"
import SidebarItem from "./SidebarItem"
import Box from "./Box"
import Library from "./Library"

interface Props {
    children: React.ReactNode
}

export default function Sidebar({children}: Props) {
    const pathName = usePathname()
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathName !== '/search',
            href: '/'
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathName === '/search',
            href: '/search'
        }
    ],[pathName])
  return (
    <div className="flex h-full">
        <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
            <Box >
                <div className="flex flex-col gap-y-4 px-5 py-4">
                    {routes.map(item => (
                        <SidebarItem key={item.label} {...item}>

                        </SidebarItem>
                    ))}
                </div>
            </Box>
            <Box className="overflow-auto h-full">
                <Library />
            </Box>
        </div>
        <main className="h-full flex-1 overflow-y-auto py-2">
            {children}
        </main>
    </div>
  )
}