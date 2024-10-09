import axios from "axios";

const api = axios.create({
      baseURL: "https://restcountries.com/v3.1"
});

// data get 
// HTTP GET METHOD

export const getCountryData = () =>{
      return api.get("/all? fields=name, population, region, capital, flags");
};

// http method for indivasual for card name

export const getCountryIndData = (name) => {
      return api.get(
        `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
      );
    };

