<template>
    <div class="box">
        <div class="hTop">
            <div class="logo">
                <!-- <img class="logoImg"
                        src="https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3">
                    <div class="logoDsc">
                        <div class="logoDscTop">世界绿色设计组织</div>
                        <div class="logoDscBot">World Green Design Organization</div>
                    </div> -->
                    <img :src="getLogoPath()" :style="getLogoStyle()" alt="Logo">
                </div>
            <div class="right">
                <div class="search">
                    <i class="iconfont icon-sousuo scarchI"></i>
                    <el-input class="searchIn" v-model="searchInp" :placeholder="$t('headernav.search')" />
                </div>
                <div class="rightList">
                    <div class="login"><a href="login">{{ $t('headernav.Login') }}</a></div>
                    <div class="loginO"></div>
                    <div class="sed">{{ $t('headernav.Be our merber') }}</div>
                    <div class="langs" @click="changeLang" style="cursor: pointer">
                        <div class="lang">{{ lang }}</div>
                        <div class="langO" style="display: none;"><i class="iconfont icon-xiangxiajiantou"></i></div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="changeLangue" :class="$store.state.lang.langs === '中文' ? 'zhBottom' : 'enBottom'"
            @click="getCurrentSelect($event)">
            <a href="/about" ref="changeLanguea" :class="$store.state.lang.langs === '中文' ? 'ens' : 'zhs'">
                {{ $t('headernav.Aboutus') }}
            </a>
            <a href="/meet" ref="changeLanguea" :class="$store.state.lang.langs === '中文' ? 'ens' : 'zhs'">
                {{ $t('headernav.Conferenceactivity') }}
            </a>
            <a href="/media" ref="changeLanguea" :class="$store.state.lang.langs === '中文' ? 'ens' : 'zhs'">
                {{ $t('headernav.Mediacenter') }}
            </a>
            <a href="/research" ref="changeLanguea" :class="$store.state.lang.langs === '中文' ? 'ens' : 'zhs'">
                {{ $t('headernav.Academicresearch') }}
            </a>
            <a href="/project" ref="changeLanguea" :class="$store.state.lang.langs === '中文' ? 'ens' : 'zhs'">
                {{ $t('headernav.Publicwelfareproject') }}
            </a>
            <a href="/prize" ref="changeLanguea" :class="$store.state.lang.langs === '中文' ? 'ens' : 'zhs'">
                {{ $t('headernav.InternationalGreenAward') }}
            </a>
            <a href="/wgdo" ref="changeLanguea" :class="$store.state.lang.langs === '中文' ? 'ens' : 'zhs'">
                {{ $t('headernav.WGDOGreenResearchInstitute') }}
            </a>
            <a href="http://lyb.wgdo.net/" ref="changeLanguea"
                :class="$store.state.lang.langs === '中文' ? 'ens' : 'zhs'">
                {{ $t('headernav.Greenleaflabel') }}
            </a>
        </div>
    </div>
</template>

<script>
import { getTitle } from '@/utils/index.js'
import i18n from '@/lang/index.js'

export default {
    name: 'HeaderNav',
    data() {
        let searchInp = ''
        let lang = '中文'
        return {
            searchInp,
            lang
        }
    },
    mounted() {
        this.lang = this.$store.state.lang.langs;
        this.setLanguageStyles();
    },
    methods: {
        changeLang() {
            this.$store.commit('getLocalLang');
            this.$store.commit('getVersion')
        },
        getLogoPath() {
            if (this.$store.state.lang.isEn === 'en') {
                return require('@/static/imgs/logoen.png');
            } else {
                return require('@/static/imgs/alllogo.png');
            }
        },
        getLogoStyle() {
            if (this.$store.state.lang.isEn === 'en') {
                return { transform: 'scale(0.78) translateX(-4vw)' };
            } else {
                return null;
            }
        },
        setLanguageStyles() {
            if (this.$store.state.lang.langs === '中文') {
                this.$refs.changeLangue.classList.remove('enBottom');
                this.$refs.changeLangue.classList.add('zhBottom');
                document.querySelectorAll('.changeLanguea').forEach(a => {
                    a.classList.remove('ens');
                    a.classList.add('zhs');
                });
            } else {
                this.$refs.changeLangue.classList.remove('zhBottom');
                this.$refs.changeLangue.classList.add('enBottom');
                document.querySelectorAll('.changeLanguea').forEach(a => {
                    a.classList.remove('zhs');
                    a.classList.add('ens');
                });
            }
        }
    },
    watch: {
        "$store.state.lang.isText1Visible": {
            handler() {
                this.lang = this.$store.state.lang.langs
                this.setLanguageStyles();
                if (this.$store.state.lang.version === '2') {
                    getTitle('143')
                } else {
                    getTitle('1')
                }
            }
        }
    }
}
</script>

<style scoped>
a:active {
    color: rgba(166, 225, 99, 1);
}

.box {
    width: 100vw;
    height: 143.25px;
    background-color: rgba(0, 0, 0, .5);
    overflow: hidden;
}

.hTop {
    margin: 0 auto;
    width: 80.2vw;
    display: flex;
}

/* logo */
/* .hTop .logo {
        width: auto;
        height: 50px;
        display: flex;
    }

    .hTop .logo img {
        display: block;
        width: 48.77px;
        height: 38.1px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }

    .hTop .logo .logoImg {
        display: block;
        margin: 25.91px 12px 0px 0px;
        width: 48.77px;
        height: 38.1px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .hTop .logo .logoDsc {
        display: flex;
        flex-direction: column;
        margin-top: 29px;
        width: 153px;
        display: inline-block;
        text-align-last: justify;
    }

    .hTop .logo .logoDsc .logoDscTop {
        left: 204.02px;
        top: 28.96px;
        width: 100%;
        height: 20.57px;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 3.84px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 1);
        text-align: justify;
    }

    .hTop .logo .logoDsc .logoDscBot {
        left: 204.02px;
        top: 49.53px;
        width: 150px;
        height: 12.19px;
        font-size: 9.14px;
        font-weight: 500;
        line-height: 12.12px;
        color: rgba(255, 255, 255, 1);
        text-align: justify;
        overflow: hidden;
    }
*/

.hTop .logo {
    margin-top: 23px;
    height: 53px;
}

.hTop .logo img {
    display: block;
    width: 100%;
    height: 100%;
}

.right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.right .search {
    display: flex;
    margin-top: 33.53px;
    width: 131.06px;
    height: 30.48px;
    border-radius: 15.24px;
    border: 0.76px solid rgba(255, 255, 255, 1);
}

.right .search .scarchI {
    margin: 7px 2px 5px 7px;
    width: 16.44px;
    height: 16.44px;
    color: rgba(255, 255, 255, 1);
}

/* input */
.right .search .searchIn {
    margin-left: -5px;
    width: 104px;
    color: #fff;
}

:deep(.el-input__wrapper) {
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;
}

:deep(.el-input__inner) {
    background-color: rgba(255, 255, 255, 0);
    height: 30.48px;
    border: none;
    color: #fff;
}

.right .rightList {
    display: flex;
    align-items: center;
}

.right .rightList .login {
    margin: 38px 0 0 23px;
    width: 39.62px;
    height: 18.29px;
    font-size: 13.72px;
    font-weight: 400;
    letter-spacing: 0.76px;
    line-height: 18.19px;
    color: rgba(255, 255, 255, 1);
}

.login a {
    color: #FFFFFF;
}

.right .rightList .loginO {
    margin: 39px 0 0 11px;
    width: 10.67px;
    height: 0px;
    transform: rotate(90deg);
    border: 0.76px solid rgba(255, 255, 255, 1);
}

.right .rightList .sed {
    margin: 39.3px 0px 0 11px;
    height: 18.29px;
    font-size: 13.72px;
    font-weight: 400;
    letter-spacing: 0.76px;
    /* color: rgba(166, 225, 99, 1); */
    color: rgba(255, 255, 255, 1);
}

.right .rightList .langs {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 23px;
}

.right .rightList .langs .lang {
    margin-top: 40px;
    height: 18.29px;
    font-size: 13.72px;
    font-weight: 400;
    letter-spacing: 0.76px;
    line-height: 18.19px;
    color: rgba(255, 255, 255, 1);
}

.right .rightList .langs .langO i {
    display: inline-block;
    margin: 43px 12px 0px 2%;
    width: 6.25px;
    height: 4.04px;
    color: rgba(255, 255, 255, 1);
}

/* bottom */
.zhBottom {
    margin: 0 auto;
    /* width: 85.5vw; */
    max-width: 90.2vw;
    height: 79.25px;
    display: grid;
    grid-template-columns: .7fr .9fr .8fr .9fr 1fr 1.3fr 1.4fr .8fr;
    gap: 10px;
    overflow: hidden;
    font-size: 16.76px;
    /* border: 1px solid rgb(37, 77, 211); */
}

.enBottom {
    margin: 0 auto;
    max-width: 85.5vw;
    height: 79.25px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1.1fr 1.2fr 1.1fr 1.5fr .8fr;
    overflow: hidden;
    /* border: 1px solid rgb(228, 47, 98); */
}

.zhs {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16.76px;
    zoom: 1;
    font-weight: 500;
    letter-spacing: 0.76px;
    line-height: 22.23px;
    color: rgba(255, 255, 255, 1);
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.ens {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    zoom: .9;
    font-weight: 500;
    line-height: 22.23px;
    color: rgba(255, 255, 255, 1);
    vertical-align: top;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.zhBottom a:hover {
    color: rgba(166, 225, 99, 1);
}

.zhBottom a::after {
    content: "";
    position: absolute;
    height: 12px;
    width: 1px;
    background-color: #FFFFFF;
    right: 0;
}

.zhBottom a:last-child::after {
    background-color: rgba(255, 255, 255, 0);
}

.enBottom a:hover {
    color: rgba(166, 225, 99, 1);
}

.enBottom a::after {
    content: "";
    position: absolute;
    height: 12px;
    width: 1px;
    background-color: #FFFFFF;
    right: 0;
}

.enBottom a:last-child::after {
    background-color: rgba(255, 255, 255, 0);
}
</style>