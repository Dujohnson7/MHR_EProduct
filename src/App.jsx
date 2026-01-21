import { useRoutes } from 'react-router-dom';
import FullLayout from './layouts/FullLayout';
import Dashboard from './views/dashboard/Dashboard';

function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <FullLayout />,
      children: [
        { path: '/', element: <Dashboard /> },
        { path: '/dashboard', element: <Dashboard /> },
        { path: '/profile', element: <div className="p-4">Profile Page (Coming Soon)</div> }, 
        { path: '/product', element: <div className="p-4">Product Page (Coming Soon)</div> }, 
        { path: '/import', element: <div className="p-4">Import Page (Coming Soon)</div> },
        { path: '/export', element: <div className="p-4">Export Page (Coming Soon)</div> },
        { path: '/stock', element: <div className="p-4">Stock Page (Coming Soon)</div> }, 
        { path: '/reports', element: <div className="p-4">Reports Page (Coming Soon)</div> }, 
      ],
    },
    {
      path: '/auth/login',
      element: <div className="p-4">Login Page (Coming Soon)</div>,
    }
  ]);

  return routes;
}

export default App;
