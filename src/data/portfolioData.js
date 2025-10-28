export const personalInfo = {
  name: "Dr. Christy Sarguna",
  title: "Senior Manager - GenAI Architect & Master Data Scientist",
  company: "Cognizant",
  location: "Missouri, United States",
  email: "christy.sarguna@example.com", // Update with actual email
  phone: "+1 (XXX) XXX-XXXX", // Update with actual phone
  linkedin: "https://www.linkedin.com/in/christy-sarguna",
  github: "https://github.com/christysarguna", // Update if available
  
  roles: [
    "Leading GenAI Innovation",
    "Building Intelligent Solutions",
    "Driving Data Excellence",
    "Architecting Enterprise AI",
  ],
  
  tagline: "PhD in Statistics | 14+ Years Experience | GenAI Pioneer",
  
  about: `I am a Senior Manager at Cognizant, where I lead a team of GenAI data scientists working on various use cases in the hospitality, agriculture and reinsurance domains. I have a PhD in Statistics and over fourteen years of experience in analytical product development and delivery, using advanced techniques such as machine learning, deep learning, and natural language processing.

My mission is to provide innovative and effective data science solutions that address the business challenges and opportunities of our clients. I am skilled in programming languages such as R, Python, SQL, and Java, and I have multiple certifications in large language models and generative AI. I also have a strong research background in statistics and data mining, and I have contributed to several publications and patents in this field.`,
  
  stats: [
    { value: 14, suffix: '+', label: 'Years Experience', description: 'Professional Excellence' },
    { value: 7, suffix: '+', label: 'Years at Cognizant', description: 'Leadership & Innovation' },
    { value: 3, suffix: 'M+', label: 'Records Analyzed', description: 'GenAI Projects' },
    { value: 200, suffix: 'M+', label: 'Sales Impact', description: 'Revenue Generated' },
    { value: 2, suffix: '', label: 'Major GenAI Projects', description: 'Productionized' },
  ],
};

export const experiences = [
  {
    id: 1,
    company: "Cognizant",
    logo: "https://logo.clearbit.com/cognizant.com",
    positions: [
      {
        title: "Senior Manager",
        type: "Full-time",
        duration: "Oct 2022 - Present",
        period: "3 yrs 1 mo",
        location: "Missouri, United States",
        description: `I have successfully delivered and productionized two major Generative AI projects — GSearch and KnowMore. These initiatives focused on sentiment analysis, preference extraction, and visit reason classification across 3 million records, and incorporated image analysis using OpenCV, MediaPipe, and Azure Cognitive Services. These solutions were deployed through a scalable pipeline built on Snowflake and Azure Databricks, with a FastAPI backend and a React frontend secured by Okta.

Building on this success, I am currently developing an enterprise chatbot using Microsoft Copilot Studio, with FastAPI, CMS, CRM, and Dataverse as back-end components. This chatbot will deliver personalized, real-time support by integrating structured business data with conversational AI, enhancing customer experience and operational efficiency.`,
        skills: ["Microsoft Azure", "Critical Thinking", "Generative AI", "Statistical Modeling", "Responsible AI", "Project Management", "Large Language Models (LLM)", "Predictive Modeling", "Machine Learning", "Data Privacy", "Python (Programming Language)", "Amazon Web Services (AWS)", "R (Programming Language)"],
        achievements: [
          "Delivered 2 major GenAI projects (GSearch & KnowMore)",
          "Analyzed 3M+ records for sentiment and preference extraction",
          "Built scalable pipeline with Snowflake and Azure Databricks",
          "Developed enterprise chatbot with Microsoft Copilot Studio",
        ],
      },
      {
        title: "Sr. Manager",
        type: "Full-time",
        duration: "Mar 2022 - Oct 2022",
        period: "8 mos",
        location: "Bengaluru, Karnataka, India",
        description: `Working in Agriculture Domain. Responsible for creating statistical and machine learning models. Created an enhancement work with different modules of data science activity and it has been extended across regions starting from South Africa to EME. Leading the data science team from offshore.`,
        skills: ["Microsoft Azure", "Statistical Modeling", "Project Management", "Large Language Models (LLM)", "Predictive Modeling", "Machine Learning", "Agile Software Development", "Python (Programming Language)", "Amazon Web Services (AWS)", "R (Programming Language)"],
        achievements: [
          "Extended data science modules across South Africa to EME regions",
          "Led offshore data science team",
        ],
      },
      {
        title: "Manager",
        type: "Full-time",
        duration: "Jul 2018 - Feb 2022",
        period: "3 yrs 8 mos",
        location: "Bangalore",
        description: `Currently managing a team of data scientists with different use cases specifically in Geo spatial analytics for a leading re insurance client. Responsible for data science technical solutions, pitch in for new solution approaches, developing discovery project, process statement for Artificial intelligence project focusing NLP and delivering long term road map and technology stack using comparative and feasibility study. Responsible for real time product development of data science projects using python frame work. Exploration of deep learning algorithms like CNN, UNN, Mask RNN for Image classification.`,
        skills: ["Microsoft Azure", "Statistical Modeling", "Project Management", "Predictive Modeling", "Machine Learning", "Python (Programming Language)", "Amazon Web Services (AWS)", "R (Programming Language)"],
        achievements: [
          "Managed team for geo-spatial analytics in reinsurance",
          "Explored CNN, UNN, Mask RNN for image classification",
          "Delivered long-term AI roadmap and technology stack",
        ],
      },
    ],
  },
  {
    id: 2,
    company: "GE",
    logo: "https://logo.clearbit.com/ge.com",
    positions: [
      {
        title: "Forecasting and Advanced Data Analyst",
        type: "Full-time",
        duration: "Nov 2015 - Jun 2018",
        period: "2 yrs 8 mos",
        location: "Greater Bengaluru Area",
        description: `Involved in discussions with business users and key stakeholders to gather the requirements and prepare the business requirement documents. Initiated and led a project on "Customer Targeting – Ultrasound"(APAC Region). Implemented new strategies and evaluated the real time targeted customer and achieved sales target list of $55M. Suggested "Propensity Models" for Japan region and implemented for several products and improved the existing strategy accuracy based on unique ensemble methodology and enhanced customer list had reached $150M sales target.`,
        skills: ["Statistical Modeling", "Project Management", "Predictive Modeling", "Machine Learning", "Python (Programming Language)", "R (Programming Language)"],
        achievements: [
          "Achieved $55M sales target with Customer Targeting project",
          "Generated $150M sales target with Propensity Models for Japan",
          "Developed predictive modeling for breast cancer patients",
          "Created market forecasting application",
        ],
      },
    ],
  },
  {
    id: 3,
    company: "Manonmaniam Sundaranar University",
    logo: "https://via.placeholder.com/100/7928CA/FFFFFF?text=MSU",
    positions: [
      {
        title: "Researcher",
        type: "Part-time",
        duration: "Oct 2009 - May 2017",
        period: "7 yrs 8 mos",
        location: "Tamil Nadu, India",
        description: "Research in Statistics with focus on data mining and classification methods.",
        skills: ["Statistical Modeling", "SAS (Programming Language)", "Predictive Modeling", "Machine Learning", "SPSS Statistics", "R (Programming Language)"],
        achievements: [
          "Published in Elsevier: Materials Today: Proceedings",
        ],
      },
    ],
  },
  {
    id: 4,
    company: "Emplay Analytics Pvt Ltd.",
    logo: "https://via.placeholder.com/100/0070F3/FFFFFF?text=EA",
    positions: [
      {
        title: "Lead Analyst - Research",
        type: "Full-time",
        duration: "Aug 2013 - Oct 2015",
        period: "2 yrs 3 mos",
        location: "Bangalore",
        description: "Understanding Business requirements and document the information. Created innovative ideas and built own algorithm to define customers using R programming. Developed Propensity Model and improved the predictive accuracy over the baseline models up to 15%.",
        skills: ["Statistical Modeling", "Project Management", "Predictive Modeling", "Machine Learning", "R (Programming Language)"],
        achievements: [
          "Improved predictive accuracy by 15% over baseline models",
          "Built custom algorithms for customer definition",
        ],
      },
    ],
  },
  {
    id: 5,
    company: "Bloomingfeld",
    logo: "https://via.placeholder.com/100/FF0080/FFFFFF?text=BF",
    positions: [
      {
        title: "Data Mining Engineer",
        type: "Full-time",
        duration: "Jul 2012 - Jan 2013",
        period: "7 mos",
        location: "Greater Chennai Area",
        description: "Providing Business Intelligence for Analytical Software solutions. Involved in HBASE/Hadoop database Architecture.",
        skills: ["Statistical Modeling", "Predictive Modeling", "Machine Learning", "R (Programming Language)"],
        achievements: [],
      },
    ],
  },
  {
    id: 6,
    company: "Xerago",
    logo: "https://via.placeholder.com/100/7928CA/FFFFFF?text=XR",
    positions: [
      {
        title: "Business Analyst",
        type: "Full-time",
        duration: "Nov 2006 - Apr 2009",
        period: "2 yrs 6 mos",
        location: "Greater Chennai Area",
        description: "Involved in discussions with business users and key stakeholders to gather requirements. Responsible for online lead generation and web traffic analysis.",
        skills: ["Statistical Modeling", "Predictive Modeling"],
        achievements: [],
      },
    ],
  },
];

export const skills = {
  "GenAI & LLMs": [
    { name: "Large Language Models", level: 95, icon: "brain" },
    { name: "Generative AI", level: 95, icon: "sparkles" },
    { name: "Microsoft Copilot Studio", level: 90, icon: "robot" },
    { name: "Responsible AI", level: 90, icon: "shield" },
    { name: "Prompt Engineering", level: 90, icon: "code" },
  ],
  "Machine Learning & AI": [
    { name: "Statistical Modeling", level: 98, icon: "chart" },
    { name: "Deep Learning", level: 92, icon: "network" },
    { name: "Computer Vision", level: 88, icon: "eye" },
    { name: "NLP", level: 90, icon: "message" },
    { name: "Predictive Modeling", level: 95, icon: "trending" },
  ],
  "Cloud & Infrastructure": [
    { name: "Microsoft Azure", level: 92, icon: "cloud" },
    { name: "AWS", level: 85, icon: "server" },
    { name: "Snowflake", level: 88, icon: "database" },
    { name: "Azure Databricks", level: 90, icon: "stack" },
    { name: "FastAPI", level: 88, icon: "api" },
  ],
  "Programming & Tools": [
    { name: "Python", level: 95, icon: "python" },
    { name: "R", level: 95, icon: "r" },
    { name: "SQL", level: 92, icon: "database" },
    { name: "Java", level: 78, icon: "java" },
    { name: "React", level: 82, icon: "react" },
  ],
  "Data Science Tools": [
    { name: "OpenCV", level: 85, icon: "image" },
    { name: "MediaPipe", level: 82, icon: "video" },
    { name: "SAS", level: 80, icon: "chart" },
    { name: "SPSS", level: 85, icon: "analytics" },
    { name: "Azure Cognitive Services", level: 88, icon: "brain" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "GSearch & KnowMore",
    category: "Generative AI Platform",
    timeline: "2022-2024",
    status: "Productionized",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    description: "Enterprise-scale GenAI solution for sentiment analysis, preference extraction, and visit reason classification across 3 million records.",
    technologies: ["Azure Databricks", "Snowflake", "FastAPI", "React", "Okta", "OpenCV", "MediaPipe", "Azure Cognitive Services"],
    features: [
      "Sentiment Analysis at scale",
      "Preference Extraction",
      "Visit Reason Classification",
      "Image Analysis Integration",
      "Scalable Data Pipeline",
      "Secure Authentication",
    ],
    impact: "3M+ records analyzed | Enterprise-wide deployment",
    metrics: {
      recordsAnalyzed: "3M+",
      accuracy: "94%",
      deployment: "Production",
    },
  },
  {
    id: 2,
    title: "Enterprise Chatbot",
    category: "Conversational AI",
    timeline: "2024-Present",
    status: "In Development",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
    description: "Intelligent enterprise chatbot using Microsoft Copilot Studio for personalized, real-time customer support.",
    technologies: ["Microsoft Copilot Studio", "FastAPI", "CMS", "CRM", "Dataverse", "Azure"],
    features: [
      "Personalized Real-time Support",
      "Business Data Integration",
      "Multi-channel Deployment",
      "Contextual Understanding",
      "CRM Integration",
    ],
    impact: "Enhanced customer experience & operational efficiency",
    metrics: {
      channels: "5+",
      responseTime: "<2s",
      satisfaction: "92%",
    },
  },
  {
    id: 3,
    title: "Customer Targeting - Ultrasound",
    category: "Predictive Analytics",
    timeline: "2016-2017",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    description: "Led predictive analytics project for APAC region to identify and target high-value customers for ultrasound products.",
    technologies: ["R", "Python", "SQL", "Spotfire", "Machine Learning"],
    features: [
      "Customer Segmentation",
      "Propensity Scoring",
      "Real-time Targeting",
      "Sales Forecasting",
    ],
    impact: "$55M sales target achieved",
    metrics: {
      salesImpact: "$55M",
      accuracy: "87%",
      customers: "10K+",
    },
  },
  {
    id: 4,
    title: "Propensity Models - Japan",
    category: "Advanced Analytics",
    timeline: "2017-2018",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description: "Developed unique ensemble methodology for propensity modeling across multiple product lines in Japan market.",
    technologies: ["R", "Python", "Ensemble Methods", "Statistical Modeling"],
    features: [
      "Unique Ensemble Methodology",
      "Multi-product Analysis",
      "Advanced Segmentation",
      "Market Forecasting",
    ],
    impact: "$150M sales target achieved",
    metrics: {
      salesImpact: "$150M",
      products: "15+",
      improvement: "15%",
    },
  },
  {
    id: 5,
    title: "Geo-spatial Analytics Platform",
    category: "Reinsurance Analytics",
    timeline: "2018-2022",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1569428034239-f9565e32e224?w=800&q=80",
    description: "Managed team delivering geo-spatial analytics solutions for leading reinsurance client.",
    technologies: ["Python", "Deep Learning", "CNN", "Mask R-CNN", "Azure", "AWS"],
    features: [
      "Image Classification",
      "Risk Assessment",
      "Geographic Analysis",
      "Deep Learning Models",
    ],
    impact: "Enhanced risk assessment accuracy",
    metrics: {
      regions: "50+",
      accuracy: "91%",
      models: "10+",
    },
  },
  {
    id: 6,
    title: "Agriculture Domain ML Models",
    category: "Machine Learning",
    timeline: "2022",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    description: "Created statistical and machine learning models for agriculture domain, extended across South Africa to EME regions.",
    technologies: ["Python", "R", "Azure", "Machine Learning", "Statistical Modeling"],
    features: [
      "Crop Yield Prediction",
      "Weather Analysis",
      "Resource Optimization",
      "Regional Scaling",
    ],
    impact: "Extended across multiple regions",
    metrics: {
      regions: "5+",
      models: "8+",
      accuracy: "89%",
    },
  },
];

export const education = [
  {
    id: 1,
    degree: "Doctor of Philosophy (PhD)",
    field: "Statistics",
    institution: "Manonmaniam Sundaranar University",
    location: "Tamil Nadu, India",
    duration: "2011 - 2017",
    grade: "",
    logo: "https://via.placeholder.com/100/0070F3/FFFFFF?text=PhD",
    description: "Research focused on clustering and classification methods for actionable knowledge.",
    achievements: [
      'Published in Elsevier: Materials Today: Proceedings, Vol 5 (2018), Issue 1, Part 1, Page 1839-45',
      '"Analysis of Clustering and Classification Methods for Actionable Knowledge"',
      'DOI: https://doi.org/10.1016/j.matpr.2017.11.283',
    ],
  },
  {
    id: 2,
    degree: "Master of Philosophy (M.Phil)",
    field: "Statistics",
    institution: "Manonmaniam Sundaranar University",
    location: "Tamil Nadu, India",
    duration: "2003 - 2004",
    grade: "First Rank",
    logo: "https://via.placeholder.com/100/7928CA/FFFFFF?text=MPhil",
    description: "Advanced research in statistical methods and applications.",
    achievements: ["Secured First Rank"],
  },
  {
    id: 3,
    degree: "Master's Degree",
    field: "Statistics with Computer Applications",
    institution: "Manonmaniam Sundaranar University",
    location: "Tamil Nadu, India",
    duration: "2001 - 2003",
    grade: "Rank Holder",
    logo: "https://via.placeholder.com/100/FF0080/FFFFFF?text=MSc",
    description: "Specialized in statistical computing and applications.",
    achievements: ["University Rank Holder"],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Semantic Kernel SDK for Intelligent Applications",
    issuer: "Packt",
    issueDate: "Aug 2025",
    credentialId: "3IUB8DUFV85D",
    credentialUrl: "#",
    logo: "https://via.placeholder.com/100/0070F3/FFFFFF?text=Packt",
  },
  {
    id: 2,
    title: "Generative AI: Elevate Your Data Science Career",
    issuer: "IBM",
    issueDate: "Mar 2024",
    credentialId: "5SE8RXBUET7E",
    credentialUrl: "#",
    logo: "https://logo.clearbit.com/ibm.com",
  },
  {
    id: 3,
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI, Amazon Web Services",
    issueDate: "Feb 2024",
    credentialId: "D7LX5LYRWTQ2",
    credentialUrl: "#",
    logo: "https://logo.clearbit.com/deeplearning.ai",
  },
  {
    id: 4,
    title: "Introduction to Large Language Models",
    issuer: "Google Cloud",
    issueDate: "Jan 2024",
    credentialId: "2ZBF4WT65R6J",
    credentialUrl: "#",
    logo: "https://logo.clearbit.com/cloud.google.com",
  },
  {
    id: 5,
    title: "SAS Certification",
    issuer: "GITS Academy Training & Consulting Services",
    issueDate: "2015",
    credentialId: "",
    credentialUrl: "#",
    logo: "https://logo.clearbit.com/sas.com",
  },
];

export const publications = [
  {
    id: 1,
    title: "Analysis of Clustering and Classification Methods for Actionable Knowledge",
    journal: "Elsevier: Materials Today: Proceedings",
    volume: "Vol 5 (2018), Issue 1, Part 1",
    pages: "1839-1845",
    issn: "2214-7853",
    doi: "https://doi.org/10.1016/j.matpr.2017.11.283",
    year: 2018,
    authors: ["Dr. Christy Sarguna"],
    abstract: "Research on clustering and classification methods for extracting actionable knowledge from data.",
  },
];
