import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function VideoCall() {
  const { appointmentId } = useParams();
  const [isConnecting, setIsConnecting] = useState(true);

  useEffect(() => {
    // Simulate connecting to a video call
    const timer = setTimeout(() => {
      setIsConnecting(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-4">Video Consultation</h2>
      {isConnecting ? (
        <div className="bg-blue-100 p-4 rounded-md">
          <p className="text-blue-800">Connecting to your appointment...</p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-gray-800 aspect-video rounded-lg flex items-center justify-center">
            <p className="text-white">Video call content would appear here</p>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              End Call
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
              Mute
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
              Turn Off Camera
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoCall;