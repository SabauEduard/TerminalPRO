'use client';

import React from "react";
import {Autocomplete, AutocompleteItem, Form, Input} from "@heroui/react";
import airplanes from "../data/aircrafts.json";
import airlines from "../data/airlines.json";

export default function addAirplane() {
    return (
        <div className="min-h-screen">
            <h1 className="text-gray-600 text-3xl font-medium pb-8">ADD AIRPLANE</h1>
            <Form className="w-full flex flex-col gap-10">
                <div className="w-full flex gap-4 flex-row">
                    <Autocomplete
                        isRequired
                        label="Model"
                        labelPlacement="outside"
                        placeholder="Select aircraft model"
                    >
                    {
                        airplanes.map((airplane) => (
                            <AutocompleteItem key={airplane.value}>{airplane.value}</AutocompleteItem>
                        ))
                    }
                    </Autocomplete>
                </div>
                <div className="w-full flex gap-4 flex-row">
                    <Autocomplete
                        isRequired
                        label="Airline"
                        labelPlacement="outside"
                        placeholder="Select the operationg airline"
                    >
                    {
                        airlines.map((airline) => (
                            <AutocompleteItem key={airline.id}>{airline.name}</AutocompleteItem>
                        ))
                    }
                    </Autocomplete>
                    <Input
                        isRequired
                        label="Registration"
                        labelPlacement="outside"
                        placeholder="Enter airpline's registration number"
                    />
                </div>
                <div className="w-full flex gap-4 flex-row">
                    <Input
                        isRequired
                        label="Call Sign"
                        labelPlacement="outside"
                        placeholder="Enter airpline's call sign"
                    />
                    <Input
                         isRequired
                        label="Capacity"
                        labelPlacement="outside"
                        placeholder="Enter airpline's capacity"
                    />
                </div>
            </Form>
        </div>
    )
}