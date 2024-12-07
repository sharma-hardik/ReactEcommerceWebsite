//create context
// make provider
//consumer (useContext)

import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer.jsx";
import HeroImage from "./assets/images/hero.svg";
import AboutImage from "./assets/images/about1.svg";

const AppContext = React.createContext();
const API = "https://fakestoreapi.com/products/category/men's clothing";

const initialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Hardik Sharma",
        image: HeroImage,
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Software Engineer",
        image: AboutImage,
      },
    });
  };
  // to get api data
  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api
  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateAboutPage, updateHomePage }}>
      {children}
    </AppContext.Provider>
  );
};

//global custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
