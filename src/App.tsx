import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>hi</h1>}></Route>
        <Route path="/new" element={<h1>new</h1>}></Route>
        <Route path="/:id">
          <Route index element={<h1>Show</h1>}></Route>
          <Route path="edit" element={<h1>Edit</h1>}></Route>
        </Route>
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </Container>
  );
};

export default App;
