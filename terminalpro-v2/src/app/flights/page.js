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
    DropdownSection,

    Pagination,
    useDisclosure,
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    Autocomplete,
    AutocompleteItem
} from "@heroui/react";

import SearchIcon from "../icons/search";
import ChevronDownIcon from "../icons/chevronDown";
import PlusIcon from "../icons/plus";
import airplanes_list from "../data/aircrafts.json";
import airlines_list from "../data/airlines.json";
import { on } from "events";

export const columns = [
    { name: "Duration", uid: "duration", sortable: true },
    { name: "ID", uid: "id", sortable: true },
    { name: "Airline", uid: "airline", sortable: true },
    { name: "Aircraft", uid: "aircraft", sortable: true },
    { name: "Flight Number", uid: "flight_number", sortable: true },
    { name: "Origin", uid: "origin", sortable: true },
    { name: "Departure Time", uid: "departure_time", sortable: true },
    { name: "Departure Gate", uid: "departure_gate", sortable: true },
    { name: "Destination", uid: "destination", sortable: true },
    { name: "Arrival Time", uid: "arrival_time", sortable: true },
    { name: "Arrival Gate", uid: "arrival_gate", sortable: true },
];

export const flights = [
    {
        id: "1",
        airline: "TAROM",
        aircraft: "Boeing 737-800",
        flight_number: "RO302",
        origin: "OTP",
        departure_time: "2025-05-25T08:30:00",
        departure_gate: "12A",
        destination: "LHR",
        arrival_time: "2025-05-25T10:15:00",
        arrival_gate: "43B",
        crew: [
            { name: "Alexandru Munteanu", role: "Captain" },
            { name: "Elena Popescu", role: "First Officer" },
            { name: "Maria Ionescu", role: "Cabin Chief" },
            { name: "Andrei Dima", role: "Flight Attendant" },
            { name: "Ioana Popa", role: "Flight Attendant" }
        ],
    },
    {
        id: "2",
        airline: "Wizz Air",
        aircraft: "Airbus A320-200",
        flight_number: "W43238",
        origin: "OTP",
        departure_time: "2025-05-25T09:45:00",
        departure_gate: "15C",
        destination: "BCN",
        arrival_time: "2025-05-25T12:10:00",
        arrival_gate: "T1-32",
        crew: [
            { name: "Victor Stanescu", role: "Captain" },
            { name: "Cristina Barbu", role: "First Officer" },
            { name: "Adrian Manole", role: "Cabin Chief" },
            { name: "Sorina Dumitrescu", role: "Flight Attendant" }
        ],
    },
    {
        id: "3",
        airline: "KLM",
        aircraft: "Embraer E190",
        flight_number: "KLM89P2",
        origin: "OTP",
        departure_time: "2025-05-25T11:20:00",
        departure_gate: "22B",
        destination: "AMS",
        arrival_time: "2025-05-25T13:45:00",
        arrival_gate: "D57",
        crew: [
            { name: "Jan Visser", role: "Captain" },
            { name: "Laura van der Berg", role: "First Officer" },
            { name: "Mihai Petrescu", role: "Cabin Chief" },
            { name: "Diana Vasilescu", role: "Flight Attendant" },
            { name: "Paul Schmidt", role: "Flight Attendant" }
        ],
    },
    {
        id: "4",
        airline: "Lufthansa",
        aircraft: "Airbus A321neo",
        flight_number: "LH1655",
        origin: "OTP",
        departure_time: "2025-05-25T13:10:00",
        departure_gate: "18A",
        destination: "FRA",
        arrival_time: "2025-05-25T14:50:00",
        arrival_gate: "A26",
        crew: [
            { name: "Klaus Müller", role: "Captain" },
            { name: "Ana Schmidt", role: "First Officer" },
            { name: "Jurgen Weber", role: "Cabin Chief" },
            { name: "Gabriela Pană", role: "Flight Attendant" },
            { name: "Thomas Neumann", role: "Flight Attendant" }
        ],
    },
    {
        id: "5",
        airline: "British Airways",
        aircraft: "Boeing 787-9",
        flight_number: "BA884",
        origin: "OTP",
        departure_time: "2025-05-25T14:30:00",
        departure_gate: "24A",
        destination: "LHR",
        arrival_time: "2025-05-25T16:15:00",
        arrival_gate: "T5-C56",
        crew: [
            { name: "James Williams", role: "Captain" },
            { name: "Sarah Mitchell", role: "First Officer" },
            { name: "Robert Taylor", role: "Cabin Chief" },
            { name: "Alexandra Dragomir", role: "Flight Attendant" },
            { name: "George Brown", role: "Flight Attendant" },
            { name: "Emma Watson", role: "Flight Attendant" }
        ],
    },
    {
        id: "6",
        airline: "Air France",
        aircraft: "Airbus A320-200",
        flight_number: "AFR67L9",
        origin: "OTP",
        departure_time: "2025-05-25T15:45:00",
        departure_gate: "16B",
        destination: "CDG",
        arrival_time: "2025-05-25T18:00:00",
        arrival_gate: "2F-32",
        crew: [
            { name: "Pierre Dubois", role: "Captain" },
            { name: "Sophie Martin", role: "First Officer" },
            { name: "Jean-Claude Petit", role: "Cabin Chief" },
            { name: "Corina Andreescu", role: "Flight Attendant" },
            { name: "Marc Leclerc", role: "Flight Attendant" }
        ],
    },
    {
        id: "7",
        airline: "Turkish Airlines",
        aircraft: "Airbus A330-300",
        flight_number: "THY42R7",
        origin: "OTP",
        departure_time: "2025-05-25T17:20:00",
        departure_gate: "23B",
        destination: "IST",
        arrival_time: "2025-05-25T19:00:00",
        arrival_gate: "F12",
        crew: [
            { name: "Ahmet Yilmaz", role: "Captain" },
            { name: "Nur Celik", role: "First Officer" },
            { name: "Serkan Demir", role: "Cabin Chief" },
            { name: "Deniz Kaya", role: "Flight Attendant" },
            { name: "Irina Novak", role: "Flight Attendant" },
            { name: "Elena Radulescu", role: "Flight Attendant" }
        ],
    },
    {
        id: "8",
        airline: "Ryanair",
        aircraft: "Boeing 737-800",
        flight_number: "RYR6Z19",
        origin: "OTP",
        departure_time: "2025-05-25T18:45:00",
        departure_gate: "8C",
        destination: "STN",
        arrival_time: "2025-05-25T20:30:00",
        arrival_gate: "43",
        crew: [
            { name: "Michael O'Leary", role: "Captain" },
            { name: "Catherine Walsh", role: "First Officer" },
            { name: "Dorin Radu", role: "Cabin Chief" },
            { name: "Anamaria Stoica", role: "Flight Attendant" }
        ],
    },
    {
        id: "9",
        airline: "TAROM",
        aircraft: "ATR 72-600",
        flight_number: "ROT3476",
        origin: "OTP",
        departure_time: "2025-05-25T19:30:00",
        departure_gate: "10A",
        destination: "SBZ",
        arrival_time: "2025-05-25T20:25:00",
        arrival_gate: "3",
        crew: [
            { name: "Marius Popescu", role: "Captain" },
            { name: "Ioana Marinescu", role: "First Officer" },
            { name: "Daniel Ursu", role: "Cabin Chief" },
            { name: "Simona Florescu", role: "Flight Attendant" }
        ],
    },
    {
        id: "10",
        airline: "LOT Polish Airlines",
        aircraft: "Embraer E195",
        flight_number: "LOT23H5",
        origin: "OTP",
        departure_time: "2025-05-25T20:15:00",
        departure_gate: "14D",
        destination: "WAW",
        arrival_time: "2025-05-25T21:45:00",
        arrival_gate: "N23",
        crew: [
            { name: "Tomasz Kowalski", role: "Captain" },
            { name: "Agnieszka Nowak", role: "First Officer" },
            { name: "Piotr Wójcik", role: "Cabin Chief" },
            { name: "Nicoleta Matei", role: "Flight Attendant" }
        ],
    },
    {
        id: "11",
        airline: "Aegean Airlines",
        aircraft: "Airbus A320neo",
        flight_number: "AEE76T2",
        origin: "OTP",
        departure_time: "2025-05-25T21:40:00",
        departure_gate: "17A",
        destination: "ATH",
        arrival_time: "2025-05-25T23:15:00",
        arrival_gate: "A12",
        crew: [
            { name: "Georgios Papadopoulos", role: "Captain" },
            { name: "Eleni Dimitriou", role: "First Officer" },
            { name: "Mihail Antonescu", role: "Cabin Chief" },
            { name: "Sofia Karagianni", role: "Flight Attendant" },
            { name: "Catalin Nistor", role: "Flight Attendant" }
        ],
    },
    {
        id: "12",
        airline: "Qatar Airways",
        aircraft: "Boeing 777-300ER",
        flight_number: "QTR82K3",
        origin: "OTP",
        departure_time: "2025-05-25T22:50:00",
        departure_gate: "21B",
        destination: "DOH",
        arrival_time: "2025-05-26T05:30:00",
        arrival_gate: "C8",
        crew: [
            { name: "Mohammed Al-Thani", role: "Captain" },
            { name: "Fatima Khalid", role: "First Officer" },
            { name: "Abdul Rahman", role: "Senior First Officer" },
            { name: "Aisha Abdullah", role: "Cabin Chief" },
            { name: "Bogdan Mihai", role: "Flight Attendant" },
            { name: "Raluca Nedelcu", role: "Flight Attendant" },
            { name: "Omar Farooq", role: "Flight Attendant" },
            { name: "Layla Hassan", role: "Flight Attendant" }
        ],
    },
    {
        id: "13",
        airline: "Wizz Air",
        aircraft: "Airbus A321neo",
        flight_number: "WZZ8KJ2",
        origin: "OTP",
        departure_time: "2025-05-26T06:15:00",
        departure_gate: "9D",
        destination: "LTN",
        arrival_time: "2025-05-26T08:00:00",
        arrival_gate: "32",
        crew: [
            { name: "Liviu Mihăilescu", role: "Captain" },
            { name: "Teodora Ionescu", role: "First Officer" },
            { name: "Madalina Bucur", role: "Cabin Chief" },
            { name: "Razvan Stancu", role: "Flight Attendant" },
            { name: "Andreea Popa", role: "Flight Attendant" }
        ],
    },
    {
        id: "14",
        airline: "Austrian Airlines",
        aircraft: "Embraer E195",
        flight_number: "AUA19P7",
        origin: "OTP",
        departure_time: "2025-05-26T07:30:00",
        departure_gate: "12B",
        destination: "VIE",
        arrival_time: "2025-05-26T08:45:00",
        arrival_gate: "F14",
        crew: [
            { name: "Franz Huber", role: "Captain" },
            { name: "Claudia Bauer", role: "First Officer" },
            { name: "Stefan Wagner", role: "Cabin Chief" },
            { name: "Iulia Stanescu", role: "Flight Attendant" }
        ],
    },
    {
        id: "15",
        airline: "Blue Air",
        aircraft: "Boeing 737-800",
        flight_number: "BLA5T31",
        origin: "OTP",
        departure_time: "2025-05-26T08:50:00",
        departure_gate: "11C",
        destination: "MXP",
        arrival_time: "2025-05-26T10:30:00",
        arrival_gate: "B12",
        crew: [
            { name: "Alexandru Preda", role: "Captain" },
            { name: "Adriana Niculescu", role: "First Officer" },
            { name: "Cristian Dobre", role: "Cabin Chief" },
            { name: "Mirela Dumitrache", role: "Flight Attendant" },
            { name: "Vlad Georgescu", role: "Flight Attendant" }
        ],
    },
    {
        id: "16",
        airline: "Aeroflot",
        aircraft: "Airbus A320-200",
        flight_number: "AFL56N8",
        origin: "OTP",
        departure_time: "2025-05-26T10:15:00",
        departure_gate: "19A",
        destination: "SVO",
        arrival_time: "2025-05-26T13:30:00",
        arrival_gate: "E42",
        crew: [
            { name: "Sergei Petrov", role: "Captain" },
            { name: "Olga Ivanova", role: "First Officer" },
            { name: "Vladimir Sokolov", role: "Cabin Chief" },
            { name: "Natalia Kuznetsova", role: "Flight Attendant" },
            { name: "Andrei Volkov", role: "Flight Attendant" }
        ],
    }
];

export function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

const INITIAL_VISIBLE_COLUMNS = ["duration", "airline", "aircraft", "flight_number", "origin", "departure_time", "destination", "arrival_time", "actions"];

export default function Flights() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isOpenModal, onOpen: onOpenModal, onOpenChange: onOpenChangeModal } = useDisclosure();
    const [activeFlight, setActiveFlight] = React.useState(null);
    const [filterValue, setFilterValue] = React.useState("");
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [flightList, setFlightList] = React.useState(flights);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "departure_time",
        direction: "descending",
    });
    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredFlights = [...flightList];

        if (hasSearchFilter) {
            filteredFlights = filteredFlights.filter((flight) =>
                flight.airline.toLowerCase().includes(filterValue.toLowerCase()) ||
                flight.aircraft.toLowerCase().includes(filterValue.toLowerCase()) ||
                flight.flight_number.toLowerCase().includes(filterValue.toLowerCase()) ||
                flight.origin.toLowerCase().includes(filterValue.toLowerCase()) ||
                flight.destination.toLowerCase().includes(filterValue.toLowerCase()) ||
                flight.departure_time.toLowerCase().includes(filterValue.toLowerCase()) ||
                flight.arrival_time.toLowerCase().includes(filterValue.toLowerCase()) ||
                flight.arrival_gate.toLowerCase().includes(filterValue.toLowerCase()) ||
                flight.departure_gate.toLowerCase().includes(filterValue.toLowerCase()) ||
                flight.id.toLowerCase().includes(filterValue.toLowerCase()) ||
                flight.crew.some((member) =>
                    member.name.toLowerCase().includes(filterValue.toLowerCase()) ||
                    member.role.toLowerCase().includes(filterValue.toLowerCase())
                )
            );
        }

        return filteredFlights;
    }, [flightList, filterValue]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage) || 1;

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const getFlightDurationInMinutes = (departureTime, arrivalTime) => {
        const departure = new Date(departureTime);
        const arrival = new Date(arrivalTime);
        return Math.round((arrival - departure) / (1000 * 60));
    };

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a, b) => {
            let first, second;

            if (sortDescriptor.column === "duration") {
                first = getFlightDurationInMinutes(a.departure_time, a.arrival_time);
                second = getFlightDurationInMinutes(b.departure_time, b.arrival_time);
            } else {
                first = a[sortDescriptor.column];
                second = b[sortDescriptor.column];
            }

            const cmp = first < second ? -1 : first > second ? 1 : 0;
            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((flight, columnKey) => {
        if (columnKey === "duration") {
            return calculateFlightDuration(flight.departure_time, flight.arrival_time);
        }

        const cellValue = flight[columnKey];
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
                        placeholder="Search a flight..."
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
                    <span className="text-default-400 text-small">Total {filteredItems.length} flights</span>
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
        flightList.length,
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

    const calculateFlightDuration = (departureTime, arrivalTime) => {
        const departure = new Date(departureTime);
        const arrival = new Date(arrivalTime);

        const diffInMinutes = Math.round((arrival - departure) / (1000 * 60));

        const hours = Math.floor(diffInMinutes / 60);
        const minutes = diffInMinutes % 60;

        return `${hours}h ${minutes}m`;
    };

    const [captainSearchQuery, setCaptainSearchQuery] = React.useState("");
    const [firstOfficerSearchQuery, setFirstOfficerSearchQuery] = React.useState("");
    const [cabinChiefSearchQuery, setCabinChiefSearchQuery] = React.useState("");
    const [attendantSearchQuery, setAttendantSearchQuery] = React.useState("");

    const [selectedCaptains, setSelectedCaptains] = React.useState(new Set([]));
    const [selectedFirstOfficers, setSelectedFirstOfficers] = React.useState(new Set([]));
    const [selectedCabinChiefs, setSelectedCabinChiefs] = React.useState(new Set([]));
    const [selectedAttendants, setSelectedAttendants] = React.useState(new Set([]));


    return (
        <div>
            <h1 className="text-gray-600 text-3xl pb-8">Flights</h1>
            <Table
                isHeaderSticky
                aria-label="Table with registered flights"
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
                            className="uppercase"
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
                                setActiveFlight(item);
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
                                    <div className="flex items-center gap-4">
                                        <h2 className="text-2xl uppercase">{activeFlight.flight_number}</h2>
                                        <div className="px-3 py-1 rounded-full bg-tp-purple-medium text-white text-sm font-semibold">
                                            {calculateFlightDuration(activeFlight.departure_time, activeFlight.arrival_time)}
                                        </div>
                                    </div>
                                </div>
                            </DrawerHeader>
                            <DrawerBody className="h-full">
                                <div className="flex flex-col items-center">
                                    <div className="flex w-full">
                                        <div className="w-40 font-medium">Id:</div>
                                        <div>{activeFlight.id}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-40 font-medium">Airline:</div>
                                        <div>{activeFlight.airline}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-40 font-medium">Aircraft:</div>
                                        <div>{activeFlight.aircraft}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-40 font-medium">Flight Number:</div>
                                        <div>{activeFlight.flight_number}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-40 font-medium">Origin:</div>
                                        <div>{activeFlight.origin}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-40 font-medium">Departure Time:</div>
                                        <div>{new Date(activeFlight.departure_time).toLocaleString()}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-40 font-medium">Departure Gate:</div>
                                        <div>{activeFlight.departure_gate}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-40 font-medium">Destination:</div>
                                        <div>{activeFlight.destination}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-40 font-medium">Arrival Time:</div>
                                        <div>{new Date(activeFlight.arrival_time).toLocaleString()}</div>
                                    </div>
                                    <div className="flex w-full">
                                        <div className="w-40 font-medium">Arrival Gate:</div>
                                        <div>{activeFlight.arrival_gate}</div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <h3 className="text-xl uppercase text-gray-600">Crew members</h3>
                                    <Table className="mt-4" aria-label="Crew members of the flight" radius="sm">
                                        <TableHeader radius='sm'>
                                            <TableColumn className="uppercase">Role</TableColumn>
                                            <TableColumn className="uppercase">Name</TableColumn>
                                        </TableHeader>
                                        <TableBody>
                                            {
                                                activeFlight.crew.map((crew_member) => (
                                                    <TableRow key={crew_member.name}>
                                                        <TableCell>{crew_member.role}</TableCell>
                                                        <TableCell>{crew_member.name}</TableCell>
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
            <Modal isOpen={isOpenModal} backdrop="blur" size="3xl" placement="top-center" onOpenChange={onOpenChangeModal}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h1 className="text-gray-600 text-2xl font-medium pb-8">ADD FLIGHT</h1>
                            </ModalHeader>
                            <ModalBody>
                                <Form className="w-full flex flex-col gap-4"
                                    onReset={() => setAction("reset")}
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        let data = Object.fromEntries(new FormData(e.currentTarget));
                                        data = {
                                            ...data,
                                            id: (flightList.length + 1).toString(),
                                            departure_time: new Date(data.departure_time).toISOString(),
                                            arrival_time: new Date(data.arrival_time).toISOString(),
                                            crew: [
                                                ...Array.from(selectedCaptains).map((captain) => ({ name: captain, role: "Captain" })),
                                                ...Array.from(selectedFirstOfficers).map((officer) => ({ name: officer, role: "First Officer" })),
                                                ...Array.from(selectedCabinChiefs).map((chief) => ({ name: chief, role: "Cabin Chief" })),
                                                ...Array.from(selectedAttendants).map((attendant) => ({ name: attendant, role: "Flight Attendant" }))
                                            ]
                                        }
                                        setFlightList((prev) => [...prev, data]);
                                        onOpenChangeModal(false);
                                        onClose();
                                    }}
                                >
                                    <div className="w-full flex gap-4 flex-row">
                                        <Input
                                            isRequired
                                            name="flight_number"
                                            label="Flight Number"
                                            labelPlacement="outside"
                                            placeholder="Enter flight number (e.g. RO302)"
                                        />
                                    </div>
                                    <div className="w-full flex gap-4 flex-row">
                                        <Autocomplete
                                            isRequired
                                            label="Aircraft"
                                            name="aircraft"
                                            labelPlacement="outside"
                                            placeholder="Select aircraft model"
                                        >
                                            {
                                                airplanes_list.map((airplane) => (
                                                    <AutocompleteItem key={airplane.value}>{airplane.value}</AutocompleteItem>
                                                ))
                                            }
                                        </Autocomplete>
                                        <Autocomplete
                                            isRequired
                                            label="Airline"
                                            name="airline"
                                            labelPlacement="outside"
                                            placeholder="Select airline"
                                        >
                                            {
                                                airlines_list.map((airline) => (
                                                    <AutocompleteItem key={airline.id}>{airline.name}</AutocompleteItem>
                                                ))
                                            }
                                        </Autocomplete>
                                    </div>
                                    <div className="w-full flex gap-4 flex-row">
                                        <Input
                                            isRequired
                                            name="origin"
                                            label="Origin"
                                            labelPlacement="outside"
                                            placeholder="Enter origin airport code (e.g. OTP)"
                                        />
                                        <Input
                                            isRequired
                                            name="destination"
                                            label="Destination"
                                            labelPlacement="outside"
                                            placeholder="Enter destination airport code (e.g. LHR)"
                                        />
                                    </div>
                                    <div className="w-full flex gap-4 flex-row">
                                        <Input
                                            isRequired
                                            name="departure_gate"
                                            label="Departure Gate"
                                            labelPlacement="outside"
                                            placeholder="Enter departure gate (e.g. 12A)"
                                        />
                                        <Input
                                            isRequired
                                            name="arrival_gate"
                                            label="Arrival Gate"
                                            labelPlacement="outside"
                                            placeholder="Enter arrival gate (e.g. 43B)"
                                        />
                                    </div>
                                    <div className="w-full flex gap-4 flex-row">
                                        <Input
                                            isRequired
                                            name="departure_time"
                                            label="Departure Time"
                                            labelPlacement="outside"
                                            placeholder="Enter departure time"
                                            type="datetime-local"
                                        />
                                        <Input
                                            isRequired
                                            name="arrival_time"
                                            label="Arrival Time"
                                            labelPlacement="outside"
                                            placeholder="Enter arrival time"
                                            type="datetime-local"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-lg font-medium mb-2">Crew Members<a className="text-red-600">*</a></h3>
                                        <div className="w-full flex gap-4 flex-row mb-4">
                                            {/* Căpitani */}
                                            <Dropdown className="w-full">
                                                <DropdownTrigger>
                                                    <Button
                                                        variant="flat"
                                                        className="w-full justify-between"
                                                        radius="sm"
                                                        endContent={<ChevronDownIcon className="text-small" />}
                                                    >
                                                        {selectedCaptains.size > 0
                                                            ? `${selectedCaptains.size} căpitani selectați`
                                                            : "Selectează căpitani"}
                                                    </Button>
                                                </DropdownTrigger>
                                                <DropdownMenu
                                                    aria-label="Selectare căpitani"
                                                    variant="flat"
                                                    closeOnSelect={false}
                                                    disallowEmptySelection
                                                    selectionMode="multiple"
                                                    selectedKeys={selectedCaptains}
                                                    onSelectionChange={setSelectedCaptains}
                                                    className="w-full min-w-[240px]"
                                                    radius="sm"
                                                >
                                                    {[
                                                        { id: "1", name: "Alexandru Munteanu" },
                                                        { id: "2", name: "Victor Stanescu" },
                                                        { id: "3", name: "James Williams" },
                                                        { id: "4", name: "Liviu Mihăilescu" }
                                                    ].map((person) => (
                                                        <DropdownItem key={person.id} textValue={person.name} radius="sm">
                                                            <div className="flex items-center">
                                                                <span className="text-small">{person.name}</span>
                                                            </div>
                                                        </DropdownItem>
                                                    ))}
                                                </DropdownMenu>
                                            </Dropdown>

                                            {/* Ofițeri de zbor */}
                                            <Dropdown className="w-full">
                                                <DropdownTrigger>
                                                    <Button
                                                        variant="flat"
                                                        className="w-full justify-between"
                                                        radius="sm"
                                                        endContent={<ChevronDownIcon className="text-small" />}
                                                    >
                                                        {selectedFirstOfficers.size > 0
                                                            ? `${selectedFirstOfficers.size} ofițeri selectați`
                                                            : "Selectează ofițeri"}
                                                    </Button>
                                                </DropdownTrigger>
                                                <DropdownMenu
                                                    aria-label="Selectare ofițeri"
                                                    variant="flat"
                                                    closeOnSelect={false}
                                                    disallowEmptySelection
                                                    selectionMode="multiple"
                                                    selectedKeys={selectedFirstOfficers}
                                                    onSelectionChange={setSelectedFirstOfficers}
                                                    className="w-full min-w-[240px]"
                                                    radius="sm"
                                                >
                                                    {[
                                                        { id: "1", name: "Elena Popescu" },
                                                        { id: "2", name: "Cristina Barbu" },
                                                        { id: "3", name: "Sarah Mitchell" },
                                                        { id: "4", name: "Teodora Ionescu" }
                                                    ].map((person) => (
                                                        <DropdownItem key={person.id} textValue={person.name} radius="sm">
                                                            <div className="flex items-center">
                                                                <span className="text-small">{person.name}</span>
                                                            </div>
                                                        </DropdownItem>
                                                    ))}
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>

                                        <div className="w-full flex gap-4 flex-row">
                                            {/* Șefi de cabină */}
                                            <Dropdown className="w-full">
                                                <DropdownTrigger>
                                                    <Button
                                                        variant="flat"
                                                        className="w-full justify-between"
                                                        radius="sm"
                                                        endContent={<ChevronDownIcon className="text-small" />}
                                                    >
                                                        {selectedCabinChiefs.size > 0
                                                            ? `${selectedCabinChiefs.size} șefi de cabină selectați`
                                                            : "Selectează șefi de cabină"}
                                                    </Button>
                                                </DropdownTrigger>
                                                <DropdownMenu
                                                    aria-label="Selectare șefi de cabină"
                                                    variant="flat"
                                                    closeOnSelect={false}
                                                    disallowEmptySelection
                                                    selectionMode="multiple"
                                                    selectedKeys={selectedCabinChiefs}
                                                    onSelectionChange={setSelectedCabinChiefs}
                                                    className="w-full min-w-[240px]"
                                                    radius="sm"
                                                >
                                                    {[
                                                        { id: "1", name: "Maria Ionescu" },
                                                        { id: "2", name: "Adrian Manole" },
                                                        { id: "3", name: "Robert Taylor" },
                                                        { id: "4", name: "Madalina Bucur" }
                                                    ].map((person) => (
                                                        <DropdownItem key={person.id} textValue={person.name} radius="sm">
                                                            <div className="flex items-center">
                                                                <span className="text-small">{person.name}</span>
                                                            </div>
                                                        </DropdownItem>
                                                    ))}
                                                </DropdownMenu>
                                            </Dropdown>

                                            {/* Însoțitori de zbor */}
                                            <Dropdown className="w-full">
                                                <DropdownTrigger>
                                                    <Button
                                                        variant="flat"
                                                        className="w-full justify-between"
                                                        radius="sm"
                                                        endContent={<ChevronDownIcon className="text-small" />}
                                                    >
                                                        {selectedAttendants.size > 0
                                                            ? `${selectedAttendants.size} însoțitori selectați`
                                                            : "Selectează însoțitori"}
                                                    </Button>
                                                </DropdownTrigger>
                                                <DropdownMenu
                                                    aria-label="Selectare însoțitori"
                                                    variant="flat"
                                                    closeOnSelect={false}
                                                    disallowEmptySelection
                                                    selectionMode="multiple"
                                                    selectedKeys={selectedAttendants}
                                                    onSelectionChange={setSelectedAttendants}
                                                    className="w-full min-w-[240px]"
                                                    radius="sm"
                                                >
                                                    {[
                                                        { id: "1", name: "Andrei Dima" },
                                                        { id: "2", name: "Ioana Popa" },
                                                        { id: "3", name: "Sorina Dumitrescu" },
                                                        { id: "4", name: "Diana Vasilescu" },
                                                        { id: "5", name: "Gabriela Pană" },
                                                        { id: "6", name: "Alexandra Dragomir" },
                                                        { id: "7", name: "Razvan Stancu" },
                                                        { id: "8", name: "Andreea Popa" }
                                                    ].map((person) => (
                                                        <DropdownItem key={person.id} textValue={person.name} radius="sm">
                                                            <div className="flex items-center">
                                                                <span className="text-small">{person.name}</span>
                                                            </div>
                                                        </DropdownItem>
                                                    ))}
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="flex justify-end w-full gap-4">
                                        <Button color="default" type="reset" variant="flat">
                                            Reset
                                        </Button>
                                        <Button type="submit" color="secondary">
                                            Add Flight
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

