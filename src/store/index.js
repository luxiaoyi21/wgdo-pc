import Vuex from 'vuex'
import Vue from 'vue'
import router from '@/router/index.js'
import { i18n } from '@/lang/index.js'
import { getPrimaryImg, toLogin } from '@/api/requests.js'
import createPersistedState from 'vuex-persistedstate';
// import { getTitle } from '@/utils/index.js'

Vue.use(Vuex)

const state = {
    userInfo: {
        account: 'admin',
        password: 'admin123',
        verify: '',
        primaryImg: '',
        code: -1000,
        type: false,
        token: ''
    },
    lang: {
        isEn: 'zh',
        version: '1',
        isText1Visible: false,
        langs: '中文',
        titles: []
    }
}

const mutations = {
    getLocalLang({ lang }) {
        lang.isText1Visible = !lang.isText1Visible
        lang.isText1Visible === false ? lang.langs = '中文' : lang.langs = 'En'
        lang.isText1Visible === true ? lang.isEn = 'zh' : lang.isEn = 'en'
        i18n.locale = lang.isEn
    },
    getVersion({ lang }) {
        if (lang.isEn === 'zh') {
            lang.version = '1'
        } else if (lang.isEn === 'en') {
            lang.version = '2'
            // document.body.style.fontFamily = 'Microsoft YaHei';
        }
    },
    getST({ lang }, datas) {
        lang.titles = datas
    },
    getSubmit({ submit }) {
        if (submit.Message === 'message') {
            submit.type = '1'
        } else if (submit.Mark === 'mark') {
            submit.type = '2'
        }
    },
}

const actions = {
    getImgs({ state }) {
        return new Promise((resolve, reject) => {
            getPrimaryImg('/captchaImage').then(res => {
                state.userInfo.verify = ''
                let binaryData = res.data.img
                state.userInfo.primaryImg = 'data:image/jpeg;base64,' + binaryData;
                state.userInfo.code = res.data.uuid
                resolve();
            }).catch(error => {
                reject(error);
            });
        });
    },
    onSubmit({ state }) {
        const loginData = {
            password: state.userInfo.password,
            username: state.userInfo.account,
            code: state.userInfo.verify,
            uuid: state.userInfo.code,
        }
        toLogin('/login', 'POST', loginData).then(res => {
            if (res.data.code === 500) {
                alert(res.data.msg)
                state.userInfo.password = ''
                state.userInfo.verify = ''
                this.getImgs()
                return
            }
            if (res.data.code === 200) {
                state.userInfo.token = res.data.token
                sessionStorage.setItem('stoken', JSON.stringify(res.data.token))
                if (state.userInfo.type) {
                    localStorage.setItem('token', JSON.stringify(state.userInfo.token))
                } else {
                    localStorage.clear('token')
                }
                setTimeout(() => {
                    router.push('/')
                }, 1000);
            } else {
                alert('登录失败，请检查用户名、密码和验证码是否正确')
                state.userInfo.password = ''
                state.userInfo.verify = ''
            }
        })
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    plugins: [
        createPersistedState({
            key: 'langData',
            storage: window.sessionStorage,
            reducer(val) {
                return {
                    lang: val.lang,
                    isEn: val.isEn
                }
            }
        })
    ]
})