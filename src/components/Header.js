import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const listUsers = useSelector((state) => state.user.listUsers);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                style={{ marginLeft: '50px' }}
                title={`(${listUsers.length}) Users`}
                id="basic-nav-dropdown"
              >
                {listUsers &&
                  listUsers.length > 0 &&
                  listUsers.map((item, index) => {
                    return (
                      <NavDropdown.Item key={`user-${index}`} href="#">
                        {item.email}
                      </NavDropdown.Item>
                    );
                  })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
