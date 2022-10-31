import React from 'react';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './Contex/AuthProvider/AuthProvider';
import routes from './Router/Routes/Routes';

const App = () => {
  return (
    <div data-theme="light">
      <AuthProvider>
        <RouterProvider router={routes}></RouterProvider>
      </AuthProvider>
    </div>
  );
};

export default App;