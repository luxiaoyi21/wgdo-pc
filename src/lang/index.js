import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from '@/lang/zh.json'
import en from '@/lang/en.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
    locale: 'en',
    messages: {
        en,
        zh
    }
})