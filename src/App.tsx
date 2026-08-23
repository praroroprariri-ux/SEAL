import { useState } from 'react';
import {
  BarChart3, BookOpen, Eye, Grid3x3, Home, LogOut, Menu, Settings, Users,
  MessageSquare, TrendingUp, Award, AlertCircle, Zap, Users2, Star, ClipboardCheck, ServerCog
} from 'lucide-react';
import {
  Card, KPI, Button, StatusBadge, MetricRow, SectionHeader,
  EmptyState, TeacherCard, PriorityCard
} from '@/components/ui';
import {
  centersList, allTeachers, interventions, regions, qualityDimensions,
  classes, classAssessments, parentFeedback,
} from '@/data/mockData';

type UserRole = 'HQ' | 'Branch Manager';
type PageId = 'overview' | 'branches' | 'classes' | 'sealearn' | 'sealive' | 'sealens' | 'interventions' | 'peer-matching' | 'regions' | 'network';

interface AppState {
  currentUser: { role: UserRole; name: string; initials: string };
  currentPage: PageId;
  selectedCenterId: string;
  sidebarOpen: boolean;
  selectedTeacherName: string | null;
}

// ========================================
// NAVIGATION & ACCESS CONTROL
// ========================================

function getVisibleNav(role: UserRole) {
  const baseNav = [
    { id: 'overview' as PageId, label: 'Overview', icon: Home },
    { id: 'classes' as PageId, label: 'Teachers', icon: Users },
    { id: 'sealive' as PageId, label: 'SEALive', icon: Eye },
    { id: 'sealens' as PageId, label: 'SEALens', icon: BarChart3 },
    { id: 'interventions' as PageId, label: 'Interventions', icon: Zap },
    { id: 'peer-matching' as PageId, label: 'Peer Matching', icon: Users2 },
    { id: 'sealearn' as PageId, label: 'SEALearn', icon: BookOpen },
  ];
  const adminNav = [
    { id: 'branches' as PageId, label: 'Branches', icon: Grid3x3 },
    { id: 'regions' as PageId, label: 'Regions', icon: Settings },
    { id: 'network' as PageId, label: 'Network', icon: AlertCircle },
  ];
  return role === 'HQ' ? [...baseNav, ...adminNav] : baseNav;
}

function canAccess(role: UserRole, pageId: PageId): boolean {
  const restricted: Record<UserRole, PageId[]> = {
    'HQ': [],
    'Branch Manager': ['branches', 'regions', 'network'],
  };
  return !restricted[role].includes(pageId);
}

// ========================================
// MAIN APP COMPONENT
// ========================================

export default function App() {
  const [state, setState] = useState<AppState>({
    currentUser: { role: 'HQ', name: 'Alya Pratama', initials: 'AP' },
    currentPage: 'overview',
    selectedCenterId: 'sby-dip', // Sparks English Diponegoro - Mr. Rangga's center
    sidebarOpen: true,
    selectedTeacherName: null,
  });

  const go = (pageId: PageId) => {
    if (canAccess(state.currentUser.role, pageId)) {
      setState(s => ({ ...s, currentPage: pageId }));
    }
  };

  const switchRole = (role: UserRole) => {
    const user = role === 'HQ'
      ? { role: 'HQ' as UserRole, name: 'Alya Pratama', initials: 'AP' }
      : { role: 'Branch Manager' as UserRole, name: 'Mr. Yusuf', initials: 'MY' };
    setState(s => ({
      ...s,
      currentUser: user,
      selectedCenterId: role === 'Branch Manager' ? 'sby-dip' : s.selectedCenterId,
    }));
  };

  const currentCenter = centersList.find(c => c.id === state.selectedCenterId) || centersList[0];
  const sameRegionCenters = centersList.filter(c => c.region === currentCenter.region);
  const visibleNav = getVisibleNav(state.currentUser.role);

  return (
    <div className="flex h-screen bg-slate-50">
      {/* ==================== SIDEBAR ==================== */}
      <div className={`fixed inset-y-0 left-0 z-20 w-64 transform bg-gradient-to-b from-navy-900 to-navy-800 shadow-lg transition-transform ${state.sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <div className="flex h-screen flex-col">
          <div className="flex items-center gap-3 border-b border-navy-700 px-6 py-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500 font-bold text-white">S</div>
            <div>
              <p className="font-bold text-white">SEAL</p>
              <p className="text-xs text-navy-300">Quality Monitor</p>
            </div>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
            {visibleNav.map(nav => {
              const IconComp = nav.icon;
              const isActive = state.currentPage === nav.id;
              return (
                <button
                  key={nav.id}
                  onClick={() => go(nav.id)}
                  className={`w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                    isActive ? 'bg-teal-500 text-white shadow-md' : 'text-navy-200 hover:bg-navy-700'
                  }`}
                >
                  <IconComp size={18} />
                  <span>{nav.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="space-y-3 border-t border-navy-700 px-3 py-6">
            <button className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-navy-200 hover:bg-navy-700">
              <Settings size={18} /><span>Settings</span>
            </button>
            <button className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-rose-300 hover:bg-navy-700">
              <LogOut size={18} /><span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setState(s => ({ ...s, sidebarOpen: !s.sidebarOpen }))}
                className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
              >
                <Menu size={20} />
              </button>
              <div>
                <h1 className="text-lg font-bold text-slate-900">
                  {visibleNav.find(n => n.id === state.currentPage)?.label || 'SEAL'}
                </h1>
                {state.currentUser.role === 'Branch Manager' && (
                  <p className="text-xs text-slate-500 mt-1">📍 {currentCenter.name}, {currentCenter.region}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-2 rounded-lg bg-slate-100 p-1">
                {(['HQ', 'Branch Manager'] as UserRole[]).map(role => (
                  <button
                    key={role}
                    onClick={() => switchRole(role)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
                      state.currentUser.role === role ? 'bg-white text-navy-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>

              {state.currentUser.role === 'Branch Manager' && (
                <select
                  value={state.selectedCenterId}
                  onChange={(e) => setState(s => ({ ...s, selectedCenterId: e.target.value }))}
                  className="text-xs border border-slate-300 rounded-lg px-3 py-2 text-slate-700 font-medium"
                >
                  {sameRegionCenters.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              )}

              <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-100 font-bold text-navy-900">
                  {state.currentUser.initials}
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-bold text-slate-900">{state.currentUser.name}</p>
                  <p className="text-xs text-slate-500">{state.currentUser.role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-6 py-8">
            {state.currentPage === 'overview' && <PageOverview state={state} setState={setState} currentCenter={currentCenter} />}
            {state.currentPage === 'branches' && <PageBranches />}
            {state.currentPage === 'classes' && <PageTeachers currentCenter={currentCenter} setState={setState} />}
            {state.currentPage === 'sealive' && <PageSEALive state={state} currentCenter={currentCenter} />}
            {state.currentPage === 'sealens' && <PageSEALens state={state} currentCenter={currentCenter} setState={setState} />}
            {state.currentPage === 'interventions' && <PageInterventions currentCenter={currentCenter} />}
            {state.currentPage === 'peer-matching' && <PagePeerMatching currentCenter={currentCenter} />}
            {state.currentPage === 'sealearn' && <PageSEALearn state={state} currentCenter={currentCenter} />}
            {state.currentPage === 'regions' && <PageRegions />}
            {state.currentPage === 'network' && <PageNetwork />}
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// PAGE: OVERVIEW
// ========================================

function PageOverview({ state, setState, currentCenter }: { state: AppState; setState: (s: AppState | ((prev: AppState) => AppState)) => void; currentCenter: typeof centersList[0] }) {
  const topPriority = [...allTeachers].filter(t => t.score < 70).sort((a, b) => a.score - b.score).slice(0, 3);

  return (
    <div className="space-y-8">
      <div>
        <SectionHeader
          eyebrow="Current Status"
          title={state.currentUser.role === 'HQ' ? 'Teaching Quality Network' : `${currentCenter.name}`}
          description={state.currentUser.role === 'HQ' ? '20 centers, 400+ teachers, 5 regions' : 'Real-time monitoring & insights'}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPI label="Teacher Engagement" value="58%" target="Target: 90%" trend="↑ 12%" trendLabel="vs last month" icon={<Users size={20} />} accent="navy" />
          <KPI label="NPS Score" value="41.5" target="Target: 60+" trend="↑ 8%" trendLabel="improving" icon={<Award size={20} />} accent="teal" />
          <KPI label="Parent Satisfaction" value="4.14/5" target="Target: 4.6" trend="↑ 3%" trendLabel="steady growth" icon={<MessageSquare size={20} />} accent="amber" />
          <KPI label="Active Interventions" value={String(interventions.length)} target="All regions" icon={<Zap size={20} />} accent="rose" />
        </div>
      </div>

      <div>
        <SectionHeader title="Priority Actions" description="Teachers needing immediate support" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPriority.map(teacher => (
            <PriorityCard
              key={teacher.name}
              title={teacher.name}
              metric1="Current Score"
              val1={teacher.score}
              metric2="Center"
              val2={teacher.center.replace('Sparks English ', '')}
              onClick={() => setState(s => ({ ...s, selectedTeacherName: teacher.name, currentPage: 'sealens' }))}
            />
          ))}
        </div>
      </div>

      {state.currentUser.role === 'HQ' && (
        <div>
          <SectionHeader title="Centers at a Glance" description="All 20 locations" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {centersList.map(c => (
              <Card key={c.id} className="p-4 text-center hover:shadow-md transition-all">
                <p className="font-bold text-sm text-slate-900">{c.name.replace('Sparks English ', '')}</p>
                <p className="text-xs text-slate-500 mt-1">{c.region}</p>
                <div className="mt-3 flex items-center justify-center gap-1">
                  <span className="text-lg font-bold text-navy-700">{c.teachers}</span>
                  <span className="text-xs text-slate-400">teachers</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ========================================
// PAGE: BRANCHES (HQ ONLY)
// ========================================

function PageBranches() {
  const regionNames = [...new Set(centersList.map(c => c.region))];

  return (
    <div className="space-y-8">
      <SectionHeader eyebrow="Network Overview" title="All 20 Centers" description="Complete branch infrastructure" />
      {regionNames.map(regionName => (
        <div key={regionName}>
          <h3 className="text-lg font-bold text-slate-900 mb-4">{regionName}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {centersList.filter(c => c.region === regionName).map(center => {
              const centerTeachers = allTeachers.filter(t => t.center === center.name);
              const avgScore = centerTeachers.length > 0
                ? Math.round(centerTeachers.reduce((sum, t) => sum + t.score, 0) / centerTeachers.length)
                : null;
              return (
                <Card key={center.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-slate-900">{center.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{center.city}</p>
                    </div>
                    <StatusBadge status="Active" variant="emerald" />
                  </div>
                  <div className="space-y-3 border-t border-slate-100 pt-4">
                    <MetricRow label="Total Teachers" value={center.teachers} color="navy" />
                    <MetricRow label="Total Classes" value={center.classes} color="teal" />
                    {avgScore !== null && <MetricRow label="Avg. Score (sample)" value={avgScore} benchmark={80} color="amber" suffix="/100" />}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ========================================
// PAGE: TEACHERS (per center)
// ========================================

function PageTeachers({ currentCenter, setState }: { currentCenter: typeof centersList[0]; setState: (s: AppState | ((prev: AppState) => AppState)) => void }) {
  const centerTeachers = allTeachers.filter(t => t.center === currentCenter.name);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow={currentCenter.region}
        title={`Teachers at ${currentCenter.name}`}
        description={centerTeachers.length > 0 ? `${centerTeachers.length} instructors on record` : 'No sample data yet for this center'}
      />
      {centerTeachers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centerTeachers.map(teacher => (
            <div key={teacher.name} onClick={() => setState(s => ({ ...s, selectedTeacherName: teacher.name, currentPage: 'sealens' }))} className="cursor-pointer">
              <TeacherCard name={teacher.name} score={teacher.score} status={teacher.status} />
            </div>
          ))}
        </div>
      ) : (
        <EmptyState title="No sample data" description="This center doesn't have detailed teacher records in the current mock dataset yet." />
      )}
    </div>
  );
}

// ========================================
// PAGE: SEALIVE
// ========================================

function PageSEALive({ state, currentCenter }: { state: AppState; currentCenter: typeof centersList[0] }) {
  const isHQ = state.currentUser.role === 'HQ';
  const visibleClasses = isHQ ? classes : classes.filter(c => c.branch === currentCenter.name);
  const indices: { key: 'studentEngagement' | 'teacherInteraction' | 'classroomManagement' | 'teachingDelivery' | 'learningResponsiveness'; label: string }[] = [
    { key: 'studentEngagement', label: 'Student Engagement' },
    { key: 'teacherInteraction', label: 'Teacher Interaction' },
    { key: 'classroomManagement', label: 'Classroom Management' },
    { key: 'teachingDelivery', label: 'Teaching Delivery' },
    { key: 'learningResponsiveness', label: 'Learning Responsiveness' },
  ];

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Quality Layer · On-site Processing"
        title="SEALive"
        description={isHQ ? 'Aggregated quality indices from every branch' : `Quality indices for ${currentCenter.name}`}
      />

      <Card className="p-5 bg-slate-50 border border-slate-200 flex items-start gap-3">
        <ServerCog size={18} className="text-slate-400 mt-0.5 shrink-0" />
        <p className="text-xs text-slate-500 leading-relaxed">
          CCTV feeds are processed locally on each branch's PC using Roboflow/YOLO. <strong>No video or images ever leave the branch</strong> — only the five aggregated index scores per class shown below are transmitted to HQ. This is by design, for child safety and data-privacy reasons.
        </p>
      </Card>

      {visibleClasses.length === 0 ? (
        <EmptyState title="No processed data yet" description="This center doesn't have SEALive sample data in the current mock dataset." />
      ) : (
        <div className="space-y-6">
          {visibleClasses.map(c => (
            <Card key={c.id} className="p-6">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h4 className="font-bold text-slate-900">{c.id}</h4>
                  <p className="text-xs text-slate-500 mt-1">{c.teacher}{isHQ ? ` · ${c.branch}` : ''} · last processed {c.lastProcessed}</p>
                </div>
                <StatusBadge status={c.status} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {indices.map(idx => (
                  <MetricRow key={idx.key} label={idx.label} value={c[idx.key]} benchmark={75} color="navy" />
                ))}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

// ========================================
// PAGE: SEALENS
// ========================================

function PageSEALens({ state, currentCenter, setState }: { state: AppState; currentCenter: typeof centersList[0]; setState: (s: AppState | ((prev: AppState) => AppState)) => void }) {
  const selectedTeacher = state.selectedTeacherName
    ? allTeachers.find(t => t.name === state.selectedTeacherName)
    : null;
  const centerTeachers = allTeachers.filter(t => t.center === currentCenter.name);
  const listForPicker = centerTeachers.length > 0 ? centerTeachers : allTeachers.slice(0, 6);

  const bestMentor = selectedTeacher
    ? [...allTeachers].filter(t => t.name !== selectedTeacher.name).sort((a, b) => b.score - a.score)[0]
    : null;

  return (
    <div className="space-y-8">
      <SectionHeader eyebrow="Analytics & Decision Support" title="SEALens" description="Identify → Diagnose → Recommend → Human Decision" />

      <Card className="p-6 bg-gradient-to-r from-navy-50 to-teal-50">
        <p className="text-sm font-bold text-slate-600 mb-3">Select a teacher for detailed analysis:</p>
        <div className="flex flex-wrap gap-2">
          {listForPicker.map(t => (
            <button
              key={t.name}
              onClick={() => setState(s => ({ ...s, selectedTeacherName: t.name }))}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                state.selectedTeacherName === t.name ? 'bg-navy-900 text-white shadow-md' : 'bg-white text-slate-700 border border-slate-200 hover:border-navy-300'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </Card>

      {selectedTeacher ? (
        <div className="space-y-6">
          <Card className="p-6 border-l-4 border-navy-700 bg-gradient-to-r from-navy-50 to-white">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedTeacher.name}</h3>
                <p className="text-sm text-slate-500 mt-1">{selectedTeacher.fullName} · {selectedTeacher.center} · {selectedTeacher.classId}</p>
              </div>
              <StatusBadge
                status={selectedTeacher.status}
                variant={selectedTeacher.status === 'Strong' ? 'emerald' : selectedTeacher.status === 'Needs Development' ? 'rose' : 'amber'}
              />
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <KPI label="Overall Score" value={String(selectedTeacher.score)} target="/100" icon={<TrendingUp size={20} />} accent="navy" />
            <KPI label="Engagement" value={String(selectedTeacher.engagement)} target="/100" icon={<Users size={20} />} accent="teal" />
            <KPI label="Status" value={selectedTeacher.status} icon={<Award size={20} />} accent="amber" />
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Quality Dimensions (illustrative)</p>
            <Card className="p-6 space-y-5">
              {qualityDimensions.map(d => (
                <MetricRow key={d.label} label={d.label} value={d.value} benchmark={d.benchmark} color="navy" />
              ))}
            </Card>
          </div>

          {selectedTeacher.status !== 'Strong' && bestMentor && (
            <Card className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500">
              <p className="text-xs font-bold text-emerald-700 mb-2">AI RECOMMENDATION — Peer Matching</p>
              <p className="text-sm font-bold text-slate-900">{selectedTeacher.name} ↔ {bestMentor.name}</p>
              <p className="text-sm text-slate-600 mt-2">
                {bestMentor.name} ({bestMentor.score}/100, {bestMentor.center.replace('Sparks English ', '')}) shows a strong associated pattern in student engagement.
                Suggested: structured peer-learning session. Final decision remains with the Branch Manager.
              </p>
            </Card>
          )}
        </div>
      ) : (
        <EmptyState title="Select a teacher" description="Click a teacher above to view detailed SEALens analytics." />
      )}
    </div>
  );
}

// ========================================
// PAGE: INTERVENTIONS
// ========================================

function PageInterventions({ currentCenter }: { currentCenter: typeof centersList[0] }) {
  const progressFor = (status: string, after?: number) => {
    if (after !== undefined || status === 'Completed' || status === 'Re-measured') return 100;
    if (status === 'In Progress') return 60;
    if (status === 'Approved') return 30;
    return 10;
  };

  return (
    <div className="space-y-8">
      <SectionHeader eyebrow="Action Layer" title="Intervention Management" description="From recommendation to measurable improvement" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interventions.map((int) => (
          <Card key={int.id} className="p-6 border-l-4 border-teal-500">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-bold text-slate-900">{int.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{int.branch} · {int.teacher} · Owner: {int.owner}</p>
              </div>
              <StatusBadge status={int.status} />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-4 mb-2">{int.type}</p>
            <div className="space-y-2">
              <MetricRow
                label={`Score: ${int.before} → ${int.after ?? int.target}`}
                value={progressFor(int.status, int.after)}
                benchmark={100}
                color={int.after ? 'teal' : 'amber'}
                suffix="%"
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ========================================
// PAGE: PEER MATCHING
// ========================================

function PagePeerMatching({ currentCenter }: { currentCenter: typeof centersList[0] }) {
  const centerTeachers = allTeachers.filter(t => t.center === currentCenter.name);
  const developing = centerTeachers.filter(t => t.score < 75);
  const mentors = [...allTeachers].sort((a, b) => b.score - a.score);

  return (
    <div className="space-y-8">
      <SectionHeader eyebrow="Action Layer" title="Peer Matching" description="Connect developing teachers with strong-performing peers network-wide" />

      {developing.length > 0 ? (
        <div className="space-y-8">
          {developing.map((dev) => {
            const mentor = mentors.find(m => m.name !== dev.name && m.score >= 85) || mentors[0];
            return (
              <Card key={dev.name} className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500">
                <h4 className="font-bold text-slate-900 mb-4">Pairing: {dev.name} ↔ {mentor.name}</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs font-bold text-slate-500 mb-2">DEVELOPING — {dev.center.replace('Sparks English ', '')}</p>
                    <p className="text-2xl font-bold text-amber-700">{dev.score}<span className="text-sm text-slate-400">/100</span></p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 mb-2">STRONG MENTOR — {mentor.center.replace('Sparks English ', '')}</p>
                    <p className="text-2xl font-bold text-emerald-700">{mentor.score}<span className="text-sm text-slate-400">/100</span></p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4">Structured peer-learning session · pending Branch Manager approval</p>
              </Card>
            );
          })}
        </div>
      ) : (
        <EmptyState title="No pairing needed" description="All teachers at this center are performing at or above the development threshold." />
      )}
    </div>
  );
}

// ========================================
// PAGE: SEALEARN
// ========================================

function PageSEALearn({ state, currentCenter }: { state: AppState; currentCenter: typeof centersList[0] }) {
  const isHQ = state.currentUser.role === 'HQ';
  const visibleAssessments = isHQ ? classAssessments : classAssessments.filter(a => a.branch === currentCenter.name);
  const visibleFeedback = isHQ ? parentFeedback : parentFeedback.filter(f => f.branch === currentCenter.name);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Learning Layer · Data from Canvas LMS"
        title="SEALearn"
        description={isHQ ? 'Assessment results & parent feedback across all branches' : `Assessment results & parent feedback for ${currentCenter.name}`}
      />

      <Card className="p-5 bg-slate-50 border border-slate-200 flex items-start gap-3">
        <ClipboardCheck size={18} className="text-slate-400 mt-0.5 shrink-0" />
        <p className="text-xs text-slate-500 leading-relaxed">
          Course delivery and curriculum stay inside Canvas itself. What flows into SEAL is only <strong>assessment results</strong> and <strong>parent feedback</strong> — the two data points that connect learning outcomes back to teaching quality.
        </p>
      </Card>

      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Assessment Results</p>
        {visibleAssessments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleAssessments.map(a => (
              <Card key={a.classId} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-slate-900">{a.classId}</h4>
                    {isHQ && <p className="text-xs text-slate-500 mt-1">{a.branch}</p>}
                  </div>
                  <p className="text-xs text-slate-400">Last: {a.lastAssessment}</p>
                </div>
                <div className="space-y-3">
                  <MetricRow label="Average Score" value={a.avgScore} benchmark={80} color="navy" suffix="/100" />
                  <MetricRow label="Completion Rate" value={a.completionRate} benchmark={90} color="teal" suffix="%" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState title="No assessment data" description="No Canvas assessment records for this center yet." />
        )}
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Parent Feedback</p>
        {visibleFeedback.length > 0 ? (
          <div className="space-y-4">
            {visibleFeedback.map(f => (
              <Card key={f.id} className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-bold text-sm text-slate-900">{f.parentLabel}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{f.classId}{isHQ ? ` · ${f.branch}` : ''} · {f.date}</p>
                  </div>
                  <div className="flex items-center gap-0.5 shrink-0">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className={i < f.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-2">{f.comment}</p>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState title="No feedback yet" description="No parent feedback records for this center yet." />
        )}
      </div>
    </div>
  );
}

// ========================================
// PAGE: REGIONS (HQ ONLY)
// ========================================

function PageRegions() {
  return (
    <div className="space-y-8">
      <SectionHeader eyebrow="Network Management" title="All Regions" description="Regional performance summary" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {regions.map(r => (
          <Card key={r.name} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h4 className="font-bold text-slate-900">{r.name}</h4>
              <StatusBadge status={r.status} />
            </div>
            <div className="space-y-3">
              <MetricRow label="NPS" value={r.nps} benchmark={60} color="navy" />
              <MetricRow label="Parent Satisfaction" value={Math.round(r.parentSatisfaction * 20)} benchmark={92} color="amber" suffix="/100" />
              <MetricRow label="Teacher Engagement" value={r.teacherEngagement} benchmark={90} color="teal" suffix="%" />
              <MetricRow label="Class Quality" value={r.classQuality} benchmark={78} color="rose" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ========================================
// PAGE: NETWORK (HQ ONLY)
// ========================================

function PageNetwork() {
  return (
    <div className="space-y-8">
      <SectionHeader eyebrow="System Status" title="Network & Infrastructure" description="Connectivity & system health across 20 centers" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPI label="Centers Online" value={String(centersList.length)} icon={<Zap size={20} />} accent="teal" />
        <KPI label="Total Teachers" value={String(centersList.reduce((sum, c) => sum + c.teachers, 0))} icon={<Users size={20} />} accent="navy" />
        <KPI label="Total Classes" value={String(centersList.reduce((sum, c) => sum + c.classes, 0))} icon={<TrendingUp size={20} />} accent="teal" />
      </div>
      <Card className="p-6">
        <h4 className="font-bold text-slate-900 mb-2">System Alerts</h4>
        <p className="text-sm text-slate-600">All systems operational. No alerts at this time.</p>
      </Card>
    </div>
  );
}