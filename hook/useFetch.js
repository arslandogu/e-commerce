import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = () => {
  // const fetchData = () => {
  //     setIsLoading(true);
  //     fetch('http://localhost:3000/api/products').then(
  //         response => response.json()
  //     ).then(data => setData(data)).finally(()=>setIsLoading(false))
  // }

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({});
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://10.0.2.2:3000/api/products");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createProduct = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://10.0.2.2:3000/api/products");
      
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useFetch;
