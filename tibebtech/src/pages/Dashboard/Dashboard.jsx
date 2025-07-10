import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ProgressBar, Badge, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './dashboard.css';

const Dashboard = () => {
  const { darkMode } = useTheme();
  const [userStats, setUserStats] = useState({
    totalCourses: 5,
    completedCourses: 2,
    totalLessons: 45,
    completedLessons: 23,
    totalQuizzes: 12,
    passedQuizzes: 8,
    studyStreak: 7,
    totalStudyTime: 24
  });

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', offset: 120 });
  }, []);

  // Mock enrolled courses data
  const enrolledCourses = [
    {
      id: 1,
      title: "React.js Complete Course",
      instructor: "Mosh Hamedani",
      progress: 75,
      nextLesson: "useEffect Hook",
      totalLessons: 45,
      completedLessons: 34,
      estimatedTime: "2 hours left",
      lastAccessed: "2 hours ago",
      category: "Development"
    },
    {
      id: 2,
      title: "JavaScript ES6+ Masterclass",
      instructor: "Brad Traversy",
      progress: 100,
      nextLesson: "Course Completed",
      totalLessons: 38,
      completedLessons: 38,
      estimatedTime: "Completed",
      lastAccessed: "1 day ago",
      category: "Development"
    },
    {
      id: 3,
      title: "CSS Grid & Flexbox Layout",
      instructor: "Dev Ed",
      progress: 45,
      nextLesson: "CSS Grid Properties",
      totalLessons: 24,
      completedLessons: 11,
      estimatedTime: "3 hours left",
      lastAccessed: "3 days ago",
      category: "Design"
    },
    {
      id: 4,
      title: "Python Programming Fundamentals",
      instructor: "Programming with Mosh",
      progress: 20,
      nextLesson: "Variables and Data Types",
      totalLessons: 85,
      completedLessons: 17,
      estimatedTime: "18 hours left",
      lastAccessed: "1 week ago",
      category: "Development"
    },
    {
      id: 5,
      title: "UI/UX Design Principles",
      instructor: "AJ&Smart",
      progress: 60,
      nextLesson: "User Research Methods",
      totalLessons: 42,
      completedLessons: 25,
      estimatedTime: "4 hours left",
      lastAccessed: "2 days ago",
      category: "Design"
    }
  ];

  // Mock achievements data
  const achievements = [
    {
      id: 1,
      title: "First Course Completed",
      description: "Completed your first course",
      icon: "bi-trophy-fill",
      color: "warning",
      unlocked: true,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Week Warrior",
      description: "7-day study streak",
      icon: "bi-fire",
      color: "danger",
      unlocked: true,
      date: "2024-02-10"
    },
    {
      id: 3,
      title: "Quiz Master",
      description: "Passed 10 quizzes",
      icon: "bi-patch-check-fill",
      color: "success",
      unlocked: false,
      date: null
    },
    {
      id: 4,
      title: "Speed Learner",
      description: "Complete 5 courses",
      icon: "bi-lightning-charge-fill",
      color: "info",
      unlocked: false,
      date: null
    }
  ];

  const getProgressColor = (progress) => {
    if (progress === 100) return 'success';
    if (progress >= 75) return 'info';
    if (progress >= 50) return 'warning';
    return 'primary';
  };

  const formatStudyTime = (hours) => {
    if (hours < 1) return `${Math.round(hours * 60)} minutes`;
    return `${hours} hours`;
  };

  return (
    <div className={`dashboard-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Container className="py-5">
        {/* Welcome Section */}
        <div className="welcome-section mb-5" data-aos="fade-up">
          <Row className="align-items-center">
            <Col lg={8}>
              <h1 className="fw-bold mb-3">Welcome back, Student! 👋</h1>
              <p className="lead text-muted mb-0">
                Continue your learning journey. You're making great progress!
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <div className="streak-counter">
                <div className="streak-flame">
                  <i className="bi bi-fire text-warning"></i>
                </div>
                <div>
                  <h3 className="fw-bold text-warning mb-0">{userStats.studyStreak}</h3>
                  <small className="text-muted">Day Streak</small>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        {/* Quick Stats */}
        <Row className="mb-5">
          <Col xs={6} md={3}>
            <Card className={`stat-card text-center ${darkMode ? 'bg-dark border-secondary' : ''}`} data-aos="fade-up" data-aos-delay="100">
              <Card.Body>
                <div className="stat-icon text-primary mb-2">
                  <i className="bi bi-book-fill"></i>
                </div>
                <h3 className="fw-bold">{userStats.completedCourses}</h3>
                <small className="text-muted">Courses Completed</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className={`stat-card text-center ${darkMode ? 'bg-dark border-secondary' : ''}`} data-aos="fade-up" data-aos-delay="200">
              <Card.Body>
                <div className="stat-icon text-success mb-2">
                  <i className="bi bi-play-circle-fill"></i>
                </div>
                <h3 className="fw-bold">{userStats.completedLessons}</h3>
                <small className="text-muted">Lessons Watched</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className={`stat-card text-center ${darkMode ? 'bg-dark border-secondary' : ''}`} data-aos="fade-up" data-aos-delay="300">
              <Card.Body>
                <div className="stat-icon text-warning mb-2">
                  <i className="bi bi-patch-check-fill"></i>
                </div>
                <h3 className="fw-bold">{userStats.passedQuizzes}</h3>
                <small className="text-muted">Quizzes Passed</small>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card className={`stat-card text-center ${darkMode ? 'bg-dark border-secondary' : ''}`} data-aos="fade-up" data-aos-delay="400">
              <Card.Body>
                <div className="stat-icon text-info mb-2">
                  <i className="bi bi-clock-fill"></i>
                </div>
                <h3 className="fw-bold">{userStats.totalStudyTime}h</h3>
                <small className="text-muted">Study Time</small>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Enrolled Courses */}
          <Col lg={8}>
            <Card className={`courses-section mb-4 ${darkMode ? 'bg-dark border-secondary' : ''}`} data-aos="fade-up" data-aos-delay="500">
              <Card.Header className={`border-0 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="mb-0 fw-bold">
                    <i className="bi bi-collection-play me-2"></i>
                    My Courses
                  </h5>
                  <Link to="/courses" className="btn btn-outline-primary btn-sm">
                    Browse More
                  </Link>
                </div>
              </Card.Header>
              <Card.Body className="p-0">
                {enrolledCourses.map((course, index) => (
                  <div key={course.id} className={`course-item p-4 ${index !== enrolledCourses.length - 1 ? 'border-bottom' : ''}`}>
                    <Row className="align-items-center">
                      <Col md={8}>
                        <div className="course-info">
                          <div className="d-flex align-items-center mb-2">
                            <h6 className="course-title mb-0 me-2">{course.title}</h6>
                            <Badge bg={course.progress === 100 ? 'success' : 'secondary'} className="course-status">
                              {course.progress === 100 ? 'Completed' : 'In Progress'}
                            </Badge>
                          </div>
                          <p className="text-muted small mb-2">
                            <i className="bi bi-person-circle me-1"></i>
                            {course.instructor}
                          </p>
                          <div className="progress-info mb-2">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <span className="small text-muted">Progress</span>
                              <span className="small fw-bold">{course.progress}%</span>
                            </div>
                            <ProgressBar 
                              now={course.progress} 
                              variant={getProgressColor(course.progress)}
                              height={6}
                            />
                          </div>
                          <div className="course-meta">
                            <small className="text-muted">
                              <i className="bi bi-play-fill me-1"></i>
                              {course.completedLessons}/{course.totalLessons} lessons
                            </small>
                            <small className="text-muted ms-3">
                              <i className="bi bi-clock me-1"></i>
                              Last accessed {course.lastAccessed}
                            </small>
                          </div>
                        </div>
                      </Col>
                      <Col md={4} className="text-md-end">
                        <div className="course-actions">
                          {course.progress === 100 ? (
                            <Button variant="success" size="sm" className="mb-2 w-100" disabled>
                              <i className="bi bi-check-circle me-1"></i>
                              Completed
                            </Button>
                          ) : (
                            <Button 
                              as={Link}
                              to={`/course/${course.id}`}
                              variant="primary" 
                              size="sm" 
                              className="mb-2 w-100"
                            >
                              <i className="bi bi-play me-1"></i>
                              Continue
                            </Button>
                          )}
                          <div className="next-lesson text-center">
                            <small className="text-muted">
                              Next: {course.nextLesson}
                            </small>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>

          {/* Sidebar */}
          <Col lg={4}>
            {/* Achievements */}
            <Card className={`achievements-section mb-4 ${darkMode ? 'bg-dark border-secondary' : ''}`} data-aos="fade-up" data-aos-delay="600">
              <Card.Header className={`border-0 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
                <h5 className="mb-0 fw-bold">
                  <i className="bi bi-trophy me-2"></i>
                  Achievements
                </h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  {achievements.map((achievement) => (
                    <Col xs={6} key={achievement.id} className="mb-3">
                      <div className={`achievement-item text-center p-3 rounded ${achievement.unlocked ? 'unlocked' : 'locked'}`}>
                        <div className={`achievement-icon mb-2 text-${achievement.color}`}>
                          <i className={achievement.icon}></i>
                        </div>
                        <h6 className="small fw-bold mb-1">{achievement.title}</h6>
                        <p className="tiny text-muted mb-0">{achievement.description}</p>
                        {achievement.unlocked && achievement.date && (
                          <small className="text-success">
                            <i className="bi bi-check-circle me-1"></i>
                            Unlocked
                          </small>
                        )}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>

            {/* Study Goals */}
            <Card className={`goals-section ${darkMode ? 'bg-dark border-secondary' : ''}`} data-aos="fade-up" data-aos-delay="700">
              <Card.Header className={`border-0 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
                <h5 className="mb-0 fw-bold">
                  <i className="bi bi-target me-2"></i>
                  Weekly Goals
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="goal-item mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="small">Study Time</span>
                    <span className="small fw-bold">12h / 15h</span>
                  </div>
                  <ProgressBar now={80} variant="primary" height={6} />
                </div>
                <div className="goal-item mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="small">Lessons Completed</span>
                    <span className="small fw-bold">8 / 10</span>
                  </div>
                  <ProgressBar now={80} variant="success" height={6} />
                </div>
                <div className="goal-item">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="small">Quizzes Passed</span>
                    <span className="small fw-bold">3 / 5</span>
                  </div>
                  <ProgressBar now={60} variant="warning" height={6} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Quick Actions */}
        <Card className={`quick-actions mt-4 ${darkMode ? 'bg-dark border-secondary' : ''}`} data-aos="fade-up" data-aos-delay="800">
          <Card.Body>
            <h5 className="fw-bold mb-3">Quick Actions</h5>
            <Row>
              <Col md={3} sm={6} className="mb-3">
                <Button 
                  as={Link}
                  to="/courses"
                  variant="outline-primary" 
                  className="w-100 quick-action-btn"
                >
                  <i className="bi bi-search d-block mb-2"></i>
                  Explore Courses
                </Button>
              </Col>
              <Col md={3} sm={6} className="mb-3">
                <Button 
                  variant="outline-success" 
                  className="w-100 quick-action-btn"
                >
                  <i className="bi bi-bookmark-star d-block mb-2"></i>
                  Saved Courses
                </Button>
              </Col>
              <Col md={3} sm={6} className="mb-3">
                <Button 
                  variant="outline-info" 
                  className="w-100 quick-action-btn"
                >
                  <i className="bi bi-download d-block mb-2"></i>
                  Downloads
                </Button>
              </Col>
              <Col md={3} sm={6} className="mb-3">
                <Button 
                  variant="outline-warning" 
                  className="w-100 quick-action-btn"
                >
                  <i className="bi bi-gear d-block mb-2"></i>
                  Settings
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Dashboard;