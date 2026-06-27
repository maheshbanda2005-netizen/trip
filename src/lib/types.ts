export type UserRole = "student" | "expert" | "teacher" | "admin";

export type User = {
  id: string;
  name: string;
  role: UserRole;
  email: string;
  avatarUrl?: string;
  bio?: string;
  education?: string;
  subjects?: string[];
  reputation: number;
  badges: Badge[];
  joinedAt: string;
};

export type Badge = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type Subject = {
  id: string;
  name: string;
  description: string;
  icon: string;
  topics: string[];
};

export type Question = {
  id: string;
  title: string;
  description: string;
  authorId: string;
  subjectId: string;
  topic: string;
  tags: string[];
  attachments: string[];
  difficulty: "easy" | "medium" | "hard";
  status: "unsolved" | "solved";
  createdAt: string;
  views: number;
  acceptedAnswerId?: string;
};

export type Answer = {
  id: string;
  questionId: string;
  authorId: string;
  content: string;
  attachments: string[];
  isAccepted: boolean;
  votes: number;
  createdAt: string;
};

export type AIInsight = {
  id: string;
  questionId: string;
  type: "step-by-step" | "code-review" | "math-solver" | "summary";
  content: string;
  model: string;
};

export type CommunityStat = {
  label: string;
  value: string;
};

export type College = {
  id: string;
  name: string;
  location: string;
  description: string;
  tuition: number;
  majors: string[];
  imageUrl: string;
  ranking?: number;
  accreditation?: string;
  placementRate?: number;
  highestPackage?: number;
  facilities?: string[];
  established?: number;
  website?: string;
};
