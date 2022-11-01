import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Contex/AuthProvider/AuthProvider';
import routes from './Router/Routes/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


const App = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div data-theme="light">
      <ToastContainer></ToastContainer>
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </div>
  );
};

export default App;