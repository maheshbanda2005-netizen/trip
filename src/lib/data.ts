import { Subject, Question, User, Badge, CommunityStat, Answer } from "./types";

export const subjects: Subject[] = [
  {
    id: "s1",
    name: "Mathematics",
    description: "Algebra, Calculus, Geometry, and more.",
    icon: "∑",
    topics: ["Algebra", "Calculus", "Statistics", "Geometry"],
  },
  {
    id: "s2",
    name: "Computer Science",
    description: "Programming, Algorithms, and Data Structures.",
    icon: "💻",
    topics: ["Python", "Java", "Data Structures", "Algorithms"],
  },
  {
    id: "s3",
    name: "Physics",
    description: "Mechanics, Thermodynamics, and Quantum Physics.",
    icon: "⚛️",
    topics: ["Mechanics", "Thermodynamics", "Optics"],
  },
  {
    id: "s4",
    name: "Artificial Intelligence",
    description: "Machine Learning, Neural Networks, and NLP.",
    icon: "🤖",
    topics: ["Machine Learning", "Neural Networks", "NLP"],
  },
];

export const badges: Badge[] = [
  { id: "b1", name: "Top Contributor", icon: "🏆", description: "Awarded for high-quality answers." },
  { id: "b2", name: "Problem Solver", icon: "🧩", description: "Solved 10+ difficult questions." },
  { id: "b3", name: "Subject Expert", icon: "🎓", description: "Verified expert in a specific field." },
];

export const users: User[] = [
  {
    id: "u1",
    name: "Dr. Aris",
    role: "expert",
    email: "aris@example.com",
    reputation: 2500,
    badges: [badges[0], badges[2]],
    joinedAt: "2023-01-15",
    subjects: ["Mathematics", "Physics"],
    bio: "Professor of Mathematics with 10 years of teaching experience.",
  },
  {
    id: "u2",
    name: "Sarah Chen",
    role: "student",
    email: "sarah@example.com",
    reputation: 450,
    badges: [badges[1]],
    joinedAt: "2023-05-20",
    education: "Computer Science Undergraduate",
  },
];

export const trendingQuestions: Question[] = [
  {
    id: "q1",
    title: "How do I solve quadratic equations using factorization?",
    description: "I am unable to understand the second step of factorization. Please explain with an example like x² − 5x + 6 = 0.",
    authorId: "u2",
    subjectId: "s1",
    topic: "Algebra",
    tags: ["Quadratic Equations", "Factorization"],
    attachments: [],
    difficulty: "medium",
    status: "solved",
    createdAt: "2024-02-10T10:30:00Z",
    views: 1240,
    acceptedAnswerId: "a1",
  },
  {
    id: "q2",
    title: "Explain the difference between BFS and DFS in Graph Theory",
    description: "I'm struggling to understand when to use Breadth-First Search vs Depth-First Search. Can someone provide real-world examples?",
    authorId: "u2",
    subjectId: "s2",
    topic: "Algorithms",
    tags: ["Graphs", "Search Algorithms"],
    attachments: [],
    difficulty: "medium",
    status: "unsolved",
    createdAt: "2024-02-11T14:20:00Z",
    views: 850,
  },
  {
    id: "q3",
    title: "What is Retrieval-Augmented Generation (RAG)?",
    description: "I keep hearing about RAG in AI. How does it actually work with LLMs?",
    authorId: "u2",
    subjectId: "s4",
    topic: "NLP",
    tags: ["LLM", "RAG", "AI"],
    attachments: [],
    difficulty: "hard",
    status: "unsolved",
    createdAt: "2024-02-12T09:00:00Z",
    views: 2100,
  },
];

export const answers: Answer[] = [
  {
    id: "a1",
    questionId: "q1",
    authorId: "u1",
    content: "To solve x² − 5x + 6 = 0 by factorization:\n1. Find two numbers that multiply to 6 and add to -5.\n2. Those numbers are -2 and -3.\n3. Rewrite as (x - 2)(x - 3) = 0.\n4. Therefore, x = 2 or x = 3.",
    attachments: [],
    isAccepted: true,
    votes: 15,
    createdAt: "2024-02-10T11:15:00Z",
  },
];

export const communityStats: CommunityStat[] = [
  { label: "Active Students", value: "50,000+" },
  { label: "Questions Solved", value: "120,000+" },
  { label: "Subject Experts", value: "1,200+" },
  { label: "AI Solutions Generated", value: "85,000+" },
];
