import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './courses.css';

const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-in-out', offset: 120 });
  }, []);

  const featuredCourses = [
    {
      id: 1,
      title: "React Fundamentals",
      description: "Learn the basics of React including components, state, and props.",
      duration: "4 weeks",
      level: "Beginner",
      image: "https://via.placeholder.com/300x200/4f46e5/ffffff?text=React",
    },
    {
      id: 2,
      title: "JavaScript ES6+",
      description: "Master modern JavaScript features and best practices.",
      duration: "3 weeks", 
      level: "Intermediate",
      image: "https://via.placeholder.com/300x200/3b82f6/ffffff?text=JavaScript",
    },
    {
      id: 3,
      title: "CSS Grid & Flexbox",
      description: "Build responsive layouts with modern CSS techniques.",
      duration: "2 weeks",
      level: "Beginner",
      image: "https://via.placeholder.com/300x200/06b6d4/ffffff?text=CSS",
    },
    {
      id: 4,
      title: "Node.js Backend",
      description: "Create powerful backend applications with Node.js and Express.",
      duration: "5 weeks",
      level: "Intermediate",
      image: "https://via.placeholder.com/300x200/10b981/ffffff?text=Node.js",
    },
    {
      id: 5,
      title: "Git & GitHub",
      description: "Version control mastery for developers and teams.",
      duration: "2 weeks",
      level: "Beginner", 
      image: "https://via.placeholder.com/300x200/f59e0b/ffffff?text=Git",
    },
    {
      id: 6,
      title: "Python Basics",
      description: "Start your programming journey with Python fundamentals.",
      duration: "4 weeks",
      level: "Beginner",
      image: "https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Python",
    }
  ];

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mb-3">Featured Courses</h2>
          <p className="lead text-muted">
            Discover our most popular courses designed to accelerate your learning journey
          </p>
        </div>
        
        <Row className="g-4">
          {featuredCourses.map((course, index) => (
            <Col key={course.id} xs={12} md={6} lg={4}>
              <Card 
                className="h-100 course-card shadow-sm rounded-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card.Img 
                  variant="top" 
                  src={course.image} 
                  alt={course.title}
                  className="course-image"
                />
                <Card.Body className="d-flex flex-column">
                  <div className="mb-2">
                    <span className={`badge ${course.level === 'Beginner' ? 'bg-success' : 'bg-warning'} mb-2`}>
                      {course.level}
                    </span>
                    <span className="badge bg-secondary ms-2">
                      {course.duration}
                    </span>
                  </div>
                  <Card.Title className="fw-semibold">{course.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {course.description}
                  </Card.Text>
                  <Button variant="primary" className="mt-auto">
                    Start Learning
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
          <Button variant="outline-primary" size="lg">
            View All Courses
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Courses;
