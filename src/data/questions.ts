export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'beginner' | 'intermediate' | 'advance';
  domain: string;
}

export const questions: Question[] = [
  // Edge Computing Questions
  {
    id: 'edge-1',
    question: 'What is the primary benefit of edge computing?',
    options: ['Reduced latency', 'Increased storage', 'Better graphics', 'Lower cost'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'Where is data processed in edge computing?',
    options: ['At the data center', 'At the edge of the network', 'In the cloud', 'At the ISP'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'Which device is commonly used in edge computing?',
    options: ['Router', 'Mainframe', 'Edge gateway', 'Graphics card'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'Edge computing is most beneficial for applications that require:',
    options: ['High latency', 'Frequent updates', 'Real-time processing', 'Remote backups'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'What is a key reason for using edge computing in IoT?',
    options: ['Reduce server cost', 'Faster user interfaces', 'Lower bandwidth usage', 'Increase advertising'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'Which of the following is a common use case of edge computing?',
    options: ['Cloud gaming', 'Autonomous vehicles', 'Email filtering', 'Spreadsheet editing'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'Edge computing helps reduce:',
    options: ['Cloud costs', 'Latency', 'Device weight', 'Software bugs'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'Which technology does edge computing complement?',
    options: ['5G', 'Bluetooth', 'CD-ROMs', 'Floppy disks'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'In edge computing, data is often processed:',
    options: ['Before reaching the cloud', 'After storage', 'Only at night', 'In mainframes'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'What is a benefit of processing data closer to the source?',
    options: ['Improved energy billing', 'Faster response time', 'Larger reports', 'Better fonts'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'Edge computing is suitable for which environment?',
    options: ['Remote areas', 'Underground mining', 'Urban offices', 'All of the above'],
    correctAnswer: 3,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'Which of these is a challenge in edge computing?',
    options: ['Too much centralization', 'Data privacy and security', 'Lack of bandwidth', 'Outdated GUIs'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'Which industry uses edge computing for predictive maintenance?',
    options: ['Retail', 'Aerospace', 'Manufacturing', 'Tourism'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'Edge devices typically include:',
    options: ['Smart sensors', 'Cloud servers', 'Data lakes', 'SQL terminals'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },
  {
    id: 'edge-1',
    question: 'Which protocol is commonly used in edge computing for IoT devices?',
    options: ['HTTP', 'MQTT', 'FTP', 'SMTP'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'edge-computing'
  },

  {
    id: 'edge-2',
    question: 'Which protocol is commonly used in edge computing for IoT devices?',
    options: ['HTTP', 'MQTT', 'FTP', 'SMTP'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'Which architecture best describes edge computing?',
    options: ['Client-server', 'Centralized', 'Distributed', 'Peer-to-peer'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'How does edge computing improve scalability?',
    options: ['By offloading tasks to the cloud', 'By distributing processing closer to the source', 'By using larger servers', 'By storing all data centrally'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'Which of the following is a potential drawback of edge computing?',
    options: ['Increased latency', 'Reduced reliability of cloud services', 'Difficulty in managing many edge nodes', 'Higher power usage in data centers'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'Which component often acts as the first point of processing in an edge computing system?',
    options: ['Data warehouse', 'Edge gateway', 'Cloud platform', 'Firewall'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'In edge computing, what is the role of containerization tools like Docker?',
    options: ['Encrypt data', 'Provide virtualization for edge applications', 'Transfer data to the cloud', 'Monitor network bandwidth'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'What is the function of an edge orchestrator?',
    options: ['Manage data center traffic', 'Coordinate workloads across edge devices', 'Provide cloud billing services', 'Monitor VPN connections'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'Why is fault tolerance important in edge computing systems?',
    options: ['Because edge systems are always offline', 'Because edge systems cannot communicate with each other', 'To ensure continuity in case of local failures', 'To reduce electricity consumption'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'Which of these best describes data sovereignty in edge computing?',
    options: ['Data must be stored in the user’s language', 'Data should be stored near its point of origin', 'Data can only be accessed during working hours', 'Data must be encrypted with public keys'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'Which of these helps edge nodes authenticate securely?',
    options: ['OAuth tokens', 'MD5 hash', 'Plaintext passwords', 'FTP certificates'],
    correctAnswer: 0,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'Edge computing reduces the need for which of the following?',
    options: ['Cloud storage', 'Bandwidth to the cloud', 'Local processing', 'Mobile data'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'What is an edge analytics engine responsible for?',
    options: ['Controlling IoT sensors remotely', 'Running batch jobs on a cloud server', 'Real-time processing and analysis of data at the edge', 'Managing backups of cloud data'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'Which kind of network topology is most aligned with edge computing?',
    options: ['Star topology', 'Bus topology', 'Mesh topology', 'Ring topology'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'Which cloud model is most commonly integrated with edge computing?',
    options: ['Private cloud', 'Public cloud', 'Hybrid cloud', 'Bare-metal cloud'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-2',
    question: 'In edge computing, data is often processed using which paradigm?',
    options: ['Push-based', 'Pull-based', 'Event-driven', 'Polling mechanism'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'What is fog computing in relation to edge computing?',
    options: ['Same thing', 'Extension of edge computing', 'Opposite of edge computing', 'Unrelated concept'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'Which layer in edge computing is responsible for executing AI models directly on devices?',
    options: ['Cloud layer', 'Transport layer', 'Perception layer', 'Device layer', 'Application layer'],
    correctAnswer: 3,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'In edge computing, how is data integrity ensured across distributed nodes?',
    options: ['Using CDNs', 'Through HTTP checks', 'Via consensus algorithms', 'By DNS routing', 'Using caching'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'What role does Kubernetes play in edge computing deployments?',
    options: ['Monitoring only', 'Container networking only', 'Orchestrating microservices at scale', 'Security management', 'Low-power optimization'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'Which of these best explains "data gravity" in edge computing?',
    options: ['Data is encrypted before transit', 'Data becomes harder to move as it grows', 'Data is only stored in the cloud', 'Data moves toward processing units', 'Data pulls in more compute resources'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'Why is time synchronization critical in distributed edge systems?',
    options: ['To ensure UI consistency', 'To improve download speeds', 'To correlate logs and events', 'To reduce storage', 'To allow backup'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'Which of the following enables secure device-to-device communication at the edge?',
    options: ['NAT', 'ARP', 'TLS/SSL', 'BGP', 'ICMP'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'In edge computing, what does a zero-trust architecture imply?',
    options: ['All traffic is encrypted', 'No external APIs allowed', 'No trust is given by default to any device or user', 'All nodes must be on the same network', 'Devices cannot store data locally'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'Which type of data processing is critical for latency-sensitive applications at the edge?',
    options: ['Batch processing', 'Cold storage processing', 'Event-driven stream processing', 'Remote execution', 'Machine learning inferences on cloud'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'Which cryptographic method is best suited for lightweight edge devices?',
    options: ['RSA-4096', 'Elliptic Curve Cryptography (ECC)', 'AES-512', 'SHA-3', 'DES'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'What is the main challenge of state management in edge computing?',
    options: ['Lack of sensors', 'Network bandwidth', 'Keeping state consistent across nodes', 'High power usage', 'Virtualization issues'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'Which open-source platform supports federated learning at the edge?',
    options: ['Keras', 'Scikit-learn', 'TensorFlow Federated', 'OpenCV', 'NumPy'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'What does MEC stand for in the context of edge computing?',
    options: ['Managed Edge Cloud', 'Mobile Edge Computing', 'Maximum Edge Capacity', 'Multi-layer Edge Cluster', 'Modular Edge Code'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'How can edge nodes improve resilience during network failure?',
    options: ['By stopping processing', 'By alerting cloud immediately', 'By caching and processing locally until reconnection', 'By offloading all data', 'By switching to 5G'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },
  {
    id: 'edge-3',
    question: 'What is a typical use case for edge AI?',
    options: ['Model training', 'Network testing', 'Inference on video streams from surveillance cameras', 'Firewall configuration', 'Cloud storage billing'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'edge-computing'
  },

  // AI Questions

  {
    id: 'ai-1',
    question: 'What does AI stand for?',
    options: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Integration', 'Algorithmic Intelligence'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'Which of the following is a common application of AI?',
    options: ['WordPress', 'Email Filtering', 'HTML', 'CSS Frameworks'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'Which type of AI mimics human decision-making?',
    options: ['Narrow AI', 'Strong AI', 'Reactive AI', 'Limited AI'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'What is an example of a voice-based AI assistant?',
    options: ['Photoshop', 'Alexa', 'Visual Studio', 'Excel'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'Which field is most closely related to AI?',
    options: ['Biology', 'Linguistics', 'Computer Science', 'Sociology'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'Which company developed the AI model ChatGPT?',
    options: ['Google', 'IBM', 'OpenAI', 'Amazon'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'Which term describes AI that performs a single task?',
    options: ['General AI', 'Strong AI', 'Narrow AI', 'Deep AI'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'Which of the following is a common programming language for AI?',
    options: ['HTML', 'Python', 'CSS', 'PHP'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'Which area of AI focuses on understanding human speech?',
    options: ['Computer Vision', 'Natural Language Processing', 'Robotics', 'Machine Learning'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'Which of these is not an AI concept?',
    options: ['Machine Learning', 'Neural Networks', 'Data Mining', 'Spreadsheet Analysis'],
    correctAnswer: 3,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'Which of these is an AI-powered recommendation system?',
    options: ['Spotify Playlist', 'Windows Task Manager', 'Notepad', 'Command Prompt'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'Which AI concept involves systems improving from data?',
    options: ['Hard Coding', 'Machine Learning', 'Compilation', 'Testing'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'Which of the following is used to train AI models?',
    options: ['Photoshop Files', 'Source Code', 'Datasets', 'APIs'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'AI is mainly used to create systems that can perform tasks which require:',
    options: ['Physical Labor', 'Battery Power', 'Human Intelligence', 'Web Design'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-1',
    question: 'Which is a popular library used for AI in Python?',
    options: ['TensorFlow', 'NumPy', 'jQuery', 'React'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'artificial-intelligence'
  },

    {
      id: 'ai-2',
      question: 'What is the main advantage of using heuristic search in AI?',
      options: ['It guarantees the optimal solution', 'It reduces search time by using domain knowledge', 'It always explores the entire search space', 'It avoids recursion'],
      correctAnswer: 1,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'Which AI algorithm is best suited for game playing?',
      options: ['A* Algorithm', 'Breadth-First Search', 'Minimax', 'Dijkstra’s Algorithm'],
      correctAnswer: 2,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'What does the term "utility" represent in decision-making AI?',
      options: ['The number of moves needed to win', 'The memory usage of an algorithm', 'The numerical representation of satisfaction or success', 'CPU load of a process'],
      correctAnswer: 2,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'In knowledge representation, what is a semantic network?',
      options: ['A supervised learning technique', 'A type of decision tree', 'A graph of nodes representing concepts and relationships', 'A neural network used for NLP'],
      correctAnswer: 2,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'Which logic is used in AI for dealing with uncertainty?',
      options: ['Binary logic', 'Fuzzy logic', 'Boolean logic', 'Classical logic'],
      correctAnswer: 1,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'Which of the following is an example of unsupervised learning?',
      options: ['Decision Trees', 'K-Means Clustering', 'Linear Regression', 'Support Vector Machine'],
      correctAnswer: 1,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'Which concept is used in AI to represent an agent’s belief about the environment?',
      options: ['Perception model', 'Bayesian network', 'Environment model', 'Decision boundary'],
      correctAnswer: 1,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'Which language is primarily used for logic programming in AI?',
      options: ['Python', 'Prolog', 'C++', 'Java'],
      correctAnswer: 1,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'What is the main purpose of alpha-beta pruning in Minimax algorithm?',
      options: ['To make the game harder', 'To improve accuracy', 'To eliminate unnecessary branches', 'To balance the tree'],
      correctAnswer: 2,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'Which model is based on conditional probabilities and is used for sequence prediction?',
      options: ['Naive Bayes', 'Hidden Markov Model', 'Decision Tree', 'Perceptron'],
      correctAnswer: 1,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'Which of the following AI techniques is used to simulate human reasoning?',
      options: ['Fuzzy logic', 'Random forests', 'Support Vector Machines', 'Gradient Boosting'],
      correctAnswer: 0,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'Which of these terms best describes reinforcement learning?',
      options: ['Learning from labeled data', 'Learning from data clusters', 'Learning from interaction with environment', 'Learning from graphs'],
      correctAnswer: 2,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'Which type of AI agent selects the best action using a performance measure?',
      options: ['Simple reflex agent', 'Goal-based agent', 'Learning agent', 'Utility-based agent'],
      correctAnswer: 3,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'Which AI concept uses layers of units to model high-level abstractions in data?',
      options: ['Linear regression', 'K-nearest neighbor', 'Deep learning', 'Clustering'],
      correctAnswer: 2,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
    {
      id: 'ai-2',
      question: 'Which evaluation metric is NOT typically used for classification in AI?',
      options: ['Precision', 'Recall', 'Mean Squared Error', 'F1-Score'],
      correctAnswer: 2,
      difficulty: 'intermediate',
      domain: 'artificial-intelligence'
    },
  {
    id: 'ai-3',
    question: 'What is the purpose of the Minimax algorithm in AI?',
    options: [
      'To minimize memory usage in AI applications',
      'To find the minimum path in graphs',
      'To maximize the minimum gain in adversarial games',
      'To compress datasets in supervised learning'
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'What is meant by "overfitting" in AI models?',
    options: [
      'The model performs equally on training and test data',
      'The model fits the training data too well but fails to generalize',
      'The model cannot converge during training',
      'The model uses fewer parameters than required'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'Which AI technique involves learning from delayed feedback?',
    options: [
      'Supervised learning',
      'Reinforcement learning',
      'Unsupervised learning',
      'Semi-supervised learning'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'What is a key feature of generative models like GANs?',
    options: [
      'They classify data using decision trees',
      'They detect spam messages',
      'They generate new data similar to training data',
      'They cluster data without supervision'
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'Which logical representation supports uncertain knowledge in AI?',
    options: [
      'First-order logic',
      'Fuzzy logic',
      'Propositional logic',
      'Predicate calculus'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'In AI, what is the "frame problem"?',
    options: [
      'A problem in image classification',
      'Difficulty in representing the effects of actions logically',
      'Problem of memory overflow in AI agents',
      'A security loophole in intelligent systems'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'Which of the following is a real-world application of NLP?',
    options: [
      'Face recognition',
      'Sentiment analysis',
      'Path planning',
      'Speech enhancement'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'What does "exploration vs exploitation" refer to in AI?',
    options: [
      'Model complexity trade-off',
      'Balancing memory and performance',
      'Choosing between new knowledge and using known strategies',
      'Learning rate optimization'
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'What does "backpropagation" do in neural networks?',
    options: [
      'Improves model accuracy post-training',
      'Propagates the output to input layers',
      'Adjusts weights by propagating errors backward',
      'Cleans input data before training'
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'What is "transfer learning" in AI?',
    options: [
      'Transferring models between computers',
      'Applying learning from one task to a related task',
      'Transferring files from AI cloud systems',
      'Using multiple datasets for training simultaneously'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'Which of these problems is NP-complete and often solved using AI heuristics?',
    options: [
      'Image classification',
      'Speech recognition',
      'Traveling salesman problem',
      'Face detection'
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'What is the purpose of attention mechanisms in AI models?',
    options: [
      'To reduce model complexity',
      'To highlight important parts of input sequences',
      'To normalize feature weights',
      'To generate random embeddings'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'Which of the following best describes "explainable AI"?',
    options: [
      'AI that runs without human input',
      'AI that can be embedded in small devices',
      'AI whose decisions are understandable by humans',
      'AI that compresses data for storage'
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'Which architecture is commonly used for sequential data in AI?',
    options: [
      'CNN',
      'GAN',
      'RNN',
      'Autoencoder'
    ],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },
  {
    id: 'ai-3',
    question: 'What is a “belief state” in the context of AI planning under uncertainty?',
    options: [
      'A set of possible states the agent believes it could be in',
      'The agent’s confidence in its code',
      'A state with high reward probability',
      'A Boolean state of the planning system'
    ],
    correctAnswer: 0,
    difficulty: 'advanced',
    domain: 'artificial-intelligence'
  },


  // Web Development Questions
  {
    id: 'web-1',
    question: 'What does HTML stand for?',
    options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hybrid Text Making Language', 'Hyper Transfer Markup Logic'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'web-1',
    question: 'Which language is used for styling web pages?',
    options: ['JavaScript', 'Python', 'CSS', 'PHP'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'web-1',
    question: 'What does CSS stand for?',
    options: ['Cascading Style Sheets', 'Computer Style System', 'Creative Style Sheets', 'Colorful Style Sheets'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'web-1',
    question: 'Which HTML tag is used for creating hyperlinks?',
    options: ['<link>', '<a>', '<href>', '<url>'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'web-1',
    question: 'What is JavaScript primarily used for?',
    options: ['Styling', 'Database management', 'Interactive functionality', 'Server hosting'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'ml-1',
    question: 'What is supervised learning in machine learning?',
    options: ['A type of learning without labeled data', 'A technique for reinforcement agents', 'A type of learning with labeled data', 'A form of unsupervised learning'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'Which algorithm is commonly used for classification problems?',
    options: ['K-Means', 'Linear Regression', 'Decision Tree', 'Apriori'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'Which of the following is a characteristic of unsupervised learning?',
    options: ['Trained with labeled data', 'Predicting future values', 'Clustering data into groups', 'Used for regression tasks'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'What is the purpose of a cost function in ML?',
    options: ['To evaluate performance', 'To initialize weights', 'To prevent overfitting', 'To select models'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'Which metric is used to evaluate classification models?',
    options: ['MSE', 'Precision', 'R-squared', 'Gradient'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'Which technique is used for reducing the number of features in a dataset?',
    options: ['Overfitting', 'Regularization', 'Principal Component Analysis', 'Gradient Descent'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'What does overfitting refer to in ML?',
    options: ['Model fits training data well but performs poorly on unseen data', 'Model fits testing data well', 'Model ignores training data', 'Model performs equally on all datasets'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'Which method helps to avoid overfitting?',
    options: ['Underfitting', 'Adding more layers', 'Regularization', 'Increasing model complexity'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'Which of these is a supervised learning algorithm?',
    options: ['K-Means', 'DBSCAN', 'Random Forest', 'PCA'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'What is a common use of clustering?',
    options: ['Regression', 'Classification', 'Grouping similar items', 'Prediction'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'Which model is best for binary classification tasks?',
    options: ['Linear Regression', 'Logistic Regression', 'K-Means', 'PCA'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'Which of the following is a loss function for regression?',
    options: ['Cross-Entropy', 'Mean Squared Error', 'Recall', 'Accuracy'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'Which algorithm works on the concept of distance between points?',
    options: ['Naive Bayes', 'K-Nearest Neighbors', 'Linear Regression', 'Decision Tree'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'What is feature scaling used for?',
    options: ['Increase accuracy', 'Prevent bias', 'Normalize feature ranges', 'Reduce noise'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-1',
    question: 'Which library is commonly used for machine learning in Python?',
    options: ['NumPy', 'Matplotlib', 'Scikit-learn', 'Django'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'What is the purpose of using regularization in machine learning models?',
    options: ['To increase model complexity', 'To reduce overfitting', 'To make models run faster', 'To reduce bias'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'Which of the following is a technique for dimensionality reduction?',
    options: ['Gradient Descent', 'Support Vector Machine', 'Principal Component Analysis', 'Linear Regression'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'In ensemble learning, what does bagging aim to reduce?',
    options: ['Bias', 'Overfitting', 'Variance', 'Training time'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'Which algorithm is typically used for classification problems?',
    options: ['K-Means', 'Apriori', 'Logistic Regression', 'PCA'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'What type of learning uses both labeled and unlabeled data?',
    options: ['Supervised Learning', 'Reinforcement Learning', 'Semi-Supervised Learning', 'Unsupervised Learning'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'Which machine learning technique is used for anomaly detection?',
    options: ['Classification', 'Regression', 'Clustering', 'Dimensionality Reduction'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'Which of the following is a hyperparameter in decision trees?',
    options: ['Learning rate', 'Maximum depth', 'Momentum', 'Number of clusters'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'Which loss function is commonly used for binary classification problems?',
    options: ['Mean Squared Error', 'Cross-Entropy', 'Hinge Loss', 'Huber Loss'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'Which evaluation metric is used for classification problems?',
    options: ['MSE', 'RMSE', 'Accuracy', 'R2 Score'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'What does ROC curve plot?',
    options: ['Precision vs Recall', 'True Positive Rate vs False Positive Rate', 'Accuracy vs Threshold', 'Loss vs Epochs'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'Which technique is used to handle class imbalance?',
    options: ['Gradient Descent', 'Resampling', 'Bagging', 'Boosting'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'Which regularization technique adds a penalty equal to the absolute value of the magnitude of coefficients?',
    options: ['L1 Regularization', 'L2 Regularization', 'Dropout', 'Normalization'],
    correctAnswer: 0,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'Which of the following models can be used for time series forecasting?',
    options: ['Linear Regression', 'ARIMA', 'SVM', 'Naive Bayes'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'Which method is used to evaluate model performance on unseen data?',
    options: ['Training Set', 'Validation Set', 'Test Set', 'Cross-Validation'],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-2',
    question: 'What is the purpose of the kernel trick in SVMs?',
    options: ['To reduce overfitting', 'To convert non-linearly separable data to linearly separable', 'To reduce data size', 'To normalize features'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'What is overfitting in machine learning?',
    options: ['Model fits training data too well but fails on new data', 'Model performs well on all datasets', 'Model underestimates the complexity', 'None of the above'],
    correctAnswer: 0,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'Which technique helps prevent overfitting?',
    options: ['Gradient Descent', 'Batch Normalization', 'Dropout', 'Feature Scaling'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'What does the ROC curve represent?',
    options: ['Training loss vs epoch', 'Precision vs Recall', 'True Positive Rate vs False Positive Rate', 'Error rate vs accuracy'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'In ensemble learning, which of the following is a boosting algorithm?',
    options: ['Random Forest', 'AdaBoost', 'K-Means', 'Naive Bayes'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'Which of the following is true about PCA?',
    options: ['It increases data dimensionality', 'It’s a supervised method', 'It reduces dimensionality by projecting data to principal components', 'It clusters the data'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'What is the vanishing gradient problem?',
    options: ['Gradients become infinite', 'Gradients become too small for deep layers to update weights', 'Loss function diverges', 'No convergence in optimization'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'What does L1 regularization encourage in a model?',
    options: ['Sparsity in features', 'Dense weight matrices', 'Lower learning rate', 'Batch normalization'],
    correctAnswer: 0,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'Which model is most suitable for sequential data?',
    options: ['Decision Tree', 'CNN', 'RNN', 'SVM'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'Bayesian learning is based on which principle?',
    options: ['Maximum Margin', 'Minimum Distance', 'Posterior Probability', 'Mean Squared Error'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'What is gradient clipping used for?',
    options: ['Avoid underfitting', 'Prevent exploding gradients', 'Improve overfitting', 'Speed up convergence'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'Which kernel is commonly used in SVM for nonlinear classification?',
    options: ['Linear Kernel', 'Polynomial Kernel', 'Sigmoid Kernel', 'RBF Kernel'],
    correctAnswer: 3,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'Which algorithm is best suited for high-dimensional sparse data?',
    options: ['Linear Regression', 'Naive Bayes', 'Decision Trees', 'SVM'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'Which of the following improves model generalization?',
    options: ['Training longer', 'Adding more layers', 'Early stopping', 'Removing validation set'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'What is the main idea of transfer learning?',
    options: ['Reusing data from test set', 'Training from scratch', 'Using a pre-trained model on a new task', 'Sharing models across datasets'],
    correctAnswer: 2,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ml-3',
    question: 'What is the role of the activation function in a neural network?',
    options: ['Acts as optimizer', 'Introduces non-linearity', 'Trains the model faster', 'Selects loss function'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'machine-learning'
  },
  {
    id: 'ds-1',
    question: 'What is the primary goal of data science?',
    options: [
      'To manually enter data into spreadsheets',
      'To extract insights and knowledge from data',
      'To write computer programs without data',
      'To design graphic user interfaces'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'Which of the following is NOT a common phase in the data science lifecycle?',
    options: [
      'Data Collection',
      'Data Cleaning',
      'Data Analysis',
      'Data Destruction'
    ],
    correctAnswer: 3,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'What does \'EDA\' stand for in data science?',
    options: [
      'Efficient Data Application',
      'Exploratory Data Analysis',
      'Excellent Data Archiving',
      'Essential Database Administration'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'Which programming language is widely used for data analysis and machine learning?',
    options: [
      'HTML',
      'CSS',
      'Python',
      'SQL'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'What is a \'dataset\' in data science?',
    options: [
      'A single piece of information',
      'A collection of related data',
      'A type of computer hardware',
      'A software programming tool'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'Which type of chart is best for showing the distribution of a single numerical variable?',
    options: [
      'Pie chart',
      'Bar chart',
      'Line chart',
      'Histogram'
    ],
    correctAnswer: 3,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'What is the purpose of data cleaning?',
    options: [
      'To make data physically clean',
      'To remove errors, inconsistencies, and missing values from data',
      'To store data in a secure location',
      'To encrypt sensitive data'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'Which term describes a row in a dataset?',
    options: [
      'Feature',
      'Variable',
      'Observation',
      'Column'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'What is \'missing data\'?',
    options: [
      'Data that has been stolen',
      'Values that are not recorded or are unavailable in a dataset',
      'Data stored in a different location',
      'Data that is too complex to understand'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'Which statistical measure represents the most frequent value in a dataset?',
    options: [
      'Mean',
      'Median',
      'Mode',
      'Range'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'What is \'data visualization\'?',
    options: [
      'The process of collecting data',
      'The graphical representation of data to reveal patterns and insights',
      'Storing data in a database',
      'Writing algorithms for data processing'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'Which of these is a common tool for creating interactive data visualizations?',
    options: [
      'Microsoft Word',
      'Adobe Photoshop',
      'Tableau',
      'Calculator'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'What is the difference between structured and unstructured data?',
    options: [
      'Structured data is always larger than unstructured data.',
      'Structured data has a defined format (e.g., in a database), while unstructured data does not (e.g., text, images).',
      'Unstructured data is easier to analyze.',
      'Structured data is only found online.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'Which of the following describes a \'feature\' in a machine learning context?',
    options: [
      'The output of a model',
      'An input variable used by a model',
      'The type of algorithm used',
      'The programming language chosen'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'data-science'
  },
  {
    id: 'ds-1',
    question: 'What is a \'bias\' in data science?',
    options: [
      'A type of statistical graph',
      'A systematic error or deviation in data collection, analysis, interpretation, or presentation',
      'A specific data cleaning technique',
      'A method for data storage'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'data-science'
  },

  {
    id: 'ds-2',
    question: 'Explain the difference between supervised and unsupervised learning.',
    options: [
      'Supervised learning requires labeled data, while unsupervised learning works with unlabeled data to find patterns.',
      'Unsupervised learning is always more accurate than supervised learning.',
      'Supervised learning is only for regression tasks, unsupervised for classification.',
      'There is no practical difference between them.'
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'What is \'feature engineering\' and why is it important?',
    options: [
      'The process of creating new data entries.',
      'The process of selecting, transforming, and creating new features from raw data to improve model performance.',
      'Designing the user interface for a data application.',
      'Debugging code in a data science project.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'Which metric is commonly used to evaluate classification models?',
    options: [
      'R-squared',
      'Mean Squared Error (MSE)',
      'Accuracy',
      'Root Mean Squared Error (RMSE)'
    ],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'What is \'overfitting\' in machine learning and how can it be mitigated?',
    options: [
      'A model that performs poorly on both training and test data.',
      'A model that performs well on training data but poorly on unseen test data, often mitigated by cross-validation, regularization, or more data.',
      'A model that is too simple to capture patterns.',
      'A model that trains too quickly.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'Describe the concept of \'cross-validation\' in model evaluation.',
    options: [
      'Training a model on all available data.',
      'A technique to evaluate model performance by partitioning data into subsets for training and testing multiple times.',
      'Using different algorithms on the same dataset.',
      'Validating data manually.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'What is the purpose of \'dimensionality reduction\' techniques like PCA?',
    options: [
      'To increase the number of features in a dataset.',
      'To reduce the number of features or variables while retaining important information.',
      'To make data visualization more complex.',
      'To speed up data collection.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'When would you use a \'regression\' model versus a \'classification\' model?',
    options: [
      'Regression for predicting categories, classification for continuous values.',
      'Regression for predicting continuous numerical values, classification for predicting discrete categories or labels.',
      'Both are used for the same types of problems.',
      'Regression is only for financial data.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'What is \'bias-variance trade-off\' in machine learning?',
    options: [
      'The trade-off between speed and memory usage in a model.',
      'The relationship where reducing bias increases variance and vice versa, impacting model generalization.',
      'A technique to reduce the complexity of data.',
      'A method for choosing the best programming language.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'Explain \'imputation\' in the context of handling missing data.',
    options: [
      'Deleting all rows with missing values.',
      'The process of replacing missing data with substituted values, such as the mean, median, or mode.',
      'Ignoring missing data completely.',
      'Converting missing data to text.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'What is the main advantage of using Python libraries like Pandas and NumPy for data manipulation?',
    options: [
      'They are only for graphical design.',
      'They provide efficient and flexible data structures and functions for data cleaning, transformation, and analysis.',
      'They are specialized for web development.',
      'They can only process small datasets.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'What is a \'confusion matrix\' and what does it tell you?',
    options: [
      'A chart showing data correlations.',
      'A table that summarizes the performance of a classification algorithm, showing true positives, true negatives, false positives, and false negatives.',
      'A tool for creating random data.',
      'A method for encrypting data.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'How do you handle categorical features in machine learning models that expect numerical input?',
    options: [
      'Delete them.',
      'Convert them to numerical representations using techniques like one-hot encoding or label encoding.',
      'Ignore them.',
      'Treat them as continuous numerical values.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'What is \'regularization\' and why is it used in machine learning?',
    options: [
      'A technique to make models more complex.',
      'A technique used to prevent overfitting by adding a penalty for model complexity.',
      'A method for speeding up model training.',
      'A way to generate synthetic data.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'Describe the core idea behind \'ensemble methods\' like Random Forests or Gradient Boosting.',
    options: [
      'Using a single, very complex model.',
      'Combining predictions from multiple weaker models to create a stronger, more robust model.',
      'Only training models on small subsets of data.',
      'Methods that always guarantee perfect accuracy.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },
  {
    id: 'ds-2',
    question: 'What is the difference between \'precision\' and \'recall\' in classification metrics?',
    options: [
      'Precision measures true positives among all actual positives, Recall measures true positives among all predicted positives.',
      'Precision measures true positives among all predicted positives; Recall measures true positives among all actual positives.',
      'Both measure the same thing.',
      'Precision is for regression, Recall is for classification.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'data-science'
  },

  {
    id: 'ds-3',
    question: 'Explain the architecture and working principle of a Convolutional Neural Network (CNN).',
    options: [
      'CNNs are used for time series analysis and have no hidden layers.',
      'CNNs are specialized for image processing, using convolutional layers to learn spatial hierarchies of features and pooling layers for dimensionality reduction.',
      'CNNs are linear models primarily used for regression tasks.',
      'CNNs are solely for natural language processing and ignore spatial relationships.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'Discuss the challenges and mitigation strategies for \'concept drift\' in real-world machine learning systems.',
    options: [
      'Concept drift is a problem only in static datasets; no mitigation is needed.',
      'Challenges include changes in data distribution, class definitions, or relationships over time. Mitigation involves continuous monitoring, retraining models, and adaptive learning techniques.',
      'Concept drift only affects small datasets.',
      'It is solely an issue with supervised learning models.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'How does \'transfer learning\' work in deep learning, and what are its main benefits?',
    options: [
      'Transfer learning involves training a model from scratch on a new, large dataset.',
      'It involves reusing a pre-trained model (trained on a large dataset) as a starting point for a new, related task, reducing training time and data requirements.',
      'Transfer learning is only applicable to traditional machine learning algorithms.',
      'It requires identical datasets for both pre-training and fine-tuning.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'Explain the purpose and components of a \'Generative Adversarial Network\' (GAN).',
    options: [
      'GANs are used for data cleaning and preprocessing only.',
      'GANs consist of two neural networks, a generator and a discriminator, competing against each other to generate realistic synthetic data.',
      'GANs are a type of supervised classification model.',
      'GANs are primarily for reducing the dimensionality of datasets.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'What are the ethical considerations in deploying AI/ML models, especially regarding bias and fairness?',
    options: [
      'AI models are always inherently fair and unbiased.',
      'Concerns include algorithmic bias, discrimination, lack of transparency (black box models), privacy, and accountability. Mitigation requires careful data collection, bias detection, and ethical guidelines.',
      'Ethical considerations are only relevant to data collection, not model deployment.',
      'Bias in AI models is a myth.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'Describe the concept of \'reinforcement learning\' and its key elements.',
    options: [
      'Reinforcement learning involves manually labeling data for a model.',
      'It\'s a type of machine learning where an agent learns to make decisions by taking actions in an environment to maximize a cumulative reward.',
      'Reinforcement learning is only used for data visualization.',
      'It is a form of unsupervised clustering.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'What is a \'Recurrent Neural Network\' (RNN) and for what type of data is it best suited?',
    options: [
      'RNNs are used for image classification and ignore sequence order.',
      'RNNs are neural networks designed for sequential data (like time series or natural language) due to their ability to maintain internal memory.',
      'RNNs are traditional statistical models for simple regression.',
      'RNNs are only for unstructured numerical data.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'How do you interpret the results of a \'survival analysis\' model, and what are its applications?',
    options: [
      'Survival analysis predicts whether an event will happen, not when.',
      'It models the time until an event occurs (e.g., patient survival, machine failure), accounting for censoring. Applications include medicine, engineering, and customer churn analysis.',
      'Survival analysis is only for biological data.',
      'It is a method for generating random numbers.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'What is \'causal inference\' in data science, and why is it challenging?',
    options: [
      'Causal inference is the same as correlation analysis.',
      'It aims to establish cause-and-effect relationships from data, which is challenging due to confounding variables, observational data limitations, and the need for rigorous study design (e.g., A/B testing).',
      'Causal inference only applies to experimental data.',
      'It is always straightforward to determine causation from any dataset.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'Describe the concept of \'Big Data\' frameworks like Apache Spark or Hadoop and their role.',
    options: [
      'These frameworks are only for storing small amounts of data.',
      'They are distributed computing frameworks designed to process and analyze massive datasets that traditional tools cannot handle, enabling scalability and fault tolerance.',
      'They are specialized for running machine learning models on single machines.',
      'They are primarily used for data visualization in web browsers.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'Explain the difference between \'A/B testing\' and \'multivariate testing\'.',
    options: [
      'A/B testing compares multiple variables at once, while multivariate testing compares two versions.',
      'A/B testing compares two versions (A and B) to see which performs better, while multivariate testing compares multiple variables and their combinations to find the optimal mix.',
      'A/B testing is for data science, multivariate testing is for marketing.',
      'They are fundamentally the same thing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'What is the role of \'DevOps\' in the deployment and maintenance of machine learning models (MLOps)?',
    options: [
      'DevOps is irrelevant to machine learning operations.',
      'MLOps applies DevOps principles (automation, continuous integration/delivery) to streamline the entire machine learning lifecycle, from development to deployment, monitoring, and management.',
      'MLOps is only concerned with model training, not deployment.',
      'DevOps only applies to traditional software development.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'Discuss the challenges of working with \'unstructured data\' (e.g., text, images, audio) and common approaches to process it.',
    options: [
      'Unstructured data is easy to analyze directly without any preprocessing.',
      'Challenges include lack of defined schema, ambiguity, and high dimensionality. Approaches involve NLP for text, CNNs for images, and feature extraction techniques.',
      'Unstructured data cannot be analyzed using machine learning.',
      'The only challenge is storage space.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'What is the significance of \'Explainable AI\' (XAI) and its methods (e.g., LIME, SHAP)?',
    options: [
      'XAI aims to make AI models less transparent.',
      'XAI focuses on making AI models more understandable and transparent, crucial for building trust and ensuring fairness, using methods like LIME and SHAP to interpret predictions.',
      'XAI is only for debugging errors in model code.',
      'Explainable AI is not a recognized field.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'ds-3',
    question: 'How do you approach \'time series forecasting\' problems, and what models are typically used?',
    options: [
      'Time series forecasting treats data points as independent of time.',
      'It involves predicting future values based on past observations, considering trends, seasonality, and cycles. Models include ARIMA, Prophet, and LSTMs.',
      'Time series data can only be analyzed with simple linear regression.',
      'Forecasting is not a part of data science.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'data-science'
  },
  {
    id: 'web-1',
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'High Technology Modern Language',
      'Hyperlink and Text Management Language',
      'Home Tool Markup Language'
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'web-1',
    question: 'Which tag is used to define a hyperlink in HTML?',
    options: [
      '<img>',
      '<link>',
      '<a>',
      '<href>'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'web-1',
    question: 'What does CSS stand for?',
    options: [
      'Computer Style Sheets',
      'Cascading Style Sheets',
      'Creative Style System',
      'Colorful Styling Syntax'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'web-1',
    question: 'Which property is used to change the background color of an element in CSS?',
    options: [
      'color',
      'background-color',
      'bgcolor',
      'style-color'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'web-1',
    question: 'Which of the following is a client-side scripting language?',
    options: [
      'Python',
      'Java',
      'JavaScript',
      'PHP'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'web-1',
    question: 'What is the purpose of the <head> tag in an HTML document?',
    options: [
      'To define the main content of the document',
      'To contain meta-information about the HTML document, such as title and links to stylesheets',
      'To display a header for the page',
      'To include executable scripts only'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'web-1',
    question: 'Which CSS selector selects elements with a specific ID?',
    options: [
      '.class',
      '#id',
      'element',
      '*'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'web-1',
    question: 'What is a web browser?',
    options: [
      'A programming language',
      'A software application for accessing information on the World Wide Web',
      'A type of web server',
      'A database management system'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'web-development'
  },

  {
    id: 'web-1',
    question: 'Which keyword is used to declare a variable in JavaScript?',
    options: [
      'var',
      'new',
      'int',
      'string'
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'web-development'
  },
  {
    id: 'web-1',
    question: 'What is the primary role of a web server?',
    options: [
      'To create graphical designs for websites',
      'To host and deliver web content to users via HTTP',
      'To write client-side scripts',
      'To manage databases for web applications'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'web-development'
  },

  {
    id: 'web-2',
    question: 'What is the difference between `localStorage` and `sessionStorage` in web browsers?',
    options: [
      'They are identical and interchangeable.',
      '`localStorage` persists data until explicitly deleted, while `sessionStorage` data is cleared when the browser tab/window is closed.',
      '`localStorage` is server-side, `sessionStorage` is client-side.',
      '`sessionStorage` has a larger storage capacity.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'Explain the concept of \'responsive web design\'.',
    options: [
      'Designing websites that only work on mobile phones.',
      'An approach to web design that makes web pages render well on a variety of devices and window or screen sizes.',
      'Designing websites that respond quickly to user input.',
      'Using only images for website content.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'What is a \'closure\' in JavaScript?',
    options: [
      'A way to close a web page.',
      'A function bundled together with references to its surrounding state (the lexical environment).',
      'A type of loop in JavaScript.',
      'A method for encrypting data.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'Describe the purpose of \'API\' in web development.',
    options: [
      'A new type of web browser.',
      'Application Programming Interface: a set of rules and protocols for building and interacting with software applications.',
      'A framework for designing UI components.',
      'A database system for storing web content.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'What is the difference between `==` and `===` in JavaScript?',
    options: [
      'Both check for equality of value and type.',
      '`==` performs type coercion before comparison; `===` performs strict equality without type coercion.',
      '`===` is used for assignment, `==` for comparison.',
      'There is no difference in their behavior.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'What is \'AJAX\' and how is it used in web development?',
    options: [
      'A type of database.',
      'Asynchronous JavaScript and XML: a technique for creating asynchronous web applications by exchanging small amounts of data with the server behind the scenes.',
      'A styling framework for CSS.',
      'A server-side programming language.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'Explain the concept of \'event bubbling\' and \'event capturing\' in the DOM.',
    options: [
      'They are different names for the same process.',
      'Event bubbling propagates an event from the target element up to the root; event capturing propagates it from the root down to the target.',
      'Event bubbling only works in older browsers.',
      'Event capturing prevents events from firing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'What is the purpose of \'Node.js\'?',
    options: [
      'A JavaScript framework for front-end development.',
      'A JavaScript runtime environment that allows you to run JavaScript code on the server-side.',
      'A database management system.',
      'A CSS preprocessor.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'What is a \'RESTful API\'?',
    options: [
      'An API that uses only GET requests.',
      'An architectural style for designing networked applications using standard HTTP methods and stateless communication.',
      'An API that is always offline.',
      'An API that can only be accessed by specific IP addresses.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'How do you ensure cross-browser compatibility in web development?',
    options: [
      'By only supporting one browser.',
      'By testing across various browsers, using CSS resets/normalizers, feature detection, and vendor prefixes.',
      'By writing code only in JavaScript.',
      'By avoiding the use of HTML and CSS.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'What is the role of a \'package manager\' like npm or Yarn in web development?',
    options: [
      'To manage image files only.',
      'To automate the process of installing, updating, configuring, and removing software packages and their dependencies.',
      'To create graphical user interfaces.',
      'To compile CSS into HTML.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'Explain the concept of \'Promises\' in JavaScript.',
    options: [
      'Promises are a replacement for regular functions.',
      'Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value.',
      'Promises are used for defining synchronous code blocks.',
      'Promises are a type of loop for iterating over arrays.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'What is \'Webpack\' and why is it used?',
    options: [
      'A new web browser.',
      'A module bundler for JavaScript applications, used to compile and package web assets (JavaScript, CSS, images) for deployment.',
      'A CSS framework for responsive design.',
      'A database management system for web apps.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'Describe the differences between \'client-side rendering\' (CSR) and \'server-side rendering\' (SSR).',
    options: [
      'CSR always leads to faster initial page loads.',
      'CSR renders content in the browser using JavaScript after initial HTML download; SSR renders content on the server before sending HTML to the browser.',
      'SSR is only for static websites.',
      'There is no functional difference in user experience.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },
  {
    id: 'web-2',
    question: 'What are \'web components\' and their main benefits?',
    options: [
      'A way to create traditional HTML elements.',
      'A set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags that work across modern browsers.',
      'They are specific to a single JavaScript framework.',
      'Web components replace the need for CSS.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'web-development'
  },

  {
    id: 'web-3',
    question: 'Explain the architecture and benefits of a \'Microservices\' approach in web development.',
    options: [
      'Microservices build applications as a single, monolithic unit.',
      'Microservices is an architectural style that structures an application as a collection of loosely coupled, independently deployable services, offering scalability, resilience, and independent development.',
      'Microservices are only suitable for small applications.',
      'Microservices increase deployment complexity significantly.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'Discuss the challenges and solutions for \'state management\' in large-scale React applications.',
    options: [
      'State management is never a challenge in React.',
      'Challenges include prop drilling, re-rendering, and complex data flows. Solutions involve context API, Redux, Zustand, or Recoil to centralize and optimize state.',
      'State management is handled automatically by React with no effort.',
      'Only global variables are used for state management.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'Describe the principles of \'Progressive Web Apps\' (PWAs) and their advantages.',
    options: [
      'PWAs are simply websites optimized for mobile.',
      'PWAs are web applications that use modern web capabilities to deliver an app-like experience to users, offering reliability, speed, and engagement (e.g., offline access, push notifications).',
      'PWAs require users to download them from an app store.',
      'PWAs can only function online.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'Explain \'Serverless Architecture\' (e.g., AWS Lambda, Azure Functions) and its use cases in web development.',
    options: [
      'Serverless architecture means no servers are used at all.',
      'It allows developers to build and run applications and services without having to manage the underlying infrastructure, abstracting server management and scaling.',
      'Serverless is only for static websites with no backend.',
      'It always costs more than traditional server hosting.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'What are \'WebSockets\' and when would you use them over traditional HTTP requests?',
    options: [
      'WebSockets are a slower alternative to HTTP.',
      'WebSockets provide full-duplex communication channels over a single TCP connection, ideal for real-time applications (e.g., chat, gaming) where HTTP\'s request-response model is inefficient.',
      'WebSockets are only for client-side processing.',
      'HTTP and WebSockets are used for identical purposes.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'Discuss the security considerations for \'Authentication\' and \'Authorization\' in web applications.',
    options: [
      'Authentication and authorization are the same thing and require no special attention.',
      'Authentication verifies user identity (e.g., passwords, OAuth); Authorization determines what an authenticated user can access. Both require secure practices like hashing, encryption, and proper token management.',
      'Security is handled entirely by the web browser.',
      'Only public data needs to be secured.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'Explain the purpose of \'GraphQL\' and how it differs from traditional REST APIs.',
    options: [
      'GraphQL is a database technology, not an API.',
      'GraphQL is a query language for APIs that allows clients to request exactly the data they need, reducing over-fetching/under-fetching compared to REST\'s fixed endpoints.',
      'GraphQL is only for server-side communication.',
      'GraphQL requires multiple round trips to fetch related data.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'What is \'Server-Side Rendering (SSR)\' with a framework like Next.js, and its benefits for SEO and performance?',
    options: [
      'SSR only generates empty HTML pages.',
      'SSR with Next.js renders React components on the server into HTML, sending a fully rendered page to the client, which improves initial load times and SEO for search engine crawlers.',
      'SSR requires less server resources than client-side rendering.',
      'SSR makes web pages slower to load initially.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'Describe \'Containerization\' (e.g., Docker) and \'Orchestration\' (e.g., Kubernetes) in the context of web application deployment.',
    options: [
      'Containerization and orchestration are only for managing physical servers.',
      'Containerization packages applications and dependencies into isolated units; Orchestration automates the deployment, scaling, and management of these containers across clusters.',
      'These technologies are only for desktop applications.',
      'They increase manual deployment efforts.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'What are the main advantages and challenges of adopting a \'Jamstack\' architecture?',
    options: [
      'Jamstack relies heavily on traditional server-side languages like PHP.',
      'Advantages include better performance, higher security, cheaper scaling, and better developer experience by decoupling frontend and backend. Challenges include dynamic content handling and serverless complexity.',
      'Jamstack only works for simple static websites.',
      'It removes the need for APIs entirely.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'Explain \'Cross-Site Scripting (XSS)\' and \'Cross-Site Request Forgery (CSRF)\' attacks and mitigation strategies.',
    options: [
      'XSS and CSRF are client-side vulnerabilities with no impact on users.',
      'XSS injects malicious scripts into web pages; CSRF tricks users into executing unwanted actions. Mitigation involves input validation, output encoding (XSS), and anti-CSRF tokens (CSRF).',
      'These attacks only affect outdated browsers.',
      'They are solved by using HTTPS alone.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'How do \'Service Workers\' enhance web application capabilities?',
    options: [
      'Service Workers are purely for UI animations.',
      'Service Workers are JavaScript files that run in the background, enabling features like offline capabilities, push notifications, and network request interception/caching.',
      'Service Workers slow down page load times.',
      'Service Workers are a type of database for storing user data.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'Describe the differences between \'Monorepo\' and \'Polyrepo\' approaches to managing codebases.',
    options: [
      'Monorepos and polyrepos are only for open-source projects.',
      'Monorepo stores all projects in a single repository, fostering code sharing and simplified dependency management. Polyrepo keeps each project in its own separate repository.',
      'Polyrepos are always more efficient for large teams.',
      'Monorepos are outdated and no longer used.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'What is \'Edge Computing\' in the context of web delivery, and its impact?',
    options: [
      'Edge computing means all processing happens on a central cloud server.',
      'Edge computing processes data closer to the data source/user, reducing latency and bandwidth usage, improving performance for geographically dispersed users (e.g., CDN-like functionalities).',
      'Edge computing is only for IoT devices.',
      'It increases the load on central servers.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'web-3',
    question: 'Discuss the role of \'WebAssembly\' (Wasm) in modern web development.',
    options: [
      'WebAssembly is a replacement for JavaScript.',
      'Wasm is a low-level binary instruction format for a stack-based virtual machine, enabling high-performance applications on the web by compiling code from languages like C++, Rust, etc.',
      'WebAssembly can only run on specific browsers.',
      'Wasm is primarily for styling web pages.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'web-development'
  },
  {
    id: 'mobile-1',
    question: 'What is the primary function of a mobile operating system (OS)?',
    options: [
      'To make phone calls only',
      'To manage mobile device hardware and software resources',
      'To browse the internet',
      'To store user photos'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'Which of the following is an example of a native mobile app development language for Android?',
    options: [
      'Swift',
      'Kotlin',
      'JavaScript',
      'HTML'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'What does SDK stand for in mobile development?',
    options: [
      'Software Design Kit',
      'System Development Key',
      'Software Development Kit',
      'Service Delivery Kernel'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'Which company developed the iOS operating system?',
    options: [
      'Google',
      'Microsoft',
      'Samsung',
      'Apple'
    ],
    correctAnswer: 3,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'What is an IDE in the context of mobile app development?',
    options: [
      'Internet Development Engine',
      'Integrated Development Environment',
      'Interactive Design Editor',
      'Internal Data Exchange'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'Which tool is commonly used for designing user interfaces (UI) and user experiences (UX) for mobile apps?',
    options: [
      'Microsoft Word',
      'Adobe Photoshop',
      'Figma',
      'Excel'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'What is the primary purpose of an app store (e.g., Google Play Store, Apple App Store)?',
    options: [
      'To sell mobile phones',
      'To distribute and sell mobile applications',
      'To provide internet access',
      'To store cloud data'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'Which term describes an app that runs directly in a web browser without installation?',
    options: [
      'Native app',
      'Hybrid app',
      'Web app',
      'Progressive Web App (PWA)'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'What is a \'push notification\' in mobile apps?',
    options: [
      'A message that automatically appears on a user\'s mobile device, even when the app is not actively open',
      'A type of in-app advertisement',
      'A system update for the mobile OS',
      'A notification that requires the user to open the app first'
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'What is the purpose of \'debugging\' in app development?',
    options: [
      'To write new code',
      'To find and fix errors or bugs in software',
      'To design the app icon',
      'To publish the app to an app store'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'Which of these is a key step in the mobile app development lifecycle?',
    options: [
      'Planning and Research',
      'Cooking a meal',
      'Building a house',
      'Driving a car'
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'What is \'UI\' in mobile app design?',
    options: [
      'User Identification',
      'Uniform Interface',
      'User Interface',
      'Universal Integration'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'Which element is used to provide feedback to the user, like a loading spinner or success message?',
    options: [
      'Text input',
      'Button',
      'Progress Indicator',
      'Image'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'What is \'offline functionality\' in a mobile app?',
    options: [
      'The app requires constant internet connection to work.',
      'The app can perform some functions or access some data even without an internet connection.',
      'The app can only be used on a desktop computer.',
      'The app is designed for older mobile devices only.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-1',
    question: 'Which phase of app development involves creating wireframes and prototypes?',
    options: [
      'Deployment',
      'Planning',
      'Design',
      'Testing'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'mobile-development'
  },

  {
    id: 'mobile-2',
    question: 'Explain the difference between \'Native App Development\' and \'Cross-Platform App Development\'.',
    options: [
      'Native apps are built with web technologies; cross-platform apps use specific SDKs for each OS.',
      'Native apps are built for a specific OS (e.g., Swift/Kotlin); cross-platform apps use a single codebase (e.g., React Native, Flutter) for multiple OSs.',
      'Native apps run slower than cross-platform apps.',
      'Cross-platform apps have full access to all device features by default.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'What are the main advantages of using a \'Hybrid App\' framework (e.g., Ionic, Cordova)?',
    options: [
      'Superior performance compared to native apps.',
      'Faster development with a single codebase, leveraging web technologies (HTML, CSS, JS) across platforms.',
      'Full access to all native device APIs without plugins.',
      'Better SEO rankings in app stores.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'Describe \'API Integration\' in mobile app development.',
    options: [
      'Connecting the app to physical hardware components.',
      'The process of connecting a mobile app to external services or databases via Application Programming Interfaces to exchange data and functionality.',
      'Designing the app\'s internal data storage.',
      'Writing the entire backend logic within the mobile app itself.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'What is the purpose of \'Version Control Systems\' (e.g., Git) in mobile team development?',
    options: [
      'To manage app store listings only.',
      'To track changes in code, allow multiple developers to collaborate, and revert to previous versions if needed.',
      'To automatically publish apps to app stores.',
      'To test app performance on various devices.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'Explain \'Memory Management\' techniques for optimizing mobile app performance.',
    options: [
      'Loading all app data into memory at startup.',
      'Efficiently allocating and deallocating memory, avoiding memory leaks, and optimizing resource usage to prevent crashes and ensure smooth performance.',
      'Storing all app data on external storage.',
      'Only using static variables in the app.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'What are \'Background Services\' in mobile development, and why are they used cautiously?',
    options: [
      'Services that run only when the app is in the foreground.',
      'Components that perform operations in the background without a UI, used for tasks like data syncing or notifications, but used cautiously due to battery drain and resource consumption.',
      'Services that are always visible to the user.',
      'Services that are only activated during phone calls.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'Describe common strategies for \'Offline Data Synchronization\' in mobile apps.',
    options: [
      'Requiring constant internet connectivity.',
      'Storing data locally and synchronizing with a remote server when connectivity is available, using techniques like optimistic updates or conflict resolution.',
      'Never storing any data on the device.',
      'Only retrieving data from the server, never sending local changes.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'What is the importance of \'Unit Testing\' in mobile app development?',
    options: [
      'It tests the entire app\'s functionality at once.',
      'It tests individual components or functions of the code in isolation to ensure they work as expected, catching bugs early in the development cycle.',
      'Unit testing is only for backend code.',
      'It replaces the need for manual testing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'Explain the concept of \'Push Notification Architecture\'.',
    options: [
      'Push notifications are sent directly from the app to the user.',
      'It involves a server-side component (app server), a push notification service (e.g., FCM, APNs), and the client-side app to deliver messages to devices.',
      'Push notifications only work when the app is open.',
      'Push notifications are managed solely by the mobile operating system.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'What are the best practices for \'Mobile App Security\' regarding data storage?',
    options: [
      'Storing sensitive data in public directories.',
      'Encrypting sensitive data, using secure local storage (e.g., KeyStore), avoiding storing credentials on the device, and validating all input.',
      'Using unencrypted plain text for all data.',
      'Relying solely on external APIs for all data storage.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'Describe how \'Adaptive UI\' and \'Responsive UI\' principles apply to mobile development.',
    options: [
      'They are identical concepts.',
      'Responsive UI adjusts layouts fluidly to screen size; Adaptive UI uses predefined layouts for specific screen sizes/orientations.',
      'Adaptive UI is only for tablets, Responsive UI for phones.',
      'Neither is important for different screen sizes.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'What is the role of \'APIs\' (Application Programming Interfaces) in connecting mobile apps to backend services?',
    options: [
      'APIs are only for connecting to external hardware.',
      'APIs define the methods and data formats that apps can use to communicate with and retrieve data from server-side services.',
      'APIs are used to design the visual appearance of the app.',
      'APIs generate random data for the app.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'What is \'App Store Optimization (ASO)\' and why is it important?',
    options: [
      'Optimizing an app\'s internal code for performance.',
      'The process of optimizing mobile apps to rank higher in app store search results and top charts, increasing visibility and organic downloads.',
      'ASO is only for paid apps.',
      'ASO is irrelevant for user acquisition.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'Explain the purpose of \'Firebase\' in mobile app development.',
    options: [
      'Firebase is primarily a mobile operating system.',
      'Firebase is a Google-backed platform that provides a suite of tools and services (e.g., backend-as-a-service, analytics, authentication, databases) for building and scaling mobile and web applications.',
      'Firebase is a programming language for mobile apps.',
      'Firebase is only for designing UI layouts.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-2',
    question: 'What is \'Continuous Integration/Continuous Delivery (CI/CD)\' in mobile development?',
    options: [
      'CI/CD is a manual process for building and deploying apps.',
      'CI/CD automates the build, test, and deployment processes, enabling faster, more reliable, and frequent releases of mobile applications.',
      'CI/CD is only used for traditional software, not mobile apps.',
      'CI/CD slows down the development cycle.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'mobile-development'
  },

  {
    id: 'mobile-3',
    question: 'Discuss the architectural patterns for large-scale mobile applications (e.g., MVVM, MVP, MVI, Clean Architecture).',
    options: [
      'All mobile apps should use a monolithic architecture.',
      'These patterns (Model-View-ViewModel, Model-View-Presenter, Model-View-Intent) promote separation of concerns, testability, and maintainability for complex apps by defining clear roles for UI, business logic, and data.',
      'Architectural patterns are only for web development.',
      'Using no specific architecture is best for rapid development.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'Explain how \'GraphQL\' can be leveraged for mobile API interactions and its benefits over REST.',
    options: [
      'GraphQL is only for backend development and not used by mobile apps.',
      'GraphQL allows mobile clients to request exactly the data they need in a single request, reducing over-fetching/under-fetching and multiple round trips compared to REST, optimizing network usage for mobile devices.',
      'GraphQL always results in larger data payloads for mobile apps.',
      'GraphQL is less flexible than REST for complex data requirements.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'Describe the use of \'Machine Learning (ML) On-Device\' vs. \'Cloud-Based ML\' in mobile apps, including pros and cons.',
    options: [
      'On-device ML is always more powerful than cloud-based ML.',
      'On-device ML processes data locally (privacy, offline access, speed) but has resource limits; Cloud-based ML offers more power/scale (complex models) but requires connectivity and raises privacy concerns.',
      'Cloud-based ML is always cheaper and faster.',
      'There are no significant differences between them.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'What are the challenges and best practices for implementing \'Deep Linking\' and \'Universal Links\' in mobile apps?',
    options: [
      'Deep linking is only for sending emails.',
      'Challenges include proper setup, handling edge cases (app not installed), and consistent routing. Best practices involve using app-defined URL schemes, Web-to-App Association files, and careful navigation logic.',
      'Universal Links only work on Android devices.',
      'Deep linking simplifies app installation for users.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'Explain \'Augmented Reality (AR)\' and \'Virtual Reality (VR)\' development for mobile platforms.',
    options: [
      'AR and VR are interchangeable terms.',
      'AR overlays digital content onto the real world (e.g., ARKit, ARCore); VR creates immersive, simulated environments (e.g., Google Cardboard, Meta Quest). Mobile platforms support both with varying capabilities.',
      'Mobile devices cannot support AR or VR applications.',
      'AR and VR are only for gaming applications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'Discuss advanced \'Performance Optimization\' techniques for mobile apps beyond basic memory management.',
    options: [
      'Performance optimization is only for older devices.',
      'Techniques include lazy loading, code splitting, image optimization (WebP, AVIF), efficient network requests (HTTP/2, caching), background processing optimization, and using performance profiling tools.',
      'Optimizing performance is purely a hardware concern.',
      'Adding more features always improves app performance.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'What are \'mobile payment gateway\' integrations and their security implications?',
    options: [
      'Mobile payment gateways only accept cash payments.',
      'Integrating third-party services (e.g., Stripe, PayPal) to process payments. Security implications include PCI DSS compliance, tokenization, encryption, and protection against fraud and data breaches.',
      'Payment gateways handle all security automatically, requiring no developer input.',
      'Mobile payment integrations are not subject to any security regulations.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'Describe the role of \'Accessibility\' in mobile app development and its importance.',
    options: [
      'Accessibility is only for users with severe disabilities.',
      'Accessibility ensures mobile apps are usable by people with diverse abilities (e.g., screen readers, voice control, high contrast modes), increasing user reach and complying with regulations.',
      'Implementing accessibility features makes apps more complex for all users.',
      'Accessibility is an optional feature with no real impact.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'How do you implement \'Analytics and Crash Reporting\' in mobile apps, and why are they vital?',
    options: [
      'Analytics and crash reporting are only for marketing teams.',
      'Integrating SDKs (e.g., Firebase Analytics, Crashlytics) to track user behavior, app usage, and automatically report crashes, providing crucial data for improving UX, performance, and stability.',
      'They only track positive user interactions.',
      'Manual bug reporting is always more efficient than automated crash reporting.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'Explain \'Continuous Monitoring\' and \'A/B Testing\' strategies for mobile apps post-deployment.',
    options: [
      'Continuous monitoring only tracks server uptime.',
      'Continuous monitoring tracks app performance, user engagement, and errors in real-time; A/B testing compares different versions of features to determine which performs better with users.',
      'A/B testing is only for web pages, not mobile apps.',
      'Neither is necessary after an app is launched.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'What is \'Edge Computing\' in mobile app contexts and how does it optimize performance?',
    options: [
      'Edge computing involves processing all data on remote cloud servers.',
      'Edge computing processes data closer to the mobile device (at the \"edge\" of the network), reducing latency, bandwidth usage, and enabling faster real-time processing for certain app functions.',
      'Edge computing is only for IoT devices.',
      'It increases the amount of data transferred to the cloud.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'Discuss the challenges of \'App Store Submission\' and \'App Store Optimization (ASO)\' for different platforms.',
    options: [
      'App store submission is a one-time, simple process.',
      'Challenges include strict guidelines (Apple App Store), review times, ASO for visibility (keywords, screenshots), localization, and managing updates. Each platform has unique requirements.',
      'ASO only involves paying for app promotion.',
      'Once an app is submitted, it is automatically approved.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'What are \'Hybrid Cloud\' and \'Multi-Cloud\' strategies in mobile backend architecture?',
    options: [
      'Hybrid cloud and multi-cloud are identical terms.',
      'Hybrid cloud combines on-premises infrastructure with public cloud; Multi-cloud uses multiple public cloud providers. Both offer flexibility, redundancy, and specialized services for mobile backends.',
      'These strategies are only for large enterprises, not mobile apps.',
      'They always simplify backend management.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'Explain the security implications of \'Biometric Authentication\' (e.g., Face ID, Fingerprint) in mobile apps.',
    options: [
      'Biometric authentication removes all need for passwords.',
      'It offers convenience and enhanced security, but challenges include ensuring the security of biometric data storage, potential for spoofing, and fallback mechanisms for non-biometric access.',
      'Biometrics are less secure than traditional PINs.',
      'Biometric data is stored in plain text on the device.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'mobile-3',
    question: 'How do you approach \'Internationalization (i18n)\' and \'Localization (l10n)\' in mobile app development?',
    options: [
      'i18n and l10n only involve translating text strings.',
      'i18n designs the app to be adaptable to various languages/regions without re-engineering; l10n adapts the app for a specific locale (translations, cultural conventions, date formats).',
      'These processes only apply to backend services.',
      'They are complex and not necessary for most apps.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'mobile-development'
  },
  {
    id: 'cyber-1',
    question: 'What is the primary goal of cybersecurity?',
    options: [
      'To make computers faster',
      'To protect systems and data from digital attacks',
      'To design new software applications',
      'To manage network cables'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'Which of the following is a common type of malware?',
    options: [
      'Operating System',
      'Antivirus Software',
      'Virus',
      'Web Browser'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'What does \'phishing\' refer to in cybersecurity?',
    options: [
      'A type of network cable',
      'Attempting to trick users into revealing sensitive information, often through fake emails or websites',
      'A method for encrypting data',
      'A physical security measure'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'What is a \'strong password\' characterized by?',
    options: [
      'Being short and easy to remember',
      'Using common words and phrases',
      'A mix of uppercase/lowercase letters, numbers, and symbols, and sufficient length',
      'Being the same for all accounts'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'Which of these is a basic security practice for protecting your computer?',
    options: [
      'Disabling firewall',
      'Using outdated software',
      'Regularly updating software and operating systems',
      'Sharing your password with friends'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'What is the purpose of a \'firewall\' in network security?',
    options: [
      'To speed up internet connection',
      'To prevent unauthorized access to or from a private network',
      'To store large amounts of data',
      'To display web pages'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'What does \'MFA\' stand for in cybersecurity?',
    options: [
      'Malware Functionality Analysis',
      'Multi-Factor Authentication',
      'Mobile File Access',
      'Main Firewall Administration'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'Which action should you take if you receive a suspicious email asking for personal information?',
    options: [
      'Reply immediately with the requested information',
      'Click on all links in the email',
      'Delete the email and report it if possible',
      'Forward it to all your contacts'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'What is \'encryption\' used for in cybersecurity?',
    options: [
      'To make data publicly accessible',
      'To convert data into a code to prevent unauthorized access',
      'To delete data from a system',
      'To organize data in a database'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'Which term describes software designed to disrupt, damage, or gain unauthorized access to a computer system?',
    options: [
      'Firmware',
      'Hardware',
      'Malware',
      'Shareware'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'What is the purpose of a \'backup\' in data security?',
    options: [
      'To permanently delete data',
      'To create copies of data that can be recovered in case of data loss or corruption',
      'To encrypt data only',
      'To share data with external parties'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'What is \'social engineering\' in cybersecurity?',
    options: [
      'Designing social media platforms',
      'Manipulating people into performing actions or divulging confidential information',
      'Developing secure communication protocols',
      'Analyzing network traffic patterns'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'Which of the following is a common indicator of a phishing attempt?',
    options: [
      'Email from a known sender with a clear subject',
      'Generic greetings, urgent requests, and suspicious links/attachments',
      'Official company logos and correct grammar',
      'Emails with no text content'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'What is the role of an \'antivirus software\'?',
    options: [
      'To make your computer run slower',
      'To detect, prevent, and remove malicious software',
      'To create computer viruses',
      'To manage network connections'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-1',
    question: 'What is a \'VPN\' used for in cybersecurity?',
    options: [
      'To slow down internet speed',
      'To create a secure, encrypted connection over a less secure network like the internet',
      'To block all website access',
      'To share files publicly'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cybersecurity'
  },

  {
    id: 'cyber-2',
    question: 'Explain the difference between \'vulnerability\' and \'exploit\'.',
    options: [
      'They are interchangeable terms.',
      'A vulnerability is a weakness in a system; an exploit is a tool or technique that takes advantage of that weakness.',
      'An exploit is a type of software update.',
      'A vulnerability is always a physical security flaw.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'What is a \'Denial-of-Service (DoS)\' attack, and how does a \'DDoS\' attack differ?',
    options: [
      'DoS attacks only target individual computers; DDoS attacks target networks.',
      'DoS attacks overwhelm a system from a single source; DDoS attacks use multiple compromised systems (botnet) to launch a coordinated attack.',
      'DoS attacks are physical, DDoS attacks are digital.',
      'There is no difference between them.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'Describe the purpose of \'Intrusion Detection Systems (IDS)\' and \'Intrusion Prevention Systems (IPS)\'.',
    options: [
      'Both IDS and IPS only log network traffic.',
      'IDS monitors network/system activities for malicious activity and alerts; IPS actively blocks or prevents detected threats.',
      'IDS and IPS are only for physical security.',
      'Neither system can detect unknown threats.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'What is \'Ransomware\' and how does it typically spread?',
    options: [
      'A type of antivirus software that protects against all threats.',
      'Malware that encrypts a victim\'s files and demands a ransom payment for decryption. It often spreads via phishing emails or exploiting software vulnerabilities.',
      'A legitimate software used for data recovery.',
      'A harmless program that only displays advertisements.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'Explain the concept of \'Least Privilege\' in cybersecurity.',
    options: [
      'Giving all users maximum access rights.',
      'Granting users and systems only the minimum necessary permissions to perform their legitimate functions.',
      'Limiting access to only administrators.',
      'Allowing users to share passwords freely.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'What is \'SQL Injection\' and how can it be prevented?',
    options: [
      'A method for securely storing SQL databases.',
      'A code injection technique used to attack data-driven applications, often prevented by using parameterized queries or prepared statements.',
      'A type of network protocol.',
      'A physical attack on database servers.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'Describe the three pillars of information security: Confidentiality, Integrity, and Availability (CIA Triad).',
    options: [
      'CIA Triad refers to a government agency.',
      'Confidentiality protects against unauthorized access; Integrity ensures data accuracy and trustworthiness; Availability guarantees access to authorized users when needed.',
      'The CIA Triad is only for physical security.',
      'These three concepts are unrelated.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'What is \'Penetration Testing\' and its main objective?',
    options: [
      'Testing the speed of a network connection.',
      'Simulating a cyberattack against your own computer system to find vulnerabilities before malicious actors do.',
      'A method for installing new software.',
      'A way to monitor website traffic.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'What is the role of \'Security Information and Event Management (SIEM)\' systems?',
    options: [
      'To manage physical security cameras.',
      'To collect, analyze, and present security-related information from various sources within an organization to provide real-time analysis of security alerts.',
      'To encrypt individual files on a computer.',
      'To block all internet traffic.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'Explain the concept of \'Zero Trust\' security model.',
    options: [
      'Trusting all users and devices by default.',
      'A security model that assumes no user or device, whether inside or outside the organization\'s network, should be trusted by default, and access must be verified continuously.',
      'Zero Trust applies only to physical access controls.',
      'It eliminates the need for any authentication.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'What are \'patches\' and why are they crucial for cybersecurity?',
    options: [
      'Patches are decorative elements for software.',
      'Patches are software updates designed to fix bugs, improve performance, or, most importantly, address security vulnerabilities.',
      'Patches only apply to hardware components.',
      'Patches are only released once a year.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'Describe the difference between \'symmetric\' and \'asymmetric\' encryption.',
    options: [
      'Symmetric encryption uses two different keys; asymmetric uses one key.',
      'Symmetric encryption uses the same key for both encryption and decryption; asymmetric encryption uses a pair of public and private keys.',
      'Symmetric encryption is slower than asymmetric encryption.',
      'Asymmetric encryption is only for small files.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'What is a \'Supply Chain Attack\' in cybersecurity?',
    options: [
      'An attack on a company\'s delivery trucks.',
      'An attack that targets an organization by compromising less secure elements in its supply chain, such as software vendors or hardware manufacturers.',
      'An attack that only affects internal company employees.',
      'An attack that only uses physical force.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'What is the purpose of \'Incident Response\' in cybersecurity?',
    options: [
      'To ignore security incidents.',
      'To prepare for, detect, contain, eradicate, recover from, and post-incident analyze cyberattacks and security breaches.',
      'To create new security vulnerabilities.',
      'To only report incidents after they have been resolved.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-2',
    question: 'Explain \'Data Loss Prevention (DLP)\' and its role.',
    options: [
      'DLP is only for preventing physical theft of data.',
      'DLP is a set of tools and processes designed to ensure that sensitive data is not lost, misused, or accessed by unauthorized users.',
      'DLP encrypts all data automatically without user input.',
      'DLP is only used for data backups.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cybersecurity'
  },

  {
    id: 'cyber-3',
    question: 'Discuss the concept of \'Threat Intelligence\' and its operationalization in a security operations center (SOC).',
    options: [
      'Threat intelligence is only about predicting future attacks with 100% accuracy.',
      'Threat intelligence is evidence-based knowledge about existing or emerging threats, used to understand adversary capabilities and intent, and operationalized in a SOC for proactive defense, detection, and response.',
      'Threat intelligence is irrelevant for real-time security operations.',
      'It only involves collecting publicly available news articles.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'Explain \'Advanced Persistent Threats (APTs)\' and their characteristics.',
    options: [
      'APTs are simple, one-time attacks by amateur hackers.',
      'APTs are sophisticated, stealthy, and continuous computer hacking processes, often orchestrated by nation-states or highly organized groups, targeting specific entities over long periods.',
      'APTs only affect personal computers.',
      'APTs are easily detected by basic antivirus software.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'Describe the principles of \'Security by Design\' and its importance in software development.',
    options: [
      'Security by Design means adding security features only at the end of development.',
      'It is an approach to software and system development that integrates security considerations from the very beginning of the design phase, rather than as an afterthought, reducing vulnerabilities.',
      'Security by Design is only for hardware manufacturing.',
      'It increases the number of vulnerabilities in software.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'What is \'Blockchain\' technology and its potential applications in cybersecurity beyond cryptocurrency?',
    options: [
      'Blockchain is only for financial transactions and has no security applications.',
      'A distributed, immutable ledger that can enhance data integrity, secure identity management, supply chain security, and decentralized access control by providing transparency and tamper-proof records.',
      'Blockchain is a centralized database system.',
      'It makes data less secure due to its distributed nature.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'Discuss the ethical and legal implications of \'Offensive Security\' (e.g., ethical hacking, red teaming).',
    options: [
      'Offensive security has no ethical or legal boundaries.',
      'Ethical hacking and red teaming are legal when authorized, but unauthorized actions can lead to severe legal consequences. Ethical considerations include scope, consent, data handling, and potential for unintended harm.',
      'Offensive security is always illegal.',
      'It is only used by malicious actors.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'Explain \'Homomorphic Encryption\' and its significance for data privacy.',
    options: [
      'Homomorphic encryption is a method for making data less secure.',
      'Homomorphic encryption allows computations to be performed on encrypted data without decrypting it, enabling privacy-preserving analytics and cloud computing.',
      'It is a type of physical security measure.',
      'Homomorphic encryption is only for small, non-sensitive data.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'What is \'Security Orchestration, Automation, and Response (SOAR)\' and how does it benefit security operations?',
    options: [
      'SOAR only automates basic tasks and does not involve orchestration.',
      'SOAR platforms help organizations collect threat-related data, define incident analysis and response procedures, and automate security operations, leading to faster and more consistent incident response.',
      'SOAR replaces the need for human security analysts.',
      'SOAR increases manual intervention in security incidents.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'Describe \'Quantum Cryptography\' and its potential impact on current encryption standards.',
    options: [
      'Quantum cryptography is a theoretical concept with no practical application.',
      'Quantum cryptography uses principles of quantum mechanics to secure communication, offering theoretically unbreakable encryption. It poses a threat to current public-key cryptography (e.g., RSA) but also offers new solutions.',
      'It makes current encryption stronger.',
      'Quantum cryptography is only for quantum computers.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'What is \'Digital Forensics\' and its role in incident response and legal proceedings?',
    options: [
      'Digital forensics is only about recovering deleted files.',
      'Digital forensics is the process of identifying, preserving, analyzing, and presenting digital evidence in a legally acceptable manner, crucial for understanding breaches and supporting legal cases.',
      'It is only used after a security incident has been fully resolved.',
      'Digital forensics is irrelevant to legal investigations.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'Explain the concept of \'Adversarial Machine Learning\' and its implications for AI security.',
    options: [
      'Adversarial machine learning makes AI models more robust.',
      'Adversarial machine learning involves techniques to fool or manipulate AI models (e.g., by creating adversarial examples), highlighting vulnerabilities and the need for robust, explainable AI.',
      'It only affects traditional programming, not AI.',
      'Adversarial attacks are easily preventable by simple firewalls.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'What is \'Identity and Access Management (IAM)\' and its critical components in an enterprise?',
    options: [
      'IAM only manages physical access to buildings.',
      'IAM is a framework of policies and technologies to ensure that the right individuals have the right access to the right resources at the right time and for the right reasons. Components include authentication, authorization, and directory services.',
      'IAM is only for small businesses.',
      'IAM increases the risk of unauthorized access.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'Describe \'Cloud Security Posture Management (CSPM)\' and its importance for cloud environments.',
    options: [
      'CSPM is only for on-premise data centers.',
      'CSPM tools continuously monitor cloud environments for misconfigurations, compliance violations, and security risks, helping organizations maintain a strong security posture in the cloud.',
      'CSPM is a replacement for cloud firewalls.',
      'It is only used for billing cloud resources.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'What is \'Zero-Day Vulnerability\' and why is it particularly dangerous?',
    options: [
      'A vulnerability that has been known for a long time.',
      'A software vulnerability that is unknown to the vendor and has no patch available, making it particularly dangerous as there is no immediate defense.',
      'A vulnerability that only affects outdated software.',
      'It is a type of physical security flaw.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'Explain the concept of \'Security Information Sharing\' and its benefits for the cybersecurity community.',
    options: [
      'Security information sharing makes organizations more vulnerable.',
      'It involves organizations sharing threat intelligence, attack indicators, and best practices to collectively improve defenses, enabling faster detection and response across the community.',
      'Security information sharing is illegal in most countries.',
      'It is only done by government agencies.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },
  {
    id: 'cyber-3',
    question: 'Discuss the role of \'Artificial Intelligence (AI)\' and \'Machine Learning (ML)\' in modern cybersecurity.',
    options: [
      'AI and ML have no practical use in cybersecurity.',
      'AI/ML can enhance threat detection, automate incident response, identify anomalies, and predict future attacks by analyzing vast amounts of data, but also introduce new attack vectors (e.g., adversarial ML).',
      'AI/ML replace the need for human security analysts.',
      'They are only used for simple data encryption.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cybersecurity'
  },

  {
    id: 'devops-1',
    question: 'What is the primary goal of DevOps?',
    options: [
      'To separate development and operations teams completely',
      'To automate all manual tasks in software development',
      'To unite development and operations to shorten the SDLC and provide continuous delivery',
      'To focus only on software coding'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'Which of the following is NOT a core principle of DevOps?',
    options: [
      'Collaboration and Communication',
      'Automation',
      'Waterfall Model',
      'Continuous Improvement'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'What does \'CI\' stand for in CI/CD?',
    options: [
      'Code Integration',
      'Continuous Infrastructure',
      'Continuous Integration',
      'Continuous Improvement'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'What is the main purpose of \'Continuous Integration\'?',
    options: [
      'To deploy code manually once a month',
      'To frequently merge code changes into a central repository and run automated builds and tests',
      'To write unit tests only',
      'To manage project documentation'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'Which tool is commonly used for Version Control in DevOps?',
    options: [
      'Microsoft Word',
      'Git',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'What does \'CD\' stand for in CI/CD?',
    options: [
      'Code Deployment',
      'Continuous Documentation',
      'Continuous Delivery',
      'Customer Development'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'Which of these is a benefit of automation in DevOps?',
    options: [
      'Increased manual errors',
      'Slower deployments',
      'Faster feedback loops and reduced human error',
      'More repetitive tasks for developers'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'What is a \'pipeline\' in CI/CD?',
    options: [
      'A physical connection between servers',
      'An automated sequence of steps to build, test, and deploy software',
      'A coding language',
      'A type of database'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'What is \'Infrastructure as Code (IaC)\'?',
    options: [
      'Manually configuring servers and networks',
      'Managing and provisioning infrastructure using code instead of manual processes',
      'Writing application code faster',
      'Designing graphical user interfaces'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'Which tool is often used for CI in a DevOps pipeline?',
    options: [
      'Slack',
      'Jira',
      'Jenkins',
      'Outlook'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'What is a \'container\' (e.g., Docker) used for in DevOps?',
    options: [
      'Storing large data files permanently',
      'Packaging applications and their dependencies into isolated, portable units',
      'Managing network traffic routes',
      'Creating virtual machines with full operating systems'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'What is the importance of \'monitoring\' in DevOps?',
    options: [
      'To prevent any changes from being made to the system',
      'To collect and analyze data on application and infrastructure performance and health for insights and issue detection',
      'To only track user logins',
      'To automate software installation'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'Which concept encourages small, frequent changes over large, infrequent ones?',
    options: [
      'Big Bang Deployment',
      'Continuous Delivery',
      'Monolithic Architecture',
      'Manual Testing'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'What is the role of \'feedback loops\' in DevOps?',
    options: [
      'To slow down communication between teams',
      'To ensure that information from operations (e.g., errors, performance) quickly reaches development for continuous improvement',
      'To only provide feedback at the end of a project',
      'To prevent automated testing'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'devops'
  },
  {
    id: 'devops-1',
    question: 'Which of the following describes a \'microservices\' architecture?',
    options: [
      'Building applications as a single, indivisible unit',
      'Building applications as a collection of small, independent, and loosely coupled services',
      'Only using micro-sized servers',
      'An architecture where services are tightly integrated'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'devops'
  },

  {
    id: 'devops-2',
    question: 'Explain the difference between \'Continuous Delivery\' and \'Continuous Deployment\'.',
    options: [
      'Continuous Delivery means manual deployment; Continuous Deployment means automated deployment.',
      'Continuous Delivery ensures code is always ready for release with manual approval; Continuous Deployment automatically deploys all validated code to production.',
      'Continuous Delivery focuses on testing; Continuous Deployment focuses on monitoring.',
      'There is no practical difference between them.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'What is \'Configuration Management\' and why is it crucial in DevOps?',
    options: [
      'Manually setting up each server individually.',
      'The process of maintaining a consistent state of software and hardware across environments, using tools like Ansible or Puppet to automate provisioning and updates, ensuring consistency and preventing configuration drift.',
      'Configuration Management is only for physical data centers.',
      'It complicates the deployment process.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'Describe \'Orchestration\' (e.g., Kubernetes) in the context of containerized applications.',
    options: [
      'Orchestration is used for manual container creation only.',
      'Orchestration automates the deployment, scaling, management, and networking of containerized applications, making it easier to manage large-scale deployments.',
      'Orchestration is only for physical server management.',
      'It increases the complexity of managing containers.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'What is the purpose of \'Immutable Infrastructure\' in DevOps?',
    options: [
      'To allow servers to be manually changed after deployment.',
      'Building and deploying infrastructure components that, once provisioned, are never modified. Instead, any changes require deploying a new, updated component, improving consistency and reliability.',
      'Immutable infrastructure is only for development environments.',
      'It increases the risk of configuration drift.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'Explain \'Shift-Left\' testing in a DevOps pipeline.',
    options: [
      'Performing all testing at the very end of the development cycle.',
      'Integrating testing activities earlier in the software development lifecycle (i.e., \"shifting left\") to find and fix defects sooner, reducing cost and effort.',
      'Shift-Left testing is only for manual testing.',
      'It delays the feedback to developers.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'What is a \'Canary Release\' and its benefit?',
    options: [
      'Releasing software to all users at once.',
      'Deploying a new version of an application to a small subset of users before a full rollout, allowing monitoring for issues and quick rollback if problems occur, minimizing impact.',
      'Canary releases are only for internal testing.',
      'They increase the risk of widespread failures.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'Describe the use of \'Monitoring and Logging\' tools (e.g., Prometheus, ELK Stack) in DevOps.',
    options: [
      'Monitoring and logging are only for compliance purposes.',
      'These tools collect metrics, logs, and traces from applications and infrastructure to provide visibility into system health, performance, and user behavior, enabling proactive issue resolution.',
      'They make systems more complex without added benefits.',
      'Monitoring and logging are only done manually.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'What is \'Site Reliability Engineering (SRE)\' and how does it relate to DevOps?',
    options: [
      'SRE is a different approach that competes with DevOps.',
      'SRE applies software engineering principles to operations problems, focusing on reliability, automation, and measurement, often seen as an implementation of DevOps principles.',
      'SRE is only for development teams.',
      'SRE discourages automation and manual work.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'What is \'Chaos Engineering\' and why is it important in DevOps?',
    options: [
      'A method to introduce random bugs into production systems.',
      'The practice of intentionally introducing failures into a system to test its resilience and identify weaknesses before they cause real-world outages.',
      'Chaos Engineering is only for testing development environments.',
      'It guarantees that a system will never fail.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'Explain \'Blue-Green Deployment\' strategy.',
    options: [
      'Deploying a single version of software to a single environment.',
      'Running two identical production environments (Blue for current, Green for new version), routing traffic to the new version after testing, allowing quick rollback if issues arise.',
      'Blue-Green deployment is a complex manual process.',
      'It requires downtime for every deployment.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'What is the significance of \'Artifact Repositories\' (e.g., Nexus, Artifactory) in a DevOps pipeline?',
    options: [
      'They are used for storing source code only.',
      'They serve as centralized storage for compiled binaries, libraries, and other build artifacts, ensuring consistency, traceability, and efficient management of software components.',
      'Artifact repositories are only for public open-source projects.',
      'They increase build times in a CI/CD pipeline.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'How does \'Automated Testing\' contribute to DevOps success?',
    options: [
      'By slowing down the development process.',
      'By providing rapid feedback on code quality and functionality, ensuring that changes don\'t introduce regressions, and enabling faster, more confident deployments.',
      'Automated testing replaces the need for manual code reviews.',
      'It is only useful for very small projects.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'What is a \'Release Train\' in scaled agile/DevOps?',
    options: [
      'A physical train used to transport servers.',
      'A long-lived, self-organizing team of teams that delivers solutions incrementally, usually on a fixed schedule (cadence), aligning multiple teams to a common vision.',
      'A method for independent, unsynchronized deployments.',
      'A tool for managing individual code commits.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'Explain \'GitOps\' and its core principle.',
    options: [
      'GitOps involves managing only application code in Git.',
      'GitOps uses Git as the single source of truth for declarative infrastructure and applications, where changes are made via Git pull requests and automatically reconciled by automated operators.',
      'GitOps is a manual deployment process.',
      'It is only applicable to serverless architectures.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },
  {
    id: 'devops-2',
    question: 'What are the main benefits of \'Observability\' in a DevOps ecosystem?',
    options: [
      'Observability only focuses on uptime metrics.',
      'Observability enables understanding of a system\'s internal state from its external outputs (logs, metrics, traces), allowing for deeper troubleshooting and proactive identification of issues.',
      'Observability makes systems more opaque to engineers.',
      'It replaces the need for any monitoring tools.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'devops'
  },

  {
    id: 'devops-3',
    question: 'Discuss the challenges and best practices for implementing \'Security Automation\' in a DevOps pipeline (DevSecOps).',
    options: [
      'Security automation only shifts responsibility away from developers.',
      'Challenges include integrating security tools, false positives, and cultural change. Best practices involve \'shift-left\' security, automated vulnerability scanning, compliance checks, and security as code.',
      'DevSecOps eliminates all security risks automatically.',
      'Security automation slows down the CI/CD pipeline significantly.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'Explain the concept of \'FinOps\' and its critical role in cloud-native DevOps environments.',
    options: [
      'FinOps is purely an accounting function unrelated to IT operations.',
      'FinOps is an operational framework that brings financial accountability to the variable spend model of cloud, enabling cross-functional teams to make data-driven spending decisions, optimize cloud costs, and drive business value.',
      'FinOps focuses only on reducing cloud spending at any cost.',
      'It eliminates the need for any budget planning in the cloud.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'Describe \'Progressive Delivery\' strategies beyond basic Blue/Green or Canary deployments.',
    options: [
      'Progressive delivery always deploys to all users at once.',
      'Strategies like dark launches, A/B testing deployments, and percentage rollouts allow finer-grained control over exposure to new features or versions, enabling continuous validation and feature experimentation.',
      'Progressive delivery complicates deployments without added benefits.',
      'It is only suitable for very small and simple applications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'What is \'Service Mesh\' (e.g., Istio, Linkerd) and how does it enhance microservices management in DevOps?',
    options: [
      'A service mesh is a physical network device for microservices.',
      'A service mesh provides a dedicated infrastructure layer for handling service-to-service communication, offering features like traffic management, security (mTLS), and observability without requiring changes to application code, simplifying operations.',
      'Service meshes complicate microservices deployment and scaling.',
      'It only works for monolithic applications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'How do you implement \'Chaos Engineering\' in a mature DevOps environment, and what are its challenges?',
    options: [
      'Chaos Engineering is only done in production environments with no prior testing.',
      'Implementing it requires a culture of resilience, automated experimentation platforms, and robust observability. Challenges include blast radius, experiment design, and convincing stakeholders of its value.',
      'Chaos Engineering always leads to system instability.',
      'It is only for very simple, non-critical systems.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'Discuss the role of \'Artificial Intelligence (AI)\' and \'Machine Learning (ML)\' in advanced DevOps practices (AIOps).',
    options: [
      'AI and ML have no practical application in DevOps.',
      'AIOps leverages AI/ML to enhance IT operations by automating anomaly detection, predicting incidents, optimizing resource allocation, and streamlining root cause analysis, moving from reactive to proactive operations.',
      'AIOps replaces the need for human operators entirely.',
      'AI/ML in DevOps increases manual intervention.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'Explain \'Platform Engineering\' and its relationship to DevOps.',
    options: [
      'Platform engineering is a replacement for DevOps, making it obsolete.',
      'Platform engineering focuses on building and maintaining internal developer platforms that simplify and standardize the developer experience, enabling teams to build and deploy faster, complementing and extending DevOps principles.',
      'Platform engineering only creates custom tools that are not reusable.',
      'It adds unnecessary complexity to the development process.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'What are \'Serverless Operations\' and the challenges of managing them in a DevOps context?',
    options: [
      'Serverless operations mean servers are completely removed and managed by developers.',
      'Serverless operations involve managing event-driven functions and services without provisioning servers. Challenges include cold starts, monitoring complexity, debugging distributed systems, and cost optimization.',
      'Serverless operations eliminate all operational overhead.',
      'They are only suitable for static websites.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'Describe \'Observability-driven Development\' and its impact on software quality.',
    options: [
      'Observability-driven development means only collecting logs.',
      'It\'s a practice where engineers design systems with observability built-in from the start, making them easier to understand, debug, and operate in production, leading to higher quality and reliability.',
      'Observability-driven development complicates the development process.',
      'It focuses solely on preventing errors during development.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'How does \'Value Stream Mapping\' contribute to DevOps adoption and improvement?',
    options: [
      'Value Stream Mapping is a financial accounting tool.',
      'It\'s a lean management technique used to visualize, analyze, and improve the flow of work from customer request to delivery, identifying bottlenecks and waste in the software delivery process to optimize lead time.',
      'Value Stream Mapping is only for manufacturing processes.',
      'It adds complexity to existing workflows without clear benefits.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'What are the considerations for \'Disaster Recovery\' and \'Business Continuity\' in a highly automated DevOps pipeline?',
    options: [
      'Automated pipelines remove the need for disaster recovery planning.',
      'Considerations include automated backups, multi-region deployments, infrastructure as code for rapid recovery, regular disaster recovery testing, and defining clear recovery point/time objectives (RPO/RTÔ).',
      'Disaster recovery planning is solely a manual effort.',
      'High automation makes systems more vulnerable to disasters.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'Explain the role of \'Policy as Code\' in cloud and DevOps governance.',
    options: [
      'Policy as Code means defining policies only through manual configurations.',
      'Policy as Code defines and manages compliance, security, and operational policies using machine-readable code, enabling automated enforcement and auditing across infrastructure and applications.',
      'Policy as Code is irrelevant for compliance and security.',
      'It is only used for very specific, small-scale policies.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'How do you manage \'secrets\' (e.g., API keys, passwords) securely in a CI/CD pipeline?',
    options: [
      'Storing secrets directly in code repositories.',
      'Using dedicated secret management tools (e.g., HashiCorp Vault, AWS Secrets Manager, Kubernetes Secrets) that encrypt, store, and tightly control access to sensitive information.',
      'Sharing secrets via email between team members.',
      'Relying on environment variables directly exposed in build logs.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'Describe \'GitFlow\' and \'Trunk-Based Development\' as branching strategies in DevOps, highlighting their differences.',
    options: [
      'GitFlow and Trunk-Based Development are the same thing.',
      'GitFlow uses long-lived feature branches and release branches, often more complex. Trunk-Based Development emphasizes short-lived branches and frequent merges to a single \'trunk\' or main branch, favoring continuous integration.',
      'Trunk-Based Development is only for very small teams.',
      'GitFlow encourages infrequent merging of code.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  {
    id: 'devops-3',
    question: 'What is the concept of \'Deployment Gates\' in a CI/CD pipeline?',
    options: [
      'Deployment gates are only for manual approvals.',
      'Automated checks and conditions (e.g., performance tests, security scans, compliance checks) that must be met before a release can progress to the next stage of deployment, ensuring quality and adherence to policies.',
      'Deployment gates slow down the pipeline without providing benefits.',
      'They prevent any form of automated deployment.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'devops'
  },
  // Blockchain Questions
  {
    id: 'blockchain-1',
    question: 'What is the most well-known cryptocurrency?',
    options: ['Ethereum', 'Bitcoin', 'Dogecoin', 'Litecoin'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'What is a smart contract?',
    options: ['A legal document', 'Self-executing contract on blockchain', 'A printed agreement', 'An online form'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'What is the fundamental structure of a blockchain?',
    options: [
      'A centralized database managed by a single entity.',
      'A distributed, immutable ledger composed of blocks of transactions linked using cryptography.',
      'A type of encrypted email system.',
      'A network for peer-to-peer file sharing only.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'What is a \'block\' in a blockchain?',
    options: [
      'A physical barrier preventing access to data.',
      'A record of new transactions that is added to the chain.',
      'A software program that mines cryptocurrency.',
      'A type of digital wallet.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'Which technology is used to link blocks together securely?',
    options: [
      'Email encryption',
      'Cryptography',
      'Centralized servers',
      'Physical cables'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'What does \'decentralization\' mean in the context of blockchain?',
    options: [
      'A single authority controls the network.',
      'The network is distributed across multiple participants, with no single point of control.',
      'Data is stored in one central location.',
      'Only specific users can access the network.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },

  {
    id: 'blockchain-1',
    question: 'What is a \'digital wallet\' used for in blockchain?',
    options: [
      'To store physical cash.',
      'To securely store public and private keys and interact with cryptocurrencies and blockchain applications.',
      'To browse the internet privately.',
      'To create new cryptocurrencies.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'Which of these is a key characteristic of blockchain technology?',
    options: [
      'Mutability (data can be easily changed)',
      'Immutability (once recorded, data cannot be altered)',
      'Centralized control',
      'Slow transaction processing'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'What is a \'node\' in a blockchain network?',
    options: [
      'A physical computer that only stores a small part of the blockchain.',
      'A computer participating in the network that maintains a copy of the blockchain and validates transactions.',
      'A type of smart contract.',
      'A method for encrypting data.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'What is the primary benefit of blockchain\'s transparency?',
    options: [
      'Transactions are hidden from all participants.',
      'All validated transactions are publicly visible and verifiable on the distributed ledger.',
      'Only the network administrator can view transactions.',
      'It makes transactions slower.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'Which of the following cryptocurrencies was the first to implement blockchain technology?',
    options: [
      'Ethereum',
      'Litecoin',
      'Bitcoin',
      'Ripple'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'What is a \'consensus mechanism\' in blockchain?',
    options: [
      'A method for a single entity to approve all transactions.',
      'A protocol that ensures all distributed nodes in the network agree on the current state of the ledger.',
      'A way to hide transaction details.',
      'A type of digital currency.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'What does \'P2P\' stand for in a blockchain context?',
    options: [
      'Private-to-Private',
      'Public-to-Public',
      'Peer-to-Peer',
      'Process-to-Process'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'What is the primary difference between a \'public\' and \'private\' blockchain?',
    options: [
      'Public blockchains are faster; private blockchains are slower.',
      'Public blockchains are open to anyone; private blockchains have restricted access, often for specific organizations.',
      'Private blockchains do not use cryptography.',
      'Public blockchains are controlled by a single company.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-1',
    question: 'What is a \'hash\' in blockchain?',
    options: [
      'A type of digital currency.',
      'A unique fixed-size string of characters used to represent a block\'s data, ensuring integrity and linking blocks.',
      'A programming language for smart contracts.',
      'A digital signature for transactions.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'blockchain'
  },

  {
    id: 'blockchain-2',
    question: 'Explain \'Smart Contracts\' and their role on a blockchain like Ethereum.',
    options: [
      'Smart contracts are legal documents written on paper.',
      'Smart contracts are self-executing contracts with the terms of the agreement directly written into code, running on a blockchain and automatically executing when conditions are met.',
      'Smart contracts require human intervention for every execution.',
      'Smart contracts are only used for cryptocurrency transactions.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'Describe the \'Proof-of-Stake (PoS)\' consensus mechanism and how it differs from Proof-of-Work (PoW).',
    options: [
      'PoS requires miners to solve complex puzzles, like PoW.',
      'PoS validates transactions based on the amount of cryptocurrency a validator \"stakes\" as collateral, consuming less energy than PoW, which relies on computational work.',
      'PoS is less secure than PoW.',
      'PoS is a centralized consensus mechanism.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'What is a \'Distributed Ledger Technology (DLT)\' and how does blockchain fit into it?',
    options: [
      'DLT is a single, centralized database system.',
      'DLT is a decentralized database managed by multiple participants. Blockchain is a specific type of DLT that organizes data into blocks linked by cryptography.',
      'Blockchain is a competitor to DLT.',
      'DLT only applies to financial transactions.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'Explain \'Hashing\' in blockchain and its importance for security.',
    options: [
      'Hashing allows data to be easily modified after being added to a block.',
      'Hashing converts data into a fixed-size string (hash value). It\'s crucial for linking blocks, ensuring data integrity, and securing the immutability of the ledger.',
      'Hashing encrypts data to keep it private.',
      'Hashing is used to speed up transaction processing without security benefits.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'What is \'Gas\' in the Ethereum network, and what is its purpose?',
    options: [
      'Gas is a type of cryptocurrency used for trading.',
      'Gas is a unit of computational effort required to execute operations on the Ethereum network, used to measure and pay for transaction fees and smart contract execution.',
      'Gas is a method for mining Ethereum.',
      'Gas is used to store data on the Ethereum blockchain.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'Describe the concept of \'Forks\' in blockchain (e.g., hard fork, soft fork).',
    options: [
      'Forks are always malicious attacks on a blockchain.',
      'Forks occur when a blockchain\'s protocol is updated or when two paths emerge from a single block, leading to diverging versions of the blockchain (hard fork: incompatible, soft fork: compatible).',
      'Forks only happen in centralized systems.',
      'Forks automatically merge old and new blockchain versions.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'What are \'Decentralized Applications (DApps)\' and their key characteristics?',
    options: [
      'DApps are traditional mobile applications managed by a central server.',
      'DApps are applications that run on a decentralized peer-to-peer network, typically a blockchain, using smart contracts to execute logic without a single point of failure or control.',
      'DApps are slower and less transparent than traditional apps.',
      'DApps are exclusively used for gaming.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'Explain \'Public-Key Cryptography\' (Asymmetric Encryption) in blockchain.',
    options: [
      'It uses a single key for both encryption and decryption.',
      'It uses a pair of keys: a public key for encryption (and verifying signatures) and a private key for decryption (and creating signatures), crucial for securing transactions and identity.',
      'Public-key cryptography is only for mining cryptocurrencies.',
      'It makes data publicly readable without any authentication.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'What is a \'Merkle Tree\' and its role in blockchain efficiency and integrity?',
    options: [
      'A Merkle Tree is a type of blockchain consensus mechanism.',
      'A Merkle Tree (hash tree) is a data structure used to efficiently verify the integrity and content of large data sets in a block, summarizing all transactions in a single root hash.',
      'Merkle Trees are only used for physical data storage.',
      'They increase the storage size of each block.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'Describe the concept of \'Token Standards\' like ERC-20 and their importance.',
    options: [
      'Token standards define the physical characteristics of cryptocurrency coins.',
      'Token standards (e.g., ERC-20 for fungible tokens on Ethereum) are sets of rules that define how tokens function and interact within a blockchain ecosystem, enabling interoperability and standardization.',
      'Token standards are only for non-fungible tokens.',
      'They make it harder for different tokens to interact.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'What is \'Interoperability\' in blockchain and why is it a challenge?',
    options: [
      'Interoperability means all blockchains must have the same codebase.',
      'Interoperability is the ability of different blockchain networks to communicate and exchange data or assets with each other, which is challenging due to varying protocols and structures.',
      'Interoperability is only relevant for centralized databases.',
      'It makes blockchain networks less secure.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'Explain \'Sharding\' as a scalability solution for blockchains.',
    options: [
      'Sharding creates multiple independent blockchains that cannot communicate.',
      'Sharding is a database partitioning technique applied to blockchains, splitting the network into smaller, more manageable segments (shards) to process transactions in parallel, increasing throughput.',
      'Sharding reduces the security of the blockchain.',
      'It only applies to centralized blockchain systems.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'What are \'Oracles\' in blockchain, and why are they necessary?',
    options: [
      'Oracles are validators within the blockchain network.',
      'Oracles are third-party services that provide external, real-world data to smart contracts, enabling them to execute based on off-chain information which blockchains cannot access natively.',
      'Oracles store all blockchain data.',
      'Oracles are used for mining cryptocurrencies.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'Describe \'Non-Fungible Tokens (NFTs)\' and their primary use cases.',
    options: [
      'NFTs are identical and interchangeable like regular currency.',
      'NFTs are unique digital assets representing ownership or proof of authenticity of a specific item or piece of content, commonly used for digital art, collectibles, and gaming items.',
      'NFTs can be divided into smaller units.',
      'NFTs are used for anonymous financial transactions.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-2',
    question: 'What is a \'Layer 2 Scaling Solution\' (e.g., Lightning Network, Rollups) and its goal?',
    options: [
      'Layer 2 solutions replace the main blockchain entirely.',
      'Layer 2 solutions are protocols built on top of a main blockchain (Layer 1) to improve scalability and transaction speed by processing transactions off-chain, then settling them on the main chain.',
      'Layer 2 solutions reduce the security of Layer 1 blockchains.',
      'They only apply to private blockchains.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'blockchain'
  },

  {
    id: 'blockchain-3',
    question: 'Discuss the \'Blockchain Trilemma\' and various approaches to address it (Scalability, Decentralization, Security).',
    options: [
      'The Blockchain Trilemma states that all three properties (scalability, decentralization, security) are easily achievable simultaneously.',
      'The Blockchain Trilemma posits that a blockchain can only optimize for two of three properties (scalability, decentralization, security) at any given time, with various projects attempting to balance these tradeoffs through different architectural choices.',
      'The Blockchain Trilemma is a myth in blockchain development.',
      'It suggests that blockchain technology is fundamentally flawed and unusable.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'Explain \'Zero-Knowledge Proofs (ZKPs)\' and their advanced applications in blockchain privacy and scalability.',
    options: [
      'ZKPs are used to reveal all transaction data publicly.',
      'ZKPs allow one party to prove to another that a statement is true, without revealing any information beyond the validity of the statement itself, enabling privacy-preserving transactions and scaling solutions (ZK-Rollups).',
      'ZKPs only apply to centralized databases.',
      'ZKPs are only for securing physical assets.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'Describe \'Cross-Chain Interoperability\' solutions (e.g., Polkadot, Cosmos) and their underlying mechanisms.',
    options: [
      'Cross-chain interoperability means all blockchains must become one single chain.',
      'Solutions like Polkadot (parachains) and Cosmos (IBC) enable different blockchains to communicate and exchange value, often using relay chains or hubs to facilitate secure, trustless communication between distinct networks.',
      'Cross-chain interoperability makes blockchain networks isolated.',
      'It relies on centralized intermediaries to transfer assets.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'What is \'Decentralized Autonomous Organization (DAO)\' and its governance model?',
    options: [
      'A DAO is a traditional company with a hierarchical structure.',
      'A DAO is an organization represented by rules encoded as a transparent computer program, controlled by its members and not influenced by a central government, enabling decentralized governance and decision-making.',
      'DAOs are illegal in most jurisdictions.',
      'DAOs only exist on private blockchains.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'Explain \'Consensus-as-a-Service (CaaS)\' and its relevance for enterprise blockchain adoption.',
    options: [
      'CaaS replaces the need for any consensus mechanism.',
      'CaaS provides managed blockchain infrastructure and consensus mechanisms as a service, allowing enterprises to focus on application development rather than complex blockchain node setup and maintenance, facilitating adoption.',
      'CaaS is only for small-scale, experimental blockchain projects.',
      'It increases the operational overhead for enterprises.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'Discuss the regulatory challenges and legal frameworks emerging for blockchain and cryptocurrencies (e.g., AML, KYC, securities laws).',
    options: [
      'Blockchain and cryptocurrencies are universally unregulated.',
      'Challenges include defining crypto assets, combating money laundering (AML), implementing Know Your Customer (KYC) procedures, and applying existing securities laws, leading to diverse and evolving global regulations.',
      'Regulations simplify all blockchain deployments.',
      'The decentralized nature of blockchain makes regulation impossible.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'What is \'Decentralized Finance (DeFi)\' and its core components (e.g., DEXs, lending protocols, stablecoins)?',
    options: [
      'DeFi is a traditional financial system operated by banks.',
      'DeFi is an ecosystem of financial applications built on blockchain, aiming to recreate traditional financial services in a decentralized, transparent, and permissionless manner, using components like DEXs (decentralized exchanges), lending, and stablecoins.',
      'DeFi only operates with fiat currencies.',
      'DeFi is controlled by central banks.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'Explain the concept of \'State Channels\' and \'Plasma\' as Layer 2 scaling solutions.',
    options: [
      'State channels and Plasma store all transactions directly on the main chain.',
      'State channels allow multiple off-chain transactions between participants, only settling the final state on the main chain; Plasma uses a tree of smaller blockchains linked to the main chain to reduce load.',
      'These solutions reduce blockchain security.',
      'They are only for non-financial applications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'Describe \'Web3\' and how blockchain technology forms its backbone.',
    options: [
      'Web3 refers to the current internet dominated by large centralized companies.',
      'Web3 aims to create a decentralized internet built on blockchain, empowering users with ownership and control over their data and digital identities through decentralized applications (DApps) and token-based economies.',
      'Web3 eliminates the need for any internet connection.',
      'Web3 is a rebranded term for Web 2.0.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'What are the challenges and solutions for \'Blockchain Data Storage\' (on-chain vs. off-chain)?',
    options: [
      'Storing all data on-chain is always the most efficient solution.',
      'Challenges include high storage costs and limited capacity on-chain. Solutions involve storing only critical data (hashes, proofs) on-chain and larger data (e.g., files) off-chain using decentralized storage (e.g., IPFS).',
      'Off-chain storage provides less security than on-chain storage.',
      'Blockchain data storage has no scalability issues.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'Discuss the concept of \'Self-Sovereign Identity (SSI)\' and its enablers in blockchain.',
    options: [
      'SSI means governments control all personal identities.',
      'SSI empowers individuals with digital control over their identity and personal data, using decentralized identifiers (DIDs) and verifiable credentials (VCs) on blockchain for secure, private, and portable identity management.',
      'SSI makes identity management less secure.',
      'SSI relies on centralized identity providers.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'Explain \'Tokenomics\' and its importance in designing successful blockchain projects.',
    options: [
      'Tokenomics is only about the price speculation of cryptocurrencies.',
      'Tokenomics refers to the economics of a blockchain token, including its creation, distribution, utility, and burning mechanisms, crucial for incentivizing participation, sustaining the network, and driving value.',
      'Tokenomics is irrelevant to a blockchain project\'s long-term success.',
      'It only applies to non-fungible tokens.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'How do \'Sidechains\' and \'Drivechains\' contribute to blockchain scalability and functionality?',
    options: [
      'Sidechains and Drivechains only operate independently and cannot interact with the main chain.',
      'Sidechains are separate blockchains linked to a main chain, allowing assets to be moved between them to offload transactions. Drivechains are a specific type of sidechain that uses a merged mining approach.',
      'They reduce the security of the main blockchain.',
      'Sidechains are solely for centralized applications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'What are \'Consortium Blockchains\' and their typical use cases?',
    options: [
      'Consortium blockchains are fully public and permissionless.',
      'Consortium blockchains are permissioned networks governed by a pre-selected group of organizations, offering a balance between public transparency and private control, suitable for B2B applications and supply chains.',
      'Consortium blockchains have no central authority.',
      'They are less efficient than public blockchains for enterprise use.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },
  {
    id: 'blockchain-3',
    question: 'Discuss the environmental concerns associated with \'Proof-of-Work\' and emerging solutions.',
    options: [
      'Proof-of-Work has no environmental impact.',
      'PoW consumes significant energy due to mining computations. Solutions include transitioning to Proof-of-Stake (PoS), using renewable energy sources, and optimizing mining hardware for efficiency.',
      'Environmental concerns are irrelevant to blockchain technology.',
      'Only small blockchains use Proof-of-Work.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'blockchain'
  },

  {
    id: 'iot-1',
    question: 'What does IoT stand for?',
    options: [
      'Internet of Tools',
      'Internet of Things',
      'Internal Online Technology',
      'Information of Traffic'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'Which of the following is a common example of an IoT device?',
    options: [
      'Desktop Computer',
      'Smartphone',
      'Smart Thermostat',
      'Traditional Landline Phone'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'What is the primary function of a \'sensor\' in an IoT system?',
    options: [
      'To display information to the user',
      'To collect data from the physical environment',
      'To process complex calculations',
      'To connect to the internet directly'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'Which type of network connection is commonly used for IoT devices to send data over short distances?',
    options: [
      'Ethernet cable',
      'Wi-Fi',
      'Fiber Optic',
      'Satellite'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'What is a \'smart home\' an application of?',
    options: [
      'Basic electrical wiring',
      'Artificial intelligence only',
      'Internet of Things (IoT)',
      'Traditional home appliances'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'What is the purpose of an \'actuator\' in an IoT system?',
    options: [
      'To collect data',
      'To display data',
      'To perform an action based on received data or commands',
      'To store data'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'Which component enables IoT devices to communicate with each other and the internet?',
    options: [
      'Battery',
      'Power Button',
      'Connectivity Module (e.g., Wi-Fi, Bluetooth)',
      'Display Screen'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'What kind of data do most IoT devices primarily generate?',
    options: [
      'Video games',
      'Static images only',
      'Sensor readings (e.g., temperature, humidity, motion)',
      'Long-form articles'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'Which term describes making everyday objects \'smart\' by embedding them with electronics, software, sensors, and network connectivity?',
    options: [
      'Basic Automation',
      'Internet of Things',
      'Industrial Robotics',
      'Home Electrification'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'What is a common privacy concern related to IoT devices?',
    options: [
      'Limited device battery life',
      'Potential for unauthorized collection and use of personal data',
      'Slow internet speeds',
      'Difficulty in updating device software'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'Which layer of an IoT architecture is responsible for collecting data from physical devices?',
    options: [
      'Application Layer',
      'Network Layer',
      'Perception Layer (Device Layer)',
      'Cloud Layer'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'What is a \'gateway\' in an IoT system?',
    options: [
      'A device that only displays sensor data.',
      'A device that connects IoT devices to the internet or a central server, often translating protocols.',
      'A type of sensor.',
      'A software application for data analysis.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'Which protocol is often used for simple, lightweight messaging between IoT devices?',
    options: [
      'HTTP',
      'FTP',
      'MQTT (Message Queuing Telemetry Transport)',
      'SMTP'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'What is \'remote monitoring\' in IoT?',
    options: [
      'Only checking device battery levels manually.',
      'Observing and controlling IoT devices and collecting their data from a distant location using network connectivity.',
      'Setting up devices in a new location.',
      'Physically inspecting devices regularly.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'iot'
  },
  {
    id: 'iot-1',
    question: 'Which sector benefits greatly from IoT for smart factories and predictive maintenance?',
    options: [
      'Retail',
      'Healthcare',
      'Manufacturing (Industrial IoT)',
      'Education'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'iot'
  },

  {
    id: 'iot-2',
    question: 'Explain the \'three-layer architecture\' commonly used to describe IoT systems.',
    options: [
      'It involves only devices, network, and user interface.',
      'Typically includes the Perception Layer (sensing, acting), Network Layer (data transmission), and Application Layer (user services, data processing).',
      'It refers to hardware, software, and firmware only.',
      'It divides IoT into local, regional, and global segments.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'Describe \'Edge Computing\' in the context of IoT and its advantages.',
    options: [
      'Processing all IoT data only in a central cloud.',
      'Processing data closer to the source (IoT devices) rather than sending it all to a central cloud, reducing latency, bandwidth, and enabling faster, local decision-making.',
      'Edge computing makes IoT systems less secure.',
      'It requires more bandwidth for data transfer.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'What are the main \'security challenges\' in IoT environments?',
    options: [
      'IoT devices are inherently secure and require no extra protection.',
      'Challenges include weak default passwords, lack of encryption, insecure updates, physical tampering, and a large attack surface due to numerous devices.',
      'Security challenges only apply to large-scale industrial IoT.',
      'IoT devices are too simple to be hacked.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'Explain \'Fog Computing\' and its relationship to cloud and edge computing.',
    options: [
      'Fog computing replaces both edge and cloud computing.',
      'Fog computing extends cloud computing to the edge of the network, acting as an intermediary layer between edge devices and the cloud, offering distributed data processing closer to the data source.',
      'Fog computing is a type of sensor network.',
      'It is a term only for weather forecasting in IoT.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'What is \'MQTT\' (Message Queuing Telemetry Transport) and why is it popular for IoT?',
    options: [
      'A complex protocol for large file transfers.',
      'A lightweight messaging protocol designed for constrained devices and low-bandwidth, high-latency networks, making it ideal for IoT communication due to its efficiency and simplicity.',
      'MQTT is only used for traditional web communication.',
      'It requires high processing power on IoT devices.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'Describe \'Digital Twin\' technology in IoT and its applications.',
    options: [
      'A digital twin is a physical copy of an IoT device.',
      'A digital twin is a virtual representation or model of a physical object, system, or process, updated with real-time data from sensors, used for monitoring, simulation, and predictive maintenance.',
      'Digital twins are only used in manufacturing.',
      'Digital twin technology is purely theoretical.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'What are the challenges of \'IoT Device Management\' (onboarding, updating, monitoring)?',
    options: [
      'IoT device management is always simple due to standardization.',
      'Challenges include diverse device types, scalability (millions of devices), remote updates (firmware-over-the-air), security patching, and monitoring device health and connectivity.',
      'IoT devices never need updates after deployment.',
      'Device management is handled entirely by the user.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'Explain \'LoRaWAN\' and \'NB-IoT\' as LPWAN technologies for IoT.',
    options: [
      'LoRaWAN and NB-IoT are high-bandwidth technologies for video streaming.',
      'They are Low-Power Wide-Area Network (LPWAN) technologies designed for long-range, low-power communication, suitable for IoT applications that send small amounts of data infrequently.',
      'These technologies require constant power supply.',
      'They are only used for short-range communication.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'What is the role of \'Cloud Platforms\' (e.g., AWS IoT, Azure IoT Hub, Google Cloud IoT Core) in an IoT ecosystem?',
    options: [
      'Cloud platforms are only for displaying static web pages.',
      'They provide services for connecting, managing, ingesting data from, processing, and analyzing data from large fleets of IoT devices, as well as enabling application integration.',
      'Cloud platforms are only for local data storage.',
      'They remove the need for any network connectivity.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'Describe \'Time Series Databases\' and their importance for IoT data analytics.',
    options: [
      'Time series databases are only for storing text documents.',
      'Time series databases are optimized for storing and querying data points that are indexed by time, making them highly efficient for the continuous streams of data generated by IoT devices.',
      'They are less efficient for IoT data than traditional relational databases.',
      'Time series databases do not support real-time data ingestion.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'What is \'Over-The-Air (OTA) Updates\' in IoT, and why is it critical?',
    options: [
      'OTA updates refer to physically connecting devices to update them.',
      'OTA updates allow firmware and software updates to be delivered wirelessly to IoT devices, critical for patching vulnerabilities, adding features, and maintaining device functionality remotely.',
      'OTA updates are only for smartphones, not IoT devices.',
      'OTA updates increase the risk of device failure.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'Explain the concept of \'IoT Analytics\' and its applications.',
    options: [
      'IoT analytics only involves displaying raw sensor data.',
      'IoT analytics involves collecting, processing, and analyzing data from IoT devices to extract insights, identify patterns, and support decision-making for applications like predictive maintenance, operational efficiency, and customer behavior analysis.',
      'IoT analytics does not require any data processing.',
      'It is only used for historical data, not real-time insights.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'What are the \'privacy implications\' of large-scale IoT deployments?',
    options: [
      'IoT deployments inherently protect all user privacy.',
      'Implications include constant surveillance, collection of highly personal data (e.g., health, location), potential for data breaches, and lack of transparency regarding data usage, requiring robust data governance and user consent.',
      'Privacy concerns are limited to corporate data, not individual data.',
      'IoT data is always anonymous and cannot be traced to individuals.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'Describe \'Zigbee\' and \'Z-Wave\' as wireless protocols for smart home IoT.',
    options: [
      'Zigbee and Z-Wave are high-bandwidth protocols for video streaming.',
      'They are low-power, mesh networking protocols commonly used for smart home automation, enabling devices to communicate reliably over short to medium distances with low energy consumption.',
      'These protocols are designed for long-range industrial applications only.',
      'They require central internet connectivity for all device communication.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },
  {
    id: 'iot-2',
    question: 'What is \'Middleware\' in IoT architecture and its function?',
    options: [
      'Middleware refers to the physical sensors and actuators.',
      'Middleware is software that facilitates communication and data management between different components of an IoT system (devices, gateways, cloud), abstracting complexity and enabling integration.',
      'Middleware is only used for data visualization.',
      'It is a type of network cable for IoT devices.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'iot'
  },

  {
    id: 'iot-3',
    question: 'Discuss the challenges and solutions for \'IoT Interoperability\' across diverse devices and platforms.',
    options: [
      'IoT interoperability is easily achieved due to universal standards.',
      'Challenges include heterogeneous protocols, data formats, and device capabilities. Solutions involve standardized APIs, data models (e.g., OneM2M, OCF), semantic interoperability, and middleware platforms.',
      'Interoperability makes IoT systems less secure.',
      'It is only a concern for very small IoT deployments.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'Explain \'Blockchain\'s role in enhancing IoT security and data integrity.',
    options: [
      'Blockchain is irrelevant to IoT security.',
      'Blockchain can provide decentralized trust, immutable record-keeping, secure data exchange, and enhanced device authentication for IoT, mitigating risks like data tampering and single points of failure.',
      'Blockchain increases the latency of IoT device communication significantly.',
      'It centralizes data control for IoT devices.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'Describe \'Fog-to-Cloud Continuum\' architecture for IoT and its benefits for analytics.',
    options: [
      'Fog-to-Cloud continuum means all data is processed in one central cloud.',
      'This architecture distributes computing resources from the edge (Fog) to the centralized cloud, allowing flexible processing closer to the data source for real-time insights while leveraging cloud scalability for long-term analytics.',
      'It eliminates the need for any on-device processing.',
      'This architecture is only for simple data collection.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'What are the advanced \'Security Paradigms\' for IoT (e.g., Zero Trust, Hardware Root of Trust, Secure Enclaves)?',
    options: [
      'Advanced IoT security only relies on strong passwords.',
      'These paradigms aim for robust protection: Zero Trust assumes no inherent trust; Hardware Root of Trust provides a secure foundation for device integrity; Secure Enclaves protect sensitive data/code in isolation.',
      'These security measures reduce IoT device functionality.',
      'They are only applicable to industrial control systems.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'Explain the concept of \'IoT Data Monetization\' and its ethical implications.',
    options: [
      'IoT data monetization only involves selling raw data to third parties.',
      'It is the process of generating economic value from IoT data (e.g., selling insights, offering data-driven services). Ethical implications include user privacy, transparency in data usage, and data ownership.',
      'IoT data cannot generate any economic value.',
      'Ethical implications are not a concern when monetizing data.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'Discuss \'Machine Learning (ML) at the Edge\' for IoT devices (TinyML) and its advantages/disadvantages.',
    options: [
      'ML at the Edge requires constant cloud connectivity for inference.',
      'TinyML involves deploying ML models directly on resource-constrained IoT devices, offering low latency, privacy, and offline functionality, but is limited by processing power and memory.',
      'TinyML is less energy efficient than cloud-based ML.',
      'It is only suitable for complex ML models.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'What is \'IoT Platform as a Service (PaaS)\' and its benefits for rapid application development?',
    options: [
      'IoT PaaS is a physical hardware device for IoT.',
      'IoT PaaS offers a complete development and deployment environment for IoT applications, including device management, data ingestion, analytics, and application enablement, simplifying development and scaling.',
      'IoT PaaS increases the complexity of IoT solution development.',
      'It requires developers to manage all underlying infrastructure.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'Describe the use of \'Digital Twins\' in \'Predictive Maintenance\' for industrial IoT.',
    options: [
      'Digital twins only provide historical data of equipment.',
      'Digital twins continuously simulate the behavior of physical assets using real-time sensor data, enabling predictive maintenance by identifying potential failures and optimizing maintenance schedules before breakdowns occur.',
      'Predictive maintenance is not possible with digital twins.',
      'Digital twins are only for monitoring, not prediction.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'Explain \'Standardization Efforts\' in IoT (e.g., IEEE P2413, OCF, Thread) and their impact on ecosystem growth.',
    options: [
      'Standardization efforts hinder IoT innovation and growth.',
      'These efforts aim to create common protocols and architectures for IoT devices and platforms, promoting interoperability, reducing fragmentation, and fostering wider adoption and ecosystem growth.',
      'Standardization is only for hardware components.',
      'They make it more difficult for new devices to enter the market.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'How do you ensure \'Scalability\' and \'Reliability\' for large-scale IoT deployments (e.g., millions of devices)?',
    options: [
      'Scalability is achieved by simply adding more single devices.',
      'Ensuring scalability involves distributed architectures, message queues, auto-scaling cloud resources, and efficient data processing pipelines. Reliability requires redundancy, fault tolerance, and robust error handling.',
      'Scalability and reliability are not major concerns for IoT.',
      'It is solely dependent on the network bandwidth available.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'What are the \'ethical considerations\' surrounding IoT data collection and usage?',
    options: [
      'IoT data collection has no ethical implications.',
      'Ethical considerations include privacy (surveillance, sensitive data), consent (transparent data practices), data ownership, algorithmic bias in automated decisions, and potential for misuse of collected information.',
      'Ethical concerns are only relevant to the manufacturing of devices.',
      'All data collected by IoT devices is anonymous.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'Describe \'Semantic Interoperability\' in IoT and its importance for data understanding.',
    options: [
      'Semantic interoperability is only about devices being able to connect physically.',
      'Semantic interoperability ensures that collected data can be understood and correctly interpreted by different systems and applications, going beyond mere data exchange to provide context and meaning.',
      'It increases the complexity of data analysis without benefit.',
      'Semantic interoperability applies only to human language, not machine data.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'Explain the role of \'Artificial Intelligence (AI)\' in enabling \'Cognitive IoT\' applications.',
    options: [
      'AI in IoT only focuses on basic data collection.',
      'AI enables Cognitive IoT by allowing devices and systems to not just collect data, but to learn, reason, and make intelligent decisions autonomously, leading to more adaptive and predictive applications.',
      'AI in IoT replaces the need for human control entirely.',
      'Cognitive IoT is a theoretical concept without practical applications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'What is \'IoT Security Governance\' and its key elements?',
    options: [
      'IoT security governance only involves purchasing security software.',
      'IoT security governance establishes policies, processes, and responsibilities for managing security risks across the entire IoT ecosystem, including device lifecycle, data handling, and regulatory compliance.',
      'IoT security governance is only for small-scale projects.',
      'It removes the need for any individual device security measures.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'iot-3',
    question: 'How do \'Digital Currency\' and \'Tokenization\' intersect with IoT for micro-payments and supply chain?',
    options: [
      'Digital currency and tokenization are irrelevant to IoT.',
      'Digital currencies and blockchain tokens can enable secure, automated micro-payments between IoT devices (e.g., for data sharing, resource usage) and provide transparent, verifiable tracking in IoT-enabled supply chains.',
      'They make IoT transactions slower and more expensive.',
      'Tokenization only applies to physical goods, not digital interactions.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'iot'
  },
  {
    id: 'robotics-1',
    question: 'What is the primary goal of robotics?',
    options: [
      'To replace all human jobs with machines.',
      'To design, build, operate, and apply robots to assist or replace human tasks.',
      'To create robots that can think and feel like humans.',
      'To build automated factory lines only.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'Which of the following is a common component of a robot?',
    options: [
      'Keyboard',
      'Monitor',
      'Actuator',
      'Printer'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'What is the function of a \'sensor\' in a robot?',
    options: [
      'To make the robot move.',
      'To gather information about the robot\'s environment or its own state.',
      'To provide power to the robot.',
      'To store robot programming code.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'What is an \'actuator\' in robotics?',
    options: [
      'A component that processes data.',
      'A mechanism that controls or moves a system or mechanism, e.g., a motor.',
      'A power source for the robot.',
      'A programming language for robots.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'Which term describes a robot\'s ability to move within its environment?',
    options: [
      'Static position',
      'Locomotion',
      'Programming',
      'Sensing'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'What is a \'manipulator\' in robotics?',
    options: [
      'The robot\'s head.',
      'The part of the robot that interacts with its environment, often an arm with multiple joints.',
      'The robot\'s control system.',
      'The robot\'s power supply.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'Which type of robot is designed to operate in factories, performing repetitive tasks?',
    options: [
      'Humanoid Robot',
      'Industrial Robot',
      'Service Robot',
      'Exploration Robot'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'What is the concept of a robot\'s \'degrees of freedom\'?',
    options: [
      'The robot\'s ability to communicate.',
      'The number of independent parameters that define the configuration of a mechanical system in space.',
      'The number of sensors a robot has.',
      'The robot\'s processing power.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'What is \'teleoperation\' in robotics?',
    options: [
      'Robots operating completely autonomously.',
      'Controlling a robot remotely from a distance, often with human input.',
      'Robots communicating with each other wirelessly.',
      'Robots performing tasks without any human supervision.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'Which field provides the \'intelligence\' for robots to perceive, learn, and make decisions?',
    options: [
      'Mechanical Engineering',
      'Electrical Engineering',
      'Artificial Intelligence (AI)',
      'Civil Engineering'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'What is an \'end-effector\'?',
    options: [
      'The beginning of a robot arm.',
      'A device or tool attached to the end of a robot arm, designed to interact with the environment (e.g., gripper, welding torch).',
      'The robot\'s power cord.',
      'The main computer of a robot.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'What is the role of \'kinematics\' in robotics?',
    options: [
      'Studying the robot\'s power consumption.',
      'Analyzing the motion of a robot without considering the forces that cause the motion.',
      'Designing the robot\'s physical structure.',
      'Programming the robot\'s high-level decisions.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'Which programming language is commonly used for industrial robots?',
    options: [
      'HTML',
      'CSS',
      'Python',
      'Java'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'What is a \'humanoid robot\'?',
    options: [
      'A robot designed to resemble a human and mimic human behaviors.',
      'A robot used for space exploration.',
      'A robot designed for underwater operations.',
      'A robot built only for industrial assembly lines.'
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'robotics'
  },
  {
    id: 'robotics-1',
    question: 'What is the purpose of a \'control system\' in a robot?',
    options: [
      'To physically assemble the robot.',
      'To manage and regulate the robot\'s behavior, movements, and interactions based on programming and sensor input.',
      'To provide power to the robot.',
      'To store the robot\'s memory.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'robotics'
  },

  {
    id: 'robotics-2',
    question: 'Explain the difference between \'open-loop\' and \'closed-loop\' control systems in robotics.',
    options: [
      'Open-loop systems use sensor feedback; closed-loop systems do not.',
      'Open-loop systems do not use feedback to adjust output; closed-loop systems use sensor feedback to continuously adjust output to achieve a desired state.',
      'Open-loop systems are always more accurate.',
      'Closed-loop systems are only for simple tasks.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'Describe \'Simultaneous Localization and Mapping (SLAM)\' in mobile robotics.',
    options: [
      'SLAM is a method for robotic arms to manipulate objects.',
      'SLAM is a computational problem of concurrently building a map of an unknown environment and, at the same time, keeping track of a robot\'s location within that map.',
      'SLAM is only for stationary robots.',
      'SLAM requires a pre-built map of the environment.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'What is \'Inverse Kinematics\' in robot arm control?',
    options: [
      'Calculating the end-effector position given joint angles.',
      'Calculating the required joint angles to achieve a desired position and orientation of the end-effector.',
      'Studying the forces acting on the robot arm.',
      'Programming the robot\'s high-level tasks.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'Explain \'Robot Operating System (ROS)\' and its benefits.',
    options: [
      'ROS is a physical robot hardware.',
      'ROS is a flexible framework for writing robot software, providing tools, libraries, and conventions to simplify the development of complex robot applications.',
      'ROS is only for industrial robots.',
      'ROS controls robots manually.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'What are \'Collaborative Robots\' (Cobots) and their main distinction from traditional industrial robots?',
    options: [
      'Cobots are large, dangerous industrial robots.',
      'Cobots are designed to safely interact and work alongside humans in a shared workspace, unlike traditional robots that operate in isolated, caged environments.',
      'Cobots are only for domestic use.',
      'Cobots cannot perform any heavy lifting.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'Describe \'Path Planning\' in mobile robotics.',
    options: [
      'A robot\'s ability to recognize objects.',
      'The process of determining a sequence of movements that will take a robot from a start configuration to a goal configuration while avoiding obstacles.',
      'Creating a map of an unknown environment.',
      'Controlling the individual joints of a robot arm.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'What is \'Machine Vision\' in robotics and its applications?',
    options: [
      'Robots that can physically see with human-like eyes.',
      'Machine vision enables robots to \"see\" and interpret images from cameras to perform tasks like object recognition, quality inspection, and navigation.',
      'Machine vision is only for surveillance cameras.',
      'It involves robots communicating verbally.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'Explain the concept of \'Haptics\' in human-robot interaction.',
    options: [
      'Haptics refers to robots communicating with light signals.',
      'Haptics provides tactile feedback to human users, allowing them to \"feel\" virtual objects or robotic interactions, enhancing teleoperation and virtual reality experiences.',
      'Haptics is only for robots with no physical contact.',
      'It is a method for robots to speak.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'What are \'Soft Robots\' and their advantages?',
    options: [
      'Robots made of traditional rigid materials.',
      'Robots made from compliant, deformable materials that allow for safe interaction with humans and delicate objects, and enable locomotion in unstructured environments.',
      'Soft robots are only for industrial welding tasks.',
      'They are less durable than rigid robots.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'What is \'Reinforcement Learning\' in the context of robot control?',
    options: [
      'Teaching a robot by manually programming every action.',
      'A machine learning paradigm where a robot learns to perform tasks by interacting with its environment and receiving rewards or penalties for its actions.',
      'Reinforcement learning is only for human learning.',
      'It requires explicit programming for every possible scenario.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'Describe \'Robot Navigation\' concepts (localization, mapping, path planning, obstacle avoidance).',
    options: [
      'Robot navigation only involves moving in a straight line.',
      'It includes determining a robot\'s position (localization), building environment representations (mapping), finding efficient routes (path planning), and reacting to impediments (obstacle avoidance).',
      'These concepts are only relevant for stationary robots.',
      'Robot navigation always requires human guidance.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'What is the significance of \'Human-Robot Collaboration (HRC)\' in modern manufacturing?',
    options: [
      'HRC aims to completely replace humans in factories.',
      'HRC enables robots and humans to work together safely and efficiently, combining robot precision/strength with human dexterity/problem-solving for increased productivity and flexibility.',
      'HRC is only for simple, repetitive tasks.',
      'It complicates manufacturing processes.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'Explain \'Simulations\' in robotics development and their benefits.',
    options: [
      'Simulations are only for entertainment purposes.',
      'Simulations allow developers to test and refine robot designs, control algorithms, and behaviors in a virtual environment before deploying them to physical hardware, saving time and resources.',
      'Simulations are always less accurate than real-world testing.',
      'They increase the risk of damaging physical robots.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'What is \'Exoskeleton Robotics\' and its primary applications?',
    options: [
      'Robots that can operate underwater.',
      'Wearable robotic devices that augment or restore human strength, endurance, or mobility, primarily used in rehabilitation, industrial assistance, and military applications.',
      'Exoskeletons are only for gaming.',
      'They are purely for cosmetic purposes.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },
  {
    id: 'robotics-2',
    question: 'Describe the role of \'Artificial Intelligence (AI)\' in achieving \'robot autonomy\'.',
    options: [
      'AI limits a robot\'s ability to make independent decisions.',
      'AI enables robots to perceive, reason, learn from data, and adapt their behavior to perform tasks independently without continuous human intervention, moving towards full autonomy.',
      'Robot autonomy only means pre-programmed movements.',
      'AI is only used for very basic robot functions.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'robotics'
  },

  {
    id: 'robotics-3',
    question: 'Discuss the ethical implications of advanced robotics and AI (e.g., job displacement, accountability, lethal autonomous weapons).',
    options: [
      'Advanced robotics has no ethical considerations.',
      'Concerns include widespread job displacement, algorithmic bias in robot decision-making, assigning responsibility for errors, and the potential use of lethal autonomous weapons, requiring careful societal consideration and regulation.',
      'Ethical implications only apply to human workers, not robots.',
      'Robotics will always create more jobs than it displaces.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'Explain \'Reinforcement Learning from Human Feedback (RLHF)\' in training advanced robotic behaviors.',
    options: [
      'RLHF requires robots to learn only from simulated environments.',
      'RLHF combines reinforcement learning with human preferences, allowing humans to provide feedback (e.g., rankings) on robot behaviors to guide the learning process, leading to more aligned and natural robotic actions.',
      'RLHF makes robot learning entirely autonomous.',
      'It is a technique for robots to physically interact with humans.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'Describe \'Swarm Robotics\' and its advantages/disadvantages.',
    options: [
      'Swarm robotics involves a single, very large robot.',
      'Swarm robotics involves coordinating multiple simple robots to achieve complex tasks through local interactions, offering robustness, scalability, and flexibility, but posing challenges in coordination and communication.',
      'Swarm robotics is only for military applications.',
      'Individual robots in a swarm are highly intelligent and complex.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'What are the challenges and solutions for \'Human-Robot Teaming\' in complex, unstructured environments?',
    options: [
      'Human-robot teaming is only suitable for simple, repetitive tasks.',
      'Challenges include intuitive communication, shared understanding of goals, adapting to human unpredictability, and safety protocols. Solutions involve natural language processing, haptics, and adaptive control systems.',
      'Teaming with robots eliminates all human errors.',
      'It reduces overall task efficiency.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'Explain \'Bipedal Locomotion\' in robotics and its complexities.',
    options: [
      'Bipedal locomotion is simpler to achieve than wheeled locomotion.',
      'Bipedal locomotion refers to robots walking on two legs, which is highly complex due to balance, stability, energy efficiency, and dynamic control required to mimic human gait.',
      'Bipedal robots are only for space exploration.',
      'It is primarily for static robots.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'Discuss \'Model Predictive Control (MPC)\' in advanced robot motion planning.',
    options: [
      'MPC only relies on pre-programmed trajectories without real-time adjustments.',
      'MPC is an advanced control method that uses a model of the system to predict future behavior and optimize control actions over a finite horizon, allowing robots to handle complex constraints and dynamic environments.',
      'MPC is too computationally intensive for real-time robot control.',
      'It only applies to linear systems.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'What is \'Semantic Mapping\' in robotics and why is it important for higher-level reasoning?',
    options: [
      'Semantic mapping only creates a geometric representation of the environment.',
      'Semantic mapping builds maps that include objects and their properties/relationships, providing robots with a richer understanding of their environment for tasks requiring context and reasoning beyond simple navigation.',
      'Semantic mapping is irrelevant for robot decision-making.',
      'It makes maps more complex and less useful.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'Describe \'Force/Torque Control\' in robotic manipulation and its applications.',
    options: [
      'Force/torque control only involves controlling a robot\'s speed.',
      'It is a control method where a robot\'s movements are adjusted based on forces and torques exerted on its end-effector, enabling compliant motion, assembly tasks, and safe human-robot interaction.',
      'Force/torque control is only for very simple pick-and-place operations.',
      'It increases the rigidity of robot movements.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'Explain \'Digital Twins\' in robotics and their role in simulation and maintenance.',
    options: [
      'A digital twin is a physical copy of a robot.',
      'A digital twin is a virtual replica of a physical robot, updated with real-time data, used for simulating behaviors, testing software updates, predicting failures, and optimizing performance without affecting the physical robot.',
      'Digital twins are only for monitoring, not active simulation.',
      'They increase the risk of robot malfunction.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'How do \'Reinforcement Learning\' algorithms handle the \'exploration-exploitation\' dilemma in robotics?',
    options: [
      'RL algorithms always prioritize exploration over exploitation.',
      'They balance trying new actions to discover better strategies (exploration) with exploiting known good strategies to maximize rewards, often using techniques like epsilon-greedy or Boltzmann exploration.',
      'The dilemma is irrelevant to robot learning.',
      'RL algorithms only exploit known good strategies.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'What are the challenges of \'Robot Localization\' in GPS-denied environments and typical solutions?',
    options: [
      'Robots cannot operate in GPS-denied environments.',
      'Challenges include drift, lack of global reference, and sensor noise. Solutions involve SLAM with LiDAR/cameras, odometry, inertial measurement units (IMUs), and landmark recognition.',
      'GPS-denied environments only affect human navigation.',
      'Localization is always perfectly accurate regardless of environment.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'Discuss \'Robotics as a Service (RaaS)\' business models and their implications for robot adoption.',
    options: [
      'RaaS models require customers to purchase and maintain all robots themselves.',
      'RaaS offers robot capabilities as a subscription service, reducing upfront costs and operational burden for businesses, potentially accelerating robot adoption in various industries.',
      'RaaS only applies to very large industrial robots.',
      'It increases the cost of robot deployment for small businesses.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'Explain \'Learning from Demonstration (LfD)\' in robot programming.',
    options: [
      'LfD involves robots programming themselves from scratch.',
      'LfD (or imitation learning) allows robots to learn new skills by observing human demonstrations, converting human actions into robotic policies, simplifying complex task programming.',
      'LfD is only for teaching robots simple, repetitive movements.',
      'It requires extensive manual coding for every demonstration.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'What is \'Human-Robot Interaction (HRI)\' safety, and its key considerations beyond physical barriers?',
    options: [
      'HRI safety is only about preventing robots from moving.',
      'HRI safety includes physical (collision avoidance, force limiting), psychological (trust, predictability), and ethical considerations, ensuring safe and comfortable interaction beyond isolated workspaces.',
      'HRI safety is irrelevant for collaborative robots.',
      'Safety protocols only apply to traditional industrial robots.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'robotics-3',
    question: 'Describe \'Grasping and Manipulation\' challenges in unstructured environments for robots.',
    options: [
      'Robot grasping is always perfect in any environment.',
      'Challenges include object variability (shape, texture, deformability), occlusions, cluttered scenes, and real-time adaptation. Solutions involve advanced sensors, deep learning for perception, and compliant grippers.',
      'Grasping challenges are only for very small objects.',
      'Robots can only grasp objects that are perfectly symmetrical.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'robotics'
  },
  {
    id: 'ar-1',
    question: 'What is the primary characteristic that defines Augmented Reality (AR)?',
    options: [
      'It creates a completely simulated virtual world.',
      'It overlays digital information onto the real world.',
      'It replaces the real world entirely with a digital one.',
      'It only displays text on a screen.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'Which of the following devices is commonly used to experience AR?',
    options: [
      'Traditional Desktop Computer',
      'Smartphone',
      'Calculator',
      'Analog Television'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'What does \'digital overlay\' mean in AR?',
    options: [
      'Physical stickers placed on objects.',
      'Virtual objects or information displayed on top of real-world views.',
      'A new type of screen protector.',
      'A method of encrypting digital data.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'Which popular mobile game heavily utilized AR technology?',
    options: [
      'Candy Crush Saga',
      'Pokémon GO',
      'Angry Birds',
      'Subway Surfers'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'What is a \'marker\' used for in marker-based AR?',
    options: [
      'To draw on the screen.',
      'A specific image or pattern that an AR application recognizes to place virtual content.',
      'A type of sensor in an AR headset.',
      'To provide audio feedback to the user.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'Which sense does AR primarily augment?',
    options: [
      'Smell',
      'Taste',
      'Sight',
      'Touch'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'What is the role of the camera in a smartphone AR experience?',
    options: [
      'To take photos only.',
      'To capture the real-world environment for digital overlay.',
      'To generate virtual objects.',
      'To provide sound effects.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'What is \'spatial tracking\' in AR?',
    options: [
      'Tracking weather patterns.',
      'The ability of an AR device to understand its position and orientation in the real world.',
      'Tracking user eye movements.',
      'Tracking data transfer speeds.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'Which of these is a common application of AR in retail?',
    options: [
      'Online payment processing.',
      'Virtual try-on of clothes or furniture placement in a room.',
      'Inventory management in a warehouse.',
      'Customer support via chat bots.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'What is the difference between AR and Virtual Reality (VR)?',
    options: [
      'AR replaces reality; VR augments reality.',
      'AR overlays digital content onto the real world; VR creates an entirely immersive virtual world.',
      'AR only works on mobile devices; VR only works on PCs.',
      'There is no fundamental difference.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'Which term describes the seamless blending of real and virtual objects in AR?',
    options: [
      'Disruption',
      'Immersion',
      'Augmentation',
      'Synchronization'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'What is a common use of AR in education?',
    options: [
      'Reading e-books on a tablet.',
      'Interactive 3D models overlaid on textbooks or physical objects for enhanced learning.',
      'Online video conferencing for lectures.',
      'Taking online quizzes.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'Which mobile operating system has built-in AR development platforms like ARKit?',
    options: [
      'Android',
      'Windows Phone',
      'iOS',
      'BlackBerry OS'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'What is the role of \'lighting estimation\' in advanced AR applications?',
    options: [
      'To turn on device flashlights.',
      'To make virtual objects appear more realistic by matching their lighting to the real-world environment.',
      'To brighten the display screen.',
      'To track user eye movements.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-1',
    question: 'What is \'Markerless AR\'?',
    options: [
      'AR that requires specific physical markers to place content.',
      'AR that uses environmental features (e.g., planes, surfaces) to place virtual content without the need for predefined markers.',
      'AR that only works indoors.',
      'AR that requires a special headset.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'augmented-reality'
  },

  {
    id: 'ar-2',
    question: 'Explain the concept of \'SLAM\' (Simultaneous Localization and Mapping) in markerless AR.',
    options: [
      'SLAM is a method for creating 3D models of objects.',
      'SLAM is a computational problem of concurrently building a map of an unknown environment and, at the same time, keeping track of an AR device\'s location within that map, crucial for persistent AR experiences.',
      'SLAM is only used for marker-based AR.',
      'SLAM requires a pre-existing map of the environment.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'Describe \'Occlusion\' in AR and why it is a challenge.',
    options: [
      'Occlusion is when virtual objects are always visible regardless of real-world objects.',
      'Occlusion is when a real-world object should block the view of a virtual object but fails to do so, breaking realism. It\'s challenging due to the difficulty of real-time depth sensing.',
      'Occlusion only affects audio in AR.',
      'Occlusion is easily solved by simple cameras.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'What are \'AR Glasses\' or \'Smartglasses\' and their advantages over smartphone AR?',
    options: [
      'AR glasses are just regular glasses with a camera.',
      'Wearable devices that overlay digital content directly onto the user\'s field of view, offering hands-free interaction, wider field of view, and more immersive experiences than handheld AR.',
      'AR glasses are typically less expensive than smartphones.',
      'They require an external device to function.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'What is \'Persistence\' in AR, and why is it important for practical applications?',
    options: [
      'Persistence means AR content disappears when the app is closed.',
      'Persistence allows virtual content to remain fixed in the real world across multiple sessions or users, enabling collaborative AR experiences and consistent virtual object placement.',
      'Persistence only applies to marker-based AR.',
      'It increases the computational requirements of AR significantly.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'Explain \'Computer Vision\'s role in AR tracking and scene understanding.',
    options: [
      'Computer vision is only for generating 3D models.',
      'Computer vision algorithms analyze real-world images/video from cameras to detect features, recognize objects, estimate depth, and track the device\'s position, enabling AR content placement and interaction.',
      'Computer vision is not used in markerless AR.',
      'It focuses solely on audio processing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'What is \'Haptic Feedback\' in AR and how can it enhance user experience?',
    options: [
      'Haptic feedback provides only visual cues.',
      'Haptic feedback provides tactile sensations (e.g., vibrations, force feedback) to the user, enhancing the realism of virtual object interaction and immersion in AR experiences.',
      'Haptic feedback is only for auditory elements in AR.',
      'It increases the computational load on the AR device.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'Describe \'Cloud Anchors\' (e.g., ARCore Cloud Anchors) and their use in shared AR experiences.',
    options: [
      'Cloud anchors are physical markers placed in the environment.',
      'Cloud anchors allow multiple users to experience the same AR content in the same real-world location by sharing a common spatial understanding derived from the cloud, enabling collaborative AR.',
      'Cloud anchors are only for single-user AR experiences.',
      'They eliminate the need for any internet connection in AR.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'What are the ethical considerations related to \'Privacy\' in AR applications?',
    options: [
      'AR applications do not collect personal data.',
      'Concerns include recording real-world environments without consent, collecting biometric data, location tracking, and potential for surveillance, requiring robust data handling and user consent.',
      'Privacy is only a concern for VR applications.',
      'Ethical considerations are irrelevant to AR development.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'Explain \'AR Development Platforms/SDKs\' like Unity AR Foundation, Vuforia, or Spark AR Studio.',
    options: [
      'These are specialized hardware devices for AR.',
      'These are software development kits and platforms that provide tools, APIs, and frameworks to simplify the creation of AR experiences across various devices and operating systems.',
      'They are only for professional AR developers.',
      'These platforms only support marker-based AR.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'What is \'Scene Understanding\' in AR, and why is it complex?',
    options: [
      'Scene understanding is just recognizing a single object.',
      'Scene understanding involves an AR system comprehending the geometry, semantics, and physical properties of the real-world environment, which is complex due to varied lighting, textures, and dynamic objects.',
      'Scene understanding is only for pre-recorded videos.',
      'It is automatically handled by basic AR frameworks.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'Describe \'Volumetric Capture\' and its potential for realistic AR content.',
    options: [
      'Volumetric capture is only for static 2D images.',
      'Volumetric capture creates 3D models of real-world objects or performances that can be viewed from any angle in AR, offering highly realistic and immersive content, beyond traditional 2D video.',
      'Volumetric capture increases the difficulty of AR development significantly.',
      'It only applies to virtual reality, not augmented reality.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'What is the concept of \'Augmented Virtuality\' within the Reality-Virtuality Continuum?',
    options: [
      'Augmented Virtuality is another term for Virtual Reality.',
      'Augmented Virtuality (AV) is a mix of real and virtual, where the virtual environment is predominant, but real-world elements or users are introduced into the virtual world.',
      'AV is purely an AR concept.',
      'It represents a completely separate technology from AR/VR.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'What are the challenges of \'AR UI/UX Design\' compared to traditional mobile apps?',
    options: [
      'AR UI/UX design is simpler as it relies on existing physical space.',
      'Challenges include designing for 3D interaction, managing spatial anchors, minimizing cognitive load, ensuring intuitiveness in a mixed reality, and adapting to varying environmental conditions.',
      'AR UI/UX design has no unique challenges.',
      'It focuses solely on aesthetic appeal.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'Explain \'Light Estimation\' and \'Environmental HDR\' in ARKit/ARCore.',
    options: [
      'These features only control the device\'s screen brightness.',
      'They enable AR applications to automatically estimate the real-world lighting conditions and apply realistic lighting and shadows to virtual objects, making them appear more integrated with the environment.',
      'These features increase the artificiality of AR content.',
      'They are only for static AR scenes.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-2',
    question: 'What is \'WebAR\' and its advantages/disadvantages?',
    options: [
      'WebAR requires a dedicated app download for every experience.',
      'WebAR allows AR experiences to be accessed directly through a web browser without installing a dedicated app, offering broad accessibility but sometimes with limited performance or feature access compared to native AR.',
      'WebAR is less accessible than native AR apps.',
      'It is only compatible with outdated web browsers.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'augmented-reality'
  },

  {
    id: 'ar-3',
    question: 'Discuss \'Neural Rendering\' and \'Gaussian Splatting\' techniques and their potential impact on photorealistic AR content.',
    options: [
      'These techniques produce less realistic AR content than traditional methods.',
      'Neural rendering (e.g., NeRF) and Gaussian Splatting enable highly photorealistic, novel view synthesis from sparse images, promising breakthroughs in creating more convincing digital objects and environments for AR.',
      'These methods are only for generating 2D images.',
      'They increase the computational cost to a level impractical for real-time AR.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'Explain \'Eye Tracking\' and \'Hand Tracking\' technologies in AR headsets and their significance for interaction.',
    options: [
      'Eye and hand tracking are only for data collection, not interaction.',
      'Eye tracking allows AR systems to understand user gaze for interaction and foveated rendering; Hand tracking enables natural gesture-based interaction, enhancing intuitiveness and immersion in AR experiences.',
      'These technologies limit the user\'s freedom of movement.',
      'They are only relevant for virtual reality, not augmented reality.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'Describe \'Persistent Cloud Anchors\' (e.g., Google Geospatial API) and their role in large-scale, shared AR experiences.',
    options: [
      'Persistent Cloud Anchors are only for indoor AR experiences.',
      'These technologies allow AR content to be placed and persistently experienced by multiple users in specific real-world geographical locations, enabling large-scale, location-based AR applications.',
      'They require users to manually input their exact coordinates.',
      'Persistent Cloud Anchors are primarily for single-user AR sessions.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'What are the challenges of \'Real-time Object Recognition and Tracking\' in dynamic AR environments?',
    options: [
      'Object recognition in AR is always perfectly accurate.',
      'Challenges include varying lighting, object deformation, occlusion, rapid movement, and distinguishing similar objects. Solutions involve robust computer vision algorithms and deep learning models.',
      'This technology is only used for static objects.',
      'It increases the realism of virtual objects without added complexity.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'Explain \'Foveated Rendering\' in AR headsets and its benefits for performance.',
    options: [
      'Foveated rendering renders the entire scene at the highest possible resolution.',
      'Foveated rendering renders the area where the user is looking (fovea) at high resolution, while peripheral areas are rendered at lower resolution, significantly reducing computational load and improving performance.',
      'Foveated rendering causes visual discomfort for users.',
      'It requires constant manual adjustment by the user.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'Discuss the \'Hardware Constraints\' and \'Power Management\' challenges for standalone AR headsets.',
    options: [
      'Standalone AR headsets have unlimited processing power and battery life.',
      'Challenges include balancing powerful computation with compact form factors, heat dissipation, and achieving sufficient battery life for prolonged use, requiring efficient processors and optimized components.',
      'Hardware constraints are irrelevant as AR development is purely software-based.',
      'Power management only affects the brightness of the display.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'What is \'Spatial Computing\' and how does AR fit into this broader paradigm?',
    options: [
      'Spatial computing is another term for traditional desktop computing.',
      'Spatial computing refers to human-computer interaction where the computer understands the physical world and digital objects can interact with it, with AR being a key technology that overlays digital information into real-world space.',
      'Spatial computing is only for designing 3D models.',
      'It removes the need for any physical interaction with computers.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'Describe \'AR Cloud\' and its vision for a persistent, collaborative, and globally mapped AR layer.',
    options: [
      'AR Cloud refers to storing AR apps in the cloud.',
      'AR Cloud envisions a persistent, shared, and spatially mapped digital twin of the real world stored in the cloud, enabling persistent AR content, large-scale collaborative experiences, and seamless AR across devices.',
      'AR Cloud is only for single-user experiences.',
      'It makes AR experiences less realistic.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'Explain the role of \'Artificial Intelligence (AI)\' and \'Machine Learning (ML)\' in advanced AR features.',
    options: [
      'AI/ML are not used in AR, which relies solely on computer vision.',
      'AI/ML enhance AR by enabling sophisticated scene understanding, real-time object recognition, gesture recognition, semantic mapping, and intelligent content placement and adaptation.',
      'AI/ML in AR primarily focuses on improving device battery life.',
      'They make AR experiences less dynamic and interactive.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'How do you approach \'Performance Optimization\' for AR applications, especially on mobile devices?',
    options: [
      'Performance optimization for AR is not necessary on modern mobile devices.',
      'Techniques include optimizing 3D models (poly count, textures), efficient rendering (occlusion culling, instancing), minimizing draw calls, efficient camera processing, and optimizing battery consumption.',
      'Performance optimization increases the file size of AR apps.',
      'It is solely dependent on the device\'s processing power.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'What are the challenges of \'Content Creation\' and \'Asset Management\' for photorealistic AR experiences?',
    options: [
      'AR content creation is as simple as creating 2D images.',
      'Challenges include creating high-fidelity 3D models, optimizing assets for real-time rendering on diverse devices, managing large asset libraries, and ensuring consistent visual quality across varied lighting conditions.',
      'Content creation for AR is always automated.',
      'Asset management is irrelevant for AR projects.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'Discuss \'Privacy-Preserving AR\' and techniques to mitigate data collection concerns.',
    options: [
      'Privacy is not a significant concern for AR as it only deals with virtual objects.',
      'Techniques include on-device processing of sensitive data (Edge AI), anonymization, federated learning for model training, and transparent user consent mechanisms to mitigate privacy concerns related to real-world scanning.',
      'Privacy-preserving AR makes experiences less immersive.',
      'It relies on storing all sensitive data in the cloud.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'Explain the concept of \'Mixed Reality (MR)\' and how it forms a broader spectrum including AR and VR.',
    options: [
      'Mixed Reality is simply another name for Virtual Reality.',
      'MR represents a continuum between pure physical reality and pure virtual reality, encompassing AR (more real than virtual) and VR (more virtual than real), allowing for interaction between real and virtual elements.',
      'MR requires completely separate hardware from AR and VR.',
      'It simplifies the development of virtual environments.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'What is \'ARKit Meshing\' or \'ARCore Depth API\' and their importance for realistic AR interaction?',
    options: [
      'These APIs only detect horizontal surfaces.',
      'These APIs enable AR systems to create a real-time 3D mesh (geometric understanding) of the environment, allowing virtual objects to realistically interact with and occlude behind real-world surfaces, improving immersion.',
      'They are only for static, predefined environments.',
      'These features increase the artificiality of AR scenes.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'ar-3',
    question: 'Describe \'Federated Learning\'s potential use in AR for collaborative model training without sharing raw data.',
    options: [
      'Federated learning in AR requires all user data to be sent to a central server.',
      'Federated learning allows AR devices to collaboratively train a shared machine learning model by exchanging only model updates (not raw data), enhancing privacy and enabling robust AR features from diverse user data.',
      'Federated learning only applies to text-based AI models.',
      'It increases the computational burden on the central server.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'augmented-reality'
  },
  {
    id: 'vr-1',
    question: 'What is the primary goal of Virtual Reality (VR)?',
    options: [
      'To overlay digital information onto the real world.',
      'To create a simulated, immersive experience that replaces the real world.',
      'To combine real and virtual elements seamlessly.',
      'To display 2D videos on a screen.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'Which device is essential for experiencing high-quality VR immersion?',
    options: [
      'A standard monitor',
      'A VR headset',
      'A printer',
      'A smartphone without a headset'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'What does \'immersion\' refer to in VR?',
    options: [
      'The process of learning about VR.',
      'The perception of being physically present in a non-physical world created by VR technology.',
      'The ability of VR to display images quickly.',
      'The act of setting up VR equipment.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'Which of the following is NOT a common component of a VR headset?',
    options: [
      'Display Screens',
      'Lenses',
      'Input Controllers',
      'Physical Keyboard'
    ],
    correctAnswer: 3,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'What is a \'360-degree video\' in VR context?',
    options: [
      'A standard video that can be zoomed in.',
      'A video where the viewer can look in any direction within a spherical view, giving a sense of being in the recorded scene.',
      'A video that plays in a loop.',
      'A video with 3D effects but fixed perspective.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'Which type of VR system offers the highest level of immersion?',
    options: [
      'Non-Immersive (e.g., desktop VR)',
      'Semi-Immersive (e.g., flight simulators)',
      'Fully Immersive (e.g., room-scale VR with HMD)',
      'Mobile VR (e.g., Google Cardboard)'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'What is \'motion sickness\' (cybersickness) in VR caused by?',
    options: [
      'Poor graphics quality.',
      'A mismatch between visual motion in VR and physical motion perceived by the inner ear.',
      'Too much physical movement by the user.',
      'Loud audio in the VR experience.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'Which input method is commonly used to interact with virtual objects in VR?',
    options: [
      'Mouse and Keyboard',
      'Handheld Controllers',
      'Stylus Pen',
      'Touchpad on a laptop'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'What does \'Field of View (FoV)\' refer to in VR headsets?',
    options: [
      'The number of pixels on the screen.',
      'The extent of the observable world seen at any given moment through the headset lenses.',
      'The distance between the user\'s eyes and the lenses.',
      'The refresh rate of the display.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'Which industry widely uses VR for training simulations (e.g., flight, surgery)?',
    options: [
      'Fashion',
      'Education and Healthcare',
      'Agriculture',
      'Traditional Publishing'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'What is \'latency\' in VR, and why is low latency important?',
    options: [
      'The time it takes for a VR headset to charge.',
      'The delay between a user\'s physical movement and the corresponding visual update in the VR environment; low latency is crucial to prevent motion sickness and maintain immersion.',
      'The time it takes to download VR content.',
      'The refresh rate of the display.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'Which of these is a popular consumer VR headset?',
    options: [
      'Google Cardboard',
      'Oculus Quest (Meta Quest)',
      'PlayStation 5',
      'Nintendo Switch'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'What is \'Presence\' in VR?',
    options: [
      'The ability of a VR system to track hand movements.',
      'The subjective sensation of being in the virtual environment, rather than where one\'s physical body is actually located.',
      'The number of active users in a VR application.',
      'The physical size of the VR headset.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'What does \'3DoF\' (Three Degrees of Freedom) tracking mean in VR?',
    options: [
      'Tracking of position (X, Y, Z coordinates) only.',
      'Tracking of rotational movements (pitch, yaw, roll) only.',
      'Tracking of both position and rotation.',
      'Tracking of eye movements only.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-1',
    question: 'Which term describes an object or character that represents a user in a virtual world?',
    options: [
      'Robot',
      'Avatar',
      'Sensor',
      'Controller'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'virtual-reality'
  },

  {
    id: 'vr-2',
    question: 'Explain the difference between \'Inside-Out Tracking\' and \'Outside-In Tracking\' for VR headsets.',
    options: [
      'Inside-Out uses external sensors; Outside-In uses internal cameras.',
      'Inside-Out tracking uses cameras/sensors on the headset to track its position relative to the environment; Outside-In tracking uses external sensors in the room to track the headset\'s position.',
      'Inside-Out is only for stationary VR; Outside-In is for room-scale.',
      'They are interchangeable terms with no functional difference.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'Describe \'Room-Scale VR\' and its importance for immersive experiences.',
    options: [
      'Room-scale VR means the user is stationary while experiencing VR.',
      'Room-scale VR allows users to physically move around in a designated physical space while wearing a VR headset, with their movements tracked and replicated in the virtual world, greatly enhancing immersion and reducing motion sickness.',
      'Room-scale VR is only for small, contained virtual environments.',
      'It eliminates the need for any tracking sensors.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'What is \'Haptic Feedback\' in VR and how does it enhance immersion?',
    options: [
      'Haptic feedback provides only visual cues.',
      'Haptic feedback provides tactile sensations (e.g., vibrations, force feedback) to the user through controllers or specialized suits, enhancing the realism of virtual object interaction and immersion.',
      'Haptic feedback is only for auditory elements in VR.',
      'It increases the computational load on the VR headset.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'Explain common \'Locomotion Techniques\' in VR (e.g., teleportation, smooth locomotion) and their impact on motion sickness.',
    options: [
      'All locomotion techniques cause severe motion sickness.',
      'Techniques like teleportation (instant movement) reduce motion sickness, while smooth locomotion (continuous movement) can induce it in some users by creating a visual-vestibular mismatch.',
      'Locomotion techniques are only for navigating physical spaces.',
      'They are only used in non-immersive VR experiences.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'What is \'Foveated Rendering\' in VR headsets and its benefits for performance?',
    options: [
      'Foveated rendering renders the entire scene at the highest possible resolution.',
      'Foveated rendering uses eye-tracking to render the area where the user is looking (fovea) at high resolution, while peripheral areas are rendered at lower resolution, significantly reducing computational load and improving performance.',
      'Foveated rendering causes visual discomfort for users.',
      'It requires constant manual adjustment by the user.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'Describe \'VR Sickness Mitigation Strategies\' (e.g., comfort modes, fixed reference points).',
    options: [
      'VR sickness cannot be mitigated once it occurs.',
      'Strategies include providing comfort options (e.g., snap turning, vignette), fixed visual reference points (e.g., cockpit), reducing acceleration, and educating users on best practices (e.g., taking breaks).',
      'Mitigation strategies only apply to hardware, not software.',
      'They always require expensive additional equipment.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'What is the role of \'Game Engines\' (e.g., Unity, Unreal Engine) in VR development?',
    options: [
      'Game engines are only for creating 2D games.',
      'Game engines provide integrated development environments, tools for 3D content creation, physics engines, rendering pipelines, and VR SDK integrations crucial for building immersive VR experiences.',
      'Game engines are irrelevant for VR application development.',
      'They primarily manage physical hardware components of VR headsets.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'Explain \'Presence vs. Immersion\' in VR.',
    options: [
      'Presence and Immersion are interchangeable terms.',
      'Immersion is the objective technological capability of a VR system to surround a user (e.g., FoV, tracking accuracy); Presence is the subjective psychological feeling of being \"there\" in the virtual environment.',
      'Presence is purely a visual phenomenon, while immersion includes all senses.',
      'They are concepts only relevant to AR, not VR.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'What are the main \'challenges in VR content creation\' compared to traditional 2D content?',
    options: [
      'VR content creation is simpler and less resource-intensive.',
      'Challenges include optimizing 3D models for real-time rendering, managing performance for high frame rates, designing intuitive 3D UI/UX, and ensuring user comfort to prevent cybersickness.',
      'VR content does not require 3D modeling skills.',
      'The main challenge is distribution to app stores.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'Describe \'Social VR Platforms\' (e.g., VRChat, Horizon Worlds) and their potential.',
    options: [
      'Social VR platforms are only for single-player gaming.',
      'Platforms that allow users to meet, interact, and participate in activities together in shared virtual spaces through customizable avatars, offering new forms of social interaction and community building.',
      'Social VR platforms do not support voice communication.',
      'They are limited to pre-defined, non-interactive environments.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'What is \'Passthrough VR\' and its typical use cases?',
    options: [
      'Passthrough VR means physically removing the headset to see the real world.',
      'Passthrough VR uses cameras on the headset to show the real-world environment to the user, allowing them to interact with physical objects or navigate their surroundings while remaining in a VR experience.',
      'Passthrough VR is exclusively for fully immersive experiences.',
      'It has no practical use beyond simple video passthrough.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'Explain the concept of \'Interpupillary Distance (IPD)\' in VR headsets and its importance.',
    options: [
      'IPD refers to the distance between the user\'s eyes and the headset lenses.',
      'IPD is the distance between the centers of a user\'s pupils. Correctly adjusting IPD is crucial for visual comfort, reducing eye strain, and ensuring a clear, non-blurry image in VR.',
      'IPD only affects audio quality in VR.',
      'IPD is a fixed value for all VR users.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'What is \'6DoF\' (Six Degrees of Freedom) tracking in VR?',
    options: [
      'Tracking of rotational movements only (pitch, yaw, roll).',
      'Tracking of both rotational (pitch, yaw, roll) and positional (X, Y, Z coordinates) movements, allowing users to move and lean in a physical space within VR.',
      'Tracking of only horizontal movement.',
      'Tracking of eye movements and facial expressions.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'Describe the role of \'VR SDKs\' (Software Development Kits) from platforms like Oculus, SteamVR, or PlayStation VR.',
    options: [
      'VR SDKs are physical VR accessories.',
      'VR SDKs provide software libraries, tools, and documentation that allow developers to create VR applications compatible with specific hardware platforms, handling rendering, input, and tracking.',
      'VR SDKs are only for creating hardware components.',
      'They are used to convert 2D games to VR automatically.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-2',
    question: 'What is \'Telepresence\' and how is VR enabling its advancement?',
    options: [
      'Telepresence is only for video conferencing on flat screens.',
      'Telepresence is the sensation of being physically present at a remote location through technology. VR enhances it by providing immersive visual, auditory, and often haptic feedback, making remote interaction feel more natural.',
      'Telepresence reduces the need for any communication technology.',
      'It only applies to robots, not humans.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'virtual-reality'
  },

  {
    id: 'vr-3',
    question: 'Discuss the concept of \'Visual Turing Test\' in VR and its implications for realistic immersion.',
    options: [
      'The Visual Turing Test evaluates a VR system\'s ability to track eye movements.',
      'The Visual Turing Test refers to a hypothetical scenario where a user cannot distinguish between a virtual environment and real reality, indicating ultimate immersion and photorealism, posing significant rendering and sensory challenges.',
      'It is a test to determine if a user can program in VR.',
      'The Visual Turing Test is only relevant for non-immersive VR systems.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'Explain \'Full-Body Tracking\' in VR and its advanced applications beyond basic controller tracking.',
    options: [
      'Full-body tracking relies only on a VR headset\'s built-in sensors.',
      'Full-body tracking uses additional sensors (e.g., Vive Trackers, mocap suits) to capture the movement of limbs and torso, enabling realistic avatar movement, full-body interaction, and applications in fitness, social VR, and training.',
      'Full-body tracking is only for very simple, static VR experiences.',
      'It increases motion sickness in users.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'Describe \'Varifocal and Lightfield Displays\' for VR headsets and their potential to solve the \'vergence-accommodation conflict\'.',
    options: [
      'These displays increase the vergence-accommodation conflict.',
      'These advanced display technologies aim to reduce eye strain and increase realism by dynamically adjusting focus based on virtual object distance (varifocal) or by projecting light rays directly (lightfield), mimicking natural human vision.',
      'These displays are already standard in all consumer VR headsets.',
      'They are only for displaying static 2D images in VR.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'What are the challenges of \'Social VR\' in terms of user experience, privacy, and moderation?',
    options: [
      'Social VR platforms have no unique challenges compared to 2D social media.',
      'Challenges include maintaining user presence, managing diverse user interactions, ensuring privacy of personal data/avatars, combating harassment/toxic behavior, and scalable content moderation in immersive spaces.',
      'Social VR automatically handles all moderation tasks without human input.',
      'Privacy is irrelevant in shared virtual environments.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'Explain \'Neuro-VR Interfaces\' (Brain-Computer Interfaces - BCIs) and their future role in VR interaction.',
    options: [
      'Neuro-VR interfaces are only for controlling VR game characters remotely.',
      'BCIs allow users to control VR environments or applications directly with their thoughts or brain signals, offering a hands-free, intuitive form of interaction with potential applications in accessibility and advanced control.',
      'BCIs are a purely theoretical concept with no practical application in VR.',
      'They require users to undergo invasive surgery.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'Discuss \'Procedural Content Generation\' in VR and its benefits for creating vast virtual worlds.',
    options: [
      'Procedural content generation only creates repetitive and uninteresting VR environments.',
      'It uses algorithms to automatically generate VR environments, objects, and experiences rather than manual creation, enabling the rapid creation of vast, diverse, and dynamic virtual worlds that would be impossible to build by hand.',
      'Procedural content generation is only for generating 2D images.',
      'It increases the manual effort required for VR world design.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'What are the ethical considerations related to \'Data Privacy\' and \'Emotional Manipulation\' in VR?',
    options: [
      'VR does not collect data that raises privacy concerns.',
      'Ethical concerns include collection of biometric and highly personal data (e.g., eye tracking, emotional responses), potential for targeted manipulation through immersive experiences, and lack of transparency in data usage.',
      'Emotional manipulation is not possible in VR.',
      'Data privacy in VR is entirely covered by existing regulations for websites.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'Describe \'Cloud VR\' and its advantages/disadvantages for high-fidelity VR streaming.',
    options: [
      'Cloud VR requires powerful local VR hardware for rendering.',
      'Cloud VR renders VR experiences on remote servers and streams them to lightweight headsets, reducing local hardware requirements and enabling higher fidelity, but relies heavily on network bandwidth and introduces latency challenges.',
      'Cloud VR is only for non-immersive experiences.',
      'It eliminates all forms of latency in VR.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'Explain \'Subliminal Effects\' and \'Priming\' in VR and their potential for persuasive technology.',
    options: [
      'Subliminal effects and priming are irrelevant in VR as users are fully aware of their surroundings.',
      'VR can subtly influence user perceptions and behaviors through subliminal cues or by exposing them to specific stimuli that prime certain responses, raising ethical questions about persuasive design and manipulation.',
      'These techniques only work in traditional 2D media.',
      'They make VR experiences less engaging.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'How does \'Eye Tracking\' contribute to \'Gaze-Based Interaction\' and \'Foveated Rendering\' in VR?',
    options: [
      'Eye tracking is only for diagnostic purposes in VR headsets.',
      'Eye tracking enables users to interact with virtual objects by simply looking at them (gaze-based interaction) and allows foveated rendering, where only the area of focus is rendered at high resolution, optimizing performance.',
      'Gaze-based interaction is always less intuitive than controller-based.',
      'Foveated rendering renders the entire scene at uniform quality.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'What are the implications of \'XR (Extended Reality)\' on the future of computing and human-computer interaction?',
    options: [
      'XR will only be a niche technology for gaming.',
      'XR, encompassing VR, AR, and MR, is poised to reshape computing by blending digital and physical realities, offering new paradigms for work, education, entertainment, and social interaction, moving beyond flat screens.',
      'XR will lead to less human interaction and more isolation.',
      'It will primarily be used for data analysis.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'Describe \'VR Locomotion Research\' (e.g., Redirected Walking, Omnidirectional Treadmills) to solve the physical space limitation.',
    options: [
      'VR locomotion research focuses only on seated experiences.',
      'Research explores techniques like subtly manipulating perception to make users walk in circles while thinking they are walking straight (redirected walking) or using specialized treadmills to allow infinite virtual movement in a small physical space.',
      'These methods increase motion sickness.',
      'They are only for very simple VR simulations.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'What is \'Photogrammetry\' and \'LiDAR Scanning\' and their use in creating realistic VR environments?',
    options: [
      'These technologies are only for generating cartoon-like VR content.',
      'Photogrammetry creates 3D models from 2D photos; LiDAR scanning uses laser light to capture depth and geometry. Both are used to generate highly realistic, real-world-based VR environments and objects.',
      'These methods are too slow for real-time VR environment creation.',
      'They only apply to abstract virtual spaces.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'Explain the concept of \'Avatar Realism\' in social VR and its challenges.',
    options: [
      'Avatar realism refers only to the ability to customize clothing.',
      'Avatar realism aims to make virtual avatars look and behave more like their real-world counterparts, which is challenging due to facial animation, realistic body movement (full-body tracking), and computational demands.',
      'Avatar realism is not important for social VR engagement.',
      'It is easily achieved with basic 3D modeling skills.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'vr-3',
    question: 'Discuss \'VR Standards and Interoperability\' (e.g., OpenXR, WebXR) and their importance for the VR ecosystem.',
    options: [
      'VR standards limit innovation and creativity.',
      'These standards aim to create common APIs and frameworks for VR hardware and software, promoting interoperability, reducing fragmentation, and enabling developers to build applications that run across diverse VR platforms.',
      'VR standards are irrelevant for consumer VR experiences.',
      'They only apply to proprietary VR systems.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'virtual-reality'
  },
  {
    id: 'game-1',
    question: 'What is the first step in creating a game?',
    options: [
      'Writing all the code immediately.',
      'Developing the game concept and design document.',
      'Drawing all the art assets.',
      'Publishing the game to a store.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'Which of the following is a popular game engine for beginners?',
    options: [
      'Custom C++ Engine',
      'Unity',
      'Assembly Language Editor',
      'Microsoft Word'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'What does \'FPS\' commonly stand for in gaming?',
    options: [
      'Fast Processing System',
      'Frames Per Second',
      'First Person Shooter',
      'File Protection Software'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'What is a \'sprite\' in 2D game development?',
    options: [
      'A type of sound effect.',
      'A 2D image or animation used as a character, object, or background element.',
      'A programming function.',
      'A type of game console.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'Which programming language is widely used for scripting in Unity?',
    options: [
      'Python',
      'Java',
      'C#',
      'HTML'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'What is the purpose of \'playtesting\'?',
    options: [
      'To only test the game\'s graphics.',
      'To have users play the game to identify bugs, balance issues, and usability problems.',
      'To write game music.',
      'To design game levels.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'What is \'game logic\'?',
    options: [
      'The visual style of the game.',
      'The underlying rules, systems, and behaviors that define how the game operates and responds to player input.',
      'The story of the game.',
      'The sound effects and music.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'Which of these is considered a \'game asset\'?',
    options: [
      'A game console',
      'A programming language',
      'A 3D model of a character',
      'A game design document'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'What is the \'User Interface (UI)\' in a game?',
    options: [
      'The background story of the game.',
      'The elements through which a player interacts with the game, such as menus, buttons, and heads-up displays (HUDs).',
      'The AI behavior of non-player characters.',
      'The game\'s physics engine.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'What is \'version control\' (e.g., Git) used for in game development?',
    options: [
      'To manually draw game characters.',
      'To track changes in source code, allow collaboration among developers, and revert to previous versions.',
      'To manage game music files only.',
      'To compile game code into an executable.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'What is \'collision detection\' in game physics?',
    options: [
      'Detecting when a game crashes.',
      'Determining when two or more objects in a game world intersect or touch each other.',
      'Detecting player input.',
      'Detecting network latency.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'What is a \'level editor\'?',
    options: [
      'A tool for editing game characters.',
      'A software tool used by game designers to create and arrange game levels or environments.',
      'A program for debugging game code.',
      'A tool for optimizing game performance.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'Which concept describes how game elements or characters behave in response to forces like gravity or impacts?',
    options: [
      'Game Art',
      'Game Story',
      'Game Physics',
      'Game Music'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'What is an \'animation\' in games?',
    options: [
      'A static image in the game.',
      'A sequence of images or frames that creates the illusion of movement for characters or objects.',
      'A type of sound effect.',
      'A line of code in the game logic.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'game-development'
  },
  {
    id: 'game-1',
    question: 'What is the purpose of a \'shader\' in game graphics?',
    options: [
      'To control game audio.',
      'To calculate the final color, light, and surface properties of pixels or vertices on screen, determining how objects look.',
      'To manage player input.',
      'To generate random numbers for game events.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'game-development'
  },

  {
    id: 'game-2',
    question: 'Explain the difference between \'Rigid Body Dynamics\' and \'Soft Body Dynamics\' in game physics.',
    options: [
      'Rigid body dynamics simulates deformable objects; soft body dynamics simulates solid objects.',
      'Rigid body dynamics simulates the motion of solid, non-deformable objects; soft body dynamics simulates the behavior of deformable objects like cloth or jelly.',
      'Rigid body dynamics is for 2D games; soft body dynamics is for 3D games.',
      'There is no practical difference in their application.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'Describe \'Level of Detail (LOD)\' optimization in game development.',
    options: [
      'Creating highly detailed models for all distances.',
      'Using different versions of a 3D model with varying levels of detail (polygons, textures) that swap out based on distance from the camera, optimizing performance.',
      'LOD is only for 2D games.',
      'LOD increases the memory usage of game assets.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'What is \'Pathfinding\' in Game AI?',
    options: [
      'The process of drawing paths on a map.',
      'The process by which an AI-controlled character finds a route between two points while avoiding obstacles in a game environment.',
      'A method for generating random levels.',
      'A technique for creating realistic character animations.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'Explain \'Input Lag\' in games and how it affects player experience.',
    options: [
      'Input lag makes the game run faster.',
      'Input lag is the delay between a player\'s input (e.g., pressing a button) and the corresponding action appearing on screen, negatively impacting responsiveness and player control.',
      'Input lag is only a problem in single-player games.',
      'It is always caused by slow internet connection.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'What is \'Texture Mapping\' in 3D graphics?',
    options: [
      'Creating a 3D model from scratch.',
      'Applying a 2D image (texture) onto the surface of a 3D model to add color, detail, and surface properties.',
      'Drawing lines and shapes in a 3D scene.',
      'Animating a 3D character.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'Describe \'Occlusion Culling\' optimization technique.',
    options: [
      'Rendering all objects in a scene regardless of visibility.',
      'A rendering optimization technique that prevents rendering of objects that are hidden from the camera by other objects, reducing the amount of geometry processed.',
      'Occlusion culling is only for 2D games.',
      'It increases the visual complexity of a scene.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'What are \'Particle Systems\' used for in game development?',
    options: [
      'To manage network connections.',
      'To create visual effects like explosions, fire, smoke, water, and magic spells by simulating a large number of small, animated particles.',
      'To generate random numbers for game events.',
      'To control character movement.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'What is \'AI Navigation Mesh (NavMesh)\'?',
    options: [
      'A type of physical network for game consoles.',
      'A data structure used by game AI for pathfinding, representing walkable areas in a game world as a simplified mesh.',
      'A tool for creating 3D models of environments.',
      'A method for creating realistic water simulations.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'Explain \'Interpolation\' in game animation and physics.',
    options: [
      'Interpolation creates sudden, jerky movements.',
      'Interpolation is the process of estimating intermediate values between known data points, used to create smooth transitions in animation (e.g., between keyframes) or to smooth physics simulations.',
      'Interpolation is only for game audio.',
      'It increases the amount of data needed for animation.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'What is \'Procedural Generation\' in game development?',
    options: [
      'Manually designing every detail of a game world.',
      'Algorithms that create game content (levels, textures, quests, etc.) automatically, rather than being manually created by developers, for increased variety and replayability.',
      'A method for optimizing game performance by reducing asset quality.',
      'A technique for debugging game code.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'What is \'PBR\' (Physically-Based Rendering) and its impact on game graphics?',
    options: [
      'PBR is a rendering technique that makes graphics look less realistic.',
      'PBR is a rendering technique that simulates the way light interacts with real-world materials more accurately, resulting in more consistent and realistic-looking graphics under various lighting conditions.',
      'PBR is only for 2D games.',
      'PBR simplifies the process of creating game animations.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'Describe \'Garbage Collection\' in game engines (e.g., Unity/C#) and its performance implications.',
    options: [
      'Garbage collection increases memory leaks.',
      'Automatic memory management where the system reclaims memory that is no longer being used by the program, but can cause performance spikes (stutters) if not managed efficiently.',
      'Garbage collection is a manual process.',
      'It only applies to game AI logic.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'What is a \'Game Design Document (GDD)\' and its importance?',
    options: [
      'A legal document for game publishing.',
      'A highly detailed blueprint of the game\'s concept, mechanics, story, art style, and technical requirements, serving as a guide for the development team.',
      'A marketing brochure for the game.',
      'A simple list of game features.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'Explain \'Deferred Shading\' as a rendering technique.',
    options: [
      'Deferred shading performs lighting calculations early in the rendering pipeline.',
      'Deferred shading separates the rendering process into multiple passes: first rendering geometry and material properties to an intermediate buffer, then applying lighting in a separate pass, efficient for many lights.',
      'Deferred shading is only for 2D games.',
      'It always requires less memory than forward rendering.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },
  {
    id: 'game-2',
    question: 'What is \'Asset Bundling\' in game development?',
    options: [
      'Manually organizing all game assets into folders.',
      'Packaging game assets (e.g., models, textures, audio) into compressed files that can be loaded on demand, optimizing memory usage and reducing initial load times.',
      'Asset bundling encrypts all game files.',
      'It is only used for debugging purposes.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'game-development'
  },

  {
    id: 'game-3',
    question: 'Discuss \'Global Illumination (GI)\' techniques (e.g., Lightmaps, Voxel GI, Ray Tracing) and their impact on lighting realism.',
    options: [
      'Global Illumination only simulates direct light sources.',
      'GI techniques simulate how light bounces and interacts within a scene, creating more realistic and subtle lighting effects like color bleeding, indirect shadows, and ambient occlusion, significantly enhancing visual fidelity.',
      'GI is only used for pre-rendered cinematics, not real-time games.',
      'It simplifies the lighting setup process in games.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'Explain \'Network Architecture Models\' for multiplayer games (e.g., Client-Server, Peer-to-Peer, Dedicated Server).',
    options: [
      'All multiplayer games use the same network architecture model.',
      'Client-server uses a central server; Peer-to-peer connects players directly; Dedicated server uses a persistent server. Each has trade-offs in latency, cheating prevention, and scalability.',
      'Network architecture only affects game graphics.',
      'These models are only for single-player games.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'Describe \'Behavior Trees\' and \'State Machines\' in Game AI, highlighting their use cases and differences.',
    options: [
      'Behavior Trees and State Machines are interchangeable.',
      'State Machines define AI behavior as a set of states and transitions; Behavior Trees provide a hierarchical, modular way to compose complex AI behaviors as a tree of nodes, often more flexible for complex NPCs.',
      'Both are only used for very simple AI agents.',
      'Neither is suitable for real-time game AI.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'What are the challenges of \'Real-time Ray Tracing\' in games and how is it being overcome?',
    options: [
      'Real-time ray tracing is already standard in all modern games.',
      'Challenges include high computational cost for complex scenes. Overcome by hardware acceleration (RT Cores), denoising algorithms, and hybrid rendering approaches that combine ray tracing with rasterization.',
      'Ray tracing only affects game audio.',
      'It makes game environments less realistic.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'Explain \'Data-Oriented Design (DOD)\' and its benefits for game performance.',
    options: [
      'DOD focuses on object-oriented programming for game logic.',
      'DOD organizes data based on how it will be processed by the CPU cache, minimizing cache misses and improving performance, especially for games with many similar entities.',
      'DOD increases memory usage and makes code harder to write.',
      'It is only relevant for graphics rendering, not game logic.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'Discuss \'Anti-Cheating Strategies\' in online multiplayer games (e.g., Anti-Cheat Software, Server-Side Validation, Obfuscation).',
    options: [
      'Anti-cheating measures are unnecessary in most online games.',
      'Strategies include client-side anti-cheat software, validating critical game logic and player actions on the server to prevent client-side manipulation, and obfuscating game code to make reverse engineering harder.',
      'Anti-cheat software always guarantees a cheat-free environment.',
      'Implementing anti-cheating measures has no impact on game performance.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'What is \'Asynchronous Loading\' in games and why is it important?',
    options: [
      'Asynchronous loading means loading all game assets at once.',
      'Asynchronous loading allows game assets (e.g., levels, textures) to be loaded in the background without freezing the main game thread, preventing hitches and improving perceived performance during gameplay.',
      'Asynchronous loading is only for static images.',
      'It increases the game\'s initial load time.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'Describe \'Ragdoll Physics\' and \'Inverse Kinematics (IK)\' for character animation.',
    options: [
      'Ragdoll physics and IK are methods for creating static poses.',
      'Ragdoll physics simulates realistic body collapses by treating character limbs as independent rigid bodies; IK calculates joint angles to achieve a desired end-effector position, used for natural character interactions.',
      'Both are only used for non-player characters.',
      'They increase the manual effort for animators.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'Explain \'Determinism\' in networked multiplayer games and its challenges.',
    options: [
      'Determinism means game states can vary wildly across clients.',
      'Determinism ensures that all clients compute the exact same game state given the same inputs, crucial for consistent gameplay and cheat prevention, but challenging due to floating-point precision, timing, and platform differences.',
      'Determinism is only relevant for single-player games.',
      'It simplifies the process of network synchronization.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'What are \'Shaders\' (Vertex, Fragment, Compute) and their role in advanced rendering pipelines?',
    options: [
      'Shaders only control game audio.',
      'Shaders are small programs that run on the GPU, dictating how vertices and pixels are processed to calculate lighting, textures, and effects, forming the core of modern rendering pipelines.',
      'Shaders are primarily for physics simulations.',
      'They increase the number of draw calls in a scene.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'How do \'Level Streaming\' and \'World Composition\' optimize open-world games?',
    options: [
      'These techniques load the entire open world into memory at once.',
      'Level streaming loads/unloads portions of the game world dynamically as the player moves, while world composition allows creation of massive worlds from smaller, stitched-together levels, optimizing memory and performance.',
      'They increase loading times in open-world games.',
      'They are only for static, non-interactive environments.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'What is \'AI Behavior Trees\' and their advantage over traditional State Machines for complex NPC logic?',
    options: [
      'AI Behavior Trees are less modular than State Machines.',
      'Behavior Trees offer a hierarchical, modular, and more readable way to structure complex AI logic, making it easier to manage and extend NPC behaviors compared to the potentially tangled transitions of large State Machines.',
      'Behavior Trees are only for simple AI.',
      'They require more complex programming than State Machines.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'Discuss \'Post-Processing Effects\' (e.g., Bloom, Depth of Field, Motion Blur) and their role in visual fidelity.',
    options: [
      'Post-processing effects are applied before rendering the scene.',
      'Post-processing effects are full-screen image manipulation techniques applied after the entire scene has been rendered, used to enhance visual fidelity, artistic style, and realism (e.g., atmospheric effects, cinematic looks).',
      'Post-processing effects always reduce game performance significantly.',
      'They are only for debugging graphical issues.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'Explain \'Netcode\' concepts like \'Lag Compensation\' and \'Client-Side Prediction\' in multiplayer games.',
    options: [
      'Lag compensation and client-side prediction increase network latency.',
      'Lag compensation accounts for network delay by letting the server rollback time to process actions at the time they occurred on the client; Client-side prediction allows the client to immediately simulate actions to reduce perceived lag.',
      'These concepts are only for single-player games.',
      'They make games less fair for players with high ping.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'game-3',
    question: 'What are the challenges of \'Cross-Platform Development\' for games (e.g., performance, input, UI adaptation)?',
    options: [
      'Cross-platform development simplifies all aspects of game creation.',
      'Challenges include optimizing performance for diverse hardware, adapting input methods (controller, touch, keyboard), scaling UI for different screen sizes/resolutions, and ensuring consistent player experience across platforms.',
      'Cross-platform development limits the potential audience for a game.',
      'It eliminates the need for any platform-specific testing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'game-development'
  },
  {
    id: 'marketing-1',
    question: 'What is the primary goal of Search Engine Optimization (SEO)?',
    options: [
      'To design website graphics.',
      'To increase a website\'s visibility and ranking in search engine results.',
      'To create social media posts.',
      'To send marketing emails.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'Which of the following is a common channel in Digital Marketing?',
    options: [
      'Newspaper Advertising',
      'Television Commercials',
      'Social Media Marketing',
      'Radio Broadcasts'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'What does \'PPC\' stand for in digital advertising?',
    options: [
      'Page Per Click',
      'Pay Per Cost',
      'Pay Per Click',
      'Price Per Conversion'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'What is a \'keyword\' in the context of SEO?',
    options: [
      'A programming language.',
      'Terms or phrases that people type into search engines to find information, products, or services.',
      'A type of website design.',
      'A social media hashtag only.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'Which social media platform is primarily used for professional networking?',
    options: [
      'TikTok',
      'Instagram',
      'LinkedIn',
      'Facebook'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'What is \'Content Marketing\'?',
    options: [
      'Only creating advertisements.',
      'Creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience.',
      'Selling products directly through social media.',
      'Paying influencers to promote products.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'What is a \'Call to Action (CTA)\' in digital marketing?',
    options: [
      'A legal warning to customers.',
      'An instruction to the audience to provoke an immediate response, such as \'Buy Now\' or \'Sign Up\'.',
      'A detailed report on campaign performance.',
      'A method for tracking website visitors.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'What is the purpose of \'Email Marketing\'?',
    options: [
      'To send spam to customers.',
      'To build relationships with customers, promote products/services, and drive sales through email communication.',
      'To create website content.',
      'To manage customer support inquiries.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'Which metric measures the number of times an ad or content is displayed?',
    options: [
      'Click-Through Rate (CTR)',
      'Conversion Rate',
      'Impressions',
      'Engagement Rate'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'What is a \'landing page\' in digital marketing?',
    options: [
      'The homepage of a website.',
      'A standalone web page created specifically for a marketing or advertising campaign, designed to capture leads or drive a specific action.',
      'A page showing search engine results.',
      'A page where users log in to an account.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'What is \'Google Analytics\' primarily used for?',
    options: [
      'To create websites.',
      'To track and report website traffic, user behavior, and conversion goals.',
      'To manage email campaigns.',
      'To create social media ads.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'Which term refers to optimizing a website for mobile devices?',
    options: [
      'Desktop Optimization',
      'Mobile Responsiveness',
      'App Development',
      'Print Layout'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'What is \'Influencer Marketing\'?',
    options: [
      'Marketing campaigns run by large corporations only.',
      'Partnering with individuals who have a dedicated social following and credibility to promote products or services.',
      'Creating viral videos with no human involvement.',
      'Using traditional advertising methods only.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'What is the primary difference between \'organic\' and \'paid\' search results?',
    options: [
      'Organic results are always at the top; paid results are at the bottom.',
      'Organic results are earned based on SEO efforts; paid results are advertisements that businesses pay for.',
      'Organic results are only for local businesses.',
      'Paid results are not relevant to user searches.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-1',
    question: 'What does \'CTR\' stand for in digital marketing metrics?',
    options: [
      'Content Traffic Ratio',
      'Cost-Through Rate',
      'Click-Through Ratio',
      'Customer Trend Report'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'digital-marketing'
  },

  {
    id: 'marketing-2',
    question: 'Explain the difference between \'On-Page SEO\' and \'Off-Page SEO\'.',
    options: [
      'On-Page SEO focuses on social media; Off-Page SEO focuses on website content.',
      'On-Page SEO optimizes elements on a website (e.g., keywords, meta tags); Off-Page SEO optimizes external signals (e.g., backlinks, social signals).',
      'On-Page SEO is only for e-commerce sites; Off-Page SEO is for blogs.',
      'There is no distinction, they are the same thing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'What is \'Remarketing\' (or Retargeting) in digital advertising?',
    options: [
      'Advertising to new customers only.',
      'Showing ads to users who have previously interacted with your website or app but did not convert.',
      'Marketing products through word-of-mouth.',
      'Sending marketing emails to a general list.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'Describe \'Conversion Rate Optimization (CRO)\' and its key goals.',
    options: [
      'CRO focuses on increasing website traffic only.',
      'CRO is the systematic process of increasing the percentage of website visitors who complete a desired goal (e.g., purchase, form submission), by improving user experience and persuasiveness.',
      'CRO only applies to physical stores.',
      'CRO is about reducing the number of website visitors.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'What is a \'Customer Journey Map\' and its purpose in digital marketing?',
    options: [
      'A map showing physical store locations.',
      'A visual representation of the entire process a customer goes through when interacting with a company, from initial awareness to conversion and beyond, to identify pain points and opportunities.',
      'A list of all customer names and addresses.',
      'A financial report on customer spending.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'Explain \'A/B Testing\' in digital marketing and its benefit.',
    options: [
      'A/B testing involves testing only one version of an advertisement.',
      'A/B testing compares two versions (A and B) of a webpage, email, or ad to see which one performs better in achieving a specific goal, allowing for data-driven optimization.',
      'A/B testing is only for website design.',
      'It complicates the process of making marketing decisions.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'What is \'Marketing Automation\' and its advantages?',
    options: [
      'Manually sending all marketing messages.',
      'Using software to automate repetitive marketing tasks (e.g., email sends, social media posts, lead nurturing) to improve efficiency and personalize customer experiences at scale.',
      'Marketing automation reduces personalized customer interactions.',
      'It is only suitable for very small businesses.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'Describe the importance of \'Mobile-First Indexing\' for SEO.',
    options: [
      'Mobile-first indexing means Google only indexes mobile apps.',
      'Google primarily uses the mobile version of a website for indexing and ranking, meaning optimizing for mobile is crucial for search visibility, even for desktop users.',
      'Mobile-first indexing is only relevant for mobile-only websites.',
      'It has no impact on desktop search rankings.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'What is \'Customer Relationship Management (CRM)\' software used for in digital marketing?',
    options: [
      'To manage website content.',
      'To manage and analyze customer interactions and data throughout the customer lifecycle, aiming to improve business relationships with customers and assist in customer retention.',
      'To create graphic designs for marketing campaigns.',
      'To automate social media posting.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'Explain \'Attribution Models\' in digital marketing analytics.',
    options: [
      'Attribution models are only for financial accounting.',
      'Attribution models define how credit for a conversion is assigned across different touchpoints in the customer journey (e.g., first-click, last-click, linear, time decay), helping understand channel effectiveness.',
      'Attribution models provide a single, undisputed truth about channel performance.',
      'They only track offline marketing efforts.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'What is the purpose of a \'Content Management System (CMS)\' (e.g., WordPress, Drupal) in digital marketing?',
    options: [
      'To send marketing emails.',
      'To create, manage, and modify digital content on a website without needing specialized technical knowledge of web programming.',
      'To manage social media advertisements.',
      'To track website analytics data.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'Describe \'Audience Segmentation\' in digital marketing.',
    options: [
      'Treating all customers as a single, homogenous group.',
      'Dividing a target market into smaller, more defined groups based on shared characteristics (demographics, behavior, interests) to deliver more personalized and effective marketing messages.',
      'Audience segmentation only applies to offline advertising.',
      'It complicates the process of creating marketing campaigns.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'What is the role of \'Schema Markup\' in advanced SEO?',
    options: [
      'Schema markup is only for internal website linking.',
      'Schema markup is a standardized vocabulary that you can add to your website\'s HTML to help search engines understand its content better, leading to rich snippets in search results.',
      'Schema markup is irrelevant for search engine rankings.',
      'It is only used for image optimization.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'What is \'Programmatic Advertising\'?',
    options: [
      'Manually buying and selling digital ad space.',
      'Automated buying and selling of digital advertising space using algorithms and software, allowing for more efficient, targeted, and real-time ad placements.',
      'Programmatic advertising is only for traditional print media.',
      'It increases human involvement in ad transactions.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'Explain \'Lead Nurturing\' in digital marketing.',
    options: [
      'Immediately selling to every new website visitor.',
      'The process of building relationships with potential customers (leads) across multiple touchpoints over time, providing valuable content until they are ready to make a purchase.',
      'Lead nurturing is only for existing customers.',
      'It focuses solely on generating new leads.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-2',
    question: 'What is the importance of \'User Experience (UX)\' for digital marketing success?',
    options: [
      'UX is only about website aesthetics.',
      'Good UX ensures a website or app is easy to use, efficient, and enjoyable, directly impacting user engagement, conversion rates, and brand perception in digital marketing.',
      'UX is irrelevant to marketing goals.',
      'It only applies to mobile app development.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'digital-marketing'
  },

  {
    id: 'marketing-3',
    question: 'Discuss \'Omnichannel Marketing\' versus \'Multichannel Marketing\'.',
    options: [
      'Omnichannel and multichannel marketing are identical terms.',
      'Multichannel uses multiple independent channels; Omnichannel provides a seamless, integrated customer experience across all available channels, treating them as part of a single journey.',
      'Omnichannel is only for large enterprises; multichannel for small businesses.',
      'Multichannel marketing offers a more integrated customer view.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'Explain \'Machine Learning (ML)\' applications in advanced digital marketing (e.g., personalization, predictive analytics).',
    options: [
      'ML in digital marketing is only for automating simple tasks.',
      'ML enables hyper-personalization of content/ads, predicts customer behavior (churn, purchase intent), optimizes ad bidding, and identifies audience segments at scale, driving more effective campaigns.',
      'ML removes the need for human marketers entirely.',
      'ML applications are too complex for practical marketing use.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'Describe \'Marketing Attribution Models\' (e.g., Data-Driven Attribution) and their impact on budget allocation.',
    options: [
      'All attribution models provide the same insights for budget allocation.',
      'Advanced attribution models (like data-driven) use algorithms to assign credit to touchpoints more accurately based on actual customer paths, providing better insights for optimizing marketing spend across channels than simpler rule-based models.',
      'Attribution models are only for tracking website visitors, not budget decisions.',
      'They simplify tracking but offer no strategic insights.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'What is \'Voice Search Optimization\' and its considerations for SEO?',
    options: [
      'Voice search optimization is irrelevant for traditional text-based search.',
      'Optimizing content for spoken queries, which are often longer, more conversational, and question-based. Considerations include natural language processing, featured snippets, and local SEO.',
      'Voice search only impacts mobile device searches.',
      'It focuses solely on optimizing website audio content.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'Explain \'Customer Data Platforms (CDPs)\' and their role in unified customer profiles.',
    options: [
      'CDPs are only for managing email lists.',
      'CDPs are centralized systems that collect, unify, and activate customer data from various sources to create a persistent, comprehensive customer profile, enabling hyper-personalized marketing and better customer experiences.',
      'CDPs replace CRM and DMP systems entirely.',
      'CDPs store data in siloed, unintegrated formats.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'Discuss \'Blockchain Technology\'s potential applications in digital marketing (e.g., ad fraud, data privacy).',
    options: [
      'Blockchain is irrelevant to digital marketing.',
      'Blockchain can enhance transparency in advertising (reducing ad fraud), improve data privacy and ownership for consumers, enable tokenized loyalty programs, and facilitate secure micropayments.',
      'Blockchain will replace all existing advertising platforms.',
      'It increases data collection by marketers.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'What is \'Programmatic SEO\' and how does it differ from traditional SEO?',
    options: [
      'Programmatic SEO is a manual SEO technique.',
      'Programmatic SEO uses automated systems and data to generate and optimize a large number of targeted landing pages for long-tail keywords, differing from traditional manual keyword research and content creation.',
      'Programmatic SEO is only for large enterprises.',
      'It focuses solely on technical SEO, ignoring content quality.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'Describe \'Predictive Analytics\' in digital marketing and its benefits.',
    options: [
      'Predictive analytics only analyzes past customer behavior.',
      'Predictive analytics uses statistical algorithms and machine learning to forecast future customer behavior (e.g., purchase probability, churn risk), enabling proactive marketing interventions and optimized targeting.',
      'Predictive analytics increases marketing uncertainty.',
      'It is only useful for historical data reporting.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'Explain the concept of \'Growth Hacking\' and its key characteristics.',
    options: [
      'Growth hacking is a long-term, traditional marketing strategy.',
      'Growth hacking is a rapid experimentation-driven process focused on achieving exponential growth in user acquisition and engagement, often leveraging unconventional and cost-effective tactics.',
      'Growth hacking ignores data and relies on intuition.',
      'It is only for well-established companies.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'How do you approach \'Personalization at Scale\' in digital marketing?',
    options: [
      'Personalization at scale means creating unique content for every single user manually.',
      'It involves using data and technology (ML, automation) to deliver tailored content, offers, and experiences to individual customers across various channels, while maintaining efficiency for large audiences.',
      'Personalization at scale reduces overall marketing effectiveness.',
      'It is only for small, niche target audiences.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'What are the ethical considerations in \'AI-driven Digital Marketing\' (e.g., bias, transparency, manipulation)?',
    options: [
      'AI-driven marketing is inherently ethical and unbiased.',
      'Concerns include algorithmic bias leading to discriminatory targeting, lack of transparency in AI decisions (black box), potential for manipulative practices, and data privacy issues, requiring careful oversight and regulation.',
      'Ethical considerations are irrelevant as AI optimizes campaigns.',
      'AI in marketing removes all human responsibility.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'Describe \'Marketing Mix Modeling\' and \'Multi-Touch Attribution\' for holistic campaign analysis.',
    options: [
      'These models only analyze individual marketing channels in isolation.',
      'Marketing Mix Modeling uses historical data to quantify the impact of different marketing inputs on sales; Multi-Touch Attribution assigns credit to each touchpoint in a customer\'s conversion path, both for holistic campaign analysis.',
      'They provide conflicting insights for marketing strategy.',
      'These are outdated methods replaced by simple analytics dashboards.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'What is \'Hyperlocal Marketing\' and its strategies?',
    options: [
      'Hyperlocal marketing targets a global audience.',
      'Hyperlocal marketing targets potential customers within a very specific, geographically restricted area, leveraging location-based data, mobile ads, and local SEO to drive local foot traffic or online engagement.',
      'Hyperlocal marketing ignores physical store locations.',
      'It relies on broad, generic advertising campaigns.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'Explain \'Conversion Funnel Optimization\' for complex customer journeys.',
    options: [
      'Conversion funnel optimization focuses only on the final purchase step.',
      'It involves analyzing and optimizing each stage of the customer journey (awareness, interest, consideration, conversion, loyalty) to reduce friction, improve engagement, and increase conversion rates across the entire funnel.',
      'Conversion funnels are only for direct sales businesses.',
      'It is a one-time optimization process.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'marketing-3',
    question: 'Discuss \'Brand Building\' in the digital age vs. traditional methods (e.g., storytelling, community building, authenticity).',
    options: [
      'Digital brand building is solely about ad impressions.',
      'Digital brand building emphasizes authentic storytelling, community engagement (social media), user-generated content, and influencer collaborations, moving beyond one-way broadcast of traditional advertising to foster deeper connections.',
      'Traditional brand building is irrelevant in the digital age.',
      'Digital brand building only focuses on short-term sales.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'digital-marketing'
  },
  {
    id: 'uiux-1',
    question: 'What is the primary focus of User Interface (UI) design?',
    options: [
      'The overall user experience and usability.',
      'The visual and interactive elements of a digital product, like buttons and typography.',
      'User research and testing.',
      'Backend database management.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'What does UX stand for?',
    options: [
      'User Identification',
      'Unified Experience',
      'User Experience',
      'Universal Xchange'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'Which of these is a core principle of good UI design?',
    options: [
      'Complexity',
      'Inconsistency',
      'Clarity',
      'Randomness'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'What is a \'Wireframe\' in UX design?',
    options: [
      'A fully designed visual prototype.',
      'A basic, low-fidelity visual guide that represents the skeletal framework of a website or app.',
      'A final coded webpage.',
      'A marketing brochure for a product.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'What is the purpose of \'User Research\' in UX design?',
    options: [
      'To decide on the final color scheme of an app.',
      'To understand user needs, behaviors, motivations, and pain points.',
      'To write programming code for the interface.',
      'To manage project budgets.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'Which term refers to how easy it is for users to achieve their goals when using a product?',
    options: [
      'Aesthetics',
      'Usability',
      'Performance',
      'Scalability'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'What is \'Feedback\' in UI/UX design?',
    options: [
      'Only verbal comments from users.',
      'Any response from the system that informs the user about the result of their action.',
      'A type of animation.',
      'The process of collecting user data.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'What is a \'Persona\' in UX design?',
    options: [
      'A real customer from your user base.',
      'A fictional representation of a target user group, based on user research data, used to guide design decisions.',
      'A legal document for user privacy.',
      'A software tool for prototyping.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'Which principle emphasizes consistent design elements and interactions across an entire product?',
    options: [
      'Flexibility',
      'Variety',
      'Consistency',
      'Randomness'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'What is the purpose of \'Prototyping\' in UI/UX design?',
    options: [
      'To create the final, polished product for release.',
      'To create interactive models of a design idea to test and gather feedback before full development.',
      'To write the backend code for the application.',
      'To manage project timelines.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'Which UI element is typically used for navigation within a website or app?',
    options: [
      'Text Field',
      'Button',
      'Navigation Bar (or Menu)',
      'Image'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'What does \'Accessibility\' mean in UI/UX design?',
    options: [
      'Making a product visually appealing to everyone.',
      'Designing products to be usable by people with diverse abilities, including those with disabilities (e.g., visual, auditory, motor impairments).',
      'Ensuring a product can be accessed from any location.',
      'Making a product available on all operating systems.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'Which stage of the \'Design Thinking\' process involves understanding the users and their needs?',
    options: [
      'Ideate',
      'Prototype',
      'Test',
      'Empathize'
    ],
    correctAnswer: 3,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'What is \'Visual Hierarchy\' in UI design?',
    options: [
      'Arranging elements randomly on the screen.',
      'Using visual cues (e.g., size, color, contrast, position) to guide the user\'s eye and indicate the importance of elements on a page.',
      'Only using bright colors in the design.',
      'Creating a flat, two-dimensional design.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-1',
    question: 'What is \'Information Architecture (IA)\' in UX design?',
    options: [
      'Designing the visual layout of a page.',
      'Organizing and structuring content and functionality in a way that helps users find information and complete tasks intuitively.',
      'Writing website content.',
      'Managing user accounts.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'ui-ux'
  },

  {
    id: 'uiux-2',
    question: 'Explain \'Jakob Nielsen\'s 10 Usability Heuristics\' and their application in UX evaluation.',
    options: [
      'These are strict rules that must be followed for all designs.',
      'These are general principles for usability design, like \'Visibility of System Status\' or \'Consistency and Standards\', used by evaluators to identify usability problems in user interfaces.',
      'These heuristics are only for evaluating graphic design aesthetics.',
      'They are specific coding guidelines for developers.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'Describe the \'Double Diamond\' design process model.',
    options: [
      'A linear process with four rigid stages.',
      'A non-linear, iterative design process model consisting of four stages: Discover, Define, Develop, and Deliver, emphasizing diverging and converging thinking at each stage.',
      'A method for creating 3D models in design.',
      'A framework only used for business strategy, not design.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'What is \'Affordance\' in UI design?',
    options: [
      'The cost of a digital product.',
      'A design element that visually suggests how an object or interface component can be used (e.g., a button looks clickable).',
      'The accessibility of a product to users.',
      'The brand identity of a product.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'Explain \'Mental Models\' in UX design and their importance.',
    options: [
      'Mental models are always incorrect assumptions about users.',
      'Mental models are internal representations that users have about how a system or product works, based on their past experiences. Designing to align with these models reduces cognitive load and improves usability.',
      'Mental models are only relevant for complex software.',
      'They are fixed and cannot be influenced by design.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'What is a \'Design System\' and its primary benefit?',
    options: [
      'A collection of random design assets.',
      'A comprehensive set of reusable components, guidelines, and standards that ensures consistency, efficiency, and scalability across product development teams.',
      'A tool for creating one-off design projects.',
      'A method for tracking user behavior.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'Describe \'Microinteractions\' and their role in enhancing user experience.',
    options: [
      'Microinteractions are large, complex user flows.',
      'Microinteractions are small, single-purpose interactive moments within a product (e.g., a \'like\' button animation, a toggle switch feedback) that provide subtle feedback and delight users.',
      'Microinteractions are irrelevant to overall UX.',
      'They only apply to mobile applications.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'What is \'Cognitive Load\' in UX, and how do designers aim to minimize it?',
    options: [
      'Cognitive load refers to the processing power of a device.',
      'Cognitive load is the amount of mental effort required to use a product. Designers minimize it by simplifying interfaces, reducing choices, and using familiar patterns to make tasks easier to understand and complete.',
      'Minimizing cognitive load makes interfaces less intuitive.',
      'It is only relevant for users with cognitive impairments.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'Explain \'Responsive Design\' vs. \'Adaptive Design\' in UI/UX.',
    options: [
      'Responsive design creates separate websites for each device; adaptive design uses one flexible layout.',
      'Responsive design fluidly adjusts content and layout based on screen size; Adaptive design uses predefined layouts that switch at specific breakpoints for different devices.',
      'Responsive design is for desktop only; adaptive design is for mobile only.',
      'They are interchangeable terms in modern web design.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'What is \'Information Scent\' in UX?',
    options: [
      'The smell of a physical product.',
      'The cues and hints (e.g., labels, icons, navigation) that users follow to evaluate their path toward finding desired information in an interface.',
      'A metric for website loading speed.',
      'A method for tracking user location.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'Describe \'User Flow\' and its importance in UX design.',
    options: [
      'User flow is a diagram of website analytics data.',
      'User flow is the path a user takes to complete a task within a product, from entry point to final interaction. Mapping it helps designers identify friction points and optimize the user journey.',
      'User flow is only for developers, not designers.',
      'It complicates the process of understanding user behavior.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'What is \'Emotion Design\' (or Affective Design) in UX?',
    options: [
      'Designing products to be as neutral and emotionless as possible.',
      'Designing products to evoke specific emotions (e.g., delight, trust, excitement) in users, aiming to create a more memorable and positive user experience beyond mere usability.',
      'Emotion design is only for games and entertainment apps.',
      'It is irrelevant to the functional aspects of a product.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'Explain \'Gamification\' in UI/UX and its typical applications.',
    options: [
      'Gamification refers to creating full-fledged video games.',
      'Gamification is the application of game-design elements and game principles in non-game contexts (e.g., points, badges, leaderboards) to engage users and motivate behavior.',
      'Gamification only applies to educational apps.',
      'It always reduces user engagement.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'What is \'Usability Testing\' and its methods (e.g., moderated, unmoderated)?',
    options: [
      'Usability testing is only for expert evaluators, not real users.',
      'Usability testing involves observing real users as they attempt to complete tasks with a product to identify usability problems, gathering direct feedback on design effectiveness through various methods.',
      'Usability testing is only done after a product is fully launched.',
      'It is a theoretical exercise with no practical implications.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'Describe \'Dark Patterns\' in UI/UX design and why they are unethical.',
    options: [
      'Dark patterns are innovative design solutions that benefit users.',
      'Dark patterns are deceptive UI/UX practices that manipulate users into making choices they might not otherwise make (e.g., hidden fees, forced continuity), considered unethical due to their manipulative nature.',
      'Dark patterns are always illegal.',
      'They improve user trust and transparency.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-2',
    question: 'What is \'Progressive Disclosure\' in UI design?',
    options: [
      'Showing all information and options to the user at once.',
      'Revealing information only when the user needs it, gradually exposing more advanced features or options to reduce cognitive load and simplify the initial experience.',
      'Progressive disclosure is only for complex software applications.',
      'It complicates the process of finding information.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'ui-ux'
  },

  {
    id: 'uiux-3',
    question: 'Discuss \'Cross-Cultural Design\' and its challenges in UI/UX for global products.',
    options: [
      'Cross-cultural design means applying one design universally to all cultures.',
      'Challenges include varying mental models, color meanings, iconography interpretations, reading directions, and legal/ethical norms across cultures. Solutions involve extensive localized research and cultural sensitivity.',
      'Cross-cultural design is only about language translation.',
      'It simplifies the design process by reducing variations.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'Explain \'AI/ML\' applications in advanced UX research (e.g., predictive analytics, sentiment analysis, automated insights).',
    options: [
      'AI/ML in UX research replaces human researchers entirely.',
      'AI/ML analyzes large datasets of user behavior, sentiment (from text/voice), and predicts user needs or pain points, automating insights and enabling more data-driven, proactive design decisions than manual analysis.',
      'AI/ML introduces bias into UX research results.',
      'It is only used for generating wireframes and prototypes.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'Describe \'Service Design Blueprinting\' and its role in designing holistic user experiences.',
    options: [
      'Service design blueprinting focuses only on the digital interface of a product.',
      'A service design blueprint visualizes the entire service process, including frontstage (customer-facing) and backstage (internal operations) interactions, physical evidence, and customer journey, to design and optimize holistic experiences.',
      'Service design blueprinting is only for physical services, not digital products.',
      'It increases complexity without providing a holistic view.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'What is \'Neurodesign\' (or Neuromarketing in UX) and its ethical implications?',
    options: [
      'Neurodesign is about designing robots with human-like brains.',
      'Neurodesign applies neuroscience principles to design to understand and influence user behavior at a subconscious level (e.g., through visual cues, cognitive biases), raising ethical concerns about manipulation and consent.',
      'Neurodesign always leads to manipulative user experiences.',
      'It is a fictional concept without practical application.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'Explain \'Design for Emotion\' vs. \'Usability\' for advanced user experience goals.',
    options: [
      'Design for emotion and usability are mutually exclusive.',
      'Usability focuses on efficiency and effectiveness of tasks; Design for Emotion aims to create a deeper, more memorable connection by evoking positive feelings, going beyond mere functionality to achieve delight and loyalty.',
      'Emotion design is irrelevant for enterprise software.',
      'Usability is less important than aesthetics.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'Discuss \'Inclusive Design\' principles beyond basic accessibility compliance.',
    options: [
      'Inclusive design means designing for the average user only.',
      'Inclusive design focuses on designing for the full range of human diversity, considering context, ability, and personal circumstances, aiming to create solutions that are usable and beneficial to as many people as possible, not just those with disabilities.',
      'Inclusive design increases complexity and reduces usability for the majority.',
      'It is only a legal requirement, not a design principle.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'What is \'Generative AI\'s role in UI/UX design (e.g., auto-generating layouts, content, design variations)?',
    options: [
      'Generative AI replaces the need for human designers.',
      'Generative AI can assist designers by rapidly generating diverse design layouts, content variations, image assets, and even entire prototypes based on constraints or inputs, accelerating ideation and iteration phases.',
      'Generative AI is only for generating random, unusable designs.',
      'It is too slow for practical use in design workflows.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'Describe \'DesignOps\' and its function in scaling design practices within large organizations.',
    options: [
      'DesignOps focuses only on the visual aspects of design.',
      'DesignOps is a discipline that focuses on optimizing and scaling design processes, tools, and talent within an organization, supporting design teams to operate more efficiently and deliver consistent, high-quality output.',
      'DesignOps is only for small design agencies.',
      'It adds bureaucracy to the design workflow.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'Explain \'Ethical AI Principles\' in UX design (e.g., fairness, transparency, accountability).',
    options: [
      'Ethical AI principles are only for developers to consider, not designers.',
      'These principles guide the design of AI-powered features to ensure they are fair (non-discriminatory), transparent (explainable), and accountable (responsible for outcomes), mitigating bias and building user trust.',
      'Ethical AI principles hinder innovation in design.',
      'They are universally defined and unchanging across all contexts.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'How do you approach \'Accessibility Audits\' and \'WCAG\' compliance in complex digital products?',
    options: [
      'Accessibility audits are only done once at the beginning of a project.',
      'Audits involve systematic checks against Web Content Accessibility Guidelines (WCAG) standards, using automated tools and manual testing (e.g., screen readers) to identify and remediate accessibility barriers in digital products.',
      'WCAG compliance is only for government websites.',
      'Accessibility audits are too time-consuming to be practical.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'What is \'Human-Centered AI\' and its significance in UX?',
    options: [
      'Human-centered AI focuses solely on AI capabilities, not user needs.',
      'Human-Centered AI (HCAI) is an approach that prioritizes human needs, capabilities, and well-being in the design and development of AI systems, ensuring AI augments human abilities rather than replaces them.',
      'HCAI is irrelevant for autonomous AI systems.',
      'It increases the complexity of AI development without user benefit.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'Describe \'Conversational UI/UX Design\' principles (e.g., chatbots, voice assistants).',
    options: [
      'Conversational UI is only about basic text commands.',
      'Principles include natural language understanding, persona consistency, error handling, managing context, and multimodal interaction, to create intuitive and engaging conversational experiences beyond traditional GUI.',
      'Conversational UI is less efficient than graphical interfaces for all tasks.',
      'It eliminates the need for any visual design elements.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'What is \'Motion Design\'s advanced role in providing feedback and enhancing perceived performance in UI/UX?',
    options: [
      'Motion design is only for aesthetic purposes and animations.',
      'Advanced motion design uses subtle animations and transitions to provide immediate system feedback, guide user attention, reduce perceived loading times, and enhance the overall fluidity and delight of the user interface.',
      'Motion design always slows down app performance.',
      'It is irrelevant to user understanding of system status.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'Explain \'Design for Persuasion\' and its ethical boundaries in UX.',
    options: [
      'Design for persuasion is always manipulative and unethical.',
      'It involves using psychological principles to influence user behavior towards desired actions (e.g., purchases, sign-ups). Ethical boundaries require transparency, user control, and avoiding dark patterns that exploit cognitive biases.',
      'Persuasive design has no impact on user behavior.',
      'It is only used in advertising, not product design.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'uiux-3',
    question: 'Discuss \'Personalization vs. Customization\' in UX design for advanced user control and experience.',
    options: [
      'Personalization and customization are identical terms in UX.',
      'Personalization tailors content/experience based on implicit user data/behavior (AI-driven); Customization allows users to explicitly set preferences and configure the interface themselves, both enhancing user experience but offering different levels of control.',
      'Personalization always reduces user privacy.',
      'Customization simplifies the design process.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'ui-ux'
  },
  {
    id: 'db-1',
    question: 'What is the primary role of a Database Administrator (DBA)?',
    options: [
      'To design website graphics.',
      'To manage and maintain databases, ensuring their performance, security, and integrity.',
      'To write application code.',
      'To sell database software.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'What does \'SQL\' stand for?',
    options: [
      'Standard Query Language',
      'Structured Question Logic',
      'Structured Query Language',
      'Sequential Query Line'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'Which of the following is a common Relational Database Management System (RDBMS)?',
    options: [
      'Microsoft Word',
      'MySQL',
      'Adobe Photoshop',
      'Microsoft Excel'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'What is a \'table\' in a relational database?',
    options: [
      'A physical piece of furniture.',
      'A collection of related data organized in rows and columns.',
      'A type of database software.',
      'A programming function.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'What is a \'primary key\' in a database table?',
    options: [
      'A key that can be duplicated across rows.',
      'A column or set of columns that uniquely identifies each row in a table.',
      'A key used for encryption.',
      'A column that stores arbitrary text.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'Which SQL command is used to retrieve data from a database?',
    options: [
      'INSERT',
      'UPDATE',
      'DELETE',
      'SELECT'
    ],
    correctAnswer: 3,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'What is the purpose of a \'backup\' in database administration?',
    options: [
      'To permanently delete data.',
      'To create copies of the database that can be restored in case of data loss or corruption.',
      'To encrypt sensitive data only.',
      'To share database access with unauthorized users.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'What does \'CRUD\' stand for in database operations?',
    options: [
      'Copy, Rename, Undo, Delete',
      'Create, Retrieve, Update, Delete',
      'Compile, Run, Upload, Download',
      'Connect, Replicate, User, Disconnect'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'What is an \'index\' in a database?',
    options: [
      'A physical book of database manuals.',
      'A data structure that improves the speed of data retrieval operations on a database table.',
      'A type of database table.',
      'A security protocol for database access.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'Which command is used to add new rows of data into a database table?',
    options: [
      'SELECT',
      'UPDATE',
      'DELETE',
      'INSERT INTO'
    ],
    correctAnswer: 3,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'What is \'database security\' primarily concerned with?',
    options: [
      'Making databases run faster.',
      'Protecting the database from unauthorized access, use, disclosure, disruption, modification, or destruction.',
      'Designing the database schema.',
      'Creating new database users.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'What is a \'foreign key\' used for?',
    options: [
      'To uniquely identify a row in its own table.',
      'To link two tables together by referencing the primary key of another table.',
      'To encrypt data in a table.',
      'To sort data within a single table.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'What is \'database normalization\'?',
    options: [
      'The process of making a database run slower.',
      'Organizing the columns and tables of a relational database to minimize data redundancy and improve data integrity.',
      'Encrypting data in a database.',
      'Backing up database files.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'Which of these is a non-relational (NoSQL) database?',
    options: [
      'Oracle Database',
      'Microsoft SQL Server',
      'MongoDB',
      'PostgreSQL'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'database-administration'
  },
  {
    id: 'db-1',
    question: 'What is a \'query\' in a database?',
    options: [
      'A physical device for data storage.',
      'A request for data or information from a database table or combination of tables.',
      'A type of database software.',
      'A method for managing user accounts.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'database-administration'
  },

  {
    id: 'db-2',
    question: 'Explain the ACID properties in database transactions.',
    options: [
      'ACID is a type of database backup.',
      'ACID (Atomicity, Consistency, Isolation, Durability) are properties guaranteeing that database transactions are processed reliably, ensuring data integrity even in the event of errors or power failures.',
      'ACID applies only to NoSQL databases.',
      'ACID ensures high availability but not data integrity.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'Describe \'Database Indexing Strategies\' (e.g., B-tree, Hash index) and their impact on query performance.',
    options: [
      'Indexing always makes database writes faster.',
      'Indexing strategies like B-trees (for ranges and ordered data) and Hash indexes (for equality lookups) create sorted structures to speed up data retrieval, but can slow down write operations.',
      'Indexing increases data redundancy in a database.',
      'Indexing is only useful for very small tables.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'What is \'Database Replication\' and why is it used?',
    options: [
      'Replication creates identical copies of a database on different servers to improve availability, fault tolerance, and read scalability.',
      'Replication is only for backing up database files.',
      'Replication slows down database write operations significantly.',
      'Replication eliminates the need for any data backups.'
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'Explain the concept of \'Database Sharding\' (or Horizontal Partitioning).',
    options: [
      'Sharding creates multiple copies of a single table on one server.',
      'Sharding is a database partitioning technique that divides large databases into smaller, more manageable pieces (shards) across multiple servers to improve scalability and performance.',
      'Sharding increases data redundancy and complexity.',
      'Sharding is only used for very small databases.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'What are \'Stored Procedures\' and their benefits in database management?',
    options: [
      'Stored procedures are custom data types.',
      'Stored procedures are pre-compiled SQL code blocks stored in the database, offering benefits like improved performance, reduced network traffic, and enhanced security/reusability.',
      'Stored procedures are always slower than inline SQL.',
      'Stored procedures increase the risk of SQL injection attacks.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'Describe \'Database Concurrency Control\' mechanisms (e.g., locking, multi-version concurrency control - MVCC).',
    options: [
      'Concurrency control allows multiple transactions to always write to the same data simultaneously without issues.',
      'Concurrency control mechanisms manage simultaneous access to the database to ensure data integrity and consistency (e.g., locking prevents conflicting writes; MVCC allows readers to not block writers).',
      'Concurrency control is only for single-user databases.',
      'It increases the likelihood of data corruption.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'What is \'Database Denormalization\' and when is it typically used?',
    options: [
      'Denormalization is the process of further normalizing a database.',
      'Denormalization is the process of intentionally adding redundant data to a normalized database to improve read performance, typically used in data warehousing or reporting scenarios.',
      'Denormalization always improves write performance.',
      'It is a technique to improve data integrity.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'What is \'Database Performance Tuning\' and its common techniques?',
    options: [
      'Performance tuning is only about upgrading hardware.',
      'Performance tuning optimizes database operations for speed and efficiency. Techniques include query optimization, proper indexing, schema design, and server configuration adjustments.',
      'Performance tuning often leads to decreased database stability.',
      'It only applies to very small databases.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'Explain \'Online Transaction Processing (OLTP)\' vs. \'Online Analytical Processing (OLAP)\'.',
    options: [
      'OLTP is for complex analysis; OLAP is for daily transactions.',
      'OLTP systems handle large numbers of concurrent short transactions (e.g., e-commerce); OLAP systems perform complex queries for data analysis and reporting on large datasets (e.g., data warehouses).',
      'OLTP and OLAP use the same database designs and optimizations.',
      'Neither is suitable for real-time data processing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'What is \'Database Disaster Recovery\' and its key components?',
    options: [
      'Disaster recovery only involves restoring old backups.',
      'Disaster recovery is a set of policies and procedures to enable the recovery or continuation of vital technology infrastructure and systems following a natural or human-induced disaster. Key components include backups, replication, and recovery plans.',
      'Disaster recovery is irrelevant for cloud-based databases.',
      'It is a one-time setup process.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'Describe \'Database Logging and Auditing\' and their importance for security and compliance.',
    options: [
      'Logging and auditing only track successful database operations.',
      'Logging records all database activities (transactions, logins, changes) for debugging and recovery; Auditing tracks specific user actions for security, compliance, and accountability, identifying unauthorized or suspicious behavior.',
      'Logging and auditing decrease database security.',
      'They are only used in development environments.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'What is \'Connection Pooling\' in database management?',
    options: [
      'Opening a new database connection for every request.',
      'A technique where a pool of database connections is created at application startup and reused for subsequent requests, reducing overhead and improving performance.',
      'Connection pooling increases network latency.',
      'It is only used for offline database access.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'What is \'Change Data Capture (CDC)\' and its typical use cases?',
    options: [
      'CDC captures changes in data for permanent deletion.',
      'CDC is a set of software design patterns used to determine and track the data that has changed so that action can be taken using the changed data. Typical use cases include data warehousing, replication, and auditing.',
      'CDC is only for static datasets.',
      'It increases data redundancy in the source system.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'Explain \'SQL Injection\' vulnerability and common prevention methods.',
    options: [
      'SQL Injection is a type of physical attack on database servers.',
      'SQL injection is a code injection technique used to attack data-driven applications, where malicious SQL statements are inserted into an entry field for execution. Prevention involves using parameterized queries, prepared statements, and input validation.',
      'SQL Injection only affects NoSQL databases.',
      'It can be prevented by simply hiding error messages.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },
  {
    id: 'db-2',
    question: 'What is a \'Database View\' and its benefits?',
    options: [
      'A physical copy of a table.',
      'A virtual table based on the result-set of an SQL query. It contains rows and columns, just like a real table, but it doesn\'t store data itself, offering simplified data access and security.',
      'Views improve write performance on tables.',
      'Views increase data redundancy.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'database-administration'
  },

  {
    id: 'db-3',
    question: 'Discuss \'Database Sharding Strategies\' (e.g., Hashing, Range-based, Directory-based) and their trade-offs.',
    options: [
      'Sharding strategies are irrelevant for large-scale databases.',
      'Different strategies (hashing for even distribution, range-based for easier queries, directory-based for flexibility) have trade-offs in data distribution, query complexity, rebalancing, and hotspot management.',
      'All sharding strategies offer the same performance benefits.',
      'Sharding always eliminates the need for replication.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'Explain \'CAP Theorem\' in distributed database systems and its implications.',
    options: [
      'CAP Theorem states that a distributed database can guarantee all three properties simultaneously.',
      'CAP Theorem states that a distributed data store can only guarantee two out of three properties: Consistency, Availability, and Partition Tolerance, forcing trade-offs in system design.',
      'CAP Theorem applies only to single-server databases.',
      'It is a concept only relevant to NoSQL databases.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'Describe \'Optimistic vs. Pessimistic Concurrency Control\' and their use cases.',
    options: [
      'Optimistic control always uses locks; pessimistic control never uses locks.',
      'Optimistic control assumes conflicts are rare and verifies changes at commit (e.g., MVCC); Pessimistic control assumes conflicts are frequent and uses locks to prevent them, both for managing simultaneous transactions.',
      'Optimistic control is only for read-heavy workloads.',
      'Pessimistic control offers higher throughput for high-contention systems.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'What are \'Database Resilience Patterns\' (e.g., Circuit Breaker, Retry, Bulkhead) and how do they enhance reliability?',
    options: [
      'Resilience patterns are only for preventing security breaches.',
      'These patterns (Circuit Breaker prevents cascading failures, Retry re-attempts transient operations, Bulkhead isolates components) enhance database reliability by isolating failures and gracefully handling transient errors.',
      'Resilience patterns increase system complexity without improving reliability.',
      'They are only applicable to single-instance databases.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'Explain \'Database as a Service (DBaaS)\' in cloud computing and its operational benefits/drawbacks.',
    options: [
      'DBaaS requires full manual management of database infrastructure by the user.',
      'DBaaS offers cloud-hosted database solutions where the provider manages underlying infrastructure, backups, and scaling, offering ease of use and scalability but potentially less control and vendor lock-in.',
      'DBaaS is always less secure than self-managed databases.',
      'It is only suitable for very small, non-critical databases.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'Discuss \'Polyglot Persistence\' and its advantages/disadvantages in modern application architectures.',
    options: [
      'Polyglot persistence means using only one type of database for all data.',
      'Polyglot persistence involves using different types of databases (e.g., relational, NoSQL, graph) for different data needs within a single application, offering flexibility and performance optimization but increasing complexity.',
      'Polyglot persistence always simplifies data management.',
      'It leads to increased data redundancy with no benefits.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'What is \'Database Schema Migration\' in a CI/CD pipeline, and its automation challenges?',
    options: [
      'Schema migration is only done manually after code deployment.',
      'Schema migration involves versioning and applying changes to database schemas (e.g., adding columns, altering tables) as part of an automated CI/CD pipeline. Challenges include handling data loss, downtime, and rollbacks.',
      'Schema migration simplifies database development significantly.',
      'It is irrelevant for agile software development.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'Describe \'Database Auditing Frameworks\' and their importance for regulatory compliance (e.g., GDPR, HIPAA).',
    options: [
      'Database auditing frameworks only track basic user logins.',
      'These frameworks provide comprehensive mechanisms to record and review database activities, critical for meeting regulatory compliance requirements (e.g., GDPR for data privacy, HIPAA for health data) and forensic analysis.',
      'Auditing frameworks decrease database security.',
      'They are only used in development environments, not production.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'Explain \'In-Memory Databases\' and their advantages/disadvantages.',
    options: [
      'In-memory databases store data only on disk.',
      'In-memory databases store data primarily in the computer\'s main memory (RAM) rather than on disk, offering extremely high performance for read/write operations but with higher cost and risk of data loss on power failure.',
      'In-memory databases are only for very small datasets.',
      'They are less efficient for real-time analytics.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'How do you approach \'Database Performance Benchmarking\' for complex workloads?',
    options: [
      'Benchmarking involves only manual observation of database performance.',
      'Benchmarking involves systematically testing database performance under specific workloads using standardized tools and metrics, to identify bottlenecks, compare configurations, and predict behavior under load.',
      'Benchmarking can only be done in production environments.',
      'It is a one-time activity that guarantees perpetual optimal performance.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'What is \'Time Series Database\' and its specialized use cases?',
    options: [
      'Time series databases are general-purpose relational databases.',
      'Time series databases are optimized for storing and querying sequences of data points indexed by time, ideal for IoT sensor data, financial market data, and application monitoring, due to their efficiency with time-stamped records.',
      'Time series databases are less efficient for analyzing historical trends.',
      'They cannot handle high-volume data ingestion.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'Describe \'Database Security Hardening\' best practices (e.g., least privilege, encryption at rest/in transit, regular patching).',
    options: [
      'Security hardening is only about setting strong passwords.',
      'Best practices include applying the principle of least privilege, encrypting data both at rest and in transit, regularly patching vulnerabilities, auditing access, and implementing robust authentication/authorization.',
      'Security hardening makes databases less accessible to authorized users.',
      'It is a one-time configuration that ensures perpetual security.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'What is \'Graph Database\' and its typical applications?',
    options: [
      'Graph databases store data in tables with rows and columns.',
      'Graph databases store data in nodes and edges, representing relationships directly, making them highly efficient for querying interconnected data like social networks, recommendation engines, and fraud detection.',
      'Graph databases are suitable for large volumes of unstructured data only.',
      'They are less efficient than relational databases for complex relationship queries.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'Explain \'ETL (Extract, Transform, Load)\' processes in data warehousing and their importance for analytics.',
    options: [
      'ETL is a real-time data processing method for OLTP systems.',
      'ETL is a three-step process (Extract data from sources, Transform it into a consistent format, Load it into a data warehouse) crucial for preparing data for analytical reporting and business intelligence.',
      'ETL processes increase data redundancy and inconsistency.',
      'It is only used for very small datasets.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'db-3',
    question: 'Discuss \'Database Monitoring Tools\' (e.g., Prometheus, Datadog) and their role in proactive administration.',
    options: [
      'Database monitoring tools only provide historical data.',
      'These tools collect metrics (e.g., CPU, memory, queries per second), logs, and performance data from databases, providing real-time visibility and alerts to proactively identify and resolve performance bottlenecks or issues.',
      'Monitoring tools increase database overhead without significant benefits.',
      'They replace the need for human DBAs.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'database-administration'
  },
  {
    id: 'network-1',
    question: 'What is the primary function of a network?',
    options: [
      'To store physical documents.',
      'To connect computers and other devices to share resources and information.',
      'To process financial transactions.',
      'To design graphic user interfaces.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'What does \'IP address\' stand for?',
    options: [
      'Internal Protocol Address',
      'Internet Process Address',
      'Internet Protocol Address',
      'Integrated Personal Address'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'Which device connects different network segments and forwards data packets between them?',
    options: [
      'Hub',
      'Switch',
      'Router',
      'Modem'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'What is \'LAN\' commonly used for?',
    options: [
      'Long Area Network',
      'Local Area Network',
      'Large Access Node',
      'Limited Area Navigation'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'What is the purpose of a \'firewall\' in network security?',
    options: [
      'To speed up internet connection.',
      'To monitor and control incoming and outgoing network traffic based on predetermined security rules.',
      'To store large amounts of data.',
      'To physically connect devices.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'Which protocol is used for securely Browse websites?',
    options: [
      'HTTP',
      'FTP',
      'HTTPS',
      'SMTP'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'What is a \'DNS\' server primarily used for?',
    options: [
      'To provide electricity to network devices.',
      'To translate domain names (e.g., google.com) into IP addresses.',
      'To store user passwords.',
      'To manage printer connections.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'Which cable type is commonly used for wired Ethernet connections?',
    options: [
      'Coaxial Cable',
      'Fiber Optic Cable',
      'Twisted-Pair Cable (e.g., Cat5e, Cat6)',
      'USB Cable'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'What does \'Wi-Fi\' refer to?',
    options: [
      'Wired Fidelity',
      'Wireless Fidelity',
      'Wide Fiber',
      'Web Interconnection Feature'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'What is a \'DHCP\' server responsible for?',
    options: [
      'Managing user accounts.',
      'Dynamically assigning IP addresses and other network configuration parameters to devices on a network.',
      'Storing website files.',
      'Encrypting network traffic.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'Which network topology connects all devices to a central hub or switch?',
    options: [
      'Bus Topology',
      'Ring Topology',
      'Star Topology',
      'Mesh Topology'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'What is the purpose of a \'VPN\'?',
    options: [
      'To slow down internet speed.',
      'To create a secure, encrypted connection over a less secure network, like the internet, allowing remote access.',
      'To block all website access.',
      'To publicly share files.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'What does \'bandwidth\' measure in networking?',
    options: [
      'The physical size of a network cable.',
      'The maximum rate of data transfer across a given path or network connection.',
      'The number of devices connected to a network.',
      'The geographical area a network covers.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'What is a \'packet\' in network communication?',
    options: [
      'A physical envelope for data.',
      'A small block of data transmitted over a network, containing addressing and payload information.',
      'A type of network device.',
      'A programming language for networks.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'network-administration'
  },
  {
    id: 'network-1',
    question: 'What is the function of a \'switch\' in a network?',
    options: [
      'To broadcast data to all connected devices without discrimination.',
      'To filter and forward network packets to specific destination devices on a LAN based on their MAC addresses.',
      'To connect different networks together.',
      'To convert analog signals to digital.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'network-administration'
  },

  {
    id: 'network-2',
    question: 'Explain the \'OSI Model\' and its 7 layers, providing an example for each.',
    options: [
      'The OSI Model is a physical device for network connections.',
      'The OSI (Open Systems Interconnection) Model is a conceptual framework that standardizes the functions of a telecommunication or computing system into 7 layers (Physical, Data Link, Network, Transport, Session, Presentation, Application) for interoperability.',
      'The OSI Model is only for wireless networks.',
      'It dictates hardware specifications, not communication protocols.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'Describe \'Subnetting\' and its advantages in network design.',
    options: [
      'Subnetting makes a network smaller and less efficient.',
      'Subnetting is the process of dividing a larger network into smaller, more efficient subnetworks, improving network performance, security, and IP address management.',
      'Subnetting increases broadcast traffic across the entire network.',
      'It eliminates the need for routers in a network.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'What is \'NAT\' (Network Address Translation) and its role in home/office networks?',
    options: [
      'NAT is a type of network cable.',
      'NAT translates private IP addresses in a local network to a single public IP address when communicating with the internet, allowing multiple devices to share one public IP and providing a layer of security.',
      'NAT encrypts all network traffic.',
      'NAT assigns static IP addresses to devices.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'Explain the difference between \'TCP\' and \'UDP\' protocols.',
    options: [
      'TCP is connectionless and unreliable; UDP is connection-oriented and reliable.',
      'TCP (Transmission Control Protocol) is connection-oriented, reliable, and ensures ordered delivery; UDP (User Datagram Protocol) is connectionless, unreliable, and faster, typically used for streaming or gaming.',
      'TCP is only for local networks; UDP is for the internet.',
      'There is no significant difference in their functionality.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'What is \'VLAN\' (Virtual Local Area Network) and why is it used?',
    options: [
      'VLANs require physically separate networks for each segment.',
      'VLANs logically segment a physical network into multiple broadcast domains, improving network performance, security, and flexibility by grouping devices regardless of their physical location.',
      'VLANs only increase network complexity without benefits.',
      'VLANs eliminate the need for switches.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'Describe \'Routing Protocols\' (e.g., OSPF, BGP) and their function.',
    options: [
      'Routing protocols only manage local area networks.',
      'Routing protocols enable routers to exchange information about network paths and choose the best route for data packets, essential for communication across large and interconnected networks (e.g., the Internet).',
      'Routing protocols are only for wireless communication.',
      'They manually configure each router in a network.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'What is \'DHCP Snooping\' and its purpose in network security?',
    options: [
      'DHCP Snooping speeds up DHCP request processing.',
      'DHCP snooping is a security feature that filters untrusted DHCP messages and prevents rogue DHCP servers from distributing incorrect IP configurations to clients, protecting against attacks.',
      'DHCP Snooping only tracks legitimate DHCP servers.',
      'It allows any device to act as a DHCP server.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'Explain \'DNSSEC\' (Domain Name System Security Extensions) and its importance.',
    options: [
      'DNSSEC encrypts all DNS queries to ensure privacy.',
      'DNSSEC adds a layer of security to the DNS by digitally signing DNS data, protecting against DNS spoofing and cache poisoning attacks by verifying the authenticity and integrity of DNS responses.',
      'DNSSEC speeds up DNS resolution for all users.',
      'It makes DNS servers more vulnerable to attacks.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'What is \'Network Monitoring\' and its key metrics?',
    options: [
      'Network monitoring only checks if devices are turned on.',
      'Network monitoring tracks network performance, availability, and traffic patterns using key metrics like bandwidth utilization, latency, packet loss, and error rates to identify issues and optimize the network.',
      'Network monitoring increases network downtime.',
      'It is only performed manually by administrators.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'Describe \'Quality of Service (QoS)\' in networking.',
    options: [
      'QoS only affects network security.',
      'QoS is a set of technologies that guarantee a certain level of performance for data flow across a network, prioritizing certain types of traffic (e.g., voice, video) to ensure consistent delivery.',
      'QoS makes all network traffic slower.',
      'It is only used in small, simple networks.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'What are \'Access Control Lists (ACLs)\' used for on routers and switches?',
    options: [
      'To speed up data packet forwarding.',
      'To filter network traffic by permitting or denying packets based on predefined criteria like source/destination IP addresses, ports, and protocols, enhancing network security.',
      'To assign IP addresses to devices.',
      'To manage network cables.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'Explain \'Spanning Tree Protocol (STP)\' and its purpose in switched networks.',
    options: [
      'STP creates network loops to increase redundancy.',
      'STP is a network protocol that prevents network loops by logically blocking redundant paths in a switched network, ensuring a loop-free topology while providing path redundancy.',
      'STP only affects wireless networks.',
      'It increases broadcast storms in a network.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'What is \'Network Virtualization\' (e.g., SDN, NFV) and its benefits?',
    options: [
      'Network virtualization replaces all physical network hardware.',
      'Network virtualization creates virtual networks that are logically separated from the underlying physical network infrastructure, offering benefits like flexibility, scalability, and simplified management.',
      'Network virtualization complicates network management.',
      'It is only for small, isolated networks.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'Describe \'Proxy Servers\' and their role in network security and performance.',
    options: [
      'Proxy servers connect directly to the internet without filtering.',
      'Proxy servers act as an intermediary for requests from clients seeking resources from other servers, often used for security (filtering, anonymity) and performance (caching).',
      'Proxy servers are only for internal network communication.',
      'They increase direct exposure to external threats.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },
  {
    id: 'network-2',
    question: 'What is \'Wireless Access Point (WAP)\' and its basic function?',
    options: [
      'A device that broadcasts radio signals without connecting to a network.',
      'A networking hardware device that allows Wi-Fi compliant devices to connect to a wired network, acting as a central transmitter/receiver of wireless radio signals.',
      'A WAP is a type of router that provides only wired connections.',
      'It encrypts all data automatically without configuration.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'network-administration'
  },

  {
    id: 'network-3',
    question: 'Discuss \'Software-Defined Networking (SDN)\' and its impact on traditional network administration.',
    options: [
      'SDN centralizes control of network devices but does not impact management.',
      'SDN separates the network control plane from the data plane, centralizing network intelligence and enabling programmatic control of network behavior, leading to greater flexibility, automation, and simplified management compared to traditional distributed control.',
      'SDN increases manual configuration requirements for network devices.',
      'It is only applicable to very small, localized networks.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'Explain \'Network Function Virtualization (NFV)\' and its benefits in telecom networks.',
    options: [
      'NFV replaces all virtual network functions with physical hardware.',
      'NFV virtualizes network services (e.g., firewalls, routers, load balancers) that traditionally ran on proprietary hardware, allowing them to run as software on standard servers, offering flexibility, scalability, and cost reduction in telecom environments.',
      'NFV complicates the deployment of network services.',
      'It increases reliance on proprietary hardware vendors.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'Describe \'IPv6\' and its advantages over \'IPv4\'.',
    options: [
      'IPv6 uses shorter addresses than IPv4.',
      'IPv6 is the latest version of the Internet Protocol, designed to address the IPv4 address exhaustion problem by using 128-bit addresses (vs. 32-bit), also offering improved routing, security, and auto-configuration.',
      'IPv6 is less efficient for network routing.',
      'IPv6 is not compatible with modern network devices.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'What are \'Network Automation\' tools (e.g., Ansible, Puppet, Python scripts) and their role in DevOps for networking?',
    options: [
      'Network automation tools require manual configuration for every task.',
      'These tools automate repetitive network tasks like configuration, provisioning, and troubleshooting, reducing human error, increasing speed, and enabling infrastructure as code principles in network administration.',
      'Network automation increases network downtime.',
      'They are only for very simple network changes.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'Explain \'Zero Trust Network Access (ZTNA)\' and its shift from traditional perimeter security.',
    options: [
      'ZTNA assumes all internal network traffic is trustworthy.',
      'ZTNA operates on the principle of \'never trust, always verify,\' granting granular, context-aware access to resources only after strict verification of user and device identity, shifting from traditional perimeter-based security.',
      'ZTNA makes network access more cumbersome for legitimate users.',
      'It eliminates the need for any authentication mechanisms.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'Discuss \'Network Segmentation\' strategies (e.g., VLANs, micro-segmentation) for enhanced security.',
    options: [
      'Network segmentation always increases network complexity without security benefits.',
      'Segmentation divides a network into smaller, isolated segments to limit the lateral movement of threats. Strategies include VLANs (logical separation) and micro-segmentation (granular, application-level isolation).',
      'Segmentation is only for very large enterprises.',
      'It decreases overall network performance.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'What is \'SD-WAN\' (Software-Defined Wide Area Network) and its advantages over traditional WANs?',
    options: [
      'SD-WAN is a physical device that connects remote offices.',
      'SD-WAN leverages software-defined principles to intelligently route traffic over multiple connection types (MPLS, broadband, LTE), offering centralized management, improved performance, and cost savings compared to traditional hardware-centric WANs.',
      'SD-WAN increases the cost of network infrastructure.',
      'It provides less flexibility in network routing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'Describe \'Network Performance Monitoring (NPM)\' tools and advanced troubleshooting techniques.',
    options: [
      'NPM tools only show network uptime.',
      'NPM tools collect and analyze network data (packet flow, latency, jitter) to provide deep insights into network health and application performance. Advanced techniques include packet analysis, baseline comparisons, and root cause analysis.',
      'NPM increases network overhead and reduces performance.',
      'It eliminates the need for human network administrators.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'Explain \'Load Balancing Algorithms\' (e.g., Round Robin, Least Connections, IP Hash) and their applications.',
    options: [
      'Load balancing algorithms send all traffic to the same server.',
      'These algorithms determine how incoming network traffic is distributed among a group of backend servers. Different algorithms prioritize fairness, current load, or session persistence, optimizing resource utilization and reliability.',
      'Load balancing algorithms only apply to single-server deployments.',
      'They increase the likelihood of server overload.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'What are \'Network Access Control (NAC)\' solutions and their security benefits?',
    options: [
      'NAC solutions only manage physical access to network equipment.',
      'NAC solutions identify and control network access for devices and users, enforcing security policies before granting access, helping to prevent unauthorized access and control endpoints.',
      'NAC solutions complicate network onboarding for legitimate users.',
      'They are primarily used for network speed optimization.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'How do \'Container Networking\' solutions (e.g., Docker Bridge, Kubernetes CNI) work?',
    options: [
      'Container networking isolates containers completely from each other and the host.',
      'These solutions provide network connectivity and communication between containers within a host and across hosts, enabling scalable and flexible microservices deployments in cloud-native environments.',
      'Container networking requires manual configuration for every container.',
      'It reduces the portability of containerized applications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'Discuss \'Network Security Best Practices\' for cloud environments (e.g., shared responsibility, IAM, network segmentation).',
    options: [
      'Cloud environments remove all network security responsibilities from the customer.',
      'Best practices include understanding the shared responsibility model, implementing robust Identity and Access Management (IAM), applying network segmentation (VPCs, security groups), and using cloud-native security tools.',
      'Cloud network security is less complex than on-premises security.',
      'It relies solely on the cloud provider for all security measures.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'What is \'IPv6 Transition Mechanisms\' (e.g., Dual Stack, Tunneling, Translation) and why are they needed?',
    options: [
      'IPv6 transition mechanisms are only for converting IPv4 addresses to IPv6 permanently.',
      'They are techniques to enable communication between IPv4 and IPv6 networks during the transition period, allowing gradual adoption of IPv6 without disrupting existing IPv4 infrastructure.',
      'These mechanisms simplify network addressing permanently.',
      'They are only necessary for new network deployments.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'Describe \'Wireless Network Security Protocols\' (e.g., WPA3, 802.1X) and their advancements.',
    options: [
      'Wireless protocols like WEP are still considered secure today.',
      'Protocols like WPA3 offer stronger encryption (SAE handshake) and improved privacy compared to older standards. 802.1X provides port-based network access control for authenticated devices.',
      'These protocols reduce wireless network performance significantly.',
      'They are irrelevant for securing modern Wi-Fi networks.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'network-3',
    question: 'Explain \'NetFlow/IPFIX\' and their role in network visibility and security analytics.',
    options: [
      'NetFlow/IPFIX only track basic network connectivity.',
      'NetFlow/IPFIX are network protocols that collect and export IP traffic flow information, providing detailed visibility into network usage, performance, and security events for anomaly detection and forensic analysis.',
      'These protocols increase network congestion significantly.',
      'They are primarily used for network device configuration.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'network-administration'
  },
  {
    id: 'testing-1',
    question: 'What is the primary goal of Software Testing?',
    options: [
      'To design the software architecture.',
      'To verify and validate that a software application meets requirements and is free of bugs.',
      'To write programming code.',
      'To market the software product.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'Which of the following is NOT a phase in the Software Development Life Cycle (SDLC)?',
    options: [
      'Requirements Gathering',
      'Design',
      'Testing',
      'Cooking'
    ],
    correctAnswer: 3,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'What does \'QA\' commonly stand for in software development?',
    options: [
      'Quality Assurance',
      'Quick Assessment',
      'Question Analysis',
      'Query Automation'
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'What is \'Manual Testing\'?',
    options: [
      'Testing software using automated scripts and tools.',
      'Testing software by physically interacting with it as an end-user would, without automation tools.',
      'Testing only the hardware components.',
      'Testing only the performance of the software.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'Which type of testing focuses on individual units or components of code?',
    options: [
      'System Testing',
      'Integration Testing',
      'Unit Testing',
      'User Acceptance Testing'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'What is a \'bug\' in software?',
    options: [
      'A type of insect.',
      'An error, flaw, or fault in a computer program or system that causes it to produce an incorrect or unexpected result.',
      'A new software feature.',
      'A type of hardware component.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'What is \'Black-Box Testing\'?',
    options: [
      'Testing based on knowledge of the internal code structure.',
      'Testing software functionality without knowledge of its internal code structure or implementation.',
      'Testing software in a dark room.',
      'Testing only the graphical user interface.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'What is \'White-Box Testing\'?',
    options: [
      'Testing software functionality without knowledge of its internal code.',
      'Testing based on knowledge of the internal structure, design, and implementation of the software.',
      'Testing software in a brightly lit room.',
      'Testing only the external user interface.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'Which document outlines the overall scope, approach, resources, and schedule of testing activities?',
    options: [
      'Test Case',
      'Bug Report',
      'Test Plan',
      'User Manual'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'What is \'Regression Testing\'?',
    options: [
      'Testing new features only.',
      'Testing existing software functionalities after changes or new features have been added, to ensure that new code has not adversely affected existing functionalities.',
      'Testing only for performance issues.',
      'Testing software for the first time.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'What is the purpose of a \'Test Case\'?',
    options: [
      'To provide a general overview of the testing process.',
      'To document a set of conditions, steps, and expected results to verify a particular feature or functionality of a software application.',
      'To report a bug after it is found.',
      'To manage the testing team schedule.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'Which phase in the Bug Life Cycle means the bug has been found and logged but not yet reviewed?',
    options: [
      'Fixed',
      'Closed',
      'New',
      'Assigned'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'What is \'User Acceptance Testing (UAT)\'?',
    options: [
      'Testing done by developers before release.',
      'Testing performed by end-users or clients to confirm that the system meets their requirements and works in real-world scenarios.',
      'Testing individual code units.',
      'Testing for security vulnerabilities.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'What does \'STLC\' stand for?',
    options: [
      'Software Design Life Cycle',
      'Software Test Logistics Control',
      'Software Testing Life Cycle',
      'Systematic Test Line Code'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'software-testing'
  },
  {
    id: 'testing-1',
    question: 'Which type of testing ensures the software is compatible across different browsers, operating systems, or devices?',
    options: [
      'Usability Testing',
      'Performance Testing',
      'Compatibility Testing',
      'Security Testing'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'software-testing'
  },

  {
    id: 'testing-2',
    question: 'Explain the difference between \'Verification\' and \'Validation\' in software testing.',
    options: [
      'Verification is checking the right product; Validation is building the product right.',
      'Verification checks if the product is built right (e.g., meeting specifications); Validation checks if the right product is built (e.g., meeting user needs and requirements).',
      'Verification is only for manual testing; Validation is for automated testing.',
      'They are interchangeable terms with no practical difference.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'Describe \'Test Automation Frameworks\' (e.g., Selenium, Appium, Playwright) and their benefits.',
    options: [
      'Test automation frameworks are physical testing devices.',
      'Test automation frameworks are collections of rules, guidelines, and tools for designing and generating automated test cases, improving test efficiency, speed, and consistency.',
      'Automation frameworks increase the manual effort in testing.',
      'They are only for very small software projects.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'What is \'Performance Testing\' and its key metrics (e.g., Response Time, Throughput, Latency)?',
    options: [
      'Performance testing only checks software functionality.',
      'Performance testing evaluates how a software system performs under a particular workload. Key metrics include response time (how quickly system responds), throughput (transactions per second), and latency (delay in data transfer).',
      'Performance testing is only for security vulnerabilities.',
      'It increases the system\'s resource consumption permanently.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'Explain \'API Testing\' and why it is important for modern applications.',
    options: [
      'API testing only checks the graphical user interface.',
      'API (Application Programming Interface) testing involves testing the interfaces between software components or systems, without a GUI, to ensure functionality, reliability, performance, and security at the integration layer.',
      'API testing is irrelevant for microservices architecture.',
      'It is only performed manually by developers.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'What is \'Test Data Management\' and its significance?',
    options: [
      'Test data management is only about creating random data.',
      'Test data management involves planning, designing, creating, and maintaining test data for software testing, ensuring realistic, relevant, and secure data is available for accurate testing scenarios.',
      'Test data management increases the risk of data breaches.',
      'It is only for managing production data.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'Describe \'Exploratory Testing\' and when it is most effective.',
    options: [
      'Exploratory testing requires predefined test cases and scripts.',
      'Exploratory testing is a simultaneous learning, test design, and test execution approach where testers actively explore the software without predefined scripts, often effective for finding unexpected bugs or complex scenarios.',
      'Exploratory testing is only for confirming known issues.',
      'It is a method of automated testing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'What are \'Test Environments\' and why is it crucial to manage them effectively?',
    options: [
      'Test environments are only physical rooms for testers.',
      'Test environments are setups of hardware, software, and network configurations where testing is performed. Managing them effectively ensures consistency, isolation, and accurate simulation of production conditions.',
      'Test environments increase the complexity of software deployment.',
      'They are identical to production environments and require no separate management.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'Explain \'Load Testing\' and \'Stress Testing\' as types of performance testing.',
    options: [
      'Load testing and stress testing are identical.',
      'Load testing evaluates system behavior under expected normal or peak user loads; Stress testing pushes the system beyond its normal operational limits to determine its robustness and stability under extreme conditions.',
      'Load testing is only for network infrastructure.',
      'Stress testing is only for individual components.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'What is \'Static Testing\' and its advantages over dynamic testing?',
    options: [
      'Static testing involves executing the code to find defects.',
      'Static testing analyzes software artifacts (e.g., code, documentation, requirements) without actually executing the code, allowing for early defect detection (e.g., through code reviews, static analysis tools) and reduced cost.',
      'Static testing can find all types of bugs.',
      'It is a less efficient method for bug detection.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'Describe \'Test Coverage\' and its significance.',
    options: [
      'Test coverage refers to the geographical area where testing is performed.',
      'Test coverage is a metric that measures the amount of code executed by a set of tests, indicating the thoroughness of testing and helping identify untested areas, crucial for assessing test suite quality.',
      'Test coverage is only for automated tests.',
      'It is irrelevant to software quality.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'What is \'Continuous Testing\' in DevOps?',
    options: [
      'Continuous testing is only performed at the end of the development cycle.',
      'Continuous testing is the process of executing automated tests as part of the software delivery pipeline to obtain immediate feedback on the business risks associated with a software release candidate.',
      'Continuous testing increases the time to market for software.',
      'It replaces the need for any manual testing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'Explain \'Boundary Value Analysis (BVA)\' and \'Equivalence Partitioning (EP)\' in test case design.',
    options: [
      'BVA and EP are only used for security testing.',
      'BVA tests values at the boundaries of input ranges to find errors; EP divides input data into partitions where all values are expected to behave similarly, selecting one representative from each for testing.',
      'These techniques increase the number of unnecessary test cases.',
      'They are only applicable to non-functional testing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'What is a \'Defect Triage\' meeting in the bug life cycle?',
    options: [
      'A meeting to assign blame for bugs.',
      'A meeting where the project team (developers, testers, product owners) reviews newly reported bugs to prioritize them, assign severity, and determine the next steps for resolution.',
      'A meeting to celebrate bug-free software.',
      'A meeting to discuss new software features.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'Describe \'End-to-End Testing\' and its role in validating user flows.',
    options: [
      'End-to-end testing only checks individual system components.',
      'End-to-end testing simulates real user scenarios, verifying that an entire software system, including all integrated modules and external interfaces, functions correctly from start to finish to validate complete user flows.',
      'End-to-end testing is always a manual process.',
      'It is irrelevant for complex, multi-system applications.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },
  {
    id: 'testing-2',
    question: 'What are \'Test Harness\' and \'Test Stub/Driver\' in component testing?',
    options: [
      'Test harness is a physical device; test stub/driver is a software program.',
      'A test harness is a collection of software and test data configured to test a program unit by running it under varying conditions. Stubs simulate called modules; drivers simulate calling modules to isolate testing.',
      'They are only used for system-level testing.',
      'They increase the complexity of unit testing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'software-testing'
  },

  {
    id: 'testing-3',
    question: 'Discuss \'Test-Driven Development (TDD)\' and \'Behavior-Driven Development (BDD)\' methodologies.',
    options: [
      'TDD and BDD are identical approaches to testing.',
      'TDD focuses on writing automated unit tests *before* writing code; BDD emphasizes defining software behavior from a user\'s perspective in a shared, readable language *before* development, often using Gherkin syntax.',
      'TDD is for functional testing; BDD is for non-functional testing.',
      'Neither TDD nor BDD involves automated testing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'Explain \'Mutation Testing\' and its purpose in evaluating test suite effectiveness.',
    options: [
      'Mutation testing is a type of performance testing.',
      'Mutation testing intentionally introduces small changes (mutations) into the source code to see if existing test suites can detect these changes (kill the mutants), measuring the effectiveness and thoroughness of the test suite itself.',
      'Mutation testing is only for manual testing.',
      'It increases the number of false positives in test results.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'Describe \'AI/ML\' applications in advanced software testing (e.g., predictive analytics, test case generation, self-healing tests).',
    options: [
      'AI/ML in testing replaces human testers entirely.',
      'AI/ML can analyze historical data to predict defect-prone areas, automatically generate test cases, optimize test suite execution, and enable self-healing test scripts, enhancing efficiency and accuracy in complex systems.',
      'AI/ML introduces more errors into the testing process.',
      'It is only used for very basic, repetitive testing tasks.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'What are \'Chaos Engineering\' and \'Fault Injection\' in the context of software testing and system resilience?',
    options: [
      'Chaos engineering aims to prevent any system failures by design.',
      'Chaos engineering is the practice of intentionally introducing failures into a system (fault injection) to test its resilience and identify weaknesses before they cause real-world outages, beyond traditional testing methods.',
      'Chaos engineering is only for physical hardware testing.',
      'It makes systems less stable and reliable.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'Explain \'Performance Testing Architectures\' (e.g., distributed load generation, cloud-based testing).',
    options: [
      'Performance testing architectures are only for single-user scenarios.',
      'These architectures involve simulating large user loads from multiple geographic locations using distributed load generators or cloud services, to accurately assess system performance, scalability, and response times under realistic conditions.',
      'Performance testing architectures reduce the accuracy of test results.',
      'It is irrelevant for high-volume applications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'Discuss \'Security Testing Methodologies\' (e.g., Penetration Testing, Vulnerability Scanning, Static/Dynamic Analysis).',
    options: [
      'Security testing only involves checking for strong passwords.',
      'Methodologies include penetration testing (simulated attacks), vulnerability scanning (automated checks for known flaws), and static (SAST) or dynamic (DAST) application security testing to identify and remediate security vulnerabilities.',
      'Security testing always guarantees a completely secure system.',
      'It is only performed at the very end of the SDLC.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'What is \'Test Observability\' and its importance in modern DevOps pipelines?',
    options: [
      'Test observability is only about viewing test execution logs.',
      'Test observability involves collecting comprehensive data (metrics, logs, traces) from testing processes to gain deep insights into test failures, performance bottlenecks, and overall test suite health, enabling faster debugging and continuous improvement.',
      'Test observability increases the manual effort in analyzing test results.',
      'It is irrelevant to the overall quality of software releases.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'Describe \'Test Data Virtualization\' and its benefits in complex testing scenarios.',
    options: [
      'Test data virtualization eliminates the need for any test data.',
      'Test data virtualization creates virtual, on-demand test data environments that mimic production data, enabling testers to access realistic, secure, and compliant data without copying large production databases, improving test efficiency.',
      'Test data virtualization increases the risk of data exposure.',
      'It is only suitable for very small test datasets.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'Explain \'Model-Based Testing\' and its advantages.',
    options: [
      'Model-based testing requires manually creating all test cases.',
      'Model-based testing generates test cases automatically from abstract models of software behavior, allowing for more comprehensive test coverage and efficient test generation, especially for complex systems.',
      'Model-based testing increases the manual effort in test design.',
      'It is only suitable for simple, linear software flows.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'How do \'Service Virtualization\' and \'Mocking\' aid in integration testing of distributed systems?',
    options: [
      'Service virtualization and mocking require all external services to be real.',
      'Service virtualization creates virtual versions of unavailable or costly external services; Mocking simulates the behavior of specific dependencies. Both enable isolated, repeatable integration testing in distributed systems without relying on live services.',
      'They increase dependencies on external systems.',
      'They are only used for unit testing, not integration testing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'What are \'Test Oracles\' in automated testing, and why are they crucial?',
    options: [
      'Test oracles are automated tools that write test cases.',
      'Test oracles are mechanisms (e.g., human, existing system, independent logic) that determine whether the observed behavior of a system under test is correct for a given set of inputs, crucial for automated test verification.',
      'Test oracles always guarantee bug-free software.',
      'They are only used for manual testing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'Describe \'Shift-Right Testing\' (or Production Testing) in a mature DevOps context.',
    options: [
      'Shift-right testing means delaying all testing until after deployment.',
      'Shift-right testing involves performing testing activities in production or near-production environments (e.g., A/B testing, Canary releases, monitoring) to gain real-world insights, verify performance under load, and detect issues before they impact all users.',
      'Shift-right testing increases the risk of production outages.',
      'It replaces the need for any pre-production testing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'What is \'Accessibility Testing\' for compliance (e.g., WCAG) and its methodologies?',
    options: [
      'Accessibility testing only involves checking for visual impairments.',
      'Accessibility testing ensures software is usable by people with disabilities, often guided by WCAG (Web Content Accessibility Guidelines). Methodologies include automated tools, manual checks, and usability testing with diverse users.',
      'Accessibility testing is only a legal requirement, not a quality concern.',
      'It increases development time without improving user experience.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'Explain \'Static Application Security Testing (SAST)\' vs. \'Dynamic Application Security Testing (DAST)\'.',
    options: [
      'SAST and DAST are identical security testing methods.',
      'SAST analyzes source code without execution to find vulnerabilities; DAST analyzes running applications (from outside-in) to find vulnerabilities that occur during execution, both for application security testing.',
      'SAST is only for compiled code; DAST is for uncompiled code.',
      'Neither is effective for modern web applications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'testing-3',
    question: 'Discuss \'Test Data Generation\' techniques for large and complex datasets.',
    options: [
      'Test data generation always involves manually creating all data.',
      'Techniques include synthetic data generation, data anonymization/masking of production data, and leveraging AI/ML to create realistic and diverse datasets, crucial for testing complex scenarios without using sensitive live data.',
      'Test data generation is unnecessary for large applications.',
      'It increases the risk of data exposure in testing environments.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'software-testing'
  },
  {
    id: 'sysadmin-1',
    question: 'What is the primary role of a System Administrator?',
    options: [
      'To write application code.',
      'To manage and maintain computer systems and servers, ensuring their smooth operation and availability.',
      'To design website layouts.',
      'To market software products.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'Which of the following is a common operating system managed by system administrators?',
    options: [
      'Microsoft Word',
      'Linux',
      'Adobe Photoshop',
      'Microsoft Excel'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'What is a \'server\' in the context of system administration?',
    options: [
      'A personal desktop computer.',
      'A powerful computer or program that provides services to other computers or users (clients) over a network.',
      'A type of network cable.',
      'A device for printing documents.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'What is the purpose of \'user account management\'?',
    options: [
      'To design user interfaces.',
      'To create, modify, and delete user accounts, defining their access rights and permissions.',
      'To track website visitors.',
      'To install operating systems automatically.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'Which command line tool is commonly used in Linux to list files and directories?',
    options: [
      'cd',
      'mkdir',
      'ls',
      'rm'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'What is a \'backup\' in system administration?',
    options: [
      'To permanently delete files.',
      'To create copies of data or system configurations that can be restored in case of data loss, corruption, or system failure.',
      'To encrypt sensitive data only.',
      'To share files publicly.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'What is \'patch management\'?',
    options: [
      'Manually fixing hardware issues.',
      'The process of acquiring, testing, and installing updates (patches) to software and operating systems to fix bugs, improve performance, and address security vulnerabilities.',
      'Designing new software features.',
      'Monitoring network traffic.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'Which of the following is a common task for ensuring system security?',
    options: [
      'Using weak, easily guessable passwords.',
      'Regularly updating antivirus software and performing security scans.',
      'Disabling the firewall.',
      'Sharing administrator credentials freely.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'What is \'disk space management\'?',
    options: [
      'Physical arrangement of server racks.',
      'Monitoring and optimizing storage utilization on servers and drives, including cleaning up unnecessary files and managing quotas.',
      'Formatting hard drives to erase all data.',
      'Purchasing new server hardware.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'What is \'system monitoring\'?',
    options: [
      'Ignoring system logs and alerts.',
      'Collecting and analyzing data on system performance (e.g., CPU, memory, disk usage) and health to identify issues and ensure optimal operation.',
      'Shutting down servers regularly for maintenance.',
      'Only tracking user logins.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'Which command line tool is used in Windows to view network configuration?',
    options: [
      'ping',
      'ipconfig',
      'tracert',
      'netstat'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'What is a \'Service Level Agreement (SLA)\' in IT operations?',
    options: [
      'A document outlining hardware specifications only.',
      'A contract between a service provider and a customer that defines the level of service expected, including uptime, response times, and performance metrics.',
      'A technical manual for software installation.',
      'A list of all installed software on a server.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'What is \'remote access\' in system administration?',
    options: [
      'Physically interacting with servers in a data center.',
      'Accessing and managing computer systems or servers from a different physical location, often using tools like SSH or Remote Desktop Protocol (RDP).',
      'Blocking all external connections to a server.',
      'Only accessing files stored locally on a desktop.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'What is \'troubleshooting\' in system administration?',
    options: [
      'Ignoring system errors and hoping they resolve themselves.',
      'The process of identifying, diagnosing, and resolving problems or issues in computer systems, networks, or software applications.',
      'Installing new software without testing.',
      'Performing regular system backups.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-1',
    question: 'Which term refers to applying updates or changes to a system without taking it offline?',
    options: [
      'Hard Reboot',
      'Cold Patch',
      'Hot Patching / Live Patching',
      'Full System Reinstall'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'system-administration'
  },

  {
    id: 'sysadmin-2',
    question: 'Explain \'RAID\' (Redundant Array of Independent Disks) levels (e.g., RAID 0, RAID 1, RAID 5) and their use cases.',
    options: [
      'RAID is a type of network protocol for data transfer.',
      'RAID levels combine multiple physical disk drives into a single logical unit to improve performance (RAID 0), provide data redundancy (RAID 1), or a combination of both (RAID 5) for storage reliability and speed.',
      'RAID increases the risk of data loss.',
      'RAID is only for solid-state drives (SSDs).'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'Describe \'Virtualization\' (e.g., VMware, Hyper-V, KVM) and its advantages in system administration.',
    options: [
      'Virtualization involves installing multiple physical servers.',
      'Virtualization creates virtual versions of computing resources (e.g., servers, operating systems, storage) on a single physical hardware, improving resource utilization, flexibility, and disaster recovery capabilities.',
      'Virtualization complicates system management.',
      'It increases the cost of IT infrastructure.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'What is \'Active Directory\' in Windows Server environments and its primary functions?',
    options: [
      'Active Directory is a web server for hosting websites.',
      'Active Directory is a directory service developed by Microsoft for Windows domain networks, used for managing user and computer accounts, authentication, authorization, and network resource management.',
      'Active Directory is only for managing physical hardware devices.',
      'It is a database system for storing unstructured data.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'Explain \'Containerization\' (e.g., Docker, Kubernetes) and its role in modern system administration.',
    options: [
      'Containerization replaces the need for any operating systems.',
      'Containerization packages applications and their dependencies into isolated, portable units (containers) that can run consistently across various environments, simplifying deployment, scaling, and management for administrators.',
      'Containers are heavier and less efficient than virtual machines.',
      'Containerization is only for development environments, not production.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'What is \'Network File System (NFS)\' or \'Server Message Block (SMB)\'?',
    options: [
      'Protocols for connecting to the internet.',
      'Protocols that allow computers to share files and resources over a network, making remote files appear as if they are stored locally on the user\'s system.',
      'Protocols for encrypting network traffic.',
      'Protocols for managing network devices.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'Describe \'Log Management\' and its importance for system analysis and security.',
    options: [
      'Log management involves deleting all system logs regularly.',
      'Log management is the process of collecting, storing, analyzing, and archiving log data generated by computer systems and applications, crucial for troubleshooting, security auditing, and compliance.',
      'Log management increases the system\'s attack surface.',
      'It is irrelevant for identifying security incidents.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'What is \'Automated Provisioning\' (e.g., Ansible, Puppet, Chef) in system administration?',
    options: [
      'Manually setting up each server and configuring software.',
      'Automated provisioning uses software tools to automatically set up, configure, and manage servers and other infrastructure components, ensuring consistency and reducing manual errors.',
      'Automated provisioning increases the time required for system setup.',
      'It is only for small-scale deployments.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'Explain \'Load Balancing\' and its role in ensuring high availability and scalability.',
    options: [
      'Load balancing directs all user traffic to a single server.',
      'Load balancing distributes incoming network traffic across multiple servers to prevent any single server from being overwhelmed, ensuring high availability, improving performance, and enabling scalability.',
      'Load balancing increases network latency for user requests.',
      'It is only for physical server management.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'What is \'Single Sign-On (SSO)\' and its benefits?',
    options: [
      'SSO requires users to log in separately to each application.',
      'SSO is an authentication scheme that allows a user to log in with a single ID and password to gain access to multiple related but independent software systems, improving user experience and security management.',
      'SSO increases the risk of unauthorized access.',
      'It is only for managing physical user access.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'Describe \'Disaster Recovery Planning\' for IT systems.',
    options: [
      'Disaster recovery planning is only about restoring data from old backups.',
      'Disaster recovery planning involves creating strategies and procedures to ensure that critical IT infrastructure and systems can be restored or continued after a major disruption or disaster, minimizing downtime and data loss.',
      'Disaster recovery planning increases system vulnerabilities.',
      'It is a one-time process that requires no updates.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'What is \'Command-Line Interface (CLI)\' vs. \'Graphical User Interface (GUI)\'?',
    options: [
      'CLI is always faster and easier to learn than GUI.',
      'CLI allows users to interact with a system by typing commands; GUI provides a visual, icon-based interface for interaction, each having pros and cons for system administration tasks.',
      'GUI is only for programming; CLI is for end-users.',
      'They are interchangeable and offer the same level of control.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'What is \'Network Attached Storage (NAS)\' vs. \'Storage Area Network (SAN)\'?',
    options: [
      'NAS and SAN are identical storage solutions.',
      'NAS provides file-level data storage over a network; SAN provides block-level data storage, often appearing as local disks to servers, each suited for different storage needs and performance requirements.',
      'NAS is typically more expensive than SAN for large-scale deployments.',
      'SAN is primarily used for individual workstation storage.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'Explain \'User Permissions and Access Control Lists (ACLs)\' in operating systems.',
    options: [
      'User permissions allow all users full access to all files.',
      'Permissions define what actions users or groups can perform on files, directories, or system resources; ACLs provide granular control over these permissions, enhancing security and resource management.',
      'ACLs simplify permission management for complex systems.',
      'They increase the risk of unauthorized data access.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'What is \'Monitoring Alerts and Notifications\' in system administration?',
    options: [
      'Ignoring system warnings and errors.',
      'Setting up automated notifications (e.g., email, SMS) based on predefined thresholds for system metrics (e.g., CPU usage, disk space) to proactively address potential issues.',
      'Alerts are only for physical hardware failures.',
      'They increase the time required for issue resolution.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-2',
    question: 'Describe \'Service Management\' frameworks like ITIL and their impact on system administration.',
    options: [
      'ITIL focuses solely on hardware maintenance.',
      'ITIL (Information Technology Infrastructure Library) provides a set of best practices for IT service management, helping system administrators align IT services with business needs, improve efficiency, and enhance service delivery.',
      'ITIL increases the bureaucracy in IT operations.',
      'It is irrelevant for managing modern IT infrastructure.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'system-administration'
  },

  {
    id: 'sysadmin-3',
    question: 'Discuss \'Configuration Management\' tools (e.g., Ansible, Puppet, Chef, SaltStack) and their role in large-scale system automation.',
    options: [
      'Configuration management tools are only for manual server setup.',
      'These tools automate the consistent deployment, configuration, and management of server fleets and infrastructure, ensuring desired state configuration, reducing configuration drift, and enabling rapid scaling in large environments.',
      'Configuration management increases manual errors and inconsistencies.',
      'They are only suitable for very small, single-server deployments.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'Explain \'Cloud Migration Strategies\' (e.g., Rehost, Replatform, Refactor) and their considerations for system administrators.',
    options: [
      'Cloud migration always requires a complete rewrite of all applications.',
      'Strategies involve moving existing systems to cloud infrastructure (rehost/lift-and-shift), modifying them for cloud benefits (replatform), or rebuilding for cloud-native principles (refactor), each with implications for administrative effort and optimization.',
      'Cloud migration is a simple, one-time process with no challenges.',
      'It increases the amount of on-premises infrastructure to manage.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'Describe \'Identity and Access Management (IAM)\' in enterprise environments (e.g., LDAP, Active Directory, SSO, OAuth).',
    options: [
      'IAM focuses only on managing physical access to buildings.',
      'IAM is a framework of policies and technologies to ensure that the right individuals have the right access to the right resources at the right time, including user provisioning, authentication, authorization, and centralized identity stores.',
      'IAM increases the risk of unauthorized access.',
      'It eliminates the need for any passwords.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'What are \'High Availability (HA)\' and \'Disaster Recovery (DR)\' architectures (e.g., clustering, replication, failover) for critical systems?',
    options: [
      'HA and DR are identical concepts.',
      'HA architectures (e.g., clustering, load balancing) ensure continuous operation by minimizing downtime; DR architectures (e.g., cross-region replication, automated failover) enable recovery from major outages, both crucial for critical systems.',
      'HA and DR solutions increase system vulnerabilities.',
      'They are only applicable to single-server deployments.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'Explain \'Site Reliability Engineering (SRE)\' principles and their impact on traditional system administration.',
    options: [
      'SRE is a direct replacement for all system administration tasks.',
      'SRE applies software engineering principles to operations, focusing on reliability, automation, measurement, and toil reduction. It shifts sysadmins towards engineering tasks (e.g., coding, automation) and shared ownership of service reliability.',
      'SRE discourages automation and manual work.',
      'SRE is only for development teams.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'Discuss \'Centralized Log Management\' (e.g., ELK Stack, Splunk) and its role in incident response and security analytics.',
    options: [
      'Centralized log management complicates log analysis.',
      'It involves collecting, aggregating, and analyzing log data from all systems in a central location, providing comprehensive visibility for rapid troubleshooting, security incident detection, forensic analysis, and compliance auditing.',
      'Centralized log management increases system overhead without benefits.',
      'It is only for managing very small volumes of log data.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'What is \'Infrastructure as Code (IaC)\' best practices (e.g., idempotency, version control, testing) for managing cloud/on-prem infrastructure?',
    options: [
      'IaC simplifies infrastructure management by allowing manual changes only.',
      'Best practices ensure IaC scripts are idempotent (running multiple times yields same result), version-controlled (Git), and tested like application code, promoting consistency, auditability, and collaboration.',
      'IaC increases the risk of configuration drift.',
      'It is only applicable to very small, static infrastructure deployments.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'Describe \'Performance Tuning Methodologies\' for operating systems and applications (e.g., bottlenecks, profiling, optimization).',
    options: [
      'Performance tuning is only about purchasing faster hardware.',
      'Methodologies involve identifying system bottlenecks (CPU, memory, I/O, network), using profiling tools to pinpoint performance issues, and applying specific optimizations to OS settings, application code, or database configurations.',
      'Performance tuning always introduces new system instabilities.',
      'It is a one-time task that guarantees perpetual optimal performance.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'Explain \'Cloud Cost Optimization Strategies\' (e.g., right-sizing, reserved instances, spot instances, FinOps).',
    options: [
      'Cloud cost optimization means always choosing the most expensive cloud services.',
      'Strategies involve optimizing cloud spending by adjusting resource sizes (right-sizing), committing to long-term usage (reserved instances), leveraging unused capacity (spot instances), and implementing FinOps practices to manage variable cloud costs.',
      'Cloud cost optimization reduces cloud service capabilities.',
      'It is only relevant for very large enterprises.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'How do you approach \'Security Hardening\' for Linux/Windows servers?',
    options: [
      'Security hardening involves installing minimal software and disabling all security features.',
      'Approach includes applying the principle of least privilege, disabling unnecessary services, regularly patching, configuring firewalls, auditing logs, and implementing robust authentication/authorization mechanisms.',
      'Security hardening always leads to reduced server performance.',
      'It is a one-time configuration with no ongoing maintenance.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'What is \'Orchestration\' (e.g., Kubernetes) for containerized workloads and its benefits?',
    options: [
      'Orchestration is only for manual container deployment.',
      'Orchestration automates the deployment, scaling, management, and networking of containerized applications across clusters of machines, improving efficiency, resilience, and resource utilization for large-scale deployments.',
      'Orchestration increases the complexity of managing containers.',
      'It eliminates the need for any underlying operating systems.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'Describe \'Root Cause Analysis (RCA)\' in system administration and its methodologies (e.g., 5 Whys, Fishbone Diagram).',
    options: [
      'RCA focuses on blaming individuals for system failures.',
      'RCA is a systematic process for identifying the underlying causes of problems or incidents in IT systems, rather than just addressing symptoms, using methodologies like the 5 Whys or Fishbone diagrams to prevent recurrence.',
      'RCA is only performed for minor system issues.',
      'It is irrelevant for proactive system management.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'What is \'Metrics-Driven Monitoring\' and its role in proactive system administration?',
    options: [
      'Metrics-driven monitoring focuses only on human-generated reports.',
      'It involves collecting, visualizing, and analyzing key performance metrics (e.g., CPU utilization, memory, network I/O, application response times) to identify trends, predict issues, and proactively optimize system health and performance.',
      'Metrics-driven monitoring increases manual intervention for system issues.',
      'It is only for historical data analysis, not real-time insights.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'Explain \'Automation with Scripting Languages\' (e.g., Python, PowerShell, Bash) for repetitive tasks.',
    options: [
      'Scripting languages are only for writing complex applications.',
      'Scripting languages enable system administrators to automate repetitive, time-consuming tasks (e.g., user provisioning, log analysis, system updates), improving efficiency, consistency, and reducing human error.',
      'Automation with scripting increases the risk of manual errors.',
      'It is only useful for very small, one-off tasks.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'sysadmin-3',
    question: 'Discuss \'IT Asset Management (ITAM)\' and \'Software Asset Management (SAM)\' in an enterprise context.',
    options: [
      'ITAM and SAM are only concerned with physical inventory tracking.',
      'ITAM manages the lifecycle of all IT assets (hardware, software) to optimize costs, improve service delivery, and mitigate risks. SAM specifically manages software licenses and usage to ensure compliance and cost efficiency.',
      'ITAM and SAM increase IT spending without benefits.',
      'They are irrelevant for cybersecurity and compliance.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'system-administration'
  },
  {
    id: 'business-analysis-1',
    question: 'What is the primary role of a Business Analyst?',
    options: [
      'To write programming code for software development.',
      'To bridge the gap between business needs and technology solutions.',
      'To manage project budgets and timelines.',
      'To market and sell business products.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'Which of the following is a key activity in the Requirements Elicitation phase?',
    options: [
      'Writing test cases for software.',
      'Gathering information from stakeholders about their needs and expectations.',
      'Deploying software to production.',
      'Designing user interfaces.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'What does \'BRD\' commonly stand for in business analysis?',
    options: [
      'Business Reporting Document',
      'Business Requirements Document',
      'Budget Review Document',
      'Branch Resource Directory'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'What is a \'Stakeholder\' in a business analysis project?',
    options: [
      'Someone who invests money in the project only.',
      'Any individual, group, or organization who may affect, be affected by, or perceive themselves to be affected by a decision, activity, or outcome of a project.',
      'A member of the technical development team only.',
      'The project manager exclusively.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'What is the purpose of \'Feasibility Study\' in a project?',
    options: [
      'To write detailed software specifications.',
      'To assess the practicality and viability of a proposed project or solution.',
      'To define the visual design of a product.',
      'To market the final product.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'Which technique is used to visually represent a sequence of activities or steps in a process?',
    options: [
      'Gantt Chart',
      'Flowchart',
      'Bar Chart',
      'Pie Chart'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'What is \'Scope Creep\'?',
    options: [
      'A planned expansion of project deliverables.',
      'The unauthorized or uncontrolled expansion of project scope without adjustments to time, cost, and resources.',
      'A method for reducing project costs.',
      'A technique for managing project risks.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'What is a \'Use Case\' in requirements analysis?',
    options: [
      'A historical example of project failure.',
      'A description of how users will interact with a system to achieve a specific goal.',
      'A legal document outlining system requirements.',
      'A programming function in software.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'Which methodology emphasizes iterative and incremental development, with close collaboration between business and development teams?',
    options: [
      'Waterfall',
      'Agile',
      'Spiral',
      'V-Model'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'What is the purpose of \'Requirements Validation\'?',
    options: [
      'To gather new requirements from stakeholders.',
      'To ensure that the gathered requirements are correct, complete, consistent, and meet the business needs.',
      'To prioritize requirements for development.',
      'To document requirements without stakeholder input.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'What is \'AS-IS\' vs. \'TO-BE\' process modeling?',
    options: [
      'AS-IS is the future state; TO-BE is the current state.',
      'AS-IS describes the current state of a business process; TO-BE describes the desired future state after changes are implemented.',
      'AS-IS and TO-BE are only for technical system diagrams.',
      'They are irrelevant for process improvement.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'Which tool is commonly used to manage and track requirements throughout the project lifecycle?',
    options: [
      'Microsoft Word',
      'Jira',
      'Adobe Illustrator',
      'Microsoft Excel for all complex tracking'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'What is \'Gap Analysis\' in business analysis?',
    options: [
      'Analyzing communication gaps between team members.',
      'Comparing the current state (AS-IS) with the desired future state (TO-BE) to identify what needs to be changed or developed.',
      'Analyzing gaps in project funding.',
      'Identifying skill gaps in the project team.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'What are \'Functional Requirements\'?',
    options: [
      'Requirements about system performance and security.',
      'Requirements that describe what the software system *must do* or its specific behaviors and functions.',
      'Requirements about the visual appearance of the system.',
      'Requirements about project timelines and budgets.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-1',
    question: 'What are \'Non-Functional Requirements\'?',
    options: [
      'Requirements that describe the core functions of the system.',
      'Requirements that specify criteria used to judge the operation of a system, rather than specific behaviors (e.g., performance, security, usability, scalability).',
      'Requirements that are optional for system development.',
      'Requirements about the business process flow.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'business-analysis'
  },

  {
    id: 'business-analysis-2',
    question: 'Explain \'BABOK Guide\' and its significance for business analysts.',
    options: [
      'BABOK Guide is a software tool for requirements management.',
      'BABOK (Business Analysis Body of Knowledge) Guide is a globally recognized standard for the practice of business analysis, providing definitions, concepts, and tasks for BAs.',
      'BABOK Guide is a project management methodology.',
      'It is only relevant for IT business analysis, not other domains.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'Describe \'MoSCoW Prioritization\' technique for requirements.',
    options: [
      'MoSCoW is a city in Russia.',
      'MoSCoW (Must-have, Should-have, Could-have, Won\'t-have) is a prioritization technique used to classify requirements based on their importance to the business and project goals.',
      'MoSCoW only prioritizes technical requirements.',
      'It is a method for generating new requirements.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'What is \'Business Process Re-engineering (BPR)\'?',
    options: [
      'Minor adjustments to existing business processes.',
      'Radical redesign of core business processes to achieve dramatic improvements in productivity, cycle times, and quality, often leveraging new technology.',
      'A technique for documenting current business processes.',
      'A method for managing employee performance.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'Explain \'User Stories\' in Agile methodology and their format.',
    options: [
      'User stories are lengthy, formal documentation of all system requirements.',
      'User stories are short, simple descriptions of a feature from the perspective of an end-user, typically following the format: \'As a [user], I want [goal], so that [reason]\'.',
      'User stories are only for developers to read.',
      'They do not require any input from end-users.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'What is a \'Context Diagram\' in system analysis?',
    options: [
      'A detailed diagram of internal system components.',
      'A top-level data flow diagram (DFD) that shows the system as a single process, its external entities, and the data flows between them, defining system boundaries.',
      'A diagram showing user interface elements.',
      'A diagram illustrating database table relationships.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'Describe \'SWOT Analysis\' and its application in business analysis.',
    options: [
      'SWOT Analysis is only for financial reporting.',
      'SWOT (Strengths, Weaknesses, Opportunities, Threats) Analysis is a strategic planning technique used to identify internal (Strengths, Weaknesses) and external (Opportunities, Threats) factors relevant to achieving a business objective.',
      'SWOT Analysis focuses only on competitors.',
      'It is a technique for managing project risks only.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'What is \'Requirements Traceability\' and why is it important?',
    options: [
      'Requirements traceability involves writing requirements in multiple languages.',
      'Requirements traceability is the ability to track a requirement through the development lifecycle, from its origin to its implementation and testing, ensuring all requirements are met and changes are managed.',
      'Requirements traceability increases the risk of scope creep.',
      'It is only relevant for small, simple projects.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'Explain \'Decision Analysis\' techniques (e.g., Decision Tables, Decision Trees).',
    options: [
      'Decision analysis is only for making simple yes/no choices.',
      'Decision analysis techniques help model complex decisions by breaking them down into components (alternatives, conditions, actions) to illustrate logic, manage complexity, and ensure consistent decision-making in systems or processes.',
      'Decision analysis removes the need for human judgment.',
      'It is only used in financial modeling.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'What is \'Reverse Engineering\' in business analysis?',
    options: [
      'Creating new software from scratch.',
      'The process of examining an existing system or product to understand its components, relationships, and design, often to extract or document requirements for a new system or improvement.',
      'Reverse engineering is only for hardware analysis.',
      'It is a method for destroying old systems.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'Describe \'Data Modeling\' concepts (e.g., Entity-Relationship Diagrams - ERDs, normalization).',
    options: [
      'Data modeling only involves drawing pictures of data.',
      'Data modeling is the process of creating a visual representation of the data and its relationships within a system, using techniques like ERDs and normalization to ensure data integrity and efficient storage.',
      'Data modeling is irrelevant for database design.',
      'It only applies to unstructured data.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'What is \'Benchmarking\' in business analysis?',
    options: [
      'Creating internal standards without external comparison.',
      'Comparing an organization\'s processes, performance, and products against best practices or those of top-performing companies to identify areas for improvement and set targets.',
      'Benchmarking is only for software performance testing.',
      'It is a static analysis technique.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'Explain \'User Stories\' vs. \'Use Cases\' in requirements documentation.',
    options: [
      'User stories are always more detailed than use cases.',
      'User stories are informal, concise descriptions from a user\'s perspective (Agile); Use Cases are more detailed, formal descriptions of system interaction to achieve a goal (often Waterfall/UML).',
      'Both are used interchangeably without any differences.',
      'User stories only describe system functions; use cases describe user interfaces.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'What is a \'Business Rule\' in system context?',
    options: [
      'A legal regulation that applies to a business.',
      'A statement that defines or constrains some aspect of the business, dictating how a system must behave or what data it must manage (e.g., \'A customer must be at least 18 years old to place an order\').',
      'A suggestion for improving business processes.',
      'A technical constraint on software development.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'Describe \'Non-Functional Requirements\' categories (e.g., Performance, Security, Usability, Scalability).',
    options: [
      'Non-functional requirements describe specific system features.',
      'These categories specify criteria used to judge a system\'s operation: Performance (speed, response time), Security (data protection), Usability (ease of use), Scalability (handling increasing load).',
      'Non-functional requirements are optional for system development.',
      'They are always less important than functional requirements.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-2',
    question: 'What is \'Root Cause Analysis (RCA)\' in problem solving?',
    options: [
      'A method for blaming individuals for problems.',
      'A systematic process for identifying the underlying causes of problems or incidents, rather than just addressing symptoms, to prevent recurrence.',
      'RCA is only used for technical failures, not business problems.',
      'It provides quick fixes without long-term solutions.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'business-analysis'
  },

  {
    id: 'business-analysis-3',
    question: 'Discuss \'Enterprise Analysis\' in the context of strategic business initiatives.',
    options: [
      'Enterprise analysis focuses solely on individual project requirements.',
      'Enterprise analysis defines the needs of the business as a whole, identifying business capabilities, assessing organizational readiness, defining scope of new initiatives, and developing the business case for strategic investments.',
      'Enterprise analysis is only for large corporations.',
      'It is irrelevant to solution design and implementation.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'Explain \'Business Architecture\' vs. \'Solution Architecture\' and their interrelation.',
    options: [
      'Business architecture and solution architecture are interchangeable terms.',
      'Business architecture defines the structure of the enterprise in terms of its business capabilities, value streams, and organizational structure; Solution architecture describes how a specific solution addresses a business problem, aligning with business architecture.',
      'Business architecture is a technical discipline; solution architecture is a business discipline.',
      'They operate independently with no need for alignment.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'Describe \'Strategic Alignment\' and its importance in business analysis projects.',
    options: [
      'Strategic alignment ensures projects are completed on time and within budget.',
      'Strategic alignment ensures that proposed solutions and projects directly support the overall goals and strategies of the organization, maximizing value and preventing misdirected efforts.',
      'Strategic alignment is only relevant for government projects.',
      'It adds unnecessary complexity to project planning.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'What are \'Balanced Scorecards\' and \'Key Performance Indicators (KPIs)\' in performance measurement?',
    options: [
      'Balanced Scorecards and KPIs are only for measuring financial performance.',
      'Balanced Scorecards provide a holistic view of organizational performance across multiple perspectives (financial, customer, internal process, learning & growth); KPIs are specific, measurable metrics used to track progress towards strategic objectives.',
      'KPIs are always qualitative measurements.',
      'Neither is suitable for long-term strategic planning.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'Explain \'Value Stream Mapping\' and its role in identifying waste and improving processes.',
    options: [
      'Value Stream Mapping is a tool for managing team calendars.',
      'Value Stream Mapping is a lean management technique used to visualize and analyze the flow of materials and information required to bring a product or service to a customer, identifying wasteful steps and opportunities for improvement.',
      'Value Stream Mapping is only for manufacturing industries.',
      'It complicates processes without providing clear benefits.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'Discuss \'Organizational Change Management (OCM)\' in business analysis projects.',
    options: [
      'OCM is solely about managing technical changes to systems.',
      'OCM is a structured approach to transition individuals, teams, and organizations from a current state to a desired future state, ensuring successful adoption of new solutions and minimizing resistance.',
      'OCM is irrelevant for agile projects.',
      'It focuses only on training end-users.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'What is \'Business Capability Mapping\' and its importance in enterprise planning?',
    options: [
      'Business capability mapping is only for documenting current processes.',
      'Business capability mapping identifies what a business does (its capabilities) independent of how it does it, providing a stable business-driven perspective for strategic planning, investment prioritization, and architectural alignment.',
      'Business capability mapping increases organizational silos.',
      'It focuses only on individual departmental functions.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'Describe \'Agile Business Analysis\' techniques (e.g., Story Mapping, User Story Refinement, Acceptance Criteria).',
    options: [
      'Agile business analysis uses only formal, lengthy documentation.',
      'Techniques like story mapping (visualizing user journeys), continuous user story refinement, and well-defined acceptance criteria (testable conditions) enable BAs to work iteratively, deliver value incrementally, and adapt to change.',
      'Agile business analysis eliminates the need for any requirements documentation.',
      'It increases communication gaps between teams.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'Explain \'Business Model Canvas\' and its components.',
    options: [
      'Business Model Canvas is a tool for financial accounting only.',
      'The Business Model Canvas is a strategic management tool used for developing new or documenting existing business models, covering key partners, activities, resources, value propositions, customer relationships, channels, segments, cost structure, and revenue streams.',
      'Business Model Canvas is only for startups.',
      'It focuses solely on product features.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'How do you perform \'Vendor Assessment and Selection\' as a Business Analyst?',
    options: [
      'Vendor assessment is solely based on price quotes.',
      'Involves defining selection criteria (functional, non-functional, technical), evaluating potential vendors based on capabilities, experience, cost, and alignment with business needs, often through RFPs/RFIs and demos, to select the best solution provider.',
      'Vendor assessment is only done by the procurement department.',
      'It excludes considering the vendor\'s technical capabilities.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'What is \'Design Thinking\' and its iterative approach to problem-solving?',
    options: [
      'Design thinking is a linear, rigid process for product development.',
      'Design thinking is a human-centered, iterative approach to innovation that involves empathizing with users, defining problems, ideating solutions, prototyping, and testing to solve complex challenges.',
      'Design thinking is only for designers, not business analysts.',
      'It discourages user feedback during the process.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'Describe \'System Thinking\' in business analysis.',
    options: [
      'System thinking focuses on analyzing individual components in isolation.',
      'System thinking is a holistic approach to understanding how different parts of a system interrelate and how changes in one part can affect the whole, crucial for analyzing complex business processes and organizations.',
      'System thinking simplifies complex problems by ignoring interdependencies.',
      'It is only applicable to technical IT systems.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'What is \'Decision Management\' and its intersection with business rules and processes?',
    options: [
      'Decision management only involves making simple, ad-hoc decisions.',
      'Decision management structures and automates business decisions, often by extracting decision logic from processes into reusable business rules, improving consistency, agility, and auditability of decision-making within systems.',
      'Decision management replaces the need for any human judgment.',
      'It is only relevant for very small, non-critical decisions.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'Explain \'Requirements Engineering Management Plan\' and its key contents.',
    options: [
      'The plan only lists all gathered requirements.',
      'This plan defines how requirements activities will be managed (e.g., elicitation, analysis, documentation, validation, change management, tools) for a project, ensuring a structured approach to requirements handling.',
      'It is a fixed document that is never updated during the project.',
      'The plan is only for technical development teams.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'business-analysis-3',
    question: 'How do you conduct \'Benefit Realization Analysis\' after solution deployment?',
    options: [
      'Benefit realization analysis is only performed before project kickoff.',
      'It involves tracking, measuring, and reporting on the actual benefits achieved by a deployed solution against the business case, ensuring that the expected value is delivered and identifying areas for further optimization.',
      'Benefit realization analysis is irrelevant if the project is delivered on time and budget.',
      'It focuses solely on IT infrastructure performance metrics.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'business-analysis'
  },
  {
    id: 'project-management-1',
    question: 'What is the primary objective of Project Management?',
    options: [
      'To finish projects as quickly as possible, regardless of quality.',
      'To achieve project goals within defined scope, time, and budget constraints, while meeting quality requirements.',
      'To manage only the technical aspects of a project.',
      'To eliminate all risks from a project.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'Which of the following is typically NOT a phase in a traditional project lifecycle?',
    options: [
      'Initiation',
      'Planning',
      'Construction',
      'Execution'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'What does \'PMBOK\' commonly stand for?',
    options: [
      'Project Managers\' Business Operations Knowledge',
      'Project Management Body of Knowledge',
      'Project Monitoring and Budgeting Operations Kit',
      'Process Management Best-of-KInd'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'What is a \'Project Stakeholder\'?',
    options: [
      'Someone who provides financial investment only.',
      'Any individual or organization who is actively involved in the project, or whose interests may be affected by the project\'s outcome.',
      'Only the project team members.',
      'The project manager exclusively.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'What is a \'Project Charter\'?',
    options: [
      'A detailed technical specification document.',
      'A formal document that officially authorizes a project or a phase and documents initial requirements and stakeholder expectations.',
      'A weekly progress report.',
      'A list of project risks.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'Which tool is used to graphically represent the schedule of a project, showing tasks and their durations?',
    options: [
      'Pie Chart',
      'Flowchart',
      'Gantt Chart',
      'Bar Chart'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'What is \'Scope Creep\' in project management?',
    options: [
      'A planned increase in project deliverables.',
      'The uncontrolled expansion of project scope without adjustments to time, cost, and resources.',
      'A method for reducing project risks.',
      'A technique for managing project budgets.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'What is the purpose of a \'Work Breakdown Structure (WBS)\'?',
    options: [
      'To define project team roles.',
      'To decompose project deliverables and work into smaller, more manageable components.',
      'To track project costs only.',
      'To create a list of project risks.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'Which of these is part of the \'Triple Constraint\' (or Project Management Triangle)?',
    options: [
      'Team Size',
      'Scope',
      'Technology Used',
      'Communication'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'What is \'Risk Management\' in a project?',
    options: [
      'Ignoring potential problems.',
      'The process of identifying, assessing, and responding to potential risks that could affect the project\'s success.',
      'Only focusing on positive outcomes.',
      'Transferring all risks to external parties.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'What is a \'Milestone\' in a project schedule?',
    options: [
      'A daily task.',
      'A significant point or event in a project schedule, often representing the completion of a major phase or deliverable.',
      'A detailed list of project resources.',
      'A meeting with project stakeholders.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'Which document formally accepts the project deliverables and closes the project?',
    options: [
      'Project Plan',
      'Requirements Document',
      'Project Closure Document',
      'Risk Register'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'What is \'Resource Management\' in a project?',
    options: [
      'Only managing financial budgets.',
      'The process of planning, scheduling, and allocating human and non-human resources to tasks and activities.',
      'Managing external vendors only.',
      'Tracking project risks.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'What is the importance of \'Communication Management\' in project management?',
    options: [
      'To limit information sharing to only the project manager.',
      'To ensure timely and appropriate planning, collection, creation, distribution, storage, retrieval, management, control, and ultimate disposition of project information.',
      'To avoid all project meetings.',
      'To communicate only at the end of the project.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'project-management'
  },
  {
    id: 'project-management-1',
    question: 'Which methodology uses a sequential, phase-by-phase approach, often with a clear start and end for each phase?',
    options: [
      'Agile',
      'Scrum',
      'Waterfall',
      'Kanban'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'project-management'
  },

  {
    id: 'project-management-2',
    question: 'Explain the difference between \'Project Management\' and \'Program Management\'.',
    options: [
      'Project management manages a single project; Program management manages a group of related projects to achieve strategic objectives.',
      'Project management focuses on long-term strategy; program management focuses on daily tasks.',
      'Program management is always simpler than project management.',
      'There is no practical difference between them.'
    ],
    correctAnswer: 0,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'Describe \'Critical Path Method (CPM)\' in project scheduling.',
    options: [
      'CPM focuses on individual task durations without dependencies.',
      'CPM is a scheduling algorithm that identifies the longest sequence of dependent activities in a project, determining the minimum time required to complete the project and highlighting critical tasks.',
      'CPM allows for unlimited project delays.',
      'CPM is only used for very small projects.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'What is \'Earned Value Management (EVM)\' and its key metrics (e.g., EV, PV, AC, SPI, CPI)?',
    options: [
      'EVM only tracks project costs.',
      'EVM is a project management methodology for measuring project performance and progress by comparing planned work (PV), earned value (EV), and actual cost (AC) to forecast future performance (SPI, CPI).',
      'EVM is only applicable to Agile projects.',
      'EVM simplifies project reporting by ignoring budget.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'Explain \'Risk Response Planning\' strategies (e.g., Avoid, Mitigate, Transfer, Accept).',
    options: [
      'Risk response planning is only about identifying risks.',
      'Strategies include Avoid (eliminate threat), Mitigate (reduce impact/probability), Transfer (shift risk to third party), and Accept (acknowledge and monitor risk), to address identified project risks proactively.',
      'Risk response planning increases project risks.',
      'These strategies are only for financial risks.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'What is \'Agile Methodology\' and its core principles?',
    options: [
      'Agile is a rigid, sequential project management approach.',
      'Agile is an iterative and incremental approach focusing on adaptive planning, early delivery, continuous improvement, and flexibility in response to change, emphasizing customer collaboration and working software.',
      'Agile only applies to software development, not other types of projects.',
      'Agile discourages direct communication and collaboration.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'Describe \'Stakeholder Engagement\' and its importance in project success.',
    options: [
      'Stakeholder engagement means only informing stakeholders at the end of the project.',
      'Stakeholder engagement involves systematically identifying, analyzing, planning, and implementing interactions with stakeholders throughout the project lifecycle to ensure their effective involvement and support for project success.',
      'Stakeholder engagement is irrelevant for small projects.',
      'It increases conflicts within the project team.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'What is \'Change Management\' in projects, and why is it essential?',
    options: [
      'Change management only refers to changing project scope.',
      'Change management is the structured approach to transitioning individuals, teams, and organizations from a current state to a desired future state, ensuring the successful adoption and realization of changes introduced by a project.',
      'Change management increases resistance to project changes.',
      'It focuses solely on technological changes.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'Explain \'Contingency Reserve\' vs. \'Management Reserve\' in project budgeting.',
    options: [
      'Both reserves are for unknown, unknown risks.',
      'Contingency reserve is for known, unknown risks (identified risks with uncertain impact), managed by the project manager; Management reserve is for unknown, unknown risks, controlled by senior management, outside the baseline budget.',
      'Contingency reserve is always larger than management reserve.',
      'Neither reserve is necessary if risks are properly identified.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'What is a \'Lessons Learned\' document and its purpose?',
    options: [
      'A document blaming individuals for project failures.',
      'A document that captures knowledge gained during a project, detailing successes, failures, and recommendations for future projects to improve organizational processes and project performance.',
      'Lessons learned are only for internal team use, not broader organization.',
      'It is irrelevant for future project planning.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'Describe \'Quality Management\' processes (e.g., Quality Planning, Quality Assurance, Quality Control).',
    options: [
      'Quality management only focuses on final product inspection.',
      'Quality Planning defines standards; Quality Assurance (QA) evaluates overall project performance against standards; Quality Control (QC) monitors specific project results to ensure they comply with quality standards, all aiming for stakeholder satisfaction.',
      'Quality management increases project costs without improving product quality.',
      'It is only relevant for manufacturing projects.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'What is \'Kanban\' methodology in Agile project management?',
    options: [
      'Kanban focuses on strict time-boxed iterations like Sprints.',
      'Kanban is a visual system for managing work, emphasizing visualizing workflow, limiting work in progress, and maximizing efficiency by pulling tasks through the system, often used for continuous delivery.',
      'Kanban is only for software development teams.',
      'It requires extensive documentation for every task.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'What is \'Procurement Management\' in a project?',
    options: [
      'Managing internal team resources only.',
      'The process of purchasing or acquiring products, services, or results needed from outside the project team to perform project work.',
      'Procurement management focuses on internal company expenses.',
      'It is irrelevant for projects that do not involve external vendors.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'Explain \'Project Baselines\' (Scope, Schedule, Cost) and their importance.',
    options: [
      'Project baselines are flexible and can be changed frequently.',
      'Baselines (Scope, Schedule, Cost) are the approved versions of project plans that act as fixed reference points for measuring, monitoring, and controlling project performance against the original plan.',
      'Project baselines increase project risks.',
      'They are only used for retrospective analysis.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'What is a \'Project Management Office (PMO)\' and its functions?',
    options: [
      'A PMO is a physical office where all project managers work.',
      'A PMO is a departmental or organizational unit that defines and maintains standards for project management within an organization, providing guidance, methodology, and support to project managers.',
      'A PMO focuses solely on individual project execution.',
      'It increases bureaucratic overhead without added value.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },
  {
    id: 'project-management-2',
    question: 'Describe \'Agile Scaling Frameworks\' (e.g., SAFe, LeSS) for large organizations.',
    options: [
      'Agile scaling frameworks always simplify organizational structure.',
      'These frameworks provide guidance for implementing Agile principles and practices at an enterprise level, coordinating multiple agile teams to deliver large, complex solutions, addressing challenges of alignment and dependencies.',
      'Agile scaling frameworks eliminate the need for any traditional project management.',
      'They are only suitable for very small teams.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'project-management'
  },

  {
    id: 'project-management-3',
    question: 'Discuss \'Portfolio Management\' vs. \'Program Management\' vs. \'Project Management\'.',
    options: [
      'All three terms refer to the same level of management.',
      'Portfolio management aligns investments with strategic goals; Program management coordinates related projects for benefits realization; Project management executes individual projects to achieve specific objectives.',
      'Portfolio management is only about financial investments.',
      'Project management is always conducted independently of programs or portfolios.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'Explain \'Critical Chain Project Management (CCPM)\' and its focus on resource constraints.',
    options: [
      'CCPM ignores resource limitations in scheduling.',
      'CCPM is a method that focuses on managing the critical chain (the longest path of dependent tasks, considering resource availability) by adding buffers, aiming to protect project completion times rather than individual task deadlines.',
      'CCPM increases task-level multitasking.',
      'It is a traditional waterfall approach to project scheduling.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'Describe \'Organizational Project Management (OPM)\' and its benefits for strategic execution.',
    options: [
      'OPM focuses only on individual project execution.',
      'OPM is a strategy execution framework that links projects, programs, and portfolios to organizational strategy, ensuring that all projects deliver business value and contribute to achieving strategic goals.',
      'OPM is only for very large, complex organizations.',
      'It increases the gap between strategy and execution.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'What are \'Advanced Risk Analysis Techniques\' (e.g., Monte Carlo Simulation, Decision Tree Analysis) in project management?',
    options: [
      'Advanced risk analysis techniques eliminate all project risks.',
      'These techniques quantify the impact of risks and uncertainties on project objectives: Monte Carlo simulates outcomes based on probability distributions; Decision Trees analyze decision paths under uncertainty to choose optimal strategies.',
      'They are only for identifying known risks.',
      'These techniques increase project uncertainty.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'Explain \'Benefit Realization Management\' and its focus beyond project completion.',
    options: [
      'Benefit realization management is solely about delivering project outputs on time and budget.',
      'Benefit realization management is the process of organizing and managing projects, programs, and portfolios to ensure that the expected benefits are actually achieved and sustained after the project is completed, linking project outcomes to business value.',
      'It is only performed before project initiation.',
      'It is irrelevant for project success metrics.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'Discuss \'Agile Metrics\' (e.g., Velocity, Burn-down/up charts, Lead Time, Cycle Time) and their use.',
    options: [
      'Agile metrics are only for individual team performance evaluation.',
      'Velocity measures work completed per iteration; Burn-down/up charts track remaining/completed work; Lead Time measures time from request to delivery; Cycle Time measures time from work start to delivery—all used for forecasting and continuous improvement.',
      'Agile metrics replace the need for any communication within teams.',
      'They only apply to Waterfall projects.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'What is \'Value Management\' in projects and its techniques (e.g., Value Engineering)?',
    options: [
      'Value management focuses on reducing project costs at any expense.',
      'Value management is a systematic approach to optimizing the value delivered by a project by analyzing functions versus cost. Techniques like Value Engineering aim to achieve required functions at the lowest lifecycle cost consistent with required performance.',
      'Value management is only for manufacturing industries.',
      'It ignores stakeholder needs and quality requirements.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'Describe \'Organizational Change Management (OCM) Models\' (e.g., Lewin\'s Change Model, Kotter\'s 8-Step Change Model).',
    options: [
      'OCM models are only for managing project budgets.',
      'These models provide structured frameworks for guiding organizational transitions, helping to manage resistance, communicate changes, and ensure the successful adoption of new processes or systems within an organization.',
      'OCM models increase resistance to change.',
      'They are purely theoretical with no practical application.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'Explain \'Resource Leveling\' vs. \'Resource Smoothing\' in project scheduling.',
    options: [
      'Resource leveling and smoothing are identical techniques.',
      'Resource leveling adjusts activities to resolve over-allocation of resources, potentially delaying the project finish date. Resource smoothing adjusts activities within slack to avoid peak resource usage, without delaying project finish.',
      'Both techniques always reduce overall project duration.',
      'Neither considers resource availability.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'How do you apply \'Lean Principles\' (e.g., eliminating waste, continuous improvement) in project management?',
    options: [
      'Lean principles focus only on reducing project costs by cutting scope.',
      'Applying lean principles involves identifying and eliminating waste (e.g., unnecessary activities, waiting time), continuously improving processes, and delivering value to the customer efficiently, applicable across various project methodologies.',
      'Lean principles are only for manufacturing projects.',
      'They increase bureaucracy in project workflows.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'What is \'Project Governance\' and its key components?',
    options: [
      'Project governance is only about managing project team members.',
      'Project governance is the framework within which project decisions are made, including roles, responsibilities, decision-making authorities, and accountability for managing the project to achieve its objectives.',
      'Project governance increases project risks.',
      'It is irrelevant for project success.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'Describe \'Adaptive Project Management\' and its suitability for uncertain environments.',
    options: [
      'Adaptive project management uses a fixed plan for all projects.',
      'Adaptive project management approaches (e.g., Agile, Iterative) emphasize flexibility, continuous feedback, and rapid response to change, making them well-suited for projects with high levels of uncertainty or evolving requirements.',
      'Adaptive project management avoids any form of planning.',
      'It only applies to small, simple projects.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'What are \'Conflict Resolution Techniques\' in project team management?',
    options: [
      'Conflict resolution techniques always involve ignoring disagreements.',
      'Techniques include collaborating (win-win), compromising (lose-lose), accommodating (win-lose, giver), forcing (win-lose, taker), and withdrawing (avoidance), used by project managers to address interpersonal conflicts within the team.',
      'Conflict resolution is irrelevant for team productivity.',
      'It increases team tensions.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'Explain \'Contract Types\' (e.g., Fixed-Price, Cost-Plus, Time & Materials) in procurement management.',
    options: [
      'All contract types place full risk on the seller.',
      'Fixed-price contracts set a total price; Cost-plus reimburses costs plus a fee; Time & Materials pay for time spent and materials used. Each has different risk allocations between buyer and seller.',
      'Contract types are only for legal departments, not project managers.',
      'They increase project flexibility without affecting cost.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'project-management-3',
    question: 'How do you establish and manage \'Project Baselines\' (Scope, Schedule, Cost) for effective control?',
    options: [
      'Project baselines are continuously adjusted without formal approval.',
      'Establish baselines by finalizing and approving initial plans for scope, schedule, and cost. Manage them by tracking actual performance against these baselines, analyzing variances, and implementing approved changes via formal change control.',
      'Project baselines are only for external reporting, not internal control.',
      'They increase the frequency of unplanned changes.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'project-management'
  },
  {
    id: 'product-management-1',
    question: 'What is the primary role of a Product Manager?',
    options: [
      'To write all the code for a product.',
      'To define the product vision, strategy, and roadmap, guiding the entire product lifecycle.',
      'To directly manage the engineering team\'s daily tasks.',
      'To perform sales and marketing for a product.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'Which of the following is typically NOT a core responsibility of a Product Manager?',
    options: [
      'Market Research',
      'Defining User Stories',
      'Managing Server Infrastructure',
      'Stakeholder Communication'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'What is a \'Product Vision\'?',
    options: [
      'A detailed technical specification of the product.',
      'A long-term aspirational goal that describes what the product aims to achieve for its users and the business.',
      'A list of all features in the product backlog.',
      'A short-term marketing campaign slogan.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'What is a \'Product Roadmap\'?',
    options: [
      'A rigid, unchangeable schedule for product development.',
      'A high-level visual summary that maps out the product vision, direction, and planned progress over time.',
      'A detailed list of all tasks for the development team.',
      'A financial budget report for the product.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'What is \'User Empathy\' in Product Management?',
    options: [
      'Ignoring user feedback for product decisions.',
      'The ability to understand and share the feelings, needs, and motivations of the target users, crucial for designing successful products.',
      'Only focusing on competitor products.',
      'Developing products for personal use only.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'Which methodology is commonly adopted in Product Management for iterative development?',
    options: [
      'Waterfall',
      'Agile',
      'Spiral',
      'PRINCE2'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'What is a \'Minimum Viable Product (MVP)\'?',
    options: [
      'A product with all planned features implemented.',
      'The version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.',
      'A final product ready for mass market release.',
      'A prototype that is not tested with users.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'What is a \'User Story\' in Product Management?',
    options: [
      'A marketing slogan for the product.',
      'A short, simple description of a feature told from the perspective of the person who desires the new capability, often in the format: "As a [user], I want [goal], so that [reason]".',
      'A detailed technical requirement document.',
      'A legal agreement with users.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'Which tool is used to visualize, prioritize, and manage product backlog items?',
    options: [
      'Spreadsheet for calculations',
      'Jira (or similar project management software)',
      'Graphic design software',
      'Word processor'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'What is \'Market Research\' in Product Management?',
    options: [
      'Only collecting competitor pricing data.',
      'The process of gathering information about target markets and customers to understand their needs, preferences, and market trends.',
      'Designing product packaging.',
      'Selling products directly to consumers.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'What is the purpose of \'A/B Testing\' in product development?',
    options: [
      'To test product features only with a small internal team.',
      'To compare two versions of a product feature or experience to see which performs better with users in achieving a specific goal.',
      'To deploy new features to all users simultaneously.',
      'To collect general feedback without specific comparisons.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'What is \'Competitive Analysis\'?',
    options: [
      'Ignoring competitor activities.',
      'The process of identifying and evaluating competitors to determine their strengths and weaknesses relative to your own product or service.',
      'Only focusing on internal product development.',
      'Collaborating with competitors on new products.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'Which metric measures the percentage of users who complete a desired action (e.g., sign-up, purchase)?',
    options: [
      'Bounce Rate',
      'Click-Through Rate (CTR)',
      'Conversion Rate',
      'Retention Rate'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'What is a \'Persona\' in Product Management?',
    options: [
      'A real, individual customer.',
      'A fictional character created to represent a user type that might use a site, brand, or product in a similar way.',
      'A legal representative of the product.',
      'A specific feature of the product.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },
  {
    id: 'product-management-1',
    question: 'What is \'Product-Market Fit\'?',
    options: [
      'The process of developing a product without market validation.',
      'The degree to which a product satisfies a strong market demand, indicating that the product has found a viable market.',
      'A product that is technically perfect but has no users.',
      'A product that competes directly with all other products.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'product-management'
  },

  {
    id: 'product-management-2',
    question: 'Explain \'Product Strategy\' vs. \'Product Roadmap\' and their relationship.',
    options: [
      'Product strategy and roadmap are interchangeable terms.',
      'Product strategy defines *why* the product exists, its vision, and target users; Product roadmap outlines *how* to achieve that strategy over time with high-level features and initiatives.',
      'Product strategy is a short-term plan; product roadmap is a long-term vision.',
      'Product strategy focuses on execution; product roadmap focuses on market analysis.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'Describe \'Discovery vs. Delivery\' in Product Management.',
    options: [
      'Discovery and Delivery are sequential phases with no overlap.',
      'Discovery is the continuous process of researching, learning, and validating what product to build (problem/solution fit); Delivery is the process of building and releasing that validated product efficiently.',
      'Discovery is only for new products; Delivery is for existing products.',
      'Delivery should always start before discovery is complete.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'What is \'Value Proposition Design\'?',
    options: [
      'Designing the pricing model for a product.',
      'A framework (e.g., Value Proposition Canvas) for creating products and services that truly address customer needs and create value, aligning customer jobs-to-be-done with product features.',
      'Designing the visual aesthetics of a product.',
      'Focusing solely on technological innovation.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'Explain \'OKRs\' (Objectives and Key Results) in Product Management.',
    options: [
      'OKRs are detailed task lists for product teams.',
      'OKRs are a goal-setting framework used to define and track objectives (what to achieve) and their key results (how to measure progress) at company, team, and individual levels, providing focus and alignment.',
      'OKRs are only for executive management, not product teams.',
      'OKRs focus on outputs, not outcomes.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'What is \'User Journey Mapping\' and its importance?',
    options: [
      'User journey mapping is only for physical product delivery.',
      'A visual representation of the entire experience a user has with a product or service, from initial contact to long-term relationship, used to identify pain points, opportunities, and design holistic solutions.',
      'User journey mapping focuses solely on competitor activities.',
      'It simplifies the process of user research.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'Describe \'Product Backlog Refinement\' in Agile development.',
    options: [
      'Product backlog refinement is a one-time activity at the start of a project.',
      'It\'s a continuous activity where the product owner and team add details, estimates, and order to product backlog items (user stories, epics), ensuring they are ready for upcoming sprints.',
      'Product backlog refinement is only done by the engineering team.',
      'It increases ambiguity in requirements.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'What are \'North Star Metrics\' in Product Management?',
    options: [
      'Metrics that are impossible to measure accurately.',
      'A single, overarching metric that best captures the core value your product delivers to customers, representing the long-term success of the product (e.g., daily active users, bookings per user).',
      'Metrics that are only relevant for short-term goals.',
      'Metrics that fluctuate wildly and are hard to track.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'Explain \'Lean Startup\' methodology and its relevance to product development.',
    options: [
      'Lean Startup focuses on extensive upfront planning and large product launches.',
      'Lean Startup emphasizes validated learning, iterative product releases (MVPs), and continuous experimentation to build products that customers actually want, minimizing waste and accelerating learning cycles.',
      'Lean Startup is only for startups, not established companies.',
      'It discourages user feedback in early stages.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'What is \'Product Lifecycle Management (PLM)\'?',
    options: [
      'Managing only the sales of a product.',
      'The entire process of managing a product\'s journey from ideation, design, and manufacturing, through service and disposal, integrating people, data, processes, and business systems.',
      'PLM focuses solely on the initial development phase.',
      'It is a framework for managing customer support.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'Describe \'Experimentation Frameworks\' (e.g., A/B testing, multivariate testing) in Product Management.',
    options: [
      'Experimentation frameworks are only for testing code quality.',
      'These frameworks involve systematically testing different product versions or features with user segments to gather data and make informed decisions about what changes improve user experience and business outcomes.',
      'Experimentation frameworks slow down product development.',
      'They rely purely on intuition for decision-making.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'What is \'Pricing Strategy\' in Product Management (e.g., value-based, cost-plus, competitive)?',
    options: [
      'Pricing strategy is only about setting the lowest possible price.',
      'Pricing strategies determine the price of a product or service. Examples include value-based (based on perceived customer value), cost-plus (cost + markup), or competitive (based on competitor pricing).',
      'Pricing strategy is irrelevant to product success.',
      'It is a one-time decision that never changes.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'Explain \'Go-to-Market (GTM) Strategy\' for a new product launch.',
    options: [
      'GTM strategy focuses only on product development.',
      'GTM strategy is a comprehensive plan outlining how to bring a new product or service to market, including target audience, pricing, distribution, sales, and marketing efforts, to achieve successful launch and adoption.',
      'GTM strategy is only for established products, not new launches.',
      'It is a generic plan applied to all products.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'What is \'Growth Hacking\' and its relevance to product-led growth?',
    options: [
      'Growth hacking is a long-term, traditional marketing approach.',
      'Growth hacking is a rapid experimentation-driven process focused on achieving exponential growth in user acquisition and engagement, often leveraging product features themselves to drive growth (product-led growth).',
      'Growth hacking ignores data and relies on intuition.',
      'It is only for well-established companies.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'Describe \'Customer Churn Analysis\' and its importance for product retention.',
    options: [
      'Customer churn analysis focuses only on acquiring new customers.',
      'Churn analysis identifies customers who stop using a product/service, examining reasons and predicting at-risk users, crucial for developing strategies to improve retention and reduce customer loss.',
      'Churn analysis is irrelevant for subscription-based products.',
      'It always requires manual data collection.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },
  {
    id: 'product-management-2',
    question: 'What is \'Product Analytics\' and its role in informing product decisions?',
    options: [
      'Product analytics only tracks website visitors.',
      'Product analytics involves collecting, analyzing, and interpreting user behavior data within a product to understand how users interact with features, identify engagement patterns, and inform product development decisions.',
      'Product analytics is only for external reporting.',
      'It focuses solely on financial metrics.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'product-management'
  },

  {
    id: 'product-management-3',
    question: 'Discuss \'Platform Product Management\' vs. \'Application Product Management\'.',
    options: [
      'Platform and application product management are identical.',
      'Platform product management focuses on building foundational technology and services for other products/developers; Application product management focuses on end-user facing products built on those platforms.',
      'Platform product management is less complex than application product management.',
      'Application product management is irrelevant to platform strategy.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'Explain \'Behavioral Economics\' principles and their application in product design for influencing user decisions.',
    options: [
      'Behavioral economics principles only apply to financial products.',
      'Principles like cognitive biases (e.g., anchoring, framing, loss aversion) can be intentionally applied in product design to subtly influence user choices and drive desired behaviors, raising ethical considerations.',
      'Behavioral economics simplifies user decision-making by removing choices.',
      'It is irrelevant to product user experience.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'Describe \'Product-Led Growth (PLG)\' strategy and its benefits.',
    options: [
      'PLG focuses solely on sales and marketing to drive growth.',
      'PLG is a business growth strategy where product usage drives user acquisition, conversion, and retention, emphasizing intuitive design, free tiers/trials, and viral loops to make the product its primary growth engine.',
      'PLG is only for enterprise software.',
      'PLG increases customer acquisition costs.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'What are \'Ethical AI Principles\' in Product Management (e.g., fairness, transparency, accountability, privacy)?',
    options: [
      'Ethical AI principles are only for developers, not product managers.',
      'These principles guide PMs in designing, developing, and deploying AI-powered products to ensure fairness (avoiding bias), transparency (explainability), accountability (responsibility), and privacy in data usage, building user trust.',
      'Ethical AI principles hinder innovation in product development.',
      'They are universally defined and unchanging across all contexts.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'Explain \'Portfolio Product Management\' and its focus on strategic alignment and resource allocation.',
    options: [
      'Portfolio product management focuses only on managing individual products in isolation.',
      'Portfolio product management involves managing a collection of products (or initiatives) to achieve strategic business objectives, optimizing investments, managing dependencies, and allocating resources across the portfolio to maximize overall value.',
      'Portfolio product management is only for startups.',
      'It increases operational silos within an organization.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'Discuss \'Product-Market Fit\' validation techniques (e.g., qualitative interviews, quantitative surveys, retention analysis).',
    options: [
      'Product-market fit is a one-time validation at product launch.',
      'Validation techniques include qualitative methods (e.g., user interviews, usability testing) to understand needs, and quantitative methods (e.g., surveys with PMF metrics, retention curves) to measure market demand and user satisfaction.',
      'Product-market fit is purely theoretical with no practical validation methods.',
      'It is irrelevant for established products.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'What is \'Jobs-to-be-Done (JTBD)\' framework and its application in understanding customer needs?',
    options: [
      'JTBD focuses on product features only.',
      'JTBD is a framework that emphasizes understanding the underlying \"job\" a customer is trying to get done (their fundamental goal) rather than just focusing on existing solutions, leading to more innovative product development.',
      'JTBD is only for enterprise products.',
      'It simplifies customer needs by ignoring their context.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'Describe \'Design Sprints\' and their benefits for rapid product validation.',
    options: [
      'Design sprints are lengthy, multi-month processes.',
      'Design Sprints are five-day processes for answering critical business questions through design, prototyping, and testing ideas with real users, allowing rapid validation of concepts before significant investment in development.',
      'Design Sprints eliminate the need for any user feedback.',
      'They are only for very simple product features.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'Explain \'AARRR Metrics\' (Pirate Metrics) and their use in growth-focused product management.',
    options: [
      'AARRR metrics are only for financial reporting.',
      'AARRR (Acquisition, Activation, Retention, Revenue, Referral) is a framework for measuring and optimizing product growth across different stages of the customer funnel, providing a holistic view of user lifecycle.',
      'AARRR metrics are irrelevant for user engagement.',
      'They focus solely on short-term sales goals.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'How do you manage \'Technical Debt\' in Product Management?',
    options: [
      'Technical debt is solely an engineering concern, ignored by product management.',
      'Managing technical debt (e.g., suboptimal code, outdated systems) involves understanding its impact on product agility, performance, and future development, and strategically prioritizing its reduction in the roadmap.',
      'Technical debt always leads to immediate product failure.',
      'It has no impact on product features or user experience.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'What is \'Product-Market Fit Canvas\' and its role in product strategy?',
    options: [
      'Product-market fit canvas only focuses on marketing campaigns.',
      'A tool that helps product teams articulate and analyze their target customers, underserved needs (jobs, pains, gains), and how their product features, benefits, and experiences align to create a strong product-market fit.',
      'It is a substitute for direct user research.',
      'The canvas is only for visually appealing designs.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'Describe \'Continuous Discovery\' principles and their application in Agile product teams.',
    options: [
      'Continuous discovery is a one-time activity at the beginning of a project.',
      'Continuous discovery involves ongoing, small-scale user research and experimentation integrated throughout the product development cycle, ensuring teams are constantly learning about user needs and validating solutions.',
      'Continuous discovery eliminates the need for any product backlog.',
      'It slows down the product delivery process.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'What are \'Product Analytics Tools\' (e.g., Mixpanel, Amplitude, Heap) and their advanced uses?',
    options: [
      'Product analytics tools only track basic website traffic.',
      'These tools collect granular user behavior data within a product, enabling advanced analysis like funnel analysis, cohort analysis, and segmentation to understand user engagement, identify friction points, and optimize product flows.',
      'Product analytics tools replace the need for any human analysis.',
      'They are only for external marketing reporting.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'Explain \'Impact Mapping\' and its role in connecting features to desired outcomes.',
    options: [
      'Impact mapping only lists all product features.',
      'Impact mapping is a collaborative strategic planning technique that helps teams visualize assumptions, align around goals, identify relevant actors, and brainstorm deliverables (features) that will create desired impacts/outcomes, linking features to business value.',
      'Impact mapping is irrelevant for Agile development.',
      'It focuses solely on technical implementation details.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'product-management-3',
    question: 'Discuss \'Product-Led Sales\' vs. \'Sales-Led Growth\' strategies.',
    options: [
      'Product-led sales and sales-led growth are mutually exclusive.',
      'Product-led sales leverages the product itself to drive customer acquisition, activation, and expansion, often through free trials/freemium, reducing reliance on sales teams. Sales-led growth relies on direct sales engagement to acquire customers.',
      'Product-led sales is only for B2C products.',
      'Sales-led growth eliminates the need for product development.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'product-management'
  },
  {
    id: 'technical-writing-1',
    question: 'What is the primary goal of Technical Writing?',
    options: [
      'To write creative stories and poems.',
      'To communicate complex technical information clearly and effectively to a specific audience.',
      'To sell products through persuasive language.',
      'To perform scientific research.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'Which of the following is a common type of technical document?',
    options: [
      'Novel',
      'User Manual',
      'Fiction Book',
      'Newspaper Article'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'What does \'Audience Analysis\' involve in technical writing?',
    options: [
      'Analyzing the sales figures of a product.',
      'Understanding the knowledge level, needs, and goals of the people who will read the document.',
      'Analyzing competitor documentation.',
      'Choosing the right software for writing.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'What is \'Clarity\' in technical writing?',
    options: [
      'Using complex jargon to impress readers.',
      'Writing that is easy to understand, unambiguous, and free from confusion.',
      'Making documents look visually appealing only.',
      'Focusing on storytelling and emotional appeal.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'Which tool is commonly used for creating flowcharts and diagrams in technical documentation?',
    options: [
      'Microsoft Word for text only',
      'Microsoft Visio (or similar diagramming software)',
      'Adobe Photoshop for image editing',
      'Spreadsheet software'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'What is a \'Glossary\' in a technical document?',
    options: [
      'A list of authors and contributors.',
      'A list of specialized terms and their definitions used within the document.',
      'A table of contents for the document.',
      'An index of keywords.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'What is the purpose of \'Headings\' and \'Subheadings\' in technical documents?',
    options: [
      'To make the document longer.',
      'To break up text, organize content, and improve readability and navigability for the reader.',
      'To highlight unimportant information.',
      'To replace the need for a table of contents.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'Which writing style emphasizes directness, conciseness, and objectivity?',
    options: [
      'Poetic Style',
      'Informal Style',
      'Formal and Objective Style',
      'Narrative Style'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'What is \'Consistency\' important for in technical writing?',
    options: [
      'Using different terms for the same concept.',
      'Using consistent terminology, formatting, and style throughout a document or set of documents to avoid confusion and improve usability.',
      'Making documents visually unique.',
      'Focusing on speed of writing over accuracy.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'What is \'Usability\' in documentation?',
    options: [
      'How expensive the document is to produce.',
      'How easy it is for users to find the information they need and use it effectively to achieve their goals.',
      'The visual attractiveness of the document.',
      'The number of pages in the document.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'What is a \'Style Guide\' in technical writing?',
    options: [
      'A book about fashion.',
      'A set of rules and standards for writing, formatting, and designing documents to ensure consistency and quality.',
      'A list of popular writing software.',
      'A guide to grammar rules only.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'Which type of graphic is best for showing step-by-step instructions?',
    options: [
      'Bar Chart',
      'Pie Chart',
      'Flowchart',
      'Scatter Plot'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'What is a \'Revision History\' section in a document?',
    options: [
      'A summary of the document\'s content.',
      'A record of changes made to the document over time, including versions, dates, and authors.',
      'A list of references and citations.',
      'A section for user comments.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'What is the purpose of \'active voice\' in technical writing?',
    options: [
      'To make sentences longer and more complex.',
      'To make writing more direct, clear, and concise by emphasizing the doer of the action.',
      'To make writing more passive and formal.',
      'To hide the subject of the sentence.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-1',
    question: 'Which of the following is a key ethical consideration in technical writing?',
    options: [
      'Exaggerating product benefits.',
      'Ensuring accuracy and honesty in presented information.',
      'Using overly complex language to seem authoritative.',
      'Plagiarizing content from other sources.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'technical-writing'
  },

  {
    id: 'technical-writing-2',
    question: 'Explain \'DITA\' (Darwin Information Typing Architecture) and its benefits for structured authoring.',
    options: [
      'DITA is a new programming language for documentation.',
      'DITA is an XML-based architecture for organizing, writing, and publishing content, enabling content reuse, single-sourcing, and multichannel publishing, improving efficiency and consistency.',
      'DITA is only for creating printed manuals.',
      'DITA increases content duplication and inconsistency.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'Describe \'Single Sourcing\' in technical writing and its advantages.',
    options: [
      'Single sourcing means creating a document for only one output format.',
      'Single sourcing involves writing content once and then reusing it across multiple publications, formats (e.g., PDF, HTML, help files), and versions, reducing effort, ensuring consistency, and accelerating delivery.',
      'Single sourcing increases content management complexity.',
      'It is only suitable for very small documents.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'What is \'Information Architecture (IA)\' in technical documentation?',
    options: [
      'Designing the visual aesthetics of documents.',
      'Organizing and structuring content in a way that helps users find information and understand relationships, crucial for effective navigation and usability of complex documentation sets.',
      'IA is only about managing database structures.',
      'It is irrelevant for digital documentation.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'Explain \'Minimalism\' in technical writing.',
    options: [
      'Writing very short documents without much detail.',
      'A design philosophy that focuses on providing only the essential information users need, when they need it, to perform a task, reducing cognitive load and improving efficiency.',
      'Minimalism makes documents harder to understand.',
      'It is only for highly technical audiences.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'What are \'Content Management Systems (CMS)\' in the context of technical documentation (e.g., Confluence, Oxygen XML Author)?',
    options: [
      'CMS are only for managing website blogs.',
      'CMS (Component Content Management Systems - CCMS) are specialized platforms for creating, managing, and publishing highly structured, modular content, often used with DITA or other XML standards for technical documentation.',
      'CMS increase manual effort in document creation.',
      'They are only for managing visual assets.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'Describe \'Agile Documentation\' and its principles.',
    options: [
      'Agile documentation means documenting everything upfront in detail.',
      'Agile documentation emphasizes just-in-time, lean, and user-focused documentation that evolves with the product, prioritizing working software over comprehensive documentation, but ensuring necessary info is available.',
      'Agile documentation eliminates the need for any documentation.',
      'It is only for very small software projects.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'What is \'Localization\' in technical documentation?',
    options: [
      'Only translating documents into different languages.',
      'Adapting content to specific linguistic, cultural, and technical requirements of a target locale, going beyond mere translation to ensure cultural appropriateness and legal compliance.',
      'Localization simplifies the content creation process.',
      'It is only relevant for marketing materials.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'Explain \'Structured Authoring\' and its benefits for technical content.',
    options: [
      'Structured authoring means writing documents in a free-form, unstructured manner.',
      'Structured authoring uses predefined content models and semantic tags (e.g., XML, DITA) to enforce consistent structure and meaning, enabling automated processing, reuse, and multi-channel publishing.',
      'Structured authoring increases content creation time and effort.',
      'It makes content less reusable.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'What is \'Content Reuse\' in technical writing?',
    options: [
      'Copying and pasting content without any modifications.',
      'Using existing pieces of content in multiple documents or contexts, often enabled by structured authoring, to improve consistency, reduce effort, and accelerate delivery.',
      'Content reuse increases content management complexity.',
      'It is only for internal company documents.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'Describe the importance of \'User Testing\' for technical documentation.',
    options: [
      'User testing is only for software applications, not documents.',
      'User testing involves observing real users interacting with documentation to identify usability issues, confusing instructions, or missing information, ensuring the documentation meets user needs effectively.',
      'User testing increases the risk of documenting incorrect information.',
      'It is only done after the final release of the document.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'What are \'APIs\' and their significance for API documentation?',
    options: [
      'APIs are physical hardware devices.',
      'APIs (Application Programming Interfaces) define how software components interact. API documentation provides instructions, examples, and specifications for developers to effectively use an API to build applications.',
      'API documentation is only for end-users, not developers.',
      'APIs are irrelevant for software integration.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'Explain \'Chunking\' in technical writing.',
    options: [
      'Writing long, continuous blocks of text.',
      'Breaking down information into small, digestible, and logically related pieces to improve readability, comprehension, and scanning for users.',
      'Chunking is only for visual elements, not text.',
      'It increases the overall length of the document.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'What is \'Information Mapping\' methodology?',
    options: [
      'A method for creating geographical maps.',
      'A research-based method for organizing and presenting information according to specific content types and logical relationships, ensuring clarity, consistency, and user focus.',
      'Information mapping is only for creating outlines.',
      'It increases the subjectivity of content organization.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'What is \'Topic-Based Authoring\'?',
    options: [
      'Writing a document as one long, continuous narrative.',
      'Creating discrete, self-contained units of information (topics) that can be reused and combined to form different documents, promoting modularity and flexibility.',
      'Topic-based authoring is only for very short documents.',
      'It decreases content reuse opportunities.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-2',
    question: 'Describe the importance of \'Search Engine Optimization (SEO)\' for online technical documentation.',
    options: [
      'SEO is irrelevant for technical documentation as it\'s only for marketing websites.',
      'SEO helps users find technical documentation through search engines by optimizing content with relevant keywords, clear structure, and proper metadata, improving discoverability and usability.',
      'SEO complicates the process of creating technical content.',
      'It is only for internal company wikis.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'technical-writing'
  },

  {
    id: 'technical-writing-3',
    question: 'Discuss \'Content Strategy\' in technical communication and its key elements.',
    options: [
      'Content strategy is only about writing individual documents.',
      'Content strategy plans the creation, delivery, and governance of useful and usable content. Key elements include defining content purpose, target audience, messaging, channels, workflow, and content lifecycle management.',
      'Content strategy is irrelevant for achieving business goals.',
      'It focuses solely on the visual design of documentation.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'Explain \'Semantic Technologies\' (e.g., RDF, OWL) and their potential in intelligent technical documentation.',
    options: [
      'Semantic technologies are only for managing relational databases.',
      'Semantic technologies use formal descriptions of concepts and relationships (ontologies) to create machine-understandable content, enabling intelligent search, personalized content delivery, and automated content processing in technical documentation.',
      'Semantic technologies increase ambiguity in content.',
      'They are too complex for practical application in technical writing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'Describe \'User Experience (UX) Writing\' vs. \'Technical Writing\'.',
    options: [
      'UX writing and technical writing are identical roles.',
      'UX writing focuses on microcopy within interfaces (buttons, labels, error messages) to guide users through an experience; Technical writing focuses on longer-form, detailed documentation (manuals, guides) to explain functionality.',
      'UX writing is only for marketing; technical writing is for engineers.',
      'Neither involves understanding user needs.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'What are \'Microcontent\' and its applications (e.g., chatbots, voice assistants)?',
    options: [
      'Microcontent refers to very small text fonts.',
      'Microcontent is short, self-contained pieces of information designed for quick consumption and reuse across various platforms, ideal for chatbots, voice interfaces, notifications, and search results.',
      'Microcontent is only for social media posts.',
      'It is less effective for conveying technical information.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'Explain \'Content Governance\' in technical documentation.',
    options: [
      'Content governance means creating content without any rules.',
      'Content governance defines policies, processes, and roles for managing the content lifecycle, ensuring content quality, compliance, consistency, and proper content management practices across an organization.',
      'Content governance increases content creation time and cost.',
      'It is irrelevant for large-scale documentation projects.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'Discuss \'AI/ML\' applications in technical writing (e.g., content generation, translation, quality checks).',
    options: [
      'AI/ML replace human technical writers entirely.',
      'AI/ML can assist technical writers by automating content generation (e.g., from data), improving machine translation, performing automated grammar/style checks, and suggesting content improvements, enhancing efficiency and quality.',
      'AI/ML introduces more errors into technical documents.',
      'It is only for very basic text manipulation.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'What is \'Personalized Content Delivery\' in technical documentation?',
    options: [
      'Delivering the same content to all users, regardless of their needs.',
      'Delivering highly customized and relevant technical content to individual users based on their role, skill level, context, or preferences, enabled by structured content and content management systems.',
      'Personalized content delivery increases content management complexity significantly.',
      'It is only applicable to marketing content, not technical documents.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'Describe \'Content Strategy for Chatbots/Voice Assistants\' in technical communication.',
    options: [
      'Content strategy for chatbots focuses on lengthy, detailed responses.',
      'It involves designing concise, conversational, and context-aware microcontent, defining response flows, and establishing a consistent bot persona to effectively answer user queries and guide interactions.',
      'Chatbot content strategy is irrelevant to user experience.',
      'It simplifies the process of creating technical documentation.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'Explain \'Technical SEO for Documentation\' and its importance.',
    options: [
      'Technical SEO is only for e-commerce websites.',
      'Technical SEO (e.g., sitemaps, structured data, canonical tags, mobile-friendliness) optimizes the technical aspects of online documentation to improve its visibility and ranking in search engines, ensuring users can find information easily.',
      'Technical SEO increases the difficulty of publishing documentation online.',
      'It has no impact on user discoverability of technical content.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'How do you measure the \'Effectiveness and ROI\' of technical documentation?',
    options: [
      'Effectiveness is only measured by the number of pages written.',
      'Metrics include user satisfaction (surveys), task completion rates, support ticket reduction, search analytics (what users search for), and usage statistics. ROI connects these to business outcomes (e.g., reduced support costs).',
      'Measuring effectiveness is too complex and not practical for documentation.',
      'ROI is only relevant for sales and marketing departments.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'What is \'DocOps\' (Documentation Operations) and its alignment with DevOps principles?',
    options: [
      'DocOps separates documentation efforts from software development.',
      'DocOps applies DevOps principles (automation, CI/CD, collaboration) to documentation, streamlining content creation, versioning, testing, and publishing processes, making documentation an integral part of the software delivery pipeline.',
      'DocOps increases manual effort in documentation workflows.',
      'It is only for very small documentation teams.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'What are \'Intelligent Content\' concepts (e.g., semantic tagging, context awareness) in technical communication?',
    options: [
      'Intelligent content relies solely on manual tagging of information.',
      'Intelligent content is content that is semantically rich (tagged with meaning), structured, and reusable, allowing it to be automatically adapted, personalized, and delivered based on user context and device, enhancing findability and usability.',
      'Intelligent content is less adaptable to different output formats.',
      'It is a theoretical concept without practical applications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'Discuss \'Augmented Reality (AR)\' and \'Virtual Reality (VR)\' as new delivery channels for technical information.',
    options: [
      'AR/VR are irrelevant for delivering technical documentation.',
      'AR/VR can provide immersive, interactive instructions (e.g., overlaying repair guides on machinery via AR glasses, simulating training procedures in VR), offering hands-on learning and just-in-time information delivery.',
      'AR/VR delivery is too complex and expensive for practical use.',
      'They only replace text-based manuals entirely.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'Explain the challenges of \'Global Content Management\' for technical documentation.',
    options: [
      'Global content management simplifies all localization efforts.',
      'Challenges include maintaining consistency across languages/cultures, managing multiple content versions, ensuring legal/regulatory compliance in different regions, and coordinating distributed authoring teams.',
      'Global content management is only for single-language documents.',
      'It eliminates the need for any translation services.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'technical-writing-3',
    question: 'Describe \'Agile UX for Documentation\' and its impact on the documentation process.',
    options: [
      'Agile UX for documentation means documenting everything after the product release.',
      'This approach integrates UX principles (user research, usability testing) and Agile practices into the documentation process, ensuring documentation is user-centered, iterative, and delivered in small, frequent increments alongside the product.',
      'Agile UX for documentation increases the risk of irrelevant content.',
      'It is only suitable for small, simple documents.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'technical-writing'
  },
  {
    id: 'sales-eng-1',
    question: 'What is the primary role of a Sales Engineer?',
    options: [
      'To manage company finances.',
      'To combine technical expertise with sales skills to support the sale of complex products.',
      'To write marketing slogans.',
      'To provide only post-sales technical support.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'Which skill is most crucial for a Sales Engineer in understanding customer problems?',
    options: [
      'Graphic Design',
      'Active Listening',
      'Database Administration',
      'Public Speaking (without engagement)'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'What is a \'Product Demonstration\' in Sales Engineering?',
    options: [
      'A sales pitch with no technical details.',
      'A live or virtual presentation showcasing the functionality, features, and benefits of a product to a potential customer.',
      'A technical support session.',
      'A meeting to discuss pricing only.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'What does \'Discovery Call\' refer to in sales engineering?',
    options: [
      'A call to close a deal quickly.',
      'The initial conversation with a prospect to understand their challenges, needs, and priorities.',
      'A call to provide technical support after a sale.',
      'A call to showcase all product features.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'Why is \'Technical Acumen\' important for a Sales Engineer?',
    options: [
      'To only read technical manuals.',
      'To deeply understand how products work, identify technical requirements, and design tailored solutions for customers.',
      'To avoid interacting with customers.',
      'To focus solely on sales quotas.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'Which of the following is a key outcome of a successful Discovery Call?',
    options: [
      'Immediate purchase by the prospect.',
      'Understanding the prospect\'s pain points and qualifying their fit for the solution.',
      'A detailed technical solution architecture document.',
      'A signed contract.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'What is the role of \'Empathy\' for a Sales Engineer?',
    options: [
      'To manipulate prospects into buying.',
      'To understand and relate to the prospect\'s challenges and feelings, enabling personalized and effective problem-solving.',
      'To focus only on technical specifications.',
      'To avoid emotional connections with customers.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'What is \'Objection Handling\' in Sales Engineering?',
    options: [
      'Ignoring customer concerns.',
      'The process of addressing and overcoming a prospect\'s concerns, doubts, or pushbacks about a product or service to move the sale forward.',
      'Only discussing product features.',
      'Ending the sales conversation immediately.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'Which document formally outlines the technical solution proposed to a client?',
    options: [
      'Marketing Brochure',
      'Sales Quotation',
      'Technical Proposal / Solution Design Document',
      'Customer Feedback Form'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'What is the purpose of a \'Proof of Concept (POC)\' in Sales Engineering?',
    options: [
      'To demonstrate all product features without customization.',
      'A prospect-specific trial or pilot project to validate the feasibility and value of a proposed solution in their real-world environment.',
      'To provide free technical support indefinitely.',
      'To showcase competitor products.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'Why is \'Clear Communication\' vital for a Sales Engineer?',
    options: [
      'To use complex jargon to impress clients.',
      'To translate complex technical concepts into understandable business value for both technical and non-technical audiences.',
      'To avoid answering difficult technical questions.',
      'To only communicate with the sales team.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'What is \'Competitive Analysis\' in Sales Engineering?',
    options: [
      'Ignoring competitor products.',
      'Identifying and evaluating competitors\' strengths and weaknesses in relation to your own product, to better position your solution and address objections.',
      'Collaborating with competitors on joint ventures.',
      'Only focusing on internal product development.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'What is a \'Use Case\' in a sales engineering context?',
    options: [
      'A legal precedent for product liability.',
      'A specific scenario or problem that a customer faces, which the proposed product or solution aims to address.',
      'A financial model for product pricing.',
      'A general overview of industry trends.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'Which metric is often tracked by Sales Engineers to measure success?',
    options: [
      'Number of internal meetings attended.',
      'Technical Win Rate (success in overcoming technical objections).',
      'Amount of coffee consumed daily.',
      'Number of emails sent per day.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-1',
    question: 'What is the primary interface for a Sales Engineer between a customer and the product/engineering team?',
    options: [
      'Customer Service Department',
      'Sales Team',
      'Technical Sales / Sales Engineering',
      'Marketing Department'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'sales-engineering'
  },

  {
    id: 'sales-eng-2',
    question: 'Explain \'Value-Based Selling\' and its advantages for Sales Engineers.',
    options: [
      'Value-based selling focuses solely on product features and price.',
      'Value-based selling centers conversations on the economic impact and business outcomes a solution delivers to the customer, rather than just features, leading to higher win rates and reduced discounting.',
      'Value-based selling is only for low-cost products.',
      'It increases the sales cycle length.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'Describe the \'SPIN Selling\' methodology and its application in Sales Engineering discovery.',
    options: [
      'SPIN selling focuses on immediately pitching product features.',
      'SPIN (Situation, Problem, Implication, Need-Payoff) selling is a questioning technique that helps Sales Engineers uncover customer needs, identify problems, understand their implications, and position the solution as a payoff for those needs.',
      'SPIN selling is only for closing deals, not discovery.',
      'It involves telling the customer what their problems are.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'What is a \'Request for Proposal (RFP)\' and the Sales Engineer\'s role in responding to it?',
    options: [
      'An RFP is a marketing document from a vendor.',
      'An RFP is a document from a buyer seeking proposals from vendors for a complex project. SEs provide technical responses, solution designs, and ensure alignment with the buyer\'s technical requirements.',
      'SEs are not involved in RFP responses.',
      'An RFP is only for simple product purchases.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'Explain \'Solution Architecture\' in Sales Engineering and its iterative nature.',
    options: [
      'Solution architecture is a fixed, one-time design process.',
      'Solution architecture in SE is the iterative process of designing a technical solution that addresses a client\'s specific business problems and integrates with their existing environment, often evolving through discovery and POCs.',
      'Solution architecture is only performed by the client\'s IT team.',
      'It focuses solely on individual product features.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'What are \'Technical Objections\' and common techniques to overcome them?',
    options: [
      'Technical objections are always about product pricing.',
      'Technical objections are concerns related to a product\'s technical capabilities, integration, or feasibility. Techniques to overcome include providing detailed explanations, conducting POCs, and offering workarounds.',
      'Technical objections are irrelevant for Sales Engineers.',
      'They always lead to a lost sale.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'Describe \'ROI (Return on Investment) Calculation\' for proposed solutions.',
    options: [
      'ROI calculation only focuses on the initial product cost.',
      'ROI calculation quantifies the financial benefits (e.g., cost savings, revenue increase) expected from implementing a solution, compared to its cost, used to justify investment to business stakeholders.',
      'ROI is only for internal company projects.',
      'It is irrelevant for sales discussions.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'What is \'Competitive Differentiation\' and how does a Sales Engineer leverage it?',
    options: [
      'Competitive differentiation means having the lowest price.',
      'Competitive differentiation highlights unique aspects of a product that set it apart from rivals. SEs leverage this by focusing demos and discussions on these unique strengths to address specific customer pains that competitors cannot.',
      'Competitive differentiation is only a marketing responsibility.',
      'It increases product complexity without benefits.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'Explain the \'Feel, Felt, Found\' technique in objection handling.',
    options: [
      'This technique is about ignoring the customer\'s feelings.',
      'It\'s an objection handling technique where you acknowledge the customer\'s feeling (\'I understand how you feel\'), relate to it (\'Other clients have felt that way\'), and then provide a solution (\'What they found was...\').',
      'This technique is only for emotional objections, not technical ones.',
      'It involves arguing with the customer\'s perception.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'What is \'Technical Closing\' in the sales cycle?',
    options: [
      'The final pricing negotiation.',
      'Securing technical approval and commitment from the prospect\'s technical stakeholders, often after a successful POC or detailed technical discussions, before the final commercial close.',
      'Technical closing involves only the sales representative.',
      'It is the first step in the sales process.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'Describe best practices for \'Tailoring Product Demonstrations\' to specific audiences.',
    options: [
      'All product demos should be generic and cover all features.',
      'Best practices include understanding the audience\'s role and pain points, customizing the demo environment, focusing on relevant use cases, and telling a story that resonates with their specific business challenges.',
      'Tailoring demos increases the risk of technical errors.',
      'It is only necessary for very large enterprises.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'What is \'Technical Validation\' during the sales process?',
    options: [
      'Validation of the sales representative\'s technical skills.',
      'The process of ensuring that the proposed technical solution is feasible, meets the client\'s requirements, and can be successfully implemented within their environment, often through assessments or pilots.',
      'Technical validation is irrelevant if the customer is interested.',
      'It is only done by the customer\'s internal IT team.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'Explain the \'Relationship between Sales Engineering and Product Management\'.',
    options: [
      'Sales Engineering and Product Management are completely separate functions.',
      'Sales Engineers provide crucial customer and market feedback to Product Management for product improvements and roadmap decisions, while Product Management defines the product vision and features that SEs sell.',
      'Sales Engineers dictate the product roadmap directly.',
      'Product Management only focuses on sales quotas.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'What are \'Technical Presentations\' and how do they differ from marketing presentations?',
    options: [
      'Technical presentations only use bullet points and no visuals.',
      'Technical presentations focus on explaining the \'how\' and \'why\' of a solution, often with deeper technical detail for a more technical audience, unlike marketing presentations that focus on high-level benefits.',
      'Technical presentations are solely for internal teams.',
      'They avoid any direct communication with customers.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'Describe the role of \'CRM (Customer Relationship Management)\' tools for Sales Engineers.',
    options: [
      'CRM tools are only for managing personal contacts.',
      'CRM tools are used by SEs to track customer interactions, manage sales pipelines, access customer data, and automate sales processes, ensuring a holistic view of customer relationships and sales progress.',
      'CRM tools increase manual data entry for SEs.',
      'They are irrelevant for understanding customer needs.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-2',
    question: 'What is \'Pre-sales Support\' provided by a Sales Engineer?',
    options: [
      'Providing technical support after a product has been purchased.',
      'Technical assistance provided to the sales team and potential customers *before* a sale is made, including product demonstrations, technical presentations, and solution design.',
      'Pre-sales support is only for internal team training.',
      'It involves managing customer billing and invoicing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'sales-engineering'
  },

  {
    id: 'sales-eng-3',
    question: 'Discuss \'Strategic Account Management\' from a Sales Engineering perspective.',
    options: [
      'Strategic account management focuses only on new customer acquisition.',
      'It involves building deep, long-term technical relationships with key strategic accounts, understanding their evolving needs, and proactively identifying opportunities for expanding product adoption and delivering continuous value beyond initial sales.',
      'Strategic account management is purely a sales representative\'s role.',
      'It is irrelevant for post-sales customer success.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'Explain \'Enterprise Architecture Principles\' and how they influence sales engineering solutions for large organizations.',
    options: [
      'Enterprise architecture principles only apply to small IT departments.',
      'These principles (e.g., reusability, standardization, modularity, security) guide the design of an organization\'s IT landscape. SEs must understand and align proposed solutions with these principles to ensure successful adoption and long-term value for large enterprises.',
      'Enterprise architecture principles simplify solution design for SEs.',
      'They are irrelevant for business outcomes.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'Describe \'Complex Negotiation Strategies\' for large enterprise deals, incorporating technical and business aspects.',
    options: [
      'Complex negotiations are solely about price reductions.',
      'Strategies involve understanding stakeholder motivations, identifying technical trade-offs, quantifying value, managing expectations, and leveraging technical expertise to achieve win-win outcomes for both commercial and technical terms in large deals.',
      'Technical aspects are irrelevant in large enterprise negotiations.',
      'Negotiations always involve only one decision-maker.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'What is \'Cloud Solution Architecture\' in Sales Engineering (e.g., IaaS, PaaS, SaaS considerations)?',
    options: [
      'Cloud solution architecture is only for on-premises deployments.',
      'Designing solutions leveraging cloud services (IaaS for infrastructure, PaaS for platforms, SaaS for applications), considering scalability, security, cost optimization, and integration with existing cloud or on-premises environments for clients.',
      'Cloud solution architecture is irrelevant for SaaS products.',
      'It only focuses on physical hardware components in the cloud.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'Explain \'Business Case Development\' and \'TCO (Total Cost of Ownership)\' analysis for proposed solutions.',
    options: [
      'Business case development only focuses on initial product cost.',
      'Business case development justifies investment by outlining benefits, costs, and risks. TCO analysis quantifies all direct and indirect costs over the solution\'s lifecycle, crucial for financial justification and demonstrating ROI to clients.',
      'TCO analysis is irrelevant for cloud solutions.',
      'It is only for internal company use, not for clients.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'Discuss \'Competitive Intelligence\' beyond basic competitive analysis for Sales Engineers.',
    options: [
      'Competitive intelligence focuses only on publicly available information.',
      'Beyond basic analysis, CI involves continuous monitoring of competitor strategies, product roadmaps, pricing, and messaging, using advanced tools and human intelligence to anticipate moves and prepare proactive responses during sales cycles.',
      'Competitive intelligence is solely a marketing function.',
      'It increases product features without market validation.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'What are \'Advanced Proof of Concept (POC) Strategies\' (e.g., success criteria, executive buy-in, scalability testing)?',
    options: [
      'Advanced POCs only aim to show basic product functionality.',
      'Strategies involve defining clear success criteria aligned with business outcomes, securing executive buy-in upfront, conducting scalability/performance testing, and ensuring a smooth transition post-POC to accelerate deal closure.',
      'POCs are irrelevant for enterprise deals.',
      'They always require significant upfront investment from the client.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'Describe \'Technical Debt Management\' from a Sales Engineering perspective.',
    options: [
      'Technical debt is solely an engineering concern, ignored by SEs.',
      'SEs need to understand a client\'s existing technical debt and how a proposed solution can either alleviate or exacerbate it, influencing implementation complexity, long-term costs, and overall value proposition for the client.',
      'Technical debt is always a reason to avoid a new solution.',
      'It has no impact on future solution scalability.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'Explain \'Integration Strategy\' for complex enterprise environments (e.g., APIs, middleware, data synchronization).',
    options: [
      'Integration strategy only focuses on new system deployments.',
      'Designing how a proposed solution will connect and exchange data with a client\'s existing IT landscape (e.g., using APIs, message queues, ETL tools, enterprise service buses), crucial for seamless adoption and data flow in complex environments.',
      'Integration strategy is irrelevant for cloud-based solutions.',
      'It simplifies data management by eliminating all data silos.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'How do Sales Engineers leverage \'Data Analytics and AI\' for personalized pitches and insights?',
    options: [
      'Data analytics and AI are irrelevant for sales engineering.',
      'SEs use data analytics to understand client usage patterns, predict needs, and identify upsell opportunities. AI-powered tools help in personalizing demo environments, generating tailored content, and gaining competitive insights for more effective pitches.',
      'Data analytics and AI replace the need for human interaction in sales.',
      'They only provide generic insights, not personalized ones.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'What is \'Change Management\' from a Sales Engineering perspective for client adoption?',
    options: [
      'Change management only focuses on product feature changes.',
      'SEs anticipate and help clients navigate the organizational and technical changes required to adopt a new solution, addressing potential resistance, providing training guidance, and ensuring a smooth transition to maximize long-term client success.',
      'Change management is solely the client\'s responsibility.',
      'It has no impact on product implementation speed.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'Describe \'Thought Leadership\' and its contribution to a Sales Engineer\'s influence and credibility.',
    options: [
      'Thought leadership means only selling products.',
      'Thought leadership involves establishing oneself as an expert in a specific domain through content (blogs, webinars), speaking engagements, and industry contributions, enhancing credibility and trust with prospects and positioning the SE as a trusted advisor.',
      'Thought leadership is irrelevant for technical sales roles.',
      'It only applies to academic research.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'Explain \'Professional Services Engagement\' (e.g., implementation, training, consulting) in the sales cycle.',
    options: [
      'Professional services are only offered after a product is purchased.',
      'Professional services involve offering additional support like implementation, customized training, or strategic consulting to ensure successful product adoption and maximize client value, often influencing the initial sale by providing a complete solution.',
      'Professional services increase sales cycle length without benefits.',
      'They are irrelevant for complex enterprise software sales.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'What are \'Customer Success Metrics\' (e.g., Adoption Rate, Time to Value, NPS) relevant to Sales Engineering?',
    options: [
      'Customer success metrics are only for post-sales teams.',
      'SEs track metrics like adoption rate (how much the product is used), time to value (how quickly clients see benefits), and NPS (Net Promoter Score) to demonstrate ongoing value, identify expansion opportunities, and inform future sales efforts.',
      'These metrics are irrelevant to closing new deals.',
      'They only apply to very small businesses.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'sales-eng-3',
    question: 'How do Sales Engineers manage \'Multi-Stakeholder\' decision-making in complex deals?',
    options: [
      'SEs focus on convincing only one key decision-maker.',
      'Managing multiple stakeholders involves understanding individual concerns (technical, financial, operational), tailoring messaging to each, building consensus, and addressing diverse objections to secure collective buy-in for complex enterprise solutions.',
      'Multi-stakeholder management complicates the sales process unnecessarily.',
      'It is only relevant for simple product sales.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'sales-engineering'
  },
  {
    id: 'embedded-1',
    question: 'What is the primary characteristic of an Embedded System?',
    options: [
      'It is a general-purpose computer like a desktop PC.',
      'It is a specialized computer system designed for a dedicated function within a larger mechanical or electrical system.',
      'It always runs a full operating system like Windows.',
      'It is primarily used for internet Browse.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'Which of the following is a common component of an embedded system?',
    options: [
      'Large Hard Disk Drive',
      'Microcontroller',
      'High-resolution Monitor',
      'Standard Keyboard'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'What is a \'Microcontroller\'?',
    options: [
      'A very small computer monitor.',
      'A small computer on a single integrated circuit containing a processor core, memory, and programmable input/output peripherals.',
      'A type of software program.',
      'A network device for large servers.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'Which programming language is widely used for embedded systems development?',
    options: [
      'HTML',
      'Python (for high-level scripting)',
      'C or C++',
      'JavaScript'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'What is \'Firmware\' in an embedded system?',
    options: [
      'The physical hardware components.',
      'Software programmed into a hardware device\'s non-volatile memory, providing control and instructions for the device to operate.',
      'The operating system running on a desktop PC.',
      'Application software installed by the user.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'What is a \'sensor\' in an embedded system?',
    options: [
      'A device that performs an action.',
      'A component that detects and responds to physical inputs from the environment (e.g., light, heat, motion) and converts them into electrical signals.',
      'A power supply unit.',
      'A display screen for output.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'What is an \'actuator\' in an embedded system?',
    options: [
      'A device that collects data.',
      'A component that takes electrical signals and converts them into physical action (e.g., motor, valve, LED).',
      'A type of memory chip.',
      'A communication protocol.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'Which of these is a common communication protocol used in embedded systems for short distances?',
    options: [
      'HTTP',
      'Ethernet',
      'I2C (Inter-Integrated Circuit)',
      'FTP'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'What is a \'Real-Time Operating System (RTOS)\'?',
    options: [
      'An OS that only supports graphical user interfaces.',
      'An operating system designed to guarantee that certain operations execute within specified time constraints, crucial for time-critical embedded applications.',
      'An OS for general-purpose computing that is always fast.',
      'An OS that does not allow multitasking.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'What is \'Debugging\' in embedded systems development?',
    options: [
      'The process of physically assembling the embedded device.',
      'The process of identifying, analyzing, and removing errors or bugs from the embedded software or hardware.',
      'Writing the initial embedded code.',
      'Testing the power supply of the device.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'Which type of memory is typically used to store firmware in embedded systems due to its non-volatility?',
    options: [
      'RAM (Random Access Memory)',
      'Cache Memory',
      'Flash Memory (or EEPROM)',
      'Hard Disk Drive'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'What is a \'GPIO\' pin on a microcontroller?',
    options: [
      'A pin exclusively for power input.',
      'General Purpose Input/Output pin, which can be configured as either an input or an output by software.',
      'A pin used only for high-speed data transfer.',
      'A pin dedicated to analog signals.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'What is \'Cross-Compilation\' in embedded development?',
    options: [
      'Compiling code directly on the target embedded device.',
      'Compiling code on one computer architecture (e.g., desktop PC) for execution on a different target architecture (e.g., microcontroller).',
      'Compiling code in multiple programming languages simultaneously.',
      'Compiling code with no errors.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'Which standard interface is commonly used for serial communication between microcontrollers and other devices?',
    options: [
      'USB (Universal Serial Bus)',
      'HDMI (High-Definition Multimedia Interface)',
      'UART (Universal Asynchronous Receiver-Transmitter)',
      'VGA (Video Graphics Array)'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-1',
    question: 'What is \'Power Consumption\' a critical consideration for in battery-powered embedded systems?',
    options: [
      'It affects the physical size of the device.',
      'It directly impacts the battery life and operational duration of the device, requiring careful optimization of hardware and software.',
      'It is only relevant for large industrial systems.',
      'It has no impact on device performance.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'embedded-systems'
  },

  {
    id: 'embedded-2',
    question: 'Explain \'Interrupts\' in microcontrollers and their importance for responsiveness.',
    options: [
      'Interrupts are regular delays in program execution.',
      'Interrupts are hardware or software signals that cause the CPU to temporarily suspend its current execution to handle a higher-priority event, allowing immediate response to external events without constant polling.',
      'Interrupts are only for debugging purposes.',
      'Interrupts make embedded systems less efficient.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'Describe \'Watchdog Timers\' and their role in embedded system reliability.',
    options: [
      'Watchdog timers are used to track system uptime only.',
      'Watchdog timers are hardware timers that reset the microcontroller if the main program becomes unresponsive (e.g., due to a software bug or deadlock), ensuring system recovery and reliability.',
      'Watchdog timers increase power consumption unnecessarily.',
      'They are only used in development environments, not production.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'What is \'Memory Management\' in embedded systems (e.g., heap, stack, static memory)?',
    options: [
      'Memory management is only relevant for desktop computers with large RAM.',
      'Efficient allocation and deallocation of limited memory resources (stack for local variables, heap for dynamic allocation, static for global variables) to prevent overflows, leaks, and ensure system stability.',
      'Memory management increases the memory footprint of embedded applications.',
      'It is automatically handled by the compiler without developer input.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'Explain \'SPI\' (Serial Peripheral Interface) and its use in embedded communication.',
    options: [
      'SPI is a parallel communication protocol.',
      'SPI is a synchronous serial communication interface used for short-distance communication between a microcontroller and peripherals (e.g., sensors, displays) using a master-slave architecture.',
      'SPI is only for long-range wireless communication.',
      'SPI requires complex addressing for each device.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'What is \'Power Optimization Techniques\' in embedded systems?',
    options: [
      'Always running the CPU at maximum frequency.',
      'Techniques like clock gating, power gating, dynamic voltage and frequency scaling (DVFS), and using low-power modes to reduce energy consumption and extend battery life in embedded devices.',
      'Power optimization only impacts physical size, not battery life.',
      'It increases the overall computational complexity of the system.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'Describe \'Device Drivers\' in embedded Linux or RTOS and their function.',
    options: [
      'Device drivers are physical hardware components.',
      'Device drivers are software interfaces that allow the operating system to communicate with and control specific hardware devices (e.g., sensors, network interfaces), abstracting hardware complexities for applications.',
      'Device drivers only manage power consumption.',
      'They are irrelevant for embedded systems without an OS.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'What are \'Bootloaders\' in embedded systems?',
    options: [
      'Software for network configuration.',
      'Small programs that run immediately after power-on or reset to initialize the hardware and load the main application firmware into memory for execution.',
      'Bootloaders are only for desktop computers.',
      'They manage user interfaces for embedded devices.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'Explain \'Embedded System Security Concerns\' (e.g., secure boot, firmware updates, physical tampering).',
    options: [
      'Embedded systems are inherently secure due to their small size.',
      'Concerns include unauthorized access, firmware tampering, insecure updates, side-channel attacks, and physical vulnerability, requiring secure boot, encrypted updates, and tamper-detection mechanisms.',
      'Security concerns are only relevant for internet-connected embedded systems.',
      'Implementing security features makes embedded systems less reliable.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'What is \'Finite State Machine (FSM)\' in embedded software design?',
    options: [
      'A method for hardware design only.',
      'A mathematical model of computation used to design systems that exhibit different behaviors based on their current state and input events, common for event-driven embedded applications.',
      'An FSM is a type of programming language.',
      'It increases the complexity of software logic.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'Describe \'Hardware-Software Co-Design\' in embedded systems.',
    options: [
      'Hardware and software are designed completely independently.',
      'Hardware-software co-design is an iterative process where hardware and software components are designed and optimized together, considering their interactions to meet performance, power, and cost constraints of the embedded system.',
      'It applies only to very large-scale integrated circuits.',
      'It always leads to longer development cycles.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'What is \'Pulse Width Modulation (PWM)\' and its common applications in embedded systems?',
    options: [
      'PWM is a digital communication protocol for sensors.',
      'PWM is a modulation technique that controls the average power delivered to an electrical device by varying the width of the ON-time of a pulse, commonly used for motor speed control and LED dimming.',
      'PWM is only for analog signal conversion.',
      'It is used for wireless data transmission.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'Explain \'JTAG\' (Joint Test Action Group) and \'SWD\' (Serial Wire Debug) interfaces for debugging.',
    options: [
      'JTAG and SWD are types of communication protocols for IoT devices.',
      'JTAG and SWD are hardware interfaces used for on-chip debugging and programming of microcontrollers and embedded systems, allowing developers to inspect memory, registers, and control program execution.',
      'These interfaces are only for production testing, not development.',
      'They increase the complexity of embedded hardware design.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'What is \'Embedded Linux\' and its advantages/disadvantages compared to RTOS for certain applications?',
    options: [
      'Embedded Linux is a lightweight RTOS.',
      'Embedded Linux offers rich features, networking stacks, and broad community support (advantages) but has larger memory footprint and potentially higher latency variability than a true RTOS (disadvantages), suitable for complex, less time-critical applications.',
      'Embedded Linux is only for desktop computers.',
      'It cannot run on microcontrollers.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'Describe \'Memory-Mapped I/O\' in microcontrollers.',
    options: [
      'Memory-mapped I/O uses separate instructions for accessing I/O devices and memory.',
      'Memory-mapped I/O is a technique where hardware devices are mapped to specific memory addresses, allowing the CPU to interact with them using standard memory access instructions, simplifying hardware control.',
      'Memory-mapped I/O is only for external memory devices.',
      'It reduces the overall addressable memory space for programs.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-2',
    question: 'What is \'Edge AI/TinyML\' in embedded systems?',
    options: [
      'Edge AI requires continuous cloud connectivity for inference.',
      'Edge AI/TinyML refers to deploying Machine Learning models directly on resource-constrained embedded devices, enabling local data processing, low latency, and improved privacy for AI applications without cloud reliance.',
      'TinyML is only for very powerful embedded systems.',
      'It increases the power consumption of embedded devices.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'embedded-systems'
  },

  {
    id: 'embedded-3',
    question: 'Discuss \'Formal Verification\' techniques in embedded system design for critical applications.',
    options: [
      'Formal verification is only for detecting basic syntax errors.',
      'Formal verification uses mathematical methods to prove the correctness of hardware and software designs, crucial for safety-critical embedded systems (e.g., aerospace, medical) where traditional testing is insufficient to guarantee correctness.',
      'Formal verification increases the complexity and cost of embedded systems development without significant benefits.',
      'It replaces the need for any physical testing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'Explain \'Hardware-in-the-Loop (HIL) Simulation\' in embedded system testing.',
    options: [
      'HIL simulation means testing only the software components in isolation.',
      'HIL simulation is a technique where a physical embedded controller is tested against a real-time simulation of the plant or system it controls, providing a realistic test environment for complex systems without using the actual physical plant.',
      'HIL simulation increases the cost and time of testing embedded systems.',
      'It is only used for very simple, non-critical embedded systems.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'Describe \'Functional Safety Standards\' (e.g., ISO 26262, IEC 61508) for embedded systems.',
    options: [
      'Functional safety standards are only for consumer electronics.',
      'These standards define systematic approaches to achieve acceptable risk levels for embedded systems whose failure could cause harm (e.g., automotive, industrial control), covering the entire safety lifecycle from concept to decommissioning.',
      'Functional safety standards complicate embedded system design unnecessarily.',
      'They are voluntary guidelines with no legal implications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'What is \'Secure Boot\' and \'Trusted Execution Environments (TEEs)\' in embedded security?',
    options: [
      'Secure boot allows any firmware to load; TEEs expose sensitive data.',
      'Secure Boot ensures only authenticated firmware loads; TEEs create isolated, secure execution environments within a processor to protect sensitive code and data from the rest of the system, crucial for robust embedded security.',
      'These technologies increase system vulnerabilities.',
      'They are only for very high-performance embedded systems.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'Explain \'Domain-Specific Languages (DSLs)\' in embedded programming.',
    options: [
      'DSLs are general-purpose programming languages like C.',
      'DSLs are specialized programming languages tailored for a particular application domain (e.g., control systems, signal processing) in embedded systems, offering higher abstraction, better expressiveness, and reduced development time for specific tasks.',
      'DSLs increase the complexity of embedded software development.',
      'They are incompatible with standard embedded toolchains.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'Discuss \'Hardware Accelerators\' (e.g., FPGAs, ASICs) for embedded AI/ML applications.',
    options: [
      'Hardware accelerators always slow down embedded system performance.',
      'FPGAs (Field-Programmable Gate Arrays) and ASICs (Application-Specific Integrated Circuits) are custom hardware designed to accelerate specific computations (e.g., neural network inference) in embedded systems, offering high performance and energy efficiency for AI/ML tasks.',
      'Hardware accelerators are less energy efficient than general-purpose CPUs for ML.',
      'They are only suitable for very low-volume production.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'What is \'Model-Based Design\' in embedded systems development?',
    options: [
      'Model-based design focuses only on physical prototypes.',
      'Model-based design uses graphical models (e.g., Simulink, Stateflow) as a central artifact for specifying, simulating, and automatically generating code for embedded systems, improving design quality, reusability, and reducing errors.',
      'Model-based design increases development time and cost.',
      'It eliminates the need for any testing in embedded systems.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'Describe \'Real-Time Scheduling Algorithms\' (e.g., Rate Monotonic, Earliest Deadline First) in RTOS.',
    options: [
      'Real-time scheduling algorithms only manage non-critical tasks.',
      'These algorithms (Rate Monotonic: static priority; Earliest Deadline First: dynamic priority) prioritize and schedule tasks in an RTOS to ensure that time-critical operations meet their deadlines, crucial for deterministic behavior in embedded systems.',
      'Real-time scheduling algorithms increase system latency.',
      'They are irrelevant for ensuring system responsiveness.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'Explain \'Over-the-Air (OTA) Updates\' security considerations for IoT/embedded devices.',
    options: [
      'OTA updates are inherently secure and require no extra protection.',
      'Security considerations include authenticating firmware source, encrypting update packages, verifying integrity (digital signatures), ensuring rollback capability, and protecting against denial-of-service during update process to prevent compromise.',
      'OTA updates are only for smartphones, not embedded systems.',
      'They increase the risk of physical tampering.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'How do you perform \'Power Integrity Analysis\' in embedded hardware design?',
    options: [
      'Power integrity analysis only checks for short circuits.',
      'It involves analyzing the stability of power delivery to integrated circuits, ensuring clean power supply, minimizing voltage drops, and suppressing noise, crucial for reliable operation of high-performance embedded systems.',
      'Power integrity analysis is irrelevant for low-power devices.',
      'It increases the cost of embedded hardware components.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'What is \'Cyber-Physical Systems (CPS)\' and their relationship to embedded systems and IoT?',
    options: [
      'CPS are only theoretical concepts with no real-world applications.',
      'CPS are systems that integrate computation, networking, and physical processes. Embedded systems are components within CPS, while IoT devices are a subset of CPS that enable connectivity, forming the backbone of smart factories, smart cities, etc.',
      'CPS are independent of embedded systems and IoT.',
      'They are less secure than traditional IT systems.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'Describe \'Software-Defined Peripherals\' and their advantages in embedded design.',
    options: [
      'Software-defined peripherals are physical hardware components that cannot be changed.',
      'Software-defined peripherals allow configurable hardware blocks whose functionality can be modified or redefined through software, offering greater flexibility, reconfigurability, and reduced hardware cost compared to fixed-function hardware.',
      'They increase the complexity of embedded software development.',
      'They are less efficient than fixed-function hardware.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'Explain \'Embedded System Debugging Tools\' (e.g., Emulators, Simulators, Logic Analyzers, Oscilloscopes).',
    options: [
      'These tools are only for testing high-level software applications.',
      'Emulators mimic entire systems; Simulators model specific components; Logic Analyzers capture digital signals; Oscilloscopes visualize analog signals. All are crucial for diagnosing complex hardware/software interactions and timing issues in embedded systems.',
      'These tools increase the time needed for debugging.',
      'They are only used by hardware engineers, not software developers.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'What is \'Resource-Constrained Optimization\' in embedded systems?',
    options: [
      'Optimizing embedded systems by adding unlimited hardware resources.',
      'Optimizing software and hardware designs to function effectively within strict limitations of processing power, memory, power consumption, and cost, critical for practical embedded deployments.',
      'Resource-constrained optimization leads to lower performing embedded systems.',
      'It is irrelevant for modern, powerful microcontrollers.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'embedded-3',
    question: 'Discuss \'Real-Time Data Processing\' techniques (e.g., stream processing, real-time analytics) for embedded systems and IoT.',
    options: [
      'Real-time data processing always requires all data to be sent to the cloud.',
      'Techniques enable immediate processing and analysis of continuous data streams from embedded devices/IoT, crucial for applications like autonomous driving, industrial control, and smart health monitoring, often using edge computing.',
      'Real-time data processing introduces significant latency to embedded systems.',
      'It is only suitable for historical data analysis.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'embedded-systems'
  },
  {
    id: 'qa-1',
    question: 'What is the primary goal of Quality Assurance (QA) in software development?',
    options: [
      'To fix all bugs found during development.',
      'To ensure that software meets quality standards and customer requirements, preventing defects.',
      'To write programming code for new features.',
      'To manage project timelines and budgets.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'Which of the following best describes \'Quality Control\' (QC)?',
    options: [
      'A set of processes to prevent defects.',
      'A reactive process of identifying and correcting defects in the finished product.',
      'A management philosophy for improving overall quality.',
      'The initial phase of software development.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'What is a \'bug\' or \'defect\' in software?',
    options: [
      'A new software feature.',
      'An error, flaw, or fault in a computer program or system that causes it to produce an incorrect or unexpected result.',
      'A type of software testing tool.',
      'A physical hardware component.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'What is \'Manual Testing\'?',
    options: [
      'Testing software using automated scripts.',
      'Testing software by physically interacting with it as an end-user would, without automation tools.',
      'Testing only the performance of the software.',
      'Testing only the hardware components.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'Which type of testing verifies that individual units or components of code function correctly in isolation?',
    options: [
      'System Testing',
      'Integration Testing',
      'Unit Testing',
      'User Acceptance Testing'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'What is \'Black-Box Testing\'?',
    options: [
      'Testing based on knowledge of the internal code structure.',
      'Testing software functionality without knowledge of its internal code or implementation details.',
      'Testing software in a dark environment.',
      'Testing only the graphical user interface components.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'What is \'White-Box Testing\'?',
    options: [
      'Testing software functionality without knowledge of its internal code.',
      'Testing based on knowledge of the internal structure, design, and implementation of the software (e.g., code paths, loops).',
      'Testing software in a brightly lit environment.',
      'Testing only the external user interface.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'Which document provides a set of conditions, steps, and expected results to verify a specific feature?',
    options: [
      'Test Plan',
      'Bug Report',
      'Test Case',
      'User Manual'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'What is \'Regression Testing\'?',
    options: [
      'Testing new features only.',
      'Testing existing software functionalities after changes or new features have been added, to ensure that new code has not adversely affected existing functionalities.',
      'Testing for performance issues only.',
      'Testing software for the first time.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'What is \'User Acceptance Testing (UAT)\'?',
    options: [
      'Testing done by developers before release.',
      'Testing performed by end-users or clients to confirm that the system meets their requirements and works in real-world scenarios.',
      'Testing individual code units in isolation.',
      'Testing for security vulnerabilities exclusively.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'Which phase in the Bug Life Cycle indicates that a bug has been found and documented?',
    options: [
      'Fixed',
      'Closed',
      'New',
      'Assigned'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'What is the purpose of a \'Test Plan\'?',
    options: [
      'To provide a detailed bug report.',
      'To outline the scope, objectives, resources, schedule, and approach for a specific testing effort.',
      'To define coding standards for developers.',
      'To describe user requirements for a software system.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'Which type of testing ensures the software is compatible across different browsers, operating systems, or devices?',
    options: [
      'Usability Testing',
      'Performance Testing',
      'Compatibility Testing',
      'Security Testing'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'What is a \'Test Environment\'?',
    options: [
      'A physical room for testers.',
      'A setup of hardware, software, and network configurations where testing is performed to simulate production conditions.',
      'A software testing tool.',
      'A document outlining test cases.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-1',
    question: 'What is \'Usability Testing\'?',
    options: [
      'Testing only the functional aspects of software.',
      'Testing a product with real users to determine if it is easy to use, intuitive, and effective in meeting user goals.',
      'Testing for security vulnerabilities.',
      'Testing the performance of the software under load.'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'quality-assurance'
  },

  {
    id: 'qa-2',
    question: 'Explain the difference between \'Verification\' and \'Validation\' in QA.',
    options: [
      'Verification is checking the right product; Validation is building the product right.',
      'Verification checks if the product is built right (e.g., meeting specifications); Validation checks if the right product is built (e.g., meeting user needs and requirements).',
      'Verification is only for manual testing; Validation is for automated testing.',
      'They are interchangeable terms with no practical difference.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'Describe \'Test Automation Frameworks\' (e.g., Selenium, Cypress, Playwright) and their benefits.',
    options: [
      'Test automation frameworks are physical testing devices.',
      'Test automation frameworks are collections of rules, guidelines, and tools for designing and generating automated test cases, improving test efficiency, speed, and consistency.',
      'Automation frameworks increase manual effort in testing.',
      'They are only for very small software projects.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'What is \'Performance Testing\' and its key metrics (e.g., Response Time, Throughput, Latency)?',
    options: [
      'Performance testing only checks software functionality.',
      'Performance testing evaluates how a software system performs under a particular workload. Key metrics include response time (how quickly system responds), throughput (transactions per second), and latency (delay in data transfer).',
      'Performance testing is only for security vulnerabilities.',
      'It increases the system\'s resource consumption permanently.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'Explain \'API Testing\' and why it is important for modern applications.',
    options: [
      'API testing only checks the graphical user interface.',
      'API (Application Programming Interface) testing involves testing the interfaces between software components or systems, without a GUI, to ensure functionality, reliability, performance, and security at the integration layer.',
      'API testing is irrelevant for microservices architecture.',
      'It is only performed manually by developers.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'What is \'Test Data Management\' and its significance?',
    options: [
      'Test data management is only about creating random data.',
      'Test data management involves planning, designing, creating, and maintaining test data for software testing, ensuring realistic, relevant, and secure data is available for accurate testing scenarios.',
      'Test data management increases the risk of data breaches.',
      'It is only for managing production data.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'Describe \'Exploratory Testing\' and when it is most effective.',
    options: [
      'Exploratory testing requires predefined test cases and scripts.',
      'Exploratory testing is a simultaneous learning, test design, and test execution approach where testers actively explore the software without predefined scripts, often effective for finding unexpected bugs or complex scenarios.',
      'Exploratory testing is only for confirming known issues.',
      'It is a method of automated testing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'What are \'Test Management Tools\' (e.g., Jira, TestRail, qTest) and their role in QA?',
    options: [
      'Test management tools are only for writing code.',
      'Test management tools are software applications used to manage and organize testing activities, including test cases, test execution, defect tracking, and reporting, streamlining the QA process.',
      'Test management tools increase manual effort in QA.',
      'They are only for managing project budgets.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'Explain \'Load Testing\' and \'Stress Testing\' as types of performance testing.',
    options: [
      'Load testing and stress testing are identical.',
      'Load testing evaluates system behavior under expected normal or peak user loads; Stress testing pushes the system beyond its normal operational limits to determine its robustness and stability under extreme conditions.',
      'Load testing is only for network infrastructure.',
      'Stress testing is only for individual components.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'What is \'Static Testing\' and its advantages over dynamic testing?',
    options: [
      'Static testing involves executing the code to find defects.',
      'Static testing analyzes software artifacts (e.g., code, documentation, requirements) without actually executing the code, allowing for early defect detection (e.g., through code reviews, static analysis tools) and reduced cost.',
      'Static testing can find all types of bugs.',
      'It is a less efficient method for bug detection.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'Describe \'Test Coverage\' and its significance.',
    options: [
      'Test coverage refers to the geographical area where testing is performed.',
      'Test coverage is a metric that measures the amount of code executed by a set of tests, indicating the thoroughness of testing and helping identify untested areas, crucial for assessing test suite quality.',
      'Test coverage is only for automated tests.',
      'It is irrelevant to software quality.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'What is \'Continuous Testing\' in DevOps?',
    options: [
      'Continuous testing is only performed at the end of the development cycle.',
      'Continuous testing is the process of executing automated tests as part of the software delivery pipeline to obtain immediate feedback on the business risks associated with a software release candidate.',
      'Continuous testing increases the time to market for software.',
      'It replaces the need for any manual testing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'Explain \'Boundary Value Analysis (BVA)\' and \'Equivalence Partitioning (EP)\' in test case design.',
    options: [
      'BVA and EP are only used for security testing.',
      'BVA tests values at the boundaries of input ranges to find errors; EP divides input data into partitions where all values are expected to behave similarly, selecting one representative from each for testing.',
      'These techniques increase the number of unnecessary test cases.',
      'They are only applicable to non-functional testing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'What is a \'Defect Triage\' meeting in the bug life cycle?',
    options: [
      'A meeting to assign blame for bugs.',
      'A meeting where the project team (developers, testers, product owners) reviews newly reported bugs to prioritize them, assign severity, and determine the next steps for resolution.',
      'A meeting to celebrate bug-free software.',
      'A meeting to discuss new software features.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'Describe \'End-to-End Testing\' and its role in validating user flows.',
    options: [
      'End-to-end testing only checks individual system components.',
      'End-to-end testing simulates real user scenarios, verifying that an entire software system, including all integrated modules and external interfaces, functions correctly from start to finish to validate complete user flows.',
      'End-to-end testing is always a manual process.',
      'It is irrelevant for complex, multi-system applications.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-2',
    question: 'What are \'Test Harness\' and \'Test Stub/Driver\' in component testing?',
    options: [
      'Test harness is a physical device; test stub/driver is a software program.',
      'A test harness is a collection of software and test data configured to test a program unit by running it under varying conditions. Stubs simulate called modules; drivers simulate calling modules to isolate testing.',
      'They are only used for system-level testing.',
      'They increase the complexity of unit testing.'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'quality-assurance'
  },

  {
    id: 'qa-3',
    question: 'Discuss \'Test-Driven Development (TDD)\' and \'Behavior-Driven Development (BDD)\' methodologies.',
    options: [
      'TDD and BDD are identical approaches to testing.',
      'TDD focuses on writing automated unit tests *before* writing code; BDD emphasizes defining software behavior from a user\'s perspective in a shared, readable language *before* development, often using Gherkin syntax.',
      'TDD is for functional testing; BDD is for non-functional testing.',
      'Neither TDD nor BDD involves automated testing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'Explain \'Mutation Testing\' and its purpose in evaluating test suite effectiveness.',
    options: [
      'Mutation testing is a type of performance testing.',
      'Mutation testing intentionally introduces small changes (mutations) into the source code to see if existing test suites can detect these changes (kill the mutants), measuring the effectiveness and thoroughness of the test suite itself.',
      'Mutation testing is only for manual testing.',
      'It increases the number of false positives in test results.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'Describe \'AI/ML\' applications in advanced software testing (e.g., predictive analytics, test case generation, self-healing tests).',
    options: [
      'AI/ML in testing replaces human testers entirely.',
      'AI/ML can analyze historical data to predict defect-prone areas, automatically generate test cases, optimize test suite execution, and enable self-healing test scripts, enhancing efficiency and accuracy in complex systems.',
      'AI/ML introduces more errors into the testing process.',
      'It is only used for very basic, repetitive testing tasks.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'What are \'Chaos Engineering\' and \'Fault Injection\' in the context of software testing and system resilience?',
    options: [
      'Chaos engineering aims to prevent any system failures by design.',
      'Chaos engineering is the practice of intentionally introducing failures into a system (fault injection) to test its resilience and identify weaknesses before they cause real-world outages, beyond traditional testing methods.',
      'Chaos engineering is only for physical hardware testing.',
      'It makes systems less stable and reliable.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'Explain \'Performance Testing Architectures\' (e.g., distributed load generation, cloud-based testing).',
    options: [
      'Performance testing architectures are only for single-user scenarios.',
      'These architectures involve simulating large user loads from multiple geographic locations using distributed load generators or cloud services, to accurately assess system performance, scalability, and response times under realistic conditions.',
      'Performance testing architectures reduce the accuracy of test results.',
      'It is irrelevant for high-volume applications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'Discuss \'Security Testing Methodologies\' (e.g., Penetration Testing, Vulnerability Scanning, Static/Dynamic Analysis).',
    options: [
      'Security testing only involves checking for strong passwords.',
      'Methodologies include penetration testing (simulated attacks), vulnerability scanning (automated checks for known flaws), and static (SAST) or dynamic (DAST) application security testing to identify and remediate security vulnerabilities.',
      'Security testing always guarantees a completely secure system.',
      'It is only performed at the very end of the SDLC.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'What is \'Test Observability\' and its importance in modern DevOps pipelines?',
    options: [
      'Test observability is only about viewing test execution logs.',
      'Test observability involves collecting comprehensive data (metrics, logs, traces) from testing processes to gain deep insights into test failures, performance bottlenecks, and overall test suite health, enabling faster debugging and continuous improvement.',
      'Test observability increases the manual effort in analyzing test results.',
      'It is irrelevant to the overall quality of software releases.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'Describe \'Test Data Virtualization\' and its benefits in complex testing scenarios.',
    options: [
      'Test data virtualization eliminates the need for any test data.',
      'Test data virtualization creates virtual, on-demand test data environments that mimic production data, enabling testers to access realistic, secure, and compliant data without copying large production databases, improving test efficiency.',
      'Test data virtualization increases the risk of data exposure.',
      'It is only suitable for very small test datasets.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'Explain \'Model-Based Testing\' and its advantages.',
    options: [
      'Model-based testing requires manually creating all test cases.',
      'Model-based testing generates test cases automatically from abstract models of software behavior, allowing for more comprehensive test coverage and efficient test generation, especially for complex systems.',
      'Model-based testing increases the manual effort in test design.',
      'It is only suitable for simple, linear software flows.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'How do \'Service Virtualization\' and \'Mocking\' aid in integration testing of distributed systems?',
    options: [
      'Service virtualization and mocking require all external services to be real.',
      'Service virtualization creates virtual versions of unavailable or costly external services; Mocking simulates the behavior of specific dependencies. Both enable isolated, repeatable integration testing in distributed systems without relying on live services.',
      'They increase dependencies on external systems.',
      'They are only used for unit testing, not integration testing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'What are \'Test Oracles\' in automated testing, and why are they crucial?',
    options: [
      'Test oracles are automated tools that write test cases.',
      'Test oracles are mechanisms (e.g., human, existing system, independent logic) that determine whether the observed behavior of a system under test is correct for a given set of inputs, crucial for automated test verification.',
      'Test oracles always guarantee bug-free software.',
      'They are only used for manual testing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'Describe \'Shift-Right Testing\' (or Production Testing) in a mature DevOps context.',
    options: [
      'Shift-right testing means delaying all testing until after deployment.',
      'Shift-right testing involves performing testing activities in production or near-production environments (e.g., A/B testing, Canary releases, monitoring) to gain real-world insights, verify performance under load, and detect issues before they impact all users.',
      'Shift-right testing increases the risk of production outages.',
      'It replaces the need for any pre-production testing.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'What is \'Accessibility Testing\' for compliance (e.g., WCAG) and its methodologies?',
    options: [
      'Accessibility testing only involves checking for visual impairments.',
      'Accessibility testing ensures software is usable by people with disabilities, often guided by WCAG (Web Content Accessibility Guidelines). Methodologies include automated tools, manual checks, and usability testing with diverse users.',
      'Accessibility testing is only a legal requirement, not a quality concern.',
      'It increases development time without improving user experience.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'Explain \'Static Application Security Testing (SAST)\' vs. \'Dynamic Application Security Testing (DAST)\'.',
    options: [
      'SAST and DAST are identical security testing methods.',
      'SAST analyzes source code without execution to find vulnerabilities; DAST analyzes running applications (from outside-in) to find vulnerabilities that occur during execution, both for application security testing.',
      'SAST is only for compiled code; DAST is for uncompiled code.',
      'Neither is effective for modern web applications.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'qa-3',
    question: 'Discuss \'Test Data Generation\' techniques for large and complex datasets.',
    options: [
      'Test data generation always involves manually creating all data.',
      'Techniques include synthetic data generation, data anonymization/masking of production data, and leveraging AI/ML to create realistic and diverse datasets, crucial for testing complex scenarios without using sensitive live data.',
      'Test data generation is unnecessary for large applications.',
      'It increases the risk of data exposure in testing environments.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'quality-assurance'
  },
  {
    id: 'health-it-1',
    question: 'What does EHR stand for in healthcare IT?',
    options: [
      'Electronic Health Record',
      'Emergency Hospital Response',
      'Efficient Healthcare Resource',
      'Essential Health Regulation'
    ],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'Which of the following is a primary benefit of using EHRs?',
    options: [
      'Increased paper consumption',
      'Improved patient care coordination',
      'Slower access to patient information',
      'Higher administrative costs'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'What is the main purpose of HIPAA?',
    options: [
      'To regulate hospital building codes',
      'To protect patient privacy and health information',
      'To standardize medical equipment',
      'To manage healthcare billing cycles'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'Which term describes the electronic exchange of health information?',
    options: [
      'Paper charting',
      'Health Information Exchange (HIE)',
      'Manual record keeping',
      'Physical examination'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'What is a common use of telehealth technology?',
    options: [
      'In-person surgical procedures',
      'Remote patient consultations',
      'Physical therapy sessions in a gym',
      'On-site diagnostic imaging'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'What does PHI stand for in the context of HIPAA?',
    options: [
      'Public Health Initiative',
      'Personal Health Identifier',
      'Protected Health Information',
      'Patient Health Integration'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'Which of the following is an example of an input device used in healthcare IT?',
    options: [
      'Printer',
      'Monitor',
      'Bar code scanner',
      'Speaker'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'What is the purpose of a Picture Archiving and Communication System (PACS)?',
    options: [
      'To manage hospital finances',
      'To store and retrieve medical images',
      'To schedule patient appointments',
      'To track medical supplies'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'Which term refers to the unique identification of a patient within a healthcare system?',
    options: [
      'Guest ID',
      'Patient ID',
      'Employee ID',
      'Vendor ID'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'What is a common security measure in healthcare IT to protect data?',
    options: [
      'Sharing passwords freely',
      'Using strong passwords and encryption',
      'Storing data on public servers',
      'Leaving computers unlocked'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'Which of the following is a benefit of electronic prescribing?',
    options: [
      'Increased handwriting errors',
      'Reduced medication errors',
      'Slower prescription refills',
      'Limited drug interaction checks'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'What is the primary role of a help desk in a healthcare IT environment?',
    options: [
      'Performing surgical operations',
      'Providing technical support to users',
      'Dispensing medications',
      'Cleaning patient rooms'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'Which term describes the process of backing up electronic health records?',
    options: [
      'Deletion',
      'Archiving',
      'Duplication',
      'Restoration'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'What does interoperability mean in the context of healthcare IT?',
    options: [
      'Systems that cannot communicate',
      'Ability of different IT systems to exchange and use data',
      'Only one system is used throughout a hospital',
      'Manual data entry only'
    ],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-1',
    question: 'Which department is typically responsible for managing IT infrastructure in a hospital?',
    options: [
      'Housekeeping',
      'Human Resources',
      'Information Technology (IT) Department',
      'Food Services'
    ],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'healthcare-it'
  },

  {
    id: 'health-it-2',
    question: 'Which interoperability standard is commonly used for exchanging clinical data, such as lab results and patient demographics?',
    options: [
      'HTML',
      'HL7 (Health Level Seven)',
      'TCP/IP',
      'USB'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'What is a major challenge in achieving true interoperability across diverse healthcare systems?',
    options: [
      'Lack of internet access',
      'Varying data formats and semantic differences',
      'Too much standardization',
      'Insufficient patient data'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'Explain the concept of \'meaningful use\' in the context of EHRs.',
    options: [
      'Using EHRs for only basic record keeping',
      'The use of certified EHR technology to improve quality, safety, and efficiency',
      'Paper-based record keeping for critical patient data',
      'Limiting access to patient information'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'What is the primary function of a Clinical Decision Support System (CDSS)?',
    options: [
      'To automate all medical decisions without human input',
      'To provide clinicians with evidence-based recommendations and alerts',
      'To replace human doctors with AI',
      'To manage hospital bed assignments'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'Which cybersecurity threat specifically targets healthcare organizations due to the sensitive nature of their data?',
    options: [
      'Phishing',
      'Denial-of-Service (DoS) attacks',
      'Ransomware',
      'Spyware'
    ],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'What role does a Master Patient Index (MPI) play in a healthcare system?',
    options: [
      'It tracks employee attendance',
      'It creates a unique, enterprise-wide record for each patient',
      'It manages medical equipment inventory',
      'It stores financial transaction data'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'Describe the concept of \'cloud computing\' in healthcare.',
    options: [
      'Storing data on local hard drives only',
      'Using paper charts instead of electronic records',
      'Delivering computing services—servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (\'the cloud\')',
      'Physical storage of patient records in a secure vault'
    ],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'What is the significance of CPOE (Computerized Provider Order Entry) in improving patient safety?',
    options: [
      'It allows nurses to manually transcribe orders',
      'It eliminates transcription errors and provides decision support at the point of care',
      'It only works for medication orders',
      'It slows down the ordering process'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'What is the purpose of an audit trail in an EHR system?',
    options: [
      'To delete old patient records',
      'To track every access, modification, and deletion of patient data',
      'To create patient billing statements',
      'To schedule patient appointments'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'Which of the following best describes the role of a data warehouse in healthcare analytics?',
    options: [
      'A place to store physical medical records',
      'A centralized repository of integrated data from multiple sources for reporting and analysis',
      'A system for processing real-time patient data',
      'A network for sharing patient information directly with other hospitals'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'What is the primary benefit of using a patient portal?',
    options: [
      'It replaces all in-person doctor visits',
      'It allows patients to access their health information, schedule appointments, and communicate with providers',
      'It is only for doctors to view patient data',
      'It is a social media platform for patients'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'How does telehealth contribute to reducing healthcare costs?',
    options: [
      'By increasing hospital admissions',
      'By eliminating the need for any medical equipment',
      'By reducing travel time, hospital visits, and improving chronic disease management',
      'By making all services free'
    ],
    correctAnswer: 2,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'What is the role of a firewall in healthcare IT security?',
    options: [
      'To heat patient rooms',
      'To prevent unauthorized access to a network',
      'To store patient images',
      'To print medical reports'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'Which technology is essential for secure communication between a patient\'s wearable device and an EHR system?',
    options: [
      'Paper notes',
      'Bluetooth or Wi-Fi with strong encryption',
      'Carrier pigeons',
      'Public email'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-2',
    question: 'What is the primary goal of the Fast Healthcare Interoperability Resources (FHIR) standard?',
    options: [
      'To replace all existing healthcare standards',
      'To create a more easily implementable and flexible standard for exchanging healthcare information',
      'To only handle billing information',
      'To store data in a non-standardized format'
    ],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'healthcare-it'
  },

  {
    id: 'health-it-3',
    question: 'Discuss the ethical implications of using artificial intelligence (AI) in clinical decision-making.',
    options: [
      'AI will always be perfectly unbiased and error-free.',
      'Concerns include algorithmic bias, accountability for errors, patient consent, and data privacy.',
      'AI in healthcare has no ethical considerations.',
      'Ethical implications only apply to human doctors, not AI.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'Explain the concept of \'blockchain\' and its potential applications in healthcare.',
    options: [
      'A traditional centralized database for patient records.',
      'A distributed, immutable ledger that could enhance data security, interoperability, and supply chain management.',
      'A new type of medical imaging technology.',
      'A method for printing paper medical records faster.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'How does \'precision medicine\' leverage health IT and data analytics?',
    options: [
      'It focuses solely on treating common diseases without individual patient data.',
      'It uses genetic, environmental, and lifestyle data to tailor treatments for individuals.',
      'It is a marketing term with no real scientific basis.',
      'It relies on traditional trial-and-error methods for treatment.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'What are the key considerations for implementing a robust disaster recovery plan for a healthcare IT system?',
    options: [
      'Assuming data will never be lost.',
      'Regular backups, off-site storage, tested recovery procedures, and redundancy for critical systems.',
      'Only backing up data once a year.',
      'Relying solely on paper records in case of a disaster.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'Discuss the challenges and opportunities of integrating genomic data into electronic health records.',
    options: [
      'Genomic data is irrelevant to patient care.',
      'Challenges include data volume, privacy, interpretation, and standardization; opportunities include personalized treatment and preventative care.',
      'Integration is simple with no challenges.',
      'Genomic data only applies to research, not clinical practice.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'Explain the concept of \'big data\' in healthcare and its impact.',
    options: [
      'Refers to large paper archives of patient records.',
      'Refers to extremely large and complex datasets that can reveal patterns, trends, and associations, especially relating to human behavior and interactions.',
      'Only applies to financial data in healthcare.',
      'Is a term for small, manageable datasets.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'How can machine learning be applied in population health management?',
    options: [
      'Only for individual patient diagnosis.',
      'To predict disease outbreaks, identify at-risk populations, and optimize resource allocation.',
      'It has no application in population health.',
      'To replace all human intervention in public health.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'What are the security implications of the Internet of Medical Things (IoMT)?',
    options: [
      'IoMT devices are inherently secure and require no special attention.',
      'Increased attack surface, data privacy concerns, and the need for robust device security and network segmentation.',
      'IoMT only transmits non-sensitive data.',
      'Security is the responsibility of the patient, not the healthcare provider.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'Discuss the regulatory landscape and compliance requirements (e.g., GDPR, HIPAA) for global health data exchange.',
    options: [
      'All countries have the exact same regulations.',
      'Varying regulations require careful adherence to data localization, privacy principles, and cross-border data transfer rules.',
      'There are no regulations for global health data exchange.',
      'Compliance is only necessary for paper records.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'What is the role of natural language processing (NLP) in extracting insights from unstructured clinical notes?',
    options: [
      'NLP converts all notes to spoken language.',
      'NLP can parse and understand free-text clinical notes to extract symptoms, diagnoses, treatments, and other relevant information.',
      'NLP is only for translating foreign languages.',
      'Unstructured notes cannot be analyzed by any technology.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'How can virtual reality (VR) and augmented reality (AR) be applied in medical education and surgical training?',
    options: [
      'VR/AR are only for entertainment purposes.',
      'They can provide immersive simulations for anatomy learning, surgical rehearsal, and skill development without risk to patients.',
      'VR/AR have no practical use in medicine.',
      'They replace the need for real-world medical practice.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'Describe the challenges associated with data governance in large healthcare organizations.',
    options: [
      'Data governance is only for small clinics.',
      'Ensuring data quality, consistency, security, and accessibility across diverse systems and departments, and defining clear data ownership.',
      'There are no challenges, data governance is always simple.',
      'Data governance only deals with financial data.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'What is the potential impact of quantum computing on healthcare, particularly in drug discovery and personalized medicine?',
    options: [
      'Quantum computing has no relevance to healthcare.',
      'It could revolutionize drug discovery by rapidly simulating molecular interactions and enable highly personalized treatment strategies.',
      'It will only be used for basic data storage.',
      'It will make traditional computers obsolete immediately.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'How can predictive analytics be used to improve hospital operations and resource management?',
    options: [
      'Predictive analytics only forecasts weather patterns.',
      'By forecasting patient admissions, identifying potential bottlenecks, optimizing staffing levels, and reducing wait times.',
      'It has no impact on hospital efficiency.',
      'It is only used for billing purposes.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  {
    id: 'health-it-3',
    question: 'Discuss the ethical considerations and potential biases in healthcare algorithms used for patient risk stratification and treatment recommendations.',
    options: [
      'Algorithms are always neutral and unbiased.',
      'Algorithms can perpetuate or amplify existing biases in training data, leading to inequities in care; ethical oversight and transparency are crucial.',
      'Bias is only an issue in traditional medical diagnosis.',
      'Ethical considerations are not relevant to software.'
    ],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'healthcare-it'
  },
  // Cloud Computing - Beginner (15)
  {
    id: 'cloud-1',
    question: 'What is cloud computing?',
    options: ['Internet browsing', 'Remote computing resources on-demand', 'Local storage', 'Computer networking'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'What is IaaS?',
    options: ['Infrastructure as a Service', 'Internet as a Service', 'Integration as a Service', 'Intelligence as a Service'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'Which is not a cloud service model?',
    options: ['SaaS', 'PaaS', 'IaaS', 'HaaS (Hardware as a Service)'],
    correctAnswer: 3,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'What is a cloud region?',
    options: ['Weather pattern', 'Geographic location of data centers', 'Internet zone', 'Network type'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'Which is a benefit of cloud computing?',
    options: ['Cost reduction', 'Increased hardware maintenance', 'Slower deployment', 'Limited scalability'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'What is cloud storage?',
    options: ['Local hard drive', 'Remote data storage service', 'USB drive', 'CD-ROM'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'What is a virtual machine in cloud computing?',
    options: ['Physical server', 'Emulated computer system', 'Network cable', 'Storage device'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'What is cloud backup?',
    options: ['Local backup', 'Remote data copying', 'Hardware replacement', 'System shutdown'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'What is public cloud?',
    options: ['Private network', 'Services available to anyone', 'Local server', 'Internal network'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'Which is a cloud deployment model?',
    options: ['Service model', 'Hardware model', 'Private cloud', 'Software model'],
    correctAnswer: 2,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'What is cloud migration?',
    options: ['Bird movement', 'Moving to cloud services', 'Data deletion', 'Hardware upgrade'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'What is meant by cloud-native?',
    options: ['Weather pattern', 'Built for cloud environment', 'Local software', 'Hardware specification'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'What is a cloud provider?',
    options: ['Company offering cloud services', 'Internet company', 'Hardware vendor', 'Software store'],
    correctAnswer: 0,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'What is cloud security?',
    options: ['Physical security', 'Protection of cloud resources', 'Network cable', 'Hardware lock'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-1',
    question: 'What is cloud scalability?',
    options: ['Weather measurement', 'Ability to increase/decrease resources', 'Physical size', 'Network speed'],
    correctAnswer: 1,
    difficulty: 'beginner',
    domain: 'cloud-computing'
  },

  // Cloud Computing - Intermediate (15)
  {
    id: 'cloud-2',
    question: 'What is cloud orchestration?',
    options: ['Music playing', 'Automated resource management', 'Manual configuration', 'Network setup'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is container orchestration?',
    options: ['Box storage', 'Managing containerized applications', 'Shipping management', 'Data backup'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is cloud federation?',
    options: ['Government structure', 'Integration of different cloud services', 'Political system', 'Banking system'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is cloud bursting?',
    options: ['Weather phenomenon', 'Overflow to public cloud', 'System crash', 'Data leak'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is a hybrid cloud?',
    options: ['Mixed weather', 'Public and private cloud combination', 'Car type', 'Network cable'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is cloud automation?',
    options: ['Weather control', 'Automatic resource management', 'Manual process', 'Hardware control'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is serverless computing?',
    options: ['No computers', 'Function-based cloud service', 'Network type', 'Hardware setup'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is cloud monitoring?',
    options: ['Weather watching', 'Tracking cloud resources', 'Network inspection', 'Hardware checking'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is cloud governance?',
    options: ['Political system', 'Cloud resource management policies', 'Weather control', 'Network rules'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What are cloud-native applications?',
    options: ['Weather apps', 'Apps designed for cloud', 'Mobile apps', 'Desktop software'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is cloud elasticity?',
    options: ['Rubber property', 'Dynamic resource scaling', 'Network flexibility', 'Hardware property'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is cloud compliance?',
    options: ['Weather rules', 'Meeting regulatory requirements', 'Hardware standards', 'Software rules'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is multi-cloud?',
    options: ['Multiple weather systems', 'Using multiple cloud providers', 'Network types', 'Hardware setups'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is cloud integration?',
    options: ['Weather mixing', 'Connecting cloud services', 'Hardware connection', 'Network merger'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-2',
    question: 'What is cloud migration strategy?',
    options: ['Bird movement plan', 'Plan to move to cloud', 'Weather pattern', 'Network plan'],
    correctAnswer: 1,
    difficulty: 'intermediate',
    domain: 'cloud-computing'
  },

  // Cloud Computing - Advanced (15)
  {
    id: 'cloud-3',
    question: 'What is cloud-native security?',
    options: ['Weather protection', 'Built-in cloud security measures', 'Physical security', 'Network protection'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is cloud service mesh?',
    options: ['Weather pattern', 'Microservice communication layer', 'Network type', 'Hardware connection'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is cloud-native observability?',
    options: ['Weather watching', 'Monitoring cloud-native apps', 'Network monitoring', 'Hardware inspection'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is GitOps?',
    options: ['Code storage', 'Infrastructure as code practice', 'Version control', 'Development method'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is cloud-native CI/CD?',
    options: ['Weather cycle', 'Continuous integration/deployment in cloud', 'Development process', 'Testing method'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is cloud-native storage?',
    options: ['Weather data', 'Container-optimized storage', 'Hard drive', 'Network storage'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is chaos engineering?',
    options: ['Random testing', 'Resilience testing', 'System breaking', 'Network testing'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is cloud-native networking?',
    options: ['Weather network', 'Container-optimized networking', 'Internet connection', 'Network cable'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is cloud-native security posture?',
    options: ['Standing position', 'Security strategy for cloud', 'Physical security', 'Network position'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is cloud-native identity?',
    options: ['Personal ID', 'Authentication for cloud services', 'Network ID', 'Hardware ID'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is service mesh federation?',
    options: ['Government system', 'Multi-cluster service mesh', 'Network connection', 'Hardware setup'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is cloud-native monitoring?',
    options: ['Weather watch', 'Container-level monitoring', 'Network watching', 'Hardware checking'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is cloud-native backup?',
    options: ['Weather backup', 'Container-aware backup', 'Network backup', 'Hardware backup'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is cloud-native DR?',
    options: ['Medical term', 'Disaster recovery for containers', 'Network recovery', 'Hardware recovery'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  },
  {
    id: 'cloud-3',
    question: 'What is cloud-native architecture?',
    options: ['Building design', 'Microservices-based design', 'Network design', 'Hardware layout'],
    correctAnswer: 1,
    difficulty: 'advanced',
    domain: 'cloud-computing'
  }

  // ...existing code...
];

export const getQuestionsByDomainAndDifficulty = (domain: string, difficulty: string): Question[] => {
  return questions.filter(q => q.domain === domain && q.difficulty === difficulty);
};
