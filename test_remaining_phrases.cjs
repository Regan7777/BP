const fs = require('fs');
const path = require('path');

const richDetailsPath = path.join(__dirname, 'src', 'data', 'richDetails.json');
const data = JSON.parse(fs.readFileSync(richDetailsPath, 'utf8'));
const richMap = data.richDetails;

const testItems = [
  { slug: 'proxy-modes-comparison', phrase: '<strong>场景一：访问未被规则库收录的冷门小众外网</strong>。' },
  { slug: 'ai-chatgpt-claude-gemini-guide', phrase: '大多数机场提供的节点来自机房服务器（如 AWS、Linode、DigitalOcean、Vultr 等云厂商 IDC 数据中心）。' },
  { slug: 'ai-chatgpt-claude-gemini-guide', phrase: '有些新手在客户端开启了「负载均衡」或「自动选择最低延迟」' },
  { slug: 'ai-chatgpt-claude-gemini-guide', phrase: '推荐首选<strong>美国原生、英国、日本或台湾</strong>节点。访问前请在浏览器中开启无痕窗口，或安装 Disable WebRTC 扩展彻底阻断真实本地 IP 泄漏。' },
  { slug: 'streaming-social-media-troubleshooting', phrase: '受各地区严格的区域版权保护（如特定美剧只能美国区看，特定港剧只能香港区看）。' },
  { slug: 'streaming-social-media-troubleshooting', phrase: '播放一部 4K 蓝光《阿凡达》（60GB）就会直接扣除你的机场套餐 60GB 流量，极其浪费！' },
  { slug: 'streaming-social-media-troubleshooting', phrase: '在 Clash 或小火箭的规则设置中，添加一条域名规则：<code>DOMAIN-KEYWORD,emby,DIRECT</code>' },
  { slug: 'telegram-complete-guide', phrase: '苹果手机使用美区 App Store 搜索 Telegram 安装；' },
  { slug: 'telegram-complete-guide', phrase: '即使你彻底关闭了 Clash 或 v2rayNG，Telegram 依然能够独立借由该通道收发消息与多媒体视频。' },
  { slug: 'telegram-complete-guide', phrase: '在电脑端 Telegram 设置中，进入「高级 -> 连接类型 -> 自定义代理」' },
  { slug: 'sing-box-overview-and-setup', phrase: '长期以来，科学上网领域被 Clash 与 Xray/V2Ray 两大体系所占据。' },
  { slug: 'sing-box-overview-and-setup', phrase: '它的核心杀手锏是**原生支持 Hysteria 2、VLESS-Reality 和 TUIC**' },
  { slug: 'sing-box-overview-and-setup', phrase: '若商家暂未提供，可使用 Subconverter 订阅转换工具选择 Singbox 格式导出' },
  { slug: 'sing-box-overview-and-setup', phrase: 'Sing-box 启动失败绝大多数是因为 JSON 语法不符合规范或端口冲突：' },
  { slug: 'openwrt-passwall-homeproxy-guide', phrase: '在 OpenWrt 固件中，目前最主流的翻墙插件有三款，各有千秋：' },
  { slug: 'openwrt-passwall-homeproxy-guide', phrase: '在软路由透明代理环境下，最致命的隐患就是**「DNS 污染与抢答」**：' },
  { slug: 'openwrt-passwall-homeproxy-guide', phrase: '配合 SmartDNS 或 MosDNS，在软路由内部建立双管道解析：' },
  { slug: 'openwrt-passwall-homeproxy-guide', phrase: '保存后重启 Apple TV，打开自带的 YouTube 和 Netflix，直接享受原生 4K HDR 免缓冲丝滑播放！' },
  { slug: 'dns-leak-test-and-diagnostics', phrase: '普通系统代理（System Proxy / PAC 模式）仅对显式支持 HTTP/SOCKS 协议的浏览器起效。' },
  { slug: 'dns-leak-test-and-diagnostics', phrase: '请在开启代理客户端（确保为规则或全局模式）后，依次打开以下权威工具进行深度排查：' },
  { slug: 'dns-leak-test-and-diagnostics', phrase: '步骤一：在 Clash Verge Rev 中开启严格路由防泄露' },
  { slug: 'dns-leak-test-and-diagnostics', phrase: '在软路由（OpenWrt / iStoreOS）全屋网络接管场景下' }
];

let allGood = true;
testItems.forEach(t => {
  const jsonStr = JSON.stringify(richMap[t.slug]);
  if (!jsonStr.includes(t.phrase)) {
    console.log(`[MISMATCH] ${t.slug} -> "${t.phrase}"`);
    allGood = false;
  }
});

if (allGood) {
  console.log('ALL REMAINING PHRASES MATCH 100%!');
}

