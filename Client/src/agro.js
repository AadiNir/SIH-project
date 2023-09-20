
  export const abi= [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idp",
          "type": "uint256"
        }
      ],
      "name": "get_order",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "item_owner",
              "type": "address"
            },
            {
              "internalType": "address[]",
              "name": "pending_address",
              "type": "address[]"
            },
            {
              "internalType": "uint16",
              "name": "qty",
              "type": "uint16"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "inflation",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "product_name",
              "type": "string"
            },
            {
              "internalType": "address[]",
              "name": "verified_address",
              "type": "address[]"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ],
          "internalType": "struct agro.item",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "pending_addressp",
          "type": "address[]"
        },
        {
          "internalType": "uint16",
          "name": "qtyp",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "pricep",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "inflationp",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "product_namep",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "verified_addressp",
          "type": "address[]"
        }
      ],
      "name": "initiate_order",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user_address",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "idp",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "new_inflation",
          "type": "uint256"
        }
      ],
      "name": "to_verify",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]