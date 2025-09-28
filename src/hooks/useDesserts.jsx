import React, {useState, useEffect} from "react";


const useDesserts = () => {
    const [desserts, setDesserts] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response) {
          throw new Error("Unable to load json data");
        }
        return response.json()})
      .then((data) => {
        console.log(data);
        setDesserts(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return desserts
}

export default useDesserts