import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Copy, Check, Star, Download, Tag, Code, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Skill } from '../data/skills';

const categoryLabels: Record<string, string> = {
  devtools: '开发工具', database: '数据库', cloud: '云服务', productivity: '生产力',
  media: '多媒体', search: '搜索', finance: '金融', communication: '通讯', browser: '浏览器', other: '其他',
};

const categoryColors: Record<string, string> = {
  devtools: '#3b82f6', database: '#22c55e', cloud: '#a855f7', productivity: '#f59e0b',
  media: '#ec4899', search: '#14b8a6', finance: '#ef4444', communication: '#6366f1', browser: '#f97316', other: '#6b7280',
};

interface SkillModalProps { skill: Skill | null; onClose: () => void; }

export default function SkillModal({ skill, onClose }: SkillModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (skill) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [skill]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleCopy = async () => {
    if (!skill) return;
    await navigator.clipboard.writeText(skill.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {skill && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }} transition={{ duration: 0.2, ease: 'easeOut' }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md bg-surface border border-border rounded-2xl p-6 shadow-2xl overflow-hidden">
            <div className="h-6 -mx-6 -mt-6 mb-4" style={{ backgroundColor: skill.bannerColor }} />
            <button onClick={onClose} className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-bg transition-colors"><X className="w-5 h-5 text-muted" /></button>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full border font-medium" style={{ color: categoryColors[skill.category], borderColor: categoryColors[skill.category] + '30', backgroundColor: categoryColors[skill.category] + '10' }}>{categoryLabels[skill.category]}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-bg border border-border text-muted flex items-center gap-1"><Code className="w-3 h-3" />{skill.language}</span>
              </div>
              <h2 className="text-2xl font-bold text-primary">{skill.name}</h2>
              <p className="text-xs text-muted mt-1 flex items-center gap-1"><User className="w-3 h-3" />{skill.author}</p>
            </div>
            <div className="mb-4 p-3 bg-bg rounded-xl border border-border">
              <a href={skill.url} target="_blank" rel="noopener noreferrer" className="font-mono-num text-sm text-accent hover:underline break-all">{skill.url}</a>
            </div>
            <p className="text-sm text-secondary leading-relaxed mb-4">{skill.description}</p>
            <div className="mb-5">
              <div className="flex items-center gap-1.5 mb-2"><Tag className="w-3.5 h-3.5 text-muted" /><span className="text-xs text-muted font-medium">标签</span></div>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (<span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-bg text-secondary border border-border">{tag}</span>))}
              </div>
            </div>
            <div className="flex items-center gap-4 mb-5 text-sm">
              <div className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /><span className="font-bold text-primary">{skill.rating}</span></div>
              <div className="flex items-center gap-1 text-muted"><Download className="w-4 h-4" /><span>{skill.installs}</span></div>
            </div>
            <div className="flex gap-3">
              <a href={skill.url} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors"><ExternalLink className="w-4 h-4" />访问仓库</a>
              <button onClick={handleCopy} className="flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-bg border border-border text-secondary font-medium text-sm hover:bg-surface-hover transition-colors">
                {copied ? <><Check className="w-4 h-4 text-green-500" /><span className="text-green-500">已复制</span></> : <><Copy className="w-4 h-4" />复制URL</>}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
