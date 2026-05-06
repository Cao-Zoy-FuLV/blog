import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from '@layui/unplugin-vue-components/vite'
import {LayuiVueResolver} from '@layui/unplugin-vue-components/resolvers'
import fs from 'fs'
import path from 'path'

export default defineConfig({
    base: './',  // 使用相对路径，适应 GitHub Pages 子路径
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: 'src/auto-import.d.ts',
        }),
        Components({
            resolvers: [
                LayuiVueResolver({
                    // 将样式与组件一起导入 (默认: 'css')
                    importStyle: 'css',
                    
                    // 是否解析图标 (默认: false)
                    resolveIcons: true,
                    
                    // 排除不需要自动导入的组件
                    // exclude: ['LayDocTable', /^LayDoc[A-Z]/],
                    
                    // 自定义组件样式匹配路径
                    // customMatchComponents: [{ pattern: /^LayDescriptionsItem$/, styleDir: undefined }]
                })
            ],
        }),
        {
            name: 'html-transform',
            transformIndexHtml(html) {
                // 在开发模式下，向 HTML 中注入 import map
                // 生产构建时保留原始 HTML（无 import map），因为依赖已打包
                if (process.env.NODE_ENV === 'development') {
                    const importMap = `
    <script type="importmap">
    {
        "imports": {
            "vue": "https://unpkg.com/vue@3.5.32/dist/vue.esm-browser.js",
            "vue-router": "https://unpkg.com/vue-router@4.6.4/dist/vue-router.esm-browser.js"
        }
    }
    </script>`
                    // 插入到 </head> 之前
                    return html.replace('</head>', importMap + '\n</head>')
                }
                return html
            },
        },
        {
            name: 'copy-404',
            closeBundle() {
                const distDir = path.resolve(__dirname, 'dist')
                const indexPath = path.join(distDir, 'index.html')
                const page404Path = path.join(distDir, '404.html')
                // 构建完成后，将 index.html 复制为 404.html，用于 GitHub Pages 的 SPA 回退
                if (fs.existsSync(indexPath)) {
                    fs.copyFileSync(indexPath, page404Path)
                    console.log('Copied index.html to 404.html in dist/')
                }
            }
        },
    ],
    server: {
        host: '0.0.0.0',  // 允许局域网访问
        port: 5173,        // 端口号
        open: false,       // 启动时不自动打开浏览器
        cors: true,        // 启用 CORS
    },
    build: {
        // 调整 chunk 大小警告限制为 1m
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                // 代码分割策略
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('@layui/layui-vue')) {
                            return 'layui-vue'
                        }
                        if (id.includes('vue')) {
                            return 'vue-vendor'
                        }
                    }
                }
            }
        }
    }
})
