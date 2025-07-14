export const courseData = {
  1: {
    id: 1,
    title: "React.js Complete Course",
    description: "Master React from basics to advanced concepts with hands-on projects.",
    instructor: "Mosh Hamedani",
    duration: "8 hours",
    level: "Beginner",
    category: "Development",
    rating: 4.8,
    students: 15420,
    videoId: "bMknfKXIFA8",
    modules: [
      {
        id: "react-module-1",
        title: "Getting Started with React",
        duration: "2 hours",
        lessons: [
          {
            id: "react-lesson-1",
            title: "Introduction to React",
            description: "Learn what React is and why it's popular",
            duration: "15 min",
            videoId: "bMknfKXIFA8"
          },
          {
            id: "react-lesson-2", 
            title: "Setting up Development Environment",
            description: "Install Node.js, npm, and create your first React app",
            duration: "20 min",
            videoId: "bMknfKXIFA8"
          },
          {
            id: "react-lesson-3",
            title: "Understanding JSX",
            description: "Learn JSX syntax and how to write React components",
            duration: "25 min", 
            videoId: "bMknfKXIFA8"
          }
        ],
        quiz: {
          id: "react-quiz-1",
          title: "React Basics Quiz",
          questions: [
            {
              id: 1,
              question: "What is React?",
              options: [
                "A JavaScript library for building user interfaces",
                "A backend framework",
                "A database",
                "A CSS framework"
              ],
              correct: 0
            },
            {
              id: 2,
              question: "What does JSX stand for?",
              options: [
                "JavaScript Extension",
                "JavaScript XML",
                "Java Syntax Extension", 
                "JSON XML"
              ],
              correct: 1
            }
          ]
        }
      },
      {
        id: "react-module-2",
        title: "React Components and Props",
        duration: "3 hours",
        lessons: [
          {
            id: "react-lesson-4",
            title: "Creating Components",
            description: "Learn how to create functional and class components",
            duration: "30 min",
            videoId: "bMknfKXIFA8"
          },
          {
            id: "react-lesson-5",
            title: "Props and Data Flow",
            description: "Understand how to pass data between components",
            duration: "35 min",
            videoId: "bMknfKXIFA8"
          },
          {
            id: "react-lesson-6",
            title: "Component Composition",
            description: "Learn advanced patterns for composing components",
            duration: "40 min",
            videoId: "bMknfKXIFA8"
          }
        ],
        quiz: {
          id: "react-quiz-2",
          title: "Components and Props Quiz",
          questions: [
            {
              id: 3,
              question: "How do you pass data to a component?",
              options: [
                "Through props",
                "Through state",
                "Through context",
                "Through refs"
              ],
              correct: 0
            }
          ]
        }
      },
      {
        id: "react-module-3",
        title: "State and Event Handling",
        duration: "3 hours",
        lessons: [
          {
            id: "react-lesson-7",
            title: "Introduction to State",
            description: "Learn about component state and useState hook",
            duration: "30 min",
            videoId: "bMknfKXIFA8"
          },
          {
            id: "react-lesson-8",
            title: "Event Handling",
            description: "Handle user interactions and events",
            duration: "25 min", 
            videoId: "bMknfKXIFA8"
          },
          {
            id: "react-lesson-9",
            title: "Forms and Controlled Components",
            description: "Build forms with controlled components",
            duration: "45 min",
            videoId: "bMknfKXIFA8"
          }
        ]
      }
    ]
  },
  2: {
    id: 2,
    title: "JavaScript ES6+ Masterclass",
    description: "Learn modern JavaScript features and best practices for web development.",
    instructor: "Brad Traversy",
    duration: "6 hours",
    level: "Intermediate", 
    category: "Development",
    rating: 4.7,
    students: 12350,
    videoId: "NCwa_xi0Uuc",
    modules: [
      {
        id: "js-module-1",
        title: "ES6 Fundamentals",
        duration: "2 hours",
        lessons: [
          {
            id: "js-lesson-1",
            title: "Let and Const",
            description: "Understanding block-scoped variables",
            duration: "20 min",
            videoId: "NCwa_xi0Uuc"
          },
          {
            id: "js-lesson-2",
            title: "Arrow Functions",
            description: "Modern function syntax and this binding",
            duration: "25 min",
            videoId: "NCwa_xi0Uuc" 
          },
          {
            id: "js-lesson-3",
            title: "Template Literals",
            description: "String interpolation and multi-line strings",
            duration: "15 min",
            videoId: "NCwa_xi0Uuc"
          }
        ],
        quiz: {
          id: "js-quiz-1",
          title: "ES6 Basics Quiz",
          questions: [
            {
              id: 1,
              question: "Which keyword creates block-scoped variables?",
              options: ["var", "let", "const", "both let and const"],
              correct: 3
            }
          ]
        }
      },
      {
        id: "js-module-2", 
        title: "Advanced ES6 Features",
        duration: "4 hours",
        lessons: [
          {
            id: "js-lesson-4",
            title: "Destructuring",
            description: "Extract values from arrays and objects",
            duration: "30 min",
            videoId: "NCwa_xi0Uuc"
          },
          {
            id: "js-lesson-5",
            title: "Spread and Rest Operators",
            description: "Working with the spread (...) operator",
            duration: "35 min",
            videoId: "NCwa_xi0Uuc"
          },
          {
            id: "js-lesson-6",
            title: "Modules and Imports",
            description: "ES6 module system and import/export",
            duration: "40 min",
            videoId: "NCwa_xi0Uuc"
          }
        ]
      }
    ]
  },
  3: {
    id: 3,
    title: "CSS Grid & Flexbox Layout",
    description: "Build responsive layouts with modern CSS Grid and Flexbox techniques.",
    instructor: "Dev Ed",
    duration: "4 hours",
    level: "Beginner",
    category: "Design", 
    rating: 4.6,
    students: 8900,
    videoId: "jV8B24rSN5o",
    modules: [
      {
        id: "css-module-1",
        title: "Flexbox Fundamentals",
        duration: "2 hours",
        lessons: [
          {
            id: "css-lesson-1",
            title: "Introduction to Flexbox",
            description: "Understanding the flexbox layout model",
            duration: "20 min",
            videoId: "jV8B24rSN5o"
          },
          {
            id: "css-lesson-2",
            title: "Flex Container Properties",
            description: "Learn flex-direction, justify-content, align-items",
            duration: "30 min",
            videoId: "jV8B24rSN5o"
          },
          {
            id: "css-lesson-3",
            title: "Flex Item Properties",
            description: "Control individual flex items with flex-grow, flex-shrink",
            duration: "25 min",
            videoId: "jV8B24rSN5o"
          }
        ],
        quiz: {
          id: "css-quiz-1",
          title: "Flexbox Quiz",
          questions: [
            {
              id: 1,
              question: "Which property is used to align items along the main axis?",
              options: ["align-items", "justify-content", "align-content", "flex-direction"],
              correct: 1
            }
          ]
        }
      },
      {
        id: "css-module-2",
        title: "CSS Grid Mastery",
        duration: "2 hours", 
        lessons: [
          {
            id: "css-lesson-4",
            title: "Grid Container Setup",
            description: "Creating grid containers and defining grid tracks",
            duration: "25 min",
            videoId: "jV8B24rSN5o"
          },
          {
            id: "css-lesson-5",
            title: "Grid Item Placement",
            description: "Positioning items in the grid",
            duration: "30 min",
            videoId: "jV8B24rSN5o"
          },
          {
            id: "css-lesson-6",
            title: "Responsive Grid Layouts",
            description: "Building responsive designs with CSS Grid",
            duration: "35 min",
            videoId: "jV8B24rSN5o"
          }
        ]
      }
    ]
  }
};