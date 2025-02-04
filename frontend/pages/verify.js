import { useState } from 'react';

export default function Verify() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleVerify = async () => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/verify', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setResult(data.message);
  };

  return (
    <div>
      <h1>Verify Credentials</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleVerify}>Verify</button>
      {result && <p>{result}</p>}
    </div>
  );
}
