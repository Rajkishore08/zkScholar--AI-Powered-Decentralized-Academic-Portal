import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

interface NFT {
  id: string;
  title: string;
  institution: string;
  issueDate: string;
  imageUrl: string;
  tokenId: string;
}

const ViewNFTs = () => {
  const nfts: NFT[] = [
    {
      id: '1',
      title: "Bachelor's Degree in Computer Science",
      institution: 'University of Technology',
      issueDate: '2023-06-15',
      imageUrl: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80&w=400',
      tokenId: '0x123...abc',
    },
    {
      id: '2',
      title: 'Machine Learning Certification',
      institution: 'Tech Institute',
      issueDate: '2024-01-20',
      imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=400',
      tokenId: '0x456...def',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Soulbound NFTs</h1>
        <Award className="h-8 w-8 text-blue-900" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {nfts.map((nft) => (
          <div key={nft.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={nft.imageUrl}
              alt={nft.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{nft.title}</h3>
              <div className="text-sm text-gray-500 space-y-1">
                <p>{nft.institution}</p>
                <p>Issued: {new Date(nft.issueDate).toLocaleDateString()}</p>
                <p className="font-mono">Token ID: {nft.tokenId}</p>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => window.open(`https://etherscan.io/token/${nft.tokenId}`, '_blank')}
                  className="inline-flex items-center text-sm text-blue-900 hover:text-blue-700"
                >
                  View on Etherscan
                  <ExternalLink className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewNFTs;