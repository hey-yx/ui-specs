# HookPulse · 缺口与发现

1. **完整度**：`content/brands/designmd--umami.md` 覆盖了 Light/Dark 双色板、反色与焦点 Token、字阶、圆角、阴影、动效曲线与表格/弹窗/开关等组件细节，本次单文件静态实现未出现数值缺口，无需跨源回补。
2. **暗色层次反转实测**：在 `html[data-theme="dark"]` 下，只读签名密钥输入框采用 `#262626`（`--zen-surface-raised`），与下方 `#171717`（`--zen-surface`）可编辑输入框形成明度差，视觉上能直接区分只读与可编辑状态。
3. **无障碍与响应式**：已为 `prefers-reduced-motion: reduce` 禁用位移动画，并在 `< 768px` 将输入框字号抬至 `16px`、CSS Grid 表格降级为双列堆叠，避免移动端横滚与自动缩放。
