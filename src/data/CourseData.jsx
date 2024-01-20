const courseData = [
    {
        id: 1, // Unique identifier for the course
        name: 'Introduction to React Native',
        instructor: 'John Doe', // Name of the course instructor
        description: 'Learn the basics of React Native development andbuild your first mobile app.',
        enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress'
        thumbnail: 'https://www.pexels.com/photo/hand-holding-react-sticker-11035471/', //Link to the course thumbnail
        duration: '8 weeks', // Duration of the course
        schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic JavaScript knowledge', 'Familiarity withReact'],
        syllabus: [
        {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
        week: 2,
        topic: 'Building Your First App',
        content: 'Creating a simple mobile app using React Native components.'
        },
        // Additional weeks and topics...
        ],
        students: [
        {
        id: 101,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        },
        {
        id: 102,
        name: 'Bob Smith',
        email: 'bob@example.com',
        },
        // Additional enrolled students...
        ]
    },
    {
        "id": 2,
        "name": "Advanced JavaScript",
        "instructor": "Jane Smith",
        "description": "Dive deep into advanced JavaScript concepts and best practices.",
        "enrollmentStatus": "In Progress",
        "thumbnail": "your.image.here",
        "duration": "10 weeks",
        "schedule": "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
        "location": "Online",
        "prerequisites": ["Intermediate JavaScript knowledge"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Closures and Scopes",
            "content": "Understanding closures and how scopes work in JavaScript."
          },
          {
            "week": 2,
            "topic": "Asynchronous Programming",
            "content": "Exploring asynchronous patterns with Promises and async/await."
          }
          // Additional weeks and topics...
        ],
        "students": [
          {
            "id": 201,
            "name": "Charlie Brown",
            "email": "charlie@example.com"
          },
          {
            "id": 202,
            "name": "Diana Miller",
            "email": "diana@example.com"
          }
          // Additional enrolled students...
        ]
      },
      {
        "id": 3,
        "name": "Data Science Fundamentals",
        "instructor": "Robert Johnson",
        "description": "Learn the foundational concepts of data science and analytics.",
        "enrollmentStatus": "Closed",
        "thumbnail": "your.image.here",
        "duration": "12 weeks",
        "schedule": "Tuesdays and Thursdays, 5:00 PM - 7:00 PM",
        "location": "Onsite",
        "prerequisites": ["Basic Python knowledge", "Statistics basics"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to Data Science",
            "content": "Overview of data science and its applications."
          },
          {
            "week": 2,
            "topic": "Data Cleaning and Preprocessing",
            "content": "Cleaning and preprocessing data for analysis."
          }
          // Additional weeks and topics...
        ],
        "students": [
          {
            "id": 301,
            "name": "Emma White",
            "email": "emma@example.com"
          },
          {
            "id": 302,
            "name": "Frank Johnson",
            "email": "frank@example.com"
          }
          // Additional enrolled students...
        ]
      },
      {
        "id": 4,
        "name": "Mobile App Design",
        "instructor": "Amanda Davis",
        "description": "Explore principles of mobile app design and user experience.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "6 weeks",
        "schedule": "Fridays, 4:00 PM - 6:00 PM",
        "location": "Online",
        "prerequisites": ["Basic design knowledge", "Familiarity with UI/UX concepts"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to Mobile App Design",
            "content": "Overview of design principles for mobile applications."
          },
          {
            "week": 2,
            "topic": "User Interface (UI) Design",
            "content": "Creating visually appealing and intuitive user interfaces."
          }
          // Additional weeks and topics...
        ],
        "students": [
          {
            "id": 401,
            "name": "Gary Adams",
            "email": "gary@example.com"
          },
          {
            "id": 402,
            "name": "Helen Brown",
            "email": "helen@example.com"
          }
          // Additional enrolled students...
        ]
      },
      {
        "id": 5,
        "name": "Machine Learning Basics",
        "instructor": "Michael Lee",
        "description": "Get started with the fundamentals of machine learning and algorithms.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "8 weeks",
        "schedule": "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
        "location": "Online",
        "prerequisites": ["Intermediate Python knowledge", "Basic understanding of algorithms"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to Machine Learning",
            "content": "Overview of machine learning concepts and applications."
          },
          {
            "week": 2,
            "topic": "Supervised Learning",
            "content": "Understanding and implementing supervised learning algorithms."
          }
          // Additional weeks and topics...
        ],
        "students": [
          {
            "id": 501,
            "name": "Ivy Green",
            "email": "ivy@example.com"
          },
          {
            "id": 502,
            "name": "Jack Turner",
            "email": "jack@example.com"
          }
          // Additional enrolled students...
        ]
      },
      {
        "id": 6,
        "name": "Web Development Bootcamp",
        "instructor": "Sarah Rodriguez",
        "description": "A comprehensive bootcamp covering HTML, CSS, and JavaScript for web development.",
        "enrollmentStatus": "In Progress",
        "thumbnail": "your.image.here",
        "duration": "10 weeks",
        "schedule": "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
        "location": "Online",
        "prerequisites": ["No prerequisites, suitable for beginners"],
        "syllabus": [
          {
            "week": 1,
            "topic": "HTML Fundamentals",
            "content": "Understanding the basics of HTML and document structure."
          },
          {
            "week": 2,
            "topic": "CSS Styling",
            "content": "Styling web pages with CSS for a visually appealing look."
          }
          // Additional weeks and topics...
        ],
        "students": [
          {
            "id": 601,
            "name": "Karen Moore",
            "email": "karen@example.com"
          },
          {
            "id": 602,
            "name": "Leo Garcia",
            "email": "leo@example.com"
          }
          // Additional enrolled students...
        ]
      },
      {
        "id": 7,
        "name": "Python for Data Analysis",
        "instructor": "Daniel Wilson",
        "description": "Learn Python programming for data analysis and manipulation.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "6 weeks",
        "schedule": "Mondays and Wednesdays, 5:30 PM - 7:30 PM",
        "location": "Online",
        "prerequisites": ["Basic Python knowledge"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to Python for Data Analysis",
            "content": "Overview of Python's role in data analysis and scientific computing."
          },
          {
            "week": 2,
            "topic": "Data Manipulation with Pandas",
            "content": "Using Pandas library for efficient data manipulation."
          }
          // Additional weeks and topics...
        ],
        "students": [
          {
            "id": 701,
            "name": "Nancy Turner",
            "email": "nancy@example.com"
          },
          {
            "id": 702,
            "name": "Oscar Adams",
            "email": "oscar@example.com"
          }
          // Additional enrolled students...
        ]
      },

      {
        "id": 8,
        "name": "React.js Fundamentals",
        "instructor": "Emily Parker",
        "description": "Master the fundamentals of React.js for building interactive user interfaces.",
        "enrollmentStatus": "Closed",
        "thumbnail": "your.image.here",
        "duration": "8 weeks",
        "schedule": "Fridays, 6:00 PM - 8:00 PM",
        "location": "Onsite",
        "prerequisites": ["Basic JavaScript knowledge"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to React.js",
            "content": "Understanding the basics of React.js and its component-based architecture."
          },
          {
            "week": 2,
            "topic": "State and Props",
            "content": "Managing state and props in React components for dynamic UIs."
          }
          // Additional weeks and topics...
        ],
        "students": [
          {
            "id": 801,
            "name": "Paul White",
            "email": "paul@example.com"
          },
          {
            "id": 802,
            "name": "Quinn Martin",
            "email": "quinn@example.com"
          }
          // Additional enrolled students...
        ]
      },
      {
        "id": 9,
        "name": "Artificial Intelligence Ethics",
        "instructor": "Sophia Hernandez",
        "description": "Explore ethical considerations in artificial intelligence and machine learning.",
        "enrollmentStatus": "Open",
        "thumbnail": "your.image.here",
        "duration": "4 weeks",
        "schedule": "Thursdays, 7:30 PM - 9:30 PM",
        "location": "Online",
        "prerequisites": ["Basic understanding of AI and machine learning"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to AI Ethics",
            "content": "Understanding ethical considerations in artificial intelligence."
          },
          {
            "week": 2,
            "topic": "Bias and Fairness",
            "content": "Examining issues of bias and fairness in AI algorithms."
          }
          // Additional weeks and topics...
        ],
        "students": [
          {
            "id": 901,
            "name": "Rose Carter",
            "email": "rose@example.com"
          },
          {
            "id": 902,
            "name": "Samuel King",
            "email": "samuel@example.com"
          }
          // Additional enrolled students...
        ]
      },
      {
        "id": 10,
        "name": "Cybersecurity Basics",
        "instructor": "Victor Martinez",
        "description": "Learn the fundamentals of cybersecurity and protect against online threats.",
        "enrollmentStatus": "In Progress",
        "thumbnail": "your.image.here",
        "duration": "6 weeks",
        "schedule": "Wednesdays, 6:30 PM - 8:30 PM",
        "location": "Online",
        "prerequisites": ["Basic understanding of computer networks"],
        "syllabus": [
          {
            "week": 1,
            "topic": "Introduction to Cybersecurity",
            "content": "Overview of cybersecurity concepts and common threats."
          },
          {
            "week": 2,
            "topic": "Network Security",
            "content": "Securing computer networks and preventing unauthorized access."
          }
          // Additional weeks and topics...
        ],
        "students": [
          {
            "id": 1001,
            "name": "Tina Rodriguez",
            "email": "tina@example.com"
          },
          {
            "id": 1002,
            "name": "Ulysses White",
            "email": "ulysses@example.com"
          }
          // Additional enrolled students...
        ]
      } 
]   

export default courseData