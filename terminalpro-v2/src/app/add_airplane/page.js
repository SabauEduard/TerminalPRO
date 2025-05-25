'use client';

import React from "react";
import {Form, Input} from "@heroui/react";

export default function addAirplane() {
    return (
        <div className="min-h-screen">
            <h1 className="text-gray-600 text-3xl font-medium pb-8">ADD AIRPLANE</h1>
            <Form className="w-full flex flex-col">
                <div className="w-full">
                    <Input
                        label="Registration"
                        labelPlacement="outside"
                        placeholder="Enter registration of airpline"
                    />
                </div>
            </Form>
        </div>
    )
}