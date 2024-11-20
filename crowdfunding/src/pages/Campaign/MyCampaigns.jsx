import { useEffect, useState } from "react";
import { search } from "../../assets/navElements";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { Link } from "react-router-dom";

const MyCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    const { allCampaigns } = useSelector(state => state.campaigns);
    const { address } = useAccount();

    useEffect(() => {
        let arr = allCampaigns.filter((ele) => ele.owner === address);

        setCampaigns(arr);
    }, [])

    return (
        <div className="min-h-[81vh] max-sm:px-4 md:px-16 py-2">
            <section className="flex flex-row justify-between items-center border-b-2 pb-4 border-white">
                <h1 className="text-2xl text-white font-epilogue font-semibold max-sm:text-lg">My Campaigns ({campaigns.length})</h1>
                <input type="search" placeholder="Search" className="w-1/4 text-center bg-slate-800 text-lg py-1 px-3 rounded-full max-sm:hidden" />
                <img src={search} className="md:hidden" />
            </section>
            <div className="my-4">
                <div className="grid grid-cols-8 text-white text-lg text-center font-semibold py-2 gap-2 max-sm:text-sm">
                    <div className="col-span-1">
                        <p>Campaign ID</p>
                    </div>
                    <div className="col-span-4">
                        <p>Campaign Name</p>
                    </div>
                    <div className="col-span-2">
                        <p>Amount Collected (ethers)</p>
                    </div>
                    <div className="col-span-1">
                        Status
                    </div>
                </div>

                {
                    campaigns?.map((campaign) => {
                        return (
                            <div key={campaign.id} className="grid grid-cols-8 text-white text-lg text-center font-medium py-2 gap-2 max-sm:text-xs">
                                <div className="col-span-1">
                                    <p>{parseInt(campaign.id)}</p>
                                </div>
                                <div className="col-span-4">
                                    <Link to={`/campaigns/${campaign.id}`} className="hover:text-blue-500">{campaign.title}</Link>
                                </div>
                                <div className="col-span-2">
                                    <p>{parseInt(campaign.amountCollected) / 1e18}</p>
                                </div>
                                <div className={`col-span-1 py-1 px-3 rounded-full ${parseInt(campaign.deadline) - Date.now() <= 0 ? "bg-blue-600" : "bg-green-600"}`}>
                                    <span>
                                        {parseInt(campaign.deadline) - Date.now() <= 0 ? "Completed" : "Running"}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div >
    )
}

export default MyCampaigns;