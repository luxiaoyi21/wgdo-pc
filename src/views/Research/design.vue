<template>
    <div class="item">
        <!-- <router-view><router-view></router-view></router-view> -->
        <div class="content">
            <div class="content-in">

                <p class="dynamic">{{ $t('research.design') }}</p>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style="margin-bottom: 15px;"></div>

                <div class="dynamic-dsc">
                    <router-link :to="{ name: 'Designinfo', query: { id: design.academicId } }" class="doing-in"
                        v-for="design in designDatas" :key="design.academicId">
                        <div class="doing-img">
                            <img :src="'http://www.wgdo.net' + design.cover" alt="">
                        </div>
                        <div class="image-caption">{{ design.title }}</div>
                    </router-link>
                </div>

                <!-- <div class="dynamic-data">
                    <div class="dynamic-data-num">
                        <div class="data-page">第{{ currentPage }}页</div>
                        <div class="data-limit">共{{ totalItems }}条</div>
                    </div>

                    <div class="devide-page">
                        <el-pagination background layout="prev, pager, next" :total="totalItems" :page-size="pageSize"
                            :current-page.sync="currentPage" @current-change="handlePageChange">>
                        </el-pagination>
                    </div>
                </div> -->
                <Pagination :tabDatas="tabDatas" :pageSize="pageSize" :currentPage="currentPage"
                    :totalItems="totalItems" @currentTabDatas="currentTabDatas" />
            </div>
        </div>
    </div>
</template>

<script>
import { Research } from "@/api/requests.js";
import funs from '@/utils/index.js'
import Pagination from "@/components/Pagination.vue"

export default {
    name: "Design",
    components: { Pagination },
    props: ['tabDatas'],
    data() {
        return {
            designDatas: [...this.tabDatas],
            currentPage: 1,
            totalItems: 0,
            pageSize: 9,
        };
    },
    computed: {
        currentTabDatas() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.designDatas.slice(start, end);
        }
    },
    mounted() {
        this.getDesignData()
    },
    methods: {
        getDesignData(p = this.$store.state.lang.version) {
            Research({ moduleType: '1', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.designDatas = res.data.rows
                    this.totalItems = res.data.rows.length;
                }
            })
        },
        handlePageChange(newPage) {
            this.currentPage = newPage;
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getDesignData(), this.$store.state.lang.version)
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(33.33% - 20px), 1fr));
    grid-gap: 20px;
    margin-bottom: 30px;
}

.doing-in {
    width: 100%;
}

.doing-img {
    width: 100%;
    height: 200px;
    opacity: 1;
    position: relative;
}

.doing-img img {
    width: 100%;
    height: 200px;
    opacity: 1;
}

.image-caption {
    opacity: 1;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    vertical-align: top;
    margin-top: 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
}

.dynamic-data {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
}

.dynamic-data-num {
    width: 12%;
    display: flex;
    justify-content: space-between;
}
</style>