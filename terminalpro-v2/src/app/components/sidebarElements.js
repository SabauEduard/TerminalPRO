'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HomeIcon from '../icons/home';
import AirplaneIcon from '../icons/airplane';
import TicketIcon from '../icons/ticket';
import PassengersIcon from '../icons/passengers';
import CrewIcon from '../icons/crew';

export default function SidebarElements() {
    const pathname = usePathname();

    const sidebarElements = [
        { name: "Home", icon: <HomeIcon color="currentColor" />, href: "/" },
        { name: "Airplanes", icon: <AirplaneIcon color="currentColor" />, href: "/airplanes" },
        { name: "Flights", icon: <TicketIcon color="currentColor" />, href: "/flights" },
        { name: "Passengers", icon: <PassengersIcon color="currentColor" />, href: "/passengers" },
        { name: "Crew", icon: <CrewIcon color="currentColor" />, href: "/crew" },
    ];

    return (
        <div className="flex flex-col mt-8 gap-1 items-center">
            {sidebarElements.map((element, index) => (
                <div key={index} className="w-full">
                    <Link
                        href={element.href}
                        className={`${pathname === element.href ? 'bg-tp-purple-medium text-white' : 'text-gray-700'} flex w-full items-center gap-3 p-3 hover:bg-tp-purple-medium/[0.85] hover:text-white focus:bg-tp-purple-dark focus:text-white rounded-md cursor-pointer`}
                    >
                        {element.icon}
                        <span>{element.name}</span>
                    </Link>
                    {index < sidebarElements.length - 1 && <div className="h-[1px] w-[60%] bg-tp-gray-light/[0.5]"></div>}
                </div>
            ))}
        </div>
    )
}