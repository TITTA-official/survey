import React from 'react'

function DashboardActions({role}) {
  return (
    
    <div className="actions grid grid-cols-1 md:grid-cols-3 px-4 md:px-6 gap-5 md:gap-6 place-items-center md:mt-16 mt-14 text-sm text-white">
        <div className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">Take survey</div>
        <div className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">View result</div>
        <div className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">View Learning Material</div>
        <div className={`action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6 `}>View Statistics</div>
        <div className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">Generate Report</div>
        <div className="action bg-teal-600 rounded-full flex items-center justify-center py-14 cursor-pointer w-3/6 text-center px-6">Upload Learning Material</div>
      </div>
  )
}

export default DashboardActions