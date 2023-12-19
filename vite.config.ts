import path from "path"
import {defineConfig} from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
// import VueDevTools from 'vite-plugin-vue-devtools'


// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@/': `${path.resolve(__dirname, 'src')}/`,
        }

    },

    plugins: [
        vue(), vueJsx(),
        AutoImport({
            imports: [
                'vue',
                'vue-i18n',
                '@vueuse/head',
                '@vueuse/core',
            ],
            dts: 'src/auto-imports.d.ts',
            dirs: [
                'src/composables',
                'src/stores',
            ],
            vueTemplate: true,
        }),
        VueI18n({
            runtimeOnly: true,
            compositionOnly: true,
            fullInstall: true,
            include: [path.resolve(__dirname, 'locales/**')],
        }),
    ]
})
