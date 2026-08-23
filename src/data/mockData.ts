import type { Branch, ClassRecord, Intervention, Region, Teacher } from '@/types';

export const regions: Region[] = [
  { name: 'Jabodetabek', nps: 44, parentSatisfaction: 4.18, teacherEngagement: 61, classQuality: 76, status: 'Stable' },
  { name: 'Bandung', nps: 42, parentSatisfaction: 4.11, teacherEngagement: 59, classQuality: 72, status: 'Medium Priority' },
  { name: 'Yogyakarta', nps: 39, parentSatisfaction: 4.02, teacherEngagement: 57, classQuality: 69, status: 'Medium Priority' },
  { name: 'Surabaya', nps: 36, parentSatisfaction: 3.98, teacherEngagement: 58, classQuality: 61, status: 'High Priority' },
  { name: 'Bali', nps: 51, parentSatisfaction: 4.35, teacherEngagement: 67, classQuality: 84, status: 'Strong Performance' },
];

export const branches: Branch[] = regions.map((region) => ({
  ...region,
  branch: region.name,
  teachers: region.name === 'Jabodetabek' ? 164 : region.name === 'Bandung' ? 62 : region.name === 'Yogyakarta' ? 48 : region.name === 'Surabaya' ? 58 : 36,
  classes: region.name === 'Jabodetabek' ? 36 : region.name === 'Bandung' ? 14 : region.name === 'Yogyakarta' ? 11 : region.name === 'Surabaya' ? 13 : 12,
}));

export const classes: ClassRecord[] = [
  { id: 'Surabaya A1', branch: 'Surabaya', teacher: 'Teacher A', quality: 61, engagement: 52, interaction: 59, status: 'Attention' },
  { id: 'Surabaya A3', branch: 'Surabaya', teacher: 'Teacher C', quality: 64, engagement: 58, interaction: 62, status: 'Attention' },
  { id: 'Surabaya B2', branch: 'Surabaya', teacher: 'Teacher D', quality: 68, engagement: 61, interaction: 65, status: 'Stable' },
  { id: 'Bali B3', branch: 'Bali', teacher: 'Teacher B', quality: 88, engagement: 91, interaction: 86, status: 'Strong' },
  { id: 'Jabodetabek C2', branch: 'Jabodetabek', teacher: 'Teacher E', quality: 78, engagement: 76, interaction: 79, status: 'Stable' },
  { id: 'Bandung A2', branch: 'Bandung', teacher: 'Teacher F', quality: 72, engagement: 69, interaction: 71, status: 'Stable' },
  { id: 'Yogyakarta A1', branch: 'Yogyakarta', teacher: 'Teacher G', quality: 69, engagement: 63, interaction: 67, status: 'Attention' },
];

export const teachers: Teacher[] = [
  { name: 'Teacher A', branch: 'Surabaya', classId: 'A1', quality: 62, engagement: 52, interaction: 59, delivery: 64, training: 76, status: 'Needs Development' },
  { name: 'Teacher B', branch: 'Bali', classId: 'B3', quality: 91, engagement: 91, interaction: 86, delivery: 94, training: 94, status: 'Strong' },
  { name: 'Teacher C', branch: 'Surabaya', classId: 'A3', quality: 65, engagement: 58, interaction: 62, delivery: 67, training: 81, status: 'Needs Development' },
  { name: 'Teacher D', branch: 'Surabaya', classId: 'B2', quality: 68, engagement: 61, interaction: 65, delivery: 71, training: 78, status: 'Stable' },
  { name: 'Teacher E', branch: 'Jabodetabek', classId: 'C2', quality: 79, engagement: 76, interaction: 79, delivery: 82, training: 88, status: 'Stable' },
  { name: 'Teacher F', branch: 'Bandung', classId: 'A2', quality: 73, engagement: 69, interaction: 71, delivery: 76, training: 85, status: 'Stable' },
  { name: 'Teacher G', branch: 'Yogyakarta', classId: 'A1', quality: 70, engagement: 63, interaction: 67, delivery: 72, training: 73, status: 'Needs Development' },
];

export const interventions: Intervention[] = [
  { id: 'INT-024', title: 'Peer Learning — Student Engagement', branch: 'Surabaya', teacher: 'Teacher A', owner: 'Branch Manager', status: 'In Progress', before: 52, target: 62, after: 64, focus: 'Student Engagement' },
  { id: 'INT-021', title: 'Coaching — Questioning Techniques', branch: 'Yogyakarta', teacher: 'Teacher G', owner: 'Branch Manager', status: 'Under Review', before: 48, target: 60, focus: 'Questioning Frequency' },
  { id: 'INT-019', title: 'Peer Learning — Classroom Flow', branch: 'Bandung', teacher: 'Teacher F', owner: 'Branch Manager', status: 'Completed', before: 61, target: 70, after: 73, focus: 'Classroom Management' },
];

export const networkTrend = [58, 59, 57, 60, 61, 60, 63, 62, 65, 64, 67, 66, 69, 68, 71, 74];
export const npsTrend = [34, 35, 36, 35, 37, 38, 37, 39, 38, 40, 39, 41, 40, 42, 41, 41.5];
export const qualityTrend = [66, 68, 67, 69, 70, 69, 71, 70, 72, 71, 73, 72, 73, 74, 73, 74];

export const qualityDimensions = [
  { label: 'Student Engagement', value: 52, benchmark: 74 },
  { label: 'Teacher Interaction', value: 59, benchmark: 76 },
  { label: 'Classroom Management', value: 70, benchmark: 78 },
  { label: 'Teaching Delivery', value: 64, benchmark: 75 },
  { label: 'Learning Responsiveness', value: 61, benchmark: 73 },
];

export const searchItems = [
  { type: 'Branch', label: 'Surabaya', meta: 'High Priority · Region' },
  { type: 'Branch', label: 'Bali', meta: 'Strong Performance · Region' },
  { type: 'Class', label: 'Surabaya A1', meta: 'Teacher A · Class' },
  { type: 'Teacher', label: 'Teacher A', meta: 'Surabaya · A1' },
  { type: 'Teacher', label: 'Teacher B', meta: 'Bali · B3' },
];
