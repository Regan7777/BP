import { airportArticleDetails } from './airportDetails';

export const siteConfig = {
  name: 'biaopiao',
  domain: 'baipiaojc.com',
  url: 'https://baipiaojc.com',
  description: 'biaopiao 是专注于机场推荐、专线机场评测、代理客户端配置与节点排查指南。远离商业营销声量，以真实测速与实测数据为准绳。'
};

export type FaqItem = {
  question: string;
  answer: string;
  errorCode?: string;
  fixType?: 'terminal' | 'gui';
  fixInstruction?: string;
  fixContent?: string;
  errorCommand?: string;
  relatedLink?: {
    text: string;
    href: string;
  };
};

export type ArticleSection = {
  id: string;
  num: number;
  title: string;
  lead?: string;
  paragraphs: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type ProsAndCons = {
  prosTitle?: string;
  pros: string[];
  consTitle?: string;
  cons: string[];
};

export type PitfallCallout = {
  badge?: string;
  title: string;
  intro?: string;
  items: Array<{
    tag?: string;
    title: string;
    content: string;
  }>;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  author: string;
  trending?: boolean;
  featured?: boolean;
  score?: string;
  price?: string;
  region?: string;
  platform?: string;
  affiliatePath?: string;
  sourceUrl?: string;
  sourceName?: string;
  sourceCheckedAt?: string;
  updatedDate?: string;
  keywords?: string[];
  directAnswer?: string;
  prosAndCons?: ProsAndCons;
  evidenceStatus?: {
    speed: string;
    ipPurity: string;
    scope: string;
  };
  pitfallCallout?: PitfallCallout;
  sections?: ArticleSection[];
  faq?: FaqItem[];
  relatedSlugs?: string[];
};

export type NavSubItem = {
  label: string;
  href: string;
  desc?: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavSubItem[];
};

export const navItems: NavItem[] = [
  { label: '首页', href: '/' },
  {
    label: '机场推荐',
    href: '/category/recommendations'
  },
  {
    label: '机场评测',
    href: '/category/reviews'
  },
  {
    label: '客户端教程',
    href: '/category/tutorials',
    children: [
      { label: '新手一站式通关指南', href: '/posts/beginner-complete-guide', desc: '全平台客户端下载与订阅测速' },
      { label: 'Android v2rayNG 实战教程', href: '/posts/v2rayng-android-tutorial', desc: '安卓轻量主力分应用分流' },
      { label: 'iOS Shadowrocket 配置指南', href: '/posts/shadowrocket-ios-tutorial', desc: '苹果端节点管理与快捷分流' },
      { label: 'Windows Clash Verge 配置实战', href: '/posts/clash-verge-rev-windows-tutorial', desc: '电脑端新一代客户端指南' },
      { label: '查看全部教程 →', href: '/category/tutorials', desc: '浏览完整客户端指南专栏' }
    ]
  },
  {
    label: '实用工具',
    href: '/tools',
    children: [
      { label: '本地格式检测', href: '/posts/local-format-validator', desc: 'YAML / JSON 离线语法排错' },
      { label: '在线与自建订阅转换', href: '/posts/subconverter-online-guide', desc: 'Subconverter 规则转换与防泄露' },
      { label: 'Speedtest 真实测速指南', href: '/posts/speedtest-network-benchmark', desc: '单线程吞吐与晚高峰实测' },
      { label: '实用工具与排查中心 →', href: '/tools', desc: '浏览全部网络排查工具' }
    ]
  },
  { label: '关于', href: '/about' }
];

export const trendingArticles: Article[] = [
  {
    slug: 'shadowrocket-ios-tutorial',
    title: 'iOS 苹果科学上网指南：Shadowrocket（小火箭）安装、节点导入与规则配置',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: 'iOS / iPadOS',
    region: '小火箭配置',
    readTime: '9 分钟',
    excerpt: '苹果手机翻墙首选工具：美区下载避坑、订阅导入与二维码扫描、全局路由选配规则模式与后台保活排错全流程图文实战。',
    image: '/shadowrocket-origami-rocket.webp',
    trending: true
  },
  {
    slug: 'clash-verge-rev-windows-tutorial',
    title: 'Windows 电脑科学上网指南：Clash Verge Rev 安装配置、TUN 虚拟网卡与防断网实战',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: 'Windows 电脑',
    region: '内核与分流',
    readTime: '10 分钟',
    excerpt: '新一代开源跨平台客户端安装、中文语言切换、通用订阅导入、规则分流与 TUN 虚拟网卡模式实战，彻底终结电脑游戏与独立软件不走代理的痛点。',
    image: '/clash-verge-cat-routing.webp',
    trending: true
  },
  {
    slug: 'ai-chatgpt-claude-gemini-guide',
    title: 'ChatGPT、Claude 与 Gemini 使用与故障排查：着重拆解 Claude 严苛风控封号机制',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: 'AI 工具专栏',
    region: '风控与排错',
    readTime: '12 分钟',
    excerpt: '三大顶级 AI 大模型网络门槛与报错应对指南。重度剖析 Anthropic Claude 的五维极端风控体系（机房 ASN 批量清洗、Canvas 硬件指纹审查、Session 跨国漂移秒封、虚拟接码号连坐与 Stripe 支付风控）。',
    image: '/ai-model-portals.webp',
    trending: true
  },
  {
    slug: 'us-apple-id-registration-guide',
    title: '美区 Apple ID 注册与安全充值完全指南：无需海外信用卡，告别黑卡封机',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: 'iOS 生态',
    region: '海外账号',
    readTime: '8 分钟',
    excerpt: '无需海外信用卡与海外手机号，零成本纯净注册美国区 Apple ID；免税州地址生成技巧与正规礼品卡充值小火箭实操，严守仅在 App Store 登录的安全红线。',
    image: '/us-apple-id-passport.webp',
    trending: true
  }
];

type AirportRecommendationSeed = {
  slug: string;
  name: string;
  title: string;
  price: string;
  region: string;
  readTime: string;
  excerpt: string;
  monthly: string;
  clients: string;
  sourceUrl: string;
  sourceDate: string;
  officialImage?: string;
  affiliatePath?: string;
  planRows: string[][];
  risks: Array<{ tag: string; title: string; content: string }>;
};

// 资料口径：以下五家仅整理 zhiwang.one 已记录的套餐、客户端与风险条款，
// 不把商家宣传写成测速、原生 IP 或第三方平台解锁结论。
const airportRecommendationSeeds: AirportRecommendationSeed[] = [
  {
    slug: 'dalaoyun-airport-guide', name: '大佬云',
    title: '大佬云全套价格表与选购指南：19.99元月付、永久不限时包与换购避坑',
    price: '¥19.99 / 月', region: '三种付费模型', readTime: '12 分钟',
    excerpt: '完整整理大佬云六档周期套餐与99/199元永久不限时包；详解入群领体验包、四端通用订阅配置，以及换购覆盖原余量的高危条款。',
    monthly: '19.99元/月起，100GB/月', clients: '专属客户端、Nextin (dly)、通用订阅',
    sourceUrl: 'https://zhiwang.one/posts/dalaoyun-review-2026/', sourceDate: '2026-10-21', officialImage: '/images/airports/dalaoyun-logo.webp', affiliatePath: '/go/dalaoyun',
    planRows: [
      ['年付活动包', '96元/年 (折8元/月)', '60GB/月', '每30天刷新；重置包23元/次；不适用新客7折'],
      ['初云·福利版', '19.99元/月 (年付188.99元)', '100GB/月', '月付主力入门档；重置包18.99元/次'],
      ['初云·进阶版', '25元/月 (年付238元)', '150GB/月', '多设备进阶档；重置包25元/次'],
      ['凌云·基础版', '43元/月 (年付408元)', '300GB/月', '家庭/视频主力推荐；重置包43元/次'],
      ['御云·高级版', '73元/月 (年付696元)', '600GB/月', '超大流量生产力档；重置包73元/次'],
      ['闲云 (不限时)', '99元一次性付款', '78GB 永久总量', '真正不限时；约1.269元/GB，用完重购'],
      ['悠云 (不限时)', '199元一次性付款', '160GB 永久总量', '真正不限时；约1.244元/GB，用完重购']
    ],
    risks: [
      { tag: '试用', title: '后台无直接免费试用', content: '不支持后台直接开通试用，需联系官方 Telegram 社群领取体验流量包。' },
      { tag: '换购', title: '换购覆盖原套餐余量', content: '后台换购新套餐会直接清除原套餐剩余时长与流量且不退差价，换购前必须耗尽旧套餐。' },
      { tag: '优惠', title: '七折码dly88排除项', content: '优惠码 dly88 不适用于 96元年付活动包与闲云/悠云不限时包，结算时注意核对。' }
    ]
  },
  {
    slug: 'liulianyun-airport-guide', name: '榴莲云',
    title: '榴莲云全套餐价格表：24元140GB月付、特惠年付与客服通用订阅领取',
    price: '¥24 / 月', region: '开通流程', readTime: '10 分钟',
    excerpt: '全面拆解榴莲云五档周期套餐（轻享/畅享/尊享/榴莲王/特惠年付）；详解购买后向客服索取通用订阅全流程与退款注意事项。',
    monthly: '24元/月起，140GB/月', clients: '四端专属客户端、Nextin (lly)、通用订阅',
    sourceUrl: 'https://zhiwang.one/posts/liulianyun-review-2026/', sourceDate: '2026-10-21', officialImage: '/images/airports/liulianyun-logo.webp', affiliatePath: '/go/liulianyun',
    planRows: [
      ['年付特惠', '96元/年 (折8元/月)', '60GB/月', '轻度备用年付包；每30天自动刷新'],
      ['轻享 (月付主力)', '24元/月 (年付230.4元)', '140GB/月', '起步月付档；季付64.8元/半年122.4元'],
      ['畅享', '40元/月 (年付384元)', '260GB/月', '中度多设备视频推荐；季付108元/半年204元'],
      ['尊享', '60元/月 (年付576元)', '420GB/月', '重度流媒体合租推荐；季付162元/半年306元'],
      ['榴莲王', '100元/月 (年付960元)', '750GB/月', '超大流量顶配档；季付270元/半年510元'],
      ['通用订阅', '购买后向客服领取', '共享套餐额度', '需先告知客服自己的客户端类型（Clash/小火箭等）']
    ],
    risks: [
      { tag: '订阅', title: '通用订阅需客服下发', content: '后台不直接展示通用订阅链接，需在下单后联系在线客服人工下发对应格式。' },
      { tag: '不限时', title: '全线无不限时套餐', content: '全线均为按月清零的周期套餐，没有一次性永久按量包，低频用户注意避坑。' },
      { tag: '试用', title: '不支持免费试用与退款', content: '不支持试用，退款条款未明确开放，建议先从24元单月起步验证本地网络。' }
    ]
  },
  {
    slug: 'yunjiexian-airport-guide', name: '云界线',
    title: '云界线全套餐价格表：22元150GB月付、跌破1元/GB不限时包与重置精算',
    price: '¥22 / 月', region: '成本核算', readTime: '12 分钟',
    excerpt: '实测拆解云界线实际结算价（轻云22元、凌云40元、御云66元）、99/199元永久不限时包（悠云每GB低至0.995元），以及重置费与升档精算。',
    monthly: '22元/月，150GB/月', clients: 'Windows专属客户端、Nextin (yjx)、通用订阅',
    sourceUrl: 'https://zhiwang.one/posts/yunjiexian-review-2026/', sourceDate: '2026-10-21', officialImage: '/images/airports/yunjiexian-logo.webp', affiliatePath: '/go/yunjiexian',
    planRows: [
      ['年付小包', '96元/年 (折8元/月)', '60GB/月', '每30天刷新；额外重置20元/次'],
      ['轻云', '实际结算 22元/月 (年付212元)', '150GB/月', '高性价比起步档；额外重置22元/次'],
      ['凌云', '实际结算 40元/月 (年付384元)', '300GB/月', '多设备主力；额外重置40元/次'],
      ['御云', '实际结算 66元/月 (年付634元)', '600GB/月', '高吞吐合租推荐；额外重置66元/次'],
      ['闲云 (不限时)', '99元一次性付款', '80GB 永久总量', '真正不限时；约1.238元/GB，用完重购'],
      ['悠云 (不限时)', '199元一次性付款', '200GB 永久总量', '真正不限时；约0.995元/GB，跌破1元大关']
    ],
    risks: [
      { tag: '优惠', title: '七折码yjx888适用范围', content: '首单7折优惠码仅限轻云、凌云、御云周期套餐，不适用于96元年付、闲云/悠云不限时包与重置包。' },
      { tag: '重置', title: '重置费不如直接升级', content: '轻云重置一次需22元，若当月超量，加上原本22元已达44元，不如直接升档300GB的凌云（40元）。' },
      { tag: '订阅', title: '通用订阅需客服领取', content: '除 Windows 客户端外，导入 Clash / Shadowrocket 需向在线客服索取通用订阅。' }
    ]
  },
  {
    slug: 'shandianshu-airport-guide', name: '闪电鼠',
    title: '闪电鼠全套餐价格表：22元120GB起、四端客户端与无通用订阅审计',
    price: '¥22 / 月', region: '设备适配审计', readTime: '10 分钟',
    excerpt: '全面梳理闪电鼠四档全周期价格表（轻快/疾速/雷霆/年付小包）与四端专属客户端；明确其不支持通用订阅与软路由的适用边界。',
    monthly: '22元/月起，120GB/月', clients: '四端专属客户端；不支持通用订阅',
    sourceUrl: 'https://zhiwang.one/posts/shandianshu-review-2026/', sourceDate: '2026-10-21', officialImage: '/images/airports/shandianshu-logo.webp', affiliatePath: '/go/shandianshu',
    planRows: [
      ['限时钜惠小包', '96元/年 (折8元/月)', '60GB/月', '轻量年付包；每30天自动刷新'],
      ['闪电鼠·轻快版', '22元/月 (年付210元)', '120GB/月', '单人起步档；两年付369元/三年付475元'],
      ['闪电鼠·疾速版', '40元/月 (年付384元)', '250GB/月', '多设备推荐；两年付672元/三年付864元'],
      ['闪电鼠·雷霆版', '70元/月 (年付672元)', '500GB/月', '大流量主力；两年付1176元/三年付1512元'],
      ['客户端连接', '专属客户端 / Nextin', '账号登录即用', '提供 Android 双架构、Win、Mac 客户端及 iOS Nextin (sd88)'],
      ['通用订阅', '不支持通用订阅', '不适用', '无法导出订阅链接到 Clash、Shadowrocket 或软路由']
    ],
    risks: [
      { tag: '订阅', title: '不支持通用订阅', content: '无法导入开源客户端或软路由，只适合习惯下载专属客户端一键登录的小白用户。' },
      { tag: '不限时', title: '无不限时按量包', content: '4款套餐均为按月刷新周期计费，无永久总量包，低频备用需注意。' },
      { tag: '试用', title: '不支持免费试用与退款', content: '没有试用期，退款未开放，建议先以22元单月验证本地网络表现。' }
    ]
  },
  {
    slug: 'huanqiuti-airport-guide', name: '环球梯',
    title: '环球梯全套餐价格表：96元学生年付、轻享到尊享四档费率与设备上限解析',
    price: '¥23 / 月', region: '商家声明核验', readTime: '10 分钟',
    excerpt: '完整呈现环球梯全周期价格矩阵、设备上限（3~10台）、流量重置包与365天按量包；破除不限时误区，解析四端客户端使用。',
    monthly: '23元/月起，120GB/月', clients: '四端专属客户端；不支持通用订阅',
    sourceUrl: 'https://zhiwang.one/posts/huanqiuti-review-2026/', sourceDate: '2026-10-21', officialImage: '/images/airports/huanqiuti-logo.webp', affiliatePath: '/go/huanqiuti',
    planRows: [
      ['环球学生套餐', '96元/年 (折8元/月)', '60GB/月', '限3台设备；每30天刷新，重置包10元/次'],
      ['环球轻享', '23元/月 (年付228元)', '120GB/月', '限3台设备；季付66元/半年126元，重置包21元/次'],
      ['环球畅游', '39元/月 (年付378元)', '240GB/月', '限5台设备；季付111元/半年210元，重置包36元/次'],
      ['环球尊享', '69元/月 (年付678元)', '600GB/月', '限10台设备；季付198元/半年378元，重置包63元/次'],
      ['环球随行包 (按量)', '99元一次性付款', '80GB (限365天)', '限5台设备；⚠️注意详情明确写365天有效，非终身不限时'],
      ['环球灵活包 (按量)', '299元一次性付款', '400GB (限365天)', '限8台设备；⚠️注意详情明确写365天有效，非终身不限时']
    ],
    risks: [
      { tag: '按量包', title: '按量包非永久有效', content: '两款按量包详情明确写明自购买日起365天有效，到期或用完均失效，切勿当成终身不限时。' },
      { tag: '订阅', title: '不支持通用订阅', content: '使用 Win/Mac/Android 专属客户端及 iOS Nextin (HQ66)，不支持通用 Clash 订阅。' },
      { tag: '试用', title: '不支持免费试用与退款', content: '无试用机制，退款规则未公开，优先建议月付或学生年付起步。' }
    ]
  }
];

// 同样采用公开资料整理口径；这四篇归入「机场评测」，且官网入口使用织网提供的跳转链路。
const airportReviewSeeds: AirportRecommendationSeed[] = [
  {
    slug: 'bianyuan-node-airport-review', name: '边缘节点',
    title: '边缘节点购买路线图：15元体验包、98元年付与永久流量',
    price: '¥15 / 月', region: '三条购买路线', readTime: '11 分钟',
    excerpt: '从小额验证、全年轻量和低频备用三条路线选择边缘节点，并把专属客户端作为价格比较前的一票否决项。',
    monthly: '15元/月，50GB/月', clients: 'Windows、macOS、Android专属客户端；iOS Nextin；不支持通用订阅',
    sourceUrl: 'https://zhiwang.one/posts/bianyuan-review-2026/', sourceDate: '2026-10-21', affiliatePath: '/go/bianyuan',
    planRows: [
      ['限时体验月付小包', '15元/月', '50GB/月', '不参与优惠；商品标称不限设备'],
      ['极界·标准套餐', '22元/月', '120GB/月', '每30天重置；结算前核对优惠适用范围'],
      ['限时年付小包', '98元/年', '45GB/月', '每30天重置，不是全年共用45GB'],
      ['永久不限时包', '100元 / 399元', '100GB / 450GB 总量', '不按月重置；流量用完后按规则补量或重购']
    ],
    risks: [
      { tag: '试用', title: '体验包也是付费套餐', content: '15元体验小包不等于免费试用，首次购买仍需自行确认设备和网络环境。' },
      { tag: '订阅', title: '不支持通用订阅', content: '只适合接受专属客户端与 Nextin 登录方式的用户，第三方客户端不能默认导入。' },
      { tag: '售后', title: '退款规则待确认', content: '公开资料未把退款写为已核实条款，付款前应读取当前订单规则。' }
    ]
  },
  {
    slug: 'kuaili-airport-review', name: '快狸',
    title: '快狸运行状态观察：15元轻量包、Clash Mi与抢修记录',
    price: '¥15 / 月', region: '状态优先核验', readTime: '11 分钟',
    excerpt: '先检查官网、控制台、公告和订阅是否恢复，再讨论六档周期套餐；同时单独验证Clash Mi格式，避免用旧评测替代当前状态。',
    monthly: '15元/月，50GB/月', clients: 'Windows、macOS、Android专属客户端；iOS Nextin；Clash Mi 通用订阅',
    sourceUrl: 'https://zhiwang.one/posts/kuaili-review-2026/', sourceDate: '2026-10-21', affiliatePath: '/go/kuaili',
    planRows: [
      ['月狸月付小套餐', '15元/月', '50GB/月', '每30天重置；标称不限设备'],
      ['森狸年付小套餐', '120元/年', '30GB/月', '预付全年，每30天重置'],
      ['小狸基础版 / 灵狸标准版', '22元 / 35元每月', '100GB / 250GB每月', '周期价格以订单页为准'],
      ['夜狸 / 天狸', '95元 / 180元每月', '500GB / 1000GB每月', '均为周期套餐，不是不限时包']
    ],
    risks: [
      { tag: '公告', title: '资料记录过恶意攻击抢修提示', content: '公开公告提示正在抢修；下单前应重新确认官网、控制台和节点是否恢复。' },
      { tag: '期限', title: '没有不限时总量包', content: '现有套餐属于周期订阅，流量按规则重置，不应按长期备用总量包理解。' },
      { tag: '售后', title: '退款细则待确认', content: '没有免费试用，首次更适合短周期，小额验证后再决定续费。' }
    ]
  },
  {
    slug: 'feiv-airport-review', name: '飞V',
    title: '飞V套餐拆账：月付150GB、99元年付与三档总量包',
    price: '¥22 / 月', region: '三钱包预算', readTime: '12 分钟',
    excerpt: '把飞V月付、年付和终身总量包拆成三个预算钱包，在全套餐不退款前提下，用真实使用频率判断而不是追逐买断标签。',
    monthly: '22元/月，150GB/月', clients: 'Windows、macOS、Android专属客户端；iOS Nextin；不支持通用订阅',
    sourceUrl: 'https://zhiwang.one/posts/feiv-review-2026/', sourceDate: '2026-10-21', affiliatePath: '/go/feiv',
    planRows: [
      ['年付标准轻量版', '99元/年', '65GB/月', '每30天重置；不支持新客优惠'],
      ['基础入门版', '22元/月', '150GB/月', '资料记录支持周期优惠，结算页为准'],
      ['进阶 / 高端方案', '50元 / 110元每月', '380GB / 800GB每月', '每30天重置'],
      ['终身不限时包', '189元 / 479元 / 799元', '130GB / 380GB / 600GB总量', '不按月清零，用完即止']
    ],
    risks: [
      { tag: '试用', title: '不支持免费试用', content: '首次购买前需先确认客户端与本地网络能否使用。' },
      { tag: '订阅', title: '不支持通用订阅', content: '需要使用官方客户端或 Nextin，第三方导入需求不适合默认选择。' },
      { tag: '退款', title: '全套餐不接受退款', content: '不要将优惠、买断包或商家宣传当作可退款或性能保证。' }
    ]
  },
  {
    slug: 'lingdongyun-airport-review', name: '灵动云',
    title: '灵动云选购手册：20元月付、穿云年付和社群优惠核验',
    price: '¥20 / 月', region: '频率与优惠核验', readTime: '12 分钟',
    excerpt: '按持续日用、全年轻量和间歇备用划分灵动云套餐，并把Telegram活动从“看到代码”追踪到“订单实际减价”。',
    monthly: '20元/月，100GB/月', clients: 'Windows、macOS、Android专属客户端；iOS Nextin；不支持通用订阅',
    sourceUrl: 'https://zhiwang.one/posts/lingdongyun-review-2026/', sourceDate: '2026-10-21', affiliatePath: '/go/lingdongyun',
    planRows: [
      ['灵动·穿云年付小包', '99元/年', '70GB/月', '每30天重置；非全年共用70GB'],
      ['灵动·拂风', '20元/月', '100GB/月', '周期套餐，标称不限设备'],
      ['灵动·驭浪 / 破晓', '50元 / 100元每月', '300GB / 700GB每月', '每30天重置'],
      ['永久有效总量包', '199元 / 499元 / 899元', '150GB / 400GB / 800GB总量', '不按月清零，用尽后按需重购']
    ],
    risks: [
      { tag: '试用', title: '不支持免费试用', content: '付款前应先核对客户端、设备与售后入口。' },
      { tag: '订阅', title: '不支持通用订阅', content: '需使用专属客户端与 Nextin，不能默认支持 Clash 等第三方工具。' },
      { tag: '优惠', title: '优惠码需在官方社群确认', content: '公开资料提示优惠在 Telegram 群发布，结算时仍以订单规则为准。' }
    ]
  }
];

const rawArticles: Article[] = [
  // 全网独家深度实测：神行加速
  {
    slug: 'shenxingjiasu-review',
    title: '神行加速机场深度评测：新加坡原生家宽实测、246Mbps晚高峰吞吐与全套餐避坑指南',
    category: '机场评测',
    categorySlug: 'reviews',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    price: '¥23 / 月',
    region: '新加坡家宽 / IPLC',
    readTime: '12 分钟',
    excerpt: '全网首发神行加速真实链路压测：20:37 黄金晚高峰 Cloudflare 实测下行稳跑 246Mbps、上行 136Mbps，新加坡 Private Customer (AS401243) 纯净家庭宽带 IP，风控值 25% 绿标通杀 ChatGPT/Claude；深度核验月付 23元/150GB、年付 96元（折8元/月）及 90GB 不限时包真实退款与领取规则。',
    image: '/images/airports/shenxing-logo.webp',
    affiliatePath: '/go/shenxing',
    score: '9.4',
    trending: true,
    featured: true
  },

  ...airportRecommendationSeeds.map((seed) => ({
    slug: seed.slug,
    title: seed.title,
    category: '机场推荐',
    categorySlug: 'recommendations',
    author: 'LT-博主',
    date: '2026.10.28',
    updatedDate: '2026-10-28',
    price: seed.price,
    region: seed.region,
    readTime: seed.readTime,
    excerpt: seed.excerpt,
    image: seed.officialImage || '/card-network.webp',
    affiliatePath: seed.affiliatePath,
    sourceUrl: seed.sourceUrl,
    sourceName: `织网 · ${seed.name}资料页`,
    sourceCheckedAt: seed.sourceDate,
    score: '资料核对',
    trending: true
  })),

  ...airportReviewSeeds.map((seed) => ({
    slug: seed.slug,
    title: seed.title,
    category: '机场评测',
    categorySlug: 'reviews',
    author: 'LT-博主',
    date: '2026.10.28',
    updatedDate: '2026-10-28',
    price: seed.price,
    region: seed.region,
    readTime: seed.readTime,
    excerpt: seed.excerpt,
    image: '/card-network.webp',
    affiliatePath: seed.affiliatePath,
    sourceUrl: seed.sourceUrl,
    sourceName: `织网 · ${seed.name}资料页`,
    sourceCheckedAt: seed.sourceDate,
    score: '资料核对',
    trending: true
  })),

  // 核心置顶通关总纲教程
  {
    slug: 'beginner-complete-guide',
    title: '全平台保姆级教程：从客户端下载、机场订阅到连通性测试一站式通关',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: '全平台通用',
    region: '新手通关',
    readTime: '12 分钟',
    excerpt: '完全零技术门槛大白话讲透科学上网：自研一键客户端与开源工具选型、订阅一键导入、规则模式分流防坑指南，更有 10 大高频排错问答彻底打通外网。',
    image: '/guide-hero.webp',
    featured: true,
    trending: true
  },
  // 11 篇全新客户端教程与出海指南（严格按 1 至 11 排名排序）
  {
    slug: 'v2rayng-android-tutorial',
    title: '安卓科学上网指南：v2rayNG 保姆级安装、订阅导入与分应用分流实测',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: 'Android 安卓',
    region: '轻量客户端',
    readTime: '8 分钟',
    excerpt: '从 GitHub 官方原版鉴别、订阅链接一键导入到分应用代理深度设置，手把手带你配置最省电轻量的安卓翻墙主力工具。',
    image: '/v2rayng-routing-v.webp',
    featured: true
  },
  {
    slug: 'shadowrocket-ios-tutorial',
    title: 'iOS 苹果科学上网指南：Shadowrocket（小火箭）安装、节点导入与规则配置',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: 'iOS / iPadOS',
    region: '小火箭配置',
    readTime: '9 分钟',
    excerpt: '苹果手机翻墙首选工具：美区下载避坑、订阅导入与二维码扫描、全局路由选配规则模式与后台保活排错全流程图文实战。',
    image: '/shadowrocket-origami-rocket.webp'
  },
  {
    slug: 'clash-verge-rev-windows-tutorial',
    title: 'Windows 电脑科学上网指南：Clash Verge Rev 安装配置、TUN 虚拟网卡与防断网实战',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: 'Windows 电脑',
    region: '内核与分流',
    readTime: '10 分钟',
    excerpt: '新一代开源跨平台客户端安装、中文语言切换、通用订阅导入、规则分流与 TUN 虚拟网卡模式实战，彻底终结电脑游戏与独立软件不走代理的痛点。',
    image: '/clash-verge-cat-routing.webp',
    trending: true
  },
  {
    slug: 'vpn-proxy-glossary',
    title: '科学上网核心名词大白话精讲：从节点协议到 IPLC 专线架构全景拆解',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: '新手基础',
    region: '名词扫盲',
    readTime: '9 分钟',
    excerpt: '拒绝专业黑话！用生活化通俗比喻搞懂客户端、机场、订阅与节点，深度解析 Shadowsocks、VLESS、Hysteria 2 协议与 IPLC 专线架构的真实成本与倍率陷阱。',
    image: '/proxy-glossary-prism.webp'
  },
  {
    slug: 'us-apple-id-registration-guide',
    title: '美区 Apple ID 注册与安全充值完全指南：无需海外信用卡，告别黑卡封机',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: 'iOS 生态',
    region: '海外账号',
    readTime: '8 分钟',
    excerpt: '无需海外信用卡与海外手机号，零成本纯净注册美国区 Apple ID；免税州地址生成技巧与正规礼品卡充值小火箭实操，严守仅在 App Store 登录的安全红线。',
    image: '/us-apple-id-passport.webp'
  },
  {
    slug: 'proxy-modes-comparison',
    title: '规则模式、全局模式与直连模式深度解析：分流原理、场景选用与常见误区',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: '全客户端通用',
    region: '分流模式',
    readTime: '7 分钟',
    excerpt: '彻底搞懂三大路由模式底层机制：规则模式实现国内免翻海外出海智能调度；为什么千万不要日常常驻全局模式；何时切换全局模式救急冷门外网。',
    image: '/proxy-modes-gate.webp'
  },
  {
    slug: 'ai-chatgpt-claude-gemini-guide',
    title: 'ChatGPT、Claude 与 Gemini 使用与故障排查：着重拆解 Claude 严苛风控封号机制',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: 'AI 工具专栏',
    region: '风控与排错',
    readTime: '12 分钟',
    excerpt: '三大顶级 AI 大模型网络门槛与报错应对指南。重度剖析 Anthropic Claude 的五维极端风控体系（机房 ASN 批量清洗、Canvas 硬件指纹审查、Session 跨国漂移秒封、虚拟接码号连坐与 Stripe 支付风控）。',
    image: '/ai-model-portals.webp',
    trending: true
  },
  {
    slug: 'streaming-social-media-troubleshooting',
    title: 'Netflix、YouTube、X、Instagram、TikTok 与 Emby：登录、播放与网络排查指南',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: '流媒体与社交',
    region: '解锁与排障',
    readTime: '11 分钟',
    excerpt: '海外六大热门应用分流与网络排错合集：Netflix 原生解锁与自制剧判定、YouTube 4K 极速码率优化、TikTok 拔卡环境伪装、Emby 私人影库防流量击穿直连设置。',
    image: '/streaming-media-projector.webp'
  },
  {
    slug: 'telegram-complete-guide',
    title: 'Telegram（飞机）新手使用与防封指南：官方正版下载、汉化、+86 私聊解封与防骗避坑',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: '即时通讯',
    region: '通讯防封',
    readTime: '9 分钟',
    excerpt: '海外首选隐私通讯软件使用通关：正版官网下载防木马、一键官方中文汉化、+86 中国手机号限制私聊官方 SpamBot 秒级申诉解封、两步验证开启与防骗黄金法则。',
    image: '/telegram-safe-flight.webp'
  },
  {
    slug: 'sing-box-overview-and-setup',
    title: 'sing-box 是什么、怎么用：新一代全能网络核心全面解析与配置实战',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: '全平台通用',
    region: '现代内核',
    readTime: '10 分钟',
    excerpt: '全面解析新一代通用代理核心 Sing-box：极致低内存开销、原生支持 Hysteria 2 与 Reality 前沿协议、入站/出站/路由三位一体架构与官方 GUI 客户端一键配置。',
    image: '/sing-box-core.webp'
  },
  {
    slug: 'openwrt-passwall-homeproxy-guide',
    title: '软路由与全屋代理搭建指南：OpenWrt、PassWall 与 HomeProxy 分流实操',
    category: '客户端教程',
    categorySlug: 'tutorials',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: 'OpenWrt 软路由',
    region: '全屋代理',
    readTime: '13 分钟',
    excerpt: '家庭智能设备与电视盒子免客户端出海终极形态：单网口旁路由拓扑设计、PassWall vs OpenClash vs HomeProxy 选型权衡、SmartDNS 双管道防污染防死锁配置与 Apple TV 4K 免翻实战。',
    image: '/openwrt-home-routing.webp'
  },

  // 重点推荐与工具评测
  {
    slug: 'dns-leak-test-and-diagnostics',
    title: 'DNS 泄露检测与修复完全指南：WebRTC、IPv6 与 DoH/DoT 隐私防护及权威在线诊断工具实操',
    category: '实用工具',
    categorySlug: 'tools',
    author: 'LT-博主',
    date: '2026.10.27',
    updatedDate: '2026-10-27',
    platform: '安全诊断',
    region: 'DNS / WebRTC',
    readTime: '11 分钟',
    excerpt: '深度拆解代理环境下 DNS 泄露的底层成因（透明代理抢答、IPv6 旁路、Windows 智能多宿主解析与 WebRTC STUN 穿透），提供三大权威在线测试平台与全客户端防泄露配置实操。',
    image: '/dns-leak-privacy-chamber.webp'
  },
  {
    slug: 'local-format-validator',
    title: '本地节点与配置格式检测工具：YAML/JSON/Base64 订阅一键排错与语法校验',
    category: '实用工具',
    categorySlug: 'tools',
    author: 'LT-博主',
    date: '2026.10.26',
    updatedDate: '2026-10-27',
    platform: '本地离线',
    region: '语法校验',
    readTime: '7 分钟',
    excerpt: '解析 Clash YAML 语法缩进、Sing-box JSON 结构与 Base64 订阅编码异常，提供本地离线校验工具与语法查错指南，彻底终结格式错误。',
    image: '/local-format-inspection.webp'
  },
  {
    slug: 'subconverter-online-guide',
    title: '在线与自建订阅转换完全指南：Clash / Sing-box / Surge / Shadowrocket 规则转换与防泄露',
    category: '实用工具',
    categorySlug: 'tools',
    author: 'LT-博主',
    date: '2026.10.26',
    updatedDate: '2026-10-27',
    platform: '全客户端',
    region: '订阅转换',
    readTime: '9 分钟',
    excerpt: '详解 Subconverter 与 Sub-Web 订阅转换工具使用规范，教你如何将混合协议订阅转换为定制分流规则，并防范第三方公开转换泄露 Token 的安全风险。',
    image: '/subconverter-folded-stream.webp'
  },
  {
    slug: 'vps-route-interpreter',
    title: 'VPS 线路解释器：CN2 GIA、AS9929、CMIN2 与软银/IIJ 跨境回程路由实测速查',
    category: '实用工具',
    categorySlug: 'tools',
    author: 'LT-博主',
    date: '2026.10.26',
    updatedDate: '2026-10-27',
    platform: 'BGP / 路由',
    region: '线路溯源',
    readTime: '11 分钟',
    excerpt: '一文拆解电信 CN2 GIA/GT、联通 9929/4837、移动 CMIN2 等主流跨境优质线路的回程路由特征，教你使用 NextTrace / BestTrace 真实识别真假专线。',
    image: '/vps-route-junction.webp'
  },
  {
    slug: 'ai-connectivity-unlock-test',
    title: '满血 AI 测试指南：ChatGPT Plus、Claude 3.5 Sonnet 与 Gemini 节点原生解锁与延迟检测',
    category: '实用工具',
    categorySlug: 'tools',
    author: 'LT-博主',
    date: '2026.10.26',
    updatedDate: '2026-10-27',
    platform: 'AI 原生解锁',
    region: '风控检测',
    readTime: '8 分钟',
    excerpt: '深度解析 OpenAI、Anthropic Claude 与 Google Gemini 对数据中心机房 IP 与风控检测机制，提供脚本自检原生住宅 IP 与双向延迟测试实操。',
    image: '/ai-connectivity-gateway.webp'
  },
  {
    slug: 'speedtest-network-benchmark',
    title: 'Speedtest 测速全流程指南：单线程 vs 多线程、流媒体 Fast.com 与晚高峰真实带宽评测',
    category: '实用工具',
    categorySlug: 'tools',
    author: 'LT-博主',
    date: '2026.10.26',
    updatedDate: '2026-10-27',
    platform: '基准测速',
    region: '真实吞吐',
    readTime: '9 分钟',
    excerpt: '教你避开多线程虚高测速陷阱，使用 Speedtest CLI 单线程与 Fast.com 真实压测晚高峰单连接带宽吞吐，还原 YouTube 4K 不缓冲的真实网络水准。',
    image: '/speedtest-measurement-runway.webp'
  },
  {
    slug: 'cloudflare-ip-speedtest',
    title: 'Cloudflare 测速与优选 IP 实战：CloudflareSpeedTest 工具调优与 CDN 节点极速筛选',
    category: '实用工具',
    categorySlug: 'tools',
    author: 'LT-博主',
    date: '2026.10.26',
    updatedDate: '2026-10-27',
    platform: 'CDN 优选',
    region: '极速解析',
    readTime: '10 分钟',
    excerpt: '利用开源测速工具快速测算 Cloudflare Anycast 全球 CDN 节点在本地宽带下的实际丢包与延迟，筛选低延迟直连 IP 赋能代理节点提速。',
    image: '/cloudflare-edge-path.webp'
  }
];

export const categories = [
  {
    slug: 'recommendations',
    name: '机场推荐',
    description: '涵盖高性价比、专线中继、小众冷门等不同梯度的机场选购指南。'
  },
  {
    slug: 'reviews',
    name: '机场评测',
    description: '晚高峰 4K 测速、BGP/IPLC 线路架构拆解与抗封锁真实测试。'
  },
  {
    slug: 'tutorials',
    name: '客户端教程',
    description: '厘清内核与分流逻辑，理顺跨平台科学上网的操作脉络。'
  },
  {
    slug: 'tools',
    name: '实用工具',
    description: '网络排查、协议调试、订阅转换与在线检测实用工具箱。'
  }
];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);

import richJson from './richDetails.json';

const richMap: Record<string, any> = richJson.richDetails;

const airportRecommendationDetails: Record<string, any> = airportArticleDetails;

function createFallback(title: string) {
  return {
    directAnswer: `本文对 ${title} 进行全方位指标拆解，涵盖晚高峰实测丢包、线路架构（BGP/IEPL）与客户端兼容性表现，为选购与日常使用提供客观参考准绳。`,
    keywords: [title, '机场评测', '线路分析', '晚高峰稳定性', '节点配置'],
    prosAndCons: {
      prosTitle: '核心实测优势',
      pros: [
        '节点延迟表现平稳，主流香港/日本中继测速抖动低于 15ms',
        '全面兼容主流开源客户端，支持订阅一键转换与智能分流'
      ],
      consTitle: '选购与使用须知',
      cons: [
        '晚高峰公网高峰期偶有丢包，重度 4K 建议搭配专线节点',
        '多设备同时在线受套餐并发限制，请核对服务条款'
      ]
    },
    sections: [
      {
        id: 'section-1',
        num: 1,
        title: '服务条款与关键技术指标',
        lead: `${title} 在线路冗余、倍率策略与流媒体支持上均具备鲜明特点。`,
        paragraphs: [
          '选购前需重点关注其入口带宽配比与晚高峰限速机制。客户端具体配置可查阅 <a href="/posts/clash-verge-rev-windows-tutorial">Clash Verge Rev 电脑配置指南</a>。',
          '在异常断流时请参考 <a href="/posts/dns-leak-test-and-diagnostics">DNS 泄露与连接排查指南</a> 快速定位原因。'
        ],
        table: {
          headers: ['核心指标', '实测表现', '评估评级'],
          rows: [
            ['线路架构', 'BGP 多线入口 + IEPL 专线', '五星 优秀'],
            ['晚高峰丢包', '< 1.2% (实测流畅 4K)', '四星 稳定'],
            ['流媒体解锁', 'Netflix / Disney+ / YouTube Premium 全解锁', '五星 完整'],
            ['客户端支持', 'Windows / Mac / iOS / Android 全覆盖', '五星 通用']
          ]
        }
      },
      {
        id: 'section-2',
        num: 2,
        title: '节点导入与分流调优实战',
        lead: '获取订阅链接后，建议在客户端内开启规则分流模式，以保障国内外网络智能分流。',
        paragraphs: [
          '导入订阅的具体步骤与常见注意事项请参考 <a href="/posts/clash-verge-rev-windows-tutorial">客户端配置指南</a>，深入理解分流策略请查阅 <a href="/posts/proxy-modes-comparison">规则模式与直连模式解析</a>。'
        ]
      }
    ],
    faq: [
      {
        question: '导入该服务商订阅后提示 10054 Connection reset 无法使用？',
        answer: '请优先核实本地电脑系统时钟是否精准同步（偏差超 60 秒将握手失败）；其次可通过终端刷新本地 DNS 缓存并重置连接状态。',
        errorCode: '10054_RESET',
        fixType: 'terminal',
        fixInstruction: '操作指引：按键盘 Win+R 输入 cmd 回车打开终端，粘贴以下命令并回车运行：',
        errorCommand: 'ipconfig /flushdns',
        relatedLink: {
          text: 'DNS 泄露与全链路排查中心',
          href: '/posts/dns-leak-test-and-diagnostics'
        }
      },
      {
        question: '该服务商是否支持多设备同时并发在线？',
        answer: '大部分服务商支持 2~5 台设备同时在线，使用前建议核对套餐并发限制条款。'
      },
      {
        question: '晚高峰出现丢包或画质下降时如何快速解决？',
        answer: '可在客户端切换至新加坡或日本备用节点，或参考 <a href="/posts/speedtest-network-benchmark">Speedtest 真实测速指南</a> 进行速率比对。'
      },
      {
        question: '在软路由或手机端使用该服务该配置什么插件？',
        answer: '软路由推荐使用 PassWall 或 HomeProxy 插件，详细设置步骤参见 <a href="/posts/openwrt-passwall-homeproxy-guide">软路由与全屋代理指南</a>。'
      }
    ],
    relatedSlugs: ['clash-verge-rev-windows-tutorial', 'v2rayng-android-tutorial', 'shadowrocket-ios-tutorial']
  };
}

export const ENABLE_INTERNAL_LINKS = true;

export function filterInternalLinks(html?: string): string {
  if (!html) return '';
  if (ENABLE_INTERNAL_LINKS) return html;
  return html.replace(
    /<a\s+[^>]*href=["']\/posts\/[^"']*["'][^>]*>(.*?)<\/a>/gi,
    '<span class="internal-link-placeholder">$1</span>'
  );
}

export const articles: Article[] = rawArticles.map((art) => {
  const detail = richMap[art.slug] || airportRecommendationDetails[art.slug] || createFallback(art.title);

  const processedSections = detail.sections?.map((sec: any) => ({
    ...sec,
    lead: filterInternalLinks(sec.lead),
    paragraphs: sec.paragraphs?.map((p: string) => filterInternalLinks(p))
  }));

  const processedFaq = detail.faq?.map((f: any) => ({
    ...f,
    answer: filterInternalLinks(f.answer),
    relatedLink: f.relatedLink ? {
      ...f.relatedLink,
      text: f.relatedLink.text
    } : undefined
  }));

  const processedProsAndCons = detail.prosAndCons ? {
    ...detail.prosAndCons,
    pros: detail.prosAndCons.pros?.map((p: string) => filterInternalLinks(p)),
    cons: detail.prosAndCons.cons?.map((c: string) => filterInternalLinks(c))
  } : undefined;

  return {
    ...art,
    ...detail,
    directAnswer: filterInternalLinks(detail.directAnswer),
    sections: processedSections || detail.sections,
    faq: processedFaq || detail.faq,
    prosAndCons: processedProsAndCons || detail.prosAndCons
  };
});
