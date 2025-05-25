'use client';

import React from "react";
import "../globals.css";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Pagination,
    useDisclosure,
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody
} from "@heroui/react";

import SearchIcon from "../icons/search";
import VerticalDotsIcon from "../icons/verticalDots";
import ChevronDownIcon from "../icons/chevronDown";
import AirplaneIcon from "../icons/airplane";
import SeatIcon from "../icons/seat";
import FlyingPlane from "../icons/flyingPlane";

export const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NAME", uid: "name", sortable: true },
    { name: "PHONE", uid: "phone" },
    { name: "EMAIL", uid: "email" },
    { name: "ACTIONS", uid: "actions" }
];

export const users = [
    {
        id: 6020826540278,
        name: "Andrei Popescu",
        phone: "0722123456",
        email: "andrei.popescu@gmail.com",
    },
    {
        id: 6020826540279,
        name: "Elena Ionescu",
        phone: "0733456789",
        email: "elena.ionescu@yahoo.com",
    },
    {
        id: 6020826540280,
        name: "Mihai Georgescu",
        phone: "0744987654",
        email: "mihai.georgescu@gmail.com",
    },
    {
        id: 6020826540281,
        name: "Ioana Marinescu",
        phone: "0755321987",
        email: "ioana.marinescu@yahoo.com",
    },
    {
        id: 6020826540282,
        name: "Radu Vasile",
        phone: "0766654321",
        email: "radu.vasile@gmail.com",
    },
    {
        id: 6020826540283,
        name: "Corina Dobre",
        phone: "0777888999",
        email: "corina.dobre@yahoo.com",
    },
    {
        id: 6020826540284,
        name: "Florin Petrescu",
        phone: "0788111222",
        email: "florin.petrescu@gmail.com",
    },
    {
        id: 6020826540285,
        name: "Alina Stan",
        phone: "0700333444",
        email: "alina.stan@yahoo.com",
    },
    {
        id: 6020826540286,
        name: "Victor Enache",
        phone: "0711222333",
        email: "victor.enache@gmail.com",
    },
    {
        id: 6020826540287,
        name: "Cristina Moldovan",
        phone: "0721456789",
        email: "cristina.moldovan@yahoo.com"
    },
    {
        id: 6020826540288,
        name: "George Nistor",
        phone: "0732123456",
        email: "george.nistor@gmail.com"
    },
    {
        id: 6020826540289,
        name: "Simona Lupu",
        phone: "0743987321",
        email: "simona.lupu@gmail.com"
    },
    {
        id: 6020826540290,
        name: "Adrian Barbu",
        phone: "0754321678",
        email: "adrian.barbu@yahoo.com"
    },
    {
        id: 6020826540291,
        name: "Daniela Ciobanu",
        phone: "0765654987",
        email: "daniela.ciobanu@gmail.com"
    },
    {
        id: 6020826540292,
        name: "Ionut Dima",
        phone: "0776112233",
        email: "ionut.dima@yahoo.com"
    },
    {
        id: 6020826540293,
        name: "Monica Pavel",
        phone: "0787334455",
        email: "monica.pavel@gmail.com"
    },
    {
        id: 6020826540294,
        name: "Sorin Ilie",
        phone: "0701556677",
        email: "sorin.ilie@yahoo.com"
    },
    {
        id: 6020826540295,
        name: "Raluca Zamfir",
        phone: "0723778899",
        email: "raluca.zamfir@gmail.com"
    },
    {
        id: 6020826540296,
        name: "Paul Iacob",
        phone: "0734990011",
        email: "paul.iacob@yahoo.com"
    },
    {
        id: 6020826540297,
        name: "Larisa Tomescu",
        phone: "0745123765",
        email: "larisa.tomescu@gmail.com"
    },
    {
        id: 6020826540298,
        name: "Vlad Manea",
        phone: "0756543210",
        email: "vlad.manea@yahoo.com"
    },
    {
        id: 6020826540299,
        name: "Bianca Radu",
        phone: "0767876543",
        email: "bianca.radu@gmail.com"
    },
    {
        id: 6020826540300,
        name: "Alexandru Neagu",
        phone: "0778210654",
        email: "alexandru.neagu@yahoo.com"
    },
    {
        id: 6020826540301,
        name: "Camelia Dragomir",
        phone: "0789432109",
        email: "camelia.dragomir@gmail.com"
    },
    {
        id: 6020826540302,
        name: "Marius Filip",
        phone: "0702654333",
        email: "marius.filip@yahoo.com"
    },
    {
        id: 6020826540303,
        name: "Ana Bucur",
        phone: "0724987321",
        email: "ana.bucur@gmail.com"
    },
    {
        id: 6020826540304,
        name: "Dorin Cristea",
        phone: "0735123888",
        email: "dorin.cristea@yahoo.com"
    },
    {
        id: 6020826540305,
        name: "Teodora Avram",
        phone: "0746765234",
        email: "teodora.avram@gmail.com"
    },
    {
        id: 6020826540306,
        name: "Emil Stoica",
        phone: "0757987654",
        email: "emil.stoica@yahoo.com"
    }
];

export function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

const INITIAL_VISIBLE_COLUMNS = ["id", "name", "phone", "email", "actions"];

export default function Passengers() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [activeUser, setActiveUser] = React.useState(null);
    const [filterValue, setFilterValue] = React.useState("");
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "name",
        direction: "ascending",
    });
    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredUsers = [...users];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.name.toLowerCase().includes(filterValue.toLowerCase()) ||
                user.phone.toLowerCase().includes(filterValue.toLowerCase()) ||
                user.email.toLowerCase().includes(filterValue.toLocaleLowerCase())
            );
        }

        return filteredUsers;
    }, [users, filterValue]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage) || 1;

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <h2>{user.name}</h2>
                );
            case "actions":
                return (
                    <div className="relative flex justify-end items-center gap-2">
                        <Dropdown>
                            <DropdownTrigger>
                                <Button isIconOnly size="sm" variant="light">
                                    <VerticalDotsIcon className="text-default-300" />
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                                <DropdownItem key="view">View</DropdownItem>
                                <DropdownItem key="edit">Edit</DropdownItem>
                                <DropdownItem key="delete">Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    const onRowsPerPageChange = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("");
        setPage(1);
    }, []);

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by name, phone, email or ID..."
                        startContent={<SearchIcon />}
                        radius='sm'
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button className='bg-tp-blue-light' radius="sm" endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                                    Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                radius='sm'
                                selectionMode="multiple"
                                onSelectionChange={setVisibleColumns}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {capitalize(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {users.length} passengers</span>
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [
        filterValue,
        visibleColumns,
        onRowsPerPageChange,
        users.length,
        onSearchChange,
        hasSearchFilter,
    ]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-center items-center">
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="secondary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                    radius="sm"
                />
            </div>
        );
    }, [items.length, page, pages, hasSearchFilter]);

    return (
        <div className="min-h-screen">
            <h1 className="text-gray-600 text-3xl pb-8">PASSENGERS</h1>
            <Table
                isHeaderSticky
                aria-label="Table with registered passengers"
                bottomContent={bottomContent}
                radius="sm"
                bottomContentPlacement="outside"
                classNames={{
                    wrapper: "max-h-full",
                }}
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                onSortChange={setSortDescriptor}
            >
                <TableHeader radius='sm' columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            rad
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={"No users found"} items={sortedItems}>
                    {(item) => (
                        <TableRow
                            onClick={() => {
                                setActiveUser(item);
                                onOpen();
                            }}
                            // onPress={onOpen}
                            key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Drawer isOpen={isOpen} onOpenChange={onOpenChange} className="z-1000 " disableAnimation="true" size="xl">
                <DrawerContent className="h-full">
                    {(onClose) => (
                        <div className="p-6">
                            <DrawerHeader>
                                <div className="w-full flex justify-between items-center">
                                    <h2 className="text-2xl uppercase">{activeUser.name}</h2>
                                    <Button radius="sm" className="bg-tp-blue-light">EDIT</Button>
                                </div>
                            </DrawerHeader>
                            <DrawerBody className="h-full">
                                <div className="flex flex-col items-center">
                                    <div className="flex w-full">
                                        <div className="w-18 font-medium">Id:</div>
                                        <div>{activeUser.id}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-18 font-medium">Name:</div>
                                        <div>{activeUser.name}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-18 font-medium">Phone:</div>
                                        <div>{activeUser.phone}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-18 font-medium">Email:</div>
                                        <div>{activeUser.email}</div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-xl uppercase text-gray-600">Latest ticket</h3>
                                    <div className="w-full h-[430px] flex items-center justify-center py-4">
                                        <div className="bg-white w-[75%] h-full rounded-xl relative shadow-ticket-info">
                                            <div className="absolute w-[50px] h-[50px] rounded-full bg-white bottom-[125px] left-[-25px] shadow-circle1"></div>
                                            <div className="absolute w-[50px] h-[50px] rounded-full bg-white bottom-[125px] right-[-25px] shadow-circle2"></div>
                                            <div className="absolute w-[50px] h-[50px] bg-white bottom-[125px] left-[-50px]"></div>
                                            <div className="absolute w-[50px] h-[50px] bg-white bottom-[125px] right-[-50px]"></div>
                                            <div className="absolute left-[25px] bottom-[150px] border-1 border-dashed w-dashed-line"></div>
                                            <div className='h-[275px] w-full flex flex-col'>
                                                <div className='p-6 justify-between flex'>
                                                    <div className='flex pr-6 items-center gap-2'>
                                                        <SeatIcon />
                                                        <h3 className="text-2xl">25B</h3>
                                                    </div>
                                                    <div className='flex pr-6 items-center gap-2'>
                                                        <h3 className="text-2xl">OTP</h3>
                                                        <FlyingPlane width="1rem" height="1rem" />
                                                        <h3 className="text-2xl">ZTH</h3>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col items-start px-12 w-full'>
                                                    <div className="grid grid-cols-2 gap-x-12 gap-y-2 w-full max-w-md">
                                                        <div>
                                                            <div className="text-gray-600">Flight</div>
                                                            <div className="font-medium">W43238</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-gray-600">Date</div>
                                                            <div className="font-medium">15 Mar 2025</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-gray-600">Class</div>
                                                            <div className="font-medium">Economy</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-gray-600">Gate</div>
                                                            <div className="font-medium">102A</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='w-full h-[125px] bottom-0 flex items-center justify-center'>
                                                <img src="/cod_bare.png" alt="Ticket" width={250} height={150} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-xl uppercase text-gray-600">All tickets</h3>
                                </div>
                            </DrawerBody>
                        </div>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
}

