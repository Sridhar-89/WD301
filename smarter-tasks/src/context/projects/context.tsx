// First, I'll import the createContext, useContext and useReducer from React


import React, { createContext, useContext, useReducer } from "react";

// I'll import the reducer, initialState, ProjectsState and ProjectsActions 
// from the reducer.ts file

import { reducer, initialState, ProjectsState, ProjectsActions } from "./reducer";
type ProjectsDispatch = React.Dispatch<ProjectsActions>;
export const useProjectsState = () => useContext(ProjectsStateContext);
export const useProjectsDispatch = () => useContext(ProjectsDispatchContext);

// Next, using createContext function, we will create a context for
// `Projects State` object. The shape of this new context object is 
// ProjectsState and here I've set the default value to undefined.

const ProjectsStateContext = createContext<ProjectsState | undefined>(undefined);

// Next, I'll define our ProjectsProvider component, and make this 
// ProjectsStateContext available using context Provider.

const ProjectsDispatchContext = createContext<ProjectsDispatch | undefined>(undefined);
export const ProjectsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Next, I'll pass the `dispatch` object as value of this ProjectsDispatchContext.

  return (
    <ProjectsStateContext.Provider value={state}>
      <ProjectsDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectsDispatchContext.Provider>
    </ProjectsStateContext.Provider>
  );
};