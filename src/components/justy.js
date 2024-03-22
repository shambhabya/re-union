import {
  MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_TablePagination,
  MRT_ToggleDensePaddingButton,
  MRT_ToggleFiltersButton,
  MRT_ToolbarAlertBanner,
  useMaterialReactTable,
  MRT_TableContainer,
  MRT_TableHeadCellFilterContainer,
  MRT_TableHeadCellSortLabel,
} from 'material-react-table';
import { IconButton, Box, Button, Typography, Tooltip, Stack, Paper, RadioGroup, Radio, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import  data  from './makeData';
import { useMemo, useState, useRef } from 'react';



const Example = () => {
  const tableInstanceRef = useRef(null);

  const someEventHandler = () => {
    if (tableInstanceRef.current) {
      // tableInstanceRef.current.goToPage(2); 
      console.log(tableInstanceRef.current);
    }
  };

  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'name.firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
      },
      {
        accessorKey: 'address',
        header: 'Address',
      },
      {
        accessorKey: 'city',
        header: 'City',
      },
      {
        accessorKey: 'state',
        header: 'State',
      },
    ],
    [],
    //end
  );



  const table = useMaterialReactTable({
    columns,
    data,
    initialState: { 
      showGlobalFilter: true,
      
     },
    muiPaginationProps: {
      showRowsPerPage: false,
    },
    paginationDisplayMode: 'pages',
    columnFilterDisplayMode: 'custom',
  enableColumnActions: false,
  
  });

  console.log("");

  return (
    <Box sx={{ border: 'gray 1px solid', padding: '16px' }}>
      {/* Our Custom External Top Toolbar */}
      <Box
        sx={(theme) => ({
          display: 'flex',
          backgroundColor: 'inherit',
          borderRadius: '4px',
          flexDirection: 'row',
          gap: '16px',
          justifyContent: 'right',
          padding: '24px 16px',
          '@media max-width: 768px': {
            flexDirection: 'column',
          },
        })}
      >
        
        <MRT_GlobalFilterTextField table={table} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MRT_ToggleFiltersButton table={table} />
          <MRT_ShowHideColumnsButton table={table} />
        </Box>
      </Box>

     <Box sx={{display: 'flex'}}>

     

      <MRT_TableContainer table={table} ref={tableInstanceRef}/>

      <Paper>
        <Stack>
          {table.getLeafHeaders().map((header)=>(
            <MRT_TableHeadCellFilterContainer 
              key={header.id}
              header={header}
              table={table}
            />
          ))}
        </Stack>
      </Paper>
      <Paper>
        <Stack>
          {table.getLeafHeaders().map((header)=>(
            <MRT_TableHeadCellSortLabel 
              key={header.id}
              header={header}
              table={table}
            />
          ))}
        </Stack>
      </Paper>
      </Box>

      {/* Our Custom Bottom Toolbar */}
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <MRT_TablePagination table={table} />
        </Box>

            <button onClick={someEventHandler}>click</button>
        
      </Box>
    </Box>
  );
};

export default Example;



// {
//     header: 'Id',
//     accessorKey: 'id',
//   },
//   {
//     header: 'Name',
//     accessorKey: 'name',
//   },
//   {
//     header: 'Category',
//     accessorKey: 'category',
//   },
//   {
//     header: 'Subcategory',
//     accessorKey: 'subcategory',
//   },
//   {
//     header: 'Created At',
//     accessorKey: 'createdAt',
//   },
//   {
//     header: 'Updated At',
//     accessorKey: 'updatedAt',
//   },
//   {
//     header: 'Price',
//     accessorKey: 'price',
//   },
//   {
//     header: 'Sale Price',
//     accessorKey: 'sale_price',
//   },