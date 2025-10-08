import { createBrowserRouter } from 'react-router';
import Root from '../Root/Root';
import Home from '../components/Home/Home';
import Apps from '../components/Apps/Apps';
import About from '../components/About/About';




export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('Apps8.json'),
        Component: Home,
      },
      {
        path: 'apps',
        loader: () => fetch('Apps20.json'),
        Component: Apps,
      },
      {
        path: '/apps/:appId',
        loader: () => fetch('Apps20.json'),
        Component:About
      },
    ],
  },
]);