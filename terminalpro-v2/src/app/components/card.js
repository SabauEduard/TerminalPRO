export default function Card() {
    return (
        <div className="bg-white dark:bg-tp-gray-dark rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-tp-gray-dark dark:text-white mb-4">Card Title</h2>
            <p className="text-tp-gray-light dark:text-tp-gray-dark mb-4">
                This is a simple card component that can be used to display content.
            </p>
            <button className="bg-tp-blue text-white px-4 py-2 rounded hover:bg-tp-blue-dark transition-colors">
                Action Button
            </button>
        </div>
    );
}