// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.19;

contract CrowdFunding {
    struct Transaction {
        address donatorAddress;
        uint256 donatedAmount;
    }

    struct Campaign {
        uint256 id;
        address owner;
        string title;
        string description;
        int256 target;
        uint256 deadline;
        uint256 amountCollected;
        string image;
        Transaction[] donations;
    }

    uint256 public numberOfCampaigns = 0;
    mapping(uint256 => Campaign) public Campaigns;

    receive() external payable {
        // donate();
    }

    fallback() external payable {
        // donate();
    }

    function createCampaign(
        string memory _title,
        string memory _description,
        int256 _target,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        Campaign storage campaign = Campaigns[numberOfCampaigns];
        require(
            campaign.deadline < block.timestamp,
            "The Deadline should be a date in the future"
        );

        campaign.owner = msg.sender;
        campaign.id = numberOfCampaigns;
        campaign.title = _title;
        campaign.description = _description;
        campaign.image = _image;
        campaign.target = _target;
        campaign.deadline = _deadline;
        campaign.amountCollected = 0;

        numberOfCampaigns++;

        return numberOfCampaigns - 1;
    }

    function donate(uint256 _id) public payable {
        Campaign storage campaign = Campaigns[_id];

        Transaction memory transaction;
        transaction.donatorAddress = msg.sender;
        transaction.donatedAmount = msg.value;

        (bool success, ) = payable(campaign.owner).call{value: msg.value}("");

        if (success) {
            campaign.amountCollected += msg.value;
            campaign.donations.push(transaction);
        }
    }

    function getTransactions(
        uint256 _id
    ) public view returns (Transaction[] memory) {
        return Campaigns[_id].donations;
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](numberOfCampaigns);

        for (uint256 i = 0; i < numberOfCampaigns; i++) {
            Campaign storage campaign = Campaigns[i];
            allCampaigns[i] = campaign;
        }

        return allCampaigns;
    }
}
