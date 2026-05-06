import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from '@layui/unplugin-vue-components/vite'
import {LayuiVueResolver} from '@layui/unplugin-vue-components/resolvers'

export default defineConfig({
    base: '/blog/',  // GitHub Pages 仓库名称
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