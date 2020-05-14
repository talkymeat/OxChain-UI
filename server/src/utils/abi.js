export const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "new_admin",
				"type": "address"
			}
		],
		"name": "add_admin",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "com_val_",
				"type": "bytes"
			},
			{
				"name": "com_fileHash_",
				"type": "bytes"
			},
			{
				"name": "verifier_1",
				"type": "address"
			},
			{
				"name": "verifier_2",
				"type": "address"
			},
			{
				"name": "verifier_3",
				"type": "address"
			},
			{
				"name": "verifier_4",
				"type": "address"
			}
		],
		"name": "insert_age",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "degree_",
				"type": "bytes"
			},
			{
				"name": "description_",
				"type": "bytes"
			},
			{
				"name": "com_fileHash_",
				"type": "bytes"
			},
			{
				"name": "verifier_1",
				"type": "address"
			},
			{
				"name": "verifier_2",
				"type": "address"
			},
			{
				"name": "verifier_3",
				"type": "address"
			},
			{
				"name": "verifier_4",
				"type": "address"
			}
		],
		"name": "insert_degree",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "license_",
				"type": "bytes"
			},
			{
				"name": "description",
				"type": "bytes"
			},
			{
				"name": "expiry_date",
				"type": "bytes"
			},
			{
				"name": "com_fileHash_",
				"type": "bytes"
			},
			{
				"name": "verifier_1",
				"type": "address"
			},
			{
				"name": "verifier_2",
				"type": "address"
			},
			{
				"name": "verifier_3",
				"type": "address"
			},
			{
				"name": "verifier_4",
				"type": "address"
			}
		],
		"name": "insert_license",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			}
		],
		"name": "pay_validator_of_age",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "pay_validator_of_degree",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "pay_validator_of_license",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "val",
				"type": "bytes"
			}
		],
		"name": "prove_attributes_ownership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			}
		],
		"name": "register_client",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "validator",
				"type": "address"
			}
		],
		"name": "register_validator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "res",
				"type": "bytes32"
			}
		],
		"name": "validate_age",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "res",
				"type": "bytes32"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "validate_degree",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "res",
				"type": "bytes32"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "validate_license",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "verifier",
				"type": "address"
			},
			{
				"name": "r",
				"type": "bytes"
			},
			{
				"name": "m",
				"type": "string"
			}
		],
		"name": "verify_age_commitment",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "verifier",
				"type": "address"
			},
			{
				"name": "encrypted_approval",
				"type": "bytes32"
			}
		],
		"name": "compare_client_age_verification_res",
		"outputs": [
			{
				"name": "res_",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "verifier",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			},
			{
				"name": "encrypted_approval",
				"type": "bytes32"
			}
		],
		"name": "compare_client_degree_verification_res",
		"outputs": [
			{
				"name": "res_",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "verifier",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			},
			{
				"name": "encrypted_approval",
				"type": "bytes32"
			}
		],
		"name": "compare_client_license_verification_res",
		"outputs": [
			{
				"name": "res_",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			}
		],
		"name": "determineAmount_toPay_to_ageValidator",
		"outputs": [
			{
				"name": "to_pay",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "determineAmount_toPay_to_degreeValidator",
		"outputs": [
			{
				"name": "to_pay",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "determineAmount_toPay_to_licenseValidator",
		"outputs": [
			{
				"name": "to_pay",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "age_",
				"type": "bytes"
			},
			{
				"name": "file_hash_",
				"type": "bytes"
			}
		],
		"name": "find_age",
		"outputs": [
			{
				"name": "found",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "degree_type",
				"type": "bytes"
			},
			{
				"name": "desc",
				"type": "bytes"
			},
			{
				"name": "file_hash_",
				"type": "bytes"
			}
		],
		"name": "find_degree_index",
		"outputs": [
			{
				"name": "found",
				"type": "bool"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "license_type",
				"type": "bytes"
			},
			{
				"name": "desc",
				"type": "bytes"
			},
			{
				"name": "exp_date",
				"type": "bytes"
			},
			{
				"name": "file_hash_",
				"type": "bytes"
			}
		],
		"name": "find_license_index",
		"outputs": [
			{
				"name": "found",
				"type": "bool"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			}
		],
		"name": "get_client_age_committed_fileHash",
		"outputs": [
			{
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			}
		],
		"name": "get_client_age_num_of_preferred_verifiers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_age_preferred_verifier",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			}
		],
		"name": "get_client_age_total_number_of_verifications",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			}
		],
		"name": "get_client_age_val",
		"outputs": [
			{
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_age_verification_res",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "ver_res_indx",
				"type": "uint256"
			}
		],
		"name": "get_client_age_verification_res_counter",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "ver_res_indx",
				"type": "uint256"
			},
			{
				"name": "who_gets_paid_indx",
				"type": "uint256"
			}
		],
		"name": "get_client_age_verification_res_whoGetsPaid",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_age_verification_verifier",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_degree_committed_fileHash",
		"outputs": [
			{
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_degree_description",
		"outputs": [
			{
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_degree_num_of_preferred_verifiers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_degree_number_of_verifications",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "degree_indx",
				"type": "uint256"
			},
			{
				"name": "verifier_indx",
				"type": "uint256"
			}
		],
		"name": "get_client_degree_preferred_verifier",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_degree_type",
		"outputs": [
			{
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "degree_indx",
				"type": "uint256"
			},
			{
				"name": "verifier_indx",
				"type": "uint256"
			}
		],
		"name": "get_client_degree_verification_res",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "degree_indx",
				"type": "uint256"
			},
			{
				"name": "who_gets_paid_indx",
				"type": "uint256"
			}
		],
		"name": "get_client_degree_verification_res_whoGetsPaid",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_license_committed_fileHash",
		"outputs": [
			{
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_license_description",
		"outputs": [
			{
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_license_expiryDate",
		"outputs": [
			{
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_license_num_of_preferred_verifiers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_license_number_of_verifications",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "degree_indx",
				"type": "uint256"
			},
			{
				"name": "verifier_indx",
				"type": "uint256"
			}
		],
		"name": "get_client_license_preferred_verifier",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "indx",
				"type": "uint256"
			}
		],
		"name": "get_client_license_type",
		"outputs": [
			{
				"name": "",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "license_indx",
				"type": "uint256"
			},
			{
				"name": "verifier_indx",
				"type": "uint256"
			}
		],
		"name": "get_client_license_verification_res",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "client",
				"type": "address"
			},
			{
				"name": "degree_indx",
				"type": "uint256"
			},
			{
				"name": "who_gets_paid_indx",
				"type": "uint256"
			}
		],
		"name": "get_client_license_verification_res_whoGetsPaid",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "initial_verification_cost",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ratio",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "total_valid_admins",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "total_valid_clients",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "total_valid_validators",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "valid_admins_list",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "valid_client_list",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "valid_clients",
		"outputs": [
			{
				"name": "total_number_of_degrees",
				"type": "uint256"
			},
			{
				"name": "total_number_of_licenses",
				"type": "uint256"
			},
			{
				"name": "valid",
				"type": "bool"
			},
			{
				"name": "proof_of_attributes_ownership",
				"type": "bytes"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "valid_organizations",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "valid_validators",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "valid_validators_list",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"name": "validator_with_inconsistent_res",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];