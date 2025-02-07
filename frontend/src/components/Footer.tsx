import React from 'react';
import { Github, Mail, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Resources</h3>
            <div className="mt-4 space-y-4">
              <a href="#" className="text-base text-gray-600 hover:text-blue-900 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Documentation
              </a>
              <a href="#" className="text-base text-gray-600 hover:text-blue-900 flex items-center">
                <Github className="h-5 w-5 mr-2" />
                GitHub Repository
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Contact</h3>
            <div className="mt-4 space-y-4">
              <a href="mailto:contact@zkscholar.com" className="text-base text-gray-600 hover:text-blue-900 flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                contact@zkscholar.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Legal</h3>
            <div className="mt-4 space-y-4">
              <a href="#" className="text-base text-gray-600 hover:text-blue-900">Privacy Policy</a>
              <a href="#" className="text-base text-gray-600 hover:text-blue-900">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} zkScholar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer