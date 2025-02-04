import { ethers } from 'ethers';
import { useState } from 'react';

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      setWalletConnected(true);
      console.log("Connected:", await signer.getAddress());
    }
  };

  return (
    <div>
      <h1>Welcome to zkScholar</h1>
      <p>Verify and share your academic credentials privately.</p>
      <button onClick={connectWallet}>
        {walletConnected ? "Wallet Connected" : "Connect Wallet"}
      </button>
      <a href="/verify">Verify Credentials</a>
    </div>
  );
}
