import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// API Key (Replace with your actual key)
const API_KEY = "6dd9e67eac964c6dcbbd62809fffb9c6";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// __dirname replacement for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
    res.render("index", { weather: null, error: null });
});

app.post("/weather", async (req, res) => {
    const city = req.body.city;
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const weatherData = response.data;

        const weather = {
            city: weatherData.name,
            temp: weatherData.main.temp,
            desc: weatherData.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`,
        };

        res.render("index", { weather, error: null });
    } catch (error) {
        res.render("index", { weather: null, error: "City not found. Try again!" });
    }
});

// API Endpoint for Weather Data (Used by 3D Animation)
app.get("/weather-data", async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=Lucknow&appid=${API_KEY}&units=metric`);
        const weatherData = response.data;
        res.json({ desc: weatherData.weather[0].description });
    } catch (error) {
        res.json({ desc: "clear sky" }); // Default if API fails
    }
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
