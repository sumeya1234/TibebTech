import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './courses.css';
import { useTheme } from '../../context/ThemeContext';

const Courses = () => {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', offset: 120 });
  }, []);

  const featuredCourses = [
    {
      id: 1,
      title: "React.js Complete Course",
      description: "Master React from basics to advanced concepts with hands-on projects.",
      duration: "8 hours",
      level: "Beginner",
      category: "Development",
      videoId: "bMknfKXIFA8", // React Tutorial for Beginners
      instructor: "Mosh Hamedani",
      views: "2.8M",
    },
    {
      id: 2,
      title: "JavaScript ES6+ Masterclass",
      description: "Learn modern JavaScript features and best practices for web development.",
      duration: "6 hours",
      level: "Intermediate",
      category: "Development",
      videoId: "NCwa_xi0Uuc", // JavaScript ES6 Tutorial
      instructor: "Brad Traversy",
      views: "1.5M",
    },
    {
      id: 3,
      title: "CSS Grid & Flexbox Layout",
      description: "Build responsive layouts with modern CSS Grid and Flexbox techniques.",
      duration: "4 hours",
      level: "Beginner",
      category: "Design",
      videoId: "jV8B24rSN5o", // CSS Grid Course
      instructor: "Dev Ed",
      views: "890K",
    },
    {
      id: 4,
      title: "Node.js Backend Development",
      description: "Create powerful RESTful APIs and backend applications with Node.js.",
      duration: "10 hours",
      level: "Advanced",
      category: "Development",
      videoId: "fBNz5xF-Kx4", // Node.js Tutorial
      instructor: "Programming with Mosh",
      views: "3.2M",
    },
    {
      id: 5,
      title: "Git & GitHub Workflow",
      description: "Master version control and collaboration with Git and GitHub.",
      duration: "3 hours",
      level: "Beginner",
      category: "Development",
      videoId: "RGOj5yH7evk", // Git and GitHub Tutorial
      instructor: "FreeCodeCamp",
      views: "2.1M",
    },
    {
      id: 6,
      title: "Python Programming Fundamentals",
      description: "Start your programming journey with Python basics and applications.",
      duration: "12 hours",
      level: "Beginner",
      category: "Development",
      videoId: "_uQrJ0TkZlc", // Python Tutorial
      instructor: "Programming with Mosh",
      views: "4.8M",
    },
    {
      id: 7,
      title: "UI/UX Design Principles",
      description: "Learn design fundamentals and create beautiful user interfaces.",
      duration: "5 hours",
      level: "Beginner",
      category: "Design",
      videoId: "c9Wg6Cb_YlU", // UI/UX Design Tutorial
      instructor: "AJ&Smart",
      views: "650K",
    },
    {
      id: 8,
      title: "Digital Marketing Strategy",
      description: "Build comprehensive digital marketing campaigns that convert.",
      duration: "7 hours",
      level: "Intermediate",
      category: "Business",
      videoId: "nU-IIXBWlS4", // Digital Marketing Tutorial
      instructor: "Neil Patel",
      views: "1.2M",
    },
    {
      id: 9,
      title: "MongoDB Database Design",
      description: "Master NoSQL database design and operations with MongoDB.",
      duration: "6 hours",
      level: "Advanced",
      category: "Development",
      videoId: "-56x56UppqQ", // MongoDB Tutorial
      instructor: "The Net Ninja",
      views: "780K",
    }
  ];

  const categories = ['All', 'Development', 'Design', 'Business'];
  const difficultyLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  useEffect(() => {
    let filtered = featuredCourses;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(course => course.level === selectedDifficulty);
    }

    setFilteredCourses(filtered);
  }, [selectedCategory, selectedDifficulty]);

  const getYoutubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-success';
      case 'Intermediate': return 'bg-warning';
      case 'Advanced': return 'bg-danger';
      default: return 'bg-secondary';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Development': return 'bi-code-slash';
      case 'Design': return 'bi-palette';
      case 'Business': return 'bi-briefcase';
      default: return 'bi-book';
    }
  };

  return (
    <section className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Featured Courses</h2>
          <p className="lead text-muted">
            Discover our most popular courses with real video content from industry experts
          </p>
        </div>

        {/* Filters */}
        <Row className="mb-4" data-aos="fade-up" data-aos-delay="100">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold">
                <i className="bi bi-funnel me-2"></i>Category
              </Form.Label>
              <Form.Select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="form-select-custom"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold">
                <i className="bi bi-bar-chart me-2"></i>Difficulty Level
              </Form.Label>
              <Form.Select 
                value={selectedDifficulty} 
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="form-select-custom"
              >
                {difficultyLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        {/* Results Count */}
        <div className="mb-4" data-aos="fade-up" data-aos-delay="150">
          <p className="text-muted">
            Showing <strong>{filteredCourses.length}</strong> courses
            {selectedCategory !== 'All' && (
              <Badge bg="primary" className="ms-2">
                <i className={`${getCategoryIcon(selectedCategory)} me-1`}></i>
                {selectedCategory}
              </Badge>
            )}
            {selectedDifficulty !== 'All' && (
              <Badge bg="secondary" className="ms-2">
                {selectedDifficulty}
              </Badge>
            )}
          </p>
        </div>
        
        <Row className="g-4">
          {filteredCourses.map((course, index) => (
            <Col key={course.id} xs={12} md={6} lg={4}>
              <Card 
                className={`h-100 course-card shadow-sm rounded-4 ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={getYoutubeThumbnail(course.videoId)} 
                    alt={course.title}
                    className="course-image"
                  />
                  <div className="play-overlay">
                    <i className="bi bi-play-circle-fill"></i>
                  </div>
                  <Badge 
                    bg="dark" 
                    className="position-absolute top-0 end-0 m-2"
                  >
                    {course.duration}
                  </Badge>
                </div>
                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    <Badge className={getDifficultyColor(course.level)}>
                      {course.level}
                    </Badge>
                    <Badge bg={darkMode ? "secondary" : "light"} text={darkMode ? "light" : "dark"} className="ms-2">
                      <i className={`${getCategoryIcon(course.category)} me-1`}></i>
                      {course.category}
                    </Badge>
                  </div>
                  <Card.Title className="fw-semibold h5">{course.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1 small">
                    {course.description}
                  </Card.Text>
                  <div className="course-meta mb-3">
                    <small className="text-muted">
                      <i className="bi bi-person-circle me-1"></i>
                      {course.instructor}
                    </small>
                    <br />
                    <small className="text-muted">
                      <i className="bi bi-eye me-1"></i>
                      {course.views} views
                    </small>
                  </div>
                  <Button 
                    variant="primary" 
                    className="mt-auto"
                    href={`https://www.youtube.com/watch?v=${course.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-play me-2"></i>
                    Watch Course
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {filteredCourses.length === 0 && (
          <div className="text-center py-5" data-aos="fade-up">
            <i className="bi bi-search display-1 text-muted"></i>
            <h4 className="text-muted mt-3">No courses found</h4>
            <p className="text-muted">Try adjusting your filters to see more results.</p>
          </div>
        )}
        
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
          <Button variant="outline-primary" size="lg">
            <i className="bi bi-collection-play me-2"></i>
            View All Courses
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Courses;
