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
    Chip,
    useDisclosure,
    User,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Pagination,
    airplane,
    Autocomplete,
    AutocompleteItem,
    Form
} from "@heroui/react";
import airplanes_list from "../data/aircrafts.json";
import airlines_list from "../data/airlines.json";

export const columns = [
    { name: "REGISTRATION", uid: "registration" },
    { name: "AIRLINE", uid: "airline", sortable: true },
    { name: "MODEL", uid: "model", sortable: true },
    { name: "CAPACITY", uid: "capacity", sortable: true },
    { name: "CALLSIGN", uid: "callsign", sortable: true },
];

export const airplanes = [
    { "registration": "N12345", "airline": "Delta Air Lines", "model": "Boeing 737-800", "capacity": 160, "callsign": "DAL123" },
    { "registration": "G-EZTH", "airline": "easyJet", "model": "Airbus A320", "capacity": 180, "callsign": "EZY45T" },
    { "registration": "JA789A", "airline": "All Nippon Airways", "model": "Boeing 787-9", "capacity": 246, "callsign": "ANA789" },
    { "registration": "VH-QPA", "airline": "Qantas", "model": "Airbus A330-300", "capacity": 297, "callsign": "QFA11" },
    { "registration": "F-GZCP", "airline": "Air France", "model": "Boeing 777-300ER", "capacity": 296, "callsign": "AFR22CP" },
    { "registration": "D-AIZR", "airline": "Lufthansa", "model": "Airbus A320", "capacity": 168, "callsign": "DLH3R" },
    { "registration": "C-FNNH", "airline": "Air Canada", "model": "Airbus A220-300", "capacity": 137, "callsign": "ACA23H" },
    { "registration": "B-16725", "airline": "EVA Air", "model": "Boeing 777-300ER", "capacity": 316, "callsign": "EVA725" },
    { "registration": "9V-SMU", "airline": "Singapore Airlines", "model": "Airbus A350-900", "capacity": 253, "callsign": "SIA222" },
    { "registration": "A6-EBR", "airline": "Emirates", "model": "Boeing 777-300ER", "capacity": 354, "callsign": "UAE98" },
    { "registration": "CC-BGG", "airline": "LATAM", "model": "Boeing 787-9", "capacity": 296, "callsign": "LAN601" },
    { "registration": "PK-GIA", "airline": "Garuda Indonesia", "model": "Airbus A330-900neo", "capacity": 301, "callsign": "GIA728" },
    { "registration": "EI-DEP", "airline": "Aer Lingus", "model": "Airbus A320", "capacity": 174, "callsign": "EIN23P" },
    { "registration": "VT-ANX", "airline": "Air India", "model": "Boeing 787-8", "capacity": 256, "callsign": "AIC987" },
    { "registration": "ZS-SXZ", "airline": "South African Airways", "model": "Airbus A330-200", "capacity": 222, "callsign": "SAA204" },
    { "registration": "N14106", "airline": "United Airlines", "model": "Boeing 737 MAX 9", "capacity": 179, "callsign": "UAL4106" },
    { "registration": "JA05XJ", "airline": "ZIPAIR Tokyo", "model": "Boeing 787-8", "capacity": 290, "callsign": "TZP5XJ" },
    { "registration": "HS-TKK", "airline": "Thai Airways", "model": "Boeing 777-300", "capacity": 364, "callsign": "THA92K" },
    { "registration": "PT-MUG", "airline": "LATAM Brazil", "model": "Airbus A321", "capacity": 220, "callsign": "TAM321" },
    { "registration": "PH-BVA", "airline": "KLM", "model": "Boeing 777-300ER", "capacity": 408, "callsign": "KLM601" },
    { "registration": "OY-KBH", "airline": "Scandinavian Airlines", "model": "Airbus A320neo", "capacity": 180, "callsign": "SAS75H" },
    { "registration": "SU-GDL", "airline": "EgyptAir", "model": "Boeing 787-9", "capacity": 309, "callsign": "MSR987" },
    { "registration": "HZ-AK42", "airline": "Saudia", "model": "Boeing 777-300ER", "capacity": 413, "callsign": "SVA42" },
    { "registration": "EI-GCF", "airline": "Ryanair", "model": "Boeing 737-800", "capacity": 189, "callsign": "RYR16CF" },
    { "registration": "JA900A", "airline": "Japan Airlines", "model": "Airbus A350-900", "capacity": 369, "callsign": "JAL900" },
    { "registration": "4X-EKO", "airline": "El Al", "model": "Boeing 787-9", "capacity": 282, "callsign": "ELY210" },
    { "registration": "EP-IJB", "airline": "Iran Air", "model": "Airbus A330-200", "capacity": 238, "callsign": "IRA312" },
    { "registration": "EC-MXY", "airline": "Iberia", "model": "Airbus A330-300", "capacity": 278, "callsign": "IBE37X" },
    { "registration": "TF-ISP", "airline": "Icelandair", "model": "Boeing 757-200", "capacity": 183, "callsign": "ICE101" },
    { "registration": "A7-ANE", "airline": "Qatar Airways", "model": "Airbus A350-1000", "capacity": 327, "callsign": "QTR7NE" },
    { "registration": "SE-REU", "airline": "Braathens Regional", "model": "ATR 72-600", "capacity": 72, "callsign": "BRX120" },
    { "registration": "LN-RRJ", "airline": "SAS", "model": "Boeing 737-700", "capacity": 141, "callsign": "SAS77J" },
    { "registration": "B-KPF", "airline": "Cathay Pacific", "model": "Boeing 777-300ER", "capacity": 294, "callsign": "CPA101" },
    { "registration": "A9C-FA", "airline": "Gulf Air", "model": "Airbus A320neo", "capacity": 150, "callsign": "GFA210" },
    { "registration": "CN-RGT", "airline": "Royal Air Maroc", "model": "Boeing 737 MAX 8", "capacity": 174, "callsign": "RAM987" },
    { "registration": "PK-LQG", "airline": "Batik Air", "model": "Airbus A320", "capacity": 180, "callsign": "BTK123" },
    { "registration": "YV3017", "airline": "Conviasa", "model": "Embraer E190", "capacity": 104, "callsign": "VCV3017" },
    { "registration": "UR-PSR", "airline": "Ukraine International", "model": "Boeing 737-800", "capacity": 186, "callsign": "AUI115" },
    { "registration": "HL8006", "airline": "Korean Air", "model": "Boeing 747-8", "capacity": 368, "callsign": "KAL806" },
    { "registration": "N819UA", "airline": "United Airlines", "model": "Airbus A319", "capacity": 128, "callsign": "UAL819" }
];

export function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

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

export const VerticalDotsIcon = ({ size = 24, width, height, ...props }) => {
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
            <path
                d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                fill="currentColor"
            />
        </svg>
    );
};

export const SearchIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                d="M22 22L20 20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    );
};

export const ChevronDownIcon = ({ strokeWidth = 1.5, ...otherProps }) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 24 24"
            width="1em"
            {...otherProps}
        >
            <path
                d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={strokeWidth}
            />
        </svg>
    );
};

const INITIAL_VISIBLE_COLUMNS = ["registration", "airline", "model", "capacity", "callsign"];

export default function App() {
    const [filterValue, setFilterValue] = React.useState("");
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "registration",
        direction: "ascending",
    });
    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);
    const [action, setAction] = React.useState(null);
    const [airplanesList, setAirplanesList] = React.useState(airplanes);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const filteredItems = React.useMemo(() => {
        let filteredAirplanes = [...airplanesList];

        if (hasSearchFilter) {
            filteredAirplanes = filteredAirplanes.filter((airplane) =>
                airplane.model.toLowerCase().includes(filterValue.toLowerCase()) ||
                airplane.registration.toLowerCase().includes(filterValue.toLowerCase()) ||
                airplane.airline.toLowerCase().includes(filterValue.toLowerCase()) ||
                airplane.capacity.toString().includes(filterValue) ||
                airplane.callsign.toLowerCase().includes(filterValue.toLowerCase())
            );
        }

        return filteredAirplanes;
    }, [airplanesList, filterValue]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage) || 1;

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

    const renderCell = React.useCallback((airplane, columnKey) => {
        const cellValue = airplane[columnKey];

        switch (columnKey) {
            case "model":
                return (
                    <h2>{airplane.model}</h2>
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
                        placeholder="Search by model, airline, or capacity..."
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
                        <Button color="secondary" endContent={<PlusIcon />} onPress={onOpen}>
                            Add New
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {filteredItems.length} airplanes</span>
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
        airplanesList.length,
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
        <div>
            <h1 className="text-gray-600 text-3xl font-medium pb-8">AIRPLANES</h1>
            <Table
                isHeaderSticky
                aria-label="Table with active airplanes"
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
                <TableBody emptyContent={"No airplanes found"} items={sortedItems}>
                    {(item) => (
                        <TableRow key={item.registration} className="h-14">
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Modal isOpen={isOpen} backdrop="blur" size="3xl" placement="top-center" onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h1 className="text-gray-600 text-2xl font-medium pb-8">ADD AIRPLANE</h1>
                            </ModalHeader>
                            <ModalBody>
                                <Form className="w-full flex flex-col gap-8"
                                    onReset={() => setAction("reset")}
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        let data = Object.fromEntries(new FormData(e.currentTarget));
                                        data = {
                                            ...data,
                                            capacity: Number(data.capacity),
                                            registration: data.registration.toUpperCase(),
                                            callsign: data.callsign.toUpperCase(),
                                        };
                                        setAirplanesList((prev) => [...prev, data]);
                                        onClose();
                                    }}
                                >
                                    <div className="w-full flex gap-4 flex-row">
                                        <Autocomplete
                                            isRequired
                                            label="Model"
                                            name="model"
                                            labelPlacement="outside"
                                            placeholder="Select aircraft model"
                                        >
                                            {
                                                airplanes_list.map((airplane) => (
                                                    <AutocompleteItem key={airplane.value}>{airplane.value}</AutocompleteItem>
                                                ))
                                            }
                                        </Autocomplete>
                                    </div>
                                    <div className="w-full flex gap-4 flex-row">
                                        <Autocomplete
                                            isRequired
                                            label="Airline"
                                            name="airline"
                                            labelPlacement="outside"
                                            placeholder="Select the operationg airline"
                                        >
                                            {
                                                airlines_list.map((airline) => (
                                                    <AutocompleteItem key={airline.id}>{airline.name}</AutocompleteItem>
                                                ))
                                            }
                                        </Autocomplete>
                                        <Input
                                            isRequired
                                            name="registration"
                                            label="Registration"
                                            labelPlacement="outside"
                                            placeholder="Enter airpline's registration number"
                                        />
                                    </div>
                                    <div className="w-full flex gap-4 flex-row">
                                        <Input
                                            isRequired
                                            name="callsign"
                                            label="Call Sign"
                                            labelPlacement="outside"
                                            placeholder="Enter airpline's call sign"
                                        />
                                        <Input
                                            isRequired
                                            name="capacity"
                                            label="Capacity"
                                            labelPlacement="outside"
                                            placeholder="Enter airpline's capacity"
                                            type="number"
                                        />
                                    </div>
                                    <div className="flex justify-end w-full gap-4">
                                        <Button type="submit" color="secondary">
                                            Add
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

