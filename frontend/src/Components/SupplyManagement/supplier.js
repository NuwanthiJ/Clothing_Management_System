import { Box } from "@mui/material";
import Userform from "./orderNoticeform";
import UsersTable from "./supplierTable";
import Axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    Axios.get("http://localhost:3001/api/users")
      .then((response) => {
        setUsers(response.data.response || []);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  const addUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      material: data.material,
      quantity: data.quantity,
      price: data.price,
      date: data.date,
    };

    Axios.post("http://localhost:3001/api/createuser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
  };

  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      material: data.material,
      quantity: data.quantity,
      price: data.price,
      date: data.date,
    };

    Axios.post("http://localhost:3001/api/updateuser", payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        setIsEdit(false);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const deleteUser = (data) => {
    Axios.post("http://localhost:3001/api/deleteuser", data)
      .then(() => {
        getUsers();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="body1">
      <img
        className="image3"
      ></img>
      <Box
        sx={{
          width: "calc(100% - 100px)",
          margin: "auto",
        }}
      >
        <Userform
          addUser={addUser}
          updateUser={updateUser}
          submitted={submitted}
          data={selectedUser}
          isEdit={isEdit}
        />
        <UsersTable
          rows={users}
          selectedUser={(data) => {
            setSelectedUser(data);
            setIsEdit(true);
          }}
          deleteUser={(data) =>
            window.confirm("Are you Sure?") && deleteUser(data)
          }
        />
      </Box>
    </div>
  );
};

export default Users;