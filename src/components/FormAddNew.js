import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FormAddNew = () => {
  return (
    <>
      <Container>
        <br />
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address:</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>User name:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="primary">Create</Button>
        </Form>
      </Container>
    </>
  );
};

export default FormAddNew;
