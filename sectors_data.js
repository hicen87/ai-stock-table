window.SECTOR_TABLE_DATA = {
  asOf: "2026-08-08",
  version: "v1.0",
  title: "美股板块表现潜力表",
  ruleNote: "与个股选股表同一框架：潜力 = 质量（利润池持续性 × 边际变化）× 定价未充分程度。持续性 = 紧缺度 × 扩产难度 × 定价权（相乘，任一≤3警戒）。板块层面口径映射：紧缺度=板块供需缺口（产能/劳动力/牌照）；扩产难度=新进入者复制该板块盈利的年限；定价权=板块整体提价能力。主估值锚统一为FactSet 8/7 Forward 12M P/E；SPDR FY1作为次锚，两者为不同计算口径不得直接横比。质量分低频更新；FPE每周联网刷新。",
  scoreAnchors: [
    "紧缺度：9-10=结构性供不应求且排队多年（电力：数据中心接网排队4-7年）；7-8=供给偏紧、交期拉长（AI算力/电网设备）；5-6=平衡偏紧；≤3=供给过剩或需求疲软（地产/可选消费）",
    "扩产难度：9-10=牌照/监管/基建壁垒>3年（公用事业、受监管金融牌照）；7-8=资本+技术壁垒2-3年（芯片/药械）；5-6=1-2年；≤3=低门槛（一般零售/餐饮）",
    "定价权：9-10=行业性提价且需求不掉（电价上调获批潮）；7-8=成本可传导（软件订阅/龙头集中行业）；5-6=部分传导；≤3=促销竞价行业",
    "估值锚：FactSet 8/7 Forward 12M P/E=20.0（高于5年均值19.9、10年均值19.0）；工业25.2/可选消费24.3最贵，能源13.1/金融15.5最便宜；能源/材料等周期板块禁用FPE排序，改用盈利分位——低PE≠便宜；SPDR FY1仅作次锚，口径不可横比",
    "EPS±：以FactSet盈利修正宽度为准（Q2 blended增速50.4%，上周47.4%；CY26/CY27增长30.0%/13.6%；通信117.0%与可选91.6%仍被Alphabet/Amazon一次性投资收益扭曲，剔除后分别6.0%/7.5%）；CY26较6/30上修的主要板块为能源/通信/科技/可选/金融/工业，材料/公用/医疗下修；能源CY27增长-11.4%较30日前-7.0%进一步下修，触发条款#5待人工确认"
  ],
  rows: [
    { rank: 1, segment: "信息技术", vtype: "成长", scarcity: 8, pool: 10, expand: 8, pricing: 8, status: "✅", marginal: "🟢", leaders: "XLK · MSFT/NVDA/AVGO", fpe: "FactSet NTM 22.7；SPDR XLK FY1 26.55（8/7）", anchor2: "Q2净利率30.8% vs 去年同期25.2%、5年均值25.6%，为11板块中改善幅度第三；FactSet 8/7：IT CY26增长49.7%（30日前48.0%）继续上修；SPDR FY1 26.55为8/7口径；FactSet NTM 22.7较标普20.0仅溢价13.5%，条款#1未触发", priced: "🟡", verdict: "核心池", tier: "core", sizeBand: "映射个股表1-5行",
      evidence: "三大hyperscaler财报capex全线上调且云收入加速（AWS+37%、Azure+43%），半导体权重44%直接受益；剔除半导体及设备行业后板块增速仍显著低于表观——利润集中度高是脆弱点，上下两周±10%级别摆动正是集中度的体现；FY1口径系统性高于NTM，勿与标普19.6横比" },
    { rank: 2, segment: "公用事业", vtype: "防御+成长", scarcity: 9, pool: 5, expand: 9, pricing: 8, status: "✅", marginal: "🟡→🔴", leaders: "XLU · NEE/CEG/VST", fpe: "FactSet NTM 17.2；SPDR XLU FY1 18.06（8/7）", anchor2: "监管资产回报率上调周期；数据中心购电协议提供多年能见度；上周两条负面（Q2净利率环比下滑13.3% vs 14.8%、营收增速自8.3%降至5.0%）本周FactSet 8/7仍未解除，维持负面读数；hyperscaler capex三家上调（AMZN $2200亿）间接强化电力需求侧", priced: "🟡", verdict: "核心候选降级观察：盈利修正转正+净利率止跌才回核心池", tier: "watch", sizeBand: "0 → 触发后4-6%",
      evidence: "接网排队4-7年=紧缺度9、牌照基建=扩产难度9未变，长坡仍在；斜度恶化（营收下修+净利率环比下滑）未获解除，marginal维持🟡→🔴，质量分待人工复核" },
    { rank: 3, segment: "通信服务", vtype: "成长", scarcity: 6, pool: 9, expand: 7, pricing: 8, status: "✅", marginal: "🟢（表观失真）", leaders: "XLC · GOOGL/META", fpe: "FactSet NTM 18.1；SPDR XLC FY1 12.90（8/7）", anchor2: "⚠️口径纪律持续：FactSet 8/7本板块Q2表观增速117.0%（自6/30的7.3%）、净利率28.5% vs 5年均值13.0%，几乎全部来自Alphabet的GAAP口径一次性股权投资收益——剔除后接近零增长。真实基本面锚看营收与互动媒体行业，而非利润数字；META 7/29财报后下跌（capex上调但AI收入证据弱于MSFT/AMZN）是本周FY1回落主因之一", priced: "🟢", verdict: "核心池（估值真便宜，但盈利数字需剔除一次性后再用）", tier: "core", sizeBand: "含于云平台仓位",
      evidence: "FY1 13.20仍为11板块最低档=大型平台罕见折价；本周市场对「有AI收入证据的capex」奖励（MSFT/AMZN涨）、对「只有capex没有收入证据」惩罚（META跌）——板块内部分化加剧；风险同个股表#2：capex吞噬现金流" },
    { rank: 4, segment: "金融", vtype: "利率敏感", scarcity: 4, pool: 8, expand: 6, pricing: 5, status: "✅", marginal: "🟢（第3周，待第4周确认）", leaders: "XLF · JPM/BRK", fpe: "FactSet NTM 15.5；SPDR XLF FY1 16.27（8/7）", anchor2: "vs 标普折价22%，处历史折价偏深位置；FactSet 8/7继续确认修正为正：金融列九个上修板块、营收上修至12.6%（自8.9%，全场领先）、CY26增长14.1%（30日前10.0%），但条款#4仍需第4周确认、Q2正向业绩惊喜+4.7%全场第二；JPM/GS/MS/TRV/COF集体超预期的锚不变", priced: "🟢", verdict: "接近升级：条款#4（修正宽度连续4周转正）已计第2-3周，再1-2周确认即入池", tier: "watch", sizeBand: "0 → 触发后4-6%",
      evidence: "估值便宜是真便宜（非周期顶陷阱），修正宽度连续第二份周报为正；仍缺紧缺逻辑（紧缺度4分），潜力分靠定价未充分撑——即使触发也按4-6%下限起步，是否第4周计满由人工确认" },
    { rank: 5, segment: "能源", vtype: "周期", scarcity: 7, pool: 7, expand: 7, pricing: 5, status: "⚠️", marginal: "🟢顶部预警", leaders: "XLE · XOM/CVX", fpe: "FactSet NTM 13.1；SPDR XLE FY1 12.05（8/7，周期品禁用FPE排序）", anchor2: "周期锚：FactSet 8/7能源CY26增长76.8%（30日前64.5%）仍列最高、Q2正向业绩惊喜+10.1%全场第一、CY27增长-11.4%较30日前-7.0%下修，条款#5触发待人工确认；油价高基数下炼化/一体化/勘探生产维持破百增速的结构未变；上周记录的油服子行业-16%（唯一负增长）顶部线索本周无新反证", priced: "⚠️陷阱候选", verdict: "同HBM逻辑：EPS越好离顶越近，油服子行业转负是顶部线索", tier: "debate", sizeBand: "0-3%",
      evidence: "条款#5的当前代理证据已出现：FactSet 8/7图表显示能源CY27增长-11.4%低于30日前-7.0%，按保守纪律标为触发待人工确认；但该图表展示的是增长率而非EPS绝对值，下一份FactSet周报复核前不自动改质量分/tier/仓位；短期修正方向与周期顶判断的矛盾持续。" },
    { rank: 6, segment: "医疗保健", vtype: "防御", scarcity: 5, pool: 7, expand: 7, pricing: 6, status: "✅", marginal: "🔴", leaders: "XLV · LLY/UNH", fpe: "FactSet NTM 18.4；SPDR XLV FY1 19.81（8/7）", anchor2: "vs 标普折价+自身5年中枢下沿；FactSet 8/7：医疗仍是CY26下修板块，但CY26增长2.3%低于30日前3.0%，但Q2同比跌幅已由-13.8%收敛至-6.7%（更多公司实报冲淡IPR&D拖累）；拖累仍是Gilead/Merck/Lilly三家的一次性费用，剔除后板块为正增长", priced: "🟢", verdict: "观察维持：唯一下修板块，读数收敛但未转正，本周不满足入池条件", tier: "watch", sizeBand: "0 → 触发后4-6%",
      evidence: "净利率6.6% vs 去年8.9%，仍低于同比与5年均值；Q2财报超预期比例100%全场第一但增速垫底=会计口径与经营现实脱节，需等IPR&D出表后的干净季度才能判断；GLP-1利润池真实" },
    { rank: 7, segment: "工业", vtype: "周期成长", scarcity: 7, pool: 6, expand: 7, pricing: 6, status: "✅", marginal: "🟢→🟡", leaders: "XLI · GE/ETN/CAT", fpe: "FactSet NTM 25.2；SPDR XLI FY1 26.48（8/7，仍为最贵）", anchor2: "vs 标普溢价26%=历史溢价高位、本周仍为最贵板块（工业25.2 vs 可选24.3）；上周负面（Q2净利率环比下滑10.7% vs 12.3%，环比降幅最大）无新反证；ETN 7/31财报隐含NTM EPS继续上修、GEV本周价格基本持平——电气化子板块基本面继续上修但估值同步走高", priced: "🔴", verdict: "好生意贵价格：回调至FPE 22以下再看（条款#6，仍差约11%）", tier: "watch", sizeBand: "0 → 触发后3-5%",
      evidence: "与个股表GEV同病：紧缺真实但估值贵；FPE四周缓降25.9→25.5→25.0→24.7，方向对但速度慢且本周登顶最贵板块；净利率环比转弱维持marginal下调" },
    { rank: 8, segment: "必需消费", vtype: "防御", scarcity: 3, pool: 5, expand: 4, pricing: 5, status: "⚠️", marginal: "🟡", leaders: "XLP · COST/PG", fpe: "FactSet NTM 21.9；SPDR XLP FY1 20.47（8/7）", anchor2: "防御板块却无估值折价（SPDR FY1 20.47与FactSet标普NTM 20.0不可直接横比，口径差已使其显得更贵）；通胀重回财报热词=成本端再承压", priced: "🟡", verdict: "暂不跟", tier: "out", sizeBand: "0",
      evidence: "营收超预期比例100%但利润端无改善=以价换量特征；Buy评级占比44%全场最低；紧缺度3触及警戒线" },
    { rank: 9, segment: "材料", vtype: "周期", scarcity: 5, pool: 4, expand: 5, pricing: 4, status: "⚠️", marginal: "🔴", leaders: "XLB · LIN/FCX", fpe: "FactSet NTM 17.8；SPDR XLB FY1 17.99（8/7，周期品禁用FPE排序）", anchor2: "CY26增长37.1%低于30日前38.6%，Q3 EPS修正为下修最深的板块、100%公司超预期；子行业化工+49%、金属采矿+47%、包装+17%，仅建材约-1%", priced: "🟡", verdict: "暂不跟：要铜敞口直接买铜矿个股", tier: "out", sizeBand: "0",
      evidence: "上修主力仍是化工困境反转而非铜；板块工具（XLB）表达不了铜逻辑，且化工反转属低质量弹性；FactSet 7/31新增负面：材料是Q3'26 EPS下修最深板块（-5.0%）——Q2上修与Q3下修并存，弹性质量低的佐证" },
    { rank: 10, segment: "可选消费", vtype: "周期", scarcity: 3, pool: 6, expand: 3, pricing: 4, status: "❌", marginal: "🟡", leaders: "XLY · AMZN/TSLA", fpe: "FactSet NTM 24.3；SPDR XLY FY1 23.80（8/7，11板块次贵）", anchor2: "板块FPE被AMZN/TSLA双巨头扭曲；等权口径下普通零售无定价权；FactSet 8/7：Q2表观增速升至91.6%（自6/30的5.0%）——主要由AMZN单家驱动且含大额一次性投资收益，按一次性损益纪律剔除后进入打分，表观数字只作展示", priced: "🔴", verdict: "扩产难度3出局；AMZN敞口走云平台行", tier: "out", sizeBand: "0",
      evidence: "低门槛+促销竞价+高估值三重不利；本板块成为继通信服务后第二个被单家一次性损益扭曲的板块，表观90.7%增速无板块含义" },
    { rank: 11, segment: "房地产", vtype: "利率敏感", scarcity: 3, pool: 4, expand: 5, pricing: 3, status: "❌", marginal: "🟡", leaders: "XLRE · PLD/EQIX", fpe: "FactSet NTM 18.6；SPDR XLRE FY1 35.91（8/7，REIT/FFO口径差异）", anchor2: "数据中心REIT（EQIX/DLR）是唯一紧缺子行业，但板块权重<20%；FactSet Q2净利率仍为33.8% vs 5年均值35.6%，是三个低于5年均值的板块之一；分析师目标价隐含涨幅+10.6%为11板块最低", priced: "🟡", verdict: "定价权3出局；要数据中心敞口买个股非板块", tier: "out", sizeBand: "0",
      evidence: "办公供给失衡自2020延续至今；上行空间预期全场垫底；降息利好已部分抢跑" }
  ],
  portfolioRules: [
    "本表是个股选股表的上层视图：板块结论与个股表冲突时，以个股表为准（板块工具钝、个股工具利）",
    "核心池板块（科技/通信）敞口已隐含在个股表仓位中，勿重复叠加ETF造成超配",
    "板块ETF仅三种场景使用：①个股研究未完成时的临时敞口 ②表达纯宏观视图（如降息→XLF）③个股集中度过高时的分散腿",
    "周期板块（能源/材料）纪律与个股表HBM行相同：盈利越亮眼越警惕，禁用低PE作买入理由",
    "一次性损益纪律（2026-07-25新增）：任何板块的EPS增速若由单家公司的GAAP一次性损益驱动（本周通信服务=Alphabet $980亿投资收益、医疗=Gilead/Merck/Lilly的IPR&D），一律以剔除后的口径进入打分，表观数字只作展示",
    "净敞口总闸门沿用个股表：AI链≤40%，宏观模块转向时同步调整"
  ],
  tiers: [
    "核心池：科技/通信——AI利润池的进攻与折价两种表达；通信的便宜是真的（FY1 13.20），但它的高利润增速是假的（Alphabet一次性），两者不要混为一谈",
    "分歧板块：能源仍是全表最大分歧——修正方向连续为正、业绩惊喜全场第一 vs 周期顶特征 vs 油服子行业已转负，三方拉扯，与个股表NVDA分歧行同等对待",
    "观察池：金融（修正宽度连续第二份周报为正，条款#4计第2-3周）、医疗（唯一下修板块但读数-17.8%→-14.0%收敛中）、工业（FPE 24.7登顶最贵，等回22以下）、公用（降级维持：营收下修+净利率环比下滑未解除）"
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
  dataNote: "2026-08-08周更：FactSet Earnings Insight 8/7已发布，主锚统一为Forward 12M P/E，SPDR官方FY1为次锚且不可横比。FactSet标普FPE 19.6→20.0（高于5年均值19.9与10年均值19.0），Q2 blended EPS增长47.4%→50.4%，CY26/CY27增长29.1%/14.1%→30.0%/13.6%；板块FactSet NTM FPE：信息技术22.7、公用事业17.2、通信服务18.1、金融15.5、能源13.1、医疗18.4、工业25.2、必需消费21.9、材料17.8、可选消费24.3、房地产18.6。SPDR FY1（8/7）：XLK26.55/XLU18.06/XLC12.90/XLF16.27/XLE12.05/XLV19.81/XLI26.48/XLP20.47/XLB17.99/XLY23.80/XLRE35.91；两套口径不直接横比。EPS方向：CY26相对6/30上修能源76.8%、通信54.4%、信息技术49.7%、可选消费32.1%、金融14.1%、工业11.6%、必需消费6.8%、房地产6.6%，下修材料37.1%、公用13.1%、医疗2.3%；通信117.0%与可选91.6%Q2表观增速分别受Alphabet 980亿美元与Amazon 534亿美元一次性收益扭曲，剔除后仅6.0%/7.5%。板块条款：#1科技FPE溢价约13.5%未触发；#2公用电价驳回无新证据；#3医疗剔除Gilead/Merck后仍为正、未触发；#4金融修正宽度计第3周，接近但未满4周；#5能源CY27增长-11.4%较30日前-7.0%下修，按保守纪律标为触发待人工确认，机械建议清零但不自动改评分/tier/仓位；#6工业25.2未到22；#7无hyperscaler下调capex；#8 10年期4.65%较7/24的4.69%下降，未触发。新增FactSet观测1条，质量分/tier/verdict/sizeBand不变。",
  disclaimer: "⚠️ 本表为板块层参考视图，非买卖建议；个股决策以个股选股表+模块B为准；非持牌投顾意见。"
};
