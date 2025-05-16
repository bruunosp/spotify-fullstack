## 🎧 Spotify Clone - Backend with Node, Express, and MongoDB

This is the backend of a full stack project inspired by Spotify, developed during Hashtag Treinamentos' intensive course. The project uses Node.js, Express, and MongoDB to manage music, artist, and playlist data.

## 🔗 Technologies Used
- Node.js
- Express
- MongoDB
- Vite + React (frontend in a separate project)
- Dotenv


## 🚀 How to Run Locally

### 1. Clone the repository
git clone https://github.com/username/repository-name.git
cd repository-name

### 2. Install dependencies
npm create vite@latest .
    > Ignore files and continue
    > React
    > Javascript


npm install

### 🧹 Note about automatically generated folders
When you run the command npm create vite@latest . in the project root folder, some folders and files are automatically created in the root, such as:
-> public/
-> src/ (fora das pastas back-end e front-end)
-> .gitignore
-> eslint.config.js
-> index.html
-> vite.config.js


However, since the project already contains these folders inside the specific back-end and front-end folders, to avoid confusion and keep the project organized, it is recommended to delete these folders and files generated in the root.

This way, you keep the project structure clean and avoid duplicates.

### 3. Create a .env file
Based on the .env.example files (in both back-end and front-end folders), create a .env file with your MongoDB connection string and the server port.
    MONGO_URL=your_mongo_connection_string  
        > If you don't have, create an account on MongoDB: https://www.mongodb.com/
    PORT=port_number (e.g., 3000)  


### 4. Start the servers
Open two terminal windows (Ctrl + Shift + `):
For the backend:
    cd ./back-end  
    node ./api/api.js  

You should see: "Server is listening on <port>"

For the frontend:
    cd ./front-end  
    npm run dev  

Then click the link ➜ Local: http://localhost:<port>/

## 🧾 Folder Structure
/
├─ back-end/                # Backend code responsible for API and MongoDB connection
│ ├─ api/
│ │ ├─ connect.js           # MongoDB connection setup
│ │ ├─ insertMany.js        # Inserts multiple records into the database
│ │ └─ server.js            # Starts and configures the Node.js server
│ ├─ .env                   # Contains sensitive environment variables (not pushed to GitHub)
│ ├─ .env.example           # Template for .env configuration
│ ├─ .gitignore             # Files and folders ignored by Git
│ ├─ package-lock.json      # Dependency lock file
│ └─ package.json           # Backend dependencies and scripts
│
├─ front-end/               # Frontend code using Vite + React
│ ├─ api/
│ │ └─ api.js               # API access configuration (uses VITE_API_URL)
│ ├─ src/                   # Main frontend source code
│ │ ├─ assets/
│ │ │ ├─ database/
│ │ │ │ ├─ artists.js       # Simulated artist data
│ │ │ │ └─ songs.js         # Simulated song data
│ │ │ └─ logo/
│ │ │ └─ spotify-logo.png   # App logo
│ │ ├─ components/          # Reusable UI components
│ │ │ ├─ Header.jsx
│ │ │ ├─ ItemList.jsx
│ │ │ ├─ Main.jsx
│ │ │ ├─ Player.jsx
│ │ │ ├─ SingleItem.jsx
│ │ │ ├─ SongItem.jsx
│ │ │ └─ SongList.jsx
│ │ ├─ pages/               # Main pages of the application
│ │ │ ├─ Artist.jsx
│ │ │ ├─ Artists.jsx
│ │ │ ├─ Home.jsx
│ │ │ ├─ Song.jsx
│ │ │ └─ Songs.jsx
│ │ ├─ App.jsx              # Main React component
│ │ ├─ index.css            # Global styles
│ │ └─ main.jsx             # React entry point
│ ├─ .env                   # Frontend environment variables (not pushed to GitHub)
│ ├─ .env.example           # Template for API URL configuration
│ ├─ index.html             # Main HTML file injected by React
│ ├─ package-lock.json      # Dependency lock file
│ ├─ package.json           # Frontend dependencies and scripts
│ └─ vite.config.js         # Vite configuration
│
└─ README.md # Main project documentation


## 🧠 Features

### 🔍 Music and Artist Browsing
The system allows viewing a list of artists and their respective songs. For educational purposes, one song per artist was implemented, using static data files simulating a database.

### 🔄 Frontend and Backend Integration via REST API
The interface (built with React + Vite) consumes data exposed by a Node.js + Express API, ensuring a clear separation between the presentation layer and data logic.

### 🧱 Modular Backend Architecture
The server code is structured with separation of concerns:
-> Routes: API endpoints definitions
-> Controllers: Logic for handling requests and responses
-> Models: Data structure and management (using MongoDB)


## 📦 Production
This project is for educational purposes but can be adapted for real-world use with enhancements in security, authentication, and performance.

## 👨‍💻 Author
This project was developed as part of Hashtag Treinamentos’ Full Stack Intensive (https://portalhashtag.com/). Repository maintained by Bruno Felipe Passareli.

## 🛡️ Disclaimer
Never commit your .env file to GitHub. It contains sensitive information such as database access keys.