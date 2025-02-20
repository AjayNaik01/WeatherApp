# Weather App

A simple weather application that fetches real-time weather data using the OpenWeather API.

## Features

- Search for a city's weather
- Displays temperature and weather description
- Error handling for invalid locations or fetch failures

## How It Works

1. Enter a city name in the input field.
2. Click the **Get Weather** button.
3. The app fetches data from the **OpenWeather API** and displays the result.
4. If an error occurs, appropriate messages are shown.

- **OpenWeather API** - Provides weather data based on the city name.

## API Integration

- API used: **OpenWeatherMap**
- Base URL: `https://api.openweathermap.org/data/2.5/weather`
- Required Parameters:
  - `q` (City name)
  - `appid` (API Key)
  - `units=metric` (For temperature in Celsius)
- Example API request:
  ```sh
  https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key&units=metric
  ```

## Error Handling

- **Invalid Location**: Displays a message if the city is not found.
- **Network Issues**: Displays an error if there is an issue fetching data.
