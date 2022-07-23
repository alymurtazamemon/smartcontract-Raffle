
const { assert } = require("chai")
const { getNamedAccounts, deployments, ethers, network } = require("hardhat")
const { developmentChains, networkConfig } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
     ? describe.skip
     : describe("Raffle Unit Tests", async function (){
        let raffle, vrfCoordinatorV2Mock
        const chainId = network.config.chainId

        beforeEach(async function () {
            const { deployer } = await getNamedAccounts()
            await deployments.fixture(["all"])
            raffle = await ethers.getContract("Raffle")
            vrfCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
        })
          
        describe("constructor", function () {
              it("intitiallizes the raffle correctly", async () => {
                  // Ideally, we'd separate these out so that only 1 assert per "it" block
                  // And also, we'd make this check everything
                  const raffleState = (await raffle.getRaffleState()).toString()
                  const interval = await raffle.getInterval()
                  assert.equal(raffleState, "0")
                  assert.equal(
                      interval.toString(),
                      networkConfig[chainId]["interval"]
                  )
              })
          })         
     })
     
     
