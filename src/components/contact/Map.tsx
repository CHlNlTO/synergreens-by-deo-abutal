'use client';

import { useState, useEffect } from 'react';
import {
  LoadScriptNext,
  GoogleMap,
  Marker,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '100%',
};

const destination = {
  lat: 14.078584789666044,
  lng: 121.15089480041834,
};

const Map = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);
  const [showDirections, setShowDirections] = useState(false);

  useEffect(() => {
    if (showDirections && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          console.error('Geolocation error:', err);
          alert('Unable to access your location.');
        }
      );
    }
  }, [showDirections]);

  if (!apiKey) return <div>Missing Google Maps API Key</div>;

  const handleDirections = (response: google.maps.DirectionsResult | null, status: string) => {
    if (status === 'OK' && response) {
      setDirections(response);

      // 👇 Automatically adjust zoom and fit to route
      if (map) {
        const bounds = new google.maps.LatLngBounds();
        response.routes[0].overview_path.forEach((p) => bounds.extend(p));
        map.fitBounds(bounds);
      }
    } else {
      console.warn('Directions request failed:', status);
    }
  };

  const handleToggleDirections = () => {
    if (showDirections) {
      // 👇 Clear and refocus on destination
      setShowDirections(false);
      setDirections(null);
      setUserLocation(null);

      if (map) {
        map.setCenter(destination);
        map.setZoom(15);
      }
    } else {
      setDirections(null);
      setShowDirections(true);
    }
  };

  return (
    <div className="relative w-full h-full">
     <LoadScriptNext googleMapsApiKey={apiKey} language="en" region="US">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={destination}
          zoom={15}
          onLoad={(mapInstance) => setMap(mapInstance)}
        >
          {!showDirections && <Marker position={destination} />}
          {showDirections && userLocation && !directions && (
            <DirectionsService
              options={{
                origin: userLocation,
                destination,
                travelMode: google.maps.TravelMode.DRIVING,
              }}
              callback={handleDirections}
            />
          )}
          {directions && showDirections && (
            <DirectionsRenderer
              directions={directions}
              options={{
                suppressMarkers: false,
                preserveViewport: false,
              }}
            />
          )}
        </GoogleMap>
      </LoadScriptNext>

      {/* Overlay button */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <button
          onClick={handleToggleDirections}
          className={`px-5 py-2.5 rounded-lg font-medium shadow-md transition ${
            showDirections
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'bg-primary-600 hover:bg-primary-700 text-white'
          }`}
        >
          {showDirections ? 'Clear Directions' : 'Get Directions'}
        </button>
      </div>
    </div>
  );
};

export default Map;
