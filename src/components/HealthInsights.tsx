import React from 'react';
import { TrendingUp, AlertCircle, Heart } from 'lucide-react';

function HealthInsights() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-semibold mb-4">AI-Powered Health Insights</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Your Health Summary</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <TrendingUp className="w-6 h-6 text-green-500 mr-2" />
            <div>
              <h4 className="font-semibold">Overall Health Trend</h4>
              <p>Your health metrics have shown improvement over the last 3 months.</p>
            </div>
          </div>
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-yellow-500 mr-2" />
            <div>
              <h4 className="font-semibold">Areas for Attention</h4>
              <p>Consider increasing your daily water intake and physical activity.</p>
            </div>
          </div>
          <div className="flex items-start">
            <Heart className="w-6 h-6 text-red-500 mr-2" />
            <div>
              <h4 className="font-semibold">Cardiovascular Health</h4>
              <p>Your recent tests indicate good heart health. Keep up the good work!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Personalized Recommendations</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Schedule a follow-up appointment with your primary care physician</li>
          <li>Consider adding more leafy greens to your diet for improved nutrition</li>
          <li>Try incorporating 15 minutes of meditation daily for stress management</li>
          <li>Your vitamin D levels are slightly low; consider spending more time outdoors</li>
        </ul>
      </div>
    </div>
  );
}

export default HealthInsights;