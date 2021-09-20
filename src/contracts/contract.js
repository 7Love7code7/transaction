import web3 from "./web3";
const send_address = "0xfa0a8b60B2AF537DeC9832f72FD233e93E4C8463";

const send_abi = [
  {
    inputs: [
      { internalType: "uint256", name: "time", type: "uint256" },
      { internalType: "address payable", name: "recipient", type: "address" },
    ],
    name: "sendEthAtTime",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
export const send_contract =  new web3.eth.Contract(send_abi, send_address);

const register_address = "0xB82Ae7779aB1742734fCE32A4b7fDBCf020F2667";

const register_abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "AUTO",
        type: "address",
      },
      {
        internalType: "contract IStakeManager",
        name: "staker",
        type: "address",
      },
      {
        internalType: "contract IOracle",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "contract IForwarder",
        name: "veriForwarder",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
    name: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "requester",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "referer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint120",
        name: "initEthSent",
        type: "uint120",
      },
      {
        indexed: false,
        internalType: "uint120",
        name: "ethForCall",
        type: "uint120",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "verifySender",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "payWithAUTO",
        type: "bool",
      },
    ],
    name: "HashedReqAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "wasExecuted",
        type: "bool",
      },
    ],
    name: "HashedReqRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "HashedReqUnveriAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "wasExecuted",
        type: "bool",
      },
    ],
    name: "HashedReqUnveriRemoved",
    type: "event",
  },
  {
    inputs: [],
    name: "BASE_BPS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GAS_OVERHEAD_AUTO",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GAS_OVERHEAD_ETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAY_AUTO_BPS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PAY_ETH_BPS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "requester",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "referer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint120",
            name: "initEthSent",
            type: "uint120",
          },
          {
            internalType: "uint120",
            name: "ethForCall",
            type: "uint120",
          },
          {
            internalType: "bool",
            name: "verifySender",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "payWithAUTO",
            type: "bool",
          },
        ],
        internalType: "struct IRegistry.Request",
        name: "r",
        type: "tuple",
      },
    ],
    name: "cancelHashedReq",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "requester",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "referer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint120",
            name: "initEthSent",
            type: "uint120",
          },
          {
            internalType: "uint120",
            name: "ethForCall",
            type: "uint120",
          },
          {
            internalType: "bool",
            name: "verifySender",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "payWithAUTO",
            type: "bool",
          },
        ],
        internalType: "struct IRegistry.Request",
        name: "r",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "dataPrefix",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "dataSuffix",
        type: "bytes",
      },
    ],
    name: "cancelHashedReqUnveri",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "requester",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "referer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint120",
            name: "initEthSent",
            type: "uint120",
          },
          {
            internalType: "uint120",
            name: "ethForCall",
            type: "uint120",
          },
          {
            internalType: "bool",
            name: "verifySender",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "payWithAUTO",
            type: "bool",
          },
        ],
        internalType: "struct IRegistry.Request",
        name: "r",
        type: "tuple",
      },
    ],
    name: "executeHashedReq",
    outputs: [
      {
        internalType: "uint256",
        name: "gasUsed",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "requester",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "referer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint120",
            name: "initEthSent",
            type: "uint120",
          },
          {
            internalType: "uint120",
            name: "ethForCall",
            type: "uint120",
          },
          {
            internalType: "bool",
            name: "verifySender",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "payWithAUTO",
            type: "bool",
          },
        ],
        internalType: "struct IRegistry.Request",
        name: "r",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "dataPrefix",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "dataSuffix",
        type: "bytes",
      },
    ],
    name: "executeHashedReqUnveri",
    outputs: [
      {
        internalType: "uint256",
        name: "gasUsed",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAUTO",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getExecCountOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "r",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "dataPrefix",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "dataPostfix",
        type: "bytes",
      },
    ],
    name: "getHashedIpfsReq",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getHashedReq",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getHashedReqUnveri",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHashedReqs",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHashedReqsLen",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startIdx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endIdx",
        type: "uint256",
      },
    ],
    name: "getHashedReqsSlice",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHashedReqsUnveri",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHashedReqsUnveriLen",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startIdx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endIdx",
        type: "uint256",
      },
    ],
    name: "getHashedReqsUnveriSlice",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "r",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "dataPrefix",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "dataPostfix",
        type: "bytes",
      },
    ],
    name: "getIpfsReqBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getReferalCountOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "requester",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "referer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint120",
            name: "initEthSent",
            type: "uint120",
          },
          {
            internalType: "uint120",
            name: "ethForCall",
            type: "uint120",
          },
          {
            internalType: "bool",
            name: "verifySender",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "payWithAUTO",
            type: "bool",
          },
        ],
        internalType: "struct IRegistry.Request",
        name: "r",
        type: "tuple",
      },
    ],
    name: "getReqBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getReqCountOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "rBytes",
        type: "bytes",
      },
    ],
    name: "getReqFromBytes",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "requester",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "address payable",
            name: "referer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint120",
            name: "initEthSent",
            type: "uint120",
          },
          {
            internalType: "uint120",
            name: "ethForCall",
            type: "uint120",
          },
          {
            internalType: "bool",
            name: "verifySender",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "payWithAUTO",
            type: "bool",
          },
        ],
        internalType: "struct IRegistry.Request",
        name: "r",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getStakeManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVerifiedForwarder",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hashedIpfsReq",
        type: "bytes32",
      },
    ],
    name: "newHashedReqUnveri",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "referer",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        internalType: "uint120",
        name: "ethForCall",
        type: "uint120",
      },
      {
        internalType: "bool",
        name: "verifySender",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "payWithAUTO",
        type: "bool",
      },
    ],
    name: "newReq",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
export const register_contract = new web3.eth.Contract(register_abi, register_address);
