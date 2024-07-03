<template>
    <div class="item">
        <div class="content">
            <div class="content-in">
                <div v-for="lab in labDatas" :key="lab.academicId">
                    <p class="dynamic">{{ lab.title }}</p>

                    <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                    <div class="dsc-line" style="margin-bottom:15px"></div>

                    <div class="dynamic-dsc" style="margin-bottom: 50px;">
                        <div class="lab" v-html="lab.contentDetails"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Research } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Laboratory",
    props: ['tabDatas'],
    data() {
        return {
            labDatas: [],
        };
    },
    mounted() {
        this.getLabData()
    },
    methods: {
        getLabData(p = this.$store.state.lang.version) {
            Research({ moduleType: '3', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.labDatas = res.data.rows
                }
            })
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getLabData(), this.$store.state.lang.version)
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

.dynamic {
    opacity: 1;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 37.13px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
    margin-top: 15px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.dynamic-dsc {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.lab{
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 25px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
}
</style>