---
name: network-fact-verification
description: >-
  Standard for verifying technical network concepts, proxy protocols, latency physics, and avoiding AI hallucinations in proxy and airport articles.
  Use whenever explaining network mechanics, writing airport reviews, evaluating latency, or describing payment and anti-fraud systems.
---

# 出海网络知识库核验与防幻觉指南 (Network Fact Verification)

本技能为网络代理、科学上网、机场评测与出海风控领域提供严谨的**事实核验基线**，彻底根除 AI 容易出现的“物理延迟常识错误”、“协议特性胡编乱造”以及“虚假海外支付流程”。

---

## 核心核验一：跨国网络物理延迟与线路真实性基准

严禁在评测与教程中生成违背物理光速定律的荒谬数据：
1. **真实物理延迟基准（以中国沿海直连/专线测速为准）**：
   - 中国大陆 ↔ 香港（HK）：优质专线/直连物理延迟约 **15ms ~ 40ms**；
   - 中国大陆 ↔ 日本东京（JP）：优质直连/中继物理延迟约 **35ms ~ 60ms**；
   - 中国大陆 ↔ 新加坡（SG）：物理延迟约 **50ms ~ 75ms**；
   - 中国大陆 ↔ 美国西海岸（US West，洛杉矶/圣何塞）：太平洋海底光缆物理极限约 **120ms ~ 160ms**（❌ 严禁出现“美国节点延迟 10ms”等荒谬幻觉！）；
   - 中国大陆 ↔ 欧洲（UK/DE）：物理延迟约 **160ms ~ 220ms**。
2. **线路架构真伪鉴别**：
   - **IPLC / IEPL（国际私有专线）**：点对点纯内网传输，不过 GFW 防火墙，不过公网骨干网，零丢包、晚高峰抗抖动极强，但成本昂贵；
   - **BGP 多线中继**：国内入口为多线 BGP 服务器，通过公网隧道中继出境，性价比高，但在极端公网拥堵期可能产生微量抖动；
   - **直连公网（普通线路）**：如普通 163 骨干网，晚高峰丢包率极高。

---

## 核心核验二：代理协议技术特性真实性

1. **Hysteria 2**：
   - 基于标准 UDP 协议魔改的 QUIC 传输层协议；
   - 核心优势是自研的拥塞控制算法（BBR 优化），在恶劣弱网与高丢包环境下拥有极强的极限吞吐压榨能力，适合大流量 4K 串流；
   - 劣势是部分地区运营商会对大流量 UDP 流量进行 QOS 限速。
2. **VLESS-Reality**：
   - 依靠借用真实海外大厂合规网站的 TLS 证书（如 Yahoo、Apple 等）伪装底层握手，没有传统代理的特征指纹；
   - 属于 TCP 流量，抗封锁能力目前处于行业第一梯队。
3. **Shadowsocks (SS)**：
   - 目前推荐采用现代 AEAD 加密算法（如 `2022-blake3-aes-128-gcm`）；老旧流加密（如 rc4-md5）已被长城防火墙秒识破，严禁推荐。

---

## 核心核验三：海外 AI 风控与支付核验基线

1. **Anthropic Claude 真实风控机制**：
   - 对机房 IP（AWS, DigitalOcean, Vultr 等 IDC ASN）采取同网段批量封杀（Subnet Ban）；
   - 严格审查前台浏览器 Canvas 2D / WebGL 硬件指纹；
   - 严禁短时间内发生 IP 跨国跳跃（Session Drift 漂移即秒封）；
   - 手机号严禁使用公开免费虚拟接码（如 SMS-Activate 公共虚拟号），必须使用干净的海外真实实体 SIM 卡或正规 eSIM。
2. **美区 Apple ID 与海外支付常识**：
   - 免税州（如俄勒冈州 Oregon 邮编 97201、特拉华州 Delaware 邮编 19702、阿拉斯加 Alaska 邮编 99501）免收海外消费税；
   - 严禁在 iPhone 设置主界面直接登录外区 iCloud（会导致整机被锁连坐），安全铁律是：**仅在 App Store 应用商店内切换登录外区账号**。
