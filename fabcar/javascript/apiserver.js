// var express = require('express');
// var bodyParser = require('body-parser');
// var app = express();
// app.use(bodyParser.json());
// // Setting for Hyperledger Fabric
// const { Gateway,Wallets } = require('fabric-network');
// const path = require('path');
// const fs = require('fs');
// //const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
//   //      const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));


// app.get('/api/queryallcars', async function (req, res)  {
//     try {
// const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
//         const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
// // Create a new file system based wallet for managing identities.
//         const walletPath = path.join(process.cwd(), 'wallet');
//         const wallet = await Wallets.newFileSystemWallet(walletPath);
//         console.log(`Wallet path: ${walletPath}`);

//         // Check to see if we've already enrolled the user.
//         const identity = await wallet.get('appUser');
//         if (!identity) {
//             console.log('An identity for the user "appUser" does not exist in the wallet');
//             console.log('Run the registerUser.js application before retrying');
//             return;
//         }
//   // Create a new gateway for connecting to our peer node.
//         const gateway = new Gateway();
//         await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

//         // Get the network (channel) our contract is deployed to.
//         const network = await gateway.getNetwork('mychannel');

//         // Get the contract from the network.
//         const contract = network.getContract('fabcar');

//         // Evaluate the specified transaction.
//         // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
//         // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
//         const result = await contract.evaluateTransaction('queryAllCars');
// 	console.log(JSON.parse(result)[0]["Record"]);
//         console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
//         res.status(200).json({response: result.toString()});
// } catch (error) {
//         console.error(`Failed to evaluate transaction: ${error}`);
//         res.status(500).json({error: error});
//         process.exit(1);
//     }
// });




// app.get('/api/query/:car_index', async function (req, res) {
//     try {
// const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
//         const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
// // Create a new file system based wallet for managing identities.
//         const walletPath = path.join(process.cwd(), 'wallet');
//         const wallet = await Wallets.newFileSystemWallet(walletPath);
//         console.log(`Wallet path: ${walletPath}`);

//         // Check to see if we've already enrolled the user.
//         const identity = await wallet.get('appUser');
//         if (!identity) {
//             console.log('An identity for the user "appUser" does not exist in the wallet');
//             console.log('Run the registerUser.js application before retrying');
//             return;
//         }
//   // Create a new gateway for connecting to our peer node.
//         const gateway = new Gateway();
//         await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

//         // Get the network (channel) our contract is deployed to.
//         const network = await gateway.getNetwork('mychannel');

//         // Get the contract from the network.
//         const contract = network.getContract('fabcar');
// // Evaluate the specified transaction.
//         // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
//         // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')
//         const result = await contract.evaluateTransaction('queryCar', req.params.car_index);
//         console.log(`Transaction has been evaluated, result is: ${result.toString()}`);
//         res.status(200).json({response: result.toString()});
// } catch (error) {
//         console.error(`Failed to evaluate transaction: ${error}`);
//         res.status(500).json({error: error});
//         process.exit(1);
//     }
// });



// app.post('/api/addcar/', async function (req, res) {
//     try {
// const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
//         const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
// // Create a new file system based wallet for managing identities.
//         const walletPath = path.join(process.cwd(), 'wallet');
//         const wallet = await Wallets.newFileSystemWallet(walletPath);
//         console.log(`Wallet path: ${walletPath}`);

//         // Check to see if we've already enrolled the user.
//         const identity = await wallet.get('appUser');
//         if (!identity) {
//             console.log('An identity for the user "appUser" does not exist in the wallet');
//             console.log('Run the registerUser.js application before retrying');
//             return;
//         }
//   // Create a new gateway for connecting to our peer node.
//         const gateway = new Gateway();
//         await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

//         // Get the network (channel) our contract is deployed to.
//         const network = await gateway.getNetwork('mychannel');

//         // Get the contract from the network.
//         const contract = network.getContract('fabcar');
// // Submit the specified transaction.
//         // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
//         // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR10', 'Dave')
//         await contract.submitTransaction('createCar', req.body.carid, req.body.make, req.body.model, req.body.colour, req.body.owner);
//         console.log('Transaction has been submitted');
//         res.send('Transaction has been submitted');
// // Disconnect from the gateway.
//         await gateway.disconnect();
// } catch (error) {
//         console.error(`Failed to submit transaction: ${error}`);
//         process.exit(1);
//     }
// })



// app.put('/api/changeowner/:car_index', async function (req, res) {
//     try {
// const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
//         const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));
// // Create a new file system based wallet for managing identities.
//         const walletPath = path.join(process.cwd(), 'wallet');
//         const wallet = await Wallets.newFileSystemWallet(walletPath);
//         console.log(`Wallet path: ${walletPath}`);

//         // Check to see if we've already enrolled the user.
//         const identity = await wallet.get('appUser');
//         if (!identity) {
//             console.log('An identity for the user "appUser" does not exist in the wallet');
//             console.log('Run the registerUser.js application before retrying');
//             return;
//         }
//   // Create a new gateway for connecting to our peer node.
//         const gateway = new Gateway();
//         await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });

//         // Get the network (channel) our contract is deployed to.
//         const network = await gateway.getNetwork('mychannel'); 

//         // Get the contract from the network.
//         const contract = network.getContract('fabcar');
// // Submit the specified transaction.
//         // createCar transaction - requires 5 argument, ex: ('createCar', 'CAR12', 'Honda', 'Accord', 'Black', 'Tom')
//         // changeCarOwner transaction - requires 2 args , ex: ('changeCarOwner', 'CAR10', 'Dave')
//         await contract.submitTransaction('changeCarOwner', req.params.car_index, req.body.owner);
//         console.log('Transaction has been submitted');
//         res.send('Transaction has been submitted');
// // Disconnect from the gateway.
//         await gateway.disconnect();
// } catch (error) {
//         console.error(`Failed to submit transaction: ${error}`);
//         process.exit(1);
//     } 
// })

// app.listen(8080);


// const express = require('express');
// const bodyParser = require('body-parser');
// const { Gateway, Wallets } = require('fabric-network');
// const path = require('path');
// const fs = require('fs');
// var cors = require('cors'); 

// const app = express();  
// app.use(bodyParser.json());
// app.use(cors()); 

// let contract; // global contract object

// // Initialize Fabric connection once at startup
// async function initFabric() {
//     try {
//         const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
//         const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

//         const walletPath = path.join(process.cwd(), 'wallet');
//         const wallet = await Wallets.newFileSystemWallet(walletPath);
//         console.log(`Wallet path: ${walletPath}`);

//         const identity = await wallet.get('appUser');
//         if (!identity) {
//             console.log('An identity for the user "appUser" does not exist in the wallet');
//             console.log('Run registerUser.js before retrying');
//             process.exit(1);
//         }

//         const gateway = new Gateway();
//         await gateway.connect(ccp, {
//             wallet,
//             identity: 'appUser',
//             discovery: { enabled: true, asLocalhost: true }
//         });

//         const network = await gateway.getNetwork('mychannel');
//         contract = network.getContract('fabcar');
//         console.log("Successfully connected to Hyperledger Fabric network");
//     } catch (error) {
//         console.error("Error initializing Fabric connection:", error);
//         process.exit(1);
//     }
// }

// // Query all cars
// app.get('/api/queryallcars', async (req, res) => {
//     try {
//         const result = await contract.evaluateTransaction('queryAllCars');
//         res.status(200).json({ response: JSON.parse(result.toString()) });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: error.toString() });
//     }
// });

// // Query single car
// app.get('/api/query/:car_index', async (req, res) => {
//     try {
//         const result = await contract.evaluateTransaction('queryCar', req.params.car_index);
//         res.status(200).json({ response: JSON.parse(result.toString()) });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: error.toString() });
//     }
// });

// // Add new car
// app.post('/api/addcar', async (req, res) => {
//     try {
//         const { carid, make, model, colour, owner } = req.body;
//         await contract.submitTransaction('createCar', carid, make, model, colour, owner);
//         res.send('Car has been added');
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: error.toString() });
//     }
// });

// // Change car owner
// app.put('/api/changeowner/:car_index', async (req, res) => {
//     try {
//         await contract.submitTransaction('changeCarOwner', req.params.car_index, req.body.owner);
//         res.send('Car owner has been updated');
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: error.toString() });
//     }
// });

// // Start server after fabric initialized
// app.listen(8080, async () => {
//     await initFabric();
//     console.log('API server listening on port 8080');
// });



var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors'); // Allow frontend to access backend

var app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Hyperledger Fabric SDK setup
const { Gateway, Wallets } = require('fabric-network');
const path = require('path');
const fs = require('fs');

const ccpPath = path.resolve(__dirname, '..', '..', 'test-network', 'organizations', 'peerOrganizations', 'org1.example.com', 'connection-org1.json');
const ccp = JSON.parse(fs.readFileSync(ccpPath, 'utf8'));

// Reusable helper to get gateway and contract
async function getContract() {
    const walletPath = path.join(process.cwd(), 'wallet');
    const wallet = await Wallets.newFileSystemWallet(walletPath);
    const identity = await wallet.get('appUser');
    if (!identity) {
        throw new Error('Identity for appUser not found. Run registerUser.js first.');
    }
    const gateway = new Gateway();
    await gateway.connect(ccp, { wallet, identity: 'appUser', discovery: { enabled: true, asLocalhost: true } });
    const network = await gateway.getNetwork('mychannel');
    const contract = network.getContract('fabcar');
    return { gateway, contract };
}

// Query All Cars
app.get('/api/queryallcars', async function (req, res) {
    try {
        const { gateway, contract } = await getContract();
        const result = await contract.evaluateTransaction('queryAllCars');
        await gateway.disconnect();
        res.status(200).json({ response: JSON.parse(result.toString()) });  // Send as object directly
    } catch (error) {
        console.error('Failed to query all cars:', error);
        res.status(500).json({ error: error.message });
    }
});

// Query one car
app.get('/api/query/:car_index', async function (req, res) {
    try {
        const { gateway, contract } = await getContract();
        const result = await contract.evaluateTransaction('queryCar', req.params.car_index);
        await gateway.disconnect();
        res.status(200).json({ response: JSON.parse(result.toString()) });
    } catch (error) {
        console.error('Failed to query car:', error);
        res.status(500).json({ error: error.message });
    }
});

// Add Car
app.post('/api/addcar/', async function (req, res) {
    try {
        const { carid, make, model, color, owner } = req.body;
        const { gateway, contract } = await getContract();
        await contract.submitTransaction('createCar', carid, make, model, color, owner);
        await gateway.disconnect();
        res.status(200).send('Transaction has been submitted');
    } catch (error) {
        console.error('Failed to submit add car transaction:', error);
        res.status(500).json({ error: error.message });
    }
});

// Change Car Owner
app.put('/api/changeowner/:car_index', async function (req, res) {
    try {
        const car_index = req.params.car_index;
        const { owner } = req.body;
        const { gateway, contract } = await getContract();
        await contract.submitTransaction('changeCarOwner', car_index, owner);
        await gateway.disconnect();
        res.status(200).send('Ownership has been changed');
    } catch (error) {
        console.error('Failed to change car owner:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(8080, () => {
    console.log("API Server running on http://localhost:8080");
});
