// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
// } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import TaskListPage from "./pages/TaskListPage";
// import TaskDetailsPage from "./pages/TaskDetailsPage";
// import Signin from "./pages/Signin";
// import ProtectedRoute from "./ProtectedRoute";
// import Layout from "./Layout";
// import NotFound from "./NotFound";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to="/signin" replace />,
//   },
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     element: (
//       <ProtectedRoute>
//         <Layout />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "home",
//         element: <HomePage />,
//       },
//       {
//         path: "tasks",
//         element: <TaskListPage />,
//       },
//       {
//         path: "tasks/:id",
//         element: <TaskDetailsPage />,
//       },
//       {
//         path: 'notfound', // Define the /notfound route
//         element: <NotFound/>, // Use the NotFoundPage component
//       },
//     ],
//   },
//   {
//     path: '*',
//     element: <Navigate to="/notfound" />,
//   },
// ]);

// const App = () => {
//   return <RouterProvider router={router} />;
// };

// export default App;
// import React from 'react';
// import Form from './Form';
// import ReactPlayground from './ReactPlayground';

// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
// } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import TaskListPage from './pages/TaskListPage';
// import TaskDetailsPage from './pages/TaskDetailsPage';
// import Signin from './pages/Signin';
// import ProtectedRoute from './ProtectedRoute';
// import Layout from './Layout';
// import NotFound from "./pages/Notfound";
// import Header from './components/Header';
// import { Routes } from 'react-router-dom';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Notfound from "./pages/Notfound";
// import Signup from './pages/signup/index';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Signup />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/notfound",
//     element: <Notfound />,
//   },
//   {
//     path: "*",
//     element: <Notfound />,
//   }
// ]);

// const App = () => {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Navigate to="/signin" replace />,
//   },
//   {
//     path: 'signin',
//     element: <Signin />,
//   },
//   {
//     element: (
//       <ProtectedRoute>
//         <Layout />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: 'home',
//         element: <HomePage />,
//       },
//       {
//         path: 'tasks',
//         element: <TaskListPage />,
//       },
//       {
//         path: 'tasks/:id',
//         element: <TaskDetailsPage />,
//       },
//       {
//         path: 'notfound',
//         element: <NotFound />, // Use the NotFound component
//       },
//     ],
//   },
//   {
//     path: '*',
//     element: <Navigate to="/notfound" />,
//   },
// ]);

// const App: React.FC = () => {
//   return <RouterProvider router={router} />;
// };
// const App = () => {
//   return (
//     <>
//       <ReactPlayground />
//       <RouterProvider router={router} />
//     </>
//   );
// }
// function App() {
//   return (
//     <div>
//       <Header />
//       <Form />
//       {/* <ReactPlayground />
//      <RouterProvider router={router} /> */}
//     </div>
//   );
// }

// export default App;

// export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
// First, we've to import the Signin component
import Signin from "./pages/signin";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/notfound",
    element: <Notfound />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
