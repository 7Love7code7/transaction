import React, {useState} from 'react';
import './assets/main.css'
import './App.css';
import {send_contract, register_contract} from './contracts/contract'
import web3 from './contracts/web3'
import { CashIcon, ClockIcon, ReceiptRefundIcon } from '@heroicons/react/outline'

function App() {
  const [delaytime, setDelaytime] = useState('')
  const [recipient, setRecipient] = useState('')
  const [ethvalue, setEthvalue] = useState('')
  const [message, setMessage] = useState('Send Eth After Delay.')

  const onSubmit = async () => {
    const accounts = await web3.eth.getAccounts();

    setMessage('Waiting for transaction');

    // callData includes the transaction start time(current + dealyTime) and recipient address.
    const callData = send_contract.methods.sendEthAtTime(parseInt(delaytime) + Math.round((new Date()).getTime() / 1000), recipient).encodeABI();

    //The ref_address to get rewarded for referring the sender, just set as burn address.
    const ref_address = '0x0000000000000000000000000000000000000000';

    //The target_address is the Eth sender address.
    const target_address = '0xfa0a8b60B2AF537DeC9832f72FD233e93E4C8463';

    //ethForCall  the amount that user will send.
    const ethForCall =  web3.utils.toWei(ethvalue, 'ether');

    //sendAmount is ethForCall + future transationc fee(manually set as 0.001)
    const sendAmount = web3.utils.toWei((parseFloat(ethvalue) + 0.001).toString(), 'ether');

    setMessage('Waiting for transaction');
    await register_contract.methods.newReq(target_address, ref_address, callData, ethForCall, false, false).send({from: accounts[0], value: sendAmount});

    setDelaytime('');
    setRecipient('');
    setEthvalue('');
    setMessage('Transaction is scheduled at specified time');
  }

  
  return (
    <div className="App">
      <div className="min-h-screen flex justify-center items-center py-12 px-4 bg-gray-900 bg-cover relative ">
        <div className="mt-3 items-center">
          <div
            className="bg-white max-w-sm mx-auto space-y-6 rounded-xl shadow-xl overflow-hidden p-12"
            onSubmit={() => onSubmit}
          >
            <h2 className="text-4xl font-bold text-center text-green-600">
              SEND ETH AFTER DELAY
            </h2>
            <div className="flex f-outline px-3 relative border focus-within:border-green-500 rounded-md">
              <ClockIcon className="h-10 w-10 text-green-500" />
              <input
                name="time"
                value={delaytime}
                onChange={(e) => setDelaytime(e.target.value)}
                placeholder="Seconds"
                className="block p-2 w-64 text-lg appearance-none focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex f-outline px-3 relative border focus-within:border-green-500 rounded-md">
              <CashIcon className="h-10 w-10 text-green-500" />
              <input
                name="value"
                value={ethvalue}
                onChange={(e) => setEthvalue(e.target.value)}
                placeholder="Eth"
                className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex f-outline px-3 relative border rounded-md focus-within:border-green-500">
              <ReceiptRefundIcon className="h-10 w-10 text-green-500" />
              <input
                name="recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="Address"
                className="block p-2 w-full text-lg appearance-none focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex items-center justify-center mt-5">
              <button 
                className="px-6 py-2 ml-4 font-semibold cursor-pointer text-center focus:outline-none transition hover:shadow-lg shadow hover:bg-green-900 rounded-full text-white bg-green-600 "
                onClick = {()=>onSubmit()}
              >
                Send
              </button>
            </div>
            <div className="flex flex-col items-center justify-center mt-6">
              <p className="text-md">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

