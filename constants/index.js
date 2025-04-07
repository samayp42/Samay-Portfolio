import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Engineer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  }
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
  ],
  frameworks: [
    {
      name: "TensorFlow",
      icon: "/assets/tech/tensorflow.svg",
      link: "https://www.tensorflow.org/",
    },
    {
      name: "PyTorch",
      icon: "/assets/tech/pytorch.svg",
      link: "https://pytorch.org/",
    },
    {
      name: "Keras",
      icon: "/assets/tech/keras.svg",
      link: "https://keras.io/",
    },
    {
      name: "Scikit-learn",
      icon: "/assets/tech/scikit-learn.svg",
      link: "https://scikit-learn.org/",
    },
    {
      name: "Hugging Face",
      icon: "/assets/tech/huggingface.svg",
      link: "https://huggingface.co/",
    },
    {
      name: "LangChain",
      icon: "/assets/tech/langchain.svg",
      link: "https://python.langchain.com/",
    },
    {
      name: "RAG",
      icon: "/assets/tech/rag.png",
      link: "https://www.pinecone.io/learn/retrieval-augmented-generation/",
    },
  ],
  libraries: [
    {
      name: "NumPy",
      icon: "/assets/tech/numpy.svg",
      link: "https://numpy.org/",
    },
    {
      name: "Pandas",
      icon: "/assets/tech/pandas.svg",
      link: "https://pandas.pydata.org/",
    },
    {
      name: "Matplotlib",
      icon: "/assets/tech/matplotlib.svg",
      link: "https://matplotlib.org/",
    },
    {
      name: "OpenCV",
      icon: "/assets/tech/opencv.svg",
      link: "https://opencv.org/",
    },
    {
      name: "NLTK",
      icon: "/assets/tech/nltk.png",
      link: "https://www.nltk.org/",
    },
    {
      name: "SentenceTransformers",
      icon: "/assets/tech/sentence-transformer.png",
      link: "https://www.sbert.net/",
    },
    {
      name: "BeautifulSoup",
      icon: "/assets/tech/beautifulsoup.png",
      link: "https://www.crummy.com/software/BeautifulSoup/",
    },
    {
      name: "Maplibre",
      icon: "/assets/tech/maplibre.svg",
      link: "https://maplibre.org/",
    },
  ],
  tools: [
    {
      name: "Streamlit",
      icon: "/assets/tech/streamlit.svg",
      link: "https://streamlit.io/",
    },
    {
      name: "Gradio",
      icon: "/assets/tech/gradio.svg",
      link: "https://gradio.app/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Hugging Face Hub",
      icon: "/assets/tech/huggingface.svg",
      link: "https://huggingface.co/",
    },
    {
      name: "OpenAI API",
      icon: "/assets/tech/openai.svg",
      link: "https://openai.com/",
    },
  ],
  environments: [
    {
      name: "Google Colab",
      icon: "/assets/tech/googlecolab.svg",
      link: "https://colab.research.google.com/",
    },
    {
      name: "JupyterLab",
      icon: "/assets/tech/jupyter.svg",
      link: "https://jupyter.org/",
    },
    {
      name: "Anaconda",
      icon: "/assets/tech/anaconda.svg",
      link: "https://www.anaconda.com/",
    },
    {
      name: "Hugging Face Spaces",
      icon: "/assets/tech/huggingface.svg",
      link: "https://huggingface.co/spaces",
    },
  ],
  databases: [
    {
      name: "Pinecone",
      icon: "/assets/tech/pinecone.svg",
      link: "https://www.pinecone.io/",
    },
  ],
};

const experiences = [
  {
    title: "AI Engineer",
    company_name: "Oizom Instruments Pvt. Ltd.",
    icon: "/assets/company/oizom.png",
    iconBg: "#E6DEDD",
    date: "01/2025 - Present",
    points: [
      "Developed an AI-powered website chatbot to assist users with air quality insights.",
      "Implemented AI-driven insights with real-time environmental data analysis.",
      "Designed and built a geospatial emission analysis tool to assess pollution levels in specific areas.",
      "Integrated AI models for predictive air quality analysis and reporting."
    ]
  },
  {
    title: "Data Science Intern",
    company_name: "YBI",
    icon: "/assets/company/YBI.png",
    iconBg: "#E6DEDD",
    date: "05/2024 – 06/2024",
    points: [
      "Built an AI-driven question generation system using Retrieval-Augmented Generation (RAG) and LLMs.",
      "Automated question generation from PDFs, enhancing exam and interview preparation.",
      "Developed NLP-based models for content extraction and processing."
    ]
  },
  {
    title: "Intern",
    company_name: "Oizom Instruments Pvt. Ltd.",
    icon: "/assets/company/oizom.png",
    iconBg: "#E6DEDD",
    date: "04/2023 – 06/2023",
    points: [
      "Contributed to an open-source project, enhancing chart generation functionalities.",
      "Implemented date-time conversion and CSV upload features.",
      "Improved data handling and user experience through technical optimizations."
    ]
  },
];

const testimonials = [
  {
    testimonial: "[Client testimonial]",
    name: "[Client Name]",
    designation: "[Client Role]",
    company: "[Company Name]",
    image: "[Client Photo URL]",
  },
  {
    testimonial: "[Client testimonial]",
    name: "[Client Name]",
    designation: "[Client Role]",
    company: "[Company Name]",
    image: "[Client Photo URL]",
  },
  {
    testimonial: "[Client testimonial]",
    name: "[Client Name]",
    designation: "[Client Role]",
    company: "[Company Name]",
    image: "[Client Photo URL]",
  },
];

const projects = [
  {
    name: "AirSight - Air Quality & Emission Analysis",
    description: "A comprehensive geospatial analysis platform for environmental monitoring. AirSight fetches real-time air quality and weather data, maps pollution sources, and visualizes insights like health risk cards, emission impact zones, and sustainability metrics.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "geospatial", color: "green-text-gradient" },
      { name: "api", color: "pink-text-gradient" },
      { name: "data-visualization", color: "orange-text-gradient" },
      { name: "llm", color: "purple-text-gradient" }
    ],
    image: "/assets/projects/AirSight.png",
    source_code_link: "https://github.com/samayp42/AirSight",
    deployed_link: "https://airsight.iaqn.org"
  },
  {
    name: "Ozi - Oizom's AI Chatbot",
    description: "A smart assistant built for Oizom's platform using web scraping, PDF parsing, and Pinecone vector embeddings. Trained on company-specific documentation and case studies, Ozi provides intelligent responses based on categorized user intent.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "pinecone", color: "green-text-gradient" },
      { name: "rag", color: "pink-text-gradient" },
      { name: "scraping", color: "orange-text-gradient" },
      { name: "llm", color: "purple-text-gradient" }
    ],
    image: "/assets/projects/Ozi.png",
    source_code_link: "https://github.com/samayp42/Oizom_Assistant",
    deployed_link: "http://bit.ly/4j4aCKo"
  },
  {
    name: "RAG-based Personal Placement Assistant",
    description: "An AI-powered career readiness tool that performs automated resume analysis, generates tailored interview questions, and conducts mock interviews. Built using RAG architecture, NLP, and LangChain to deliver gap analysis and personalized learning paths.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "langchain", color: "pink-text-gradient" },
      { name: "huggingface", color: "orange-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "rag", color: "purple-text-gradient" }
    ],
    image: "/assets/projects/placement-assistant.png",
    source_code_link: "https://huggingface.co/spaces/Samay42/Personal_Placement_Assistant/tree/main",
    deployed_link: "https://huggingface.co/spaces/Samay42/Personal_Placement_Assistant?logs=container"
  },
  {
    name: "Map Mind",
    description: "An urban intelligence tool that analyzes walkability in any city area by fetching POIs using OSM Overpass API. It integrates Google's LLM to evaluate accessibility within 15 minutes of walking, and visualizes the data using MapTiler.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "osm", color: "green-text-gradient" },
      { name: "llm", color: "pink-text-gradient" },
      { name: "maptiler", color: "orange-text-gradient" },
      { name: "vercel", color: "purple-text-gradient" }
    ],
    image: "/assets/projects/Map-Mind.png",
    source_code_link: "https://github.com/samayp42/MapMind",
    deployed_link: "https://map-mind-frontend.vercel.app/"
  },
  {
    name: "Krushak - Agricultural Chatbot",
    description: "A smart agriculture chatbot built on a custom dataset using NLP techniques and an RNN model. Integrated with Google Gemini Pro to enhance general knowledge responses beyond the dataset, providing accurate, context-aware agricultural advice.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "rnn", color: "green-text-gradient" },
      { name: "nlp", color: "pink-text-gradient" },
      { name: "gemini", color: "orange-text-gradient" }
    ],
    image: "/assets/projects/Krushak.png",
    source_code_link: "https://github.com/samayp42/Agriculture-chatbot-krushak",
    deployed_link: ""
  }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/samayp42",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/samay-patel-0616b6233/",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/_.samaypatel?igsh=MXc1OXY1cDJ0bzZ2aA%3D%3D&utm_source=qr",
  },
];

const heroTexts = [
  "AI Engineer",
  500,
  "Full-Stack Developer",
  500,
  "Frontend Developer",
  500,
  "Backend Developer",
  500,
  "Problem Solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
