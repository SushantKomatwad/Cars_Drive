import axios from "axios";
import { createContext, useEffect, useState  } from "react";

const CarContext = createContext();

const CarProvider = ({children}) => {

   const [data , setData] = useState([]);
   const [loading , setLoading] = useState(true);

   useEffect(() => {
       const fetchData = async () => {
        try {
            const response = await axios.get('https://freetestapi.com/api/v1/cars')
            setData(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
       };

    fetchData();

   } , [])

  return (
    <CarContext.Provider value ={{data , loading}}>
        {children}
    </CarContext.Provider>
  );
};

export { CarContext , CarProvider };