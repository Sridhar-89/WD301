import React from 'react';
import {  useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/home');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={handleBackToHome} id="backToHomeButton">
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
// import { Link } from "react-router-dom";

// const NotFound = () => {
//   return (
//     <div className="text-center text-3xl font-extrabold">
//       <h1>404 error page not found</h1>
//       <button id="backToHomeButton">
//         <Link to="/" className="ml-6 text-blue-300 hover:text-black">
//           Go Home
//         </Link>
//       </button>
//     </div>
//   );
// };
// export default NotFound;
