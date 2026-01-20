
export interface Teacher {
  id: string;
  name: string;
  subject: string;
  image: string;
  qualification: string;
}

export interface Classroom {
  id: string;
  grade: string;
  section: string;
  teacher: Teacher;
  strength: number;
}

export interface BusRoute {
  id: string;
  routeNumber: string;
  driverName: string;
  contact: string;
  stops: string[];
}

export interface FeeStructure {
  grade: string;
  tuition: number;
  transport: number;
  lab: number;
  total: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  address?: string;
  rollNumber?: string;
  grade?: string;
  isLoggedIn: boolean;
}

export interface SafetyReport {
  id: string;
  type: 'bullying' | 'infrastructure' | 'cyber' | 'transport' | 'other';
  description: string;
  date: string;
  status: 'pending' | 'resolved';
}
