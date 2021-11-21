---
id: line
title: 线段
description: Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.
slug: /components/line
---

# 线段

## 参数

| 字段名 | 数据类型       | 默认值   | 必需 | 字段描述    |
| :------: | :--------------: | :--------: | :----------: | ----------- |
| startX | int            |          | yes         | 起点 X 坐标 |
| startY | int            |          | yes         | 起点 Y 坐标 |
| endX   | int            |          | yes         | 终点 X 坐标 |
| endY   | int            |          | yes         | 终点 Y 坐标 |
| width  | int            |          | yes         | 线段宽度    |
| color  | Hex Color Code | #000000 |          | 线段颜色    |
| zIndex | int            | 0        |          | 渲染层级    |

## 示例
```json
{
    "startX": 30,
    "startY": 696,
    "endX": 610,
    "endY": 696,
    "width": 1,
    "color": "#E1E1E1",
    "zIndex": 1
}
```
