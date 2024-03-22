import './App.css'
import { Box } from '@mui/material'
import Table from './components/Table'
import data from './Data'

function App() {

  return (
    <div className='home'>
      
      <div className='head'>Reunion Table Assignment</div>
      <Table data={data} />
    </div>
  )
}

export default App
