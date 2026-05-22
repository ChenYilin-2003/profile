# Cinematic Profile Portfolio

一个开箱即用的电影感单页个人作品集，使用原生 HTML、CSS 和 JavaScript 构建，无需安装依赖。

## 本地预览

直接打开 `index.html`，或使用任意静态服务器：

```bash
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`。

## 替换个人照片与媒体

- 首页全屏背景图：修改 `styles.css` 中的 `--hero-image`。
- 作品集图片/视频：修改 `script.js` 顶部 `media` 对象以及 `copy.zh.portfolio.items` / `copy.en.portfolio.items`。
- 中英文文案：统一维护在 `script.js` 的 `copy` 字典中。
- AI 分身接口：`script.js` 的 `getAiResponse()` 已预留 Fetch API 接入位置。

## 全面探索模块

`script.js` 的 `copy.zh.about.facets` / `copy.en.about.facets` 维护“科研实验、市场运营、商业沟通、多维兴趣”四个入口。每个入口都支持独立详情界面、图片、简介和要点列表。

## 作品集模块

当前作品集固定为四类：学术海报、短视频制作、产品研发、健身旅游。对应中英文内容在 `script.js` 的 `copy.zh.portfolio.items` / `copy.en.portfolio.items` 中维护。
