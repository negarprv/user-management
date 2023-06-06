import UserManagement from "./components/UserManagement";

//context
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <UserManagement />
    </UserContextProvider>
  );
};

export default App;
