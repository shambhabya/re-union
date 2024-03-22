import React from 'react'
import {Box, Stack } from '@mui/material';

function GroupBy({table}) {
  return (
    

      <Box sx={{border: '1px solid gray', padding: '10px 5px' , backgroundColor: 'rgb(66, 66, 70)'}} width={400}>
              <Box sx={{padding: '10px', fontWeight: '600', fontSize: '20px' , color: 'white'}}>
                Create Groups
              </Box>

              <Stack sx={{padding: '10px'}}>
                {
                    table.getHeaderGroups().map(headerGroup=>(
                      headerGroup.headers.map(header=>(
                        <Box >
                        {header.column.getCanGroup() ? (
                          // If the header can be grouped, let's add a toggle
                          <Box sx={{ padding: '10px', border: '1px solid #bdbdbd', margin: '5px', backgroundColor: 'white'}} key={header.id} display="flex" alignItems="center" height={40}
                            {...{
                              onClick: header.column.getToggleGroupingHandler(),
                              style: {
                                cursor: 'pointer',
                              },
                            }}
                          >
                            {header.column.getIsGrouped()
                              ? `Ungroup (${header.column.getGroupedIndex()}) `
                              : `Group by ${header.id}`}
                          </Box>
                        ) : null}
                      </Box>
                      ))
                    ))
                }
                <Box sx={{ padding: '5px', border: '1px solid #b3e5fc' ,color: 'white' , fontSize: '25px', margin: '5px', "&:hover":{cursor: "pointer"}}} display="flex" alignItems="center" justifyContent="center" height={40} onClick={()=>table.resetGrouping()}>Reset Grouping</Box>
              </Stack>
          </Box>
    
  )
}

export default GroupBy