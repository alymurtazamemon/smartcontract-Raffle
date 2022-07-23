const { ethers } = require("hardhat")

 const networkConfig = {
    4: {

        name: "rinkeby",
        vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0xd4bb89654db74673a187bd804519e65e3f71a52bc55f11da7601a13dcf505314",
        subscriptionId: "0",
        callbackGasLimit: "500000", //500,000
        interval: "30",
           
    },  
    31337: {

        name: "hardhat",
        vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
        entranceFee: ethers.utils.parseEther("0.01"),
        gasLane: "0xd4bb89654db74673a187bd804519e65e3f71a52bc55f11da7601a13dcf505314",
        subscriptionId: "0",
        callbackGasLimit: "500000", //500,000
        interval: "30",
    },




    //add development chains for mocks

 }
      
 const developmentChains = ["hardhat", "localhost"]

 module.exports = {
       networkConfig,
       developmentChains,

 }