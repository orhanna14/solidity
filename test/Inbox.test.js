const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
//web3 is a constructor function, we can make multiple instances of it
// For ganache and web3 to work together, you need a provider
//versioning issues around web3 v 0.x.x only callbacks for async code
// v1.x.x support for promises + async/await
const web3 = new Web3(ganache.provider());
// this provider will change depending on the network.
const { interface, bytecode } = require('../compile');
let accounts;
beforeEach(async() => {
  // Get list of all accounts
  accounts = await web3.eth.getAccounts();
  console.log(accounts);
  // Use one of those accounts to deploy the contract
  new web3.eth.Contract(JSON.parse(interface)).deploy({data: bytecode, )
});

describe('Inbox', () => {
  it('deploys a contract', () => {

  });
})