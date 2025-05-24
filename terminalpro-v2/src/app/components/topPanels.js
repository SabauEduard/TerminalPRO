import PinIcon from "../icons/pin";
import Card from "./card";

export default function TopPanels() {
    return (
        <div className="flex flex-col gap-4 w-full px-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-4">
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                    <PinIcon className="inline-block mr-2" width="1.5rem" height="1.5rem" />
                    OTOPENI (OTP)
                </h1>
            </div>
            <div className="flex items-center space-x-4">
                <div className="bg-white dark:bg-tp-gray-dark rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-tp-gray-dark dark:text-white mb-4">Card Title</h2>
                    <p className="text-tp-gray-light dark:text-tp-gray-dark mb-4">
                        This is a simple card component that can be used to display content.
                    </p>
                    <button className="bg-tp-blue text-white px-4 py-2 rounded hover:bg-tp-blue-dark transition-colors">
                        Action Button
                    </button>
                </div>

                <div className="bg-white dark:bg-tp-gray-dark rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-tp-gray-dark dark:text-white mb-4">Card Title</h2>
                    <p className="text-tp-gray-light dark:text-tp-gray-dark mb-4">
                        This is a simple card component that can be used to display content.
                    </p>
                    <button className="bg-tp-blue text-white px-4 py-2 rounded hover:bg-tp-blue-dark transition-colors">
                        Action Button
                    </button>
                </div>

                <div className="bg-white dark:bg-tp-gray-dark rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold text-tp-gray-dark dark:text-white mb-4">Card Title</h2>
                    <p className="text-tp-gray-light dark:text-tp-gray-dark mb-4">
                        This is a simple card component that can be used to display content.
                    </p>
                    <button className="bg-tp-blue text-white px-4 py-2 rounded hover:bg-tp-blue-dark transition-colors">
                        Action Button
                    </button>
                </div>
            </div>
        </div>
    );
}