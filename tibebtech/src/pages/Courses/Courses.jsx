import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './courses.css';

const Courses = () => {
  const { darkMode } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', offset: 120 });
  }, []);

  const allCourses = [
    {
      id: 1,
      title: "React.js Complete Course",
      description: "Master React from basics to advanced concepts with hands-on projects and real-world applications.",
      duration: "12 hours",
      level: "Beginner",
      category: "Development",
      videoId: "bMknfKXIFA8",
      instructor: "Mosh Hamedani",
      views: "2.8M",
      rating: 4.8,
      students: 45000,
      price: 0,
      modules: 8,
      lessons: 45,
      quizzes: 12,
      skills: ["React Hooks", "Component Design", "State Management", "JSX"],
      lastUpdated: "2024-01-15"
    },
    {
      id: 2,
      title: "JavaScript ES6+ Masterclass",
      description: "Learn modern JavaScript features and best practices for professional web development.",
      duration: "8 hours",
      level: "Intermediate",
      category: "Development",
      videoId: "NCwa_xi0Uuc",
      instructor: "Brad Traversy",
      views: "1.5M",
      rating: 4.7,
      students: 32000,
      price: 0,
      modules: 6,
      lessons: 38,
      quizzes: 10,
      skills: ["Arrow Functions", "Async/Await", "Modules", "Classes"],
      lastUpdated: "2024-02-10"
    },
    {
      id: 3,
      title: "CSS Grid & Flexbox Layout",
      description: "Build responsive layouts with modern CSS Grid and Flexbox techniques.",
      duration: "6 hours",
      level: "Beginner",
      category: "Design",
      videoId: "jV8B24rSN5o",
      instructor: "Dev Ed",
      views: "890K",
      rating: 4.6,
      students: 28000,
      price: 0,
      modules: 4,
      lessons: 24,
      quizzes: 8,
      skills: ["CSS Grid", "Flexbox", "Responsive Design", "Layout"],
      lastUpdated: "2024-01-20"
    },
    {
      id: 4,
      title: "Node.js Backend Development",
      description: "Create powerful RESTful APIs and backend applications with Node.js and Express.",
      duration: "15 hours",
      level: "Advanced",
      category: "Development",
      videoId: "fBNz5xF-Kx4",
      instructor: "Programming with Mosh",
      views: "3.2M",
      rating: 4.9,
      students: 52000,
      price: 0,
      modules: 10,
      lessons: 65,
      quizzes: 18,
      skills: ["Express.js", "MongoDB", "Authentication", "RESTful APIs"],
      lastUpdated: "2024-02-05"
    },
    {
      id: 5,
      title: "Python Programming Fundamentals",
      description: "Start your programming journey with Python basics and applications.",
      duration: "20 hours",
      level: "Beginner",
      category: "Development",
      videoId: "_uQrJ0TkZlc",
      instructor: "Programming with Mosh",
      views: "4.8M",
      rating: 4.8,
      students: 78000,
      price: 0,
      modules: 12,
      lessons: 85,
      quizzes: 20,
      skills: ["Python Basics", "Data Structures", "OOP", "File Handling"],
      lastUpdated: "2024-01-30"
    },
    {
      id: 6,
      title: "UI/UX Design Principles",
      description: "Learn design fundamentals and create beautiful user interfaces.",
      duration: "10 hours",
      level: "Beginner",
      category: "Design",
      videoId: "c9Wg6Cb_YlU",
      instructor: "AJ&Smart",
      views: "650K",
      rating: 4.5,
      students: 22000,
      price: 0,
      modules: 6,
      lessons: 42,
      quizzes: 15,
      skills: ["Design Theory", "User Research", "Prototyping", "Figma"],
      lastUpdated: "2024-02-12"
    },
    {
      id: 7,
      title: "Digital Marketing Strategy",
      description: "Build comprehensive digital marketing campaigns that convert.",
      duration: "14 hours",
      level: "Intermediate",
      category: "Business",
      videoId: "nU-IIXBWlS4",
      instructor: "Neil Patel",
      views: "1.2M",
      rating: 4.6,
      students: 35000,
      price: 0,
      modules: 8,
      lessons: 56,
      quizzes: 16,
      skills: ["SEO", "Social Media", "Content Marketing", "Analytics"],
      lastUpdated: "2024-02-08"
    },
    {
      id: 8,
      title: "Data Science with Python",
      description: "Learn data analysis, visualization, and machine learning with Python.",
      duration: "25 hours",
      level: "Advanced",
      category: "Development",
      videoId: "rfscVS0vtbw",
      instructor: "FreeCodeCamp",
      views: "2.1M",
      rating: 4.7,
      students: 41000,
      price: 0,
      modules: 14,
      lessons: 95,
      quizzes: 25,
      skills: ["Pandas", "NumPy", "Matplotlib", "Machine Learning"],
      lastUpdated: "2024-01-25"
    }
  ];

  const categories = ['All', 'Development', 'Design', 'Business'];
  const difficultyLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  useEffect(() => {
    let filtered = allCourses.filter(course => {
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || course.level === selectedDifficulty;
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesCategory && matchesDifficulty && matchesSearch;
    });

    // Sort courses
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.students - a.students);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'duration':
        filtered.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
        break;
      case 'recent':
        filtered.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
        break;
      default:
        break;
    }

    setFilteredCourses(filtered);
  }, [selectedCategory, selectedDifficulty, searchTerm, sortBy]);

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

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className={`courses-page ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <Container className="py-5">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="fw-bold mb-3">Explore Our Courses</h1>
          <p className="lead text-muted mb-4">
            Discover high-quality courses from industry experts and advance your skills
          </p>
          <div className="course-stats">
            <Row className="text-center">
              <Col md={3} sm={6}>
                <div className="stat-item">
                  <h3 className="text-primary fw-bold">{allCourses.length}+</h3>
                  <p className="text-muted">Total Courses</p>
                </div>
              </Col>
              <Col md={3} sm={6}>
                <div className="stat-item">
                  <h3 className="text-success fw-bold">
                    {formatNumber(allCourses.reduce((sum, course) => sum + course.students, 0))}
                  </h3>
                  <p className="text-muted">Students Enrolled</p>
                </div>
              </Col>
              <Col md={3} sm={6}>
                <div className="stat-item">
                  <h3 className="text-info fw-bold">
                    {(allCourses.reduce((sum, course) => sum + course.rating, 0) / allCourses.length).toFixed(1)}★
                  </h3>
                  <p className="text-muted">Average Rating</p>
                </div>
              </Col>
              <Col md={3} sm={6}>
                <div className="stat-item">
                  <h3 className="text-warning fw-bold">100%</h3>
                  <p className="text-muted">Free Courses</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        {/* Filters */}
        <Card className={`filter-card mb-4 ${darkMode ? 'bg-dark border-secondary' : ''}`} data-aos="fade-up" data-aos-delay="100">
          <Card.Body>
            <Row className="align-items-end">
              <Col lg={3} md={6} className="mb-3">
                <Form.Label className="fw-semibold">
                  <i className="bi bi-search me-2"></i>Search Courses
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search by title, skill, or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  <InputGroup.Text>
                    <i className="bi bi-search"></i>
                  </InputGroup.Text>
                </InputGroup>
              </Col>
              <Col lg={2} md={6} className="mb-3">
                <Form.Label className="fw-semibold">
                  <i className="bi bi-funnel me-2"></i>Category
                </Form.Label>
                <Form.Select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col lg={2} md={6} className="mb-3">
                <Form.Label className="fw-semibold">
                  <i className="bi bi-bar-chart me-2"></i>Level
                </Form.Label>
                <Form.Select 
                  value={selectedDifficulty} 
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="filter-select"
                >
                  {difficultyLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col lg={2} md={6} className="mb-3">
                <Form.Label className="fw-semibold">
                  <i className="bi bi-sort-down me-2"></i>Sort By
                </Form.Label>
                <Form.Select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="duration">Shortest Duration</option>
                  <option value="recent">Recently Updated</option>
                </Form.Select>
              </Col>
              <Col lg={3} md={12} className="mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">
                    Showing <strong>{filteredCourses.length}</strong> of <strong>{allCourses.length}</strong> courses
                  </span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedDifficulty('All');
                      setSearchTerm('');
                      setSortBy('popular');
                    }}
                  >
                    <i className="bi bi-arrow-clockwise me-1"></i>
                    Reset
                  </Button>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Course Grid */}
        <Row className="g-4">
          {filteredCourses.map((course, index) => (
            <Col key={course.id} xs={12} md={6} lg={4}>
              <Card 
                className={`h-100 course-card shadow-sm ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="position-relative course-thumbnail">
                  <Card.Img 
                    variant="top" 
                    src={getYoutubeThumbnail(course.videoId)} 
                    alt={course.title}
                    className="course-image"
                  />
                  <div className="course-overlay">
                    <div className="play-button">
                      <i className="bi bi-play-fill"></i>
                    </div>
                    <Badge bg="dark" className="duration-badge">
                      {course.duration}
                    </Badge>
                  </div>
                  <div className="course-badges">
                    <Badge className={getDifficultyColor(course.level)}>
                      {course.level}
                    </Badge>
                    <Badge bg={darkMode ? "secondary" : "light"} text={darkMode ? "light" : "dark"} className="ms-1">
                      <i className={`${getCategoryIcon(course.category)} me-1`}></i>
                      {course.category}
                    </Badge>
                  </div>
                </div>

                <Card.Body className="d-flex flex-column">
                  <div className="course-header mb-3">
                    <Card.Title className="h5 mb-2">{course.title}</Card.Title>
                    <Card.Text className="text-muted small course-description">
                      {course.description}
                    </Card.Text>
                  </div>

                  <div className="course-stats mb-3">
                    <Row className="text-center">
                      <Col xs={4}>
                        <div className="stat-mini">
                          <i className="bi bi-collection text-primary"></i>
                          <small className="d-block">{course.modules} Modules</small>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="stat-mini">
                          <i className="bi bi-play-circle text-success"></i>
                          <small className="d-block">{course.lessons} Lessons</small>
                        </div>
                      </Col>
                      <Col xs={4}>
                        <div className="stat-mini">
                          <i className="bi bi-question-circle text-warning"></i>
                          <small className="d-block">{course.quizzes} Quizzes</small>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div className="course-skills mb-3">
                    <div className="d-flex flex-wrap gap-1">
                      {course.skills.slice(0, 3).map((skill, idx) => (
                        <Badge key={idx} bg="info" className="skill-badge">
                          {skill}
                        </Badge>
                      ))}
                      {course.skills.length > 3 && (
                        <Badge bg="secondary" className="skill-badge">
                          +{course.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="course-meta mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="instructor">
                        <small className="text-muted">
                          <i className="bi bi-person-circle me-1"></i>
                          {course.instructor}
                        </small>
                      </div>
                      <div className="rating">
                        <span className="fw-semibold text-warning">
                          <i className="bi bi-star-fill me-1"></i>
                          {course.rating}
                        </span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-1">
                      <small className="text-muted">
                        <i className="bi bi-people me-1"></i>
                        {formatNumber(course.students)} students
                      </small>
                      <small className="text-muted">
                        Updated: {new Date(course.lastUpdated).toLocaleDateString()}
                      </small>
                    </div>
                  </div>

                  <div className="course-actions mt-auto">
                    <Row>
                      <Col>
                        <Button 
                          as={Link}
                          to={`/course/${course.id}`}
                          variant="primary" 
                          className="w-100 course-btn"
                        >
                          <i className="bi bi-mortarboard me-2"></i>
                          Start Learning
                        </Button>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col xs={6}>
                        <Button 
                          variant="outline-secondary" 
                          size="sm" 
                          className="w-100"
                          onClick={() => window.open(`https://www.youtube.com/watch?v=${course.videoId}`, '_blank')}
                        >
                          <i className="bi bi-play me-1"></i>
                          Preview
                        </Button>
                      </Col>
                      <Col xs={6}>
                        <Button 
                          variant="outline-info" 
                          size="sm" 
                          className="w-100"
                        >
                          <i className="bi bi-bookmark me-1"></i>
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-5" data-aos="fade-up">
            <i className="bi bi-search display-1 text-muted opacity-50"></i>
            <h4 className="text-muted mt-3">No courses found</h4>
            <p className="text-muted">Try adjusting your search criteria or browse all courses.</p>
            <Button 
              variant="primary"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedDifficulty('All');
                setSearchTerm('');
              }}
            >
              <i className="bi bi-arrow-clockwise me-2"></i>
              Reset Filters
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Courses;