import { Form, Col, Row, Stack } from "react-bootstrap";

const NoteForm = () => {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <Form.Select required></Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Stack>
    </Form>
  );
};

export default NoteForm;
