import { useQuery } from "@tanstack/react-query";
import axios from "axios"; 

const fetchUsers = async() => {
    console.log("Inside fn")
    try{
        const response = await axios.get('https://randomuser.me/api/?results=1000')
        return response.data.results;
    }
    catch(error){
        throw error;
    }
}

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });
}

 