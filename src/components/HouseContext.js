import React,{useState, useEffect, createContext } from 'react';
import {houseData} from '../data';
 
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(houseData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type [any]');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];
    //console.log(uniqueCountries);
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniqueProperties = ['Location (any)', ...new Set(allProperties)];
    //console.log(uniqueCountries);
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    console.log("clicked");
  }

  return(
   <HouseContext.Provider value={{
    country,
    setCountry,
    countries,
    property,
    setProperty,
    properties,
    price,
    setPrice,
    houses,
    loading,
    handleClick
   }}>
      {children}
   </HouseContext.Provider>
  )
};

export default HouseContextProvider;
