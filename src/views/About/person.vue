<template>
    <div class="item">
        <div class="content">
            <div class="content-in">
                <p class="dynamic">{{ $t('about.figures') }}</p>

                <div class="dsc-line" style="margin-top: 10px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" margin-bottom: 15px;"></div>

                <div class="dynamic-dsc">
                    <div class="dsc-in" v-for="person in personDatas" :key="person.aboutusId">
                        <a :href="person.externalLink" class="dsc-left">
                            <img :src="'http://www.wgdo.net' + person.figureHeadportrait" alt="">
                        </a>

                        <div class="dsc-right">
                            <p class="person-name">{{ person.figureName }}</p>
                            <p class="person-intro">{{ person.figureIntroduce }}
                            </p>
                        </div>
                    </div>
                </div>

                <Pagination :tabDatas="tabDatas" :current-page.sync="currentPage" :totalItems="totalItems"
                    :page-size="pageSize" @update:currentPage="handlePageChange" />
            </div>
        </div>
    </div>
</template>

<script>
import { Aboutus } from '@/api/requests.js'
import funs from '@/utils/index.js'
import Pagination from '@/components/Pagination.vue';

export default {
    name: "Person",
    props: ['tabDatas'],
    components: { Pagination },
    data() {
        return {
            personDatas: [],
            currentPage: 1,
            totalItems: 0,
            pageSize: 4,
        };
    },
    computed: {
        currentTabDatas() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.personDatas.slice(start, end);
        }
    },
    mounted() {
        this.getPersonData()
        this.handlePageChange()
    },
    methods: {
        getPersonData(p = this.$store.state.lang.version) {
            Aboutus({ moduleType: '3', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.personDatas = res.data.rows
                    this.totalItems = res.data.rows.length;
                    // this.currentTabDatas = this.personDatas.slice(0, this.totalItems);
                }
            })
        },
        handlePageChange(newPage) {
            this.currentPage = newPage;
        },
        // getTabData() {
        //     return this.personDatas.slice(0, this.totalItems);
        // }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getPersonData(), this.$store.state.lang.version)
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
    margin-top: 7px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.dynamic-dsc {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.dsc-in {
    width: 48%;
    display: flex;
    margin-bottom: 50px;
}

.dsc-left {
    width: 140px;
    height: 180px;
    opacity: 1;
}

.dsc-left img {
    width: 140px;
    height: 180px;
    opacity: 1;
    background-size: cover;
    background-position: center;
    object-fit: cover;
}

.dsc-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 40px;
}

.person-name {
    opacity: 1;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 27px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
}

.person-intro {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 27px;
    color: rgba(102, 102, 102, 1);
    text-align: left;
    vertical-align: top;
    margin-top: 12px;
    white-space: pre-line;
}

.dynamic-data {
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dynamic-data-num {
    width: 12%;
    display: flex;
    justify-content: space-between;
}
</style>
