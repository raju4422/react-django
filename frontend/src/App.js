import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import EmployeeList from "./Components/Employee/EmployeeList";

function App() {
  return (
    <div className="container ">
      <div className="p-5">
      <EmployeeList />
      </div>
    </div>
  );
}

export default App;
