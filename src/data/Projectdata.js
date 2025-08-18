import movix from '../assets/projectImg/MovixImg.png'
import SmsImg from '../assets/projectImg/SmsImg2.png'
import bank from '../assets/projectImg/Bank.png'
import weather from '../assets/projectImg/Weather.png'

const projectsData = [
  {
    id: "1",
    title: "Movix",
    tagline: "A movie search platform with live data from OMDB API.",
    liveDemo: "https://movixn.netlify.app/",
    github: "https://github.com/Rishit-Vishwakarma/Movix",
    tags: ["React", "CSS", "Framer Motion", "API"],
    overview: "A React-based movie search application using OMDB API, allowing users to add favorites and track watch history locally via localStorage.",
    features: [
      "Search with debounced input",
      "Responsive layout (mobile → 4K)",
      "Dark/Light mode",
      "Favorites persisted in localStorage"
    ],
    techStack: ["React", "React Router", "Framer Motion", "Vite", "CSS Modules"],
    steps: [
      "User searches a keyword.",
      "Client calls external API and normalizes results.",
      "State updates UI; favorites stored in localStorage.",
      "Error and loading states handled gracefully."
    ],
    challenges: [
      {
        challenge: "Handling API rate limits.",
        solution: "Added debounce + cached responses in memory."
      },
      {
        challenge: "Maintaining 60fps with animations.",
        solution: "Reduced DOM nodes, used transform-only animations."
      }
    ],
    image: movix
  },
  {
    id: "2",
    title: "SMS Spam Detection",
    tagline: "A machine learning web app to classify SMS messages as Spam or Not Spam.",
    liveDemo: "https://spam-detection-system.streamlit.app/",
    github: "https://github.com/Rishit-Vishwakarma/SMS-Spam-Detection-System-Using-NLP",
    tags: ["Python", "Machine Learning", "NLP", "Streamlit"],
    overview: "An SMS Spam Detection System that classifies messages as spam or real using NLP and neural networks. It preprocesses text, extracts features, and uses a trained model for accurate classification, showcasing the application of deep learning and NLP in text classification.",
    features: [
      "Text cleaning and preprocessing using NLTK",
      "Feature extraction with CountVectorizer",
      "Spam/Not Spam prediction using a trained ML model",
      "Interactive web interface built with Streamlit",
      "Instant classification results"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "NLTK"],
    steps: [
      "User enters an SMS message into the input field.",
      "The system preprocesses the text and extracts features.",
      "The result is displayed instantly on the web interface.",
      "The trained model predicts whether the message is Spam or Not Spam."
    ],
    challenges: [
      {
        challenge: "Accurately classifying varied spam message formats.",
        solution: "Applied thorough preprocessing and tuned ML model parameters for optimal accuracy."
      }
    ],
    image: SmsImg
  },

  {
    id: "3",
    title: "Banking System",
    tagline: "A console-based banking application for managing user accounts and transactions.",
    liveDemo: "https://github.com/Rishit-Vishwakarma/Banking-Management-System",
    github: "https://github.com/Rishit-Vishwakarma/Banking-Management-System",
    tags: ["Java", "JDBC", "MySQL", "Console Application"],
    overview: "This is a command-line banking application built in Java that connects to a MySQL database using JDBC. It allows users to register, log in, open new bank accounts, and perform essential banking transactions like deposits, withdrawals, transfers, and balance inquiries in a secure manner.",
    features: [
      "User registration and login system.",
      "New bank account creation with an initial deposit.",
      "Secure transactions requiring a security pin.",
      "Functionality to debit (withdraw) money from an account",
      "Functionality to credit (deposit) money to an account",
      "Ability to transfer money between two accounts.",
      "Feature to check the current account balance."
    ],
    techStack: ["Java ", "JDBC (Java Database Connectivity)", "MySQL "],
    steps: [
      "The user is prompted to either register a new profile or log in with existing credentials (email and password).",
      "Upon successful login, the system checks if a bank account exists for the user..",
      "Once an account is active, the user can choose from a menu of banking operations: Debit, Credit, Transfer, or Check Balance.",
      "For any transaction, the user must provide their security PIN to authorize the action.",
      "The application updates the database records accordingly and provides feedback on whether the transaction was successful or failed."
    ],
    challenges: [
      {
        challenge: "Authorizing user transactions securely.",
        solution: "A security PIN is required for all critical operations like debit, credit, transfer, and balance checks to verify the account holder's identity."
      },
      {
        challenge: "Preventing the creation of multiple bank accounts for the same registered user.",
        solution: "The system includes a check (`account_exist`) to verify if an account is already associated with a user's email before allowing a new one to be created."
      }
    ],
    image: bank
  },
  {
    id: "4",
    title: "Wether site",
    tagline: "A simple weather application to find real-time weather data for any city.",
    liveDemo: "https://citymausam.netlify.app/",
    github: "https://github.com/Rishit-Vishwakarma/Weather-Site/tree/main",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    overview: "A client-side web application built with HTML, CSS, and JavaScript that fetches and displays current weather data from the OpenWeatherMap API. Users can enter a city name to get information on temperature, humidity, and wind speed, with a dynamically changing icon to reflect the weather conditions.",
    features: [
      "Search for weather by city name.",
      "Displays temperature, humidity, and wind speed.",
      "Dynamically updates the weather icon based on conditions (e.g., Clouds, Clear, Rain).",
      "Provides error handling for invalid city names"
    ],
    techStack: ["HTML  ", "CSS ", "JavaScript", "OpenWeatherMap API"],
    steps: [
      "The user enters a city name into the search input field and clicks the search button.",
      "The application retrieves the JSON response and updates the HTML elements to display the city name, temperature, humidity, and wind speed [cite: 2, 3]",
    "The weather icon's image source is updated based on the weather conditions described in the API response.",
    "If the API returns a 404 status, an error message is shown to the user."
  ],
    challenges: [
      {
        challenge: "Handling invalid user input, such as a non-existent city.",
        solution: "Checked the response status of the API call"
      }
    ],
    image: weather
  }
];

export default projectsData;
