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
import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import TaskDetailsPage from './pages/TaskDetailsPage';
import Signin from './pages/Signin';
import ProtectedRoute from './ProtectedRoute';
import Layout from './Layout';
import NotFound from "./pages/Notfound";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signin" replace />,
  },
  {
    path: 'signin',
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'tasks',
        element: <TaskListPage />,
      },
      {
        path: 'tasks/:id',
        element: <TaskDetailsPage />,
      },
      {
        path: 'notfound',
        element: <NotFound />, // Use the NotFound component
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/notfound" />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
