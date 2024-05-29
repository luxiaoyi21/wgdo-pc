<template>
    <div class="item">
        <div class="content">
            <div class="big-leader">
                <a href="" style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>需求填报</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="/project/inventory"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>可信供方清单</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="/project/publicity"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>捐赠公示</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="" style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>新闻中心</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="/project/disseminate"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>抗疫宣传</span>
                    <i class="el-icon-arrow-right"></i>
                </a>

                <a href="/project/contact"
                    style="display: flex; align-items: center;justify-content: space-between;width:80%">
                    <span>联系方式</span>
                    <i class="el-icon-arrow-right"></i>
                </a>
            </div>

            <div class="content-in">

                <p class="dynamic">绿丝带行动捐赠光荣榜</p>

                <div class="info">
                    <div class="info-browser">浏览次数：1173</div>
                    <div class="info-create">发布时间：2020-05-18 08:25:21</div>
                </div>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div class="grip">
                    <div class="grip-img">
                        <img src="https://img.js.design/assets/img/66278ae9281eb183ff7d307f.png#2d18c10b6d0ce36b67dc2225e0c9a04f"
                            alt="">
                    </div>
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
            gloryDatas: [...this.tabDatas],
        };
    },
    mounted() {
        this.getGloryData()
    },
    methods: {
        getGloryData(p = this.$store.state.lang.version) {
            Project({ moduleType: '5', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.gloryDatas = res.data.rows
                    console.log(this.gloryDatas);
                }
            })
        }
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
    left: 25px;
    top: 440px;
    width: 200px;
    height: 220px;
    opacity: 1;
    border-radius: 6px;
    background: rgba(220, 235, 192, 1);
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

.content-in {
    width: 67%;
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
    width: 16%;
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
    width: 28%;
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
