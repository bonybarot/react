import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './components/MainRoutes';
import { RouterProvider} from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthProvider } from './contexts/Authcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AuthProvider>

    <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>
);


