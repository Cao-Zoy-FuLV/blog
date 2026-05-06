# Blog

## GitHub Pages 部署说明

### 问题修复
修复了 `Uncaught TypeError: Failed to resolve module specifier "vue"` 错误。

### 原因
当 `index.html` 作为静态文件直接打开或通过静态服务器服务时（如 GitHub Pages），浏览器无法解析裸模块导入（bare module specifiers）如 `import { createApp } from 'vue'`。开发模式下通过 Vite dev server 可正常解析模块，但静态文件服务无法做到这一点。

### 解决方案
1. **开发模式**：`vite.config.js` 中添加了 HTML 转换插件，在开发服务器运行时自动向 `index.html` 注入 Import Map，将 `vue` 和 `vue-router` 映射到 CDN URL。这样即使静态打开 HTML 文件也能正常加载模块。
2. **生产构建**：构建时 Import Map 不会被注入，因为所有依赖都已打包到输出文件中，无需外部 CDN。
3. **SPA 路由支持**：构建完成后自动生成 `dist/404.html`，内容与 `dist/index.html` 相同，用作 GitHub Pages 的自定义 404 页面，确保刷新子路由时 SPA 正常工作。

### 构建与部署
```bash
# 开发（自动注入 Import Map）
npm run dev

# 构建（打包所有依赖，不依赖 CDN）
npm run build
```

部署到 GitHub Pages 时确保：
- 工作流部署的是 `dist/` 目录内容
- 已包含 `.nojekyll` 文件防止 Jekyll 处理

### 文件变更
- `vite.config.js`：添加 `html-transform` 插件（开发模式注入 Import Map）和 `copy-404` 插件（构建后生成 404.html）
- `public/404.html`：静态 404 页面（带 Import Map，支持直接打开）
- `index.html`：保持简洁，开发时由插件动态增强