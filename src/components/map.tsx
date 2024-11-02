"use client";
import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

type Props = {};

function Map({}: Props) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary("marker");

      const position = {
        lat: 17.8749,
        lng: 103.07663,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 14,
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: position,
      });

      marker.addListener("click", () => {
        window.open(
          `https://www.google.com/maps/search/?api=1&query=${position.lat},${position.lng}`,
          "_blank"
        );
      });
    };

    initMap();
  }, []);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map" />
      <style jsx>{`
        .map-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* Default 16:9 aspect ratio */
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 1.7rem;
        }

        .map {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        /* Responsive width and aspect ratios */
        @media (min-width: 320px) {
          .map-container {
            width: 80vw;
            padding-bottom: 70%;
          }
        }

        @media (min-width: 640px) {
          .map-container {
            width: 80vw;
            padding-bottom: 60%;
          }
        }

        @media (min-width: 768px) {
          .map-container {
            width: 60vw;
            padding-bottom: 40%;
          }
        }

        @media (min-width: 1024px) {
          .map-container {
            width: 60vw;
            padding-bottom: 35%;
          }
        }

        @media (min-width: 1280px) {
          .map-container {
            width: 40vw;
            padding-bottom: 30%;
          }
        }

        @media (min-width: 1536px) {
          .map-container {
            width: 25vw;
            padding-bottom: 50%;
          }
        }
      `}</style>
    </div>
  );
}

export default Map;
