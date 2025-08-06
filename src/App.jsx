import { Box, Table, Flex,Heading } from '@sparrowengg/twigs-react';
import { Thead, Tbody, Th, Tr, Td } from '@sparrowengg/twigs-react';
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

function App() {


  const fetchUsers = async() => {
    const response = await axios.get('https://randomuser.me/api/?results=1000')
    return response.data.results;
  }

   const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime : 10000
  });

  if (isLoading) return <div style={{ textAlign: "center" }}>Loading...</div>;
  if (isError) return <div style={{ textAlign: "center", color: "red" }}>Error: {error.message}</div>;

 

  return (
    <>
        <Heading size="h4" css={{textAlign:"center", padding:"10px", color:"$primary700"}}>Employee Records</Heading>
        <Flex justifyContent="center" alignItems="center">
          <Box css={{
            tr:{
             th:{
                color: "$primary500",
                fontSize:"20px"
              } ,
            td:{
                fontSize: "16px"
              }
            }
          }}> 
            <Table>
            <Thead css={{
                position: "sticky",
                top : "0px",
                backgroundColor : "white"
              }}> 
              <Tr >
                <Th>Id</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                <Th>Gender</Th>
                <Th>City</Th>
                <Th>Country</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((user, index) =>
                <Tr key={index}>
                  <Td>{index+1}</Td>
                  <Td>{user.name.first}</Td>
                  <Td>{user.name.last}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.gender}</Td>
                  <Td>{user.location.city}</Td>
                  <Td>{user.location.country}</Td>
                </Tr>
              )}
            </Tbody>
          </Table>
          </Box>
        </Flex>

    </>
  )
}

export default App
