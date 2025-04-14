import Image from 'next/image';


export default function Sidepanel({ open, setOpen }) {
    return (
        <div className="sidepanel-bg">
            <div className="sidepanel">
                <div className='sidepanel-top'>
                    <button class='close-button' onClick={() => setOpen(false)}>
                        <Image src="/close.png" width={15} height={15} />
                    </button>
                </div>
                <div className="sidebar-top">
                    <h2 className="h2">
                        Daria Clem
                    </h2>
                    <div className='columns-button'>
                        EDIT
                    </div>
                </div>
                <div>
                    <p>Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6020826540278</p>
                    <p>Phone:&nbsp;0789763018</p>
                    <p>Email:&nbsp;&nbsp;&nbsp;clem.daria@gmail.com</p>
                </div>
                <div className="tickets">
                    <h3 className="h3">Latest tickets</h3>
                    <div className="last-ticket-bg">
                        <div className="last-ticket">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="line"></div>
                            <div className='ticket-info'>
                                <div className='ticket-info-top'>
                                    <div>
                                        <h3>25B</h3>
                                    </div>
                                    <div className='ticket-info-dest'>
                                        <h3>OTP</h3>
                                        <Image src="/airplane.png" width={20} height={20} />
                                        <h3>ZTH</h3>
                                    </div>
                                </div>
                                <div className='ticket-info-bottom'>
                                    <div>
                                        <div>Flight: W43238</div>
                                        <div>Date:&nbsp;&nbsp;15 Mar 2025</div>
                                        <div>Class:&nbsp;&nbsp;Economy</div>
                                        <div>Gate:&nbsp;&nbsp;102A</div>
                                    </div>
                                </div>
                            </div>
                            <div className='cod-bare'>
                                <Image src="/cod_bare.png" alt="Ticket" width={200} height={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}