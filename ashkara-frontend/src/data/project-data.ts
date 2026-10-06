import { FilterCategory } from "./categories";
import { TechnologyType } from "./technologies";

export interface Project {
  id: string;
  title: string;
  category: FilterCategory;
  engineeringBranch: string;
  bannerImage: string;
  technologyLogos: TechnologyType[];
  description: string;
  deliverables: string[];
  featured: boolean;
  previewType: "gallery" | "video" | "interactive";
  githubSupport: boolean;
  deploymentSupport: boolean;
  popularity?: number;
  dateAdded?: string;
  trending?: boolean;
}



export const projectData: Project[] = [
  {
    "id": "ai-medical-diagnosis",
    "title": "AI-Powered Medical Diagnosis System",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "TensorFlow",
      "React"
    ],
    "description": "An advanced diagnostic tool leveraging deep learning to analyze X-ray and MRI scans for early disease detection.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 90,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "ai-chatbot",
    "title": "Enterprise AI Customer Support Bot",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "NLP",
      "Node.js"
    ],
    "description": "A generative AI chatbot using NLP to handle customer queries and integrate with CRM systems.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 83,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ai-resume-analyzer",
    "title": "Intelligent ATS & Resume Analyzer",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "NLP",
      "React",
      "FastAPI"
    ],
    "description": "An NLP-based Applicant Tracking System that parses resumes, matches keywords, and scores candidates against job descriptions.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 97,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ai-voice-assistant",
    "title": "Context-Aware Voice Assistant",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "TensorFlow",
      "IoT"
    ],
    "description": "A specialized virtual assistant for smart home control with custom wake words and intent recognition.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 90,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ai-code-reviewer",
    "title": "Automated Code Review AI",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "Machine Learning",
      "Node.js"
    ],
    "description": "An AI model trained on codebases to suggest refactoring, identify bugs, and enforce coding standards.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 72,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ai-sentiment-trading",
    "title": "AI Sentiment Trading Bot",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "NLP",
      "Pandas"
    ],
    "description": "Analyzes financial news and social media sentiment in real-time to execute automated trades.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 79,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ai-face-recognition",
    "title": "Real-Time Face Recognition Access",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "TensorFlow",
      "React"
    ],
    "description": "A highly secure access control system using facial recognition with liveness detection.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 84,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ai-document-extraction",
    "title": "Smart Document Data Extractor",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "NLP",
      "FastAPI"
    ],
    "description": "Uses OCR and NLP to automatically extract structured data from invoices and receipts.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 81,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "ai-sign-language",
    "title": "Sign Language to Text Translator",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "TensorFlow",
      "React"
    ],
    "description": "Translates live video of sign language into text and speech using deep learning.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 72,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ai-music-generator",
    "title": "AI-Driven Music Composer",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "Machine Learning",
      "TensorFlow"
    ],
    "description": "A generative model capable of composing ambient background music for videos and games.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 64,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ai-deepfake-detector",
    "title": "Deepfake Video Detection Tool",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "TensorFlow",
      "React"
    ],
    "description": "An AI utility that analyzes video artifacts and metadata to identify deepfake manipulations.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 60,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ai-traffic-management",
    "title": "AI Smart Traffic Light Controller",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "TensorFlow",
      "IoT"
    ],
    "description": "Optimizes traffic light timings based on real-time vehicle density recognized by cameras.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 72,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ai-mental-health",
    "title": "Mental Health Analysis Chatbot",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "NLP",
      "React"
    ],
    "description": "An empathic chatbot designed to screen for anxiety and depression markers in conversation.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 91,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ai-recipe-generator",
    "title": "Smart Ingredient Recipe Generator",
    "category": "Artificial Intelligence",
    "engineeringBranch": "Computer Science",
    "bannerImage": "/images/engineering/artificial-intelligence.webp",
    "technologyLogos": [
      "Python",
      "TensorFlow",
      "React"
    ],
    "description": "Suggests meals and provides recipes based on an image of available ingredients.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 65,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ml-stock-predictor",
    "title": "Predictive Stock Market Analytics",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "LSTM"
    ],
    "description": "A time-series forecasting model using LSTM networks to predict short-term stock market trends.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 87,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "ml-fraud-detection",
    "title": "Credit Card Fraud Detection",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "XGBoost",
      "Flask"
    ],
    "description": "An anomaly detection system that identifies fraudulent transaction patterns in real-time.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 70,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ml-churn-prediction",
    "title": "Telecom Customer Churn Predictor",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Scikit-Learn",
      "Pandas"
    ],
    "description": "Predicts the likelihood of customers leaving a service based on usage patterns and billing data.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 82,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ml-recommendation-engine",
    "title": "E-Commerce Product Recommender",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Machine Learning",
      "Pandas"
    ],
    "description": "A collaborative filtering recommendation system for personalized shopping experiences.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 81,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ml-spam-classifier",
    "title": "Advanced SMS Spam Classifier",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "NLP",
      "Scikit-Learn"
    ],
    "description": "Uses Naive Bayes and SVM to filter out spam and phishing messages accurately.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 84,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ml-loan-approval",
    "title": "Automated Loan Approval System",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "XGBoost",
      "Pandas"
    ],
    "description": "Evaluates credit risk and predicts loan default probabilities using historical banking data.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 99,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ml-disease-outbreak",
    "title": "Disease Outbreak Prediction Model",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Machine Learning",
      "Pandas"
    ],
    "description": "Analyzes epidemiological data to forecast potential outbreaks and viral spread.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 85,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ml-inventory-forecast",
    "title": "Retail Inventory Demand Forecaster",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "LSTM",
      "Pandas"
    ],
    "description": "Predicts future product demand for supermarkets to minimize waste and stockouts.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 79,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "ml-house-price",
    "title": "Real Estate Price Estimator",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Scikit-Learn",
      "Flask"
    ],
    "description": "Estimates property values based on location, amenities, and market trends using regression.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 68,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ml-anomaly-network",
    "title": "Network Traffic Anomaly Detector",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Machine Learning",
      "Linux"
    ],
    "description": "Identifies unusual patterns in server logs to prevent DDoS and intrusion attacks.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 77,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ml-hr-attrition",
    "title": "Employee Attrition Prediction",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Scikit-Learn",
      "Pandas"
    ],
    "description": "Analyzes HR metrics to predict which employees are at high risk of resigning.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 96,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ml-crop-yield",
    "title": "Crop Yield Prediction Model",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Machine Learning",
      "Pandas"
    ],
    "description": "Uses weather and soil data to estimate agricultural output for the upcoming season.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 96,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ml-energy-consumption",
    "title": "Smart Grid Energy Forecaster",
    "category": "Machine Learning",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "LSTM",
      "Pandas"
    ],
    "description": "Predicts hourly electricity demand to optimize power grid distribution.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 62,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ds-customer-segmentation",
    "title": "Customer Segmentation Dashboard",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "React"
    ],
    "description": "Groups retail customers into distinct personas using K-Means clustering for targeted marketing.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 85,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "ds-sales-dashboard",
    "title": "Interactive Sales Analytics Dashboard",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "React"
    ],
    "description": "A BI tool visualizing global sales data, KPIs, and geographic performance.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 63,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ds-sentiment-analysis",
    "title": "Social Media Sentiment Analyzer",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "NLP",
      "Pandas",
      "React"
    ],
    "description": "A real-time dashboard analyzing Twitter/X feeds to gauge public sentiment on specific brands or topics.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 97,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ds-spotify-analysis",
    "title": "Spotify Track Popularity Analysis",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "Machine Learning"
    ],
    "description": "Explores audio features of songs to determine what makes a track reach the Top 50 charts.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 64,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ds-climate-change",
    "title": "Global Climate Change Data Visualizer",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "React"
    ],
    "description": "An interactive web app illustrating temperature anomalies and sea-level rise over a century.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 97,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ds-sports-analytics",
    "title": "NBA Player Performance Analytics",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "React"
    ],
    "description": "A statistical breakdown of player efficiency, shot charts, and defensive impact.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 96,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ds-covid-tracker",
    "title": "Pandemic Progression Tracker",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "React"
    ],
    "description": "Visualizes infection rates, vaccination progress, and mobility data globally.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 70,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ds-movie-boxoffice",
    "title": "Movie Box Office Success Analysis",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "Scikit-Learn"
    ],
    "description": "Analyzes cast, budget, and genre data to understand drivers of cinematic revenue.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 64,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "ds-ecommerce-ab",
    "title": "E-Commerce A/B Testing Simulator",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "Scikit-Learn"
    ],
    "description": "A tool for running and interpreting statistical A/B tests on landing page conversion rates.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 63,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ds-election-analysis",
    "title": "Voter Demographics & Election Analysis",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "React"
    ],
    "description": "Examines voting patterns across demographics and regions to predict election outcomes.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 83,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ds-uber-rides",
    "title": "Uber Ride Demand Analysis",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "React"
    ],
    "description": "Identifies peak demand hours and popular routes in major cities using historical ride data.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 77,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ds-credit-risk",
    "title": "Credit Risk Portfolio Analysis",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "React"
    ],
    "description": "A dashboard evaluating the risk distribution across a financial institution's lending portfolio.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 81,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ds-supply-chain",
    "title": "Supply Chain Bottleneck Analyzer",
    "category": "Data Science",
    "engineeringBranch": "Data Science",
    "bannerImage": "/images/engineering/data-science.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "React"
    ],
    "description": "Traces product lifecycles to identify delays and inefficiencies in the supply chain.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 61,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mern-ecommerce-platform",
    "title": "Scalable E-Commerce Platform",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux"
    ],
    "description": "A full-featured e-commerce solution with integrated payment gateways, admin analytics, and real-time inventory management.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 88,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "mern-hospital-management",
    "title": "Hospital ERP System",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js"
    ],
    "description": "A comprehensive hospital management system handling patient records, doctor appointments, and billing.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 71,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mern-social-media",
    "title": "Social Media Network",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "WebSockets"
    ],
    "description": "A platform featuring user profiles, real-time messaging, post feeds, and follow mechanics.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 91,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mern-project-management",
    "title": "Agile Project Management Tool",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redux"
    ],
    "description": "A Kanban-style task tracker with drag-and-drop boards, team collaboration, and deadline alerts.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 61,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mern-lms",
    "title": "Learning Management System",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js"
    ],
    "description": "An educational platform supporting course creation, video streaming, quizzes, and student progress tracking.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 68,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mern-food-delivery",
    "title": "Food Delivery Application",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "WebSockets"
    ],
    "description": "Connects users with local restaurants, featuring live order tracking and a specialized restaurant dashboard.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 72,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mern-real-estate",
    "title": "Real Estate Property Portal",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js"
    ],
    "description": "A marketplace for buying and renting properties, complete with advanced search filters and map integration.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 81,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mern-job-board",
    "title": "Tech Job Board Platform",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js"
    ],
    "description": "Allows companies to post listings and candidates to apply, featuring an employer application tracking system.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 66,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "mern-booking-system",
    "title": "Hotel & Flight Booking Engine",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js"
    ],
    "description": "A unified booking system for travel, integrating third-party APIs for availability and pricing.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 66,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mern-crowdfunding",
    "title": "Crowdfunding Platform",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js"
    ],
    "description": "Enables creators to launch campaigns, accept donations, and update backers on project milestones.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 82,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mern-event-management",
    "title": "Event Ticketing & Management",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js"
    ],
    "description": "A portal for organizing events, selling QR-coded tickets, and managing attendee lists.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 68,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mern-fitness-tracker",
    "title": "Fitness Community & Tracker",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js"
    ],
    "description": "Users can log workouts, share routines, and compete on leaderboards.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 99,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mern-inventory",
    "title": "Warehouse Inventory Manager",
    "category": "MERN Stack",
    "engineeringBranch": "Software Engineering",
    "bannerImage": "/images/engineering/mern-stack.webp",
    "technologyLogos": [
      "MongoDB",
      "Express",
      "React",
      "Node.js"
    ],
    "description": "A robust B2B application for tracking stock levels, generating purchase orders, and supplier management.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 97,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "android-fitness-tracker",
    "title": "AI-Assisted Fitness Tracker App",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "Firebase",
      "TensorFlow"
    ],
    "description": "A native Android application that tracks workouts, uses AI to analyze exercise form, and provides personalized diet plans.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 88,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "android-expense-manager",
    "title": "Smart Expense Manager",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "Firebase"
    ],
    "description": "A modern personal finance app utilizing Jetpack Compose for fluid UI and local database for expense tracking.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 80,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "android-news-app",
    "title": "Personalized News Aggregator",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "React"
    ],
    "description": "Fetches news from various APIs and uses machine learning to tailor the feed to user preferences.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 68,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "android-weather-pro",
    "title": "Hyperlocal Weather Forecaster",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "Firebase"
    ],
    "description": "Provides minute-by-minute precipitation forecasts and severe weather alerts using radar APIs.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 98,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "android-chat-app",
    "title": "Encrypted Messaging App",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "Firebase",
      "WebSockets"
    ],
    "description": "A secure, end-to-end encrypted chat application featuring voice notes and media sharing.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 71,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "android-recipe-book",
    "title": "Interactive Recipe & Cooking Guide",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "Firebase"
    ],
    "description": "A culinary app that scales ingredients based on serving size and provides step-by-step voice-guided instructions.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 97,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "android-habit-tracker",
    "title": "Gamified Habit Builder",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "Firebase"
    ],
    "description": "Encourages users to build positive habits through a gamified experience with rewards and streaks.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 88,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "android-language-learning",
    "title": "Language Learning Flashcards",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "Firebase"
    ],
    "description": "An educational app utilizing spaced repetition algorithms to help users learn new languages efficiently.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 78,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "android-meditation",
    "title": "Mindfulness & Meditation App",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "Firebase"
    ],
    "description": "Offers guided meditation sessions, ambient sounds, and tracks daily mindfulness minutes.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 71,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "android-travel-planner",
    "title": "Collaborative Trip Planner",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "Firebase"
    ],
    "description": "Allows groups to build itineraries, split expenses, and share photos during a trip.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 82,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "android-iot-controller",
    "title": "Smart Home IoT Controller",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "IoT"
    ],
    "description": "A centralized dashboard app for controlling smart lights, thermostats, and viewing camera feeds.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 75,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "android-podcast-player",
    "title": "Custom Podcast Player",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "Firebase"
    ],
    "description": "Features offline downloads, playback speed control, and automatic silence skipping.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 90,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "android-augmented-reality",
    "title": "AR Furniture Visualizer",
    "category": "Android Development",
    "engineeringBranch": "Mobile Development",
    "bannerImage": "/images/engineering/android-development.webp",
    "technologyLogos": [
      "Android",
      "Kotlin",
      "Firebase"
    ],
    "description": "Uses ARCore to let users visualize how furniture will look in their room before purchasing.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 87,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "cloud-serverless-video",
    "title": "Serverless Video Transcoding Pipeline",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Node.js",
      "Docker"
    ],
    "description": "A scalable, event-driven architecture that automatically transcodes uploaded videos into multiple formats for streaming.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 69,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "cloud-multi-tenant-saas",
    "title": "Multi-Tenant SaaS Architecture",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Docker",
      "PostgreSQL",
      "Node.js"
    ],
    "description": "A foundational architecture for building SaaS applications with isolated tenant data, subscription billing, and robust APIs.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 87,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "cloud-data-lake",
    "title": "Enterprise Data Lake Architecture",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Python",
      "SQL"
    ],
    "description": "A centralized repository that allows you to store all your structured and unstructured data at any scale.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 86,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "cloud-disaster-recovery",
    "title": "Automated Cloud Disaster Recovery",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Docker",
      "Linux"
    ],
    "description": "A cross-region automated backup and failover system ensuring 99.99% availability for critical apps.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 67,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "cloud-iot-backend",
    "title": "High-Throughput IoT Ingestion Backend",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Node.js",
      "IoT"
    ],
    "description": "A cloud architecture capable of ingesting and processing millions of sensor data points per second.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 80,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "cloud-microservices",
    "title": "E-Commerce Microservices Migration",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Docker",
      "Node.js"
    ],
    "description": "Refactoring a monolithic application into scalable microservices using Kubernetes.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 99,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "cloud-serverless-api",
    "title": "Serverless GraphQL API",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Node.js",
      "Express"
    ],
    "description": "A highly performant GraphQL API built entirely on serverless functions and managed databases.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 78,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "cloud-ci-cd",
    "title": "Enterprise CI/CD Pipeline",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Docker",
      "Linux"
    ],
    "description": "An automated deployment pipeline with integrated security scanning and blue-green deployments.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 95,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "cloud-log-analytics",
    "title": "Centralized Log Analytics Platform",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Python",
      "Linux"
    ],
    "description": "Aggregates logs from hundreds of servers to provide real-time search and anomaly alerting.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 97,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "cloud-image-processor",
    "title": "On-the-fly Image Optimization API",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Node.js"
    ],
    "description": "A serverless image processor that resizes, crops, and converts images to WebP dynamically.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 88,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "cloud-game-server",
    "title": "Auto-Scaling Multiplayer Game Server",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Docker",
      "Node.js"
    ],
    "description": "A cloud infrastructure that scales game servers based on current active player count.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 98,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "cloud-backup-bot",
    "title": "Automated Database Backup Bot",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Python",
      "SQL"
    ],
    "description": "A serverless cron job that dumps databases, encrypts them, and archives them to cold storage.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 71,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "cloud-cost-optimizer",
    "title": "Cloud Cost Optimization Dashboard",
    "category": "Cloud Computing",
    "engineeringBranch": "Cloud Computing",
    "bannerImage": "/images/engineering/cloud-computing.webp",
    "technologyLogos": [
      "AWS",
      "Python",
      "React"
    ],
    "description": "Analyzes cloud usage to recommend reserved instances and identify idle resources for cost savings.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 91,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "sec-network-ids",
    "title": "Network Intrusion Detection System",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "Python",
      "Wireshark",
      "Machine Learning",
      "Linux"
    ],
    "description": "An intelligent IDS that monitors network traffic and detects zero-day attacks using behavioral analysis.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 83,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "sec-blockchain-voting",
    "title": "Secure Blockchain E-Voting Platform",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "Solidity",
      "Web3.js",
      "React",
      "Ethereum"
    ],
    "description": "A decentralized voting application ensuring tamper-proof elections, transparency, and voter anonymity.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 71,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "sec-password-manager",
    "title": "Zero-Knowledge Password Manager",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "React",
      "Node.js",
      "Cyber Security"
    ],
    "description": "A highly secure password vault utilizing AES-256 encryption and zero-knowledge architecture.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 96,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "sec-phishing-detector",
    "title": "AI Phishing Email Detector",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "Python",
      "Machine Learning",
      "React"
    ],
    "description": "A browser extension that analyzes email headers and content to warn users of phishing attempts.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 75,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "sec-malware-sandbox",
    "title": "Automated Malware Analysis Sandbox",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "Python",
      "Linux",
      "Cyber Security"
    ],
    "description": "A secure environment that executes suspicious files and generates behavioral reports.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 81,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "sec-vpn-server",
    "title": "Custom Encrypted VPN Server",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "C++",
      "Linux",
      "Cyber Security"
    ],
    "description": "A lightweight, highly secure virtual private network implementation using modern cryptographic protocols.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 83,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "sec-ransomware-shield",
    "title": "Ransomware Activity Shield",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "C++",
      "Python",
      "Windows"
    ],
    "description": "A background service that detects rapid unauthorized file encryption and instantly halts the process.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 82,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "sec-steganography",
    "title": "Advanced Image Steganography Tool",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "Python",
      "React"
    ],
    "description": "Hides encrypted text messages within high-resolution images without altering the visual appearance.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 91,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "sec-waf",
    "title": "Custom Web Application Firewall",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "Python",
      "Linux",
      "Node.js"
    ],
    "description": "Inspects HTTP traffic to block SQL injection, XSS, and other common web vulnerabilities.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 84,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "sec-keylogger-detector",
    "title": "Anti-Keylogger Detection System",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "C++",
      "Windows"
    ],
    "description": "Scans system processes to identify and neutralize hidden keylogging software.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 78,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "sec-secure-file-share",
    "title": "Ephemeral Secure File Sharing",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "Node.js",
      "React",
      "MongoDB"
    ],
    "description": "A platform for sharing sensitive files that automatically destruct after being downloaded once.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 78,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "sec-iot-security",
    "title": "IoT Device Vulnerability Scanner",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "Python",
      "Linux",
      "IoT"
    ],
    "description": "A network tool that scans smart home devices for default passwords and known vulnerabilities.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 79,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "sec-ddos-mitigation",
    "title": "DDoS Mitigation Proxy",
    "category": "Cyber Security",
    "engineeringBranch": "Cyber Security",
    "bannerImage": "/images/engineering/cyber-security.webp",
    "technologyLogos": [
      "Python",
      "Linux",
      "Docker"
    ],
    "description": "A traffic filtering proxy designed to absorb and block volumetric DDoS attacks.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 68,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "iot-smart-agriculture",
    "title": "Smart Agriculture Monitoring Grid",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "ESP32",
      "Sensors",
      "MQTT",
      "React"
    ],
    "description": "An IoT network for monitoring soil moisture, temperature, and humidity, enabling automated smart irrigation.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 83,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "iot-home-automation",
    "title": "Voice-Controlled Home Automation",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "Arduino",
      "Raspberry Pi",
      "Python",
      "WebSockets"
    ],
    "description": "A centralized smart home system allowing voice and mobile control over lighting, appliances, and security cameras.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 72,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "iot-fleet-tracking",
    "title": "Real-Time Fleet Tracking System",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "ESP32",
      "Sensors",
      "MQTT",
      "React"
    ],
    "description": "GPS and OBD-II integrated sensors that provide live vehicle tracking and engine diagnostic data.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 69,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "iot-smart-parking",
    "title": "Smart City Parking Locator",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "MQTT",
      "Node.js"
    ],
    "description": "Uses ultrasonic sensors in parking spaces to guide drivers to empty spots via a mobile app.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 76,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "iot-health-monitor",
    "title": "Wearable Patient Health Monitor",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "ESP32",
      "Sensors",
      "Arduino",
      "React"
    ],
    "description": "A wearable device tracking heart rate and SpO2, sending alerts to doctors in emergencies.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 83,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "iot-smart-bin",
    "title": "Automated Waste Management Bin",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "MQTT"
    ],
    "description": "Garbage bins equipped with fill-level sensors that optimize collection routes for sanitation trucks.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 85,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "iot-water-quality",
    "title": "River Water Quality Analyzer",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "ESP32",
      "Sensors",
      "IoT"
    ],
    "description": "Solar-powered floating nodes that continuously measure pH, turbidity, and dissolved oxygen.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 97,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "iot-smart-lock",
    "title": "Biometric IoT Smart Lock",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++"
    ],
    "description": "A door lock controllable via smartphone, fingerprint, and temporary access codes.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 64,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "iot-industrial-monitoring",
    "title": "Industrial Machine Vibration Monitor",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "ESP32",
      "Sensors",
      "MQTT",
      "Python"
    ],
    "description": "Predictive maintenance system that alerts factory managers when machine vibrations indicate impending failure.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 60,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "iot-weather-station",
    "title": "Personal Automated Weather Station",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "Raspberry Pi"
    ],
    "description": "Collects localized weather data and publishes it to a global decentralized weather network.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 91,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "iot-smart-energy",
    "title": "Home Energy Consumption Monitor",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "ESP32",
      "Sensors",
      "React"
    ],
    "description": "Clamps onto the main power line to provide real-time analytics on electricity usage and costs.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 71,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "iot-inventory-tracker",
    "title": "RFID Warehouse Inventory Tracker",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "Node.js"
    ],
    "description": "Uses fixed RFID readers to constantly update the location and quantity of warehouse pallets.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 93,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "iot-pet-feeder",
    "title": "Smart Automated Pet Feeder",
    "category": "Internet of Things",
    "engineeringBranch": "Electronics & IoT",
    "bannerImage": "/images/engineering/internet-of-things.webp",
    "technologyLogos": [
      "ESP32",
      "Sensors",
      "React"
    ],
    "description": "Allows owners to schedule feedings, dispense food remotely, and view their pets via a built-in camera.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 73,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ece-rfid-toll",
    "title": "Automated RFID Toll Collection",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Arduino",
      "IoT",
      "C++",
      "Node.js"
    ],
    "description": "A hardware-software integrated system for seamless vehicle toll deduction using RFID tags and a centralized database.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 76,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "ece-wireless-sensor",
    "title": "Wireless Sensor Network for Fire Detection",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "IoT",
      "C++"
    ],
    "description": "A multi-node sensor network designed for industrial environments to detect anomalies and trigger fire suppression.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 67,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ece-radar",
    "title": "Ultrasonic Radar Mapping System",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++",
      "Python"
    ],
    "description": "A rotating sensor system that creates a 2D map of its surroundings, displaying it on a PC interface.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 66,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ece-gesture-control",
    "title": "Gesture Controlled Wheelchair",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++"
    ],
    "description": "Uses accelerometers and flex sensors on a glove to control the movement direction of a motorized wheelchair.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 85,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ece-smart-glove",
    "title": "Sign Language Translator Glove",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++"
    ],
    "description": "A wearable glove that converts hand gestures into spoken words using flex sensors and a voice synthesizer.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 60,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ece-drone",
    "title": "Autonomous Surveillance Drone",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++",
      "Robotics"
    ],
    "description": "A custom-built quadcopter capable of following pre-programmed GPS waypoints for perimeter security.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 66,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ece-laser-comm",
    "title": "Laser-Based Audio Transmission",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Sensors",
      "Electronics"
    ],
    "description": "Transmits audio signals over long distances using a modulated laser beam and solar panel receiver.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 87,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ece-smart-helmet",
    "title": "Smart Helmet for Miners",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "IoT"
    ],
    "description": "Monitors hazardous gas levels and helmet impacts, immediately alerting the surface control room.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 94,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "ece-biometric-attendance",
    "title": "Fingerprint Attendance System",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++"
    ],
    "description": "A standalone biometric terminal that logs student or employee attendance directly to a spreadsheet.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 92,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ece-line-follower",
    "title": "Advanced PID Line Following Robot",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++",
      "Robotics"
    ],
    "description": "An ultra-fast robotics platform that uses PID control algorithms to smoothly navigate complex tracks.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 84,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ece-home-security",
    "title": "Laser Tripwire Security System",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++"
    ],
    "description": "An invisible perimeter defense system that activates alarms and cameras upon beam interruption.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 87,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ece-rf-controller",
    "title": "Long-Range RF Remote Controller",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "IoT"
    ],
    "description": "A robust remote control system utilizing LoRa modules for controlling equipment over several kilometers.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 62,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "ece-smart-mirror",
    "title": "Interactive Smart Mirror",
    "category": "Electronics (ECE)",
    "engineeringBranch": "Electronics & Communication",
    "bannerImage": "/images/engineering/electronics-communication.webp",
    "technologyLogos": [
      "Raspberry Pi",
      "Python",
      "React"
    ],
    "description": "A two-way mirror display showing time, weather, and news updates while acting as a regular mirror.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 91,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "eee-solar-tracker",
    "title": "Dual-Axis Solar Tracking System",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++"
    ],
    "description": "An electro-mechanical system that dynamically adjusts solar panel orientation to maximize energy harvesting efficiency.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 96,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "eee-smart-grid",
    "title": "Smart Grid Load Balancing Simulator",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Python",
      "Pandas",
      "React",
      "Node.js"
    ],
    "description": "A software simulation model optimizing power distribution and demand response in a microgrid environment.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 99,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "eee-wireless-power",
    "title": "Wireless Power Transfer System",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Electronics",
      "C++"
    ],
    "description": "Demonstrates inductive coupling to wirelessly charge mobile devices and small electronics over short distances.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 75,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "eee-ev-battery",
    "title": "EV Battery Management System",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++"
    ],
    "description": "Monitors voltage, current, and temperature of individual lithium-ion cells to prevent thermal runaway.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 63,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "eee-fault-detection",
    "title": "Transmission Line Fault Detector",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++"
    ],
    "description": "Identifies the exact location of faults in underground cables and alerts maintenance crews.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 92,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "eee-power-factor",
    "title": "Automatic Power Factor Controller",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++"
    ],
    "description": "Improves power efficiency in industrial setups by automatically switching capacitor banks on and off.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 97,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "eee-wind-solar",
    "title": "Hybrid Wind & Solar Generator",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Sensors",
      "Electronics"
    ],
    "description": "Combines vertical axis wind turbines and solar panels to provide continuous off-grid power.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 78,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "eee-regenerative-braking",
    "title": "Regenerative Braking Simulator",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "Robotics"
    ],
    "description": "A scaled model demonstrating how kinetic energy from braking can be recaptured to charge batteries.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 84,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "eee-inverter",
    "title": "Pure Sine Wave Inverter Design",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Electronics",
      "C++"
    ],
    "description": "A custom designed high-efficiency inverter for converting DC battery power to clean AC mains power.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 76,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "eee-smart-meter",
    "title": "Prepaid Smart Energy Meter",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "IoT"
    ],
    "description": "An IoT-enabled power meter that cuts off electricity supply when the prepaid balance is exhausted.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 71,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "eee-substation-monitor",
    "title": "Substation Temperature Monitoring",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "IoT"
    ],
    "description": "Uses thermal sensors to continuously monitor transformers and prevent overheating failures.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 66,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "eee-street-light",
    "title": "Adaptive Street Lighting System",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "IoT"
    ],
    "description": "Street lights that automatically dim when no motion is detected to save massive amounts of energy.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 83,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "eee-motor-controller",
    "title": "BLDC Motor Speed Controller",
    "category": "Electrical (EEE)",
    "engineeringBranch": "Electrical Engineering",
    "bannerImage": "/images/engineering/electrical-engineering.webp",
    "technologyLogos": [
      "Arduino",
      "Sensors",
      "C++"
    ],
    "description": "A high-precision electronic speed controller for brushless DC motors used in drones and EVs.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 75,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mech-robotic-arm",
    "title": "6-DOF Robotic Arm for Assembly Line",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "Arduino",
      "C++",
      "Sensors",
      "Robotics"
    ],
    "description": "A fully designed and programmable 6 Degrees of Freedom robotic arm optimized for pick-and-place industrial operations.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 84,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "mech-wind-turbine",
    "title": "Vertical Axis Wind Turbine Design",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "AutoCAD",
      "SolidWorks"
    ],
    "description": "A comprehensive design and analysis of a hybrid vertical axis wind turbine for urban energy harvesting.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 65,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mech-exoskeleton",
    "title": "Pneumatic Assistive Exoskeleton",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "SolidWorks",
      "Robotics"
    ],
    "description": "A wearable mechanical frame designed to reduce lower back strain during heavy lifting tasks.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 66,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mech-3d-printer",
    "title": "Custom CoreXY 3D Printer",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "SolidWorks",
      "Arduino",
      "Robotics"
    ],
    "description": "A highly precise and fast 3D printer built from scratch using custom aluminum extrusions and stepper motors.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 63,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mech-drone-chassis",
    "title": "Aerodynamic Drone Chassis Design",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "ANSYS",
      "SolidWorks"
    ],
    "description": "A lightweight, carbon-fiber composite drone frame optimized in a wind tunnel for maximum battery life.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 80,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mech-suspension",
    "title": "Active Electromagnetic Suspension",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "SolidWorks",
      "Sensors",
      "Arduino"
    ],
    "description": "A vehicle suspension system that uses electromagnetic actuators to eliminate body roll during cornering.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 85,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mech-hvac",
    "title": "Geothermal HVAC System Analysis",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "ANSYS",
      "Python"
    ],
    "description": "Thermodynamic analysis and physical modeling of a high-efficiency geothermal heating and cooling system.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 76,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mech-bicycle-gear",
    "title": "Continuously Variable Transmission",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "SolidWorks",
      "AutoCAD"
    ],
    "description": "A novel CVT design for bicycles that automatically adjusts the gear ratio based on pedaling torque.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 75,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "mech-water-pump",
    "title": "Solar-Powered Agricultural Pump",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "SolidWorks",
      "AutoCAD"
    ],
    "description": "A robust, low-maintenance mechanical pump designed for off-grid irrigation in rural areas.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 91,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mech-braking",
    "title": "Anti-Lock Braking System Simulator",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "SolidWorks",
      "Sensors",
      "Arduino"
    ],
    "description": "A mechanical rig that demonstrates the principles and fluid dynamics of modern ABS systems.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 62,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mech-stirling",
    "title": "High-Efficiency Stirling Engine",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "SolidWorks",
      "ANSYS"
    ],
    "description": "Design and fabrication of a closed-cycle regenerative heat engine powered by waste industrial heat.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 71,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mech-cnc",
    "title": "Desktop CNC Router",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "SolidWorks",
      "Robotics",
      "Arduino"
    ],
    "description": "A 3-axis CNC milling machine capable of carving wood, plastics, and soft aluminum for rapid prototyping.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 68,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "mech-hovercraft",
    "title": "Radio-Controlled Hovercraft",
    "category": "Mechanical Engineering",
    "engineeringBranch": "Mechanical Engineering",
    "bannerImage": "/images/engineering/mechanical-engineering.webp",
    "technologyLogos": [
      "SolidWorks",
      "Robotics",
      "Arduino"
    ],
    "description": "An amphibious vehicle utilizing dual thrust fans and a customized skirt for all-terrain mobility.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 77,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "civil-earthquake-resistant",
    "title": "Earthquake Resistant Building Design",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "STAAD",
      "AutoCAD"
    ],
    "description": "A complete structural design and seismic analysis of a commercial complex using modern damping techniques.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 95,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "civil-smart-traffic",
    "title": "Intelligent Traffic Management Simulation",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "Python",
      "Planning"
    ],
    "description": "A microsimulation study analyzing and optimizing traffic flow and signal phasing at major urban intersections.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 72,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "civil-water-treatment",
    "title": "Urban Water Treatment Plant Design",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "AutoCAD",
      "GIS"
    ],
    "description": "Hydraulic design and capacity planning for a municipal wastewater treatment and recycling facility.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 95,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "civil-bridge-analysis",
    "title": "Suspension Bridge Structural Analysis",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "STAAD",
      "ANSYS",
      "AutoCAD"
    ],
    "description": "Finite element analysis of a long-span suspension bridge focusing on wind load and resonance.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 66,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "civil-green-building",
    "title": "LEED Certified Green Building",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "AutoCAD",
      "Planning"
    ],
    "description": "An architectural and structural proposal for a net-zero energy building utilizing sustainable materials.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 65,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "civil-highway-design",
    "title": "Expressway Geometric Design",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "AutoCAD",
      "GIS",
      "Planning"
    ],
    "description": "Comprehensive planning of a new highway segment including alignment, drainage, and pavement thickness.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 68,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "civil-soil-stabilization",
    "title": "Soil Stabilization using Geo-synthetics",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "GIS",
      "Planning"
    ],
    "description": "An experimental project analyzing the improvement in bearing capacity of weak soils using synthetic grids.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 79,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "civil-rainwater-harvesting",
    "title": "City-Wide Rainwater Harvesting Plan",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "GIS",
      "AutoCAD"
    ],
    "description": "A hydrological study proposing catchment areas and storage solutions to combat urban water scarcity.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 79,
    "dateAdded": "2026-06-15T10:00:00Z",
    "trending": true
  },
  {
    "id": "civil-solid-waste",
    "title": "Solid Waste Management Optimization",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "GIS",
      "Planning"
    ],
    "description": "A logistical and environmental study to optimize waste collection routes and landfill utilization.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 77,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "civil-smart-city",
    "title": "Smart City Infrastructure Planning",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "AutoCAD",
      "GIS",
      "Planning"
    ],
    "description": "A holistic urban plan integrating IoT sensors, smart grids, and intelligent transportation systems.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "video",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 92,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "civil-dam-design",
    "title": "Gravity Dam Hydraulic Design",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "STAAD",
      "AutoCAD"
    ],
    "description": "Structural and fluid dynamics analysis of a concrete gravity dam for hydroelectric power generation.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": true,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 89,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "civil-retaining-wall",
    "title": "Reinforced Earth Retaining Wall",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "STAAD",
      "AutoCAD"
    ],
    "description": "Design of an aesthetically pleasing and structurally sound retaining wall for hillside developments.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "gallery",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 64,
    "dateAdded": "2026-06-15T10:00:00Z"
  },
  {
    "id": "civil-pavement-material",
    "title": "Plastic Waste in Pavement Material",
    "category": "Civil Engineering",
    "engineeringBranch": "Civil Engineering",
    "bannerImage": "/images/engineering/civil-engineering.webp",
    "technologyLogos": [
      "Planning"
    ],
    "description": "Research into utilizing recycled plastic waste as a binding agent to increase the durability of asphalt roads.",
    "deliverables": [
      "Source Code",
      "Documentation",
      "PPT",
      "Research Paper",
      "GitHub Support",
      "Deployment Support",
      "Video Demonstration",
      "Setup Guide"
    ],
    "featured": false,
    "previewType": "interactive",
    "githubSupport": true,
    "deploymentSupport": true,
    "popularity": 76,
    "dateAdded": "2026-06-15T10:00:00Z"
  }
];
