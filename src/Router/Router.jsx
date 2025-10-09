import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../components/Home/Home';
import Apps from '../components/Apps/Apps';
import About from '../components/About/About';
import Install from '../components/Instaled/Install';
// import Error from '../components/ErrorPage';
import ErrorPage from '../components/ErrorPage';




export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        
        Component: Home,
       
      },
      {
        path: 'apps',
        Component: Apps,
      },
      {
        path: '/apps/:appId',
        Component: About,
      },
      {
        path: 'installation',
        
        Component: Install,
      },
      
      // {
      //   path: '*',
      //   Component: ErrorPage
      // }
    ],
  },
]);