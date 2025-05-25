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
import Barcode from 'react-barcode';

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
];

export const users = [
    {
        id: 6020826540278,
        name: "Andrei Popescu",
        phone: "0722123456",
        email: "andrei.popescu@gmail.com",
        tickets: [
            { ticket_id: "TKT78901", flight: "W43238", date: "2025-06-15", from: "OTP", to: "ZTH", seat: "25B", class: "Economy", gate: "102A" },
            { ticket_id: "TKT78902", flight: "ROT3476", date: "2025-08-20", from: "OTP", to: "CDG", seat: "14C", class: "Business", gate: "37B" },
            { ticket_id: "TKT78903", flight: "KLM89P2", date: "2024-12-05", from: "OTP", to: "AMS", seat: "8A", class: "Economy", gate: "55A" }
        ]
    },
    {
        id: 6020826540279,
        name: "Elena Ionescu",
        phone: "0733456789",
        email: "elena.ionescu@yahoo.com",
        tickets: [
            { ticket_id: "TKT79101", flight: "BA884", date: "2025-08-10", from: "OTP", to: "LHR", seat: "12D", class: "Economy", gate: "45C" },
            { ticket_id: "TKT79102", flight: "LH1655", date: "2025-01-17", from: "OTP", to: "FRA", seat: "22F", class: "Economy", gate: "18A" }
        ]
    },
    {
        id: 6020826540280,
        name: "Mihai Georgescu",
        phone: "0744987654",
        email: "mihai.georgescu@gmail.com",
        tickets: [
            { ticket_id: "TKT80201", flight: "WZZ8KJ2", date: "2025-12-28", from: "OTP", to: "BCN", seat: "18B", class: "Economy", gate: "20B" },
            { ticket_id: "TKT80202", flight: "AFR67L9", date: "2025-05-15", from: "OTP", to: "CDG", seat: "5A", class: "Business", gate: "12C" },
            { ticket_id: "TKT80203", flight: "DLH18F3", date: "2024-11-30", from: "OTP", to: "MUC", seat: "9E", class: "Economy", gate: "28A" }
        ]
    },
    {
        id: 6020826540281,
        name: "Ioana Marinescu",
        phone: "0755321987",
        email: "ioana.marinescu@yahoo.com",
        tickets: [
            { ticket_id: "TKT81301", flight: "THY42R7", date: "2025-04-05", from: "OTP", to: "IST", seat: "15C", class: "Economy", gate: "30A" }
        ]
    },
    {
        id: 6020826540282,
        name: "Radu Vasile",
        phone: "0766654321",
        email: "radu.vasile@gmail.com",
        tickets: [
            { ticket_id: "TKT82401", flight: "RYR6Z19", date: "2025-06-20", from: "OTP", to: "MAD", seat: "30F", class: "Economy", gate: "15B" },
            { ticket_id: "TKT82402", flight: "BLA5T31", date: "2025-02-10", from: "OTP", to: "LTN", seat: "11A", class: "Economy", gate: "7C" }
        ]
    },
    {
        id: 6020826540283,
        name: "Corina Dobre",
        phone: "0777888999",
        email: "corina.dobre@yahoo.com",
        tickets: [
            { ticket_id: "TKT83501", flight: "QTR82K3", date: "2025-07-15", from: "OTP", to: "DOH", seat: "2A", class: "First", gate: "40A" },
            { ticket_id: "TKT83502", flight: "BAW84KV", date: "2025-05-05", from: "OTP", to: "LHR", seat: "7B", class: "Business", gate: "36C" },
            { ticket_id: "TKT83503", flight: "LOT23H5", date: "2025-03-12", from: "OTP", to: "WAW", seat: "19D", class: "Economy", gate: "24B" }
        ]
    },
    {
        id: 6020826540284,
        name: "Florin Petrescu",
        phone: "0788111222",
        email: "florin.petrescu@gmail.com",
        tickets: [
            { ticket_id: "TKT84601", flight: "AEE76T2", date: "2025-04-18", from: "OTP", to: "ATH", seat: "24C", class: "Economy", gate: "14A" }
        ]
    },
    {
        id: 6020826540285,
        name: "Alina Stan",
        phone: "0700333444",
        email: "alina.stan@yahoo.com",
        tickets: [
            { ticket_id: "TKT85701", flight: "AUA19P7", date: "2025-05-30", from: "OTP", to: "VIE", seat: "16E", class: "Economy", gate: "22C" },
            { ticket_id: "TKT85702", flight: "AFL56N8", date: "2025-01-25", from: "OTP", to: "SVO", seat: "3A", class: "Business", gate: "42A" }
        ]
    },
    {
        id: 6020826540286,
        name: "Victor Enache",
        phone: "0711222333",
        email: "victor.enache@gmail.com",
        tickets: [
            { ticket_id: "TKT86801", flight: "WMT6UC", date: "2025-06-10", from: "OTP", to: "BUD", seat: "21B", class: "Economy", gate: "17B" },
            { ticket_id: "TKT86802", flight: "ROT3476", date: "2025-03-05", from: "OTP", to: "FCO", seat: "10D", class: "Economy", gate: "8A" },
            { ticket_id: "TKT86803", flight: "DLH18F3", date: "2024-12-20", from: "OTP", to: "FRA", seat: "6C", class: "Business", gate: "29B" }
        ]
    },
    {
        id: 6020826540287,
        name: "Cristina Moldovan",
        phone: "0721456789",
        email: "cristina.moldovan@yahoo.com",
        tickets: [
            { ticket_id: "TKT87901", flight: "KLM89P2", date: "2025-07-28", from: "OTP", to: "AMS", seat: "4F", class: "Business", gate: "34A" }
        ]
    },
    {
        id: 6020826540288,
        name: "George Nistor",
        phone: "0732123456",
        email: "george.nistor@gmail.com",
        tickets: [
            { ticket_id: "TKT88001", flight: "THY42R7", date: "2025-04-22", from: "OTP", to: "IST", seat: "17A", class: "Economy", gate: "26C" },
            { ticket_id: "TKT88002", flight: "BA884", date: "2025-02-15", from: "OTP", to: "LHR", seat: "9C", class: "Economy", gate: "38B" }
        ]
    },
    {
        id: 6020826540289,
        name: "Simona Lupu",
        phone: "0743987321",
        email: "simona.lupu@gmail.com",
        tickets: [
            { ticket_id: "TKT89101", flight: "AFR67L9", date: "2025-06-15", from: "OTP", to: "CDG", seat: "8D", class: "Business", gate: "32A" },
            { ticket_id: "TKT89102", flight: "RYR6Z19", date: "2025-01-30", from: "OTP", to: "STN", seat: "26E", class: "Economy", gate: "11B" },
            { ticket_id: "TKT89103", flight: "BLA5T31", date: "2024-11-10", from: "OTP", to: "MXP", seat: "13F", class: "Economy", gate: "9C" }
        ]
    },
    {
        id: 6020826540290,
        name: "Adrian Barbu",
        phone: "0754321678",
        email: "adrian.barbu@yahoo.com",
        tickets: [
            { ticket_id: "TKT90201", flight: "LOT23H5", date: "2025-05-10", from: "OTP", to: "WAW", seat: "22C", class: "Economy", gate: "21A" }
        ]
    },
    {
        id: 6020826540291,
        name: "Daniela Ciobanu",
        phone: "0765654987",
        email: "daniela.ciobanu@gmail.com",
        tickets: [
            { ticket_id: "TKT91301", flight: "AEE76T2", date: "2025-07-05", from: "OTP", to: "ATH", seat: "15B", class: "Economy", gate: "19C" },
            { ticket_id: "TKT91302", flight: "AUA19P7", date: "2025-03-25", from: "OTP", to: "VIE", seat: "3D", class: "Business", gate: "44B" }
        ]
    },
    {
        id: 6020826540292,
        name: "Ionut Dima",
        phone: "0776112233",
        email: "ionut.dima@yahoo.com",
        tickets: [
            { ticket_id: "TKT92401", flight: "QTR82K3", date: "2025-04-30", from: "OTP", to: "DOH", seat: "1A", class: "First", gate: "39A" },
            { ticket_id: "TKT92402", flight: "AFL56N8", date: "2025-02-05", from: "OTP", to: "SVO", seat: "7E", class: "Business", gate: "35C" },
            { ticket_id: "TKT92403", flight: "WMT6UC", date: "2024-12-15", from: "OTP", to: "BUD", seat: "23F", class: "Economy", gate: "16B" }
        ]
    },
    {
        id: 6020826540293,
        name: "Monica Pavel",
        phone: "0787334455",
        email: "monica.pavel@gmail.com",
        tickets: [
            { ticket_id: "TKT93501", flight: "W43238", date: "2025-06-05", from: "OTP", to: "MAD", seat: "20C", class: "Economy", gate: "25A" }
        ]
    },
    {
        id: 6020826540294,
        name: "Sorin Ilie",
        phone: "0701556677",
        email: "sorin.ilie@yahoo.com",
        tickets: [
            { ticket_id: "TKT94601", flight: "WZZ8KJ2", date: "2025-05-20", from: "OTP", to: "BCN", seat: "14B", class: "Economy", gate: "13C" },
            { ticket_id: "TKT94602", flight: "ROT3476", date: "2025-01-10", from: "OTP", to: "FCO", seat: "5F", class: "Business", gate: "41B" }
        ]
    },
    {
        id: 6020826540295,
        name: "Raluca Zamfir",
        phone: "0723778899",
        email: "raluca.zamfir@gmail.com",
        tickets: [
            { ticket_id: "TKT95701", flight: "DLH18F3", date: "2025-07-10", from: "OTP", to: "MUC", seat: "12A", class: "Economy", gate: "31A" },
            { ticket_id: "TKT95702", flight: "KLM89P2", date: "2025-04-15", from: "OTP", to: "AMS", seat: "4C", class: "Business", gate: "33C" },
            { ticket_id: "TKT95703", flight: "THY42R7", date: "2025-02-28", from: "OTP", to: "IST", seat: "18D", class: "Economy", gate: "23B" }
        ]
    },
    {
        id: 6020826540296,
        name: "Paul Iacob",
        phone: "0734990011",
        email: "paul.iacob@yahoo.com",
        tickets: [
            { ticket_id: "TKT96801", flight: "BA884", date: "2025-06-25", from: "OTP", to: "LHR", seat: "16C", class: "Economy", gate: "27A" }
        ]
    },
    {
        id: 6020826540297,
        name: "Larisa Tomescu",
        phone: "0745123765",
        email: "larisa.tomescu@gmail.com",
        tickets: [
            { ticket_id: "TKT97901", flight: "AFR67L9", date: "2025-05-25", from: "OTP", to: "CDG", seat: "9B", class: "Business", gate: "37A" },
            { ticket_id: "TKT97902", flight: "RYR6Z19", date: "2025-03-18", from: "OTP", to: "DUB", seat: "25D", class: "Economy", gate: "10C" }
        ]
    },
    {
        id: 6020826540298,
        name: "Vlad Manea",
        phone: "0756543210",
        email: "vlad.manea@yahoo.com",
        tickets: [
            { ticket_id: "TKT98001", flight: "BLA5T31", date: "2025-04-10", from: "OTP", to: "LTN", seat: "19A", class: "Economy", gate: "18B" },
            { ticket_id: "TKT98002", flight: "LOT23H5", date: "2025-01-20", from: "OTP", to: "WAW", seat: "2C", class: "Business", gate: "43A" },
            { ticket_id: "TKT98003", flight: "AEE76T2", date: "2024-12-10", from: "OTP", to: "ATH", seat: "21E", class: "Economy", gate: "15C" }
        ]
    },
    {
        id: 6020826540299,
        name: "Bianca Radu",
        phone: "0767876543",
        email: "bianca.radu@gmail.com",
        tickets: [
            { ticket_id: "TKT99101", flight: "AUA19P7", date: "2025-07-20", from: "OTP", to: "VIE", seat: "11F", class: "Economy", gate: "20A" }
        ]
    },
    {
        id: 6020826540300,
        name: "Alexandru Neagu",
        phone: "0778210654",
        email: "alexandru.neagu@yahoo.com",
        tickets: [
            { ticket_id: "TKT00201", flight: "QTR82K3", date: "2025-06-30", from: "OTP", to: "DOH", seat: "1E", class: "First", gate: "38A" },
            { ticket_id: "TKT00202", flight: "AFL56N8", date: "2025-03-10", from: "OTP", to: "SVO", seat: "6B", class: "Business", gate: "36B" }
        ]
    },
    {
        id: 6020826540301,
        name: "Camelia Dragomir",
        phone: "0789432109",
        email: "camelia.dragomir@gmail.com",
        tickets: [
            { ticket_id: "TKT01301", flight: "WMT6UC", date: "2025-05-15", from: "OTP", to: "BUD", seat: "24F", class: "Economy", gate: "14C" },
            { ticket_id: "TKT01302", flight: "W43238", date: "2025-02-25", from: "OTP", to: "FCO", seat: "8E", class: "Economy", gate: "22A" },
            { ticket_id: "TKT01303", flight: "WZZ8KJ2", date: "2024-11-20", from: "OTP", to: "BCN", seat: "13C", class: "Economy", gate: "12B" }
        ]
    },
    {
        id: 6020826540302,
        name: "Marius Filip",
        phone: "0702654333",
        email: "marius.filip@yahoo.com",
        tickets: [
            { ticket_id: "TKT02401", flight: "ROT3476", date: "2025-04-25", from: "OTP", to: "CDG", seat: "17D", class: "Economy", gate: "26A" }
        ]
    },
    {
        id: 6020826540303,
        name: "Ana Bucur",
        phone: "0724987321",
        email: "ana.bucur@gmail.com",
        tickets: [
            { ticket_id: "TKT03501", flight: "DLH18F3", date: "2025-07-25", from: "OTP", to: "FRA", seat: "7D", class: "Business", gate: "30C" },
            { ticket_id: "TKT03502", flight: "KLM89P2", date: "2025-03-30", from: "OTP", to: "AMS", seat: "15A", class: "Economy", gate: "28B" }
        ]
    },
    {
        id: 6020826540304,
        name: "Dorin Cristea",
        phone: "0735123888",
        email: "dorin.cristea@yahoo.com",
        tickets: [
            { ticket_id: "TKT04601", flight: "THY42R7", date: "2025-06-15", from: "OTP", to: "IST", seat: "20E", class: "Economy", gate: "17A" },
            { ticket_id: "TKT04602", flight: "BA884", date: "2025-02-05", from: "OTP", to: "LHR", seat: "3F", class: "Business", gate: "42B" },
            { ticket_id: "TKT04603", flight: "AFR67L9", date: "2024-12-25", from: "OTP", to: "CDG", seat: "10B", class: "Economy", gate: "8C" }
        ]
    },
    {
        id: 6020826540305,
        name: "Teodora Avram",
        phone: "0746765234",
        email: "teodora.avram@gmail.com",
        tickets: [
            { ticket_id: "TKT05701", flight: "RYR6Z19", date: "2025-05-05", from: "OTP", to: "MAD", seat: "22B", class: "Economy", gate: "19A" }
        ]
    },
    {
        id: 6020826540306,
        name: "Emil Stoica",
        phone: "0757987654",
        email: "emil.stoica@yahoo.com",
        tickets: [
            { ticket_id: "TKT06801", flight: "BLA5T31", date: "2025-07-18", from: "OTP", to: "MXP", seat: "14A", class: "Economy", gate: "24A" },
            { ticket_id: "TKT06802", flight: "LOT23H5", date: "2025-04-05", from: "OTP", to: "WAW", seat: "5D", class: "Business", gate: "40B" }
        ]
    }
];

export function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

const INITIAL_VISIBLE_COLUMNS = ["id", "name", "phone", "email"];

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

        return cellValue;
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
                    <span className="text-default-400 text-small">Total {filteredItems.length} passengers</span>
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

    const getUpcomingFlight = (tickets) => {
        if (!tickets || tickets.length === 0) return null;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const upcomingTickets = tickets.filter(ticket => {
            const flightDate = new Date(ticket.date);
            return flightDate >= today;
        });

        if (upcomingTickets.length === 0) return null;

        upcomingTickets.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });

        return upcomingTickets[0];
    };

    return (
        <div>
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
                                    <h3 className="text-xl uppercase text-gray-600">Upcoming Flight</h3>
                                    {activeUser && activeUser.tickets && (() => {
                                        const upcomingFlight = getUpcomingFlight(activeUser.tickets);

                                        if (!upcomingFlight) {
                                            return (
                                                <div className="mt-4 p-4 text-center">
                                                    <p>No upcoming flights</p>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div className="w-full h-[430px] flex items-center justify-center py-4">
                                                <div className="bg-white w-[75%] h-full rounded-xl relative shadow-ticket-info">
                                                    <div className="absolute w-[50px] h-[50px] rounded-full bg-white bottom-[125px] left-[-25px] shadow-circle1"></div>
                                                    <div className="absolute w-[50px] h-[50px] rounded-full bg-white bottom-[125px] right-[-25px] shadow-circle2"></div>
                                                    <div className="absolute w-[50px] h-[50px] bg-white bottom-[125px] left-[-50px]"></div>
                                                    <div className="absolute w-[50px] h-[50px] bg-white bottom-[125px] right-[-50px]"></div>
                                                    <div className="absolute left-[25px] bottom-[150px] border-1 border-dashed w-dashed-line"></div>
                                                    <div className='h-[250px] w-full flex flex-col'>
                                                        <div className='p-6 justify-between flex'>
                                                            <div className='flex pr-6 items-center gap-2'>
                                                                <SeatIcon />
                                                                <h3 className="text-2xl">{upcomingFlight.seat}</h3>
                                                            </div>
                                                            <div className='flex pr-6 items-center gap-2'>
                                                                <h3 className="text-2xl">{upcomingFlight.from}</h3>
                                                                <FlyingPlane width="1rem" height="1rem" />
                                                                <h3 className="text-2xl">{upcomingFlight.to}</h3>
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col items-start px-12 w-full'>
                                                            <div className="grid grid-cols-2 gap-x-12 gap-y-2 w-full max-w-md">
                                                                <div>
                                                                    <div className="text-gray-600">Flight</div>
                                                                    <div className="font-medium">{upcomingFlight.flight}</div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-gray-600">Date</div>
                                                                    <div className="font-medium">
                                                                        {(() => {
                                                                            const date = new Date(upcomingFlight.date);
                                                                            const day = date.getDate();
                                                                            const month = ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()];
                                                                            const year = date.getFullYear();
                                                                            return `${day} ${month} ${year}`;
                                                                        })()}
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-gray-600">Class</div>
                                                                    <div className="font-medium">{upcomingFlight.class}</div>
                                                                </div>
                                                                <div>
                                                                    <div className="text-gray-600">Gate</div>
                                                                    <div className="font-medium">{upcomingFlight.gate}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='w-full h-[150px] flex items-center justify-center px-6'>
                                                        <div>
                                                            <Barcode value={upcomingFlight.flight + upcomingFlight.seat + activeUser.id}
                                                                displayValue={false}
                                                                className="w-full h-full" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-xl uppercase text-gray-600">All tickets</h3>
                                    <Table className="mt-4" aria-label="Example static collection table">
                                        <TableHeader>
                                            {/* <TableColumn className="uppercase">Ticket ID</TableColumn> */}
                                            <TableColumn className="uppercase">Flight</TableColumn>
                                            <TableColumn className="uppercase">Date</TableColumn>
                                            <TableColumn className="uppercase">Gate</TableColumn>
                                            <TableColumn className="uppercase">Route</TableColumn>
                                        </TableHeader>
                                        <TableBody>
                                            {
                                                activeUser.tickets.map((ticket) => (
                                                    <TableRow key={ticket.ticket_id}>
                                                        {/* <TableCell>{ticket.ticket_id}</TableCell> */}
                                                        <TableCell>{ticket.flight}</TableCell>
                                                        <TableCell>{ticket.date}</TableCell>
                                                        <TableCell>{ticket.gate}</TableCell>
                                                        <TableCell>{ticket.from} - {ticket.to}</TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </div>
                            </DrawerBody>
                        </div>
                    )}
                </DrawerContent>
            </Drawer>
        </div>
    );
}

