import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './courses.css';
import { featuredCourses } from '../../data/courses';
import { useTheme } from '../../context/ThemeContext';


const Courses = () => {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', offset: 120 });
  }, []);

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
    <section className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-white'}`}>
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Featured Courses</h2>
          <p className={`lead ${darkMode ? 'text-light-50' : 'text-muted'}`}>
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
          <p className={darkMode ? 'text-light-50' : 'text-muted'}>
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
                className={`h-100 course-card shadow-sm rounded-4 ${darkMode ? 'bg-secondary text-light border-secondary' : 'bg-white'}`}
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
                    <Badge 
                      bg={darkMode ? "secondary" : "light"} 
                      text={darkMode ? "light" : "dark"} 
                      className="ms-2"
                    >
                      <i className={`${getCategoryIcon(course.category)} me-1`}></i>
                      {course.category}
                    </Badge>
                  </div>
                  <Card.Title className="fw-semibold h5">{course.title}</Card.Title>
                  <Card.Text className={`${darkMode ? 'text-light-50' : 'text-muted'} flex-grow-1 small`}>
                    {course.description}
                  </Card.Text>
                  <div className="course-meta mb-3">
                    <small className={darkMode ? 'text-light-50' : 'text-muted'}>
                      <i className="bi bi-person-circle me-1"></i>
                      {course.instructor}
                    </small>
                    <br />
                    <small className={darkMode ? 'text-light-50' : 'text-muted'}>
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
            <i className={`bi bi-search display-1 ${darkMode ? 'text-light-50' : 'text-muted'}`}></i>
            <h4 className={`${darkMode ? 'text-light-50' : 'text-muted'} mt-3`}>No courses found</h4>
            <p className={darkMode ? 'text-light-50' : 'text-muted'}>Try adjusting your filters to see more results.</p>
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
