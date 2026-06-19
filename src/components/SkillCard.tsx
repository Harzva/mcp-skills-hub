import { motion } from 'framer-motion';
import { Star, ExternalLink, Copy, Download, Code } from 'lucide-react';
import { useState } from 'react';
import type { Skill } from '../data/skills';

const categoryTagStyles: Record<string, string> = {
  devtools: 'bg-blue-50 text-blue-600 border-blue-200',
  database: 'bg-green-50 text-green-600 border-green-200',
  cloud: 'bg-purple-50 text-purple-600 border-purple-200',
  productivity: 'bg-amber-50 text-amber-600 border-amber-200',
  media: 'bg-pink-50 text-pink-600 border-pink-200',
  search: 'bg-teal-50 text-teal-600 border-teal-200',
  finance: 'bg-red-50 text-red-600 border-red-200',
  communication: 'bg-indigo-50 text-indigo-600 border-indigo-200',
  browser: 'bg-orange-50 text-orange-600 border-orange-200',
  other: 'bg-gray-50 text-gray-600 border-gray-200',
};

const categoryLabels: Record<string, string> = {
  devtools: '开发工具', database: '数据库', cloud: '云服务', productivity: '生产力',
  media: '多媒体', search: '搜索', finance: '金融', communication: '通讯', browser: '浏览器', other: '其他',
};

function getAvatarColor(id: string): { bg: string; text: string } {
  const colors = [
    { bg: 'bg-blue-100', text: 'text-blue-600' },
    { bg: 'bg-green-100', text: 'text-green-600' },
    { bg: 'bg-purple-100', text: 'text-purple-600' },
    { bg: 'bg-amber-100', text: 'text-amber-600' },
    { bg: 'bg-pink-100', text: 'text-pink-600' },
    { bg: 'bg-teal-100', text: 'text-teal-600' },
    { bg: 'bg-red-100', text: 'text-red-600' },
    { bg: 'bg-indigo-100', text: 'text-indigo-600' },
    { bg: 'bg-orange-100', text: 'text-orange-600' },
    { bg: 'bg-cyan-100', text: 'text-cyan-600' },
  ];
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function getScreenshotUrl(url: string): string {
  return `https://image.thum.io/get/width/400/crop/600/${encodeURIComponent(url)}`;
}

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      <span className="text-sm font-bold text-primary">{rating}</span>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`w-3.5 h-3.5 ${i < fullStars ? 'text-yellow-400 fill-yellow-400' : i === fullStars && hasHalf ? 'text-yellow-400 fill-yellow-400/50' : 'text-gray-200'}`} />
        ))}
      </div>
    </div>
  );
}

interface SkillCardProps { skill: Skill; index: number; onClick: () => void; }

function CardBanner({ skill }: { skill: Skill }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const avatarColor = getAvatarColor(skill.id);
  const firstChar = skill.name[0] || '?';
  const screenshotUrl = getScreenshotUrl(skill.url);

  if (imgError) {
    return (
      <div className={`relative h-36 w-full flex items-center justify-center ${avatarColor.bg}`}>
        <span className={`text-5xl font-black ${avatarColor.text} select-none`}>{firstChar}</span>
        <div className="absolute top-2.5 left-2.5">
          <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm bg-white/80 backdrop-blur-sm ${categoryTagStyles[skill.category]}`}>
            {categoryLabels[skill.category]}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-36 w-full overflow-hidden bg-slate-100">
      {/* Letter avatar as fallback */}
      <div className={`absolute inset-0 flex items-center justify-center ${avatarColor.bg}`}>
        <span className={`text-5xl font-black ${avatarColor.text} select-none`}>{firstChar}</span>
      </div>
      {/* Screenshot image */}
      <img
        src={screenshotUrl}
        alt={skill.name}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgError(true)}
      />
      <div className="absolute top-2.5 left-2.5 z-10">
        <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm bg-white/80 backdrop-blur-sm ${categoryTagStyles[skill.category]}`}>
          {categoryLabels[skill.category]}
        </span>
      </div>
    </div>
  );
}

export default function SkillCard({ skill, index, onClick }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.02, ease: 'easeOut' }}
      layout
      onClick={onClick}
      className="group relative bg-surface border border-border rounded-2xl cursor-pointer overflow-hidden transition-all duration-200 ease-out hover:shadow-lg hover:shadow-black/5 hover:border-border-hover hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent/30"
      role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <CardBanner skill={skill} />
      <div className="p-4">
        <h3 className="text-base font-bold text-primary mb-1 group-hover:text-accent transition-colors">{skill.name}</h3>
        <p className="text-xs text-muted mb-2 truncate">{skill.url.replace(/^https?:\/\/github.com\//, '')}</p>
        <p className="text-xs text-secondary leading-relaxed line-clamp-2 mb-3">{skill.description}</p>
        <div className="border-t border-border/60 mb-2" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StarRating rating={skill.rating} />
            <span className="text-xs text-muted">({Math.round(parseFloat(skill.installs.replace('K', '')) * 10)})</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted">
            <span className="flex items-center gap-0.5"><Download className="w-3 h-3" />{skill.installs}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <a href={skill.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium hover:bg-accent hover:text-white transition-colors">
            <ExternalLink className="w-3 h-3" />访问
          </a>
          <button onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(skill.url); }} className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-bg text-secondary text-xs font-medium hover:bg-border transition-colors">
            <Copy className="w-3 h-3" />复制
          </button>
          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-bg text-muted text-xs">
            <Code className="w-3 h-3" />{skill.language}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
