<template>
    <div class="box">
        <div class="bgs"></div>
        <div class="f">
            <div class="hTop">
                <a href="/">
                    <div class="logo">
                        <img class="logoImg"
                            src="https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3">
                        <div class="logoDsc">
                            <div class="logoDscTop">世界绿色设计组织</div>
                            <div class="logoDscBot">World Green Design Organization</div>
                        </div>
                    </div>
                </a>
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
                            <div class="langO" style="display: none;"><i class="iconfont icon-xiangxiajiantou"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref="changeLangue" :class=" $store.state.lang.langs === '中文' ? 'zhBottom' : 'enBottom' ">
                <router-link to="/about" ref="changeLanguea"
                :class="{ 'isEn': $store.state.lang.isEn === 'en', 'ha': $store.state.lang.isEn !== 'en', 'active': $route.path === '/about' }">
                {{ $t('headernav.Aboutus') }}
            </router-link>
            <router-link to="/meet" ref="changeLanguea" :class="{ 'isEn': $store.state.lang.isEn === 'en', 'ha': $store.state.lang.isEn !== 'en', 'active': $route.path === '/meet' }">
                {{ $t('headernav.Conferenceactivity') }}
            </router-link>
            <router-link to="/media" ref="changeLanguea" :class="{ 'isEn': $store.state.lang.isEn === 'en', 'ha': $store.state.lang.isEn !== 'en', 'active': $route.path === '/media' }">
                {{ $t('headernav.Mediacenter') }}
            </router-link>
            <router-link to="/research" ref="changeLanguea" :class="{ 'isEn': $store.state.lang.isEn === 'en', 'ha': $store.state.lang.isEn !== 'en', 'active': $route.path === '/research' }">
                {{ $t('headernav.Academicresearch') }}
            </router-link>
            <router-link to="/project" ref="changeLanguea" :class="{ 'isEn': $store.state.lang.isEn === 'en', 'ha': $store.state.lang.isEn !== 'en', 'active': $route.path === '/project' }">
                {{ $t('headernav.Publicwelfareproject') }}
            </router-link>
            <router-link to="/prize" ref="changeLanguea" :class="{ 'isEn': $store.state.lang.isEn === 'en', 'ha': $store.state.lang.isEn !== 'en', 'active': $route.path === '/prize' }">
                {{ $t('headernav.InternationalGreenAward') }}
            </router-link>
            <router-link to="/wgdo" ref="changeLanguea" :class="{ 'isEn': $store.state.lang.isEn === 'en', 'ha': $store.state.lang.isEn !== 'en', 'active': $route.path === '/wgdo' }">
                {{ $t('headernav.WGDOGreenResearchInstitute') }}
            </router-link>
            <router-link to="http://lyb.wgdo.net/" ref="changeLanguea" :class="{ 'isEn': $store.state.lang.isEn === 'en', 'ha': $store.state.lang.isEn !== 'en'}">
                {{ $t('headernav.Greenleaflabel') }}
            </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderNav',
        data() {
            let searchInp = ''
            let lang = '中文'
            return {
                searchInp,
                lang,
            }
        },
        created() {
            this.lang = this.$store.state.lang.langs
            if (this.$store.state.lang.langs === '中文') {
                this.$refs.changeLangue.classList.add('enBottom');
                this.$refs.changeLanguea.classList.add('ens')
            } else {
                this.$refs.changeLangue.classList.add('zhBottom');
                this.$refs.changeLanguea.classList.add('zhs')
            }
        },
        mounted() {
            this.lang = this.$store.state.lang.langs
        },
        methods: {
            changeLang() {
                this.$store.commit('getLocalLang');
                this.$store.commit('getVersion')
            },
        },
        watch: {
            "$store.state.lang.isText1Visible": {
                handler() {
                    this.lang = this.$store.state.lang.langs
                }
            }
        }
    }
</script>

<style scoped>
    .box {
        width: 100%;
        background-color: rgba(0, 0, 0, .5);
        overflow: hidden;
    }

    .bgs {
        position: relative;
        top: 0;
        width: 100%;
        height: 365.75px;
        background: url(https://img.js.design/assets/img/662732b1d9103339ea2a7200.jpg#33fd4d026a03db23c19e04527b4fd6ad);
        background-size: cover;
        background-position: center;
    }

    .f {
        position: absolute;
        top: 0;
        width: 100%;
        height: 143.25px;
        margin: 0 auto;
        background: rgba(0, 0, 0, 0.5);
    }

    .hTop {
        margin: 0 auto;
        width: 80.2vw;
        display: flex;
    }

    /* logo */
    .hTop .logo {
        display: flex;
        left: 0;
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
    }

    .hTop .logo .logoDsc .logoDscTop {
        width: 252.4px;
        height: 20.57px;
        font-size: 15.24px;
        font-weight: 500;
        letter-spacing: 3.81px;
        line-height: 20.21px;
        color: rgba(255, 255, 255, 1);
        text-align: justify;
    }

    .hTop .logo .logoDsc .logoDscBot {
        width: 254.4px;
        height: 12.19px;
        font-size: 9.14px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 12.12px;
        color: rgba(255, 255, 255, 1);
        text-align: justify;
    }

    .right {
        flex: 1;
        display: flex;
        justify-content: flex-end;
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
    }

    :deep(.el-input__wrapper) {
        background-color: rgba(0, 0, 0, 0);
        box-shadow: none;
    }

    :deep(.el-input__inner) {
        background-color: rgba(255, 255, 255, 0);
        height: 30.48px;
        border: none;
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
        min-width: 104.68px;
        height: 18.29px;
        font-size: 13.72px;
        font-weight: 400;
        letter-spacing: 0.76px;
        /* line-height: 18.19px; */
        color: rgba(255, 255, 255, 1);
    }

    .right .rightList .langs {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 23px;
        width: 30px;
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

    .ha {
        position: relative;
        display: inline-flex;
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

    .isEn {
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

    .active {
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