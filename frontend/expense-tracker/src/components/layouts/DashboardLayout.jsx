import React from 'react'
// import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from "../../context/UserContext";
import { API_PATHS } from '../../utils/apiPaths';
// import axiosInstance from '../../utils/axioInstance';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

const DashboardLayout = ({ children, activeMenu }) => {
    const { user } = useContext(UserContext);

//     useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const dashboardResponse = await axiosInstance.get(API_PATHS.DASHBOARD.GET_DATA);
//             console.log("Dashboard data:", dashboardResponse.data);
            
//             const incomeResponse = await axiosInstance.get(API_PATHS.INCOME.GET_ALL_INCOME);
//             console.log("Income data:", incomeResponse.data);
            
//             const expenseResponse = await axiosInstance.get(API_PATHS.EXPENSES.GET_ALL_EXPENSE);
//             console.log("Expense data:", expenseResponse.data);
//         } catch (error) {
//             console.error("Fetch error:", error);
//         }
//     };
    
//     fetchData();
// }, []);

  return (
    <div className=''>
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className='flex' >
            <div className='max-[1000px]:hidden'>
                <SideMenu activeMenu={activeMenu} />
            </div>
            <div className='grow mx-5'>{children}</div>
        </div>    
      )}
    </div>
  )
}

export default DashboardLayout
