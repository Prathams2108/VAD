import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [file, setFile] = useState(null);
  const [voiceActivitySegments, setVoiceActivitySegments] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', file);
    axios.post('http://localhost:5000/upload', formData)
      .then(response => {
        setVoiceActivitySegments(response.data.voice_activity_segments);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <h1 className="display-4">Voice Activity Detection</h1>
      <input type="file" onChange={handleFileChange} className="form-control-file" />
      <button onClick={handleUpload} className="btn btn-primary">Upload and Analyze</button>
      <div className="results">
        <h2>Voice Activity Segments:</h2>
        <ul className="list-group">
          {voiceActivitySegments.map((segment, index) => (
            <li key={index} className="list-group-item">
              <span>
                {segment.start.toFixed(2)} - {segment.end.toFixed(2)} seconds
              </span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${(segment.end - segment.start) / 10 * 100}%`,
                    backgroundColor: '#4CAF50',
                  }}
                  aria-valuenow={(segment.end - segment.start) / 10 * 100}
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;