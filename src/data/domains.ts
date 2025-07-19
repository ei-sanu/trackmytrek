export interface Domain {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  skills: string[];
  opportunities: string[];
  courseDuration: string;
  videoId: string;
  internshipPlatforms: {
    name: string;
    url: string;
  }[];
  roadmap: string[];
  resources: {
    name: string;
    url: string;
  }[];
}

export const domains: Domain[] = [
  {
    id: 'edge-computing',
    name: 'Edge Computing',
    description: 'Distributed computing that brings computation and data storage closer to the location where it is needed.',
    requirements: ['Computer Science/IT background', 'Basic networking knowledge', 'Programming skills'],
    skills: ['Cloud Computing', 'Network Architecture', 'IoT', 'Distributed Systems', 'Python/Java'],
    opportunities: ['Edge Solutions Architect', 'IoT Developer', 'Cloud Engineer', 'Network Engineer'],
    courseDuration: '6-8 months',
    videoId: 'cEOUeItHDdo',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/edge-computing-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-edge-computing-jobs.html' },
      { name: 'AWS Jobs', url: 'https://www.amazon.jobs/en/teams/aws-edge' },
      { name: 'Microsoft Careers', url: 'https://careers.microsoft.com/edge-computing' }
    ],
    roadmap: ['Learn networking basics', 'Master cloud platforms', 'Understand IoT fundamentals', 'Practice with edge frameworks'],
    resources: [
      { name: 'AWS IoT Core', url: 'https://aws.amazon.com/iot-core/' },
      { name: 'Azure IoT Edge', url: 'https://azure.microsoft.com/en-us/services/iot-edge/' },
      { name: 'Google Cloud IoT', url: 'https://cloud.google.com/solutions/iot' },
      { name: 'Coursera Edge Computing courses', url: 'https://www.coursera.org/courses?query=edge%20computing' }
    ]
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    description: 'The simulation of human intelligence processes by machines and computer systems.',
    requirements: ['Mathematics/Statistics background', 'Programming knowledge', 'Analytical thinking'],
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch', 'Data Analysis'],
    opportunities: ['AI Engineer', 'Machine Learning Engineer', 'Data Scientist', 'Research Scientist'],
    courseDuration: '8-12 months',
    videoId: 'ad79nYk2keg',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/artificial-intelligence-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-artificial-intelligence-jobs.html' },
      { name: 'Google Careers', url: 'https://careers.google.com/jobs/results/?q=artificial%20intelligence' },
      { name: 'OpenAI', url: 'https://openai.com/careers' }
    ],
    roadmap: ['Learn Python programming', 'Master statistics and linear algebra', 'Study ML algorithms', 'Build AI projects'],
    resources: [
      { name: 'Coursera ML Course', url: 'https://www.coursera.org/learn/machine-learning' },
      { name: 'Fast.ai', url: 'https://www.fast.ai/' },
      { name: 'Papers With Code', url: 'https://paperswithcode.com/' },
      { name: 'Kaggle', url: 'https://www.kaggle.com/' }
    ]
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    description: 'A subset of AI that provides systems the ability to learn and improve from experience.',
    requirements: ['Mathematics background', 'Programming skills', 'Statistical knowledge'],
    skills: ['Python', 'R', 'Statistics', 'Data Mining', 'Neural Networks', 'Algorithms'],
    opportunities: ['ML Engineer', 'Data Scientist', 'Research Analyst', 'AI Consultant'],
    courseDuration: '6-10 months',
    videoId: 'ukzFI9rgwfU',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/machine-learning-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-machine-learning-jobs.html' },
      { name: 'Kaggle Jobs', url: 'https://www.kaggle.com/jobs' },
      { name: 'AngelList', url: 'https://angel.co/jobs' }
    ],
    roadmap: ['Learn Python and statistics', 'Master ML algorithms', 'Practice with real datasets', 'Build ML projects'],
    resources: [
      { name: 'Scikit-learn', url: 'https://scikit-learn.org/stable/' },
      { name: 'TensorFlow', url: 'https://www.tensorflow.org/' },
      { name: 'PyTorch', url: 'https://pytorch.org/' },
      { name: 'Coursera ML Specialization', url: 'https://www.coursera.org/specializations/machine-learning-introduction' }
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Extracting knowledge and insights from structured and unstructured data.',
    requirements: ['Statistics knowledge', 'Programming skills', 'Domain expertise'],
    skills: ['Python', 'R', 'SQL', 'Statistics', 'Data Visualization', 'Machine Learning'],
    opportunities: ['Data Scientist', 'Data Analyst', 'Business Intelligence Analyst', 'Research Scientist'],
    courseDuration: '8-12 months',
    videoId: 'X3paOmcrTjQ',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/data-science-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-data-science-jobs.html' },
      { name: 'Glassdoor', url: 'https://www.glassdoor.com/Job/data-science-jobs-SRCH_KO0,14.htm' },
      { name: 'DataJobs', url: 'https://datajobs.com/' }
    ],
    roadmap: ['Learn programming and statistics', 'Master data manipulation', 'Study ML techniques', 'Build portfolio projects'],
    resources: [
      { name: 'Pandas', url: 'https://pandas.pydata.org/' },
      { name: 'NumPy', url: 'https://numpy.org/' },
      { name: 'Matplotlib', url: 'https://matplotlib.org/' },
      { name: 'Jupyter Notebooks', url: 'https://jupyter.org/' }
    ]
  },
  {
    id: 'web-development',
    name: 'Web Development',
    description: 'Creating and maintaining websites and web applications.',
    requirements: ['Basic computer knowledge', 'Logical thinking', 'Problem-solving skills'],
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Databases'],
    opportunities: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Web Designer'],
    courseDuration: '4-6 months',
    videoId: 'VfGW0Qiy2I0',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/web-development-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-web-development-jobs.html' },
      { name: 'Stack Overflow Jobs', url: 'https://stackoverflow.com/jobs' },
      { name: 'AngelList', url: 'https://angel.co/jobs' }
    ],
    roadmap: ['Learn HTML/CSS', 'Master JavaScript', 'Learn a framework', 'Build real projects'],
    resources: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web' },
      { name: 'freeCodeCamp', url: 'https://www.freecodecamp.org/' },
      { name: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
      { name: 'Node.js Docs', url: 'https://nodejs.dev/learn' }
    ]
  },
  {
    id: 'mobile-development',
    name: 'Mobile Development',
    description: 'Creating applications for mobile devices like smartphones and tablets.',
    requirements: ['Programming knowledge', 'UI/UX understanding', 'Platform-specific knowledge'],
    skills: ['Swift/Kotlin', 'React Native', 'Flutter', 'Mobile UI/UX', 'API Integration'],
    opportunities: ['iOS Developer', 'Android Developer', 'Mobile App Developer', 'Cross-platform Developer'],
    courseDuration: '6-8 months',
    videoId: 'fq4N0hgOWzU',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/mobile-development-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-mobile-development-jobs.html' },
      { name: 'AngelList', url: 'https://angel.co/jobs' },
      { name: 'Upwork', url: 'https://www.upwork.com/freelance-jobs/mobile-development/' }
    ],
    roadmap: ['Choose platform (iOS/Android)', 'Learn programming language', 'Master mobile frameworks', 'Build and publish apps'],
    resources: [
      { name: 'Apple Developer', url: 'https://developer.apple.com/programs/' },
      { name: 'Android Developer', url: 'https://developer.android.com/docs' },
      { name: 'React Native Docs', url: 'https://reactnative.dev/docs/getting-started' },
      { name: 'Flutter Docs', url: 'https://flutter.dev/docs' }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Protecting digital systems, networks, and data from cyber threats.',
    requirements: ['Networking knowledge', 'Security awareness', 'Analytical skills'],
    skills: ['Network Security', 'Penetration Testing', 'Risk Assessment', 'Incident Response', 'Cryptography'],
    opportunities: ['Security Analyst', 'Penetration Tester', 'Security Engineer', 'CISO'],
    courseDuration: '8-12 months',
    videoId: 'inWWhr5tnEA',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/cybersecurity-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-cybersecurity-jobs.html' },
      { name: 'CyberSeek', url: 'https://www.cyberseek.org/' },
      { name: 'InfoSec-Jobs', url: 'https://infosec-jobs.com/' }
    ],
    roadmap: ['Learn networking basics', 'Study security fundamentals', 'Practice ethical hacking', 'Get certifications'],
    resources: [
      { name: 'CompTIA Security+', url: 'https://www.comptia.org/certifications/security' },
      { name: 'CEH', url: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/' },
      { name: 'CISSP', url: 'https://www.isc2.org/certifications/cissp' },
      { name: 'Cybrary', url: 'https://www.cybrary.it/' }
    ]
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    description: 'Delivering computing services over the internet including storage, databases, and software.',
    requirements: ['Networking knowledge', 'System administration', 'Programming skills'],
    skills: ['AWS', 'Azure', 'GCP', 'DevOps', 'Containerization', 'Serverless'],
    opportunities: ['Cloud Architect', 'DevOps Engineer', 'Cloud Engineer', 'Site Reliability Engineer'],
    courseDuration: '6-10 months',
    videoId: 'M988_fsOSWo',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/cloud-computing-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-cloud-computing-jobs.html' },
      { name: 'AWS Jobs', url: 'https://www.amazon.jobs/en/teams/aws' },
      { name: 'Microsoft Careers', url: 'https://careers.microsoft.com/cloud-computing' }
    ],
    roadmap: ['Learn cloud fundamentals', 'Master a cloud platform', 'Study DevOps practices', 'Get cloud certifications'],
    resources: [
      { name: 'AWS Training', url: 'https://aws.amazon.com/training/' },
      { name: 'Azure Learning', url: 'https://learn.microsoft.com/en-us/training/azure/' },
      { name: 'Google Cloud Training', url: 'https://cloud.google.com/training' },
      { name: 'Docker', url: 'https://www.docker.com/learn' }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps',
    description: 'Combining software development and IT operations to shorten development lifecycle.',
    requirements: ['Programming knowledge', 'System administration', 'Automation mindset'],
    skills: ['CI/CD', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'Infrastructure as Code'],
    opportunities: ['DevOps Engineer', 'Site Reliability Engineer', 'Build Engineer', 'Platform Engineer'],
    courseDuration: '6-8 months',
    videoId: 'Xrgk023l4lI',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/devops-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-devops-jobs.html' },
      { name: 'Stack Overflow Jobs', url: 'https://stackoverflow.com/jobs' },
      { name: 'AngelList', url: 'https://angel.co/jobs' }
    ],
    roadmap: ['Learn version control', 'Master CI/CD tools', 'Study containerization', 'Practice infrastructure automation'],
    resources: [
      { name: 'Jenkins', url: 'https://www.jenkins.io/doc/' },
      { name: 'Docker Hub', url: 'https://hub.docker.com/' },
      { name: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/home/' },
      { name: 'Terraform', url: 'https://www.terraform.io/docs/index.html' }
    ]
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    description: 'Distributed ledger technology that maintains a continuously growing list of records.',
    requirements: ['Programming knowledge', 'Cryptography understanding', 'Distributed systems'],
    skills: ['Solidity', 'Web3', 'Smart Contracts', 'Ethereum', 'Cryptography', 'DeFi'],
    opportunities: ['Blockchain Developer', 'Smart Contract Developer', 'Crypto Analyst', 'DeFi Engineer'],
    courseDuration: '8-12 months',
    videoId: 'SSo_EIwHSd4',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/blockchain-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-blockchain-jobs.html' },
      { name: 'CryptoJobs', url: 'https://cryptojobslist.com/' },
      { name: 'AngelList', url: 'https://angel.co/jobs' }
    ],
    roadmap: ['Learn blockchain basics', 'Master Solidity', 'Study smart contracts', 'Build DApps'],
    resources: [
      { name: 'Ethereum Docs', url: 'https://docs.ethereum.org/en/latest/' },
      { name: 'Solidity Docs', url: 'https://docs.soliditylang.org/en/v0.8.17/' },
      { name: 'OpenZeppelin', url: 'https://docs.openzeppelin.com/' },
      { name: 'Truffle Suite', url: 'https://www.trufflesuite.com/docs/truffle/overview' }
    ]
  },
  {
    id: 'iot',
    name: 'Internet of Things (IoT)',
    description: 'Network of physical devices embedded with electronics, software, and sensors.',
    requirements: ['Electronics knowledge', 'Programming skills', 'Networking understanding'],
    skills: ['Arduino', 'Raspberry Pi', 'C/C++', 'Python', 'Sensors', 'Wireless Communication'],
    opportunities: ['IoT Developer', 'Embedded Systems Engineer', 'IoT Architect', 'Hardware Engineer'],
    courseDuration: '6-10 months',
    videoId: 'LlhmzVL5bm8',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/iot-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-iot-jobs.html' },
      { name: 'IoT Jobs', url: 'https://www.iotjobs.com/' },
      { name: 'AngelList', url: 'https://angel.co/jobs' }
    ],
    roadmap: ['Learn electronics basics', 'Master programming', 'Study sensor technologies', 'Build IoT projects'],
    resources: [
      { name: 'Arduino IDE', url: 'https://www.arduino.cc/en/software' },
      { name: 'Raspberry Pi Foundation', url: 'https://www.raspberrypi.org/documentation/' },
      { name: 'ESP32', url: 'https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html' },
      { name: 'ThingSpeak', url: 'https://thingspeak.com/docs' }
    ]
  },
  {
    id: 'robotics',
    name: 'Robotics',
    description: 'Design, construction, and operation of robots for various applications.',
    requirements: ['Engineering background', 'Programming skills', 'Mathematics knowledge'],
    skills: ['ROS', 'Python', 'C++', 'Computer Vision', 'Control Systems', 'Mechanical Design'],
    opportunities: ['Robotics Engineer', 'Automation Engineer', 'Research Scientist', 'Control Systems Engineer'],
    courseDuration: '12-18 months',
    videoId: 'O3XyDLbaUmU',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/robotics-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-robotics-jobs.html' },
      { name: 'IEEE Jobs', url: 'https://jobs.ieee.org/' },
      { name: 'Robotics Jobs', url: 'https://www.roboticsjobs.com/' }
    ],
    roadmap: ['Learn programming and math', 'Study robotics fundamentals', 'Master ROS', 'Build robotic systems'],
    resources: [
      { name: 'ROS Documentation', url: 'https://docs.ros.org/en/noetic/Installation/Ubuntu.html' },
      { name: 'OpenCV', url: 'https://opencv.org/releases/' },
      { name: 'Gazebo Simulator', url: 'http://gazebosim.org/downloads' },
      { name: 'Arduino', url: 'https://www.arduino.cc/en/software' }
    ]
  },
  {
    id: 'augmented-reality',
    name: 'Augmented Reality (AR)',
    description: 'Technology that overlays digital information onto the real world.',
    requirements: ['Programming knowledge', '3D mathematics', 'Computer vision'],
    skills: ['Unity', 'ARKit', 'ARCore', 'C#', 'Computer Vision', '3D Modeling'],
    opportunities: ['AR Developer', 'Unity Developer', 'Computer Vision Engineer', 'UX Designer'],
    courseDuration: '8-12 months',
    videoId: 'QpbJwad6v_s',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/augmented-reality-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-augmented-reality-jobs.html' },
      { name: 'Unity Jobs', url: 'https://unity.com/unity/jobs' },
      { name: 'AngelList', url: 'https://angel.co/jobs' }
    ],
    roadmap: ['Learn Unity and C#', 'Study AR frameworks', 'Master 3D mathematics', 'Build AR applications'],
    resources: [
      { name: 'Unity Learn', url: 'https://learn.unity.com/' },
      { name: 'ARKit Documentation', url: 'https://developer.apple.com/documentation/arkit' },
      { name: 'ARCore Docs', url: 'https://developers.google.com/ar/develop' },
      { name: 'Vuforia', url: 'https://library.vuforia.com/' }
    ]
  },
  {
    id: 'virtual-reality',
    name: 'Virtual Reality (VR)',
    description: 'Technology that creates immersive, simulated environments.',
    requirements: ['Programming knowledge', '3D graphics', 'Game development'],
    skills: ['Unity', 'Unreal Engine', 'C#', 'C++', '3D Modeling', 'VR SDKs'],
    opportunities: ['VR Developer', 'Game Developer', '3D Artist', 'UX Designer'],
    courseDuration: '8-12 months',
    videoId: '6a7R1gU81jQ',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/virtual-reality-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-virtual-reality-jobs.html' },
      { name: 'Unity Jobs', url: 'https://unity.com/unity/jobs' },
      { name: 'Epic Games', url: 'https://www.epicgames.com/careers/en-US/' }
    ],
    roadmap: ['Learn Unity/Unreal', 'Study VR development', 'Master 3D graphics', 'Build VR experiences'],
    resources: [
      { name: 'Unity XR', url: 'https://docs.unity3d.com/Manual/com.unity.xr.management.html' },
      { name: 'Unreal VR', url: 'https://docs.unrealengine.com/en-US/SharingAndReleasing/VR/index.html' },
      { name: 'Oculus Developer', url: 'https://developer.oculus.com/documentation/unity/unity-intro/' },
      { name: 'SteamVR', url: 'https://www.valvesoftware.com/en/steamvr' }
    ]
  },
  {
    id: 'game-development',
    name: 'Game Development',
    description: 'Creating video games for various platforms and audiences.',
    requirements: ['Programming skills', 'Creative thinking', 'Problem-solving'],
    skills: ['Unity', 'Unreal Engine', 'C#', 'C++', 'Game Design', '3D Modeling'],
    opportunities: ['Game Developer', 'Game Designer', 'Level Designer', 'Technical Artist'],
    courseDuration: '10-15 months',
    videoId: 'rJ1iA-33fss',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/game-development-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-game-development-jobs.html' },
      { name: 'Gamasutra Jobs', url: 'https://www.gamasutra.com/jobs/' },
      { name: 'Unity Jobs', url: 'https://unity.com/unity/jobs' }
    ],
    roadmap: ['Learn programming basics', 'Master game engine', 'Study game design', 'Build complete games'],
    resources: [
      { name: 'Unity Learn', url: 'https://learn.unity.com/' },
      { name: 'Unreal Engine Docs', url: 'https://docs.unrealengine.com/en-US/index.html' },
      { name: 'Game Dev Tuts', url: 'https://gamedev.tutsplus.com/' },
      { name: 'Itch.io', url: 'https://itch.io/docs' }
    ]
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'Marketing products or services using digital channels and technologies.',
    requirements: ['Marketing knowledge', 'Analytical skills', 'Creative thinking'],
    skills: ['SEO', 'SEM', 'Social Media', 'Content Marketing', 'Analytics', 'Email Marketing'],
    opportunities: ['Digital Marketing Manager', 'SEO Specialist', 'Content Manager', 'Social Media Manager'],
    courseDuration: '4-6 months',
    videoId: 'nU-IIXBWlS4',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/digital-marketing-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-digital-marketing-jobs.html' },
      { name: 'Marketing Jobs', url: 'https://www.marketingjobs.com/' },
      { name: 'HubSpot', url: 'https://www.hubspot.com/careers' }
    ],
    roadmap: ['Learn marketing basics', 'Master digital tools', 'Study analytics', 'Build marketing campaigns'],
    resources: [
      { name: 'Google Analytics', url: 'https://analytics.google.com/analytics/web/' },
      { name: 'Google Ads', url: 'https://ads.google.com/home/' },
      { name: 'HubSpot Academy', url: 'https://academy.hubspot.com/' },
      { name: 'SEMrush', url: 'https://www.semrush.com/' }
    ]
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    description: 'Designing user interfaces and user experiences for digital products.',
    requirements: ['Design thinking', 'User empathy', 'Visual design skills'],
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Wireframing'],
    opportunities: ['UI Designer', 'UX Designer', 'Product Designer', 'Design Systems Designer'],
    courseDuration: '6-8 months',
    videoId: 'c9Wg6Cb_YlU',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/ui-ux-design-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-ui-ux-design-jobs.html' },
      { name: 'Dribbble Jobs', url: 'https://dribbble.com/jobs' },
      { name: 'Behance', url: 'https://www.behance.net/joblist' }
    ],
    roadmap: ['Learn design principles', 'Master design tools', 'Study user research', 'Build design portfolio'],
    resources: [
      { name: 'Figma Academy', url: 'https://www.figma.com/resources/learn-design/' },
      { name: 'Adobe XD Docs', url: 'https://www.adobe.com/devnet/adobe-xd.html' },
      { name: 'UX Mastery', url: 'https://uxmastery.com/resources/' },
      { name: 'Nielsen Norman Group', url: 'https://www.nngroup.com/articles/ux-design-resources/' }
    ]
  },
  {
    id: 'database-administration',
    name: 'Database Administration',
    description: 'Managing and maintaining database systems to ensure optimal performance.',
    requirements: ['Database knowledge', 'SQL skills', 'System administration'],
    skills: ['SQL', 'Oracle', 'MySQL', 'PostgreSQL', 'Database Design', 'Performance Tuning'],
    opportunities: ['Database Administrator', 'Data Engineer', 'Database Developer', 'Data Architect'],
    courseDuration: '6-8 months',
    videoId: 'HXV3zeQKqGY',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/database-administration-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-database-administration-jobs.html' },
      { name: 'Dice', url: 'https://www.dice.com/jobs/q-database+administration-jobs' },
      { name: 'Stack Overflow Jobs', url: 'https://stackoverflow.com/jobs' }
    ],
    roadmap: ['Learn SQL basics', 'Master database systems', 'Study administration', 'Practice performance tuning'],
    resources: [
      { name: 'Oracle Learning', url: 'https://learn.oracle.com/' },
      { name: 'MySQL Docs', url: 'https://dev.mysql.com/doc/' },
      { name: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/' },
      { name: 'SQL Server', url: 'https://docs.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver15' }
    ]
  },
  {
    id: 'network-administration',
    name: 'Network Administration',
    description: 'Managing and maintaining computer networks and network infrastructure.',
    requirements: ['Networking knowledge', 'System administration', 'Problem-solving'],
    skills: ['TCP/IP', 'Cisco', 'Network Security', 'VPN', 'Firewalls', 'Troubleshooting'],
    opportunities: ['Network Administrator', 'Network Engineer', 'System Administrator', 'IT Support'],
    courseDuration: '6-10 months',
    videoId: 'qiQR5rTSshw',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/network-administration-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-network-administration-jobs.html' },
      { name: 'Cisco Jobs', url: 'https://jobs.cisco.com/' },
      { name: 'CompTIA Jobs', url: 'https://jobs.comptia.org/' }
    ],
    roadmap: ['Learn networking basics', 'Master protocols', 'Study network security', 'Get certifications'],
    resources: [
      { name: 'Cisco Learning', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html' },
      { name: 'CompTIA Network+', url: 'https://www.comptia.org/certifications/network' },
      { name: 'Wireshark', url: 'https://www.wireshark.org/docs/' },
      { name: 'Packet Tracer', url: 'https://www.netacad.com/courses/packet-tracer' }
    ]
  },
  {
    id: 'software-testing',
    name: 'Software Testing',
    description: 'Evaluating and verifying software applications to ensure quality and functionality.',
    requirements: ['Software knowledge', 'Analytical skills', 'Attention to detail'],
    skills: ['Manual Testing', 'Automation Testing', 'Selenium', 'API Testing', 'Performance Testing'],
    opportunities: ['QA Engineer', 'Test Automation Engineer', 'Performance Tester', 'QA Lead'],
    courseDuration: '4-6 months',
    videoId: '28hHc-K38ao',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/software-testing-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-software-testing-jobs.html' },
      { name: 'QA Jobs', url: 'https://www.qajobs.com/' },
      { name: 'TestingJobs', url: 'https://www.testingjobs.com/' }
    ],
    roadmap: ['Learn testing fundamentals', 'Master testing tools', 'Study automation', 'Practice different testing types'],
    resources: [
      { name: 'Selenium Docs', url: 'https://www.selenium.dev/documentation/en/' },
      { name: 'Postman', url: 'https://www.postman.com/' },
      { name: 'JMeter', url: 'https://jmeter.apache.org/' },
      { name: 'TestNG', url: 'https://testng.org/doc/documentation-main.html' }
    ]
  },
  {
    id: 'business-analysis',
    name: 'Business Analysis',
    description: 'Analyzing business needs and requirements to recommend solutions.',
    requirements: ['Business knowledge', 'Analytical skills', 'Communication skills'],
    skills: ['Requirements Analysis', 'Process Modeling', 'Data Analysis', 'Stakeholder Management'],
    opportunities: ['Business Analyst', 'Systems Analyst', 'Product Manager', 'Business Consultant'],
    courseDuration: '4-6 months',
    videoId: 'scCilb3kBcc',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/business-analysis-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-business-analysis-jobs.html' },
      { name: 'Business Analyst Jobs', url: 'https://www.businessanalystjobs.com/' },
      { name: 'Glassdoor', url: 'https://www.glassdoor.com/Job/business-analysis-jobs-SRCH_KO0,18.htm' }
    ],
    roadmap: ['Learn business fundamentals', 'Master analysis techniques', 'Study project management', 'Practice stakeholder communication'],
    resources: [
      { name: 'BABOK Guide', url: 'https://www.iiba.org/business-analysis-body-of-knowledge/' },
      { name: 'Visio', url: 'https://www.microsoft.com/en-us/microsoft-365/visio/flowchart-software' },
      { name: 'Jira', url: 'https://www.atlassian.com/software/jira' },
      { name: 'Confluence', url: 'https://www.atlassian.com/software/confluence' }
    ]
  },
  {
    id: 'project-management',
    name: 'Project Management',
    description: 'Planning, executing, and closing projects to achieve specific goals.',
    requirements: ['Leadership skills', 'Organizational skills', 'Communication skills'],
    skills: ['Agile', 'Scrum', 'Kanban', 'Risk Management', 'Budget Management', 'Team Leadership'],
    opportunities: ['Project Manager', 'Scrum Master', 'Program Manager', 'PMO Lead'],
    courseDuration: '4-6 months',
    videoId: 'thsFsPnUHRA',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/project-management-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-project-management-jobs.html' },
      { name: 'PMI Jobs', url: 'https://www.pmi.org/jobs' },
      { name: 'Project Management Jobs', url: 'https://www.projectmanagementjobs.com/' }
    ],
    roadmap: ['Learn PM fundamentals', 'Master Agile methodologies', 'Study risk management', 'Get PM certifications'],
    resources: [
      { name: 'PMI', url: 'https://www.pmi.org/' },
      { name: 'Scrum.org', url: 'https://www.scrum.org/' },
      { name: 'Jira', url: 'https://www.atlassian.com/software/jira' },
      { name: 'MS Project', url: 'https://www.microsoft.com/en-us/microsoft-365/project/project-management-software' }
    ]
  },
  {
    id: 'product-management',
    name: 'Product Management',
    description: 'Managing the development and lifecycle of products from conception to launch.',
    requirements: ['Business acumen', 'Technical understanding', 'Strategic thinking'],
    skills: ['Product Strategy', 'Market Research', 'User Research', 'Data Analysis', 'Roadmapping'],
    opportunities: ['Product Manager', 'Product Owner', 'Senior Product Manager', 'VP of Product'],
    courseDuration: '6-8 months',
    videoId: 'yUOC-Y0f5ZQ',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/product-management-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-product-management-jobs.html' },
      { name: 'Product Manager Jobs', url: 'https://www.productmanagerjobs.com/' },
      { name: 'AngelList', url: 'https://angel.co/jobs' }
    ],
    roadmap: ['Learn product basics', 'Master market research', 'Study user experience', 'Build product roadmaps'],
    resources: [
      { name: 'Product School', url: 'https://www.productschooled.com/' },
      { name: 'Mind the Product', url: 'https://www.mindtheproduct.com/' },
      { name: 'Aha!', url: 'https://www.aha.io/' },
      { name: 'Mixpanel', url: 'https://mixpanel.com/' }
    ]
  },
  {
    id: 'technical-writing',
    name: 'Technical Writing',
    description: 'Creating clear and concise documentation for technical products and processes.',
    requirements: ['Writing skills', 'Technical knowledge', 'Communication skills'],
    skills: ['Documentation', 'API Documentation', 'User Guides', 'Technical Communication'],
    opportunities: ['Technical Writer', 'Documentation Manager', 'Content Developer', 'Information Architect'],
    courseDuration: '3-4 months',
    videoId: 'BO7j-X87rM8?',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/technical-writing-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-technical-writing-jobs.html' },
      { name: 'Technical Writing Jobs', url: 'https://www.technicalwritingjobs.com/' },
      { name: 'Upwork', url: 'https://www.upwork.com/freelance-jobs/technical-writing/' }
    ],
    roadmap: ['Learn writing fundamentals', 'Study technical topics', 'Master documentation tools', 'Build writing portfolio'],
    resources: [
      { name: 'Google Technical Writing', url: 'https://developers.google.com/tech-writing' },
      { name: 'GitBook', url: 'https://www.gitbook.com/' },
      { name: 'Confluence', url: 'https://www.atlassian.com/software/confluence' },
      { name: 'Markdown', url: 'https://www.markdownguide.org/' }
    ]
  },
  {
    id: 'system-administration',
    name: 'System Administration',
    description: 'Managing and maintaining computer systems and servers.',
    requirements: ['System knowledge', 'Problem-solving skills', 'Technical troubleshooting'],
    skills: ['Linux', 'Windows Server', 'Shell Scripting', 'System Monitoring', 'Backup & Recovery'],
    opportunities: ['System Administrator', 'DevOps Engineer', 'Infrastructure Engineer', 'IT Support'],
    courseDuration: '6-8 months',
    videoId: 'bxMukXyZTSQ',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/system-administration-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-system-administration-jobs.html' },
      { name: 'System Admin Jobs', url: 'https://www.systemadminjobs.com/' },
      { name: 'Dice', url: 'https://www.dice.com/jobs/q-system+administration-jobs' }
    ],
    roadmap: ['Learn operating systems', 'Master command line', 'Study system monitoring', 'Practice automation'],
    resources: [
      { name: 'Linux Academy', url: 'https://linuxacademy.com/' },
      { name: 'Red Hat Learning', url: 'https://www.redhat.com/en/services/training-and-certification' },
      { name: 'PowerShell', url: 'https://docs.microsoft.com/en-us/powershell/' },
      { name: 'Nagios', url: 'https://www.nagios.com/products/nagios-xi-overview/' }
    ]
  },
  {
    id: 'sales-engineering',
    name: 'Sales Engineering',
    description: 'Combining technical expertise with sales skills to sell complex technical products.',
    requirements: ['Technical knowledge', 'Sales skills', 'Communication skills'],
    skills: ['Technical Sales', 'Product Demos', 'Customer Relations', 'Solution Architecture'],
    opportunities: ['Sales Engineer', 'Solutions Engineer', 'Technical Sales Representative', 'Pre-sales Engineer'],
    courseDuration: '4-6 months',
    videoId: 'iB5PnCu5onk',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/sales-engineering-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-sales-engineering-jobs.html' },
      { name: 'Sales Jobs', url: 'https://www.salesjobs.com/' },
      { name: 'Tech Sales Jobs', url: 'https://www.techsalesjobs.com/' }
    ],
    roadmap: ['Learn sales fundamentals', 'Master technical products', 'Study customer needs', 'Practice presentations'],
    resources: [
      { name: 'Salesforce Trailhead', url: 'https://trailhead.salesforce.com/' },
      { name: 'HubSpot Sales', url: 'https://www.hubspot.com/products/sales' },
      { name: 'Sales Engineering Society', url: 'https://www.salesengineeringsociety.com/' },
      { name: 'Demo2Win', url: 'https://www.demo2win.com/' }
    ]
  },
  {
    id: 'embedded-systems',
    name: 'Embedded Systems',
    description: 'Designing and developing computer systems integrated into other devices.',
    requirements: ['Electronics knowledge', 'Programming skills', 'System design'],
    skills: ['C/C++', 'Microcontrollers', 'RTOS', 'Circuit Design', 'Debugging'],
    opportunities: ['Embedded Engineer', 'Firmware Developer', 'Hardware Engineer', 'IoT Developer'],
    courseDuration: '8-12 months',
    videoId: '_tBFaWR7gnA',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/embedded-systems-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-embedded-systems-jobs.html' },
      { name: 'Embedded Jobs', url: 'https://www.embeddedjobs.com/' },
      { name: 'Electronics Jobs', url: 'https://www.electronicsjobs.com/' }
    ],
    roadmap: ['Learn C/C++ programming', 'Study microcontrollers', 'Master embedded tools', 'Build embedded projects'],
    resources: [
      { name: 'Arduino', url: 'https://www.arduino.cc/en/software' },
      { name: 'Raspberry Pi', url: 'https://www.raspberrypi.org/documentation/' },
      { name: 'ARM Mbed', url: 'https://os.mbed.com/docs/mbed-os/latest/' },
      { name: 'FreeRTOS', url: 'https://www.freertos.org/' }
    ]
  },
  {
    id: 'quality-assurance',
    name: 'Quality Assurance',
    description: 'Ensuring products and services meet specified requirements and standards.',
    requirements: ['Attention to detail', 'Process knowledge', 'Analytical skills'],
    skills: ['Quality Control', 'Process Improvement', 'Testing Methodologies', 'Documentation'],
    opportunities: ['QA Engineer', 'Quality Manager', 'Process Improvement Specialist', 'Compliance Officer'],
    courseDuration: '4-6 months',
    videoId: '9OiLX5w9x_o',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/quality-assurance-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-quality-assurance-jobs.html' },
      { name: 'Quality Jobs', url: 'https://www.qualityjobs.com/' },
      { name: 'QA Jobs', url: 'https://www.qajobs.com/' }
    ],
    roadmap: ['Learn quality fundamentals', 'Master testing processes', 'Study quality standards', 'Practice continuous improvement'],
    resources: [
      { name: 'ASQ', url: 'https://asq.org/' },
      { name: 'ISO Standards', url: 'https://www.iso.org/iso-9001-quality-management.html' },
      { name: 'Six Sigma', url: 'https://www.isixsigma.com/' },
      { name: 'Lean Manufacturing', url: 'https://www.lean.org/lexicon/lean-manufacturing' }
    ]
  },
  {
    id: 'healthcare-it',
    name: 'Healthcare IT',
    description: 'Applying information technology to healthcare to improve patient care and operations.',
    requirements: ['Healthcare knowledge', 'IT skills', 'Regulatory awareness'],
    skills: ['EHR Systems', 'HIPAA Compliance', 'Healthcare Analytics', 'Medical Coding'],
    opportunities: ['Healthcare IT Specialist', 'Clinical Informatics', 'Health Data Analyst', 'EHR Administrator'],
    courseDuration: '6-8 months',
    videoId: 'jh5U5BnpGN8',
    internshipPlatforms: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/healthcare-it-jobs' },
      { name: 'Indeed', url: 'https://www.indeed.com/q-healthcare-it-jobs.html' },
      { name: 'Healthcare IT Jobs', url: 'https://www.healthcareitjobs.com/' },
      { name: 'HIMSS JobMine', url: 'https://jobmine.himss.org/' }
    ],
    roadmap: ['Learn healthcare basics', 'Master EHR systems', 'Study compliance', 'Practice data analysis'],
    resources: [
      { name: 'Epic', url: 'https://www.epic.com/' },
      { name: 'Cerner', url: 'https://www.cerner.com/' },
      { name: 'HIMSS', url: 'https://www.himss.org/' },
      { name: 'Healthcare IT News', url: 'https://www.healthcareitnews.com/' }
    ]
  }
];
