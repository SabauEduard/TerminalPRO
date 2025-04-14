'use client';

import Image from 'next/image';
import '../styles/homepage.css';
import '../styles/passengers.css';
import '../globals.css';
import { useState } from 'react';
import SidePanel from '../components/Sidepanel';

export default function PassengersPage() {
    const [openSidepanel, setOpenSidepanel] = useState(false);

    return (
        <div className="homepage-container">
            {/* Top Bar */}
            <header className="top-bar">
                <div className="top-bar-logo">
                    <Image
                        src="/logo-icon.svg"
                        alt="Terminal PRO"
                        width={32}
                        height={32}
                    />
                    <h1 className="terminal-title">
                        Terminal<span className="terminal-title-highlight">PRO</span>
                    </h1>
                </div>
                <div className="user-profile">
                    <Image
                        src="/profile-placeholder-icon.svg"
                        alt="Profile"
                        width={40}
                        height={40}
                        className="profile-picture"
                    />
                    <button className="profile-dropdown-btn">
                        <Image
                            src="/angle-small-down.svg"
                            alt="Dropdown"
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
            </header>

            <div className="content-wrapper">
                {/* Navigation Bar */}
                <nav className="nav-sidebar">
                    <div className="nav-links">
                        <a href="/dashboard" className="nav-link active">
                            <Image src="/home-icon.svg" alt="Home" width={24} height={24} />
                            <span>Home</span>
                        </a>
                        <a href="#" className="nav-link">
                            <Image src="/plane-alt-icon.svg" alt="Airplanes" width={24} height={24} />
                            <span>Airplanes</span>
                        </a>
                        <a href="#" className="nav-link">
                            <Image src="/flights-icon.svg" alt="Flights" width={24} height={24} />
                            <span>Flights</span>
                        </a>
                        <a href="#" className="nav-link">
                            <Image src="/passengers-icon.svg" alt="Passengers" width={24} height={24} />
                            <span>Passengers</span>
                        </a>
                        <a href="#" className="nav-link">
                            <Image src="/crew-icon.svg" alt="Crew" width={24} height={24} />
                            <span>Crew</span>
                        </a>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="main-content">
                    {
                        openSidepanel && <SidePanel setOpen={setOpenSidepanel} />
                    }
                    <h2 className="h2">Passengers</h2>
                    <div className="table-header">
                        <div className="search-bar">
                            Search by name...
                        </div>
                        <div className='columns-button'>
                            Columns
                            <Image
                                src="/angle-small-down.svg"
                                alt="Dropdown"
                                width={16}
                                height={16}
                            />
                        </div>
                    </div>
                    &nbsp;
                    <div>
                        Total 126.456 passengers
                    </div>
                    <table className="passengers-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>PHONE</th>
                                <th>EMAIL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onClick={() => setOpenSidepanel(true)}>
                                <td>6020826540278</td>
                                <td>Clem Daria</td>
                                <td>0789763018</td>
                                <td>clem.daria@gmail.com</td>
                            </tr>
                            <tr>
                                <td>7549201834672</td>
                                <td>Radu Alex</td>
                                <td>0791234567</td>
                                <td>radu.alexandru@yahoo.com</td>
                            </tr>
                            <tr>
                                <td>3012786540921</td>
                                <td>Ionescu Ioana</td>
                                <td>0788765432</td>
                                <td>ioana.ionescu12@gmail.com</td>
                            </tr>
                            <tr>
                                <td>9876543210987</td>
                                <td>Georgescu Mihai</td>
                                <td>0773344556</td>
                                <td>mihai_georgescu@gmail.com</td>
                            </tr>
                            <tr>
                                <td>1234567890123</td>
                                <td>Ciobanu Daniel</td>
                                <td>0761122334</td>
                                <td>ciobanu.daniel@outlook.com</td>
                            </tr>
                            <tr>
                                <td>5981234567890</td>
                                <td>Popescu Andreea</td>
                                <td>0723456789</td>
                                <td>andreea.popescu@gmail.com</td>
                            </tr>
                            <tr>
                                <td>6023456789012</td>
                                <td>Marin Cristian</td>
                                <td>0745566778</td>
                                <td>cristian.marin@yahoo.com</td>
                            </tr>
                            <tr>
                                <td>2894567890123</td>
                                <td>Dumitru Elena</td>
                                <td>0739988776</td>
                                <td>elena.dumitru@outlook.com</td>
                            </tr>
                            <tr>
                                <td>5137894561200</td>
                                <td>Stoica Vlad</td>
                                <td>0751239874</td>
                                <td>vlad.stoica@mail.com</td>
                            </tr>
                            <tr>
                                <td>6473210984567</td>
                                <td>Iliescu Maria</td>
                                <td>0788123456</td>
                                <td>maria.iliescu@gmail.com</td>
                            </tr>
                            <tr>
                                <td>7230987654321</td>
                                <td>Petrescu Alin</td>
                                <td>0712233445</td>
                                <td>alin.petrescu@yahoo.com</td>
                            </tr>
                            <tr>
                                <td>6541237890987</td>
                                <td>Enache Sorina</td>
                                <td>0799988776</td>
                                <td>sorina.enache@hotmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="pagination-wrapper">
                        <div class="pagination">
                            <a>&lsaquo;</a>
                            <a class="active">1</a>
                            <a>2</a>
                            <a>...</a>
                            <a>16</a>
                            <a>&rsaquo;</a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}