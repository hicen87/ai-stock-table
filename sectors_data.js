window.SECTOR_TABLE_DATA = {
  asOf: "2026-07-17",
  version: "v1.0",
  title: "美股板块表现潜力表",
  ruleNote: "与个股选股表同一框架：潜力 = 质量（利润池持续性 × 边际变化）× 定价未充分程度。持续性 = 紧缺度 × 扩产难度 × 定价权（相乘，任一≤3警戒）。板块层面口径映射：紧缺度=板块供需缺口（产能/劳动力/牌照）；扩产难度=新进入者复制该板块盈利的年限；定价权=板块整体提价能力。估值锚=板块Forward PE vs 标普500（20.5）及自身5年中枢。质量分低频更新；FPE每周联网刷新。",
  scoreAnchors: [
    "紧缺度：9-10=结构性供不应求且排队多年（电力：数据中心接网排队4-7年）；7-8=供给偏紧、交期拉长（AI算力/电网设备）；5-6=平衡偏紧；≤3=供给过剩或需求疲软（地产/可选消费）",
    "扩产难度：9-10=牌照/监管/基建壁垒>3年（公用事业、受监管金融牌照）；7-8=资本+技术壁垒2-3年（芯片/药械）；5-6=1-2年；≤3=低门槛（一般零售/餐饮）",
    "定价权：9-10=行业性提价且需求不掉（电价上调获批潮）；7-8=成本可传导（软件订阅/龙头集中行业）；5-6=部分传导；≤3=促销竞价行业",
    "估值锚：FPE vs 标普500（20.5，FactSet 7-10口径，高于5年均值19.9与10年均值19.0）+ 自身5年中枢分位；能源/材料等周期板块禁用FPE排序，改用盈利分位——能源2026E EPS +122%即典型周期高基数，低PE≠便宜",
    "EPS±：以FactSet盈利修正宽度为准（Q2季内bottom-up EPS上修+3.4%，为2021Q2以来最大季内上修；CY26修正：能源+41.2%/通信+12.5%/科技+9.1%/材料+8.2%上修，医疗-3.4%/必需消费-0.7%下修）"
  ],
  rows: [
    { rank: 1, segment: "信息技术", vtype: "成长", scarcity: 8, pool: 10, expand: 8, pricing: 8, status: "✅", marginal: "🟢", leaders: "XLK · MSFT/NVDA/AVGO", fpe: "≈21.7", anchor2: "vs 标普溢价仅6%，处5年溢价区间低位；但3/31以来板块价格+29.2%为11板块最大涨幅", priced: "🟡", verdict: "核心池", tier: "core", sizeBand: "映射个股表1-5行",
      evidence: "Q2 EPS预期+63.3%（半导体行业+131%）；44家发正面指引创2006年以来纪录；CY26上修+9.1%" },
    { rank: 2, segment: "公用事业", vtype: "防御+成长", scarcity: 9, pool: 5, expand: 9, pricing: 8, status: "✅", marginal: "🟡", leaders: "XLU · NEE/CEG/VST", fpe: "18.9（SPDR XLU FY1口径，7/16）", anchor2: "监管资产回报率上调周期；数据中心购电协议提供多年能见度；SSGA盈利sentiment已转负（-0.77，11板块垫底）", priced: "🟡", verdict: "核心候选：盈利修正转正即回核心池", tier: "watch", sizeBand: "0 → 触发后4-6%",
      evidence: "接网排队4-7年=紧缺度9、牌照基建=扩产难度9未变；但强势跑赢后开始跑输、EPS修正转平（SSGA 3个月修正-0.39）——长坡仍在、斜度暂失" },
    { rank: 3, segment: "通信服务", vtype: "成长", scarcity: 6, pool: 9, expand: 7, pricing: 8, status: "✅", marginal: "🟢", leaders: "XLC · GOOGL/META", fpe: "14.7（SPDR XLC FY1口径，7/16）", anchor2: "FY1口径14.7为11板块最低档=大型平台罕见折价（注意FY1系统性低于NTM口径1-2挡）；分析师目标价隐含+25.9%（11板块第二高）", priced: "🟢", verdict: "核心池", tier: "core", sizeBand: "含于云平台仓位",
      evidence: "CY26 EPS上修+12.5%（仅次能源）；Q2营收预期+13.7%板块第三；风险同个股表#2：capex吞噬现金流" },
    { rank: 4, segment: "金融", vtype: "利率敏感", scarcity: 4, pool: 8, expand: 6, pricing: 5, status: "✅", marginal: "🟡", leaders: "XLF · JPM/BRK", fpe: "15.4", anchor2: "vs 标普折价25%，处历史折价偏深位置；降息周期利好投行/资管管道", priced: "🟢", verdict: "观察：盈利修正转🟢即入", tier: "watch", sizeBand: "0 → 触发后4-6%",
      evidence: "估值便宜是真便宜（非周期顶陷阱），但缺紧缺逻辑，潜力分靠定价未充分撑" },
    { rank: 5, segment: "能源", vtype: "周期", scarcity: 7, pool: 7, expand: 7, pricing: 5, status: "⚠️", marginal: "🟢顶部预警", leaders: "XLE · XOM/CVX", fpe: "12.9（周期品禁用FPE排序）", anchor2: "周期锚：Q2 EPS +122.1%为11板块最高（油价$92.55、同比+45%）=高基数警戒；但3/31以来板块价格-14.5%为11板块最大跌幅——盈利上修与股价下跌罕见背离", priced: "⚠️陷阱候选", verdict: "同HBM逻辑：EPS越好离顶越近；背离值得跟踪但不改周期纪律", tier: "debate", sizeBand: "0-3%",
      evidence: "CY26上修+41.2%全场最大、CVX EPS预期近翻倍；低PE+盈利爆发=教科书周期中后段特征，与个股表HBM行同一纪律" },
    { rank: 6, segment: "医疗保健", vtype: "防御", scarcity: 5, pool: 7, expand: 7, pricing: 6, status: "✅", marginal: "🟡", leaders: "XLV · LLY/UNH", fpe: "19.7（SPDR XLV FY1口径，7/16）", anchor2: "vs 标普折价+自身5年中枢下沿；表观EPS大幅下修（Q2 -15.3%）主因Gilead一次性IPR&D $115亿，剔除后Q2实际+6.5%增长", priced: "🟢", verdict: "观察：CY26修正（现-3.4%）转正即入", tier: "watch", sizeBand: "0 → 触发后4-6%",
      evidence: "唯一Q2预期负增长板块（-9.5%），但3/31以来股价+8.9%=市场已识别一次性因素；GLP-1利润池真实" },
    { rank: 7, segment: "工业", vtype: "周期成长", scarcity: 7, pool: 6, expand: 7, pricing: 6, status: "✅", marginal: "🟢", leaders: "XLI · GE/ETN/CAT", fpe: "25.5", anchor2: "vs 标普溢价24%=历史溢价高位；电气化/回流叙事已充分计价", priced: "🔴", verdict: "好生意贵价格：回调至FPE 22以下再看", tier: "watch", sizeBand: "0 → 触发后3-5%",
      evidence: "与个股表GEV同病：紧缺真实但FPE 25.5仍是11板块次贵；26.0→25.5小幅回落、离22触发线尚有距离" },
    { rank: 8, segment: "必需消费", vtype: "防御", scarcity: 3, pool: 5, expand: 4, pricing: 5, status: "⚠️", marginal: "🔴", leaders: "XLP · COST/PG", fpe: "20.8（SPDR XLP FY1口径，7/16）", anchor2: "防御板块却无估值折价；通胀重回财报热词=成本端再承压", priced: "🟡", verdict: "暂不跟", tier: "out", sizeBand: "0",
      evidence: "CY26 EPS下修-0.7%（仅两个下修板块之一）确认🔴；Buy评级占比44%全场最低；紧缺度3触及警戒线" },
    { rank: 9, segment: "材料", vtype: "周期", scarcity: 5, pool: 4, expand: 5, pricing: 4, status: "⚠️", marginal: "🟢", leaders: "XLB · LIN/FCX", fpe: "≈19（周期品禁用FPE排序）", anchor2: "Q2 EPS预期+35.2%（板块第三）、CY26上修+8.2%；但上修主力是Dow/LYB化工困境反转而非铜", priced: "🟡", verdict: "暂不跟：要铜敞口直接买铜矿个股", tier: "out", sizeBand: "0",
      evidence: "金属采矿+44%/化工+43%全线转正，周期反转确认；但板块工具（XLB）表达不了铜逻辑，且化工反转属低质量弹性" },
    { rank: 10, segment: "可选消费", vtype: "周期", scarcity: 3, pool: 6, expand: 3, pricing: 4, status: "❌", marginal: "🟡", leaders: "XLY · AMZN/TSLA", fpe: "25.9（FactSet 7/10，11板块最高）", anchor2: "板块FPE被AMZN/TSLA双巨头扭曲；等权口径下普通零售无定价权", priced: "🔴", verdict: "扩产难度3出局；AMZN敞口走云平台行", tier: "out", sizeBand: "0",
      evidence: "低门槛+促销竞价+高估值三重不利" },
    { rank: 11, segment: "房地产", vtype: "利率敏感", scarcity: 3, pool: 4, expand: 5, pricing: 3, status: "❌", marginal: "🟡", leaders: "XLRE · PLD/EQIX", fpe: "≈16（FFO口径另算）", anchor2: "数据中心REIT（EQIX/DLR）是唯一紧缺子行业，但板块权重<20%；净利率同比降幅11板块最大且低于5年均值", priced: "🟡", verdict: "定价权3出局；要数据中心敞口买个股非板块", tier: "out", sizeBand: "0",
      evidence: "办公供给失衡自2020延续至今；盈利sentiment倒数第二（SSGA -0.72）；降息利好已部分抢跑" }
  ],
  portfolioRules: [
    "本表是个股选股表的上层视图：板块结论与个股表冲突时，以个股表为准（板块工具钝、个股工具利）",
    "核心池板块（科技/公用/通信）敞口已隐含在个股表仓位中，勿重复叠加ETF造成超配",
    "板块ETF仅三种场景使用：①个股研究未完成时的临时敞口 ②表达纯宏观视图（如降息→XLF）③个股集中度过高时的分散腿",
    "周期板块（能源/材料）纪律与个股表HBM行相同：盈利越亮眼越警惕，禁用低PE作买入理由",
    "净敞口总闸门沿用个股表：AI链≤40%，宏观模块转向时同步调整"
  ],
  tiers: [
    "核心池：科技/通信——AI利润池的进攻与折价两种表达",
    "分歧板块：能源是全表最大分歧——CY26上修+41.2%全场最大 vs 股价-14.5%全场最差 vs 周期顶特征三方拉扯，与个股表NVDA分歧行同等对待",
    "观察池：公用（长坡在、斜度暂失，盈利修正转正即回核心池）、金融（等修正转向）、医疗（等Gilead一次性出表后CY26修正转正）、工业（等FPE回22以下）"
  ],
  falsifiers: [
    "科技板块FPE溢价回到标普+30%以上 → 降级观察",
    "公用事业电价上调被监管驳回潮 → 定价权8分证伪",
    "医疗CY26修正剔除Gilead后仍为负 → 政策折价确认为实质恶化，出观察池",
    "金融板块EPS修正宽度连续4周转正 → 升级入池",
    "能源2027E EPS一致预期开始下修 → 周期顶确认，清零",
    "工业FPE回落至22以下 → 升级为可分析对象",
    "任一hyperscaler下调capex → 科技/公用/工业三板块同步复检（与个股表条款#4联动）",
    "10年期利率快速上行50bp+ → 公用/地产利率敏感腿减半"
  ],
  dataNote: "2026-07-17周更：FactSet 7/17周报运行时尚未发布，FactSet口径（标普FPE 20.5、板块两端、EPS±方向）沿用7/10周报。SPDR FY1四板块刷新至7/16收盘：XLC 14.3→14.7、XLU 19.0→18.9、XLV约18-19→19.7、XLP 19.6→20.8（FY1与FactSet NTM两套锚不可横比）。7/16全市场大跌、科技/半导体领跌，板块FPE下期FactSet周报将体现。板块条款无触发：capex未下调、科技溢价未回+30%。",
  disclaimer: "⚠️ 本表为板块层参考视图，非买卖建议；个股决策以个股选股表+模块B为准；非持牌投顾意见。"
};
