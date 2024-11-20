import React, { useEffect, useState } from "react";
import { useContractRead } from 'wagmi';
import { Link } from "react-router-dom";
import { CampaignCard } from "../../components";
import { search } from "../../assets/navElements";
import { useSelector, useDispatch } from 'react-redux';
import { setAllCampaigns } from "../../redux/features/campaigns/campaignsSlice";
import { abi, address } from '../../constants/contractAbi';
import { parseEther } from "viem";

const Home = () => {
    const { data: result } = useContractRead({
        abi,
        address,
        functionName: 'getCampaigns',
    })
    const [campaigns,setCampaigns] = useState([])
    const { allCampaigns } = useSelector(state => state.campaigns);
    const dispatch = useDispatch();
    useEffect(() => {
        if(result){
            dispatch(setAllCampaigns(result));
            setCampaigns(result);
        }
    }, [result])


    return (
        <div className="max-sm:px-4 md:px-16 py-2">
            <section className="flex flex-row justify-between items-center border-b-2 pb-4 border-white">
                <h1 className="text-2xl text-white font-epilogue font-semibold max-sm:text-lg">All Campaigns ({campaigns.length})</h1>
                <input type="search" placeholder="Search" className="w-1/4 text-center bg-slate-800 text-lg py-1 px-3 rounded-full max-sm:hidden" />
                <img src={search} className="md:hidden" />
            </section>
            <section className="grid grid-cols-4 max-sm:grid-cols-1 gap-x-4 p-4 gap-y-4">
                {
                    allCampaigns?.map((campaign) => {
                        return <Link to={`campaigns/${parseInt(campaign.id)}`}>
                            <CampaignCard id={parseInt(campaign.id)} name={campaign.title} description={campaign.description} imgURL={campaign.image} balance={parseFloat(campaign.amountCollected)} target={parseFloat(campaign.target)} owner={campaign.owner} deadline={campaign.deadline} />
                        </Link>
                    })
                }
            </section>
        </div>
    )

}

export default Home