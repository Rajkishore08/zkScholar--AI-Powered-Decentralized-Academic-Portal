import React, { useState } from 'react';
import { Upload, FileText } from 'lucide-react';

const UploadCredential = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && (droppedFile.type === 'application/pdf' || droppedFile.type.startsWith('image/'))) {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    
    // Here you would handle the file upload and verification process
    console.log('Processing file:', file.name);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Upload Credential</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
          >
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-4 text-lg font-medium text-gray-900">
              {file ? file.name : 'Drag and drop your credential here'}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              or
            </p>
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".pdf,image/*"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 cursor-pointer"
            >
              Browse files
            </label>
            <p className="mt-2 text-xs text-gray-500">
              Supported formats: PDF, PNG, JPG (Max 10MB)
            </p>
          </div>

          {file && (
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">File Details</h3>
              <div className="bg-gray-50 p-4 rounded-md flex items-center">
                <FileText className="h-6 w-6 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Start Verification
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UploadCredential;