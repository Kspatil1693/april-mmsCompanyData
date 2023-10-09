
import React, { useEffect, useState } from 'react';
import './Components/AgentClient.css';
import Web3 from 'web3';
import AgentRegister from './Components/AgentRegister';
import { BrowserRouter , Routes,Route} from 'react-router-dom';
import AgentLogin from './Components/AgentLogin';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import ClientRegister from './Components/ClientRegister';
import ClientLogin from './Components/ClientLogin';
import { ethers } from 'ethers';
import AgentLogout from './Components/AgentLogout';

function App() {
  const [web3, setWeb3] = useState(null);
  const [userAddress, setUserAddress] = useState('');
//const navigate = useNavigate();
  useEffect(() => {
    // Check if MetaMask is installed
    if (window.ethereum) {
      const ethereum = window.ethereum;
      const web3Instance = new Web3(ethereum);
      setWeb3(web3Instance);

      ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length === 0) {
          setUserAddress(null);
        } else {
          setUserAddress(accounts[0]);
        }
      });
      ethereum.request({ method: 'eth_accounts' })
        .then((accounts) => {
        if(accounts.length > 0)
          { setUserAddress(accounts[0]) }
        })
        .catch((error) => { 
          console.error('Error fetching accounts',error)
        })

    } else {
      console.error("MetaMask is not installed.");
    }
  }, []);
/*********************agent Details Register and login using  blockchain,web3****************************** */
  async function registerAgent(agentPhoneNumber) {
  try {
    // Check if MetaMask is connected
    if (!web3) {
      throw new Error('MetaMask is not connected.');
    }

    // Replace with your contract's ABI and address
    //const contractABI = [...]; // Your contract's ABI
    const contractAddress = '0x10c19cc773698AF723fE46cb7E84781d793e90f0';

    const contract = new web3.eth.Contract(contractAddress);
    const accounts = await web3.eth.getAccounts();

    // Call your contract's registration function here
    await contract.methods.registerUser(agentPhoneNumber).send({ from: accounts[0] });

    alert('Registration successful!');
    
  } catch (error) {
    console.error('Registration error:', error);
    alert('Registration failed. Please check your MetaMask connection.');
  }
  }

  async function loginAgent(agentPhoneNumber) {
  try {
    // Check if MetaMask is connected
   if (!web3) {
      throw new Error('MetaMask is not connected.');
    }

    // Replace with your contract's ABI and address
   // const contractABI = [...]; // Your contract's ABI
    const contractAddress = 'YOUR_CONTRACT_ADDRESS';

    const contract = new web3.eth.Contract(/**/contractAddress);
    const accounts = await web3.eth.getAccounts();

    // Call your contract's login function here
    const isAuthenticated = await contract.methods.authenticateUser(agentPhoneNumber).call({ from: accounts[0] });

    if (isAuthenticated) {
      alert('Login successful!');
    
    } else {
      alert('Login failed. Invalid username or user not found.');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Login failed. Please check your MetaMask connection.');
  }
  }
    const handleLogout = () => {
    if (web3) {
      const ethereum = window.ethereum;
      ethereum.request({ method: 'eth_requestAccounts' })
        .then(() => {
          setUserAddress(null);
        })
        .catch((error) => {
          console.error('Error logging out with MetaMask:', error);
        });
    }
  };
  /********************Client Details Registerand login using blockchain web3 ************** */
   
  async function registerClient(clientPhoneNumber) {
  try {
    // Check if MetaMask is connected
    if (!web3) {
      throw new Error('MetaMask is not connected.');
    }

    // Replace with your contract's ABI and address
    //const contractABI = [...]; // Your contract's ABI
    const contractAddress = '0x10c19cc773698AF723fE46cb7E84781d793e90f0';

    const contract = new web3.eth.Contract(contractAddress);
    const accounts = await web3.eth.getAccounts();

    // Call your contract's registration function here
    await contract.methods.registerUser(clientPhoneNumber).send({ from: accounts[0] });

    alert('Registration successful!');
    
  } catch (error) {
    console.error('Registration error:', error);
    alert('Registration failed. Please check your MetaMask connection.');
  }
  } 
  
  
  async function loginClient(clientPhoneNumber) {
  try {
    // Check if MetaMask is connected
   if (!web3) {
      throw new Error('MetaMask is not connected.');
    }

    // Replace with your contract's ABI and address
   // const contractABI = [...]; // Your contract's ABI
    const contractAddress = 'YOUR_CONTRACT_ADDRESS';

    const contract = new web3.eth.Contract(/**/contractAddress);
    const accounts = await web3.eth.getAccounts();

    // Call your contract's login function here
    const isAuthenticated = await contract.methods.authenticateUser(clientPhoneNumber).call({ from: accounts[0] });

    if (isAuthenticated) {
      alert('Login successful!');
    
    } else {
      alert('Login failed. Invalid username or user not found.');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Login failed. Please check your MetaMask connection.');
  }
}
  
  
 
  return (
       
    <BrowserRouter>
      {/* Render your RegistrationForm and LoginForm components here */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/agentRegister' element={<AgentRegister registerUser={registerAgent} />} />
        <Route path='/agentLogin' element={<AgentLogin loginUser={loginAgent} />} />
        <Route path='/clientRegister' element={<ClientRegister registerUser={registerClient} />} />
        <Route path='/clientLogin' element={<ClientLogin loginUser={loginClient} />} />
        <Route path='/agentLogout' element={ <AgentLogout logoutUser={handleLogout}/>} />
      </Routes>
          
       
    </BrowserRouter>
      
    
  );
}

export default App;

