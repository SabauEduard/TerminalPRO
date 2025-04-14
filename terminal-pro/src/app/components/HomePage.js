'use client';

import Image from 'next/image';
import '../styles/homepage.css';
import '../globals.css';

export default function HomePage() {
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
            <a href="#" className="nav-link active">
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
            <a href="/passengers" className="nav-link">
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
          <div className="location-info">
            <Image src="/location-icon.svg" alt="Location" width={24} height={24} />
            <h2 className="location-name">OTOPENI (OTP)</h2>
          </div>

          <div className="flight-stats">
            <div className="stat-card latest-arrival">
              <div className="stat-date-time">
                <span className="stat-date">2025/03/25</span>
                <span className="stat-time">7:30PM</span>
              </div>
              <div className="stat-details">
                <div>Airplane: WMT6UC</div>
                <div>Flight: W43238</div>
                <div>Origin: BUD</div>
              </div>
              <div className="stat-label">
                  <div className="stat-icon">
                      <Image src="/arrival-plane-icon.svg" alt="Plane" width={24} height={24}/>
                  </div>
                  <div> Latest arrival </div>
              </div>
            </div>

            <div className="stat-card passengers">
              <div className="stat-number">16.214</div>
              <div className="stat-label">    
                  <div className="stat-icon">
                      <Image src="/persons-icon.svg" alt="Plane" width={24} height={24}/>
                  </div>
                  <div>
                      Passengers today
                  </div>
              </div>
            </div>

            <div className="stat-card latest-departure">
              <div className="stat-date-time">
                <span className="stat-date">2025/03/25</span>
                <span className="stat-time">6:42PM</span>
              </div>
              <div className="stat-details">
                <div>Airplane: BAW84KV</div>
                <div>Flight: BA884</div>
                <div>Origin: LHR</div>
              </div>
              <div className="stat-label">
                  <div className="stat-icon">
                      <Image src="/departure-plane-icon.svg" alt="Plane" width={24} height={24}/>
                  </div>
                  <div> Latest departure </div>
              </div>
            </div>
          </div>
          <div className="grounded-planes">
            <h3 className="grounded-planes-title">Grounded planes</h3>
            <table className="planes-table">
              <thead>
                <tr>
                  <th>AIRLINE</th>
                  <th>ICAO</th>
                  <th>MODEL</th>
                  <th>LANDED AS</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>Wizz Air</td>
                <td>HA-LVE</td>
                <td>Airbus A320-232</td>
                <td>W62345</td>
              </tr>
              <tr>
                <td>Ryanair</td>
                <td>EI-DCL</td>
                <td>Boeing 737-800</td>
                <td>FR3421</td>
              </tr>
              <tr>
                <td>Lufthansa</td>
                <td>D-AISQ</td>
                <td>Airbus A321-231</td>
                <td>LH1022</td>
              </tr>
              <tr>
                <td>Emirates</td>
                <td>A6-EOZ</td>
                <td>Airbus A380-861</td>
                <td>EK29</td>
              </tr>
              <tr>
                <td>Qatar Airways</td>
                <td>A7-BCY</td>
                <td>Boeing 787-8</td>
                <td>QR140</td>
              </tr>
              <tr>
                <td>British Airways</td>
                <td>G-ZBKA</td>
                <td>Boeing 787-9</td>
                <td>BA113</td>
              </tr>
              <tr>
                <td>KLM</td>
                <td>PH-BVS</td>
                <td>Boeing 777-300ER</td>
                <td>KL601</td>
              </tr>
              <tr>
                <td>Air France</td>
                <td>F-GUGN</td>
                <td>Airbus A318-111</td>
                <td>AF1302</td>
              </tr>
              <tr>
                <td>Turkish Airlines</td>
                <td>TC-JNC</td>
                <td>Airbus A330-300</td>
                <td>TK1978</td>
              </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
