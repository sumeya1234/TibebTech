import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './studentfeedback.css';

const StudentFeedback = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: 'ease-in-out', offset: 100 });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      course: "React.js Complete Course",
      rating: 5,
      feedback: "This React course completely transformed my understanding of modern web development. The instructor explains complex concepts in a simple, easy-to-follow manner. I went from knowing nothing about React to building my own projects!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=150&h=150&fit=crop&crop=face",
      role: "Frontend Developer",
      completionDate: "2 months ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      course: "Python Programming Fundamentals",
      rating: 5,
      feedback: "Amazing course! The Python tutorial is comprehensive and beginner-friendly. I loved how each concept builds upon the previous one. Now I'm confident enough to apply for Python developer positions.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      role: "Data Analyst",
      completionDate: "3 weeks ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      course: "UI/UX Design Principles",
      rating: 4,
      feedback: "Excellent introduction to design principles! The course helped me understand user-centered design and improved my design thinking process. The practical examples were very helpful.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      role: "Product Designer",
      completionDate: "1 month ago"
    },
    {
      id: 4,
      name: "David Thompson",
      course: "Node.js Backend Development",
      rating: 5,
      feedback: "Outstanding backend course! The depth of content and real-world examples made learning Node.js enjoyable. I successfully built and deployed my first REST API after completing this course.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      role: "Full Stack Developer",
      completionDate: "6 weeks ago"
    },
    {
      id: 5,
      name: "Lisa Wang",
      course: "Digital Marketing Strategy",
      rating: 4,
      feedback: "Great marketing course with actionable insights! The strategies taught here helped me increase our company's online engagement by 150%. Highly recommend for anyone in marketing.",
      avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face",
      role: "Marketing Manager",
      completionDate: "5 weeks ago"
    },
    {
      id: 6,
      name: "James Wilson",
      course: "JavaScript ES6+ Masterclass",
      rating: 5,
      feedback: "This JavaScript course is a game-changer! The modern ES6+ features were explained brilliantly. My code quality has improved significantly, and I feel much more confident as a developer.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      role: "JavaScript Developer",
      completionDate: "4 weeks ago"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <i 
        key={index} 
        className={`bi ${index < rating ? 'bi-star-fill' : 'bi-star'} star-icon`}
      ></i>
    ));
  };

  const getOverallStats = () => {
    const totalReviews = testimonials.length;
    const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / totalReviews).toFixed(1);
    const fiveStarCount = testimonials.filter(t => t.rating === 5).length;
    const fourStarCount = testimonials.filter(t => t.rating === 4).length;
    
    return { totalReviews, averageRating, fiveStarCount, fourStarCount };
  };

  const stats = getOverallStats();

  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold mb-3">What Our Students Say</h2>
          <p className="lead text-muted mb-4">
            Don't just take our word for it - hear from students who have transformed their careers
          </p>
          
          {/* Overall Stats */}
          <div className="stats-container mx-auto mb-4" data-aos="fade-up" data-aos-delay="100">
            <Row className="text-center">
              <Col md={3}>
                <div className="stat-item">
                  <h3 className="text-primary fw-bold">{stats.averageRating}</h3>
                  <div className="mb-2">
                    {renderStars(Math.round(stats.averageRating))}
                  </div>
                  <p className="text-muted small">Average Rating</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="stat-item">
                  <h3 className="text-primary fw-bold">{stats.totalReviews}+</h3>
                  <p className="text-muted small">Student Reviews</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="stat-item">
                  <h3 className="text-success fw-bold">{stats.fiveStarCount}</h3>
                  <p className="text-muted small">5-Star Reviews</p>
                </div>
              </Col>
              <Col md={3}>
                <div className="stat-item">
                  <h3 className="text-warning fw-bold">98%</h3>
                  <p className="text-muted small">Satisfaction Rate</p>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={testimonial.id} xs={12} md={6} lg={4}>
              <Card 
                className="h-100 testimonial-card shadow-sm rounded-4"
                data-aos="fade-up"
                data-aos-delay={index * 120}
              >
                <Card.Body className="d-flex flex-column">
                  {/* Rating */}
                  <div className="rating-section mb-3">
                    <div className="stars mb-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    <small className="text-muted">
                      <i className="bi bi-clock me-1"></i>
                      {testimonial.completionDate}
                    </small>
                  </div>

                  {/* Feedback */}
                  <blockquote className="feedback-text flex-grow-1 mb-4">
                    <p className="text-muted fst-italic">
                      "{testimonial.feedback}"
                    </p>
                  </blockquote>

                  {/* Student Info */}
                  <div className="student-info">
                    <div className="d-flex align-items-center mb-2">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="avatar rounded-circle me-3"
                      />
                      <div>
                        <h6 className="mb-0 fw-semibold">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                    <Badge bg="primary" className="course-badge">
                      <i className="bi bi-play-circle me-1"></i>
                      {testimonial.course}
                    </Badge>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
          <div className="cta-section">
            <h4 className="fw-bold mb-3">Ready to Join Thousands of Successful Students?</h4>
            <p className="text-muted mb-4">Start your learning journey today and see why our students love TibebTech</p>
            <button className="btn btn-primary btn-lg px-4">
              <i className="bi bi-rocket-takeoff me-2"></i>
              Start Learning Now
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StudentFeedback;