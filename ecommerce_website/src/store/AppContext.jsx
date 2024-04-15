import { createContext, useContext } from "react";

const AppContext = createContext();

export default AppContext;

const ContextProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ myName: "Shiva Chouhan" }}>
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider };

const formationOfCustomHook = () => {
  return useContext(AppContext);
};

export { formationOfCustomHook };
