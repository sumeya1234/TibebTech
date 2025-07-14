import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Accordion, Modal, ProgressBar, Form } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext';
import './coursedetail.css';
import { courseData } from "../../data/courseData"

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
      {/* Navigation Header */}
      <div className={`course-detail-header ${darkMode ? 'bg-dark' : 'bg-light'} border-bottom`}>
        <Container className="py-3">
          <div className="d-flex align-items-center">
            <Button 
              variant="outline-secondary" 
              size="sm" 
              onClick={() => navigate('/courses')}
              className="me-3"
            >
              <i className="bi bi-arrow-left me-2"></i>
              Back to Courses
            </Button>
            <div>
              <h1 className="h4 mb-0">{course.title}</h1>
              <small className={`${darkMode ? 'text-light-50' : 'text-muted'}`}>
                By {course.instructor} • {course.duration} • {course.level}
              </small>
            </div>
          </div>
        </Container>
      </div>
      
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