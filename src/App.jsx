import { Box, Table, Flex,Heading } from '@sparrowengg/twigs-react';
import { Thead, Tbody, Th, Tr, Td } from '@sparrowengg/twigs-react';
import './App.css'
import { useFetchUsers } from './useFetchusers';
import { getCoreRowModel, useReactTable, flexRender } from '@tanstack/react-table';
function App() {

  const {data, isLoading, isError, error} = useFetchUsers();
  

  const columns =[
    
    {
      header: 'First Name',
      accessorKey: 'name.first'
    },
    {
      header: 'Last Name',
      accessorKey: 'name.last'
    },
    {
      header: 'Email',
      accessorKey: 'email'
    },
    {
      header: 'Gender',
      accessorKey: 'gender'
    },
    {
      header: 'City',
      accessorKey: 'location.city'
    },
    {
      header: 'Country',
      accessorKey: 'location.country'
    }

  ]

  const table = useReactTable({data : data ?? [], columns, getCoreRowModel: getCoreRowModel()})

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
            <Thead>
              {table.getHeaderGroups().map(headerGroup => (
                <Tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <Th key={header.id}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {table.getRowModel().rows.map(row => (
                <Tr key={row.id}>
                  {
                    row.getVisibleCells().map(cell=>(
                      <Td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </Td>
                    ))
                  }
                </Tr>
              ))}
            </Tbody>
          </Table>
           
          </Box>
        </Flex>

    </>
  )
}

export default App
