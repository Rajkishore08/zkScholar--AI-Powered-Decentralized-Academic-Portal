import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, CheckCircle, Award, Settings, Clock } from 'lucide-react';

const QuickActionCard = ({ icon: Icon, title, description, link }: { icon: any, title: string, description: string, link: string }) => (
  <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="h-12 w-12 text-blue-900 mb-4">
      <Icon className="h-full w-full" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </Link>
);

const ActivityItem = ({ icon: Icon, title, time }: { icon: any, title: string, time: string }) => (
  <div className="flex items-center space-x-4 py-3">
    <div className="h-8 w-8 text-blue-900">
      <Icon className="h-full w-full" />
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900">{title}</p>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
        <p className="mt-2 text-gray-600">Manage your academic credentials and verifications</p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <QuickActionCard
          icon={Upload}
          title="Upload Credential"
          description="Upload a new academic credential for verification"
          link="/upload"
        />
        <QuickActionCard
          icon={CheckCircle}
          title="Verify Credential"
          description="Start the verification process for your credentials"
          link="/verify"
        />
        <QuickActionCard
          icon={Award}
          title="View NFTs"
          description="Manage your Soulbound NFT collection"
          link="/nfts"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
          <Link to="/activity" className="text-sm text-blue-900 hover:text-blue-700">View all</Link>
        </div>
        <div className="divide-y divide-gray-200">
          <ActivityItem
            icon={CheckCircle}
            title="Bachelor's Degree verified successfully"
            time="2 hours ago"
          />
          <ActivityItem
            icon={Award}
            title="New Soulbound NFT minted"
            time="Yesterday"
          />
          <ActivityItem
            icon={Upload}
            title="Uploaded Master's Degree certificate"
            time="2 days ago"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;