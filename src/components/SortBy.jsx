import React from 'react'
import { MRT_TableHeadCellSortLabel } from 'material-react-table'
import {Box, Stack } from '@mui/material';

function SortBy({table}) {
  return (
    <Box sx={{border: '1px solid gray', padding: '10px 5px' , backgroundColor: 'rgb(66, 66, 70)'}} width={400} >
              <Box sx={{padding: '10px', fontWeight: '600', fontSize: '20px', color: 'white'}}>
                Sorting Options
              </Box>

              <Stack sx={{padding: '10px'}}>
                {table.getLeafHeaders().map((header)=>(
                  <Box sx={{ padding: '5px', border: '1px solid #bdbdbd', margin: '5px', backgroundColor: 'white'}} key={header.id} display="flex" alignItems="center" height={40} >
                  {header.id}
                  <MRT_TableHeadCellSortLabel 
                    key={header.id}
                    header={header}
                    table={table}
                  /> 
                  </Box>
                ))}
                <Box sx={{ padding: '5px', border: '1px solid #b3e5fc', color: 'white' , fontSize: '25px', margin: '5px', "&:hover":{cursor: "pointer"}}} display="flex" alignItems="center" justifyContent="center" height={40} onClick={()=>table.resetSorting()}>Clear Sort</Box>
              </Stack>
          </Box>
  )
}

export default SortBy