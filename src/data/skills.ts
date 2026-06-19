export type SkillCategory = 'devtools' | 'database' | 'cloud' | 'productivity' | 'media' | 'search' | 'finance' | 'communication' | 'browser' | 'other';

export interface Skill {
  id: string;
  name: string;
  url: string;
  description: string;
  category: SkillCategory;
  tags: string[];
  rating: number;
  installs: string;
  bannerColor: string;
  author: string;
  language: string;
}

export const categories: { key: SkillCategory | 'all'; label: string; color: string }[] = [
  { key: 'all', label: '全部', color: '#f97316' },
  { key: 'devtools', label: '开发工具', color: '#3b82f6' },
  { key: 'database', label: '数据库', color: '#22c55e' },
  { key: 'cloud', label: '云服务', color: '#a855f7' },
  { key: 'productivity', label: '生产力', color: '#f59e0b' },
  { key: 'media', label: '多媒体', color: '#ec4899' },
  { key: 'search', label: '搜索', color: '#14b8a6' },
  { key: 'finance', label: '金融', color: '#ef4444' },
  { key: 'communication', label: '通讯', color: '#6366f1' },
  { key: 'browser', label: '浏览器', color: '#f97316' },
  { key: 'other', label: '其他', color: '#6b7280' },
];

export const skills: Skill[] = [
  // === 开发工具 (10) ===
  { id: 'github-mcp', name: 'GitHub MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/github', description: 'GitHub 官方 MCP 服务器，支持仓库管理、Issue、PR、代码搜索等完整 GitHub API 能力。', category: 'devtools', tags: ['GitHub', '代码管理', '官方'], rating: 4.8, installs: '32.5K', bannerColor: '#bfdbfe', author: 'Anthropic', language: 'TypeScript' },
  { id: 'playwright-mcp', name: 'Playwright MCP', url: 'https://github.com/executeautomation/mcp-playwright', description: '浏览器自动化 MCP，基于 Playwright 实现网页截图、PDF 生成、元素交互等。', category: 'devtools', tags: ['浏览器自动化', '测试'], rating: 4.7, installs: '18.2K', bannerColor: '#ddd6fe', author: 'ExecuteAutomation', language: 'TypeScript' },
  { id: 'sequential-thinking', name: 'Sequential Thinking', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking', description: '官方参考实现，通过思考序列进行动态和反思性问题解决。', category: 'devtools', tags: ['推理', '思维链', '官方'], rating: 4.5, installs: '12.1K', bannerColor: '#c7d2fe', author: 'Anthropic', language: 'TypeScript' },
  { id: 'filesystem-mcp', name: 'Filesystem MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem', description: '文件系统 MCP，允许 AI 读取、写入、搜索本地文件。', category: 'devtools', tags: ['文件系统', '本地', '官方'], rating: 4.6, installs: '28.4K', bannerColor: '#bbf7d0', author: 'Anthropic', language: 'TypeScript' },
  { id: 'fetch-mcp', name: 'Fetch MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/fetch', description: '网络请求 MCP，让 AI 可以发起 HTTP 请求获取网页内容。', category: 'devtools', tags: ['HTTP', '网络请求', '官方'], rating: 4.4, installs: '15.6K', bannerColor: '#fde68a', author: 'Anthropic', language: 'TypeScript' },
  { id: 'brave-search', name: 'Brave Search MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search', description: 'Brave 搜索引擎 MCP，提供网页搜索和本地搜索能力。', category: 'search', tags: ['搜索', 'Brave', '官方'], rating: 4.3, installs: '9.8K', bannerColor: '#a5f3fc', author: 'Anthropic', language: 'TypeScript' },
  { id: 'everything-mcp', name: 'Everything MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/everything', description: '展示 MCP 协议所有功能的参考服务器。', category: 'devtools', tags: ['演示', '参考', '官方'], rating: 4.2, installs: '7.3K', bannerColor: '#fed7aa', author: 'Anthropic', language: 'TypeScript' },
  { id: 'time-mcp', name: 'Time MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/time', description: '时间和时区 MCP，提供当前时间获取、时区转换等。', category: 'devtools', tags: ['时间', '时区', '官方'], rating: 4.1, installs: '6.2K', bannerColor: '#e9d5ff', author: 'Anthropic', language: 'TypeScript' },
  { id: 'aws-mcp', name: 'AWS MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/aws', description: 'AWS 云服务 MCP，支持 S3、EC2、Lambda 等 AWS 服务操作。', category: 'cloud', tags: ['AWS', '云', '官方'], rating: 4.0, installs: '8.5K', bannerColor: '#fecdd3', author: 'Anthropic', language: 'TypeScript' },
  { id: 'sqlite-mcp', name: 'SQLite MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite', description: 'SQLite 数据库 MCP，支持 SQL 查询、表结构查看等。', category: 'database', tags: ['SQLite', 'SQL', '官方'], rating: 4.3, installs: '11.4K', bannerColor: '#d9f99d', author: 'Anthropic', language: 'TypeScript' },
  // === 数据库 (5) ===
  { id: 'postgres-mcp', name: 'PostgreSQL MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/postgres', description: 'PostgreSQL MCP，支持复杂 SQL 查询、表管理等高级数据库操作。', category: 'database', tags: ['PostgreSQL', 'SQL', '官方'], rating: 4.5, installs: '14.2K', bannerColor: '#c7d2fe', author: 'Anthropic', language: 'TypeScript' },
  { id: 'supabase-mcp', name: 'Supabase MCP', url: 'https://github.com/supabase-community/mcp-server-supabase', description: 'Supabase 官方 MCP，支持数据库管理、Auth、Storage 等。', category: 'database', tags: ['Supabase', 'BaaS', '官方'], rating: 4.4, installs: '10.8K', bannerColor: '#99f6e4', author: 'Supabase', language: 'TypeScript' },
  { id: 'mysql-mcp', name: 'MySQL MCP', url: 'https://github.com/designcomputer/mysql_mcp_server', description: 'MySQL MCP，支持 SQL 查询执行、表结构查看等。', category: 'database', tags: ['MySQL', 'SQL', '社区'], rating: 4.2, installs: '7.6K', bannerColor: '#bbf7d0', author: 'designcomputer', language: 'Python' },
  { id: 'mongodb-mcp', name: 'MongoDB MCP', url: 'https://github.com/kiliczsh/mcp-mongo', description: 'MongoDB MCP，支持 NoSQL 查询、集合管理等。', category: 'database', tags: ['MongoDB', 'NoSQL', '社区'], rating: 4.0, installs: '5.4K', bannerColor: '#fde68a', author: 'kiliczsh', language: 'TypeScript' },
  { id: 'redis-mcp', name: 'Redis MCP', url: 'https://github.com/buryhuang/mcp-redis', description: 'Redis MCP，支持键值操作、列表/集合/哈希操作等。', category: 'database', tags: ['Redis', '缓存', '社区'], rating: 3.9, installs: '4.8K', bannerColor: '#fecdd3', author: 'buryhuang', language: 'Python' },
  // === 云服务 (5) ===
  { id: 'docker-mcp', name: 'Docker MCP', url: 'https://github.com/ckreiling/mcp-server-docker', description: 'Docker MCP，支持容器管理、镜像操作、日志查看等。', category: 'cloud', tags: ['Docker', '容器', '社区'], rating: 4.3, installs: '9.1K', bannerColor: '#a5f3fc', author: 'ckreiling', language: 'TypeScript' },
  { id: 'kubernetes-mcp', name: 'Kubernetes MCP', url: 'https://github.com/strowk/mcp-k8s-go', description: 'Kubernetes MCP，支持 Pod 管理、Deployment 操作等。', category: 'cloud', tags: ['K8s', '容器编排', '社区'], rating: 4.1, installs: '6.7K', bannerColor: '#c7d2fe', author: 'strowk', language: 'Go' },
  { id: 'vercel-mcp', name: 'Vercel MCP', url: 'https://github.com/vercel/ai/tree/main/packages/mcp', description: 'Vercel AI SDK 内置 MCP 支持，与 Next.js 深度集成。', category: 'cloud', tags: ['Vercel', '部署', '官方'], rating: 4.4, installs: '13.5K', bannerColor: '#ddd6fe', author: 'Vercel', language: 'TypeScript' },
  { id: 'cloudflare-mcp', name: 'Cloudflare MCP', url: 'https://github.com/cloudflare/mcp-server-cloudflare', description: 'Cloudflare 官方 MCP，支持 Workers、KV、D1、R2 等。', category: 'cloud', tags: ['Cloudflare', '边缘计算', '官方'], rating: 4.2, installs: '8.3K', bannerColor: '#fde68a', author: 'Cloudflare', language: 'TypeScript' },
  { id: 'terraform-mcp', name: 'Terraform MCP', url: 'https://github.com/ergomake/mcp-terraform', description: 'Terraform MCP，支持基础设施管理、状态查看等 IAC 操作。', category: 'cloud', tags: ['Terraform', 'IAC', '社区'], rating: 3.8, installs: '3.2K', bannerColor: '#fed7aa', author: 'ergomake', language: 'TypeScript' },
  // === 生产力 (5) ===
  { id: 'notion-mcp', name: 'Notion MCP', url: 'https://github.com/makenotion/notion-mcp-server', description: 'Notion 官方 MCP，支持页面管理、数据库查询、内容创建等。', category: 'productivity', tags: ['Notion', '笔记', '官方'], rating: 4.6, installs: '21.3K', bannerColor: '#e9d5ff', author: 'Notion', language: 'TypeScript' },
  { id: 'slack-mcp', name: 'Slack MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/slack', description: 'Slack MCP，支持消息发送、频道管理、用户查询等。', category: 'communication', tags: ['Slack', '消息', '官方'], rating: 4.4, installs: '16.7K', bannerColor: '#99f6e4', author: 'Anthropic', language: 'TypeScript' },
  { id: 'google-calendar', name: 'Google Calendar MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/google-calendar', description: 'Google 日历 MCP，支持事件创建、查询、修改等。', category: 'productivity', tags: ['日历', 'Google', '官方'], rating: 4.2, installs: '11.9K', bannerColor: '#bbf7d0', author: 'Anthropic', language: 'TypeScript' },
  { id: 'todoist-mcp', name: 'Todoist MCP', url: 'https://github.com/abhiz123/todoist-mcp-server', description: 'Todoist MCP，支持任务管理、项目操作、标签管理等。', category: 'productivity', tags: ['Todoist', '任务管理', '社区'], rating: 4.0, installs: '6.4K', bannerColor: '#fecdd3', author: 'abhiz123', language: 'TypeScript' },
  { id: 'obsidian-mcp', name: 'Obsidian MCP', url: 'https://github.com/MarkusPfundstein/mcp-obsidian', description: 'Obsidian MCP，支持笔记读取、搜索、创建等知识库操作。', category: 'productivity', tags: ['Obsidian', '笔记', '社区'], rating: 4.1, installs: '7.8K', bannerColor: '#d9f99d', author: 'MarkusPfundstein', language: 'Python' },
  // === 多媒体 (5) ===
  { id: 'blender-mcp', name: 'Blender MCP', url: 'https://github.com/ahujasid/blender-mcp', description: 'Blender MCP，支持 3D 场景操作、模型创建、材质设置等。', category: 'media', tags: ['Blender', '3D', '社区'], rating: 4.5, installs: '12.6K', bannerColor: '#fde68a', author: 'ahujasid', language: 'Python' },
  { id: 'ffmpeg-mcp', name: 'FFmpeg MCP', url: 'https://github.com/rishikeshmcp/mcp-server-ffmpeg', description: 'FFmpeg MCP，支持视频转码、音频处理、格式转换等。', category: 'media', tags: ['FFmpeg', '音视频', '社区'], rating: 4.0, installs: '5.9K', bannerColor: '#c7d2fe', author: 'rishikeshmcp', language: 'TypeScript' },
  { id: 'image-processing', name: 'Image Processing MCP', url: 'https://github.com/pandora-s-git/mcp-image-processing', description: '图像处理 MCP，支持裁剪、缩放、滤镜、格式转换等。', category: 'media', tags: ['图像', '处理', '社区'], rating: 3.8, installs: '3.7K', bannerColor: '#a5f3fc', author: 'pandora-s-git', language: 'Python' },
  { id: 'stable-diffusion', name: 'Stable Diffusion MCP', url: 'https://github.com/fallenbreath/mcp-stable-diffusion', description: 'Stable Diffusion MCP，支持文生图、图生图、参数调优等 AI 绘画能力。', category: 'media', tags: ['AI绘画', 'StableDiffusion', '社区'], rating: 4.3, installs: '9.4K', bannerColor: '#ddd6fe', author: 'fallenbreath', language: 'Python' },
  { id: 'openai-tts', name: 'OpenAI TTS MCP', url: 'https://github.com/mcp-servers/tts-mcp', description: 'OpenAI TTS MCP，支持文本转语音、语音克隆、多语言合成等。', category: 'media', tags: ['TTS', '语音', '社区'], rating: 4.1, installs: '7.2K', bannerColor: '#fecdd3', author: 'mcp-servers', language: 'TypeScript' },
  // === 搜索 (5) ===
  { id: 'tavily-mcp', name: 'Tavily Search MCP', url: 'https://github.com/tavily-ai/tavily-mcp', description: 'Tavily AI 搜索引擎 MCP，提供高质量网页搜索、新闻检索等。', category: 'search', tags: ['搜索', 'AI', '官方'], rating: 4.5, installs: '14.8K', bannerColor: '#bbf7d0', author: 'Tavily', language: 'TypeScript' },
  { id: 'exa-mcp', name: 'Exa Search MCP', url: 'https://github.com/exa-labs/exa-mcp-server', description: 'Exa AI 搜索 MCP，支持语义搜索、相似内容查找、代码搜索等。', category: 'search', tags: ['语义搜索', 'AI', '官方'], rating: 4.3, installs: '8.9K', bannerColor: '#e9d5ff', author: 'Exa', language: 'TypeScript' },
  { id: 'perplexity-mcp', name: 'Perplexity MCP', url: 'https://github.com/ppl-ai/mcp-perplexity', description: 'Perplexity AI MCP，支持实时问答、深度研究、引文生成等。', category: 'search', tags: ['问答', '研究', '官方'], rating: 4.6, installs: '17.5K', bannerColor: '#99f6e4', author: 'Perplexity', language: 'TypeScript' },
  { id: 'serpapi-mcp', name: 'SerpAPI MCP', url: 'https://github.com/serpapi/serpapi-mcp-server', description: 'SerpAPI MCP，支持 Google、Bing、Yahoo 等搜索引擎结果获取。', category: 'search', tags: ['搜索引擎', 'SERP', '官方'], rating: 4.2, installs: '10.3K', bannerColor: '#fde68a', author: 'SerpAPI', language: 'TypeScript' },
  { id: 'arxiv-mcp', name: 'arXiv MCP', url: 'https://github.com/liuzhao1225/mcp-arxiv', description: 'arXiv MCP，支持学术论文搜索、PDF 下载、引用管理等。', category: 'search', tags: ['学术', '论文', '社区'], rating: 4.0, installs: '6.1K', bannerColor: '#fed7aa', author: 'liuzhao1225', language: 'Python' },
  // === 金融 (3) ===
  { id: 'yahoo-finance', name: 'Yahoo Finance MCP', url: 'https://github.com/virattt/mcp-server-yahoo-finance', description: 'Yahoo Finance MCP，支持股票行情、历史数据、财务报表等。', category: 'finance', tags: ['股票', '金融', '社区'], rating: 4.4, installs: '11.2K', bannerColor: '#fecdd3', author: 'virattt', language: 'TypeScript' },
  { id: 'stripe-mcp', name: 'Stripe MCP', url: 'https://github.com/stripe/stripe-mcp', description: 'Stripe 官方 MCP，支持支付处理、订阅管理、发票生成等。', category: 'finance', tags: ['支付', 'Stripe', '官方'], rating: 4.5, installs: '15.7K', bannerColor: '#d9f99d', author: 'Stripe', language: 'TypeScript' },
  { id: 'alpaca-mcp', name: 'Alpaca Trading MCP', url: 'https://github.com/alpacahq/alpaca-mcp', description: 'Alpaca 交易 MCP，支持股票交易、账户管理、订单操作等。', category: 'finance', tags: ['交易', '股票', '官方'], rating: 4.1, installs: '7.4K', bannerColor: '#c7d2fe', author: 'Alpaca', language: 'TypeScript' },
  // === 通讯 (3) ===
  { id: 'discord-mcp', name: 'Discord MCP', url: 'https://github.com/bendordu/mcp-discord', description: 'Discord MCP，支持消息发送、频道管理、成员查询等。', category: 'communication', tags: ['Discord', '消息', '社区'], rating: 4.0, installs: '6.8K', bannerColor: '#a5f3fc', author: 'bendordu', language: 'TypeScript' },
  { id: 'telegram-mcp', name: 'Telegram MCP', url: 'https://github.com/SpiralAgents/telegram-mcp', description: 'Telegram MCP，支持 Bot 消息发送、群组管理、文件传输等。', category: 'communication', tags: ['Telegram', 'Bot', '社区'], rating: 3.9, installs: '5.1K', bannerColor: '#bbf7d0', author: 'SpiralAgents', language: 'Python' },
  { id: 'email-mcp', name: 'Email MCP', url: 'https://github.com/mcp-servers/email-mcp', description: '邮件 MCP，支持 SMTP 发送、IMAP 读取、附件处理等。', category: 'communication', tags: ['邮件', 'SMTP', '社区'], rating: 3.8, installs: '4.3K', bannerColor: '#fde68a', author: 'mcp-servers', language: 'TypeScript' },
  // === 浏览器 (2) ===
  { id: 'puppeteer-mcp', name: 'Puppeteer MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer', description: 'Puppeteer MCP，支持浏览器自动化、网页截图、PDF 生成等。', category: 'browser', tags: ['Puppeteer', '浏览器', '官方'], rating: 4.3, installs: '13.4K', bannerColor: '#ddd6fe', author: 'Anthropic', language: 'TypeScript' },
  { id: 'selenium-mcp', name: 'Selenium MCP', url: 'https://github.com/mcp-selenium/selenium-mcp', description: 'Selenium MCP，支持跨浏览器自动化测试、元素定位等。', category: 'browser', tags: ['Selenium', '测试', '社区'], rating: 3.9, installs: '5.6K', bannerColor: '#e9d5ff', author: 'mcp-selenium', language: 'Python' },
  // === 其他 (2) ===
  { id: 'calculator-mcp', name: 'Calculator MCP', url: 'https://github.com/modelcontextprotocol/servers/tree/main/src/calculator', description: '计算器 MCP，支持精确数值计算、数学表达式求值等。', category: 'other', tags: ['计算器', '数学', '官方'], rating: 3.7, installs: '4.1K', bannerColor: '#99f6e4', author: 'Anthropic', language: 'TypeScript' },
  { id: 'weather-mcp', name: 'Weather MCP', url: 'https://github.com/mcp-servers/weather-mcp', description: '天气 MCP，支持实时天气查询、天气预报、历史气象数据等。', category: 'other', tags: ['天气', 'API', '社区'], rating: 3.8, installs: '5.2K', bannerColor: '#a5f3fc', author: 'mcp-servers', language: 'TypeScript' },
];

export function getSkillsByCategory(category: SkillCategory | 'all'): Skill[] {
  if (category === 'all') return skills;
  return skills.filter((skill) => skill.category === category);
}

export function searchSkills(query: string): Skill[] {
  const lower = query.toLowerCase();
  return skills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(lower) ||
      skill.description.toLowerCase().includes(lower) ||
      skill.tags.some((tag) => tag.toLowerCase().includes(lower)) ||
      skill.author.toLowerCase().includes(lower)
  );
}
