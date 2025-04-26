# 📡 Weather API

This is a simple *Weather API* project built with Node.js and Express.  
It fetches real-time weather information for a city using a weather service.

---

## 🚀 Features
- Search weather by *city name*.
- Displays *temperature, **humidity, and **weather description*.
- Built with *Express.js*.
- Uses *Axios* for API requests.

---

## 🛠 Tech Stack
- Node.js
- Express.js
- Axios
- (External) Weather API like OpenWeatherMap

---

## ⚙ Installation

1. *Clone the repository:*
bash
git clone https://github.com/suhaib36/weather-api.git


2. *Install dependencies:*
bash
npm install


3. *Set up your API Key:*
- Create a .env file.
- Add your weather API key inside:
bash
API_KEY=your_api_key_here


4. *Start the server:*
bash
node app.js


---

## 📈 Example Usage

Request:

GET /weather?city=London


Response:
json
{
  "city": "London",
  "temperature": "15°C",
  "humidity": "72%",
  "description": "Cloudy"
}


---

## 📄 Project Structure


weather-api/
├── app.js
├── package.json
├── .env
└── README.md


---

## 🤝 Contributing
Pull requests are welcome!  
For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).
