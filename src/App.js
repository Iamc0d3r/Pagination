import React, { useState, useEffect } from 'react';
import Users from './components/Users';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    const fetchusers = async () => {
      setLoading(true);
      const res = await axios.get('https://reqres.in/api/users');
      setusers(res.data);
      setLoading(false);
    };

    fetchusers();
  }, []);

  // Get current users
  const indexOfLastuser = currentPage * usersPerPage;
  const indexOfFirstuser = indexOfLastuser - usersPerPage;
  const currentusers = users.slice(indexOfFirstuser, indexOfLastuser);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
      <Users users={currentusers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalusers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
