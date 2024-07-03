<template>
    <div class="box">
        <div :class=" $store.state.lang.isEn === 'en' ? 'topEN' : 'top' ">
            <div :class=" $store.state.lang.isEn === 'en' ? 'topItemEN' : 'topItem' ">
                <div :class=" $store.state.lang.isEn === 'en' ? 'topItemTitleEN' : 'topItemTitle' ">{{
                    $t('footer.guanyuwomen') }}</div>
                <div class="topItemList">
                    <a href="/about/aboutintro"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.zuzhijieshao') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/about/aboutor"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.zuzhijiagou') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/about/person"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.renwu') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/about/contact"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.lianxiwomen') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                </div>
            </div>
            <div :class=" $store.state.lang.isEn === 'en' ? 'topItemEN' : 'topItem' ">
                <div :class=" $store.state.lang.isEn === 'en' ? 'topItemTitleEN' : 'topItemTitle' ">{{
                    $t('footer.huiyihuodong') }}</div>
                <div class="topItemList">
                    <a href="/meet/preview"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.huodongyugao') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/meet/doing" :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.zhengzaijinxing') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/meet/lookback"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.lijiehuigu') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                </div>
            </div>
            <div :class=" $store.state.lang.isEn === 'en' ? 'topItemEN' : 'topItem' ">
                <div :class=" $store.state.lang.isEn === 'en' ? 'topItemTitleEN' : 'topItemTitle' ">{{
                    $t('footer.meitizhongx') }}</div>
                <div class="topItemList">
                    <a href="/media/dynamic"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.zuzhidongtai') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/media/video"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.luntanship') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/media/report"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.meitibaod') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                </div>
            </div>
            <div :class=" $store.state.lang.isEn === 'en' ? 'topItemEN' : 'topItem' ">
                <div :class=" $store.state.lang.isEn === 'en' ? 'topItemTitleEN' : 'topItemTitle' ">{{
                    $t('footer.xueshuyanjiu') }}</div>
                <div class="topItemList">
                    <a href="/research/design"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.lvsesheji') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/research/standard"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.lvseshejiguoji') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/research/laboratory"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.guojishiyanshi') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/research/resource"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.gongxiangziyuan') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                </div>
            </div>
            <div :class=" $store.state.lang.isEn === 'en' ? 'topItemEN' : 'topItem' ">
                <div :class=" $store.state.lang.isEn === 'en' ? 'topItemTitleEN' : 'topItemTitle' ">{{
                    $t('footer.gonyixiangmu') }}</div>
                <div class="topItemList">
                    <a href="/project/greenhome"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.lvyezhijia') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/project/glory"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.lvsidai') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                </div>
            </div>
            <div :class=" $store.state.lang.isEn === 'en' ? 'topItemEN' : 'topItem' ">
                <div :class=" $store.state.lang.isEn === 'en' ? 'topItemTitleEN' : 'topItemTitle' ">{{
                    $t('footer.guojilvjiang') }}</div>
                <div class="topItemList">
                    <a href="/prize/big" :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.lvseshejidajiang') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/prize/contribute"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.lvseshijidajiang') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="http://lyb.wgdo.net/"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span id="greens">{{ $t('footer.lvyebiao') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                </div>
            </div>
            <div :class=" $store.state.lang.isEn === 'en' ? 'topItemEN' : 'topItem' ">
                <div :class=" $store.state.lang.isEn === 'en' ? 'topItemTitleEN' : 'topItemTitle' ">{{
                    $t('footer.WGDOyanjiuyan') }}</div>
                <div class="topItemList">
                    <a href="/wgdo/intro" :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.zuzhijianjie') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/wgdo/branch"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.fenzhituojian') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/wgdo/service"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.pingpaifuwu') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/wgdo/train" :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.peixunjihua') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                    <a href="/wgdo/policy"
                        :class=" $store.state.lang.isEn === 'en' ? 'topItemListEN' : 'topItemLista' ">
                        <span>{{ $t('footer.lvsezhengce') }}</span>
                        <i class="iconfont icon-youjiantou"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="bottoms">
            <div class="botLeft">
                <div class="tel">
                    <i class="iconfont icon-zuoji"></i>
                    <span>T. (86) 10 83681587. 15801587585. F. (86) 10 83681553</span>
                </div>
                <div class="address">
                    <i class="iconfont icon-weizhi"></i>
                    <span>{{ $t('footer.dizhi') }}</span>
                </div>
                <div class="phone">
                    <i class="iconfont icon-weixin"></i>
                    <span>WGDO2014</span>
                </div>
                <div class="face">
                    <i class="iconfont icon-facebook-fill"></i>
                    <span>(86) 10 83681587</span>
                </div>
            </div>
            <div class="botRight">
                <div class="rightTop">
                    <div class="rightTopLeft">
                        <div class="fir">Emali</div>
                        <div class="sed">info@wgdo.net</div>
                    </div>
                    <div class="email">
                        <i class="iconfont icon-iconfontemail"></i>
                    </div>
                </div>
                <div class="rightBottom">
                    <span>{{ $t('footer.jing') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .box {
        margin: 0 auto;
        padding: 46px 0 43px;
        width: 80vw;
        max-width: 80vw;
        overflow: hidden;
        background: rgba(166, 225, 99, 1);
    }

    .box .top {
        display: flex;
        justify-content: space-between;
        width: 80.2vw;
        gap: 10px;
        background: rgba(166, 225, 99, 1);
    }

    .topEN {
        display: grid;
        grid-template-columns: .6fr 1fr .6fr .7fr 1fr .7fr 1.3fr;
        gap: 3.5px;
    }

    .box .top .topItem {
        flex: 1;
    }

    .box .top .topItem .topItemTitle {
        margin-bottom: 15px;
        max-width: 160px;
        height: 20.57px;
        font-size: 15.24px;
        font-weight: 550;
        letter-spacing: 0.76px;
        line-height: 20.21px;
        color: rgba(51, 51, 51, 1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .topItemTitleEN {
        margin-bottom: 20px;
        height: 20.57px;
        font-size: 11.7px;
        font-weight: 550;
        line-height: 20.21px;
        color: rgba(51, 51, 51, 1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .box .top .topItem .topItemList {
        max-width: 160px;
    }

    .box .top .topItem .topItemList a {
        display: inline-block;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 18.29px;
        line-height: 18.19px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .box .top .topItem .topItemList a:not(:first-child) {
        margin-top: 20px;
    }

    .box .top .topItem .topItemList .topItemLista {
        display: flex;
        font-size: 13.72px;
        font-weight: 400;
        letter-spacing: 0.76px;
        text-align: left;
        color: rgba(51, 51, 51, 0.8);
        overflow: hidden;
    }

    .topItemListEN {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        height: 18.29px;
        line-height: 18.19px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .box .top .topItemList a i {
        color: #333333;
    }

    #greens {
        width: 170px;
        height: 20.57px;
        font-size: 13px;
        font-weight: 550;
        letter-spacing: 0.76px;
        line-height: 16px;
        color: rgba(51, 51, 51, 1);
        text-align: left;
    }

    /* bottoms */
    .bottoms {
        margin-top: 42px;
        width: 100%;
        height: 130px;
        display: flex;
        justify-content: space-between;
        background: rgba(166, 225, 99, 1);
    }

    /* botLeft */
    .botLeft {
        display: inline-block;
        height: 18.29px;
        line-height: 18.19px;
        min-width: 455px;
    }

    .botLeft div {
        margin-bottom: 8px;
        display: flex;
    }

    .botLeft div i {
        margin-right: 12px;
        width: 15.23px;
        height: 13.32px;
        opacity: 1;
        color: #333333;
    }

    .botLeft div span {
        font-size: 13.72px;
        font-weight: 400;
        letter-spacing: 0.76px;
        color: rgba(51, 51, 51, 0.8);
        text-align: left;
        vertical-align: top;
    }

    /* botRight */
    .botRight {
        min-width: 230px;
    }

    .rightTop {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 44.19px;
    }

    .rightTop .rightTopLeft {
        text-align: right;
    }

    .rightTop .rightTopLeft .fir {
        height: 18.29px;
        font-size: 13.72px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 18.19px;
        color: rgba(51, 51, 51, 0.8);
    }

    .rightTop .rightTopLeft .sed {
        height: 26.67px;
        font-size: 19.81px;
        font-weight: 550;
        letter-spacing: 0.76px;
        line-height: 26.27px;
        color: rgba(51, 51, 51, 1);
    }

    .rightTop .email {
        position: relative;
        margin-left: 12px;
        width: 44.19px;
        height: 44.19px;
        border: 2.29px solid #333333;
        border-radius: 50%;
    }

    .email i {
        display: inline-block;
        position: absolute;
        top: 0;
        left: 100%;
        transform: translate(-87%, 31%);
        width: 37px;
        height: 37px;
        color: #333333;
    }

    .rightBottom {
        margin-top: 34px;
        height: 18.29px;
        font-size: 13.72px;
        font-weight: 400;
        letter-spacing: 0.76px;
        line-height: 18.19px;
        color: rgba(51, 51, 51, 0.8);
        text-align: right;
        vertical-align: top;
    }
</style>