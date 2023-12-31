import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerUser } from '../utils/auth'; // Update with path to registerUser

function RegisterForm({ user, onUpdate }) {
  const [formData, setFormData] = useState({
    name: '',
    uid: user.uid,
    isSeller: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData);
    onUpdate();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" required placeholder="Enter your Name" onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))} />
        {/* <Form.Text className="text-muted">Let other gamers know a little bit about you...</Form.Text> */}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  user: PropTypes.shape({
    uid: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default RegisterForm;
