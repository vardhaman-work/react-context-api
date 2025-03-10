import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContectProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="App-header container-fluid">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-4">React Context API</h1>
            <Login />
            <Profile />
          </div>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
