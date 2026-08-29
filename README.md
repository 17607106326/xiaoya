# 🌱 小芽 · 桌面生活伴侣（XiaoYa / MyWorkbench）

> 把日子过成自己喜欢的样子 —— 一款**本地优先**的桌面生活工作台。

> 「小芽」取自破土而出的嫩芽：外表娇嫩、干净纯粹，内心坚韧、向阳而生。它代表**轻量化、新生、持续演进**——刚刚起步，像小芽一样慢慢迭代生长，未来可以长成大树。

待办、日历、记账、日记、习惯、心情、相册、便签一站式安放，11 套主题随心换肤，还有一颗完成任务就会进化的桌面小芽——而所有数据，都完完整整留在你自己手里。

**🌐 官网（在线文档 + 下载）：<https://17607106326.github.io/xiaoya/>**

---

## ⬇️ 下载

| 平台 | 安装包 | 说明 |
| --- | --- | --- |
| Windows 10/11 x64 | [MyWorkbench_0.1.0_x64-setup.exe](https://github.com/17607106326/xiaoya/releases/latest/download/MyWorkbench_0.1.0_x64-setup.exe) | 推荐 · 双击安装 |
| Windows 10/11 x64 | [MyWorkbench_0.1.0_x64_en-US.msi](https://github.com/17607106326/xiaoya/releases/latest/download/MyWorkbench_0.1.0_x64_en-US.msi) | 适合部署 / 静默安装 |

更多版本与更新日志见 [Releases](https://github.com/17607106326/xiaoya/releases)。

## ✨ 特性

- 🔒 **完全本地**：不注册、不登录、不依赖官方服务器，数据存进本地 SQLite
- 🧩 **16 个功能模块**：今日 / 旅行 / 待办 / 日历 / 定时 / 规划 / 课程表 / 日记 / 记账 / 读书 / 知识库 / 便签 / 心情 / 习惯 / 相册 / 心愿，按需勾选、拖拽排序
- 🎨 **11 套主题 + 自定义主题**：昼夜、四季、节日、水墨、液态玻璃……支持跟随系统与昼夜/天气/季节联动
- 🌗 **生活 / 工作双模式**：各自记忆模块集合与主题，一键切换互不打扰
- 📝 **便签双形态**：应用内悬浮 + 独立桌面小窗，五色跟随主题气质换肤，双向实时同步
- 🌱 **会长大的桌宠**：完成待办、打卡习惯攒经验进化，还会定时冒泡陪你
- 🎯 **专注胶囊**：15 / 25 / 45 分钟番茄钟，支持暂停与继续

## 📖 使用说明

完整文档（安装、界面、模式、模块、主题、便签、快捷键、备份、FAQ）已集成在官网：

👉 <https://17607106326.github.io/xiaoya/#docs>

## 🗂️ 仓库结构

```
├── docs/       官网构建产物（GitHub Pages 服务目录）
└── website/    官网源码（Vite，pnpm dev 本地预览）
```

> 桌面应用完整源码位于作者的开发工程（Tauri + Vue 3 + TypeScript），本仓库提供官网、文档与发布安装包。

## 🛠️ 官网本地运行

```bash
cd website
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # 产物输出到 dist/
```

## 📄 License

[MIT](./LICENSE)
