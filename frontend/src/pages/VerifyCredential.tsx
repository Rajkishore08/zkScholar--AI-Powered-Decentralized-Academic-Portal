import React, { useState } from 'react';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

type VerificationStatus = 'pending' | 'verified' | 'failed';

interface Credential {
  id: string;
  name: string;
  institution: string;
  date: string;
  status: VerificationStatus;
}

const StatusBadge = ({ status }: { status: VerificationStatus }) => {
  const statusConfig = {
    pending: {
      icon: Clock,
      text: 'Pending',
      className: 'bg-yellow-100 text-yellow-800',
    },
    verified: {
      icon: CheckCircle,
      text: 'Verified',
      className: 'bg-green-100 text-green-800',
    },
    failed: {
      icon: XCircle,
      text: 'Failed',
      className: 'bg-red-100 text-red-800',
    },
  };

  const { icon: Icon, text, className } = statusConfig[status];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
      <Icon className="mr-1 h-4 w-4" />
      {text}
    </span>
  );
};

const VerifyCredential = () => {
  const [credentials] = useState<Credential[]>([
    {
      id: '1',
      name: "Bachelor's Degree in Computer Science",
      institution: 'University of Technology',
      date: '2023-06-15',
      status: 'verified',
    },
    {
      id: '2',
      name: 'Machine Learning Certification',
      institution: 'Tech Institute',
      date: '2024-01-20',
      status: 'pending',
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Verify Credentials</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="divide-y divide-gray-200">
          {credentials.map((credential) => (
            <div key={credential.id} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{credential.name}</h3>
                  <div className="mt-1 text-sm text-gray-500">
                    <p>{credential.institution}</p>
                    <p>Issued: {new Date(credential.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <StatusBadge status={credential.status} />
                  {credential.status === 'verified' && (
                    <button
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800"
                      onClick={() => console.log('Mint NFT for:', credential.id)}
                    >
                      Mint NFT
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerifyCredential;