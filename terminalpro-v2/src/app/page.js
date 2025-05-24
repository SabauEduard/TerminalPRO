'use client';

import React from "react";
import "./globals.css";
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
} from "@heroui/react";
import TopPanels from "./components/topPanels";
import PlusIcon from "./icons/plus";
import SearchIcon from "./icons/search";
import ChevronDownIcon from "./icons/chevronDown";
import VerticalDotsIcon from "./icons/verticalDots";

export const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "AIRLINE", uid: "airline", sortable: true },
    { name: "ICAO", uid: "icao", sortable: true },
    { name: "MODEL", uid: "model", sortable: true },
    { name: "LANDED AT", uid: "landed_at", sortable: true }
];

export const grounded_airplanes = [
    {
        id: "1",
        airline: "TAROM",
        icao: "ROT3476",
        model: "Boeing 737-700",
        landed_at: "2025-03-25 07:15",
    },
    {
        id: "2",
        airline: "Wizz Air",
        icao: "WZZ8KJ2",
        model: "Airbus A321neo",
        landed_at: "2025-03-25 08:22",
    },
    {
        id: "3",
        airline: "Lufthansa",
        icao: "DLH18F3",
        model: "Airbus A320",
        landed_at: "2025-03-25 09:05",
    },
    {
        id: "4",
        airline: "Ryanair",
        icao: "RYR6Z19",
        model: "Boeing 737-800",
        landed_at: "2025-03-25 09:38",
    },
    {
        id: "5",
        airline: "Blue Air",
        icao: "BLA5T31",
        model: "Boeing 737-500",
        landed_at: "2025-03-25 10:11",
    },
    {
        id: "6",
        airline: "KLM",
        icao: "KLM89P2",
        model: "Embraer E190",
        landed_at: "2025-03-25 10:47",
    },
    {
        id: "7",
        airline: "Turkish Airlines",
        icao: "THY42R7",
        model: "Airbus A330-300",
        landed_at: "2025-03-25 11:30",
    },
    {
        id: "8",
        airline: "British Airways",
        icao: "BAW84KV",
        model: "Boeing 777-300ER",
        landed_at: "2025-03-25 12:25",
    },
    {
        id: "9",
        airline: "Air France",
        icao: "AFR67L9",
        model: "Airbus A319",
        landed_at: "2025-03-25 13:08",
    },
    {
        id: "10",
        airline: "LOT Polish Airlines",
        icao: "LOT23H5",
        model: "Boeing 787-8",
        landed_at: "2025-03-25 14:15",
    },
    {
        id: "11",
        airline: "Aegean Airlines",
        icao: "AEE76T2",
        model: "Airbus A320neo",
        landed_at: "2025-03-25 15:22",
    },
    {
        id: "12",
        airline: "Austrian Airlines",
        icao: "AUA19P7",
        model: "Embraer E195",
        landed_at: "2025-03-25 16:05",
    },
    {
        id: "13",
        airline: "Qatar Airways",
        icao: "QTR82K3",
        model: "Airbus A350-900",
        landed_at: "2025-03-25 17:34",
    },
    {
        id: "14",
        airline: "Aeroflot",
        icao: "AFL56N8",
        model: "Sukhoi Superjet 100",
        landed_at: "2025-03-25 18:19",
    },
    {
        id: "15",
        airline: "Wizz Air",
        icao: "WMT6UC",
        model: "Airbus A320",
        landed_at: "2025-03-25 19:30",
    }
];

export function capitalize(s) {
    return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

const INITIAL_VISIBLE_COLUMNS = ["airline", "icao", "model", "landed_at"];

export default function Home() {
    const [filterValue, setFilterValue] = React.useState("");
    const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState({
        column: "landed_at",
        direction: "descending",
    });
    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]); const filteredItems = React.useMemo(() => {
        let filteredAirplanes = [...grounded_airplanes];

        if (hasSearchFilter) {
            filteredAirplanes = filteredAirplanes.filter((airplane) =>
                airplane.airline.toLowerCase().includes(filterValue.toLowerCase()) ||
                airplane.icao.toLowerCase().includes(filterValue.toLowerCase()) ||
                airplane.model.toLowerCase().includes(filterValue.toLowerCase())
            );
        }

        return filteredAirplanes;
    }, [grounded_airplanes, filterValue]);

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

    const renderCell = React.useCallback((airplane, columnKey) => {
        const cellValue = airplane[columnKey];

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
                <div className="flex justify-between gap-3 items-end">                    <Input
                    isClearable
                    className="w-full sm:max-w-[44%]"
                    placeholder="Search by airline, ICAO or model..."
                    startContent={<SearchIcon />}
                    value={filterValue}
                    onClear={() => onClear()}
                    onValueChange={onSearchChange}
                />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={<ChevronDownIcon className="text-small" />} variant="flat">
                                    Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
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
        grounded_airplanes.length,
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
                />
            </div>
        );
    }, [items.length, page, pages, hasSearchFilter]);

    return (
        <div className="w-full flex flex-col items-center gap-4">
            <TopPanels />
            <iframe
                className="w-full rounded-[7px]"
                height="500"
                src="https://www.airnavradar.com/?widget=1&z=10&airport=LROP&class=A"
                title="Hartă radar în timp real pentru aeroportul Henri Coandă (LROP)"
                aria-label="Vizualizare în timp real a traficului aerian pentru aeroportul Henri Coandă din București. Această hartă interactivă afișează zborurile active în zona aeroportului."
                lang="ro">
            </iframe>
            <div className="w-full rounded-[7px] p-6 border border-gray-200 flex flex-col gap-4">
                <h2 className="text-2xl text-gray-600">
                    GROUNDED PLANES
                </h2>
                <Table
                    isHeaderSticky
                    aria-label="Grounded planes"
                    bottomContent={bottomContent}
                    bottomContentPlacement="outside"
                    classNames={{
                        wrapper: "max-h-[382px]",
                    }}
                    sortDescriptor={sortDescriptor}
                    topContent={topContent}
                    topContentPlacement="outside"
                    onSortChange={setSortDescriptor}
                >
                    <TableHeader columns={headerColumns}>
                        {(column) => (
                            <TableColumn
                                key={column.uid}
                                align={column.uid === "actions" ? "center" : "start"}
                                allowsSorting={column.sortable}
                            >
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody emptyContent={"No planes on the ground"} items={sortedItems}>
                        {(item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

