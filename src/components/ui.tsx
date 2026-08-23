import type { ReactNode } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, ChevronRight, CircleAlert, Info, Sparkles } from 'lucide-react';

export function Card({ children, className = '', onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  return <div onClick={onClick} className={`card-base ${onClick ? 'card-hover cursor-pointer' : ''} ${className}`}>{children}</div>;
}

export function Eyebrow({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return <div className="label-eyebrow flex items-center gap-2">{icon}{children}</div>;
}

export function StatusBadge({ status }: { status: string }) {
  const tone = status.includes('High') || status.includes('Attention') || status.includes('Needs') ? 'bg-rose-50 text-rose-700 border-rose-100' : status.includes('Strong') || status.includes('IMPROVED') || status.includes('Effective') ? 'bg-emerald-50 text-emerald-700 border-emerald-100' : status.includes('In Progress') || status.includes('Review') || status.includes('Medium') ? 'bg-amber-50 text-amber-700 border-amber-100' : 'bg-slate-100 text-slate-600 border-slate-200';
  return <span className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${tone}`}><span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />{status}</span>;
}

export function KPI({ label, value, target, trend, trendLabel, icon, accent = 'teal' }: { label: string; value: string; target?: string; trend?: string; trendLabel?: string; icon: ReactNode; accent?: 'teal' | 'navy' | 'amber' | 'rose' }) {
  const accents = { teal: 'bg-teal-50 text-teal-700', navy: 'bg-navy-50 text-navy-700', amber: 'bg-amber-50 text-amber-700', rose: 'bg-rose-50 text-rose-700' };
  return <Card className="p-5">
    <div className="flex items-start justify-between"><div className={`flex h-9 w-9 items-center justify-center rounded-lg ${accents[accent]}`}>{icon}</div>{trend && <span className="flex items-center gap-0.5 text-xs font-semibold text-emerald-600"><ArrowUpRight size={14} />{trend}</span>}</div>
    <div className="mt-5"><p className="text-sm font-medium text-slate-500">{label}</p><p className="mt-1 text-[30px] font-bold tracking-[-0.04em] text-slate-900 tabular-nums">{value}</p></div>
    {(target || trendLabel) && <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400"><span>{target}</span><span>{trendLabel}</span></div>}
  </Card>;
}

export function ProgressBar({ value, benchmark, color = 'teal', className = '' }: { value: number; benchmark?: number; color?: 'teal' | 'navy' | 'amber' | 'rose'; className?: string }) {
  const colors = { teal: 'bg-teal-500', navy: 'bg-navy-700', amber: 'bg-amber-500', rose: 'bg-rose-500' };
  return <div className={`relative h-2 w-full overflow-visible rounded-full bg-slate-100 ${className}`}><div className={`h-full rounded-full ${colors[color]} transition-all duration-700`} style={{ width: `${Math.min(value, 100)}%` }} />{benchmark !== undefined && <div className="absolute -top-1 h-4 w-px bg-slate-400" style={{ left: `${benchmark}%` }} />}</div>;
}

export function MetricRow({ label, value, benchmark, suffix = '', color = 'teal', className = '' }: { label: string; value: number; benchmark?: number; suffix?: string; color?: 'teal' | 'navy' | 'amber' | 'rose'; className?: string }) {
  return <div className={`group ${className}`}><div className="mb-2 flex items-center justify-between"><span className="text-sm text-slate-600">{label}</span><span className="text-sm font-bold text-slate-800 tabular-nums">{value}{suffix}</span></div><ProgressBar value={value} benchmark={benchmark} color={color} /></div>;
}

export function Trend({ positive = true, children }: { positive?: boolean; children: ReactNode }) {
  return <span className={`inline-flex items-center gap-1 text-xs font-semibold ${positive ? 'text-emerald-600' : 'text-rose-600'}`}>{positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}{children}</span>;
}

export function EmptyState({ title, description }: { title: string; description: string }) {
  return <Card className="flex flex-col items-center justify-center p-12 text-center"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400"><Info size={22} /></div><h3 className="font-semibold text-slate-800">{title}</h3><p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">{description}</p></Card>;
}

export function Button({ children, onClick, variant = 'primary', icon, className = '' }: { children: ReactNode; onClick?: () => void; variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; icon?: ReactNode; className?: string }) {
  const variants = { primary: 'bg-navy-900 text-white hover:bg-navy-800 shadow-sm', secondary: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50', ghost: 'text-slate-500 hover:bg-slate-100 hover:text-slate-800', danger: 'border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100' };
  return <button onClick={onClick} className={`focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2.5 text-xs font-semibold transition-all duration-200 ${variants[variant]} ${className}`}>{icon}{children}</button>;
}

export function InsightIcon() { return <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-50 text-teal-600"><Sparkles size={16} /></div>; }
export function CheckIcon() { return <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"><Check size={12} strokeWidth={3} /></div>; }
export function DetailLink({ children, onClick }: { children: ReactNode; onClick?: () => void }) { return <button onClick={onClick} className="group inline-flex items-center gap-1 text-xs font-semibold text-teal-700 transition-colors hover:text-teal-800">{children}<ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" /></button>; }
export function SectionHeader({ eyebrow, title, description, action }: { eyebrow?: string; title: string; description?: string; action?: ReactNode }) { return <div className="mb-5 flex items-end justify-between gap-4"><div>{eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2 className="mt-1 text-lg font-bold tracking-tight text-slate-900">{title}</h2>{description && <p className="mt-1 text-sm text-slate-500">{description}</p>}</div>{action}</div>; }
