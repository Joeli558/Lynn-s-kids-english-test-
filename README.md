# Lynn's Kids Garden - KET English Adventure

一个可直接部署到 GitHub Pages 的儿童英语闯关小游戏，适合 KET（A2）阶段学生。

## 功能

- 剧情化引导：每道题都有花园探险故事线索，帮助孩子完成任务。
- 难度递进：`Easy -> Medium -> Hard`，用于评估学生英语能力。
- 游戏化机制：生命值、连击、星星积分、每题限时模式（可开关）。
- 多设备适配：手机、平板、电脑都可使用。
- 学生报告：保存每位学生的测试记录到浏览器本地存储。
- 徽章墙：根据表现解锁勋章（如 Time Master、KET Champion）。
- 导出能力：支持导出当前学生 JSON 报告、全部学生 CSV 报告。
- 迷你闯关：内置 Mario-style 平台跳跃小游戏（吃金币 + 终点旗通关，支持手机按键与键盘）。

## 文件结构

- `index.html` 页面结构
- `styles.css` 可爱、可读性优先的 UI 样式
- `app.js` 题目逻辑、评分逻辑、报告导出

## 本地运行

在项目目录执行：

```bash
python3 -m http.server 8080
```

打开：`http://localhost:8080`

## 部署到 GitHub Pages

1. 推送代码到 GitHub 仓库（推荐默认分支 `main`）
2. 进入仓库 `Settings -> Pages`
3. 在 `Build and deployment` 中选择：
	- Source: `Deploy from a branch`
	- Branch: `main`
	- Folder: `/ (root)`
4. 保存后等待部署完成
5. 使用 Pages 生成的链接访问网站

## 课堂使用建议

- 每位学生输入自己的名字开始作答。
- 完成后点击导出，老师可收集 CSV 做班级对比。
- 建议同一设备一人一测，避免姓名混淆。