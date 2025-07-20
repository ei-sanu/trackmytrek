export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advance';
  technologies: string[];
  estimatedTime: string;
  features: string[];
  domain: string;
}

export const projects: Project[] = [
  // Edge Computing Projects
  {
    id: 'edge-project-1',
    title: 'IoT Temperature Monitor',
    description: 'Build a simple IoT device that monitors temperature and sends data to a local edge server.',
    difficulty: 'beginner',
    domain: 'edge-computing',
    technologies: ['Arduino', 'Python', 'MQTT'],
    estimatedTime: '1-2 weeks',
    features: ['Temperature sensing', 'Data transmission', 'Local processing', 'Basic alerts']
  },
  {
    id: 'edge-project-2',
    title: 'Smart Home Gateway',
    description: 'Create a local gateway that manages multiple IoT devices and processes data at the edge.',
    difficulty: 'intermediate',
    domain: 'edge-computing',
    technologies: ['Raspberry Pi', 'Node.js', 'Docker', 'InfluxDB'],
    estimatedTime: '3-4 weeks',
    features: ['Device management', 'Data aggregation', 'Local processing', 'Web dashboard']
  },
  {
    id: 'edge-project-3',
    title: 'Industrial Edge Analytics Platform',
    description: 'Develop a comprehensive edge computing platform for industrial IoT with real-time analytics.',
    difficulty: 'advance',
    domain: 'edge-computing',
    technologies: ['Kubernetes', 'Apache Kafka', 'TensorFlow Lite', 'Grafana'],
    estimatedTime: '6-8 weeks',
    features: ['Real-time analytics', 'Machine learning inference', 'Fault detection', 'Predictive maintenance']
  },
  {
    id: 'edge-project-4',
    title: 'Personal Weather Station',
    description: 'Build a weather monitoring system that collects and processes environmental data locally.',
    difficulty: 'beginner',
    domain: 'edge-computing',
    technologies: ['ESP32', 'Python', 'SQLite'],
    estimatedTime: '2-3 weeks',
    features: ['Weather sensing', 'Data logging', 'Local storage', 'Simple visualization']
  },
  {
    id: 'edge-project-5',
    title: 'Edge Video Processing System',
    description: 'Create a system that processes video streams at the edge for object detection and analysis.',
    difficulty: 'advance',
    domain: 'edge-computing',
    technologies: ['OpenCV', 'TensorFlow', 'Docker', 'Redis'],
    estimatedTime: '4-6 weeks',
    features: ['Video processing', 'Object detection', 'Real-time analysis', 'Alert system']
  },
  // AI Projects
  {
    id: 'ai-project-1',
    title: 'Chatbot Assistant',
    description: 'Build a simple chatbot that can answer basic questions using natural language processing.',
    difficulty: 'beginner',
    domain: 'artificial-intelligence',
    technologies: ['Python', 'NLTK', 'Flask'],
    estimatedTime: '2-3 weeks',
    features: ['Text processing', 'Intent recognition', 'Response generation', 'Web interface']
  },
  {
    id: 'ai-project-2',
    title: 'Image Classification App',
    description: 'Develop an application that can classify images using a pre-trained neural network.',
    difficulty: 'intermediate',
    domain: 'artificial-intelligence',
    technologies: ['TensorFlow', 'Keras', 'React', 'Python'],
    estimatedTime: '3-4 weeks',
    features: ['Image upload', 'CNN classification', 'Result visualization', 'Model comparison']
  },
  {
    id: 'ai-project-3',
    title: 'Autonomous Trading Bot',
    description: 'Create an AI-powered trading bot that makes decisions based on market data analysis.',
    difficulty: 'advance',
    domain: 'artificial-intelligence',
    technologies: ['Python', 'scikit-learn', 'pandas', 'API integration'],
    estimatedTime: '6-8 weeks',
    features: ['Market data analysis', 'Machine learning models', 'Trading strategies', 'Risk management']
  },
  // Web Development Projects
  {
    id: 'webdev-project-1',
    title: 'Responsive Portfolio Website',
    description: 'Design and deploy a personal portfolio using HTML, CSS, and JavaScript.',
    difficulty: 'beginner',
    domain: 'web-development',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    estimatedTime: '1-2 weeks',
    features: ['Responsive design', 'Project showcase', 'Contact form']
  },
  {
    id: 'webdev-project-2',
    title: 'E-commerce Store',
    description: 'Build a full-stack e-commerce application with product listings and cart functionality.',
    difficulty: 'intermediate',
    domain: 'web-development',
    technologies: ['React', 'Node.js', 'MongoDB'],
    estimatedTime: '4-6 weeks',
    features: ['Product catalog', 'Cart management', 'User login', 'Admin dashboard']
  },
  {
    id: 'webdev-project-3',
    title: 'Progressive Web App (PWA) News Feed',
    description: 'Create a news reader app that works offline and supports push notifications.',
    difficulty: 'advance',
    domain: 'web-development',
    technologies: ['Vue.js', 'Service Workers', 'Firebase'],
    estimatedTime: '4-5 weeks',
    features: ['Offline access', 'Live news API integration', 'Push notifications']
  },

  // Cybersecurity Projects
  {
    id: 'cyber-project-1',
    title: 'Password Strength Checker',
    description: 'Develop a tool to evaluate the strength of passwords based on entropy and best practices.',
    difficulty: 'beginner',
    domain: 'cybersecurity',
    technologies: ['HTML', 'JavaScript'],
    estimatedTime: '1 week',
    features: ['Real-time feedback', 'Entropy check', 'Password tips']
  },
  {
    id: 'cyber-project-2',
    title: 'Vulnerability Scanner',
    description: 'Build a scanner that detects vulnerabilities in a local web application.',
    difficulty: 'intermediate',
    domain: 'cybersecurity',
    technologies: ['Python', 'Nmap', 'Flask'],
    estimatedTime: '3-4 weeks',
    features: ['Port scanning', 'OWASP checks', 'Report generation']
  },
  {
    id: 'cyber-project-3',
    title: 'SIEM Log Analyzer',
    description: 'Create a security tool to analyze logs and detect potential threats in real-time.',
    difficulty: 'advance',
    domain: 'cybersecurity',
    technologies: ['Elasticsearch', 'Kibana', 'Logstash', 'Python'],
    estimatedTime: '6-8 weeks',
    features: ['Real-time log analysis', 'Threat detection', 'Alert system']
  },

  // Blockchain Projects
  {
    id: 'blockchain-project-1',
    title: 'Basic Cryptocurrency Wallet',
    description: 'Create a wallet that supports basic transactions and balance tracking.',
    difficulty: 'beginner',
    domain: 'blockchain',
    technologies: ['JavaScript', 'Solidity', 'MetaMask'],
    estimatedTime: '2-3 weeks',
    features: ['Send/receive tokens', 'Balance check', 'Simple UI']
  },
  {
    id: 'blockchain-project-2',
    title: 'NFT Marketplace',
    description: 'Develop a platform to mint, buy, and sell NFTs on the Ethereum blockchain.',
    difficulty: 'intermediate',
    domain: 'blockchain',
    technologies: ['Solidity', 'React', 'IPFS', 'Web3.js'],
    estimatedTime: '5-6 weeks',
    features: ['NFT minting', 'Wallet integration', 'NFT listings']
  },
  {
    id: 'blockchain-project-3',
    title: 'Decentralized Voting System',
    description: 'Build a tamper-proof online voting system using smart contracts.',
    difficulty: 'advance',
    domain: 'blockchain',
    technologies: ['Solidity', 'Truffle', 'React'],
    estimatedTime: '6-8 weeks',
    features: ['Voting smart contract', 'Immutable results', 'Voter authentication']
  },

  // Cloud Computing Projects
  {
    id: 'cloud-project-1',
    title: 'Static Website Hosting on AWS',
    description: 'Host a static site using Amazon S3 and configure a custom domain.',
    difficulty: 'beginner',
    domain: 'cloud-computing',
    technologies: ['AWS S3', 'Route 53', 'HTML'],
    estimatedTime: '1-2 weeks',
    features: ['S3 hosting', 'Custom domain', 'SSL integration']
  },
  {
    id: 'cloud-project-2',
    title: 'CI/CD Pipeline with GitHub Actions',
    description: 'Set up an automated CI/CD pipeline for a web application.',
    difficulty: 'intermediate',
    domain: 'cloud-computing',
    technologies: ['GitHub Actions', 'Docker', 'AWS EC2'],
    estimatedTime: '2-3 weeks',
    features: ['Pipeline setup', 'Automated deployment', 'Build testing']
  },
  {
    id: 'cloud-project-3',
    title: 'Serverless REST API',
    description: 'Create a RESTful API using AWS Lambda and API Gateway.',
    difficulty: 'advance',
    domain: 'cloud-computing',
    technologies: ['AWS Lambda', 'DynamoDB', 'API Gateway'],
    estimatedTime: '4-6 weeks',
    features: ['No server setup', 'CRUD API', 'Scalable architecture']
  },

  // Data Science Projects
  {
    id: 'datasci-project-1',
    title: 'Sales Data Visualizer',
    description: 'Visualize and analyze sales data using Python libraries.',
    difficulty: 'beginner',
    domain: 'data-science',
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    estimatedTime: '1-2 weeks',
    features: ['CSV import', 'Graphs and charts', 'Trend analysis']
  },
  {
    id: 'datasci-project-2',
    title: 'Movie Recommendation System',
    description: 'Build a system that recommends movies based on user preferences.',
    difficulty: 'intermediate',
    domain: 'data-science',
    technologies: ['Python', 'scikit-learn', 'Streamlit'],
    estimatedTime: '3-4 weeks',
    features: ['Collaborative filtering', 'Similarity metrics', 'User interface']
  },
  {
    id: 'datasci-project-3',
    title: 'Customer Segmentation Engine',
    description: 'Use clustering to segment customers for targeted marketing.',
    difficulty: 'advance',
    domain: 'data-science',
    technologies: ['Python', 'KMeans', 'Seaborn'],
    estimatedTime: '4-6 weeks',
    features: ['Clustering', 'Data preprocessing', 'Segment analysis']
  },
  // DevOps Projects
  {
    id: 'devops-project-1',
    title: 'Dockerized Node App',
    description: 'Containerize a Node.js application using Docker.',
    difficulty: 'beginner',
    domain: 'devops',
    technologies: ['Docker', 'Node.js'],
    estimatedTime: '1 week',
    features: ['Dockerfile setup', 'Basic container usage', 'Local deployment']
  },
  {
    id: 'devops-project-2',
    title: 'Jenkins CI/CD Pipeline',
    description: 'Set up a Jenkins pipeline for automated testing and deployment.',
    difficulty: 'intermediate',
    domain: 'devops',
    technologies: ['Jenkins', 'GitHub', 'Shell scripting'],
    estimatedTime: '2-3 weeks',
    features: ['Pipeline configuration', 'Build automation', 'Code testing']
  },
  {
    id: 'devops-project-3',
    title: 'Kubernetes Cluster Monitoring',
    description: 'Deploy and monitor applications in a Kubernetes cluster.',
    difficulty: 'advance',
    domain: 'devops',
    technologies: ['Kubernetes', 'Prometheus', 'Grafana'],
    estimatedTime: '4-5 weeks',
    features: ['Cluster setup', 'Resource monitoring', 'Dashboard']
  },

  // IoT Projects
  {
    id: 'iot-project-1',
    title: 'Smart Plant Monitor',
    description: 'Monitor soil moisture and notify users when watering is needed.',
    difficulty: 'beginner',
    domain: 'iot',
    technologies: ['Arduino', 'Sensors', 'Blynk'],
    estimatedTime: '1-2 weeks',
    features: ['Moisture detection', 'Mobile alerts', 'Simple interface']
  },
  {
    id: 'iot-project-2',
    title: 'Smart Door Lock System',
    description: 'Create a secure door locking system controlled via smartphone.',
    difficulty: 'intermediate',
    domain: 'iot',
    technologies: ['Raspberry Pi', 'Python', 'Bluetooth'],
    estimatedTime: '3-4 weeks',
    features: ['Remote locking', 'Access logging', 'Mobile integration']
  },
  {
    id: 'iot-project-3',
    title: 'Industrial IoT Dashboard',
    description: 'Collect and display real-time factory data from sensors.',
    difficulty: 'advance',
    domain: 'iot',
    technologies: ['MQTT', 'Node-RED', 'InfluxDB'],
    estimatedTime: '5-6 weeks',
    features: ['Sensor integration', 'Real-time charts', 'Cloud sync']
  },

  // Robotics Projects
  {
    id: 'robotics-project-1',
    title: 'Obstacle Avoiding Robot',
    description: 'Build a robot that avoids obstacles using sensors.',
    difficulty: 'beginner',
    domain: 'robotics',
    technologies: ['Arduino', 'Ultrasonic Sensor', 'C++'],
    estimatedTime: '1-2 weeks',
    features: ['Obstacle detection', 'Autonomous navigation']
  },
  {
    id: 'robotics-project-2',
    title: 'Line Follower Robot',
    description: 'A robot that follows a path based on visual input.',
    difficulty: 'intermediate',
    domain: 'robotics',
    technologies: ['IR Sensors', 'C++', 'Arduino'],
    estimatedTime: '2-3 weeks',
    features: ['Line detection', 'PID control', 'Path following']
  },
  {
    id: 'robotics-project-3',
    title: 'Voice Controlled Robot',
    description: 'Control a robot using voice commands.',
    difficulty: 'advance',
    domain: 'robotics',
    technologies: ['Speech Recognition', 'Bluetooth', 'Arduino'],
    estimatedTime: '3-4 weeks',
    features: ['Voice input', 'Remote control', 'Command interpretation']
  },

  // Augmented Reality (AR) Projects
  {
    id: 'ar-project-1',
    title: 'AR Flashcards',
    description: 'Create AR flashcards for kids using a mobile app.',
    difficulty: 'beginner',
    domain: 'ar',
    technologies: ['Unity', 'Vuforia', 'C#'],
    estimatedTime: '1-2 weeks',
    features: ['3D content overlay', 'Camera detection', 'Card interaction']
  },
  {
    id: 'ar-project-2',
    title: 'AR Interior Decorator',
    description: 'Preview furniture in your room using AR.',
    difficulty: 'intermediate',
    domain: 'ar',
    technologies: ['ARCore', 'Unity', 'Blender'],
    estimatedTime: '3-4 weeks',
    features: ['Object placement', 'Real-world scaling', 'Camera movement']
  },
  {
    id: 'ar-project-3',
    title: 'AR Maintenance Assistant',
    description: 'Guide users through machine maintenance via AR instructions.',
    difficulty: 'advance',
    domain: 'ar',
    technologies: ['Unity', 'Vuforia', '3D Modeling'],
    estimatedTime: '5-6 weeks',
    features: ['Step-by-step guide', 'Overlay instructions', 'Object recognition']
  },

  // Virtual Reality (VR) Projects
  {
    id: 'vr-project-1',
    title: 'VR Tour Experience',
    description: 'Develop a VR app for exploring historical places.',
    difficulty: 'beginner',
    domain: 'vr',
    technologies: ['Unity', 'Google Cardboard'],
    estimatedTime: '2-3 weeks',
    features: ['360-degree view', 'Scene transitions', 'Voice narration']
  },
  {
    id: 'vr-project-2',
    title: 'VR Driving Simulator',
    description: 'Create a realistic driving experience in VR.',
    difficulty: 'intermediate',
    domain: 'vr',
    technologies: ['Unity', 'C#', 'Oculus SDK'],
    estimatedTime: '4-5 weeks',
    features: ['Vehicle control', '3D environment', 'Collision effects']
  },
  {
    id: 'vr-project-3',
    title: 'VR Surgery Training Simulator',
    description: 'Design a VR app for training medical students.',
    difficulty: 'advance',
    domain: 'vr',
    technologies: ['Unity', 'VR Toolkit', '3D Models'],
    estimatedTime: '6-8 weeks',
    features: ['Interactive tools', 'Anatomical accuracy', 'Procedure simulation']
  },

  // Game Development Projects
  {
    id: 'game-project-1',
    title: '2D Platformer Game',
    description: 'Build a simple side-scrolling platform game.',
    difficulty: 'beginner',
    domain: 'game-development',
    technologies: ['Unity', 'C#'],
    estimatedTime: '1-2 weeks',
    features: ['Player movement', 'Enemy AI', 'Basic scoring']
  },
  {
    id: 'game-project-2',
    title: 'Multiplayer Trivia Game',
    description: 'Create a real-time multiplayer trivia quiz.',
    difficulty: 'intermediate',
    domain: 'game-development',
    technologies: ['Node.js', 'Socket.IO', 'React'],
    estimatedTime: '3-4 weeks',
    features: ['Live players', 'Scoreboard', 'Timed questions']
  },
  {
    id: 'game-project-3',
    title: '3D Open World Game',
    description: 'Design an immersive 3D open-world environment.',
    difficulty: 'advance',
    domain: 'game-development',
    technologies: ['Unreal Engine', 'Blueprints', 'C++'],
    estimatedTime: '6-8 weeks',
    features: ['Open-world exploration', 'Inventory system', 'NPC dialogue']
  },

  // Digital Marketing Projects
  {
    id: 'dm-project-1',
    title: 'SEO Analyzer Tool',
    description: 'Develop a tool to check website SEO performance.',
    difficulty: 'beginner',
    domain: 'digital-marketing',
    technologies: ['HTML', 'JavaScript', 'Google APIs'],
    estimatedTime: '1 week',
    features: ['Keyword check', 'Meta tag checker', 'Suggestions']
  },
  {
    id: 'dm-project-2',
    title: 'Social Media Scheduler',
    description: 'Build a platform to plan and schedule posts.',
    difficulty: 'intermediate',
    domain: 'digital-marketing',
    technologies: ['React', 'Firebase', 'GraphQL'],
    estimatedTime: '2-3 weeks',
    features: ['Post scheduler', 'Analytics dashboard', 'Template creator']
  },
  {
    id: 'dm-project-3',
    title: 'Ad Campaign Tracker',
    description: 'Track ad campaign performance from multiple platforms.',
    difficulty: 'advance',
    domain: 'digital-marketing',
    technologies: ['Google Ads API', 'Python', 'Dash'],
    estimatedTime: '4-5 weeks',
    features: ['Cross-platform insights', 'Performance graphs', 'Cost analysis']
  },

  // UI/UX Design Projects
  {
    id: 'uiux-project-1',
    title: 'Portfolio Wireframe Kit',
    description: 'Design reusable wireframe components for portfolios.',
    difficulty: 'beginner',
    domain: 'ui-ux-design',
    technologies: ['Figma'],
    estimatedTime: '1 week',
    features: ['Wireframe library', 'Reusable components', 'Mobile-first layout']
  },
  {
    id: 'uiux-project-2',
    title: 'E-commerce Redesign',
    description: 'Redesign the UX of an e-commerce app.',
    difficulty: 'intermediate',
    domain: 'ui-ux-design',
    technologies: ['Figma', 'Adobe XD'],
    estimatedTime: '2-3 weeks',
    features: ['UX flow improvement', 'Interactive prototype', 'User testing']
  },
  {
    id: 'uiux-project-3',
    title: 'UX Audit Tool',
    description: 'Design a tool to evaluate usability of web apps.',
    difficulty: 'advance',
    domain: 'ui-ux-design',
    technologies: ['UX principles', 'Figma', 'User testing'],
    estimatedTime: '3-4 weeks',
    features: ['Heuristic evaluation', 'Accessibility check', 'Report export']
  },
  // Software Testing Projects
  {
    id: 'testing-project-1',
    title: 'Bug Tracker System',
    description: 'Build a basic bug tracking system to log and manage issues.',
    difficulty: 'beginner',
    domain: 'software-testing',
    technologies: ['HTML', 'JavaScript', 'SQLite'],
    estimatedTime: '1-2 weeks',
    features: ['Bug reporting', 'Status tracking', 'Priority labels']
  },
  {
    id: 'testing-project-2',
    title: 'Automated UI Test Suite',
    description: 'Develop UI tests for a web application using Selenium.',
    difficulty: 'intermediate',
    domain: 'software-testing',
    technologies: ['Selenium', 'Python', 'PyTest'],
    estimatedTime: '3-4 weeks',
    features: ['Form validation', 'Login testing', 'Cross-browser checks']
  },
  {
    id: 'testing-project-3',
    title: 'Performance Testing Dashboard',
    description: 'Create a performance test suite and dashboard for a backend API.',
    difficulty: 'advance',
    domain: 'software-testing',
    technologies: ['JMeter', 'Grafana', 'PostgreSQL'],
    estimatedTime: '4-5 weeks',
    features: ['Load testing', 'Response time monitoring', 'Real-time graphs']
  },

  // Business Analysis Projects
  {
    id: 'ba-project-1',
    title: 'Requirement Gathering Template',
    description: 'Design a professional template to gather client requirements.',
    difficulty: 'beginner',
    domain: 'business-analysis',
    technologies: ['MS Word', 'Google Forms'],
    estimatedTime: '1 week',
    features: ['Requirement fields', 'Use case entry', 'Simple layout']
  },
  {
    id: 'ba-project-2',
    title: 'SWOT Analysis Tool',
    description: 'Create a SWOT matrix tool for evaluating product or company positioning.',
    difficulty: 'intermediate',
    domain: 'business-analysis',
    technologies: ['Excel', 'React', 'Chart.js'],
    estimatedTime: '2-3 weeks',
    features: ['Interactive matrix', 'Report generation', 'Data visualization']
  },
  {
    id: 'ba-project-3',
    title: 'Business Process Modeling App',
    description: 'Model and optimize business workflows using BPMN standards.',
    difficulty: 'advance',
    domain: 'business-analysis',
    technologies: ['Camunda', 'BPMN.io', 'Java'],
    estimatedTime: '4-5 weeks',
    features: ['Flowchart design', 'Process simulation', 'Execution metrics']
  },

  // Project Management Projects
  {
    id: 'pm-project-1',
    title: 'Task Management Board',
    description: 'Develop a Kanban-style board to manage project tasks.',
    difficulty: 'beginner',
    domain: 'project-management',
    technologies: ['Trello API', 'JavaScript'],
    estimatedTime: '1-2 weeks',
    features: ['Task columns', 'Drag & drop', 'Basic analytics']
  },
  {
    id: 'pm-project-2',
    title: 'Gantt Chart Generator',
    description: 'Create a Gantt chart to visualize project timelines.',
    difficulty: 'intermediate',
    domain: 'project-management',
    technologies: ['React', 'D3.js'],
    estimatedTime: '2-3 weeks',
    features: ['Timeline view', 'Task linking', 'Progress tracking']
  },
  {
    id: 'pm-project-3',
    title: 'Agile Sprint Planner',
    description: 'Build a sprint planning app with backlog and velocity tracking.',
    difficulty: 'advance',
    domain: 'project-management',
    technologies: ['Node.js', 'MongoDB', 'Express'],
    estimatedTime: '4-5 weeks',
    features: ['Sprint creation', 'Story points', 'Team metrics']
  },

  // Product Management Projects
  {
    id: 'prodmgmt-project-1',
    title: 'Feature Prioritization Matrix',
    description: 'Develop a tool to rank product features by value and effort.',
    difficulty: 'beginner',
    domain: 'product-management',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    estimatedTime: '1 week',
    features: ['Value vs effort chart', 'Priority scores', 'Custom labels']
  },
  {
    id: 'prodmgmt-project-2',
    title: 'Product Roadmap Tool',
    description: 'Visualize product launch plans across multiple quarters.',
    difficulty: 'intermediate',
    domain: 'product-management',
    technologies: ['React', 'Timeline.js', 'Bootstrap'],
    estimatedTime: '2-3 weeks',
    features: ['Milestone plotting', 'Goal setting', 'Timeline filters']
  },
  {
    id: 'prodmgmt-project-3',
    title: 'User Feedback Aggregator',
    description: 'Create a platform to collect and analyze user suggestions.',
    difficulty: 'advance',
    domain: 'product-management',
    technologies: ['Flask', 'SQLite', 'NLP'],
    estimatedTime: '4-6 weeks',
    features: ['Feedback form', 'Sentiment analysis', 'Tag-based search']
  },

  // Technical Writing Projects
  {
    id: 'techwrite-project-1',
    title: 'API Documentation Site',
    description: 'Write and host documentation for a REST API.',
    difficulty: 'beginner',
    domain: 'technical-writing',
    technologies: ['Markdown', 'Docsify', 'GitHub Pages'],
    estimatedTime: '1 week',
    features: ['Endpoint listing', 'Code samples', 'Version control']
  },
  {
    id: 'techwrite-project-2',
    title: 'User Manual for SaaS Tool',
    description: 'Create a detailed manual for onboarding users to a web product.',
    difficulty: 'intermediate',
    domain: 'technical-writing',
    technologies: ['Google Docs', 'Snagit', 'Markdown'],
    estimatedTime: '2 weeks',
    features: ['Step-by-step guide', 'Screenshots', 'Glossary']
  },
  {
    id: 'techwrite-project-3',
    title: 'Technical Blog Series',
    description: 'Write a blog series explaining a complex system or architecture.',
    difficulty: 'advance',
    domain: 'technical-writing',
    technologies: ['Medium', 'Diagrams.net', 'Markdown'],
    estimatedTime: '3-4 weeks',
    features: ['Visual breakdowns', 'SEO-optimized', 'Concept walkthrough']
  },
  {
    id: 'mobile-project-1',
    title: "Expense Tracker Mobile App",
    description: "Build a mobile app to track daily expenses with categorization and graph view.",
    difficulty: "Intermediate",
    domain: "mobile-development",
    technologies: ["Flutter", "Dart", "Firebase"],
    estimatedTime: "7-9 hours",
    features: ["Add/edit/delete expenses", "Category filters", "Monthly graphs", "Data sync"]
  },
  {
    id: 'mobile-project-2',
    title: "Simple To-Do List App",
    description: "Create a basic to-do list application with task priorities.",
    difficulty: "Beginner",
    domain: "mobile-development",
    technologies: ["React Native", "JavaScript"],
    estimatedTime: "4-5 hours",
    features: ["Add/delete tasks", "Priority levels", "Dark mode"]
  },
  {
    id: 'mobile-project-3',
    title: "Fitness Tracker App",
    description: "Develop a mobile app to monitor user workouts, calories, and progress.",
    difficulty: "Advanced",
    domain: "mobile-development",
    technologies: ["Flutter", "Firebase", "Google Fit API"],
    estimatedTime: "10-12 hours",
    features: ["Step count tracking", "Workout history", "Calorie burn analytics"]
  },

  // Augmented Reality
  {
    id: 'ar-project-1',
    title: "AR Furniture Preview App",
    description: "Build an AR mobile app that allows users to preview furniture in their rooms using their phone camera.",
    difficulty: "Intermediate",
    domain: "augmented-reality",
    technologies: ["Unity", "Vuforia", "C#"],
    estimatedTime: "8-10 hours",
    features: ["AR object placement", "Camera overlay", "Scale adjustments"]
  },
  {
    id: 'ar-project-2',
    title: "AR Flashcards for Learning",
    description: "Create flashcards with AR support to visualize 3D models for learning.",
    difficulty: "Beginner",
    domain: "augmented-reality",
    technologies: ["Unity", "Vuforia"],
    estimatedTime: "5-6 hours",
    features: ["Marker-based tracking", "3D model overlay", "Basic UI"]
  },
  {
    id: 'ar-project-3',
    title: "AR Surgery Simulation",
    description: "Simulate surgeries using augmented reality for healthcare training.",
    difficulty: "Advanced",
    domain: "augmented-reality",
    technologies: ["Unity", "ARKit", "C#"],
    estimatedTime: "12-14 hours",
    features: ["Real-time interaction", "Organ visualization", "Scenario-based simulations"]
  },

  // Virtual Reality
  {
    id: 'vr-project-1',
    title: "VR Meditation Experience",
    description: "Build a virtual reality experience for guided meditation.",
    difficulty: "Beginner",
    domain: "virtual-reality",
    technologies: ["Unity", "Oculus SDK"],
    estimatedTime: "5-6 hours",
    features: ["Relaxing environments", "Breathing exercises", "Voice guidance"]
  },
  {
    id: 'vr-project-2',
    title: "VR Architectural Walkthrough",
    description: "Design a VR app to let users walk through a house plan before construction.",
    difficulty: "Intermediate",
    domain: "virtual-reality",
    technologies: ["Unity", "Blender", "C#"],
    estimatedTime: "8-10 hours",
    features: ["3D house modeling", "Room navigation", "Interactive elements"]
  },
  {
    id: 'vr-project-3',
    title: "VR Surgical Training",
    description: "Create a realistic VR simulation for surgical procedures.",
    difficulty: "Advanced",
    domain: "virtual-reality",
    technologies: ["Unreal Engine", "C++", "HTC Vive"],
    estimatedTime: "12-15 hours",
    features: ["Instrument simulation", "Realistic feedback", "Step-by-step training"]
  },

  // Database Administration
  {
    id: 'dba-project-1',
    title: "SQL Backup Automation Tool",
    description: "Create a tool to automate SQL database backups on a schedule.",
    difficulty: "Intermediate",
    domain: "database-administration",
    technologies: ["Python", "MySQL", "Cron"],
    estimatedTime: "6-8 hours",
    features: ["Scheduled backup", "Log generation", "Error alerts"]
  },
  {
    id: 'dba-project-2',
    title: "Database Normalization Analyzer",
    description: "Develop a tool to analyze and suggest normalization of given database schema.",
    difficulty: "Advanced",
    domain: "database-administration",
    technologies: ["Python", "SQLAlchemy", "PostgreSQL"],
    estimatedTime: "10-12 hours",
    features: ["Schema parsing", "NF suggestion", "Interactive UI"]
  },
  {
    id: 'dba-project-3',
    title: "Student Record Database System",
    description: "Build a basic record management system using SQL.",
    difficulty: "Beginner",
    domain: "database-administration",
    technologies: ["MySQL", "PHP"],
    estimatedTime: "4-5 hours",
    features: ["CRUD operations", "Search function", "Login panel"]
  },
  // Network Administration Projects
  {
    id: 'network-project-1',
    title: 'Network Topology Visualizer',
    description: 'Create a tool to visualize and simulate different network topologies.',
    difficulty: 'beginner',
    domain: 'network-administration',
    technologies: ['JavaScript', 'Cisco Packet Tracer'],
    estimatedTime: '2 weeks',
    features: ['Interactive topology editor', 'Basic network simulation']
  },
  {
    id: 'network-project-2',
    title: 'Automated Network Monitoring System',
    description: 'Build a system that monitors and reports network activity and uptime.',
    difficulty: 'intermediate',
    domain: 'network-administration',
    technologies: ['Python', 'SNMP', 'Nagios'],
    estimatedTime: '3 weeks',
    features: ['Live monitoring', 'Uptime dashboard', 'Email alerts']
  },
  {
    id: 'network-project-3',
    title: 'Firewall Configuration Simulator',
    description: 'Develop a simulator for learning and testing firewall configurations.',
    difficulty: 'advanced',
    domain: 'network-administration',
    technologies: ['Linux', 'iptables', 'VirtualBox'],
    estimatedTime: '4 weeks',
    features: ['Custom rule sets', 'Network segmentation', 'Real-time testing']
  },

  // System Administration Projects
  {
    id: 'system-project-1',
    title: 'Linux User Management Tool',
    description: 'Create a simple interface for managing users and groups on a Linux system.',
    difficulty: 'beginner',
    domain: 'system-administration',
    technologies: ['Shell Script', 'Linux'],
    estimatedTime: '1 week',
    features: ['Add/delete users', 'Assign groups']
  },
  {
    id: 'system-project-2',
    title: 'Server Backup Automation',
    description: 'Automate daily backups of server data and configurations.',
    difficulty: 'intermediate',
    domain: 'system-administration',
    technologies: ['Bash', 'cron', 'rsync'],
    estimatedTime: '2 weeks',
    features: ['Scheduled backups', 'Log generation']
  },
  {
    id: 'system-project-3',
    title: 'Load Balancer Deployment Tool',
    description: 'Deploy a software-based load balancer with health checks.',
    difficulty: 'advanced',
    domain: 'system-administration',
    technologies: ['HAProxy', 'Linux', 'Python'],
    estimatedTime: '3 weeks',
    features: ['Traffic distribution', 'Failover support']
  },

  // Sales Engineering Projects
  {
    id: 'sales-project-1',
    title: 'CRM Dashboard Prototype',
    description: 'Design a basic dashboard to manage customer leads and sales pipelines.',
    difficulty: 'beginner',
    domain: 'sales-engineering',
    technologies: ['React', 'Firebase'],
    estimatedTime: '2 weeks',
    features: ['Lead tracking', 'Visual sales funnel']
  },
  {
    id: 'sales-project-2',
    title: 'Proposal Generator Tool',
    description: 'Automate generation of customer proposal documents.',
    difficulty: 'intermediate',
    domain: 'sales-engineering',
    technologies: ['Node.js', 'PDFKit'],
    estimatedTime: '2 weeks',
    features: ['Template editor', 'Auto-filled client data']
  },
  {
    id: 'sales-project-3',
    title: 'Sales Data Insight Engine',
    description: 'Build a tool to analyze and visualize sales performance.',
    difficulty: 'advanced',
    domain: 'sales-engineering',
    technologies: ['Python', 'Pandas', 'Plotly'],
    estimatedTime: '3 weeks',
    features: ['Dynamic charts', 'Trend analysis', 'KPI comparison']
  },

  // Embedded Systems Projects
  {
    id: 'embedded-project-1',
    title: 'LED Blinker with Microcontroller',
    description: 'Blink LEDs using a microcontroller and basic logic.',
    difficulty: 'beginner',
    domain: 'embedded-systems',
    technologies: ['C', 'Arduino'],
    estimatedTime: '1 week',
    features: ['Basic I/O control']
  },
  {
    id: 'embedded-project-2',
    title: 'IoT Temperature Logger',
    description: 'Monitor and store temperature data using sensors.',
    difficulty: 'intermediate',
    domain: 'embedded-systems',
    technologies: ['ESP8266', 'C++', 'DHT11'],
    estimatedTime: '2 weeks',
    features: ['Wi-Fi upload', 'Temperature history']
  },
  {
    id: 'embedded-project-3',
    title: 'Gesture Controlled Robot',
    description: 'Build a robot that moves based on gesture commands.',
    difficulty: 'advanced',
    domain: 'embedded-systems',
    technologies: ['Raspberry Pi', 'Python', 'Accelerometer'],
    estimatedTime: '4 weeks',
    features: ['Gesture input', 'Wireless control']
  },

  // Quality Assurance Projects
  {
    id: 'qa-project-1',
    title: 'Bug Reporting System',
    description: 'Develop a simple platform for logging and tracking bugs.',
    difficulty: 'beginner',
    domain: 'quality-assurance',
    technologies: ['HTML', 'PHP', 'MySQL'],
    estimatedTime: '2 weeks',
    features: ['Bug submission form', 'Status tracking']
  },
  {
    id: 'qa-project-2',
    title: 'Automated Test Script Suite',
    description: 'Create reusable test scripts for a sample web app.',
    difficulty: 'intermediate',
    domain: 'quality-assurance',
    technologies: ['Selenium', 'Python'],
    estimatedTime: '3 weeks',
    features: ['Login test', 'Form validation test']
  },
  {
    id: 'qa-project-3',
    title: 'Performance Testing Framework',
    description: 'Design a framework to stress-test web applications.',
    difficulty: 'advanced',
    domain: 'quality-assurance',
    technologies: ['JMeter', 'Java'],
    estimatedTime: '4 weeks',
    features: ['Concurrent user simulation', 'Throughput analysis']
  },

  // Healthcare IT Projects
  {
    id: 'healthcare-project-1',
    title: 'Patient Record Viewer',
    description: 'Create a frontend to view and update patient data.',
    difficulty: 'beginner',
    domain: 'healthcare-it',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    estimatedTime: '2 weeks',
    features: ['Patient lookup', 'Editable profile']
  },
  {
    id: 'healthcare-project-2',
    title: 'Appointment Scheduling System',
    description: 'Develop a portal for patients to book doctor appointments.',
    difficulty: 'intermediate',
    domain: 'healthcare-it',
    technologies: ['Node.js', 'MongoDB', 'Express'],
    estimatedTime: '3 weeks',
    features: ['Doctor availability', 'Patient booking flow']
  },
  {
    id: 'healthcare-project-3',
    title: 'AI Symptom Checker',
    description: 'Build a tool that suggests conditions based on symptoms.',
    difficulty: 'advanced',
    domain: 'healthcare-it',
    technologies: ['Python', 'ML', 'Flask'],
    estimatedTime: '4 weeks',
    features: ['Symptom input', 'AI-based suggestions']
  },


  // Add more projects for other domains...
];

export const getProjectsByDomainAndDifficulty = (domain: string, difficulty: string): Project[] => {
  return projects.filter(p => p.domain === domain && p.difficulty === difficulty);
};
