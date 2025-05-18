import Logo from './logo';
import SidebarElements from './sidebarElements';

export default function Sidebar() {
    return (
        <div className="h-full fixed p-6">
            <Logo />
            <SidebarElements />
        </div>
    )
}