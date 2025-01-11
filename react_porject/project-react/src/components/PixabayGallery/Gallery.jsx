import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Gallery.css";
import Weather from "../weatherr/Wheather";

function Gallery({ query }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  const API_KEY = "48168517-7f596ede63ea62f488eca835d";
  const API_URL = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo`;

  // Fetch images from Pixabay API
  const fetchImages = async () => {
    try {
      const response = await axios.get(API_URL);
      console.log("API Response:", response.data);
      if (response.data.hits.length > 0) {
        setImages(response.data.hits);
        setLoading(false);
      } else {
        setLoading(false);
        console.log("No images found for this query.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query]);

  // Return loading spinner if still loading
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h1>Discover {query} City</h1>

      {images.length > 0 ? (
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={image.id}
              >
                <img
                  src={image.webformatURL}
                  className="d-block w-100"
                  alt={image.tags}
                  style={{ height: "100%" }}
                />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      ) : (
        <p>No images found for this query.</p>
      )}

      <div className="mt-4">
        <button onClick={() => setModalShow(true)} className="btn btn-info">
          🌦️ Get Weather
        </button>
      </div>

      <Weather
        query={query}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Gallery;
