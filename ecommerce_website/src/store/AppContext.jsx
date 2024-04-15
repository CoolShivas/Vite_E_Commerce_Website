import { Children, createContext } from "react";

const AppContext = createContext();

export default AppContext;

export const ContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ myName: "Shiva Chouhan" }}>
      {children}
    </AppContext.Provider>
  );
};
