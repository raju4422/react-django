import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useEffect, useState } from "react";
function EmployeeList() {
  const [list, setList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    getListData();
  }, []);

  async function getListData() {
    await axios.get(`http://127.0.0.1:8000/api/employees/`).then((res) => {
      setList(res.data);
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
        <Modal.Body>The body</Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default EmployeeList;
