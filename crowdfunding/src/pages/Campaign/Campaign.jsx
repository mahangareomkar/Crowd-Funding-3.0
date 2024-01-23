import React from "react";

const Campaign = () => {
    return (
        <section className="px-6 py-4 grid grid-cols-4 gap-x-6 gap-y-4">
            <section className="col-span-3 rounded-2xl overflow-hidden max-sm:col-span-4">
                <img src="/events/solo-leveling-sung-jin-woo-manga-anime-boys-hd-wallpaper-preview.jpg" className="w-full ease-in-out hover:scale-150" />
            </section>
            <section className="col-span-1 max-sm:hidden"></section>
            <section className="col-span-1 grid grid-cols-2 gap-3 max-sm:col-span-4">
                <div className="col-span-2 border-2 border-emerald-500 rounded-full flex flex-col justify-center items-center py-1 text-2xl text-white max-sm:text-lg max-sm:col-span-1">
                    <p className="">Balance</p>
                    <p className="">4.4 <span className="text-lg text-emerald-500 max-sm:text-sm">ethers</span></p>
                </div>
                <div className="col-span-2 border-2 border-emerald-500 rounded-full flex flex-col justify-center items-center py-1 text-2xl text-white max-sm:text-lg max-sm:col-span-1">
                    <p className="">Target</p>
                    <p className="">10 <span className="text-lg text-emerald-500 max-sm:text-sm">ethers</span></p>
                </div>
                <div className="col-span-2 flex flex-row justify-center items-center gap-2">
                    <input type="text" value={0.1} className="w-1/4 text-center text-xl rounded-xl py-3 px-1 bg-[#111116] text-emerald-500" />
                    <button className="w-3/4 border-2 bg-emerald-600 border-emerald-500 rounded-full py-3 text-xl">Donate (ethers)</button>
                </div>
                <button className="col-span-2 border-2 bg-red-600 border-red-500 rounded-full py-3 text-xl">Withdraw</button>
            </section>
            <section className="relative col-span-3 flex flex-col gap-4 pb-10 max-sm:col-span-4">
                <h1 className="text-4xl text-white font-semibold">Event 1</h1>
                <p className="px-4 text-center text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis omnis ullam perferendis laudantium ut odit ipsam quis ratione nemo! Quisquam, fugiat distinctio sit iusto animi odio non. Facere, impedit.</p>
                <p className="absolute bottom-2 left-4 max-sm:static">Ends On: 26 Jan 2024</p>
                <p className="absolute bottom-2 right-4 max-sm:static">Created By: 0x123fdg56y5</p>
            </section>
        </section>
    )
}

export default Campaign;