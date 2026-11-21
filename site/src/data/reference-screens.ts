/**
 * 参考首屏：给 AI 的密度与件位基准。
 *
 * 只示范结构、件位、数据密度，配色与圆角等数值一律从主源原文取，所以这里的
 * CSS 只写布局，不写视觉。AI 抄的是「首屏该有什么、数据要多密」，不是配色。
 */
export type ReferenceScreen = {
  id: string
  /** 适用产品形态 */
  role: string
  /** 这份参考示范什么，抄的时候抄哪些 */
  take: string
  code: string
}

export const REFERENCE_SCREENS: ReferenceScreen[] = [
  {
    id: 'A',
    role: '数据工作台 / 队列 / 后台',
    take: '三栏件位、12 行数据密度、状态靠文字加色点、强调色只出现一次（主操作）',
    code: `<div class="shell">
  <nav class="rail" aria-label="主导航">
    <span class="mark">QF</span>
    <a href="#" aria-current="page">队列</a><a href="#">规则</a><a href="#">日志</a>
  </nav>
  <main>
    <div class="head">
      <div><h1>待处理</h1><p>今日新增 <b>18</b> 条 · 最长等待 <b>4h12m</b></p></div>
      <input type="search" placeholder="单号 / 店铺 / SKU" aria-label="搜索工单">
      <button class="primary">批量指派</button>
    </div>
    <div class="tabs">
      <button aria-pressed="true">全部 148</button><button>超时 12</button><button>待复核 31</button><button>今日已结 96</button>
      <span class="r">按等待时长排序</span>
    </div>
    <table>
      <thead><tr><th>单号</th><th>问题</th><th>店铺</th><th class="num">金额</th><th class="num">等待</th><th>状态</th></tr></thead>
      <tbody>
        <tr><td class="mono">QF-88213</td><td>尺码不符，申请换货</td><td>拾野户外</td><td class="num">¥238</td><td class="num over">4h12m</td><td><i class="dot hot"></i>超时</td></tr>
        <tr><td class="mono">QF-88207</td><td>少发一件，缺袜子</td><td>南岸书店</td><td class="num">¥89</td><td class="num over">3h48m</td><td><i class="dot hot"></i>超时</td></tr>
        <tr><td class="mono">QF-88196</td><td>退货已签收，未退款</td><td>拾野户外</td><td class="num">¥512</td><td class="num">2h31m</td><td><i class="dot warm"></i>待复核</td></tr>
        <tr><td class="mono">QF-88190</td><td>换色请求，未发货</td><td>木野家居</td><td class="num">¥1,280</td><td class="num">1h56m</td><td><i class="dot warm"></i>待复核</td></tr>
        <tr><td class="mono">QF-88184</td><td>发票抬头写错</td><td>南岸书店</td><td class="num">¥76</td><td class="num">54m</td><td><i class="dot"></i>待指派</td></tr>
        <tr><td class="mono">QF-88179</td><td>物流三天无更新</td><td>拾野户外</td><td class="num">¥349</td><td class="num">41m</td><td><i class="dot"></i>待指派</td></tr>
        <tr><td class="mono">QF-88172</td><td>优惠券未抵扣</td><td>木野家居</td><td class="num">¥208</td><td class="num">28m</td><td><i class="dot"></i>待指派</td></tr>
        <tr><td class="mono">QF-88168</td><td>包装破损，要补发</td><td>南岸书店</td><td class="num">¥156</td><td class="num">19m</td><td><i class="dot"></i>待指派</td></tr>
        <tr><td class="mono">QF-88161</td><td>地址改派失败</td><td>木野家居</td><td class="num">¥462</td><td class="num">12m</td><td><i class="dot"></i>待指派</td></tr>
        <tr><td class="mono">QF-88155</td><td>重复下单需合并</td><td>拾野户外</td><td class="num">¥1,024</td><td class="num">8m</td><td><i class="dot"></i>待指派</td></tr>
        <tr><td class="mono">QF-88149</td><td>尺码表与实物不符</td><td>南岸书店</td><td class="num">¥198</td><td class="num">5m</td><td><i class="dot"></i>待指派</td></tr>
        <tr><td class="mono">QF-88143</td><td>要求开专票</td><td>木野家居</td><td class="num">¥2,340</td><td class="num">2m</td><td><i class="dot"></i>待指派</td></tr>
      </tbody>
    </table>
  </main>
  <aside>
    <div>
      <h2>问题分布</h2>
      <ul class="bars">
        <li><span>退货</span><i style="--w:62%"></i><em>62</em></li>
        <li><span>换货</span><i style="--w:34%"></i><em>34</em></li>
        <li><span>少发</span><i style="--w:21%"></i><em>21</em></li>
        <li><span>发票</span><i style="--w:16%"></i><em>16</em></li>
      </ul>
    </div>
    <div>
      <h2>最近动作</h2>
      <ol class="log">
        <li><time>14:02</time>陈默 指派 4 条给 2 组</li>
        <li><time>13:47</time>系统 自动合并 3 条重复工单</li>
        <li><time>13:20</time>周叙 结案 11 条，退回 1 条</li>
      </ol>
    </div>
  </aside>
</div>
<style>
/* 只示范布局，视觉数值从主源取 */
.shell{display:grid;grid-template-columns:64px minmax(0,1fr) 296px;min-height:100vh}
.rail{display:flex;flex-direction:column;align-items:center;gap:20px;padding:16px 0;font-size:12px}
.rail .mark{font-weight:700;letter-spacing:.1em}
main{min-width:0;display:flex;flex-direction:column}
.head{display:flex;align-items:flex-end;gap:16px;padding:22px 24px 14px}
.head p{margin-top:3px}
.head input{margin-left:auto;flex:0 1 260px}
.head button{padding:8px 14px}
.tabs{display:flex;align-items:center;gap:4px;padding:10px 24px}
.tabs button{padding:5px 10px}
.tabs .r{margin-left:auto;font-size:12px}
table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
th{text-align:left;padding:8px 24px;font-size:12px;font-weight:500}
td{padding:10px 24px}
.num{text-align:right}
.mono{font-family:ui-monospace,SFMono-Regular,monospace;font-size:12px}
.over{font-weight:600}
.dot{display:inline-block;width:6px;height:6px;border-radius:50%;margin-right:6px}
aside{padding:22px 20px;display:flex;flex-direction:column;gap:22px}
aside h2{font-size:11px;font-weight:600;letter-spacing:.06em}
.bars{list-style:none;margin-top:10px;display:grid;gap:8px;font-size:12px}
.bars li{display:grid;grid-template-columns:44px 1fr 28px;align-items:center;gap:8px}
.bars i{height:6px;position:relative}
.bars i::after{content:"";position:absolute;inset:0;width:var(--w)}
.bars em{font-style:normal;text-align:right}
.log{list-style:none;margin-top:10px;display:grid;gap:9px;font-size:12px}
.log time{margin-right:6px;font-variant-numeric:tabular-nums}
</style>`,
  },
  {
    id: 'B',
    role: '办事页 / 单据 / 单条内容',
    take: '无 hero，左侧一条主流程加材料清单，右侧一张回执当产品物件，首屏只有一件事要办',
    code: `<div class="doc">
  <header class="top">
    <span class="org">市政服务 · 新生儿一件事</span>
    <span class="badge">演示页 · 不与政务系统对接</span>
  </header>
  <div class="body">
    <section class="main">
      <p class="kicker">出生一件事 / 城乡居民基本医疗保险</p>
      <h1>新生儿医保参保登记</h1>
      <ul class="facts">
        <li><b>90 天</b><span>出生日起算，不是出院日</span></li>
        <li><b>3 个工作日</b><span>窗口受理后办结</span></li>
        <li><b>0 元</b><span>登记不收费，照相复印另计</span></li>
      </ul>
      <h2>材料清单<small>已备 0 / 4</small></h2>
      <ol class="mats">
        <li><label><input type="checkbox">出生医学证明</label><em>原件，编号清晰</em></li>
        <li><label><input type="checkbox">户口簿</label><em>首页与本人页</em></li>
        <li><label><input type="checkbox">监护人身份证</label><em>正反面</em></li>
        <li><label><input type="checkbox">代办人身份证</label><em>非监护人办理时</em></li>
      </ol>
      <div class="cta"><button class="primary">开始填表</button><a href="#">查办理进度</a></div>
    </section>
    <aside class="ticket">
      <h2>办理回执</h2>
      <dl><dt>受理编号</dt><dd class="mono">NB-1118-0473</dd></dl>
      <dl><dt>参保地</dt><dd>任城区 · 城乡居民</dd></dl>
      <dl><dt>缴费标准</dt><dd class="num">¥380 / 年</dd></dl>
      <hr>
      <dl><dt>窗口</dt><dd>区政务中心 2 层 B12</dd></dl>
      <p class="note">工作日 9:00 到 17:00，中午不休</p>
    </aside>
  </div>
</div>
<style>
/* 只示范布局，视觉数值从主源取 */
.doc{max-width:1120px;padding:20px 40px 60px}
.top{display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;font-size:12px}
.badge{padding:3px 8px}
.body{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:56px;padding-top:36px}
.kicker{font-size:12px;letter-spacing:.04em}
h1{font-size:34px;line-height:1.2;letter-spacing:-.02em;margin:8px 0 22px}
.facts{list-style:none;display:flex;gap:36px;padding:14px 0;margin-bottom:26px}
.facts li{display:flex;flex-direction:column;gap:2px}
.facts b{font-size:20px;font-variant-numeric:tabular-nums}
.facts span{font-size:12px}
.main h2{font-size:14px;font-weight:600;display:flex;align-items:baseline;gap:10px}
.main h2 small{font-size:12px;font-weight:400}
.mats{list-style:none;margin:10px 0 24px}
.mats li{display:flex;justify-content:space-between;gap:16px;padding:11px 0}
.mats em{font-style:normal;font-size:12px}
.cta{display:flex;align-items:center;gap:18px}
.cta button{padding:11px 22px;font-weight:600}
.ticket{padding:22px;align-self:start}
.ticket h2{font-size:11px;letter-spacing:.06em;font-weight:600}
.ticket dl{display:flex;justify-content:space-between;gap:12px;margin-top:12px;font-size:13px}
.ticket dt{font-size:12px}
.ticket dd{margin:0;text-align:right}
.ticket hr{margin:18px 0;border:0;height:1px}
.note{margin-top:14px;font-size:12px;line-height:1.5}
</style>`,
  },
]
