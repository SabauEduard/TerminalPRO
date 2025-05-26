'use client';

import React, { useEffect } from "react";
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
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Autocomplete,
    AutocompleteItem,
    useDisclosure,
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody
} from "@heroui/react";

import SearchIcon from "../icons/search";
import VerticalDotsIcon from "../icons/verticalDots";
import ChevronDownIcon from "../icons/chevronDown";
import airlines_list from "../data/airlines.json";
import { on } from "events";

export const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "NAME", uid: "name", sortable: true },
    { name: "PHONE", uid: "phone" },
    { name: "EMAIL", uid: "email" },
    { name: "ROLE", uid: "role", sortable: true },
    { name: "AIRLINE", uid: "airline", sortable: true }
];

export const users = [
    {
        "id": "2980101123456",
        "name": "Andreea Popescu",
        "phone": "0723456789",
        "email": "andreea.popescu@tarom.ro",
        "role": "Flight Attendant",
        "airline": "TAROM",
        "flights": [
            {
                "flightNumber": "RO301",
                "departure": "OTP",
                "destination": "LHR",
                "date": "2025-06-02"
            },
            {
                "flightNumber": "RO315",
                "departure": "LHR",
                "destination": "AMS",
                "date": "2025-06-04"
            }
        ]
    },
    {
        "id": "2970522123457",
        "name": "Mihai Ionescu",
        "phone": "0741987456",
        "email": "mihai.ionescu@tarom.ro",
        "role": "First Officer",
        "airline": "TAROM",
        "flights": [
            {
                "flightNumber": "RO401",
                "departure": "OTP",
                "destination": "CDG",
                "date": "2025-06-01"
            },
            {
                "flightNumber": "RO405",
                "departure": "CDG",
                "destination": "FCO",
                "date": "2025-06-03"
            }
        ]
    },
    {
        "id": "2991205123458",
        "name": "Elena Radu",
        "phone": "0763125478",
        "email": "elena.radu@blueair.ro",
        "role": "Flight Attendant",
        "airline": "Blue Air",
        "flights": [
            {
                "flightNumber": "0B123",
                "departure": "OTP",
                "destination": "MAD",
                "date": "2025-06-02"
            },
            {
                "flightNumber": "0B124",
                "departure": "MAD",
                "destination": "BCN",
                "date": "2025-06-04"
            }
        ]
    },
    {
        "id": "1960314123459",
        "name": "Radu Marinescu",
        "phone": "0734872154",
        "email": "radu.marinescu@carpatair.ro",
        "role": "Captain",
        "airline": "Carpatair",
        "flights": [
            {
                "flightNumber": "V3315",
                "departure": "CLJ",
                "destination": "FRA",
                "date": "2025-06-03"
            },
            {
                "flightNumber": "V3320",
                "departure": "FRA",
                "destination": "OTP",
                "date": "2025-06-05"
            }
        ]
    },
    {
        "id": "2000601123460",
        "name": "Ioana Dobre",
        "phone": "0786234981",
        "email": "ioana.dobre@hiSky.ro",
        "role": "Flight Attendant",
        "airline": "HiSky",
        "flights": [
            {
                "flightNumber": "H4287",
                "departure": "IAS",
                "destination": "STN",
                "date": "2025-06-02"
            },
            {
                "flightNumber": "H4291",
                "departure": "STN",
                "destination": "OTP",
                "date": "2025-06-04"
            },
        ]
    },
    {
        "id": "2980301123456",
        "name": "Ana Georgescu",
        "phone": "0723456781",
        "email": "ana.georgescu@tarom.ro",
        "role": "Flight Attendant",
        "airline": "TAROM",
        "flights": [
            {
                "flightNumber": "RO101",
                "departure": "OTP",
                "destination": "VIE",
                "date": "2025-06-01"
            },
            {
                "flightNumber": "RO102",
                "departure": "VIE",
                "destination": "OTP",
                "date": "2025-06-02"
            },
            {
                "flightNumber": "RO205",
                "departure": "OTP",
                "destination": "ATH",
                "date": "2025-06-03"
            }
        ]
    },
    {
        "id": "1950415123457",
        "name": "George Enache",
        "phone": "0745896321",
        "email": "george.enache@tarom.ro",
        "role": "Captain",
        "airline": "TAROM",
        "flights": [
            {
                "flightNumber": "RO301",
                "departure": "OTP",
                "destination": "LHR",
                "date": "2025-06-01"
            },
            {
                "flightNumber": "RO302",
                "departure": "LHR",
                "destination": "OTP",
                "date": "2025-06-02"
            },
            {
                "flightNumber": "RO404",
                "departure": "OTP",
                "destination": "CDG",
                "date": "2025-06-05"
            }
        ]
    },
    {
        "id": "2991108123458",
        "name": "Cristina Dinu",
        "phone": "0754321896",
        "email": "cristina.dinu@blueair.ro",
        "role": "First Officer",
        "airline": "Blue Air",
        "flights": [
            {
                "flightNumber": "0B208",
                "departure": "OTP",
                "destination": "MXP",
                "date": "2025-06-01"
            },
            {
                "flightNumber": "0B209",
                "departure": "MXP",
                "destination": "OTP",
                "date": "2025-06-02"
            },
            {
                "flightNumber": "0B210",
                "departure": "OTP",
                "destination": "AMS",
                "date": "2025-06-04"
            }
        ]
    },
    {
        "id": "2000122123459",
        "name": "Iulian Vasilescu",
        "phone": "0768541297",
        "email": "iulian.vasilescu@carpatair.ro",
        "role": "Captain",
        "airline": "Carpatair",
        "flights": [
            {
                "flightNumber": "V3301",
                "departure": "TSR",
                "destination": "FRA",
                "date": "2025-06-01"
            },
            {
                "flightNumber": "V3302",
                "departure": "FRA",
                "destination": "TSR",
                "date": "2025-06-02"
            },
            {
                "flightNumber": "V3303",
                "departure": "TSR",
                "destination": "ZRH",
                "date": "2025-06-03"
            },
            {
                "flightNumber": "V3304",
                "departure": "ZRH",
                "destination": "TSR",
                "date": "2025-06-04"
            }
        ]
    },
    {
        "id": "2960726123460",
        "name": "Sorina Badea",
        "phone": "0773928451",
        "email": "sorina.badea@hisky.ro",
        "role": "Flight Attendant",
        "airline": "HiSky",
        "flights": [
            {
                "flightNumber": "H4102",
                "departure": "OTP",
                "destination": "TLV",
                "date": "2025-06-02"
            },
            {
                "flightNumber": "H4103",
                "departure": "TLV",
                "destination": "OTP",
                "date": "2025-06-03"
            },
            {
                "flightNumber": "H4110",
                "departure": "OTP",
                "destination": "LGW",
                "date": "2025-06-05"
            },
            {
                "flightNumber": "H4111",
                "departure": "LGW",
                "destination": "OTP",
                "date": "2025-06-06"
            }
        ]
    }
];

export const PlusIcon = ({ size = 24, width, height, ...props }) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            role="presentation"
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            >
                <path d="M6 12h12" />
                <path d="M12 18V6" />
            </g>
        </svg>
    );
};

export function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

const INITIAL_VISIBLE_COLUMNS = ["id", "name", "phone", "email", "role", "airline"];

export default function Crew() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [activeUser, setActiveUser] = React.useState(null);
    const [filterValue, setFilterValue] = React.useState("");
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const { isOpen: isOpenModal, onOpen: onOpenModal, onOpenChange: onOpenChangeModal } = useDisclosure();
    const [userList, setUserList] = React.useState(users);

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
        let filteredUsers = [...userList];

        if (hasSearchFilter) {
            filteredUsers = filteredUsers.filter((user) =>
                user.name.toLowerCase().includes(filterValue.toLowerCase()) ||
                user.phone.toLowerCase().includes(filterValue.toLowerCase()) ||
                user.email.toLowerCase().includes(filterValue.toLowerCase()) ||
                user.phone.toLowerCase().includes(filterValue.toLowerCase()) ||
                user.role.toLowerCase().includes(filterValue.toLowerCase()) ||
                user.airline.toLowerCase().includes(filterValue.toLowerCase())
            );
        }

        return filteredUsers;
    }, [userList, filterValue]);

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
                        placeholder="Search by name, phone, email, ID, role or airline..."
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
                        <Button color="secondary" endContent={<PlusIcon />} onPress={onOpenModal}>
                            Add New
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {filteredItems.length} crew members</span>
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
        userList.length,
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

    useEffect(() => {
    }, [users]);

    return (
        <div>
            <h1 className="text-gray-600 text-3xl pb-8">CREW MEMBERS</h1>
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
                            className="cursor-pointer hover:bg-zinc-100 h-14"
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
                                    <div className="flex w-full">
                                        <div className="w-18 font-medium">Role:</div>
                                        <div>{activeUser.role}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-18 font-medium">Airline:</div>
                                        <div>{activeUser.airline}</div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-xl uppercase text-gray-600">Previous flights</h3>
                                    {
                                        activeUser.flights.length === 0
                                            ?
                                            <div className="mt-4 p-4 text-center">
                                                <p>No previous flights found for this crew member.</p>
                                            </div>
                                            : <Table className="mt-4" aria-label="Previous flights for crew member">
                                                <TableHeader>
                                                    {/* <TableColumn className="uppercase">Ticket ID</TableColumn> */}
                                                    <TableColumn className="uppercase">Flight</TableColumn>
                                                    <TableColumn className="uppercase">Departure</TableColumn>
                                                    <TableColumn className="uppercase">Destination</TableColumn>
                                                    <TableColumn className="uppercase">Date</TableColumn>
                                                </TableHeader>
                                                <TableBody>
                                                    {
                                                        activeUser.flights.map((flight) => (
                                                            <TableRow key={flight.flightNumber}>
                                                                <TableCell>{flight.flightNumber}</TableCell>
                                                                <TableCell>{flight.departure}</TableCell>
                                                                <TableCell>{flight.destination}</TableCell>
                                                                <TableCell>{flight.date}</TableCell>
                                                            </TableRow>
                                                        ))
                                                    }
                                                </TableBody>
                                            </Table>
                                    }
                                </div>
                            </DrawerBody>
                        </div>
                    )}
                </DrawerContent>
            </Drawer>
            <Modal isOpen={isOpenModal} backdrop="blur" size="3xl" placement="top-center" onOpenChange={onOpenChangeModal}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h1 className="text-gray-600 text-2xl font-medium pb-8">ADD CREW MEMBER</h1>
                            </ModalHeader>
                            <ModalBody>
                                <Form className="w-full flex flex-col gap-4"
                                    onReset={() => setAction("reset")}
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        let data = Object.fromEntries(new FormData(e.currentTarget));
                                        data["flights"] = [];

                                        setUserList(prev => [...prev, data]);
                                        onClose();
                                    }}
                                >
                                    <div className="w-full flex gap-4 flex-row">
                                        <Input
                                            isRequired
                                            name="id"
                                            label="ID"
                                            labelPlacement="outside"
                                            placeholder="Enter crew member's ID (e.g. 2991205123458)"
                                            type="number"
                                        />
                                        <Input
                                            isRequired
                                            name="name"
                                            label="Name"
                                            labelPlacement="outside"
                                            placeholder="Enter crew member's name (e.g. Elena Radu)"
                                        />
                                    </div>
                                    <div className="w-full flex gap-4 flex-row">
                                        <Input
                                            isRequired
                                            name="email"
                                            label="Email"
                                            labelPlacement="outside"
                                            placeholder="Enter crew member's email"
                                            type="email"
                                        />
                                        <Input
                                            isRequired
                                            name="phone"
                                            label="Phone"
                                            labelPlacement="outside"
                                            placeholder="Enter crew member's phone number"
                                            type="number"
                                        />
                                    </div>
                                    <div className="w-full flex gap-4 flex-row">
                                        <Autocomplete
                                            isRequired
                                            label="Airline"
                                            name="airline"
                                            labelPlacement="outside"
                                            placeholder="Select crew member's airline"
                                        >
                                            {
                                                airlines_list.map((airline) => (
                                                    <AutocompleteItem key={airline.id}>{airline.name}</AutocompleteItem>
                                                ))
                                            }
                                        </Autocomplete>
                                        <Autocomplete
                                            isRequired
                                            label="Role"
                                            name="role"
                                            labelPlacement="outside"
                                            placeholder="Select crew member's role"
                                        >
                                            <AutocompleteItem>Flight Attendant</AutocompleteItem>
                                            <AutocompleteItem>First Officer</AutocompleteItem>
                                            <AutocompleteItem>Captain</AutocompleteItem>
                                        </Autocomplete>
                                    </div>
                                    <div className="flex justify-end w-full pt-8 gap-4">
                                        <Button color="default" type="reset" variant="flat">
                                            Reset
                                        </Button>
                                        <Button type="submit" color="secondary">
                                            Add Crew Member
                                        </Button>
                                    </div>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}

