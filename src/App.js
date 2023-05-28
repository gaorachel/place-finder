import React, { createContext, useState } from "react";
import { Header } from "./components/Header/Header";
import { MapContainer } from "./components/Main/MapContainer";
import { PlaceList } from "./components/Sidebar/PlaceList";
import { MapProvider } from "react-map-gl";
import style from "./App.module.css";
import styles from "./App.module.css";

export const SearchContext = createContext({
  searchPlace: "",
  postcode: "",
  longitude: NaN,
  latitude: NaN,
  travelMethod: "",
  travelTime: NaN,
});

export const PlaceContext = createContext({
  name: "",
  coordinate: "",
});

export function App() {
  const [searchData, setSearchData] = useState({});
  const [clickedPlace, setClickedPlace] = useState({});

  return (
    <MapProvider>
      <div className={styles.container}>
        <SearchContext.Provider value={[searchData, setSearchData]}>
          <header className={styles.header}>
            <Header />
          </header>
          <PlaceContext.Provider value={[clickedPlace, setClickedPlace]}>
            <aside className={styles.sidebar}>
              <PlaceList />
            </aside>

            <main className={styles.main}>
              <MapContainer />
            </main>
          </PlaceContext.Provider>
        </SearchContext.Provider>
      </div>
    </MapProvider>
  );
}
