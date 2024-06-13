import React from "react";

const CampaignCard = ({ name, description, imgURL, balance, target, owner }) => {
    return (
        <section className="bg-[#111116] bg-slate-950 flex flex-col justify-start items-start gap-1 rounded-xl transition duration-500 md:hover:scale-105 border-2 border-blue-500">
            <img src={imgURL} className="w-full rounded-xl" />
            <h1 className="text-bold text-xl text-white pl-2 pt-2">{name}</h1>
            <p className="px-2 text-slate-400 text-base line-clamp-3 break-all">{description}</p>
            <div className="w-full px-4 py-2 flex flex-row justify-between">
                <div className="flex flex-col justify-start items-start text-base font-medium">
                    <p className="text-white font-medium">{balance / 10e18} ethers</p>
                    <p className="text-slate-400">Raised till now</p>
                </div>
                <div className="flex flex-col justify-start items-start text-base font-medium">
                    <p className="text-white font-medium">{target} ethers</p>
                    <p className="text-slate-400">Target</p>
                </div>
            </div>
            <p className="px-4 pb-2 line-clamp-1 text-slate-400">By :<span className="text-white px-2">{owner.slice(0, 6) + "..." + owner.slice(owner.length - 5, owner.length - 1)}</span></p>
        </section>
    )
}

export default CampaignCard;