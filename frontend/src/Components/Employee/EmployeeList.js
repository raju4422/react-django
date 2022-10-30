import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useEffect, useState } from "react";
function EmployeeList() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "raju",
      department: "software",
      salary: "10000",
    },
  ]);
  const [isUpdate, setIsUpdate] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [inputField, setInputField] = useState({
    name: "",
    department: "",
    salary: "",
  });

  const inputsHandler = (e) => {
    setInputField((inputField) => ({
      ...inputField,
      [e.target.name]: e.target.value,
    }));
  };

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  const saveData = () => {
    const article = {
      name: inputField.name,
      department: inputField.department,
      salary: inputField.salary,
    };
    axios
      .post("http://127.0.0.1:8000/api/employees/", article)
      .then((response) => {
        setIsUpdate(1);
      });
  };
  useEffect(() => {
    getListData();
  }, [isUpdate]);

  function getListData() {
    axios.get(`http://127.0.0.1:8000/api/employees/`).then((res) => {
      console.log(res);
      setList(res.data.data);
    });
  }

  return (
    <div>
      <div>
        <div className="d-flex flex-row-reverse">
          <div className="p-2 ">
            <Button className="btn btn-primary btn-lg" onClick={showModal}>
              Add
            </Button>
          </div>
          {/* <div className="p-2 border">Flex item 2</div>
          <div className="p-2 border">Flex item 3</div> */}
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.department}</td>
              <td>{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Hi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form4Example1"
                name="name"
                className="form-control"
                onChange={inputsHandler}
                value={inputField.name}
                placeholder="Enter Name"
              />
            </div>
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form4Example2"
                className="form-control"
                name="department"
                onChange={inputsHandler}
                value={inputField.department}
                placeholder="Enter Department"
              />
            </div>
            <div className="form-outline mb-4">
              <input
                type="text"
                className="form-control"
                id=""
                name="salary"
                onChange={inputsHandler}
                value={inputField.salary}
                placeholder="Enter Salary"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary btn-block mb-4"
            onClick={hideModal}
          >
            Cancel
          </button>
          <button className="btn btn-primary btn-block mb-4" onClick={saveData}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default EmployeeList;
