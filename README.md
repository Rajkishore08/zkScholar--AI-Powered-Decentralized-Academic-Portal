# 📜 zkScholar - AI-Powered Decentralized Credential & Research Verification

## 🔗 Overview
zkScholar is a **privacy-preserving Web3 platform** that allows users to verify academic credentials and research contributions using **zero-knowledge proofs (ZKPs)**. It integrates **AI for fraud detection**, **zkVerify for secure proof validation**, and supports **Arbitrum and EDU Chain**.

## 🚀 Features
✅ **Privacy-Preserving Verification** – Users can prove credentials without revealing personal data.  
✅ **Zero-Knowledge Proofs (ZKPs)** – Uses **zkVerify** for trustless validation.  
✅ **AI-Powered Fraud Detection** – Employs **OCR & LLM-based analysis** to detect fake credentials.  
✅ **Soulbound NFTs** – Credentials are **non-transferable** and tied to users.  
✅ **Decentralized Science (DeSci)** – Researchers can prove peer reviews & funding history.  
✅ **Multi-Blockchain Support** – Works with **Arbitrum Stylus (Rust) & EDU Chain (EVM)**.  

---

## 🏆 Applicable Hackathon Tracks
zkScholar is **designed to qualify for multiple tracks** by implementing key requirements from each sponsor:

1. **AI Web3 Application with zkVerify** ✅  
   - Integrates AI-based OCR for fraud detection.
   - Uses zkVerify to validate credentials.
   
2. **DeSci Web3 Application with zkVerify** ✅  
   - Supports decentralized verification of **research peer reviews & funding history**.
   - Uses zkVerify and EDU Chain for secure storage.
   
3. **Arbitrum Stylus Web3 dApp with zkVerify** ✅  
   - Smart contracts written in **Rust for Arbitrum Stylus**.
   - Uses zkVerify for proof validation.
   
4. **Arbitrum Web3 dApp with zkVerify** ✅  
   - Uses Arbitrum for **EVM-based smart contracts**.
   - Implements zkVerify for credential verification.
   
5. **zkVerify Main Prize** ✅  
   - Fully functional Web3 dApp with a web frontend.
   - Uses **zkVerify** for proof verification.
   - Works on **Arbitrum and EDU Chain**.
   - Designed for **mass adoption** in academia and research.

---

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/820cb201-52ed-4af0-afd8-a2e5ae1e468a)
![image](https://github.com/user-attachments/assets/a1662414-cc61-4470-9f9b-cbd14e8a1d9d)

![image](https://github.com/user-attachments/assets/9594be68-8363-4eee-81ce-842aeda435f2)
![image](https://github.com/user-attachments/assets/b63c394a-d989-4b89-8c67-df466a53c8c4)

![image](https://github.com/user-attachments/assets/b2fc051c-dc2a-4954-b748-e632dc86941c)
![image](https://github.com/user-attachments/assets/36aa5556-d074-4d8a-98a4-1c264caf0e17)

---

## 🛠 Tech Stack
- **Frontend:** React.js, Next.js  
- **Backend:** Node.js, Express.js  
- **Blockchain:** Arbitrum Stylus (Rust), EDU Chain (EVM), Solidity  
- **AI:** Tesseract.js (OCR), OpenAI GPT for fraud detection  
- **Storage:** IPFS, PostgreSQL  
- **Zero-Knowledge Proofs:** zkVerify  

---

## 🏗 Architecture
1️⃣ **User submits credential (degree, research paper, peer review).**  
2️⃣ **AI verifies authenticity using OCR & LLM-based checks.**  
3️⃣ **Smart contract on EDU Chain/Arbitrum validates & issues zk-proof.**  
4️⃣ **zkVerify ensures proof verification without exposing private data.**  
5️⃣ **Soulbound NFT is minted, enabling permissionless verification.**  

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/zkScholar.git
cd zkScholar
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file and add the required API keys:
```
NODE_ENV=development
DATABASE_URL=your_database_url
INFURA_API_KEY=your_infura_key
ZKVERIFY_API_KEY=your_zkverify_key
```

### 4️⃣ Run the Development Server
```sh
npm run dev
```

### 5️⃣ Deploy Smart Contracts
```sh
npx hardhat run scripts/deploy.js --network arbitrum
```

---

## 🔗 Live Demo & Links
- 🌐 **Live App:** [zkScholar Website](https://your-deployed-link.com)  
- 💾 **GitHub Repository:** [zkScholar GitHub](https://github.com/your-username/zkScholar)  
- 📽 **Video Demo:** [Loom/YouTube Demo](https://your-video-demo.com)  

---

## 🐛 Challenges Faced
🔹 **zkVerify Integration:** Optimized proof generation for fast verification.  
🔹 **AI-Based Fraud Detection:** Implemented robust OCR-based certificate analysis.  
🔹 **Deploying on Arbitrum Stylus:** Debugged Rust-based smart contracts.  

---

## 🤝 Contributing
Contributions are welcome! To contribute:
1. **Fork** this repository.  
2. **Create a branch:** `git checkout -b feature-xyz`  
3. **Commit your changes:** `git commit -m "Added feature XYZ"`  
4. **Push the branch:** `git push origin feature-xyz`  
5. **Create a Pull Request**  

---

## 📜 License
This project is licensed under the **MIT License**.
