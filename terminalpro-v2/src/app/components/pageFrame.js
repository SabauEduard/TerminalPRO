'use client';

import ChevronDownIcon from "../icons/chevronDown";
import Sidebar from "./sidebar";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@heroui/react";

export default function PageFrame({ children }) {
    return (
        <div className="flex h-full">
            <div className="w-64">
                <Sidebar />
            </div>
            <div className="flex-1 flex-col h-full">
                <div className="w-full h-20 flex justify-end px-6">
                    <div className="h-full flex items-center">
                        <Dropdown placement="bottom-end">
                            <DropdownTrigger className="cursor-pointer">
                                <Avatar
                                    isBordered
                                    as="button"
                                    className="transition-transform"
                                    src="./woman.png"
                                />
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Profile Actions" variant="flat" disabledKeys={["profile"]}>
                                <DropdownItem key="profile" className="h-14 gap-2">
                                    <p className="font-semibold">Signed in as</p>
                                    <p className="font-semibold">user@gmail.com</p>
                                </DropdownItem>
                                <DropdownItem key="logout" color="danger">
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div className="w-full border-t-1 border-l-1 border-tp-gray-light h-full p-7 rounded-tl-[35px]">
                    {children}
                </div>
            </div>
        </div>
    );
}