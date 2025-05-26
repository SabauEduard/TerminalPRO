import ArrivalIcon from "../icons/arrival";
import DepartureIcon from "../icons/departure";
import PassengersIcon from "../icons/passengers";
import PinIcon from "../icons/pin";
import Card from "./card";

export default function TopPanels() {
    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Luna începe de la 0
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}/${month}/${day}`;
    };

    const currentDate = getCurrentDate();

    return (
        <div className="flex flex-col gap-4 w-full pb-3 bg-white">
            <div className="flex items-center space-x-4">
                <h1 className="text-3xl text-gray-600 flex gap-2 items-baseline">
                    <PinIcon width="3rem" height="3rem" />
                    OTOPENI (OTP)
                </h1>
            </div>
            <div className="flex items-center space-x-4 h-48">
                <div className="w-full h-full rounded-lg p-6 flex flex-col items-center justify-center gap-4 border border-gray-200">
                    <div className="w-full flex justify-between items-center text-gray-700">
                        <div>{currentDate}</div>
                        <div>7:30PM</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex w-full">
                            <div className="w-24 font-medium">Airplane:</div>
                            <div>WMT6UC</div>
                        </div>
                        <div className="flex w-full">
                            <div className="w-24 font-medium">Flight:</div>
                            <div>W43238</div>
                        </div>
                        <div className="flex w-full">
                            <div className="w-24 font-medium">Origin:</div>
                            <div>BUD</div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-2">
                        <ArrivalIcon width="2rem" height="2rem" className="text-gray-500" />
                        <a className="text-gray-600">LATEST ARRIVAL</a>
                    </div>
                </div>

                <div className="w-full h-full rounded-lg p-6 flex flex-col items-center justify-between gap-4 border border-gray-200">
                    <div className="w-full flex justify-between items-center" aria-hidden="true">
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <div className="text-5xl mb-2" aria-label="8564 pasageri">8564</div>
                    </div>

                    <div className="w-full flex items-center justify-center gap-2 mt-2">
                        <PassengersIcon width="2rem" height="2rem" className="text-gray-500" />
                        <a className="text-gray-600">PASSENGERS TODAY</a>
                    </div>
                </div>

                <div className="w-full h-full rounded-lg p-6 flex flex-col items-center justify-center gap-4 border border-gray-200">
                    <div className="w-full flex justify-between items-center text-gray-700">
                        <div>{currentDate}</div>
                        <div>6:42PM</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex w-full">
                            <div className="w-24 font-medium">Airplane:</div>
                            <div>BAW84KV</div>
                        </div>
                        <div className="flex w-full">
                            <div className="w-24 font-medium">Flight:</div>
                            <div>BA884</div>
                        </div>
                        <div className="flex w-full">
                            <div className="w-24 font-medium">Origin:</div>
                            <div>LHR</div>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-2">
                        <DepartureIcon width="2rem" height="2rem" className="text-gray-500" />
                        <a className="text-gray-600">LATEST DEPARTURE</a>
                    </div>
                </div>
            </div>
        </div>
    );
}