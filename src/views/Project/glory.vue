<template>
    <div class="item">
        <div class="content">
            <!-- <div class="big-leader">
                <a href="" style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.require') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <router-link :to="{ name: 'Inventory' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.inventory') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <router-link :to="{ name: 'Publicity' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.publicity') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <a href="" style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.news') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <router-link :to="{ name: 'Disseminate' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.disseminate') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>

                <router-link :to="{ name: 'Contactform' }"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>{{ $t('project.contactform') }}</span>
                    <i class="el-icon-arrow-right"></i>
                </router-link>
            </div> -->

            <div class="content-in" v-for="glory in gloryDatas" :key="glory.benefitId">

                <p class="dynamic">{{ $t('project.glory') }}</p>

                <div class="info">
                    <div class="info-browser">{{ $t('meet.browser') }}：{{ glory.clickVolume }}</div>
                    <div class="info-create">{{ $t('meet.create') }}：{{ glory.releaseTime }}</div>
                </div>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div class="grip">
                    <div v-html="glory.contentDetails"></div>
                    <!-- <div class="grip-img">
                        <img src="https://img.js.design/assets/img/66278ae9281eb183ff7d307f.png#2d18c10b6d0ce36b67dc2225e0c9a04f"
                            alt="">
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Project } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Glory",
    props: ['tabDatas'],
    data() {
        return {
            gloryDatas: [],
        };
    },
    mounted() {
        this.getGloryData()
        this.ImageStyles()
    },
    methods: {
        getGloryData(p = this.$store.state.lang.version) {
            const id = this.$route.query.id;
            Project({ moduleType: '2', status: '1', version: p, id: id }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.gloryDatas = res.data.rows
                    // const targetData = res.data.rows.find(row => row.id === id); 
                    // if (targetData) {
                    //     this.gloryDatas = [targetData];
                    // }
                    // this.gloryDatas = res.data.rows.filter(row => row.benefitId === id);
                }
            })
        },
        ImageStyles() {
            const style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = `
                .content-in img {
                    height:100%;
                    
                    background-size: cover;
                    background-position: center;
                    object-fit: cover;
                }
            `;
            document.head.appendChild(style);
        },
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getGloryData(), this.$store.state.lang.version)
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

.big-leader {
    width: 200px;
    height: 20%;
    opacity: 1;
    border-radius: 6px;
    background: rgba(220, 235, 192, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 999;
    margin: 17px 20px 0 0;
}

.content-in {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.dynamic {
    opacity: 1;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 37.13px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    vertical-align: top;
    margin-top: 15px;
}

.info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.info-browser {
    height: 22px;
    opacity: 1;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 21.22px;
    color: rgba(153, 153, 153, 1);
    text-align: center;
    vertical-align: top;
}

.info-create {
    height: 22px;
    opacity: 1;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 21.22px;
    color: rgba(153, 153, 153, 1);
    text-align: center;
    vertical-align: top;
    margin-left: 15px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.grip {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}

.grip-img {
    width: 738px;
    height: 3059px;
    mix-blend-mode: multiply;
    opacity: 1;
}

.grip-img img {
    width: 738px;
    height: 3059px;
    mix-blend-mode: multiply;
    opacity: 1;
}
</style>
