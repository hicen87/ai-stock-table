window.SECTOR_TABLE_DATA = {
  asOf: "2026-08-29",
  version: "v1.0",
  title: "美股板块表现潜力表",
  ruleNote: "与个股选股表同一框架：潜力 = 质量（利润池持续性 × 边际变化）× 定价未充分程度。持续性 = 紧缺度 × 扩产难度 × 定价权（相乘，任一≤3警戒）。板块层面口径映射：紧缺度=板块供需缺口（产能/劳动力/牌照）；扩产难度=新进入者复制该板块盈利的年限；定价权=板块整体提价能力。主估值锚为FactSet 8/28 Forward 12M P/E；次锚为SPDR官方8/27 Price/Earnings Ratio FY1，两套口径不同不得直接横比。质量分低频更新；FPE每周联网刷新。",
  scoreAnchors: [
    "紧缺度：9-10=结构性供不应求且排队多年（电力：数据中心接网排队4-7年）；7-8=供给偏紧、交期拉长（AI算力/电网设备）；5-6=平衡偏紧；≤3=供给过剩或需求疲软（地产/可选消费）",
    "扩产难度：9-10=牌照/监管/基建壁垒>3年（公用事业、受监管金融牌照）；7-8=资本+技术壁垒2-3年（芯片/药械）；5-6=1-2年；≤3=低门槛（一般零售/餐饮）",
    "定价权：9-10=行业性提价且需求不掉（电价上调获批潮）；7-8=成本可传导（软件订阅/龙头集中行业）；5-6=部分传导；≤3=促销竞价行业",
    "估值锚：FactSet 8/28 Forward 12M P/E=19.6（低于5年均值19.9、高于10年均值19.0）；工业24.1/可选消费23.6最贵，能源13.6/金融15.4最低；能源/材料等周期板块禁用FPE排序，低PE≠便宜；SPDR FY1仅作8/27次锚，口径不可横比",
    "EPS±：FactSet 8/28报告Q2 blended EPS增长52.0%，CY26/CY27增长31.2%/14.4%，信息技术因NVIDIA与Salesforce超预期由71.3%升至75.3%。CY26相6/30上修8板块、下修3板块；能源CY27 -12.2%较-7.0%下修并较8/7的-11.4%继续恶化，条款#5完成二次确认，机械建议清零、不自动改评分或仓位"
  ],
  rows: [
    { rank: 1, segment: "信息技术", vtype: "成长", scarcity: 8, pool: 10, expand: 8, pricing: 8, status: "✅", marginal: "🟢", leaders: "XLK · MSFT/NVDA/AVGO", fpe: "FactSet NTM 21.8（8/28）；SPDR XLK FY1 26.47（8/27）", anchor2: "Q2净利率32.3% vs 去年同期25.2%、5年均值25.6%；CY26增长51.2%（6/30为48.0%）；NTM 21.8较标普19.6溢价11.2%，条款#1未触发", priced: "🟡", verdict: "核心池", tier: "core", sizeBand: "映射个股表1-5行",
      evidence: "FactSet：NVIDIA与Salesforce超预期将IT Q2 blended EPS增长由71.3%推至75.3%；NVIDIA Q2 GM 75.0%、数据中心收入同比+117%。剔除半导体及设备行业后IT Q2增长由75.3%降至38.3%，利润集中度仍是脆弱点；FY1与NTM不可横比" },
    { rank: 2, segment: "公用事业", vtype: "防御+成长", scarcity: 9, pool: 5, expand: 9, pricing: 8, status: "✅", marginal: "🟡→🔴", leaders: "XLU · NEE/CEG/VST", fpe: "FactSet NTM 17.0（8/28）；SPDR XLU FY1 17.95（8/27）", anchor2: "数据中心购电协议提供多年能见度；CY26增长12.9%低于6/30的13.3%，Q2营收增速5.4%低于6/30的8.3%，斜度恶化未解除；近14天有监管审查与反对，但未形成「驳回潮」", priced: "🟡", verdict: "核心候选降级观察：盈利修正转正+净利率止跌才回核心池", tier: "watch", sizeBand: "0 → 触发后4-6%",
      evidence: "接网排队4-7年=紧缺度9、牌照基建=扩产难度9未变；FactSet显示Utilities营收超预期幅度-1.6%为11板块最弱，marginal维持🟡→🔴，条款#2未触发" },
    { rank: 3, segment: "通信服务", vtype: "成长", scarcity: 6, pool: 9, expand: 7, pricing: 8, status: "✅", marginal: "🟢（表观失真）", leaders: "XLC · GOOGL/META", fpe: "FactSet NTM 17.7（8/28）；SPDR XLC FY1 12.69（8/27）", anchor2: "⚠️FactSet Q2表观EPS增长116.9%，剔除Alphabet $980亿一次性股权收益后仅5.6%；CY26增长55.6%较6/30的28.1%上修，基本面锚仍看剔除一次性后数据", priced: "🟢", verdict: "核心池（估值真便宜，但盈利数字需剔除一次性后再用）", tier: "core", sizeBand: "含于云平台仓位",
      evidence: "SPDR FY1 12.69仍为11板块最低档；FactSet CY27增长-10.8%较6/30的+8.2%大幅下修，与当期一次性高增并存，继续按一次性损益纪律剔除后判断" },
    { rank: 4, segment: "金融", vtype: "利率敏感", scarcity: 4, pool: 8, expand: 6, pricing: 5, status: "✅", marginal: "🟢（新报告续正，连续4周仍待证）", leaders: "XLF · JPM/BRK", fpe: "FactSet NTM 15.4（8/28）；SPDR XLF FY1 16.15（8/27）", anchor2: "vs 标普折价21.4%；CY26增长14.5%较6/30的9.7%上修，但CY27增长9.1%低于6/30的11.1%，修正宽度混合；8/14与8/21停刊不计连续周数，条款#4仍待证", priced: "🟢", verdict: "接近升级：条款#4（修正宽度连续4周转正）已计第2-3周，再1-2周确认即入池", tier: "watch", sizeBand: "0 → 触发后4-6%",
      evidence: "FactSet显示金融Q2 blended EPS增长自6/30的5.2%升至22.0%，但前瞻CY27下修；估值折价存在，但连续4个有效发布周为正的证据不足，不触发自动升级" },
    { rank: 5, segment: "能源", vtype: "周期", scarcity: 7, pool: 7, expand: 7, pricing: 5, status: "⚠️", marginal: "🟢顶部预警", leaders: "XLE · XOM/CVX", fpe: "FactSet NTM 13.6（8/28）；SPDR XLE FY1 12.45（8/27，周期品禁用FPE排序）", anchor2: "周期锚：CY26增长82.8%较6/30的64.1%上修，但CY27增长-12.2%较-7.0%下修且较8/7的-11.4%继续恶化；Q2营收+42.4%，油服子行业EPS -9%，顶部线索加强", priced: "⚠️陷阱候选", verdict: "同HBM逻辑：EPS越好离顶越近，油服子行业转负是顶部线索", tier: "debate", sizeBand: "0-3%",
      evidence: "条款#5以CY27增长率作一致EPS方向代理；8/28第二份FactSet报告确认能源CY27继续下修，条款已触发。机械动作：能源板块清零；仅记录建议，不自动改质量分、tier、verdict或sizeBand" },
    { rank: 6, segment: "医疗保健", vtype: "防御", scarcity: 5, pool: 7, expand: 7, pricing: 6, status: "✅", marginal: "🔴", leaders: "XLV · LLY/UNH", fpe: "FactSet NTM 19.0（8/28）；SPDR XLV FY1 20.44（8/27）", anchor2: "CY26增长2.3%低于6/30的2.8%；Q2 EPS增长-6.5%仍为唯一负增长板块，但剔除Gilead与Merck的IPR&D/收购费用后为+18.1%，条款#3未触发", priced: "🟢", verdict: "观察维持：唯一下修板块，读数收敛但未转正，本周不满足入池条件", tier: "watch", sizeBand: "0 → 触发后4-6%",
      evidence: "Q2净利率7.1% vs 去年8.1%、5年均值8.9%，仍低于两个锚；FactSet披露EPS超预期公司比例96%为全场最高，但一次性费用仍扭曲表观增速" },
    { rank: 7, segment: "工业", vtype: "周期成长", scarcity: 7, pool: 6, expand: 7, pricing: 6, status: "✅", marginal: "🟢→🟡", leaders: "XLI · GE/ETN/CAT", fpe: "FactSet NTM 24.1（8/28）；SPDR XLI FY1 25.62（8/27，仍为最贵）", anchor2: "FactSet NTM较标普溢价23.0%、仍为最贵板块；CY26增长11.9%较6/30的9.2%上修，CY27 15.8%与6/30持平；电气化子板块基本面与估值拉扯延续", priced: "🔴", verdict: "好生意贵价格：回调至FPE 22以下再看（条款#6，仍差约11%）", tier: "watch", sizeBand: "0 → 触发后3-5%",
      evidence: "与个股表GEV同病：紧缺真实但估值贵；FactSet主锚24.1未到22，条款#6未触发；较8/7的25.2回落1.1x，但仍高于5年均值20.9" },
    { rank: 8, segment: "必需消费", vtype: "防御", scarcity: 3, pool: 5, expand: 4, pricing: 5, status: "⚠️", marginal: "🟡", leaders: "XLP · COST/PG", fpe: "FactSet NTM 21.5（8/28）；SPDR XLP FY1 20.10（8/27）", anchor2: "CY26增长7.5%较6/30的6.5%上修，但NTM 21.5较标普19.6溢价9.7%；防御属性没有换来估值折价，通胀与成本端仍是约束", priced: "🟡", verdict: "暂不跟", tier: "out", sizeBand: "0",
      evidence: "FactSet的Buy评级占比44%仍为全场最低；紧缺度3触及警戒线，本轮估值小降不改变结构判断" },
    { rank: 9, segment: "材料", vtype: "周期", scarcity: 5, pool: 4, expand: 5, pricing: 4, status: "⚠️", marginal: "🔴", leaders: "XLB · LIN/FCX", fpe: "FactSet NTM 18.3（8/28）；SPDR XLB FY1 18.32（8/27，周期品禁用FPE排序）", anchor2: "CY26增长37.1%低于6/30的38.9%，CY27增长11.6%低于6/30的11.8%，两个期间方向均略下修；周期板块不用低FPE作买入理由", priced: "🟡", verdict: "暂不跟：要铜敞口直接买铜矿个股", tier: "out", sizeBand: "0",
      evidence: "上修主力仍是化工困境反转而非铜；XLB表达不了纯铜逻辑，且CY26/CY27同时下修继续支持低质量弹性判断" },
    { rank: 10, segment: "可选消费", vtype: "周期", scarcity: 3, pool: 6, expand: 3, pricing: 4, status: "❌", marginal: "🟡", leaders: "XLY · AMZN/TSLA", fpe: "FactSet NTM 23.6（8/28）；SPDR XLY FY1 23.16（8/27，11板块次贵）", anchor2: "Q2表观EPS增长92.4%主要由Amazon一次性投资收益驱动，剔除Amazon后仅8.6%；CY26增长34.7%较6/30的14.0%上修，但CY27由+13.9%下修至-1.7%", priced: "🔴", verdict: "扩产难度3出局；AMZN敞口走云平台行", tier: "out", sizeBand: "0",
      evidence: "低门槛+促销竞价+高估值三重不利；CY26表观上修与CY27大幅下修并存，按一次性损益纪律不把92.4%当作板块真实增长" },
    { rank: 11, segment: "房地产", vtype: "利率敏感", scarcity: 3, pool: 4, expand: 5, pricing: 3, status: "❌", marginal: "🟡", leaders: "XLRE · PLD/EQIX", fpe: "FactSet NTM 18.4（8/28）；SPDR XLRE FY1 36.19（8/27，REIT/FFO口径差异）", anchor2: "数据中心REIT（EQIX/DLR）是唯一紧缺子行业，但板块权重<20%；CY26增长10.0%较6/30的9.2%上修，CY27 6.5%较6.8%下修；10年期美债8/28为4.73%", priced: "🟡", verdict: "定价权3出局；要数据中心敞口买个股非板块", tier: "out", sizeBand: "0",
      evidence: "Q2净利率34.1% vs 去年34.9%、5年均值35.6%，仍低于两个锚；10年期较8/14的4.68%仅上行5bp，条款#8的50bp快速上行未触发" }
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
  dataNote: "2026-08-29周更：主锚刷新为FactSet 8/28 Forward 12M P/E：标普19.6；信息技术21.8、公用17.0、通信17.7、金融15.4、能源13.6、医疗19.0、工业24.1、必需消费21.5、材料18.3、可选23.6、房地产18.4。SPDR官方FY1（8/27）：XLK26.47/XLU17.95/XLC12.69/XLF16.15/XLE12.45/XLV20.44/XLI25.62/XLP20.10/XLB18.32/XLY23.16/XLRE36.19；两套口径不可横比。FactSet 8/28：Q2 blended EPS增长52.0%，97%公司已披露、86% EPS超预期；CY26/CY27增长31.2%/14.4%；CY26相6/30上修8板块、下修3板块。板块条款：#1科技NTM溢价11.2%未触发；#2公用有监管反对但未见驳回潮；#3医疗剔除Gilead/Merck后+18.1%、未触发；#4金融CY26上修但CY27下修且停刊周不计连续性，未触发；#5能源CY27 -12.2%较-7.0%下修并较8/7的-11.4%恶化，完成二次确认，机械建议清零；#6工业24.1未到22；#7无hyperscaler下调capex；#8美国财政部10年期8/28为4.73%，较8/14的4.68%仅上行5bp。新增板块观测1条；质量分、tier、verdict、sizeBand不变。",
  disclaimer: "⚠️ 本表为板块层参考视图，非买卖建议；个股决策以个股选股表+模块B为准；非持牌投顾意见。"
};
