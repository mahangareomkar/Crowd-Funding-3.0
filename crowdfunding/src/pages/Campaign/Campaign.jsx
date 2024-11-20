import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { useAccount, useContractWrite, useContractRead } from "wagmi";
import { abi, address } from "../../constants/contractAbi";
import { concat, parseEther } from "viem";
import { setAllCampaigns } from "../../redux/features/campaigns/campaignsSlice";

const Campaign = () => {
    const { allCampaigns } = useSelector((state) => state.campaigns)
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null)
    const [donation, setDonation] = useState(0.1);
    const { address:accountAddress } = useAccount();
    const {status,setStatus} = useState(false);
    const dispatch = useDispatch();

    const { data: result } = useContractRead({
        abi,
        address,
        functionName: 'getCampaigns',
    })
    
    const { data: hash, isLoading, isError, isSuccess, write } = useContractWrite({
        address,
        abi,
        functionName: 'donate',
    })



    useEffect(() => {
        let found = false;
        // for (let i = 0; i < allCampaigns.length; i++) {
        //     if (parseInt(allCampaigns[i].id) === parseInt(id)) {
        //         setCampaign(allCampaigns[i]);
        //         found = true;
        //         break;
        //     }
        // }

        if (!found) {
            // Fetch the campaign
            for (let i = 0; i < result.length; i++) {
                if (parseInt(result[i].id) === parseInt(id)) {
                    setCampaign(result[i]);
                    found = true;
                    break;
                }
            }
        }
    }, [id])

    useEffect(()=>{
        dispatch(setAllCampaigns(result));
    },[status])

    useEffect(()=>{
        if(isSuccess){
            setCampaign({...campaign,amountCollected:parseEther(((parseInt(campaign?.amountCollected) / 10e17)+donation).toString())})
        }
    },[isSuccess])

    const donationHandler = () => {
        try{
            const tx = write({
                args: [id],
                value: parseEther(donation.toString())
            })

            if(tx){
                setStatus(true);
            }

        }catch(error){
            alert("Error")
            setStatus(false)
        }
    }

    return (
        <section className="min-h-[87vh] px-6 py-4 grid grid-cols-4 gap-x-6 gap-y-4">
            <section className="col-span-3 rounded-2xl overflow-hidden max-sm:col-span-4">
                <img src={campaign?.image} className="w-full transition duration-1000 ease-in-out hover:scale-150" />
            </section>
            <section className="col-span-1 max-sm:hidden"></section>
            <section className="col-span-1 grid grid-cols-2 gap-3 max-sm:col-span-4">
                <div className="col-span-2 border-2 border-emerald-500 rounded-full flex flex-col justify-center items-center py-1 text-2xl text-white max-sm:text-lg max-sm:col-span-1">
                    <p className="">Balance</p>
                    <p className="">{campaign !== null ? parseInt(campaign?.amountCollected) / 10e17 : 0} <span className="text-lg text-emerald-500 max-sm:text-sm">ethers</span></p>
                </div>
                <div className="col-span-2 border-2 border-emerald-500 rounded-full flex flex-col justify-center items-center py-1 text-2xl text-white max-sm:text-lg max-sm:col-span-1">
                    <p className="">Target</p>
                    <p className="">{campaign !== null ? parseInt(campaign?.target) : 0} <span className="text-lg text-emerald-500 max-sm:text-sm">ethers</span></p>
                </div>
                <div className="col-span-2 flex flex-row justify-center items-center gap-2">
                    <input type="number" value={donation} className="w-1/4 text-center text-xl rounded-xl py-3 px-1 bg-[#111116] text-emerald-500" onChange={(e) => { setDonation(e.target.value) }} />
                    <button className="w-3/4 border-2 bg-emerald-600 border-emerald-500 rounded-full py-3 text-xl" onClick={donationHandler}>{isLoading ? "Loading ..." : "Donate (ethers)"}</button>
                </div>
                {
                    campaign?.owner === address &&
                    <button className="col-span-2 border-2 bg-red-600 border-red-500 rounded-full py-3 text-xl disabled:bg-red-300 disabled:border-red-300" disabled={parseInt(campaign.deadline) <= Date.now() ? true : false}>Withdraw</button>
                }
            </section>
            <section className="relative col-span-3 flex flex-col gap-4 pb-10 max-sm:col-span-4">
                <h1 className="text-4xl text-white font-semibold">{campaign?.title}</h1>
                <p className="px-4 text-center text-lg">{campaign?.description}</p>
                <p className="absolute bottom-2 left-4 max-sm:static">Ends On: {Date(parseInt(campaign?.deadline))}</p>
                <p className="absolute bottom-2 right-4 max-sm:static">Created By: {campaign?.owner}</p>
            </section>
        </section>
    )
}

export default Campaign;