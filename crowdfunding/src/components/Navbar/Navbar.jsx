import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { menu, createCampaign, closemark, profile, myCampaigns } from "../../assets/navElements/index"
import { useAccount } from 'wagmi'

const Navbar = () => {
    const [menuListed, setMenuListed] = useState(false);
    const navigate = useNavigate();
    const account = useAccount();


    return (
        <nav className="flex flex-row justify-between items-center py-3 px-4">
            <Link to="/" className="text-2xl font-bold text-ellipsis">CrowdFund 3.0</Link>

            <div className="flex flex-row justify-center items-center gap-4">
                {
                    (account.status === "connected") &&
                    <>
                        <Link to="/my-campaigns" className="text-base font-medium hover:text-emerald-500 max-sm:hidden">My Campaigns</Link>
                        {/* <Link to="/profile" className="text-base font-medium hover:text-emerald-500 max-sm:hidden">Profile</Link> */}
                        <button className="bg-emerald-500 text-white px-4 py-1 font-medium rounded-lg hover:bg-slate-900 hover:text-white max-sm:hidden" onClick={() => { navigate("create_campaign") }}>Create Campaign</button>
                    </>
                }

                <ConnectButton chainStatus="icon" accountStatus="avatar" />
            </div>
            {
                (account.status === "connected") && <section className="md:hidden fixed bottom-4 right-4 flex flex-col-reverse gap-2 z-20">
                    <div className="bg-emerald-500 p-3 rounded-full hover:bg-slate-950"><img src={!menuListed ? menu : closemark} className="w-6 h-6" onClick={() => { setMenuListed(menuListed => !menuListed) }} /></div>
                    {
                        menuListed && <>
                            <Link to="create_campaign" className="bg-emerald-500 p-3 rounded-full hover:bg-slate-950"><img src={createCampaign} className="w-6 h-6" /></Link>
                            {/* <Link to="profile" className="bg-emerald-500 p-3 rounded-full hover:bg-slate-950"><img src={profile} className="w-6 h-6" /></Link> */}
                            <Link to="/my_campaigns" className="bg-emerald-500 p-3 rounded-full hover:bg-slate-950"><img src={myCampaigns} className="w-6 h-6" /></Link>
                        </>
                    }
                </section>
            }

        </nav>
    )
}

export default Navbar;