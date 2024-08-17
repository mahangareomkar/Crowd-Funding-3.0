import React, { useState } from "react";
import { useContractWrite } from 'wagmi';
import { abi, address } from "../../constants/contractAbi";
import { useNavigate } from "react-router-dom";

const CreateCampaign = () => {
    const [credentails, setCredentials] = useState({ "title": "", "description": "", "image": "", "target": 0, "deadline": "" });
    const navigate = useNavigate();
    const { data, isLoading, isSuccess, write } = useContractWrite({
        address,
        abi,
        functionName: 'createCampaign',
    })

    const credentailsChanger = (e) => {
        setCredentials({ ...credentails, [e.target.name]: e.target.value });
    }

    const submitHandler = async(e) => {
        e.preventDefault();
        console.log(Date.parse(credentails.deadline));
        console.log(isLoading, isSuccess);
        await write({
            args: [
                credentails.title,
                credentails.description,
                credentails.target,
                Date.parse(credentails.deadline),
                credentails.image
            ]
        })

        console.log(isSuccess);
        if(isSuccess){
            navigate("/");
        }
    }

    return (
        <section className="px-8 py-4">
            <h1 className="text-2xl font-bold pb-2 border-b-2 border-slate-300">Create a new Campaign</h1>
            <form className="p-2 flex flex-col gap-2" onSubmit={submitHandler}>
                <input type="text" name="title" placeholder="Campaign Name" value={credentails.title} className="text-center text-xl text-white bg-slate-950 py-2 border-2 border-emerald-500 rounded-full max-sm:text-lg max-sm:py-1" onChange={credentailsChanger} />
                <textarea rows={8} name="description" placeholder="Description" value={credentails.description} className="text-center text-xl text-white bg-slate-950 py-2 border-2 border-emerald-500 rounded-xl max-sm:text-lg max-sm:py-1" onChange={credentailsChanger} />
                <input type="text" name="image" placeholder="Image Url" value={credentails.image} className="text-center text-xl text-white bg-slate-950 py-2 border-2 border-emerald-500 rounded-full max-sm:text-lg max-sm:py-1" onChange={credentailsChanger} />
                <img src={credentails.image} className="w-80 aspect-auto self-center" />
                <div className="flex gap-2 items-center">
                    <label htmlFor="target">Target :</label>
                    <input type="number" name="target" placeholder="0" min={0} value={credentails.target} className="w-20 text-center text-xl text-white bg-slate-950 py-2 border-2 border-emerald-500 rounded-full max-sm:text-lg max-sm:py-1" onChange={credentailsChanger} />
                </div>
                <div className="flex gap-2 items-center">
                    <label htmlFor="target">Deadline :</label>
                    <input type="date" name="deadline" value={credentails.deadline} className="w-60 text-center text-xl text-white bg-slate-950 py-2 border-2 border-emerald-500 rounded-full max-sm:text-lg max-sm:py-1 max-sm:w-40" onChange={credentailsChanger} />
                </div>
                <input type="submit" value={isLoading===true?"Loading":"Create"} className="text-xl py-2 bg-emerald-500 rounded-full" />
            </form>
        </section>
    )
}

export default CreateCampaign;