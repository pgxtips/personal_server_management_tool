import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



import ShellLayout from './components/shell'
import HomePage from './components/home_page'
import SystemPage from './components/system_page'
import ProjectsPage from './components/projects_page'
import FirewallPage from './components/firewall_page'
import NginxPage from './components/nginx_page'
import DockerPage from './components/docker_page'


const router = createBrowserRouter([
  {
    path: "/",
    element: <ShellLayout currentPage={HomePage} />,
  },

  {
    path: "/system",
    element: <ShellLayout currentPage={SystemPage} />,
  },

  {
    path: "/projects",
    element: <ShellLayout currentPage={ProjectsPage} />,
  },

  {
    path: "/firewall",
    element: <ShellLayout currentPage={FirewallPage} />,
  },

  {
    path: "/nginx",
    element: <ShellLayout currentPage={NginxPage} />,
  },
    
  {
    path: "/docker",
    element: <ShellLayout currentPage={DockerPage} />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
