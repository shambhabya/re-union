import {
  MRT_GlobalFilterTextField,
  MRT_ShowHideColumnsButton,
  MRT_TablePagination,
  MRT_ToggleFiltersButton,
  useMaterialReactTable,
  MRT_TableContainer,
} from 'material-react-table';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Box } from '@mui/material';
import { useMemo, useState } from 'react';
import GroupBy from './GroupBy';
import SortBy from './SortBy';
import FilterBy from './FilterBy';



const Table = ({data}) => {

  const columns = useMemo(

    () => [{
      header: 'Id',
      accessorKey: 'id',
      enableGrouping: false,
    },
    {
      header: 'Name',
      accessorKey: 'name',
      enableGrouping: false,
      filterVariant: 'text', 
    },
    {
      header: 'Category',
      accessorKey: 'category',
      filterVariant: 'multi-select',
    },
    {
      header: 'Subcategory',
      accessorKey: 'subcategory',
      filterVariant: 'multi-select',
    },
    {
      header: 'Created At',
      accessorKey: 'createdAt',
      enableGrouping: false, 
      accessorFn: (originalRow) => new Date(originalRow.createdAt), // Parse the date string to a Date object
      filterVariant: 'date-range',
      Cell: ({ cell }) =>
        `${cell.getValue().toLocaleDateString()} ${cell
            .getValue()
            .toLocaleTimeString()}`, // Convert the date to a localized date string
    },
    
    {
      header: 'Updated At',
      accessorKey: 'updatedAt',
      enableGrouping: false, 
      accessorFn: (originalRow) => new Date(originalRow.updatedAt), 
      filterVariant: 'date-range',
      Cell: ({ cell }) =>
        `${cell.getValue().toLocaleDateString()} ${cell
            .getValue()
            .toLocaleTimeString()}`,
    },
    {
      header: 'Price',
      accessorKey: 'price',
      enableGrouping: false, 
      filterVariant: 'range-slider',
      filterFn: 'betweenInclusive',
    },
    {
      header: 'Sale Price',
      accessorKey: 'sale_price',
      enableGrouping: false, 
      filterVariant: 'range-slider',
      filterFn: 'betweenInclusive',
    },
    ],
    [],
    //end
  );

  const [groupedColumnMode, setGroupedColumnMode] = useState('reorder');

  const table = useMaterialReactTable({
    columns,
    data,
    initialState: { 
      showGlobalFilter: true,
      
     },
     groupedColumnMode,
    muiPaginationProps: {
      showRowsPerPage: false,
    },
    paginationDisplayMode: 'pages',
    columnFilterDisplayMode: 'custom', 
    enableFacetedValues: true,
  enableColumnActions: false,
  enableGrouping: true,

  

  
  
  });

  const [groupedByVisible, setGroupedByVisible] = useState(false);
  const [filteredByVisible, setFilteredByVisible] = useState(false);
  const [sortedByVisible, setSortedByVisible] = useState(false);

  const handleGroupByToggle = () => {
    setGroupedByVisible(!groupedByVisible);
    setFilteredByVisible(false);
    setSortedByVisible(false);
  };

  const handleFilterByToggle = () => {
    setFilteredByVisible(!filteredByVisible);
    setGroupedByVisible(false);
    setSortedByVisible(false);
  };

  const handleSortByToggle = () => {
    setSortedByVisible(!sortedByVisible);
    setGroupedByVisible(false);
    setFilteredByVisible(false);
  };


  return (
    <Box sx={{ border: 'gray 1px solid', padding: '16px' }}>
      {/* Our Custom External Top Toolbar */}
      <Box
        sx={() => ({
          display: 'flex',
          backgroundColor: 'white',
          borderRadius: '4px',
          flexDirection: 'row',
          color: 'white',
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
         <Box sx={{ '&:hover' : {cursor : 'pointer'}, padding: '8px', borderRadius: '50%', fontSize: '1.5rem'}}><VisibilityIcon onClick={handleGroupByToggle}  /></Box> 
          <MRT_ToggleFiltersButton table={table} onClick={handleFilterByToggle} />
        <Box sx={{ '&:hover' : {cursor : 'pointer'}, padding: '8px', borderRadius: '50%', fontSize: '1.5rem'}}> <SwapVertIcon onClick={handleSortByToggle} /></Box>
          <MRT_ShowHideColumnsButton table={table} />
        </Box>

      </Box>

     <Box sx={{display: 'flex'}}>

     

      <MRT_TableContainer table={table} />

      {groupedByVisible && <GroupBy table={table} />}
        {filteredByVisible && <FilterBy table={table} />}
        {sortedByVisible && <SortBy table={table} />}


      </Box>



      {/* Our Custom Bottom Toolbar */}
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <MRT_TablePagination table={table} />
        </Box>

          
        
      </Box>
    </Box>
  );
};

export default Table;