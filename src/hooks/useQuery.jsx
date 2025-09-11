import { useState, useEffect } from `react`;

const BASE_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api`;
const COHORT = `/2507-CAMERON`
const API = BASE_URL + COHORT;

export default function useQuery() {
    const [guests, setGuests] = useState();

    useEffect(() => {
        const query = async () => {
            try {
                const response = await fetch(API + `/guests`);
                const jsonResponse = await response.json();
                setGuests(jsonResponse.data);
            } catch (e) {
                console.error(e);
            }
        }
        query();
    }, [])

    return guests;
}