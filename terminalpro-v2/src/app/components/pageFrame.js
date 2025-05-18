import Sidebar from "./sidebar";

export default function PageFrame({ children }) {
    return (
        <div className="flex h-screen">
            <div className="w-64">
                <Sidebar />
            </div>
            <div className="flex-1 bg-white p-4">
                {children}
            </div>
        </div>
    );
}