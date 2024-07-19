<template>
    <div class="item">
        <div class="content">
            <div class="content-in">
                <p class="aintro">{{ $t('wgdo.policy') }}</p>

                <div class="dsc-line" style="margin-top: 10px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div class="intro">
                    <div class="intro-in" v-for="policy in policyDatas" :key="policy.greeninstituteId">
                        <p style="opacity: 1;
                        font-size: 15px;
                        font-weight: 400;
                        letter-spacing: 0px;
                        line-height: 25px;
                        color: rgba(51, 51, 51, 1);
                        text-align: justify;
                        vertical-align: top;" v-html="policy.contentDetails"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getWgdo } from '@/api/requests.js'
import funs from '@/utils/index.js'

export default {
    name: "Policy",
    props: ['tabDatas'],
    data() {
        return {
            policyDatas: [],
        };
    },
    mounted() {
        this.getPolicyData()
        // this.Styles()
    },
    methods: {
        getPolicyData(p = this.$store.state.lang.version) {
            getWgdo({ moduleType: '5', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.policyDatas = res.data.rows
                }
            })
        },
        // Styles() {
        //     const style = document.createElement('style');
        //     style.type = 'text/css';
        //     style.innerHTML = `
        //         .intro p {
        //             background-color: transparent;

        //         }

        //         .content-in h1 {
        //             background-color: transparent;
        //         }
        //     `;
        //     document.head.appendChild(style);
        // }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getPolicyData(), this.$store.state.lang.version)
            }
        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.item {
    width: 100%;
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
}

.content {
    width: 100%;
    opacity: 1;
    background: rgba(242, 241, 221, 1);
    display: flex;
    justify-content: center;
    align-content: center;
}

.content-in {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.aintro {
    opacity: 1;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 37.13px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
    margin-top: 7px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.intro {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
}

.intro-in {
    display: flex;
    flex-direction: column;
}

::v-deep .intro-in p {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
