import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/index';
import DealerPage from './Pages/Dealer/index.jsx';
import Story from './Pages/Story/index';
import Vision from './Pages/Vision/index';
import Team from './Pages/Team/index';
import Trade from './Pages/Tradein';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/Dealer',
      element: <DealerPage />,
    },
    {
      path: '/story',
      element: <Story />,
    },
    {
      path: '/vision',
      element: <Vision />,
    },
    {
      path: '/team',
      element: <Team />,
    },
    {
      path: '/Trade',
      element: <Trade />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
