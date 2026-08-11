export interface PersonalInfo {
  name: string;
  headline: string;
  tagline: string;
  heroDescription: string;
  aboutDescription: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  leetcode: string;
  location: string;
  profileImage: string;
  resumePath: string;
  statusBadge: string;
}

export interface StatCard {
  icon: string;
  label: string;
  value: string;
  detail?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
    highlight?: boolean;
  }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  description: string;
  image?: string;
  metric: {
    value: string;
    label: string;
  };
  techStack: string[];
  highlights: string[];
  category: "Computer Vision" | "Medical AI" | "NLP & Analytics" | "Machine Learning";
  featured?: boolean;
  badge?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  details: {
    architecture?: string;
    pipeline?: string[];
    dataset?: string;
    insights?: string[];
    evaluationMetrics?: { metric: string; score: string }[];
  };
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  badge: string;
  link?: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  specialization?: string;
  grade: string;
  gradeLabel: string;
  period: string;
  location?: string;
  highlights?: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  quickStats: StatCard[];
  aboutCards: {
    title: string;
    subtitle: string;
    icon: string;
    badge?: string;
  }[];
  skillCategories: SkillCategory[];
  experience: Experience[];
  featuredProject: Project;
  projects: Project[];
  achievements: {
    title: string;
    metric: string;
    description: string;
    category: string;
    topics: string[];
    link?: string;
  }[];
  certifications: Certification[];
  education: Education[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Vaibhav Bhardwaj",
    headline: "Data Science Undergraduate | Machine Learning & AI Enthusiast",
    tagline: "Bridging real-world data with deep learning architectures and intelligent systems.",
    heroDescription:
      "I'm a Computer Science undergraduate specializing in Data Science with a strong foundation in Python, SQL, Machine Learning, Deep Learning, and Data Analysis. Experienced in developing AI solutions and applying machine learning and deep learning techniques to real-world projects, with an interest in emerging technologies.",
    aboutDescription:
      "I'm a Computer Science undergraduate specializing in Data Science with a strong foundation in Python, SQL, Machine Learning, Deep Learning, and Data Analysis. Experienced in developing AI solutions and applying machine learning and deep learning techniques to real-world projects, with an interest in emerging technologies.",
    email: "vaibhavbhardwaj012@gmail.com",
    phone: "+91 8595851147",
    github: "https://github.com/vaibhavbh012",
    linkedin: "https://linkedin.com/in/vaibhav014",
    leetcode: "https://leetcode.com/u/vaibhavbhardwaj012/",
    location: "Dehradun, India",
    profileImage: "/vaibhav_profile.jpg",
    resumePath: "/Vaibhav_Bhardwaj_Resume.pdf",
    statusBadge: "Open to Opportunities",
  },

  quickStats: [
    {
      icon: "Database",
      value: "97.6K+",
      label: "Data Points Analyzed",
      detail: "Indian Job Postings Corpus",
    },
    {
      icon: "Cpu",
      value: "94.2%",
      label: "Peak Model Accuracy",
      detail: "Deep Medical Image Diagnosis",
    },
    {
      icon: "Code2",
      value: "100+",
      label: "LeetCode Solved",
      detail: "DSA & Problem Solving",
    },
    {
      icon: "GraduationCap",
      value: "8.04",
      label: "B.Tech CGPA",
      detail: "UPES Data Science",
    },
  ],

  aboutCards: [
    {
      title: "B.Tech in Computer Science",
      subtitle: "Specialization in Data Science (UPES, Dehradun)",
      icon: "GraduationCap",
      badge: "CGPA 8.04",
    },
    {
      title: "Data Science & Analytics",
      subtitle: "Large-scale EDA, TF-IDF, LDA Topic Modeling & Feature Pipelines",
      icon: "BarChart3",
      badge: "Statistical Analysis",
    },
    {
      title: "Machine Learning & AI",
      subtitle: "Deep Neural Networks, Transfer Learning, CNNs & Regressors",
      icon: "Bot",
      badge: "Deep Learning",
    },
    {
      title: "100+ LeetCode Problems",
      subtitle: "Algorithmic Problem Solving, Graph Theory & Data Structures",
      icon: "Code",
      badge: "DSA",
    },
    {
      title: "Dehradun, India",
      subtitle: "Available for on-site & remote software / AI internships and full-time roles",
      icon: "MapPin",
      badge: "Open to Relocate",
    },
  ],

  skillCategories: [
    {
      title: "Programming Languages",
      icon: "Terminal",
      skills: [
        { name: "Python", highlight: true },
        { name: "C++", highlight: true },
        { name: "SQL", highlight: true },
      ],
    },
    {
      title: "Machine Learning & Deep Learning",
      icon: "BrainCircuit",
      skills: [
        { name: "Supervised Learning", highlight: true },
        { name: "Unsupervised Learning" },
        { name: "Regression", highlight: true },
        { name: "Classification", highlight: true },
        { name: "Feature Engineering", highlight: true },
        { name: "Model Evaluation" },
        { name: "Ensemble Learning" },
        { name: "CNN", highlight: true },
        { name: "Transfer Learning", highlight: true },
        { name: "NLP", highlight: true },
      ],
    },
    {
      title: "Technologies & Frameworks",
      icon: "Layers",
      skills: [
        { name: "TensorFlow", highlight: true },
        { name: "PyTorch", highlight: true },
        { name: "Keras" },
        { name: "Scikit-learn", highlight: true },
        { name: "Pandas", highlight: true },
        { name: "NumPy", highlight: true },
        { name: "Matplotlib" },
        { name: "Seaborn" },
      ],
    },
    {
      title: "Databases & Tools",
      icon: "Wrench",
      skills: [
        { name: "MySQL", highlight: true },
        { name: "Power BI", highlight: true },
        { name: "GitHub" },
        { name: "Jupyter Notebook" },
        { name: "Google Colab" },
        { name: "VS Code" },
      ],
    },
    {
      title: "Core CS Coursework",
      icon: "BookOpen",
      skills: [
        { name: "Data Structures and Algorithms", highlight: true },
        { name: "Database Management Systems (DBMS)" },
        { name: "Operating Systems (OS)" },
        { name: "Computer Networks (CN)" },
        { name: "Object-Oriented Programming (OOP)", highlight: true },
        { name: "Machine Learning" },
      ],
    },
  ],

  experience: [
    {
      role: "Data Science Intern",
      company: "IBM",
      location: "India (Corporate / Remote)",
      period: "Jun 2026 – Jul 2026",
      type: "Internship",
      description:
        "Developing a Job Market Trend Analysis System to analyze 97,682+ Indian job postings, identify in-demand skills, salary trends, and hiring patterns using Python and data analytics.",
      responsibilities: [
        "Analyzed 97,682+ Indian job postings using Python, Pandas, and NumPy for comprehensive market intelligence.",
        "Performed data preprocessing and exploratory data analysis across job roles and salary distributions.",
        "Applied NLP techniques including TF-IDF vectorization and Latent Dirichlet Allocation (LDA) Topic Modeling.",
        "Developed salary prediction models comparing Linear Regression, Random Forest Regression, and XGBoost.",
        "Applied advanced feature engineering and model evaluation techniques.",
      ],
      techStack: [
        "Python",
        "NLP",
        "TF-IDF",
        "LDA",
        "Scikit-learn",
        "Random Forest",
        "XGBoost",
        "Pandas",
        "NumPy",
      ],
      metrics: [
        { label: "Job Postings Analyzed", value: "97,682+" },
        { label: "Predictive Models Compared", value: "3 Regressors" },
        { label: "Core Focus", value: "NLP & Salary Modeling" },
      ],
    },
  ],

  featuredProject: {
    id: "job-market-trend-analysis",
    title: "Job Market Trend Analysis System",
    subtitle: "Built during IBM Data Science Internship",
    date: "Jun 2026 – Jul 2026",
    badge: "IBM Internship",
    category: "NLP & Analytics",
    image: "/project_jobmarket.jpg",
    featured: true,
    description:
      "A comprehensive job market intelligence platform analyzing 97,682+ Indian tech postings using NLP and predictive salary regression modeling.",
    metric: {
      value: "97,682+",
      label: "Job Postings Analyzed",
    },
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "NLP",
      "TF-IDF",
      "LDA",
      "Scikit-learn",
      "Random Forest",
      "XGBoost",
      "Salary Prediction",
    ],
    highlights: [
      "Analyzed 97,682+ Indian job postings.",
      "Applied TF-IDF & LDA Topic Modeling for skill clustering.",
      "Compared Linear Regression, Random Forest, and XGBoost models.",
      "Engineered features for salary prediction across experience tiers.",
    ],
    githubUrl: "https://github.com/vaibhavbh012",
    details: {
      dataset: "97,682+ Indian job postings across major IT hubs.",
      pipeline: [
        "Data Preprocessing & EDA",
        "TF-IDF Vectorization & LDA Topic Modeling",
        "Feature Engineering & Encoding",
        "Salary Regressors (Linear Regression vs RF vs XGBoost)",
        "Model Evaluation (RMSE, MAE, R²)",
      ],
      evaluationMetrics: [
        { metric: "Job Postings Analyzed", score: "97,682+" },
        { metric: "Top Model", score: "XGBoost Regressor" },
        { metric: "Topic Mining", score: "LDA Topic Modeling" },
      ],
    },
  },

  projects: [
    {
      id: "skin-disease-detection",
      title: "Automated Skin Disease Detection System",
      subtitle: "MobileNetV2 CNN Transfer Learning",
      date: "Feb 2026 – May 2026",
      category: "Computer Vision",
      image: "/project_skin.jpg",
      description:
        "Designed and deployed a MobileNetV2-based CNN using transfer learning to classify six skin conditions with 92.4% accuracy, integrating symptom-based inputs and recommendations.",
      metric: {
        value: "92.4%",
        label: "Accuracy",
      },
      techStack: [
        "Python",
        "TensorFlow",
        "Keras",
        "CNN",
        "MobileNetV2",
        "NumPy",
        "Pandas",
      ],
      highlights: [
        "Classified six skin conditions with 92.4% accuracy.",
        "Built image preprocessing pipeline & data augmentation.",
        "Generated disease predictions with confidence scores.",
        "Implemented symptom-based inputs for disease severity assessment & recommendations.",
        "Used Global Average Pooling, Dense layers, and Dropout.",
      ],
      githubUrl: "https://github.com/vaibhavbh012/Automated-Skin-Disease-Detection-System",
      details: {
        architecture: "Pretrained MobileNetV2 -> GlobalAveragePooling -> Dense(256) -> Dropout(0.3) -> Softmax(6)",
        dataset: "Dermatological clinical dataset partitioned into Train, Validation, and Test sets.",
        pipeline: [
          "Image Preprocessing & Normalization",
          "Transfer Learning with Pretrained MobileNetV2",
          "Fine-Tuning Convolutional Blocks",
          "Confidence Scoring & Symptom Recommendations",
        ],
        evaluationMetrics: [
          { metric: "Accuracy", score: "92.4%" },
          { metric: "Conditions", score: "6 Classes" },
          { metric: "Model", score: "MobileNetV2 CNN" },
        ],
      },
    },
    {
      id: "job-market-trend-analysis",
      title: "Job Market Trend Analysis System",
      subtitle: "Built during IBM Data Science Internship",
      date: "Jun 2026 – Jul 2026",
      badge: "IBM Internship",
      category: "NLP & Analytics",
      image: "/project_jobmarket.jpg",
      featured: true,
      description:
        "Analyzed 97,682+ Indian job postings to extract in-demand skills, hiring trends, and predict competitive compensation using NLP (TF-IDF & LDA) and regression models.",
      metric: {
        value: "97,682+",
        label: "Postings Analyzed",
      },
      techStack: [
        "Python",
        "NLP",
        "TF-IDF",
        "LDA",
        "Scikit-learn",
        "Random Forest",
        "XGBoost",
        "Pandas",
        "NumPy",
      ],
      highlights: [
        "Analyzed 97,682+ Indian job postings.",
        "Performed data preprocessing and exploratory data analysis.",
        "Applied NLP techniques: TF-IDF and LDA Topic Modeling.",
        "Compared Linear Regression, Random Forest, and XGBoost Regression.",
      ],
      githubUrl: "https://github.com/vaibhavbh012",
      details: {
        architecture: "TF-IDF + LDA Feature Extraction -> Ensemble Gradient Boosted Tree (XGBoost)",
        dataset: "97,682+ job postings corpus.",
        pipeline: [
          "Data Preprocessing & Cleaning",
          "NLP Tokenization, TF-IDF & LDA",
          "Feature Engineering & Normalization",
          "Model Evaluation & Salary Insights",
        ],
        evaluationMetrics: [
          { metric: "Postings", score: "97,682+" },
          { metric: "Techniques", score: "TF-IDF, LDA" },
          { metric: "Models", score: "Linear, RF, XGBoost" },
        ],
      },
    },
    {
      id: "alzheimers-disease-detection",
      title: "Alzheimer's Disease Detection using Deep Learning",
      subtitle: "PyTorch MRI Classification Pipeline",
      date: "Jan 2026 – Apr 2026",
      category: "Medical AI",
      image: "/project_alzheimer.jpg",
      description:
        "Designed and deployed a deep learning pipeline to classify MRI scans into four Alzheimer's stages for automated medical image diagnosis, achieving 94.21% validation accuracy.",
      metric: {
        value: "94.21%",
        label: "Validation Accuracy",
      },
      techStack: [
        "Python",
        "PyTorch",
        "ResNet50",
        "VGG16",
        "NumPy",
        "Matplotlib",
        "Seaborn",
      ],
      highlights: [
        "Classified MRI scans into four Alzheimer's stages.",
        "Used transfer learning comparing ResNet50 and VGG16.",
        "Applied medical image data augmentation.",
        "Achieved 94.21% validation accuracy.",
      ],
      githubUrl: "https://github.com/vaibhavbh012",
      details: {
        architecture: "PyTorch ResNet50 Residual Skip Pipeline + Deep Linear Head",
        dataset: "Multi-stage neuroimaging MRI brain scan dataset.",
        pipeline: [
          "MRI Preprocessing & Skull-stripping Simulation",
          "Data Augmentation with Torchvision Transforms",
          "ResNet50 vs VGG16 Benchmark Training",
          "Confusion Matrix & ROC-AUC Validation",
        ],
        evaluationMetrics: [
          { metric: "Validation Accuracy", score: "94.21%" },
          { metric: "Stages Classified", score: "4 Dementia Stages" },
          { metric: "Top Backbone", score: "PyTorch ResNet50" },
        ],
      },
    },
  ],

  achievements: [
    {
      title: "100+ LeetCode Problems Solved",
      metric: "100+ Solved",
      description:
        "Consistently solved algorithmic challenges across Data Structures, Algorithms, Dynamic Programming, Trees, Graphs, and Hash Maps.",
      category: "Competitive Programming",
      topics: [
        "Arrays & Strings",
        "Dynamic Programming",
        "Binary Trees",
        "Graphs (BFS/DFS)",
        "Hash Tables",
      ],
      link: "https://leetcode.com/u/vaibhavbhardwaj012/",
    },
  ],

  certifications: [
    {
      title: "Python Programming Course",
      issuer: "Kaggle Learn",
      badge: "Verified Skill",
      skills: ["Python", "OOP", "Data Structures"],
    },
    {
      title: "Introduction to SQL",
      issuer: "Kaggle Learn",
      badge: "Verified Skill",
      skills: ["SQL", "Relational Databases", "Aggregations"],
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud Skills Boost",
      badge: "Cloud AI Badge",
      skills: ["Generative AI", "LLMs", "Prompt Design"],
    },
  ],

  education: [
    {
      institution: "University of Petroleum and Energy Studies (UPES)",
      degree: "B.Tech in Computer Science (Data Science)",
      specialization: "Data Science Specialization",
      grade: "8.04",
      gradeLabel: "CGPA",
      period: "Aug 2023 – Present",
      location: "Dehradun, India",
      highlights: [
        "Focus on Machine Learning, Deep Learning, Python, SQL, and Data Analytics.",
      ],
    },
    {
      institution: "Arwachin Bharti Bhawan Sr. Sec. School",
      degree: "Class XII — CBSE",
      specialization: "Science Stream",
      grade: "70.8%",
      gradeLabel: "Percentage",
      period: "2022 – 2023",
      location: "Delhi / NCR, India",
    },
    {
      institution: "Arwachin Bharti Bhawan Sr. Sec. School",
      degree: "Class X — CBSE",
      specialization: "Secondary School",
      grade: "80.8%",
      gradeLabel: "Percentage",
      period: "2020 – 2021",
      location: "Delhi / NCR, India",
    },
  ],
};
