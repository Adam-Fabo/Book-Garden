import axios from "axios";
import { createAPI } from "../../../api";
import { Button, ButtonLink } from "../../../Components/Ui/Button";
import { createAdminRoute } from "../../../routes";
import {
  ChevronLeftIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { Alert } from "../../../Components/Ui/Alert";
import {
  Table,
  TableCol,
  TableColHead,
  TableRow,
  Tbody,
  Thead,
} from "../../../Components/Ui/Table";
import { useEffect, useState } from "react";
import auth from "../../../auth";

export const UserListModule = () => {
  const [alert, setAlert] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(createAPI("person"))
      .then((response) => setUsers(response.data.data))
      .catch((error) => console.log(error));
  }, [alert]);

  function deletePerson(id) {
    axios
      .delete(createAPI("person/:id", { id }))
      .then((response) => {
        if (response.data.status === "success") {
          window.scrollTo(0, 0);
          setAlert({
            message: "Person Deleted",
            type: "success",
          });
        } else {
          window.scrollTo(0, 0);
          setAlert({
            message: response.data.message,
            type: "danger",
          });
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="flex justify-between">
        <ButtonLink
          to={createAdminRoute("Dashboard")}
          variant="secondary"
          icon={<ChevronLeftIcon className="h-6 mr-1" />}
          text="Back"
        />
        <ButtonLink
          to={createAdminRoute("UserCreate")}
          variant="green"
          icon={<PlusIcon className="h-6 mr-1" />}
          text="New User"
        />
      </div>
      <div className="Content mt-4">
        {alert && (
          <Alert
            message={alert.message}
            type={alert.type}
            onClick={() => setAlert(null)}
          />
        )}
        <h1 className="Content-Title">Users</h1>

        <div className="overflow-auto">
          <Table>
            <Thead>
              <TableRow>
                <TableColHead>Username</TableColHead>
                <TableColHead>Full Name</TableColHead>
                <TableColHead>Type</TableColHead>
                <TableColHead>Employee</TableColHead>
              </TableRow>
            </Thead>
            <Tbody>
              {users.map((user, index) => (
                <TableRow key={index} index={index} striped>
                  <TableCol>{user.username}</TableCol>
                  <TableCol>{user.name + " " + user.surname}</TableCol>
                  <TableCol>{auth.convertToUserType(user.user_type)}</TableCol>
                  <TableCol>
                    <div className="flex items-center gap-2">
                      <ButtonLink
                        to={createAdminRoute("UserEdit", { id: user.id })}
                        variant="yellow"
                        icon={<PencilIcon className="h-6 mr-1" />}
                        text="Edit"
                        showText="md"
                      />
                      <Button
                        type="button"
                        variant="red"
                        icon={<TrashIcon className="h-6 mr-1" />}
                        text="Delete"
                        showText="md"
                        onClick={() => deletePerson(user.id)}
                      />
                    </div>
                  </TableCol>
                </TableRow>
              ))}
            </Tbody>
          </Table>
        </div>
      </div>
    </>
  );
};
