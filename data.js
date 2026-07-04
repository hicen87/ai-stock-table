window.STOCK_TABLE_DATA = {
  asOf: "2026-07-04",
  version: "v3.1",
  title: "AI产业链选股表",
  ruleNote: "潜力 = 质量（利润池持续性 × 边际变化）× 定价未充分程度。持续性 = 紧缺度 × 扩产难度 × 定价权（相乘，任一≤3判不可持续）。利润池规模只做参考列，不进排序（存量大≠该买，边际定股价）。定价程度：龙头 Forward PE vs 增速/历史中枢（🟢低 / 🟡中 / 🟠高 / 🔴已充分）。质量分低频更新；估值列每次咨询联网刷新。",
  rows: [
    { rank: 1,  segment: "先进制程+封装", scarcity: 9,  pool: 10, expand: 9, pricing: 9, status: "✅", marginal: "🟢", leaders: "TSM", fpe: "23.1", priced: "🟢", verdict: "核心池", tier: "core" },
    { rank: 2,  segment: "云服务平台", scarcity: 7,  pool: 10, expand: 7, pricing: 7, status: "✅", marginal: "🟢", leaders: "MSFT/GOOGL/AMZN", fpe: "22.8/~27/29-31", priced: "🟢", verdict: "核心池", tier: "core" },
    { rank: 3,  segment: "GPU", scarcity: 8,  pool: 10, expand: 7, pricing: 8, status: "✅→⚠️", marginal: "🟡", leaders: "NVDA", fpe: "21.9", priced: "🟢有原因", verdict: "先跑模块G", tier: "debate" },
    { rank: 4,  segment: "定制ASIC", scarcity: 8,  pool: 7,  expand: 7, pricing: 7, status: "✅", marginal: "🟢🟢", leaders: "AVGO", fpe: "41", priced: "🟡", verdict: "回调35x以下升级", tier: "watch" },
    { rank: 5,  segment: "半导体设备", scarcity: 7,  pool: 8,  expand: 9, pricing: 8, status: "✅", marginal: "🟢", leaders: "ASML/AMAT", fpe: "50.9", priced: "🟠", verdict: "观察：40x以下", tier: "watch" },
    { rank: 6,  segment: "EDA/IP", scarcity: 5,  pool: 4,  expand: 9, pricing: 9, status: "✅", marginal: "🟢", leaders: "SNPS/CDNS", fpe: "36.3/45.4", priced: "🟡", verdict: "观察：SNPS 30x以下", tier: "watch" },
    { rank: 7,  segment: "电力/能源基建", scarcity: 10, pool: 5,  expand: 9, pricing: 9, status: "✅", marginal: "🟢🟢", leaders: "GEV/ETN", fpe: "58-71", priced: "🔴", verdict: "观察：35x以下", tier: "watch" },
    { rank: 8,  segment: "散热/液冷", scarcity: 8,  pool: 4,  expand: 5, pricing: 6, status: "⚠️", marginal: "🟢", leaders: "VRT/2308.TW", fpe: "46.4", priced: "🟠", verdict: "暂不跟", tier: "out" },
    { rank: 9,  segment: "HBM/存储", scarcity: 9,  pool: 8,  expand: 4, pricing: 6, status: "🔴", marginal: "🟢顶部预警", leaders: "000660.KS/MU", fpe: "10.7", priced: "⚠️陷阱", verdict: "规避新进（B类周期顶）", tier: "out" },
    { rank: 10, segment: "大模型层", scarcity: 5,  pool: 1,  expand: 5, pricing: 4, status: "⚠️", marginal: "收入🟢利润🔴", leaders: "未上市/GOOGL", fpe: "—", priced: "—", verdict: "利润池为负", tier: "out" },
    { rank: 11, segment: "平台工具/数据", scarcity: 4,  pool: 2,  expand: 4, pricing: 4, status: "⚠️", marginal: "🟡", leaders: "SNOW/Databricks", fpe: "—", priced: "—", verdict: "毛利率下滑中", tier: "out" },
    { rank: 12, segment: "光模块/网络", scarcity: 7,  pool: 3,  expand: 3, pricing: 5, status: "❌", marginal: "🟢引洪水", leaders: "300308.SZ/300502.SZ", fpe: "—", priced: "—", verdict: "扩产难度≤3出局", tier: "out" },
    { rank: 13, segment: "算力租赁", scarcity: 7,  pool: 1,  expand: 4, pricing: 3, status: "❌", marginal: "🟡", leaders: "CRWV/ORCL", fpe: "—", priced: "—", verdict: "定价权≤3出局", tier: "out" },
    { rank: 14, segment: "应用层", scarcity: 3,  pool: 2,  expand: 2, pricing: 4, status: "❌", marginal: "🔴", leaders: "MSFT/PLTR", fpe: "—", priced: "—", verdict: "等格局收敛", tier: "out" },
    { rank: 15, segment: "服务器ODM", scarcity: 6,  pool: 3,  expand: 2, pricing: 2, status: "❌", marginal: "🔴", leaders: "2317.TW/SMCI", fpe: "—", priced: "—", verdict: "过路财神", tier: "out" }
  ],
  tiers: [
    "核心池（1-2）：可进模块B定时机",
    "分歧标的（3）：NVDA 21.9x是全表最大分歧——便宜理由（ASIC分流）恰是AVGO走强理由，两仓位逻辑对冲，先跑模块G看EPS一致预期30/90天修正",
    "观察池（4-7）：挂回归触发价，7月初杀估值正在朝触发价走，不追"
  ],
  falsifiers: [
    "HBM任一家毛利率环比下滑 → 存储周期顶确认，硬件链整体降仓",
    "AVGO backlog环比下降或指引miss → ASIC迁入叙事证伪",
    "台积电CoWoS表述从“紧缺”转“平衡” → 全链定价权拐点",
    "任一hyperscaler下调capex → 洪水提前，全链复检",
    "ASML季度订单环比腰斩 → capex退潮最早信号（领先财报1-2季）",
    "VRT营业利润率停止扩张 → 液冷竞争追上",
    "AWS/Azure/GCP任一家云利润率环比降超2pp → 折旧吞噬利润池",
    "TSM涨至FPE 30+ → 潜力#1让位重排",
    "NVDA GM跌破72%或FY2 EPS 30天下修 → “便宜”确认为陷阱",
    "GEV回调至FPE 35以下 → 升级为可分析对象"
  ],
  dataNote: "估值：2026-07-02/03（GuruFocus/StockAnalysis/FullRatio）· 基本面：2026Q1-Q2财报及2026-06行业数据 · 背景：2026年7月初AI芯片板块杀估值（MU单日-13%）；hyperscaler 2026 capex合计~$725B（+77%）",
  disclaimer: "⚠️ 宏观判断置信度按低档处理；本表为参考区间非买卖建议；时机判断走模块B；非持牌投顾意见。"
};
