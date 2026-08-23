// 20 Centers Real Data
export const centersList = [
  // Jabodetabek (12)
  { id: 'jkt-td', name: 'Sparks English Tanjung Duren', region: 'Jabodetabek', city: 'Jakarta Barat', teachers: 8, classes: 12 },
  { id: 'jkt-klp', name: 'Sparks English Kalimalang', region: 'Jabodetabek', city: 'Jakarta Timur', teachers: 7, classes: 10 },
  { id: 'jkt-klg', name: 'Sparks English Kelapa Gading', region: 'Jabodetabek', city: 'Jakarta Utara', teachers: 9, classes: 13 },
  { id: 'jkt-pjt', name: 'Sparks English Pejaten', region: 'Jabodetabek', city: 'Jakarta Selatan', teachers: 6, classes: 9 },
  { id: 'jkt-tbt', name: 'Sparks English Tebet', region: 'Jabodetabek', city: 'Jakarta Selatan', teachers: 7, classes: 10 },
  { id: 'tng-bsd', name: 'Sparks English BSD', region: 'Jabodetabek', city: 'Tangerang Selatan', teachers: 8, classes: 11 },
  { id: 'tng-btn', name: 'Sparks English Bintaro', region: 'Jabodetabek', city: 'Tangerang Selatan', teachers: 6, classes: 9 },
  { id: 'tng-city', name: 'Sparks English Tangerang City', region: 'Jabodetabek', city: 'Kota Tangerang', teachers: 7, classes: 10 },
  { id: 'bks-kmp', name: 'Sparks English Kemang Pratama', region: 'Jabodetabek', city: 'Bekasi', teachers: 8, classes: 12 },
  { id: 'bks-hnd', name: 'Sparks English Harapan Indah', region: 'Jabodetabek', city: 'Bekasi', teachers: 6, classes: 9 },
  { id: 'dpk-mrg', name: 'Sparks English Margonda', region: 'Jabodetabek', city: 'Depok', teachers: 7, classes: 10 },
  { id: 'bgr-center', name: 'Sparks English Bogor', region: 'Jabodetabek', city: 'Bogor', teachers: 5, classes: 7 },
  // Bandung (3)
  { id: 'bdg-dag', name: 'Sparks English Dago', region: 'Bandung', city: 'Bandung', teachers: 6, classes: 9 },
  { id: 'bdg-stb', name: 'Sparks English Setiabudi', region: 'Bandung', city: 'Bandung', teachers: 5, classes: 8 },
  { id: 'bdg-bb', name: 'Sparks English Buah Batu', region: 'Bandung', city: 'Bandung', teachers: 5, classes: 7 },
  // Yogyakarta (2)
  { id: 'ygy-mlb', name: 'Sparks English Malioboro', region: 'Yogyakarta', city: 'Yogyakarta', teachers: 4, classes: 6 },
  { id: 'ygy-stn', name: 'Sparks English Seturan', region: 'Yogyakarta', city: 'Sleman', teachers: 4, classes: 6 },
  // Surabaya (2)
  { id: 'sby-dip', name: 'Sparks English Diponegoro', region: 'Surabaya', city: 'Surabaya', teachers: 7, classes: 10 },
  { id: 'sby-drm', name: 'Sparks English Darmo', region: 'Surabaya', city: 'Surabaya', teachers: 6, classes: 9 },
  // Bali (1)
  { id: 'bali-sr', name: 'Sparks English Sunset Road', region: 'Bali', city: 'Denpasar', teachers: 5, classes: 7 },
];

// Teacher Names (Full Database)
export const allTeachers = [
  // Jabodetabek
  { name: 'Mr. Rangga', fullName: 'Rangga Saputra', center: 'Sparks English Diponegoro', classId: 'Teens A', score: 62, engagement: 52, status: 'Needs Development' },
  { name: 'Ms. Dinda', fullName: 'Dinda Amelia', center: 'Sparks English Sunset Road', classId: 'Teens B', score: 91, engagement: 91, status: 'Strong' },
  { name: 'Mr. Budi', fullName: 'Budi Hartono', center: 'Sparks English Tanjung Duren', classId: 'Kids A', score: 78, engagement: 82, status: 'Strong' },
  { name: 'Ms. Siti', fullName: 'Siti Nurhaliza', center: 'Sparks English Kalimalang', classId: 'Adult A', score: 85, engagement: 88, status: 'Strong' },
  { name: 'Mr. Romi', fullName: 'Romi Harahap', center: 'Sparks English Kelapa Gading', classId: 'Little Sparks A', score: 73, engagement: 76, status: 'Stable' },
  { name: 'Ms. Eka', fullName: 'Eka Suryani', center: 'Sparks English Pejaten', classId: 'Kids B', score: 68, engagement: 70, status: 'Stable' },
  { name: 'Mr. Hendra', fullName: 'Hendra Wijaya', center: 'Sparks English Tebet', classId: 'Teens C', score: 81, engagement: 84, status: 'Strong' },
  { name: 'Ms. Yuki', fullName: 'Yuki Tamaki', center: 'Sparks English BSD', classId: 'Adult B', score: 86, engagement: 89, status: 'Strong' },
  { name: 'Mr. Adi', fullName: 'Adi Kusuma', center: 'Sparks English Bintaro', classId: 'Exam Prep A', score: 79, engagement: 81, status: 'Strong' },
  { name: 'Ms. Rina', fullName: 'Rina Kurniawan', center: 'Sparks English Tangerang City', classId: 'Kids C', score: 72, engagement: 75, status: 'Stable' },
  { name: 'Mr. Farid', fullName: 'Farid Rahman', center: 'Sparks English Kemang Pratama', classId: 'Junior A', score: 65, engagement: 68, status: 'Needs Development' },
  { name: 'Ms. Lina', fullName: 'Lina Sulaiman', center: 'Sparks English Harapan Indah', classId: 'Little Sparks B', score: 74, engagement: 77, status: 'Stable' },
  { name: 'Mr. Bambang', fullName: 'Bambang Suryanto', center: 'Sparks English Margonda', classId: 'Teens D', score: 88, engagement: 90, status: 'Strong' },
  { name: 'Ms. Nita', fullName: 'Nita Wijaya', center: 'Sparks English Bogor', classId: 'Kids D', score: 75, engagement: 78, status: 'Stable' },
  // Bandung
  { name: 'Mr. Irvan', fullName: 'Irvan Setiawan', center: 'Sparks English Dago', classId: 'Adult C', score: 82, engagement: 85, status: 'Strong' },
  { name: 'Ms. Citra', fullName: 'Citra Dewi', center: 'Sparks English Setiabudi', classId: 'Teens E', score: 71, engagement: 73, status: 'Stable' },
  { name: 'Mr. Riandi', fullName: 'Riandi Gunawan', center: 'Sparks English Buah Batu', classId: 'Kids E', score: 66, engagement: 69, status: 'Needs Development' },
  // Yogyakarta
  { name: 'Ms. Dwi', fullName: 'Dwi Lestari', center: 'Sparks English Malioboro', classId: 'Junior B', score: 80, engagement: 83, status: 'Strong' },
  { name: 'Mr. Arif', fullName: 'Arif Budiman', center: 'Sparks English Seturan', classId: 'Exam Prep B', score: 77, engagement: 79, status: 'Strong' },
  // Surabaya
  { name: 'Mr. Toni', fullName: 'Toni Hartadi', center: 'Sparks English Diponegoro', classId: 'Little Sparks C', score: 69, engagement: 71, status: 'Stable' },
  // Bali
  { name: 'Ms. Putri', fullName: 'Putri Maharani', center: 'Sparks English Sunset Road', classId: 'Adult D', score: 84, engagement: 87, status: 'Strong' },
];

export const regions = [
  { name: 'Jabodetabek', nps: 40, parentSatisfaction: 4.08, teacherEngagement: 58, classQuality: 75, status: 'High Priority' },
  { name: 'Bandung', nps: 39, parentSatisfaction: 4.02, teacherEngagement: 56, classQuality: 72, status: 'Medium Priority' },
  { name: 'Yogyakarta', nps: 43, parentSatisfaction: 4.18, teacherEngagement: 61, classQuality: 79, status: 'Stable' },
  { name: 'Surabaya', nps: 36, parentSatisfaction: 3.98, teacherEngagement: 54, classQuality: 68, status: 'High Priority' },
  { name: 'Bali', nps: 45, parentSatisfaction: 4.32, teacherEngagement: 65, classQuality: 82, status: 'Strong Performance' },
];

export const branches = [
  { branch: 'Sparks English Tanjung Duren', name: 'Jabodetabek', nps: 41, parentSatisfaction: 4.12, classQuality: 76, status: 'Stable' },
  { branch: 'Sparks English Kalimalang', name: 'Jabodetabek', nps: 39, parentSatisfaction: 4.05, classQuality: 74, status: 'Medium Priority' },
  { branch: 'Sparks English Kelapa Gading', name: 'Jabodetabek', nps: 42, parentSatisfaction: 4.15, classQuality: 78, status: 'Stable' },
  { branch: 'Sparks English Pejaten', name: 'Jabodetabek', nps: 38, parentSatisfaction: 4.00, classQuality: 72, status: 'Medium Priority' },
  { branch: 'Sparks English Tebet', name: 'Jabodetabek', nps: 40, parentSatisfaction: 4.10, classQuality: 75, status: 'Stable' },
  { branch: 'Sparks English BSD', name: 'Jabodetabek', nps: 43, parentSatisfaction: 4.20, classQuality: 79, status: 'Stable' },
  { branch: 'Sparks English Bintaro', name: 'Jabodetabek', nps: 39, parentSatisfaction: 4.02, classQuality: 73, status: 'Medium Priority' },
  { branch: 'Sparks English Tangerang City', name: 'Jabodetabek', nps: 41, parentSatisfaction: 4.12, classQuality: 76, status: 'Stable' },
  { branch: 'Sparks English Kemang Pratama', name: 'Jabodetabek', nps: 38, parentSatisfaction: 3.98, classQuality: 71, status: 'High Priority' },
  { branch: 'Sparks English Harapan Indah', name: 'Jabodetabek', nps: 40, parentSatisfaction: 4.08, classQuality: 74, status: 'Stable' },
  { branch: 'Sparks English Margonda', name: 'Jabodetabek', nps: 42, parentSatisfaction: 4.18, classQuality: 77, status: 'Stable' },
  { branch: 'Sparks English Bogor', name: 'Jabodetabek', nps: 37, parentSatisfaction: 3.95, classQuality: 69, status: 'High Priority' },
  { branch: 'Sparks English Dago', name: 'Bandung', nps: 40, parentSatisfaction: 4.08, classQuality: 74, status: 'Stable' },
  { branch: 'Sparks English Setiabudi', name: 'Bandung', nps: 38, parentSatisfaction: 4.00, classQuality: 70, status: 'Medium Priority' },
  { branch: 'Sparks English Buah Batu', name: 'Bandung', nps: 39, parentSatisfaction: 4.05, classQuality: 72, status: 'Medium Priority' },
  { branch: 'Sparks English Malioboro', name: 'Yogyakarta', nps: 44, parentSatisfaction: 4.25, classQuality: 80, status: 'Stable' },
  { branch: 'Sparks English Seturan', name: 'Yogyakarta', nps: 42, parentSatisfaction: 4.12, classQuality: 78, status: 'Stable' },
  { branch: 'Sparks English Diponegoro', name: 'Surabaya', nps: 37, parentSatisfaction: 4.00, classQuality: 70, status: 'High Priority' },
  { branch: 'Sparks English Darmo', name: 'Surabaya', nps: 35, parentSatisfaction: 3.95, classQuality: 66, status: 'High Priority' },
  { branch: 'Sparks English Sunset Road', name: 'Bali', nps: 45, parentSatisfaction: 4.32, classQuality: 82, status: 'Strong Performance' },
];

// SEALive output: per-class quality indices, already processed locally at branch PC
// (YOLO/Roboflow runs on-site; only these aggregated numbers are transmitted to HQ — no video/images)
export const classes = [
  { id: 'Diponegoro-Teens-A', branch: 'Sparks English Diponegoro', region: 'Surabaya', teacher: 'Mr. Rangga', quality: 62, studentEngagement: 52, teacherInteraction: 59, classroomManagement: 70, teachingDelivery: 65, learningResponsiveness: 58, status: 'Attention', lastProcessed: '2026-08-19 07:30' },
  { id: 'Diponegoro-Little-A', branch: 'Sparks English Diponegoro', region: 'Surabaya', teacher: 'Mr. Toni', quality: 69, studentEngagement: 71, teacherInteraction: 68, classroomManagement: 72, teachingDelivery: 70, learningResponsiveness: 67, status: 'Stable', lastProcessed: '2026-08-19 09:15' },
  { id: 'Sunset-Teens-B', branch: 'Sparks English Sunset Road', region: 'Bali', teacher: 'Ms. Dinda', quality: 91, studentEngagement: 91, teacherInteraction: 89, classroomManagement: 93, teachingDelivery: 92, learningResponsiveness: 90, status: 'Strong', lastProcessed: '2026-08-19 08:00' },
  { id: 'Tanjung-Kids-A', branch: 'Sparks English Tanjung Duren', region: 'Jabodetabek', teacher: 'Mr. Budi', quality: 78, studentEngagement: 82, teacherInteraction: 81, classroomManagement: 80, teachingDelivery: 79, learningResponsiveness: 76, status: 'Strong', lastProcessed: '2026-08-19 10:00' },
  { id: 'Kalimalang-Adult-A', branch: 'Sparks English Kalimalang', region: 'Jabodetabek', teacher: 'Ms. Siti', quality: 85, studentEngagement: 88, teacherInteraction: 87, classroomManagement: 86, teachingDelivery: 85, learningResponsiveness: 83, status: 'Strong', lastProcessed: '2026-08-19 14:00' },
  { id: 'Kelapa-Little-A', branch: 'Sparks English Kelapa Gading', region: 'Jabodetabek', teacher: 'Mr. Romi', quality: 73, studentEngagement: 76, teacherInteraction: 75, classroomManagement: 74, teachingDelivery: 72, learningResponsiveness: 71, status: 'Stable', lastProcessed: '2026-08-19 16:30' },
  { id: 'Pejaten-Kids-B', branch: 'Sparks English Pejaten', region: 'Jabodetabek', teacher: 'Ms. Eka', quality: 68, studentEngagement: 70, teacherInteraction: 67, classroomManagement: 69, teachingDelivery: 67, learningResponsiveness: 65, status: 'Stable', lastProcessed: '2026-08-19 15:00' },
  { id: 'Tebet-Teens-C', branch: 'Sparks English Tebet', region: 'Jabodetabek', teacher: 'Mr. Hendra', quality: 81, studentEngagement: 84, teacherInteraction: 83, classroomManagement: 82, teachingDelivery: 80, learningResponsiveness: 78, status: 'Strong', lastProcessed: '2026-08-19 17:00' },
];

// SEALearn source: data pulled from Canvas LMS — only assessment results & parent feedback,
// not course-management/curriculum-delivery UI (that stays inside Canvas itself)
export const classAssessments = [
  { classId: 'Diponegoro-Teens-A', branch: 'Sparks English Diponegoro', avgScore: 66, completionRate: 78, lastAssessment: '2026-08-15' },
  { classId: 'Diponegoro-Little-A', branch: 'Sparks English Diponegoro', avgScore: 74, completionRate: 85, lastAssessment: '2026-08-16' },
  { classId: 'Sunset-Teens-B', branch: 'Sparks English Sunset Road', avgScore: 92, completionRate: 97, lastAssessment: '2026-08-14' },
  { classId: 'Tanjung-Kids-A', branch: 'Sparks English Tanjung Duren', avgScore: 81, completionRate: 90, lastAssessment: '2026-08-17' },
  { classId: 'Kalimalang-Adult-A', branch: 'Sparks English Kalimalang', avgScore: 87, completionRate: 94, lastAssessment: '2026-08-15' },
  { classId: 'Kelapa-Little-A', branch: 'Sparks English Kelapa Gading', avgScore: 75, completionRate: 82, lastAssessment: '2026-08-16' },
  { classId: 'Pejaten-Kids-B', branch: 'Sparks English Pejaten', avgScore: 70, completionRate: 76, lastAssessment: '2026-08-18' },
  { classId: 'Tebet-Teens-C', branch: 'Sparks English Tebet', avgScore: 83, completionRate: 89, lastAssessment: '2026-08-17' },
];

export const parentFeedback = [
  { id: 'PF-001', branch: 'Sparks English Diponegoro', classId: 'Diponegoro-Teens-A', parentLabel: 'Orang Tua Siswa A', rating: 3, comment: 'Anak saya bilang kelasnya kurang interaktif, jarang ditanya balik sama gurunya.', date: '2026-08-14' },
  { id: 'PF-002', branch: 'Sparks English Diponegoro', classId: 'Diponegoro-Teens-A', parentLabel: 'Orang Tua Siswa B', rating: 3, comment: 'Progress lumayan tapi anak agak bosan, mungkin metodenya kurang variatif.', date: '2026-08-16' },
  { id: 'PF-003', branch: 'Sparks English Sunset Road', classId: 'Sunset-Teens-B', parentLabel: 'Orang Tua Siswa C', rating: 5, comment: 'Puas banget, Ms. Dinda selalu kasih feedback detail tiap minggu.', date: '2026-08-13' },
  { id: 'PF-004', branch: 'Sparks English Sunset Road', classId: 'Sunset-Teens-B', parentLabel: 'Orang Tua Siswa D', rating: 5, comment: 'Anak makin percaya diri ngomong Inggris, terlihat progressnya.', date: '2026-08-15' },
  { id: 'PF-005', branch: 'Sparks English Tanjung Duren', classId: 'Tanjung-Kids-A', parentLabel: 'Orang Tua Siswa E', rating: 4, comment: 'Overall bagus, cuma jadwal kadang keganti mendadak.', date: '2026-08-17' },
  { id: 'PF-006', branch: 'Sparks English Kalimalang', classId: 'Kalimalang-Adult-A', parentLabel: 'Peserta Kelas F', rating: 4, comment: 'Materi relevan buat kebutuhan kerja, instrukturnya responsif.', date: '2026-08-15' },
  { id: 'PF-007', branch: 'Sparks English Pejaten', classId: 'Pejaten-Kids-B', parentLabel: 'Orang Tua Siswa G', rating: 3, comment: 'Cukup baik, tapi laporan progress bulanan telat diterima.', date: '2026-08-18' },
  { id: 'PF-008', branch: 'Sparks English Tebet', classId: 'Tebet-Teens-C', parentLabel: 'Orang Tua Siswa H', rating: 4, comment: 'Guru komunikatif, anak semangat berangkat les.', date: '2026-08-17' },
];

interface Intervention {
  id: string;
  title: string;
  type: string;
  branch: string;
  teacher: string;
  owner: string;
  status: string;
  before: number;
  target: number;
  after?: number;
}

export const interventions: Intervention[] = [
  { id: 'INT-001', title: 'Peer Learning Session', type: 'Peer Matching', branch: 'Sparks English Diponegoro', teacher: 'Mr. Rangga', owner: 'Branch Manager', status: 'Recommended', before: 62, target: 72 },
  { id: 'INT-002', title: 'Engagement Micro Course', type: 'Micro Learning', branch: 'Sparks English Kemang Pratama', teacher: 'Mr. Farid', owner: 'HQ', status: 'Approved', before: 65, target: 75, after: 73 },
  { id: 'INT-003', title: 'Direct Coaching Program', type: 'Human Coaching', branch: 'Sparks English Bogor', teacher: 'Ms. Nita', owner: 'Supervisor', status: 'In Progress', before: 72, target: 82 },
  { id: 'INT-004', title: 'Class Restructuring', type: 'Other Operational Action', branch: 'Sparks English Darmo', teacher: 'All', owner: 'HQ', status: 'Under Review', before: 66, target: 76 },
  { id: 'INT-024', title: 'Student Engagement Techniques', type: 'Peer Matching', branch: 'Sparks English Diponegoro', teacher: 'Mr. Rangga', owner: 'Branch Manager', status: 'Recommended', before: 52, target: 62 },
];

export const qualityDimensions = [
  { label: 'Student Engagement Index', value: 52, benchmark: 74 },
  { label: 'Teacher Interaction Index', value: 59, benchmark: 76 },
  { label: 'Classroom Management Index', value: 70, benchmark: 78 },
  { label: 'Teaching Delivery Index', value: 65, benchmark: 80 },
  { label: 'Learning Responsiveness Index', value: 58, benchmark: 75 },
];

export const teachers = allTeachers; // For backward compatibility

export const networkTrend = [54, 55, 56, 57, 58, 58, 59, 58, 60, 61];
export const npsTrend = [38, 39, 40, 40, 41, 41, 42, 41, 42, 41];