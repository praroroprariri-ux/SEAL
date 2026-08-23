export type UserRole = 'HQ' | 'Branch Manager' | 'Teacher';

export type PageId =
  | 'overview'
  | 'network'
  | 'regions'
  | 'branches'
  | 'branch-detail'
  | 'classes'
  | 'class-detail'
  | 'teachers'
  | 'teacher-detail'
  | 'sealive'
  | 'sealens'
  | 'interventions'
  | 'peer-matching'
  | 'sealearn'
  | 'data-sources'
  | 'settings';

export interface Region {
  name: string;
  nps: number;
  parentSatisfaction: number;
  teacherEngagement: number;
  classQuality: number;
  status: 'High Priority' | 'Medium Priority' | 'Strong Performance' | 'Stable';
}

export interface Branch extends Region {
  branch: string;
  teachers: number;
  classes: number;
}

export interface ClassRecord {
  id: string;
  branch: string;
  teacher: string;
  quality: number;
  engagement: number;
  interaction: number;
  status: 'Attention' | 'Strong' | 'Stable';
}

export interface Teacher {
  name: string;
  branch: string;
  classId: string;
  quality: number;
  engagement: number;
  interaction: number;
  delivery: number;
  training: number;
  status: 'Needs Development' | 'Strong' | 'Stable';
}

export interface Intervention {
  id: string;
  title: string;
  branch: string;
  teacher: string;
  owner: string;
  status: 'Recommended' | 'Under Review' | 'Approved' | 'In Progress' | 'Completed' | 'Re-measured';
  before: number;
  target: number;
  after?: number;
  focus: string;
}

export interface AppState {
  role: UserRole;
  page: PageId;
  selectedBranch: string;
  selectedClass: string;
  selectedTeacher: string;
  interventionApproved: boolean;
  sessionModalOpen: boolean;
  reviewModalOpen: boolean;
}
