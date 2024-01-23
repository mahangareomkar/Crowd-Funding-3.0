const { assert, expect } = require("chai")

describe("CrowdFunding", async () => {
    let crowdFundingFactory;
    let deployedContract;
    beforeEach(async function () {
        crowdFundingFactory = await ethers.getContractFactory("CrowdFunding");
        deployedContract = await crowdFundingFactory.deploy()
        // console.log(await deployedContract.getAddress());
    })

    it("Fails to create Campaign", async function () {
        await expect(deployedContract.createCampaign("Campaign1", "This is my first Campaign", 100, 11579208, ""), "The Deadline should be a date in the future");
    })
    it("Create a Campaign", async function () {
        const expectedValue = 0;
        const response = await deployedContract.createCampaign("Campaign1", "This is my first Campaign", 100, Date.now(), "");
        assert(response, expectedValue);
    })
    it("Create second Campaign", async function () {
        const expectedValue = 1;
        const response = await deployedContract.createCampaign("Campaign2", "This is my second Campaign", 100, Date.now(), "");
        assert(response, expectedValue);
    })
    it("Get Campaigns", async function () {
        const expectedValue = 2;
        await deployedContract.createCampaign("Campaign1", "This is my first Campaign", 100, Date.now(), "");
        await deployedContract.createCampaign("Campaign2", "This is my second Campaign", 100, Date.now(), "");
        const response = await deployedContract.getCampaigns();
        // console.log(response);
        assert(response.length, expectedValue);
    })
})