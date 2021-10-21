import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Container } from "react-bootstrap";
import UserModal from './UserModal'


function UserList() {
    let history = useHistory();
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        axios
            .get(
                `http://localhost:9090/get/all/users`
            )
            .then((response) => {
                setUsers(response.data);
            })
            .catch((err) => {
                setErrorMessage(
                    "Aucune Offre de stage n'a été validé pour le moment"
                );
            });
    }, []);

    function showUser(user) {
        history.push({
          pathname: "/home" + user.username,
          state: user,
        });
      }

    return <>
        <Container className="cont_principal">
            <Container className="cont_list_centrar">
                <h2 className="cont_title_form">List of users</h2>
                <Container className="cont_list">
                    <p className="cont_title_form">{errorMessage}</p>
                    <ul>
                        {users.map((user) => (
                            <UserModal
                                key={users.indexOf(user)}
                                user={user}
                                onClick={showUser}
                            />
                        ))}
                    </ul>
                </Container>
            </Container>
        </Container></>;
}

export default UserList;
