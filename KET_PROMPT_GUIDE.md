# KET Kids Test Page Prompt Guide

## Core Premise
Use this prompt only for children aged 6-12 in KET-aligned tests (YLE Starters to KET for Schools bridge).
Language must be simple, clear, friendly, and low-anxiety.

## Prompt Template (Bilingual)

### 1. Scene and Audience
Requirement:
- State target users and page type at the beginning.
- Confirm page goal: help children finish listening, reading, and writing tasks independently.

Example:
- "This page is for children aged 6-12 taking a KET-style English test. The page supports listening, reading, and short writing tasks."
- "本页面面向6-12岁KET少儿英语测试，支持听力、阅读和短写作。"

### 2. Visual and Interaction Rules
Requirement:
- Soft colors, readable fonts, no clutter.
- Main actions only: `Start`, `Next`, `Submit`.
- Buttons and options min clickable size: 48x48.
- Rounded corners >= 8px.

Example:
- "Use light blue and warm white. Keep contrast >= 4.5:1."
- "按钮清晰可点，避免无关动画和装饰。"

### 3. Language Rules
Requirement:
- English question content + short Chinese guidance.
- Use short direct sentences.
- No complex passive or long compound instruction.

Example:
- "Listen carefully and choose the right picture.（仔细听，选择正确图片。）"

### 4. Listening Page Prompt
Requirement:
- Audio plays exactly twice.
- Show play status and pass count.
- Keep option layout clean and consistent.

Example:
- "Each audio will play twice. Click the picture you hear."
- "每段音频播放两次，请点击你听到的图片。"

### 5. Reading Page Prompt
Requirement:
- KET-level vocabulary only.
- Clear operations: match, choose A/B/C.
- Optional zoom text button without answer hints.

Example:
- "Choose the best answer A, B, or C.（选择最佳答案A、B或C。）"

### 6. Writing Page Prompt
Requirement:
- Clear sentence count requirement (3-5 sentences).
- Show topic keywords, not full model answer.
- Positive tone only.

Example:
- "Write 3 to 5 sentences about your pet. Keywords: name, color, food."
- "写3到5句话，关键词：名字、颜色、食物。"

### 7. Progress and Safety
Requirement:
- Always show progress (`1/10`, `20% done`).
- Support answer correction before final submit.
- No external links, ads, or unrelated games in test flow.

Example:
- "Question 2/10. You can change your answer before submitting."

### 8. Report Output Prompt
Requirement:
- Report type: feasibility report.
- Include level prediction + vocabulary estimate.
- Include development trend in ZPD and scaffold plans for parent, teacher, student.

Example:
- "Output a feasibility report with level forecast, estimated vocabulary size, next-step growth zone, and role-based scaffolder."
- "输出可行性报告：等级预测、词汇量估计、最近发展区趋势、家长/教师/学生分端支架方案。"

## Forbidden Prompt Patterns
- No adult-style strict warning language.
- No flashy visuals that distract from testing.
- No off-syllabus vocabulary or task types.
- No negative or punitive feedback messages.
- No vague instruction like "make it nice"; use measurable values.

## Ready-to-Use Master Prompt

```text
Design a KET kids English test page for children aged 6-12.
The page must support listening, reading, and short writing tasks aligned with YLE Starters to KET bridge level.
Use simple English instructions with short Chinese guidance.
Visual style: soft light colors, clear sans-serif font, minimum 14px text size, rounded buttons (>=8px), click area >=48x48, contrast >=4.5:1.
No unrelated animation, ads, or external links.
Listening page: each audio plays twice, show play status and count, clear picture options.
Reading page: KET-core vocabulary only, clear A/B/C or matching interaction, optional text zoom.
Writing page: task with 3-5 sentence requirement, keyword hints only, positive encouragement tone.
Every page must show progress (e.g., 3/10).
Allow child to change answer before final submit.
Generate final feasibility report including:
1) level and vocabulary estimate,
2) next development trend in ZPD,
3) auto scaffolder for parent portal, teacher portal, and student portal.
```
