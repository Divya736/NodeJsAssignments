import React from 'react'
import BarChart from './Barchart'
import Linechart from './Linechart'
import PieChart from './Piechart'
function Dashboard() {
  return (
   <div>
     <BarChart />
     <Linechart/>
     <PieChart/>
   </div>
  )
}

export default Dashboard