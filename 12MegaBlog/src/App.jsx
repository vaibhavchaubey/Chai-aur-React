import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Header, Footer } from './components';

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // everytime application loads check for if user is login or not and if logged in then get userData
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
        TODO: {/* <Outlet /> */}
        
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
};

export default App;
