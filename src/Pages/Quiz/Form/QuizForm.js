import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";

const QuizForm = () => {
  const [formData, setFormData] = useState({
    questionText: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctOption: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/quiz/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Quiz data added successfully!");
        setFormData({
          questionText: "",
          option1: "",
          option2: "",
          option3: "",
          option4: "",
          correctOption: "",
        });
        // You can redirect or perform any other action upon successful submission
      } else {
        console.error("Failed to add quiz data.");
      }
    } catch (error) {
      console.error("Error adding quiz data:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Container
        className="mt-5 mb-5"
        style={{
          boxShadow: "0px 0px 9px -1px #c7c7c7",
          padding: "1rem",
          borderRadius: "10px",
          fontFamily: "monospace",
        }}
      >
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <center>
              {" "}
              <h2>Add Quiz Question</h2>
            </center>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="questionText">
                <Form.Label>Question Text</Form.Label>
                <Form.Control
                  type="text"
                  name="questionText"
                  value={formData.questionText}
                  onChange={handleChange}
                  required
                  style={{ outline: "none", border: "1px solid #12876F" }}
                />
              </Form.Group>

              <Form.Group controlId="option1">
                <Form.Label>Option 1</Form.Label>
                <Form.Control
                  type="text"
                  name="option1"
                  value={formData.option1}
                  onChange={handleChange}
                  required
                  style={{ outline: "none", border: "1px solid #12876F" }}
                />
              </Form.Group>

              <Form.Group controlId="option2">
                <Form.Label>Option 2</Form.Label>
                <Form.Control
                  type="text"
                  name="option2"
                  value={formData.option2}
                  onChange={handleChange}
                  required
                  style={{ outline: "none", border: "1px solid #12876F" }}
                />
              </Form.Group>

              <Form.Group controlId="option3">
                <Form.Label>Option 3</Form.Label>
                <Form.Control
                  type="text"
                  name="option3"
                  value={formData.option3}
                  onChange={handleChange}
                  required
                  style={{ outline: "none", border: "1px solid #12876F" }}
                />
              </Form.Group>

              <Form.Group controlId="option4">
                <Form.Label>Option 4</Form.Label>
                <Form.Control
                  type="text"
                  name="option4"
                  value={formData.option4}
                  onChange={handleChange}
                  required
                  style={{ outline: "none", border: "1px solid #12876F" }}
                />
              </Form.Group>

              <Form.Group controlId="correctOption">
                <Form.Label>Correct Option</Form.Label>
                <Form.Control
                  type="text"
                  name="correctOption"
                  value={formData.correctOption}
                  onChange={handleChange}
                  required
                  style={{ outline: "none", border: "1px solid #12876F" }}
                />
              </Form.Group>

              <Button
                className="mt-2"
                style={{
                  backgroundColor: "rgb(18, 135, 111)",
                  border: "1px solid #12876F",
                }}
                type="submit"
              >
                Add Question
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default QuizForm;
