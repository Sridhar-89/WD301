// import React, { useContext } from "react";
// import { RouterProvider } from "react-router-dom";
// import router from "./routes"
// import { ThemeContext} from "./context/theme";

// const App = () => {
//   const { theme } = useContext(ThemeContext)

// return (
//   <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
//   {theme}
//   <RouterProvider router={router} />
// </div>

// );
//   return (
//     <div className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}>
//       <ProjectsProvider>
//         <RouterProvider router={router} />
//       </ProjectsProvider>
//     </div>
//   )
// }
// export default App;
import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import { ThemeContext } from "./context/theme";

import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";

import "./i18n";
const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <ProjectsProvider>
        <MembersProvider>
          <RouterProvider router={router} />
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
};
export default App;
