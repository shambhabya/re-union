import React from 'react'
import { MRT_TableHeadCellFilterContainer } from 'material-react-table'
import {Box, Stack } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function FilterBy({table}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box sx={{border: '1px solid gray', padding: '10px 5px' , backgroundColor: 'rgb(66, 66, 70)'}} width={400}>
              <Box sx={{padding: '10px', fontWeight: '600', fontSize: '20px', color: 'white'}}>
                        Filters
              </Box>
        <Stack sx={{padding: '10px'}}>
          {table.getLeafHeaders().map((header)=>(
            header.id !== 'id' &&
            <Box sx={{ padding: '10px', border: '1px solid #bdbdbd', margin: '10px', backgroundColor: 'white'}} key={header.id}  height={30}>
            {header.id === 'price' && <div>Price</div>}
            {header.id === 'sale_price' && <div>Sale Price</div>}
            <MRT_TableHeadCellFilterContainer 
              key={header.id}
              header={header}
              table={table}
              in
            />
            </Box>
          ))}
          <Box sx={{ padding: '5px', margin: '20px 5px' , border: '1px solid #b3e5fc', color: 'white' , fontSize: '25px',  "&:hover":{cursor: "pointer"}}} display="flex" alignItems="center" justifyContent="center" height={40} onClick={()=>table.resetColumnFilters()}>Clear Filters</Box>
        </Stack>
    </Box>
    </LocalizationProvider>
  )
}

export default FilterBy