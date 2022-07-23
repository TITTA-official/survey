import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import DashboardActions from '../components/DashboardActions'
import DashboardBanner from '../components/DashboardBanner'
import DashboardNavbar from '../components/DashboardNavbar'



function DashboardPage() {
  const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
      refreshToken();
      getUsers();
  }, []);

  const refreshToken = async () => {
    try {
        const response = await axios.get('http://localhost:5000/token');
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
    } catch (error) {
        if (error.response) {
            history.push("/");
        }
        console.log(error)
    }
}

const axiosJWT = axios.create();
 
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
 
    const getUsers = async () => {
        const response = await axiosJWT.get('http://localhost:5000/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setUsers(response.data);
    }


    console.log(users)
  return (
    <div className='relative'>
      <DashboardNavbar name={name}/>
      <DashboardBanner name={name}/>
      <hr className='mt-14 border-[1px] rounded mx-4 border-gray-200 md:max-w-6xl md:mx-auto shadow'/>
      <DashboardActions actions={{}}/>
    </div>
  )
}

export default DashboardPage