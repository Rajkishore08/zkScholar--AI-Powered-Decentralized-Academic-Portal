import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, Award, Database, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="h-12 w-12 text-blue-900 mb-4">
      <Icon className="h-full w-full" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              zkScholar – Decentralized Academic Credential Verification
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Verify and share your academic credentials, research work, and skills privately using zero-knowledge proofs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/login"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI-Powered Verification"
              description="Advanced OCR and machine learning algorithms for accurate credential verification."
            />
            <FeatureCard
              icon={Shield}
              title="Zero-Knowledge Proofs"
              description="Share your credentials while maintaining privacy and control over your data."
            />
            <FeatureCard
              icon={Award}
              title="Soulbound NFTs"
              description="Non-transferable tokens that represent your verified academic achievements."
            />
            <FeatureCard
              icon={Database}
              title="Decentralized Storage"
              description="Secure, distributed storage of your credentials using IPFS technology."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join zkScholar today and take control of your academic credentials with our cutting-edge verification platform.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800"
          >
            Create Your Account
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage