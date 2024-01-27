// client/src/components/Quiz.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Card, Container, Row, Col, Alert } from "react-bootstrap";
import Countdown from "react-countdown-now";
import { Link, useNavigate } from "react-router-dom";
import "./Quiz.css";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizStarted, setQuizStarted] = useState(true);
  const [timeUp, setTimeUp] = useState(false);
  const [result, setResult] = useState(null);
  const [quizQuit, setQuizQuit] = useState(false);
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(300); // Initial time in seconds
  const navigate = useNavigate();
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          "/quiz/questions"
        );
        setQuestions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);
  useEffect(() => {
    let intervalId;

    if (quizStarted && !timeUp) {
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalId);
            setTimeUp(true);
            handleQuitQuiz(); // Automatically end quiz when time is up
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [quizStarted, timeUp, quizQuit]);

  const handleAnswer = (questionId, selectedOption) => {
    clearInterval(timer);
    setTimer(null);

    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));

    setNextButtonDisabled(currentQuestion === questions.length - 1 || quizQuit);

    const updatedQuestions = questions.map((question) => {
      if (question.id === questionId) {
        return {
          ...question,
          selectedOption,
        };
      }
      return question;
    });

    setQuestions(updatedQuestions);
  };

  const handleQuitQuiz = () => {
    clearInterval(timer);
    setTimer(null);

    if (!quizQuit) {
      setQuizQuit(true);
      calculateResult();
    }

    setTimeUp(true);
  };

  const calculateResult = () => {
    let correctAnswers = 0;
    let wrongAnswers = 0;

    questions.forEach((question) => {
      const userAnswer = answers[question.id];
      if (userAnswer === undefined) {
        // If user didn't select any option, consider it as wrong
        wrongAnswers++;
      } else if (userAnswer === question.correctOption) {
        correctAnswers++;
      } else {
        wrongAnswers++;
      }
    });

    const totalQuestions = questions.length;
    const marksPerQuestion = 1;
    const subtotalMarks = correctAnswers * marksPerQuestion;

    setResult({
      correctAnswers,
      wrongAnswers,
      totalQuestions,
      subtotalMarks,
    });
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed || quizQuit) {
      setTimeUp(true);
      calculateResult();
      return null;
    }

    return (
      <div>
        <h4 className="text-center mt-4">
          Time Remaining: {minutes}:{seconds}
        </h4>
      </div>
    );
  };

  const renderOptions = (options, questionId) => {
    const currentQuestionData = questions[currentQuestion];

    return options.map((option, index) => (
      <Button
        key={index}
        style={{
          backgroundColor:
            questionId in answers
              ? option === currentQuestionData.correctOption
                ? "green"
                : option === answers[questionId]
                ? "red"
                : "gray"
              : "transparent",
          color: "Black",
          border: "1px solid gray",
        }}
        className="mb-2 btn-lg btn-block"
        onClick={() => handleAnswer(questionId, option)}
        disabled={questionId in answers || quizQuit}
      >
        {option}
      </Button>
    ));
  };

  const renderQuestion = () => {
    const currentQuestionData = questions[currentQuestion];

    return (
      <Card className="below-cont card-container mt-5">
        <Card.Body>
          <Card.Title className="heading-question text-center mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </Card.Title>
          <Card.Text className="question-text lead text-center">
            {currentQuestionData.questionText}
          </Card.Text>
          {renderOptions(
            [
              currentQuestionData.option1,
              currentQuestionData.option2,
              currentQuestionData.option3,
              currentQuestionData.option4,
            ],
            currentQuestionData.id
          )}
        </Card.Body>
      </Card>
    );
  };

  const renderResult = () => {
    if (!result) {
      return null;
    }

    return (
      <div className="result-container text-center mt-5">
        <h2 className="mb-4">Quiz Completed!</h2>
        <p className="lead">Correct Answers: {result.correctAnswers}</p>
        <p className="lead">Wrong Answers: {result.wrongAnswers}</p>
        <p className="lead">Total Questions: {result.totalQuestions}</p>
        <p className="lead">Subtotal Marks: {result.subtotalMarks}</p>
        <Link to="/courses" style={{ color: "white" }}>
          {" "}
          <Button className="visit-btn m-3 btn-lg"> Visit Courses</Button>{" "}
        </Link>
      </div>
    );
  };

  return (
    <div className="quiz-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {quizStarted ? (
              <>
                <Alert variant="info" className="time-container ">
                  {quizQuit ? (
                    <h4 className="text-center mt-4">...Quiz Ended...</h4>
                  ) : (
                    <Countdown
                      date={Date.now() + timeRemaining * 1000}
                      renderer={renderer}
                    />
                  )}
                </Alert>

                {currentQuestion < questions.length &&
                  !timeUp &&
                  renderQuestion()}

                {currentQuestion === questions.length || timeUp || quizQuit ? (
                  renderResult()
                ) : (
                  <>
                    <Button
                      onClick={() => setCurrentQuestion((prev) => prev + 1)}
                      className="next-btn m-3 btn-lg"
                      disabled={nextButtonDisabled}
                    >
                      Next Question
                    </Button>

                    <Button
                      onClick={handleQuitQuiz}
                      variant="danger"
                      className="quit-btn m-3 btn-lg"
                    >
                      Quit
                    </Button>
                  </>
                )}
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Quiz;
