import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Accordion, Modal, ProgressBar, Form } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext';
import './coursedetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  
  const [course, setCourse] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [currentModule, setCurrentModule] = useState(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedLessons: [],
    completedQuizzes: [],
    currentModule: 0,
    currentLesson: 0
  });

  // Mock course data with detailed modules, lessons, and quizzes
  const courseData = {
    1: {
      id: 1,
      title: "React.js Complete Course",
      description: "Master React from basics to advanced concepts with hands-on projects and real-world applications.",
      instructor: "Mosh Hamedani",
      duration: "12 hours",
      level: "Beginner",
      rating: 4.8,
      students: 45000,
      videoId: "bMknfKXIFA8",
      modules: [
        {
          id: 1,
          title: "Introduction to React",
          duration: "2 hours",
          lessons: [
            {
              id: 1,
              title: "What is React?",
              duration: "15 min",
              videoId: "bMknfKXIFA8",
              description: "Learn the fundamentals of React and why it's popular.",
              completed: false
            },
            {
              id: 2,
              title: "Setting up Development Environment",
              duration: "20 min", 
              videoId: "bMknfKXIFA8",
              description: "Set up Node.js, npm, and create your first React app.",
              completed: false
            },
            {
              id: 3,
              title: "Your First React Component",
              duration: "25 min",
              videoId: "bMknfKXIFA8", 
              description: "Create and understand React components.",
              completed: false
            }
          ],
          quiz: {
            id: 1,
            title: "React Basics Quiz",
            questions: [
              {
                id: 1,
                question: "What is React?",
                options: ["A JavaScript library", "A database", "A web server", "An operating system"],
                correct: 0
              },
              {
                id: 2,
                question: "What is JSX?",
                options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extension"],
                correct: 0
              },
              {
                id: 3,
                question: "Which method is used to render elements in React?",
                options: ["renderDOM()", "ReactDOM.render()", "React.render()", "DOM.render()"],
                correct: 1
              }
            ]
          }
        },
        {
          id: 2,
          title: "React Components & JSX",
          duration: "3 hours",
          lessons: [
            {
              id: 4,
              title: "Understanding JSX",
              duration: "30 min",
              videoId: "bMknfKXIFA8",
              description: "Deep dive into JSX syntax and best practices.",
              completed: false
            },
            {
              id: 5,
              title: "Component Props",
              duration: "35 min",
              videoId: "bMknfKXIFA8",
              description: "Learn how to pass data between components using props.",
              completed: false
            },
            {
              id: 6,
              title: "Component State",
              duration: "40 min",
              videoId: "bMknfKXIFA8",
              description: "Manage component state with useState hook.",
              completed: false
            }
          ],
          quiz: {
            id: 2,
            title: "Components & JSX Quiz",
            questions: [
              {
                id: 1,
                question: "What are props in React?",
                options: ["Properties passed to components", "Component methods", "State variables", "Event handlers"],
                correct: 0
              },
              {
                id: 2,
                question: "Which hook is used to manage state in functional components?",
                options: ["useEffect", "useState", "useContext", "useReducer"],
                correct: 1
              }
            ]
          }
        },
        {
          id: 3,
          title: "React Hooks",
          duration: "4 hours",
          lessons: [
            {
              id: 7,
              title: "Introduction to Hooks",
              duration: "25 min",
              videoId: "bMknfKXIFA8",
              description: "Understanding React Hooks and their benefits.",
              completed: false
            },
            {
              id: 8,
              title: "useEffect Hook",
              duration: "45 min",
              videoId: "bMknfKXIFA8",
              description: "Handle side effects with useEffect.",
              completed: false
            },
            {
              id: 9,
              title: "Custom Hooks",
              duration: "50 min",
              videoId: "bMknfKXIFA8",
              description: "Create reusable custom hooks.",
              completed: false
            }
          ],
          quiz: {
            id: 3,
            title: "React Hooks Quiz",
            questions: [
              {
                id: 1,
                question: "What is the purpose of useEffect?",
                options: ["Managing state", "Handling side effects", "Creating components", "Styling components"],
                correct: 1
              }
            ]
          }
        }
      ]
    }
    // Add more courses here...
  };

  useEffect(() => {
    const courseInfo = courseData[id];
    if (courseInfo) {
      setCourse(courseInfo);
      // Set first lesson as current
      if (courseInfo.modules[0]?.lessons[0]) {
        setCurrentLesson(courseInfo.modules[0].lessons[0]);
      }
    } else {
      navigate('/courses');
    }
  }, [id, navigate]);

  useEffect(() => {
    if (course) {
      const totalLessons = course.modules.reduce((sum, module) => sum + module.lessons.length, 0);
      const completedLessons = userProgress.completedLessons.length;
      setProgress((completedLessons / totalLessons) * 100);
    }
  }, [course, userProgress]);

  const markLessonComplete = (lessonId) => {
    if (!userProgress.completedLessons.includes(lessonId)) {
      setUserProgress(prev => ({
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId]
      }));
    }
  };

  const startQuiz = (quiz) => {
    setCurrentQuiz(quiz);
    setQuizAnswers({});
    setQuizSubmitted(false);
    setShowQuiz(true);
  };

  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
    const score = currentQuiz.questions.reduce((correct, question) => {
      return quizAnswers[question.id] === question.correct ? correct + 1 : correct;
    }, 0);
    
    if (score >= currentQuiz.questions.length * 0.7) { // 70% passing score
      setUserProgress(prev => ({
        ...prev,
        completedQuizzes: [...prev.completedQuizzes, currentQuiz.id]
      }));
    }
  };

  const navigateToLesson = (moduleIndex, lessonIndex) => {
    const lesson = course.modules[moduleIndex].lessons[lessonIndex];
    setCurrentLesson(lesson);
    setCurrentModule(moduleIndex);
    setCurrentLessonIndex(lessonIndex);
  };

  const nextLesson = () => {
    const currentModuleLessons = course.modules[currentModule].lessons;
    if (currentLessonIndex < currentModuleLessons.length - 1) {
      navigateToLesson(currentModule, currentLessonIndex + 1);
    } else if (currentModule < course.modules.length - 1) {
      navigateToLesson(currentModule + 1, 0);
    }
  };

  const previousLesson = () => {
    if (currentLessonIndex > 0) {
      navigateToLesson(currentModule, currentLessonIndex - 1);
    } else if (currentModule > 0) {
      const prevModule = currentModule - 1;
      const prevModuleLessons = course.modules[prevModule].lessons;
      navigateToLesson(prevModule, prevModuleLessons.length - 1);
    }
  };

  if (!course) {
    return (
      <Container className="py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Container>
    );
  }

  return (
    <div className={`course-detail-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Container fluid className="p-0">
        <Row className="g-0">
          {/* Main Content Area */}
          <Col lg={8}>
            {/* Video Player Section */}
            <div className="video-player-section">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="500"
                  src={`https://www.youtube.com/embed/${currentLesson?.videoId}?autoplay=0&rel=0`}
                  title={currentLesson?.title}
                  frameBorder="0"
                  allowFullScreen
                  className="course-video"
                ></iframe>
              </div>
              
              {/* Lesson Info */}
              <div className={`lesson-info p-4 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <h2 className="h4 mb-2">{currentLesson?.title}</h2>
                    <p className="text-muted mb-0">{currentLesson?.description}</p>
                  </div>
                  <Badge bg="primary">{currentLesson?.duration}</Badge>
                </div>
                
                {/* Lesson Navigation */}
                <div className="d-flex justify-content-between align-items-center">
                  <Button 
                    variant="outline-secondary"
                    onClick={previousLesson}
                    disabled={currentModule === 0 && currentLessonIndex === 0}
                  >
                    <i className="bi bi-chevron-left me-2"></i>
                    Previous
                  </Button>
                  
                  <Button
                    variant={userProgress.completedLessons.includes(currentLesson?.id) ? "success" : "primary"}
                    onClick={() => markLessonComplete(currentLesson?.id)}
                  >
                    {userProgress.completedLessons.includes(currentLesson?.id) ? (
                      <>
                        <i className="bi bi-check-circle me-2"></i>
                        Completed
                      </>
                    ) : (
                      <>
                        <i className="bi bi-check me-2"></i>
                        Mark Complete
                      </>
                    )}
                  </Button>
                  
                  <Button 
                    variant="outline-secondary"
                    onClick={nextLesson}
                    disabled={
                      currentModule === course.modules.length - 1 && 
                      currentLessonIndex === course.modules[currentModule].lessons.length - 1
                    }
                  >
                    Next
                    <i className="bi bi-chevron-right ms-2"></i>
                  </Button>
                </div>
              </div>
            </div>
          </Col>

          {/* Sidebar - Course Content */}
          <Col lg={4}>
            <div className={`course-sidebar ${darkMode ? 'bg-secondary' : 'bg-light'} h-100`}>
              <div className="p-4">
                {/* Course Header */}
                <div className="course-header mb-4">
                  <h3 className="h5 mb-2">{course.title}</h3>
                  <div className="progress-section mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="small">Course Progress</span>
                      <span className="small fw-bold">{Math.round(progress)}%</span>
                    </div>
                    <ProgressBar 
                      now={progress} 
                      variant="primary" 
                      height={8}
                      className="custom-progress"
                    />
                  </div>
                  <div className="course-stats small text-muted">
                    <span>
                      <i className="bi bi-people me-1"></i>
                      {course.students.toLocaleString()} students
                    </span>
                    <span className="ms-3">
                      <i className="bi bi-star-fill me-1"></i>
                      {course.rating}
                    </span>
                  </div>
                </div>

                {/* Course Modules */}
                <div className="course-modules">
                  <h6 className="mb-3">Course Content</h6>
                  <Accordion defaultActiveKey="0" flush>
                    {course.modules.map((module, moduleIndex) => (
                      <Accordion.Item 
                        key={module.id} 
                        eventKey={moduleIndex.toString()}
                        className={`module-item ${darkMode ? 'bg-dark border-secondary' : ''}`}
                      >
                        <Accordion.Header className={darkMode ? 'text-light' : ''}>
                          <div className="d-flex justify-content-between align-items-center w-100 me-3">
                            <span className="fw-semibold">{module.title}</span>
                            <Badge bg="secondary" className="ms-2">{module.duration}</Badge>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body className={darkMode ? 'bg-dark text-light' : ''}>
                          {/* Lessons */}
                          <div className="lessons-list mb-3">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div
                                key={lesson.id}
                                className={`lesson-item p-2 rounded mb-2 cursor-pointer ${
                                  currentLesson?.id === lesson.id 
                                    ? 'bg-primary text-white' 
                                    : darkMode 
                                      ? 'bg-secondary text-light hover-bg-light' 
                                      : 'bg-white hover-bg-light'
                                }`}
                                onClick={() => navigateToLesson(moduleIndex, lessonIndex)}
                              >
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="d-flex align-items-center">
                                    {userProgress.completedLessons.includes(lesson.id) ? (
                                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                                    ) : (
                                      <i className="bi bi-play-circle me-2"></i>
                                    )}
                                    <span className="small">{lesson.title}</span>
                                  </div>
                                  <span className="small opacity-75">{lesson.duration}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Module Quiz */}
                          {module.quiz && (
                            <div className="module-quiz">
                              <Button
                                variant={userProgress.completedQuizzes.includes(module.quiz.id) ? "success" : "warning"}
                                size="sm"
                                className="w-100"
                                onClick={() => startQuiz(module.quiz)}
                              >
                                {userProgress.completedQuizzes.includes(module.quiz.id) ? (
                                  <>
                                    <i className="bi bi-trophy me-2"></i>
                                    Quiz Completed
                                  </>
                                ) : (
                                  <>
                                    <i className="bi bi-question-circle me-2"></i>
                                    Take Quiz
                                  </>
                                )}
                              </Button>
                            </div>
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Quiz Modal */}
      <Modal 
        show={showQuiz} 
        onHide={() => setShowQuiz(false)} 
        size="lg"
        className={darkMode ? 'dark-mode' : ''}
      >
        <Modal.Header closeButton className={darkMode ? 'bg-dark text-light border-secondary' : ''}>
          <Modal.Title>{currentQuiz?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={darkMode ? 'bg-dark text-light' : ''}>
          {currentQuiz && (
            <Form>
              {currentQuiz.questions.map((question, index) => (
                <div key={question.id} className="mb-4">
                  <h6 className="mb-3">
                    {index + 1}. {question.question}
                  </h6>
                  {question.options.map((option, optionIndex) => (
                    <Form.Check
                      key={optionIndex}
                      type="radio"
                      name={`question-${question.id}`}
                      id={`q${question.id}-option${optionIndex}`}
                      label={option}
                      onChange={() => handleQuizAnswer(question.id, optionIndex)}
                      disabled={quizSubmitted}
                      className={`mb-2 ${
                        quizSubmitted
                          ? optionIndex === question.correct
                            ? 'text-success fw-bold'
                            : quizAnswers[question.id] === optionIndex && optionIndex !== question.correct
                              ? 'text-danger'
                              : ''
                          : ''
                      }`}
                    />
                  ))}
                  {quizSubmitted && (
                    <div className="mt-2">
                      {quizAnswers[question.id] === question.correct ? (
                        <small className="text-success">
                          <i className="bi bi-check-circle me-1"></i>
                          Correct!
                        </small>
                      ) : (
                        <small className="text-danger">
                          <i className="bi bi-x-circle me-1"></i>
                          Incorrect. The correct answer is: {question.options[question.correct]}
                        </small>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer className={darkMode ? 'bg-dark border-secondary' : ''}>
          {!quizSubmitted ? (
            <Button 
              variant="primary" 
              onClick={submitQuiz}
              disabled={Object.keys(quizAnswers).length < currentQuiz?.questions.length}
            >
              Submit Quiz
            </Button>
          ) : (
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>
                Score: {currentQuiz ? Math.round((Object.keys(quizAnswers).filter(qId => 
                  quizAnswers[qId] === currentQuiz.questions.find(q => q.id == qId)?.correct
                ).length / currentQuiz.questions.length) * 100) : 0}%
              </div>
              <Button variant="secondary" onClick={() => setShowQuiz(false)}>
                Close
              </Button>
            </div>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CourseDetail;