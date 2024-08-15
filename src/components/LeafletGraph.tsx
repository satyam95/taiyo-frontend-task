import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCountryData } from "../query/covidData";
import LoadingMessage from "./LoadingMessage";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = defaultIcon;

const LeafletGraph = () => {
  const { data, isLoading, error } = useCountryData();

  if (isLoading) {
    return (
      <LoadingMessage
        heading="Worldwide Covid-19 Cases Over Time"
        subheading="Please wait data is being loading."
      />
    );
  }

  if (error) {
    return (
      <LoadingMessage
        heading="Worldwide Covid-19 Cases Over Time"
        subheading="Error fetching data"
      />
    );
  }

  return (
    <div className="rounded-xl border shadow flex-1">
      <h1 className="text-lg font-semibold border-b p-4 md:text-2xl">
        Worldwide Covid-19 Cases Over Time
      </h1>
      <div className="px-4 py-8 flex flex-1">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={2}
          scrollWheelZoom={true}
          style={{
            height: "85vh",
            width: "100%",
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {data.map((country: any) => (
            <Marker
              key={country.country}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <strong>{country.country}</strong>
                <br />
                Active Cases: {country.active}
                <br />
                Recovered: {country.recovered}
                <br />
                Deaths: {country.deaths}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default LeafletGraph;
