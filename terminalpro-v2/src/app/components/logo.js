import "../globals.css";
import GateIcon from "../icons/gate";

export default function Logo() {
    return (
        <div className="p-2 w-full flex items-center justify-center h-8 gap-2">
            <GateIcon width="1.75rem" height="1.75rem" />
            <div className="flex items-center justify-center">
                <span className="text-2xl text-gray-800">
                    Terminal
                </span>
                <span className="text-2xl text-tp-purple-medium">PRO</span>
            </div>
        </div>
    );
}