import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import axios from "axios";

function Weather({ query, show, onHide }) {
  const API_KEY = "905386ab37ef163370b943c0ddede431";
  const [meteo, setMeteo] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`;
  const fetchWeather = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      console.log("API Response:", response.data);
      setMeteo(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (show) {
      fetchWeather();
    }
  }, [show]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Weather in {query}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading ? (
          <p>loading data ...</p>
        ) : meteo ? (
          <div>
            <h4>
              {meteo.name}, {meteo.sys.country}
            </h4>
            <p>
              <strong>Temperature:</strong> {meteo.main.temp}°C
            </p>
            <p>
              <strong>Weather: </strong> {meteo.weather[0].description}
            </p>
            <p>
              <strong>Humidity:</strong> {meteo.main.humidity} %
            </p>
            <p>
              <strong>Wind Speed:</strong> {meteo.wind.speed} m/s
            </p>
          </div>
        ) : (
          <p>No weather data available.</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Weather;
