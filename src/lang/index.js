import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/lang/en.json'
import zh from '@/lang/zh.json'

Vue.use(VueI18n)

const langData = JSON.parse(sessionStorage.getItem('langData'))
const defaultLocale = langData && langData.lang && langData.lang.isEn ? langData.lang.isEn : 'zh'

export const i18n = new VueI18n({
    locale: defaultLocale,
    messages: {
        en,
        zh
    }
})