import Sidebar from "./sidebar";

export default function PageFrame({ children }) {
    return (
        <div className="flex h-full">
            <div className="w-64">
                <Sidebar />
            </div>
            <div className="flex-1 flex-col h-full">
                <div className="w-full h-20">

                </div>
                <div className="w-full border-t-1 border-l-1 border-tp-gray-light h-full p-7 rounded-tl-[35px]">
                    {children}
                </div>
            </div>
        </div>
    );
}