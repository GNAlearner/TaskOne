import { useEffect, useContext } from "react";
import Graph from "./components/Graph";
import NavBar from "./components/NavBar";
import Table from "./components/Table";
import MovePage from "./components/MovePage";
import UsersContext from "./Context/UsersContext";

function App() {
  const context = useContext(UsersContext);
  const { pageNo, fetchData, userData } = context;

  useEffect(()=> {
    fetchData(pageNo);
  },[pageNo])

  return (
    <div>
      <NavBar/>
      {userData?<div>
      <Graph/>
      <Table/>
      <MovePage/>
      </div>:<h6>Loading the Data</h6>}
    </div>
  );
}

export default App;
