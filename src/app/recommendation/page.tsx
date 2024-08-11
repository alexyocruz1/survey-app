"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function RecommendationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    const answers = {
      industry: searchParams?.get('question1'),
      employees: searchParams?.get('question2'),
      challenges: searchParams?.get('question3')?.split(','),
      crmUsage: searchParams?.get('question4'),
      crmSatisfaction: searchParams?.get('question5'),
      importantFeatures: searchParams?.get('question6')?.split(','),
      crmFrequency: searchParams?.get('question7'),
      crmRecommendation: searchParams?.get('question8'),
      budget: searchParams?.get('question9'),
    };

    setRecommendations(generateRecommendations(answers));
  }, [searchParams]);

  const handleSchedule = () => {
    router.push('/schedule');
  };

  const generateRecommendations = (answers: any) => {
    const recommendations: string[] = [];

    if (answers.industry === 'Technology') {
      recommendations.push('Salesforce Sales Cloud: Ideal for technology companies to manage sales processes.');
    }
    if (answers.industry === 'Finance') {
      recommendations.push('Salesforce Financial Services Cloud: Tailored for financial institutions.');
    }
    if (answers.industry === 'Healthcare') {
      recommendations.push('Salesforce Health Cloud: Designed for healthcare providers.');
    }
    if (answers.industry === 'Education') {
      recommendations.push('Salesforce Education Cloud: Perfect for educational institutions.');
    }

    if (answers.challenges?.includes('Customer Management')) {
      recommendations.push('Salesforce Service Cloud: Excellent for customer management and support.');
    }
    if (answers.challenges?.includes('Sales Tracking')) {
      recommendations.push('Salesforce Sales Cloud: Great for tracking sales activities.');
    }
    if (answers.challenges?.includes('Marketing Automation')) {
      recommendations.push('Salesforce Marketing Cloud: Ideal for automating marketing campaigns.');
    }
    if (answers.challenges?.includes('Reporting')) {
      recommendations.push('Salesforce Analytics Cloud: Provides powerful reporting and analytics.');
    }

    if (answers.importantFeatures?.includes('Ease of Use')) {
      recommendations.push('Salesforce Essentials: User-friendly and easy to set up.');
    }
    if (answers.importantFeatures?.includes('Customization')) {
      recommendations.push('Salesforce Platform: Highly customizable to fit your business needs.');
    }
    if (answers.importantFeatures?.includes('Integration')) {
      recommendations.push('Salesforce Integration Cloud: Seamlessly integrates with other systems.');
    }
    if (answers.importantFeatures?.includes('Reporting')) {
      recommendations.push('Salesforce Analytics Cloud: Advanced reporting capabilities.');
    }
    if (answers.importantFeatures?.includes('Support')) {
      recommendations.push('Salesforce Premier Support: Provides comprehensive support services.');
    }

    return recommendations;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Recommendation</h1>
        {recommendations.length > 0 ? (
          <ul className="list-disc list-inside">
            {recommendations.map((rec, index) => (
              <li key={index} className="mb-2">{rec}</li>
            ))}
          </ul>
        ) : (
          <p>Loading recommendations...</p>
        )}
        <button onClick={handleSchedule} className="p-2 bg-blue-500 text-white rounded mt-4 w-full">
          Schedule Consultation
        </button>
      </div>
    </div>
  );
}