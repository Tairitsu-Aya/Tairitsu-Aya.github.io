# 帕秋莉的小图书馆（GitHub Pages / Jekyll）

> 极简、淡紫+白+黄配色、轻动效，系统字体。  
> 功能：Markdown、代码高亮（Rouge）、KaTeX 数学、JS 目录、Giscus 评论、RSS、Sitemap、Plausible。  
> 新增：页面两端留白、导航卡片质感、日/夜间切换、底栏置底、KaTeX 渲染修复。

## 一键部署
1. 新建仓库 **Tairitsu-Aya.github.io**，上传本项目所有文件并推送到 `main` 分支。
2. Settings → Pages → 选择 **Deploy from a branch**（`main` / `/ (root)`）。
3. 访问 `https://Tairitsu-Aya.github.io`。

## 写文章
在 `_posts/` 下新增：`YYYY-MM-DD-你的标题.md`，用 Markdown 撰写。
- 目录：默认开启（如需关闭，在文章 Front Matter 加 `toc: false`）。
- 评论：默认开启（如需关闭，`comments: false`）。
- 封面：文章头部加 `header_image: /assets/img/你的封面.png`，否则使用全站占位封面。

## 订阅（RSS）
- 已启用 `jekyll-feed` 生成 `feed.xml`，读者可使用 RSS 客户端订阅你的博客更新。
- UI 订阅按钮由 `_config.yml` 的 `theme_vars.enable_subscribe` 控制（true/false）。

## 主题切换
- 页眉右侧按钮（🌙/☀️）切换日/夜间模式，状态保存在 `localStorage: pl-theme`。

## Giscus 评论
在 <https://giscus.app> 获取以下参数，并填入 `_config.yml` 的 `giscus` 节点：
- `repo`、`repo_id`、`category`、`category_id`
其余使用默认即可。全站开关：`theme_vars.enable_giscus`。

## Plausible 统计
如需关闭，在 `_config.yml` 将 `theme_vars.enable_plausible` 设为 `false`。

MIT © Tairitsu-Aya
