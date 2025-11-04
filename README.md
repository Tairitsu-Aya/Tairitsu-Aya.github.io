# 帕秋莉的小图书馆（GitHub Pages / Jekyll）

> 极简、淡紫+白+黄配色、轻动效，中文宋体 + Times New Roman。  
> 功能：Markdown、代码高亮、KaTeX 数学、JS 目录、Giscus 评论、RSS、Sitemap、Plausible。

## 一键部署
1. 新建仓库 **Tairitsu-Aya.github.io**，上传本项目所有文件并推送到 `main` 分支。
2. 在仓库 Settings → Pages，选择 **Deploy from a branch**，分支 `main`，路径 `/ (root)`（默认）。
3. 稍等几分钟，访问 `https://Tairitsu-Aya.github.io` 即可。

## 写文章
在 `_posts/` 下新增：`YYYY-MM-DD-你的标题.md`，用 Markdown 撰写。
- 目录：默认开启（如需关闭，在文章 Front Matter 里加 `toc: false`）。
- 评论：默认开启（如需关闭，`comments: false`）。

## 订阅（RSS）
- 已启用 `jekyll-feed` 生成 `feed.xml`，读者可使用 RSS 客户端订阅你的博客更新。
- UI 中的订阅入口由 `_config.yml` 中 `theme_vars.enable_subscribe` 控制（true/false）。
- **作用**：让读者在 RSS 阅读器中自动接收你发布的新文章，无需手动访问网站。

## Giscus 评论
在 <https://giscus.app> 获取以下参数，并填入 `_config.yml` 的 `giscus` 节点：
- `repo`（形如 `Tairitsu-Aya/Tairitsu-Aya.github.io`）
- `repo_id`
- `category` 与 `category_id`
其它保留默认即可。`theme_vars.enable_giscus` 控制全站开关。

## Plausible 统计
如果你已在 Plausible 上添加站点（域名 `tairitsu-aya.github.io`），无需额外操作。
- 若需关闭，在 `_config.yml` 把 `theme_vars.enable_plausible` 设为 `false`。
- 或修改 `theme_vars.plausible_domain` 为你的自定义域名。

## 自定义外观
在 `_config.yml` 的 `theme_vars` 下可调整：主色、点缀色、最大宽度等；
在 `assets/css/main.css` 中可按需补充样式。

## 导航
导航文本在 `_config.yml` 的 `navigation` 中配置；
页面文件位于 `pages/`，可自行增删。

## 常见问题
- **数学公式不渲染？** 确认页面加载后由 KaTeX 自动渲染（已默认启用）。
- **中文宋体/Times 不一致？** 不同系统字体名称略有差异，本项目提供了兼容的字体回退。
- **GitHub Pages 插件支持？** 已使用官方白名单插件：`jekyll-feed`、`jekyll-sitemap`、`jekyll-seo-tag`。

MIT © Tairitsu-Aya


## 占位媒体（可随时替换）
- 站点 Logo：`assets/img/logo.svg`（在 `_config.yml` 的 `logo` 已引用）
- 默认封面：`assets/img/cover-default.svg`（文章布局将优先使用 `page.header_image`，否则回退到 `site.header_image`）
- OG 预览图：`assets/img/og-default.svg`（在 `_config.yml` 的 `image` 已引用，用于社交分享卡片）
- 头像占位：`assets/img/avatar.svg`
- Favicon：`assets/img/favicon.png`（占位，可替换为你的图标）
