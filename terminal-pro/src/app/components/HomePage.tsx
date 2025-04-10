'use client';

import Image from 'next/image';
import '../styles/homepage.css';

export default function HomePage() {
  return (
    <div className="homepage-container">
      {/* Navigation Bar */}
      <nav className="nav-sidebar">
        <div className="nav-header">
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
        <header className="content-header">
          <div className="location-info">
            <Image src="/location-icon.svg" alt="Location" width={24} height={24} />
            <h2>OTOPENI (OTP)</h2>
          </div>
          <div className="user-profile">
            <Image src="/profile-placeholder-icon.svg" alt="Profile" width={40} height={40} className="profile-picture" />
          </div>
        </header>

        <div className="flight-stats">
          <div className="stat-card latest-arrival">
            <div className="stat-date-time">
                <div className="stat-date">2025/03/25</div>
                <div className="stat-time">7:30PM</div>
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
                <div className="stat-date">2025/03/25</div>
                <div className="stat-time">6:42PM</div>
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

        <div className="map-container">
          {/* Map will be implemented later */}
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
                <td>9H-WNJ</td>
                <td>Airbus A321-271NX</td>
                <td>W43238</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
