import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../action/actions';

const TableUser = (props) => {
  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUsers);

  useEffect(() => {
    // fetchAllUsers();
    dispatch(fetchAllUsers());
  }, []);

  const handleDeleteUser = (user) => {
    console.log('check ', user);
  };

  return (
    <>
      <hr />
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>User Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listUsers &&
              listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return (
                  <tr key={`users-${index}`}>
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDeleteUser(item)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableUser;
