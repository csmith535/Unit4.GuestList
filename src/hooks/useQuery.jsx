import { useState, useEffect } from "react";

const BASE_URL = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2507-CAMERON";
const API = BASE_URL + COHORT;

export default function useQuery(resource) {
  const [data, setData] = useState();

  useEffect(() => {
    const query = async () => {
      try {
        const response = await fetch(API + resource);
        const jsonResponse = await response.json();
        setData(jsonResponse.data);
        console.log(jsonResponse.data);
      } catch (e) {
        console.error(e);
      }
    };
    query();
  }, [resource]);

  return { data };
}
