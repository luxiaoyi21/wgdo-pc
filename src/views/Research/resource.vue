<template>
    <div class="item">
        <div class="content">
            <div class="content-in">
                <div class="titleintro">
                    <p class="dynamic">{{ $t('research.resource') }}</p>
                    <div style="display: flex;">
                        <div style="display: flex;margin-right:15px" v-if="showCheckbox" class="batch-download-btn">
                            <el-button type="primary" @click="batchDownload">{{ $t('research.document') }}</el-button>
                        </div>
                        <el-button type="text" @click="toggleCheckbox">{{ $t('research.download') }}</el-button>
                    </div>

                </div>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style=" "></div>

                <div class="dynamic-dsc" v-for="res in resourceDatas" :key="res.academicId">
                    <div class="dynamic-content" v-for="file in res.gxfileList" :key="file.name">
                        <div class="dynamic-dscall">
                            <div class="dynamic-dscall-top">{{ file.name }}</div>
                            <div class="dynamic-dscall-buttom">{{ res.createTime }}</div>
                        </div>

                        <el-checkbox v-if="showCheckbox" v-model="selectedFiles" :label="file">{{ file.iii
                            }}</el-checkbox>
                        <el-button v-if="!showCheckbox" type="" @click="downloadFile(file.url)">
                            <i class="el-icon--right">
                                <img src="@/static/imgs/download.png" style="width: 30px;height:30px;" />
                            </i>
                        </el-button>
                    </div>
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
import axios from 'axios';
import Pagination from "@/components/Pagination.vue";

export default {
    name: "Resource",
    props: ['tabDatas'],
    components: { Pagination },
    data() {
        return {
            resourceDatas: [...this.tabDatas],
            currentPage: 1,
            totalItems: 0,
            pageSize: 10,
            selectedFiles: [],
            showCheckbox: false,
        };
    },
    computed: {
        currentTabDatas() {
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.resourceDatas.slice(start, end);
        }
    },
    mounted() {
        this.getResourceData()
    },
    methods: {
        getResourceData(p = this.$store.state.lang.version) {
            Research({ moduleType: '4', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.resourceDatas = res.data.rows
                    this.totalItems = res.data.rows.length;
                }
            })
        },
        handlePageChange(newPage) {
            this.currentPage = newPage;
        },
        async downloadFile(url) {
            if (!url) {
                return;
            }

            const fullUrl = 'http://106.3.97.14:9002' + url;
            const fileName = url.split('/').pop();

            try {
                const response = await axios.get(fullUrl, {
                    responseType: 'blob'
                });

                const blob = new Blob([response.data]);
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = fileName;

                document.body.appendChild(link);
                link.click();

                setTimeout(() => {
                    document.body.removeChild(link);
                    URL.revokeObjectURL(link.href);
                }, 100);
            } catch (error) {

            }
        },
        toggleCheckbox() {
            this.showCheckbox = !this.showCheckbox;
            if (!this.showCheckbox) {
                this.selectedFiles = [];
            }
        },
        batchDownload() {
            this.selectedFiles.forEach(file => {
                this.downloadFile(file.url);
            });
        }
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getResourceData(), this.$store.state.lang.version)
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

.batch-download-btn {
    text-align: center;
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
}

.titleintro {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}

.el-button {
    opacity: 1;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(165, 214, 63, 1);
    text-align: left;
    vertical-align: top;
}

.el-checkbox {
    margin-right: 10px;
}

.dsc-line {
    width: 100%;
    opacity: 0.3;
    border: 1px solid rgba(161, 161, 161, 1);
}

.dynamic-dsc {
    display: flex;
    flex-direction: column;
}

.dynamic-content {
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 1px solid rgba(161, 161, 161, 1);
    align-items: center;
    justify-content: space-between;
}

.dynamic-dscall {
    height: 77%;
    display: flex;
    flex-direction: column;
}

.dynamic-dscall-top {
    flex-grow: 1;
    opacity: 1;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 25px;
    color: rgba(40, 40, 40, 1);
    text-align: left;
    vertical-align: top;
    margin-top: 15px;
    font-family: MiSans;
    word-break: break-word;
    /* 超长单词换行 */
    white-space: normal;
    /* 自动换行 */
}

.dynamic-dscall-buttom {
    flex-grow: 1;
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: left;
    vertical-align: top;
    word-break: break-word;
    /* 超长单词换行 */
    white-space: normal;
    /* 自动换行 */
}

.el-button {
    opacity: 1;
    background: transparent;
    border: none;
}

.dynamic-data {
    width: 100%;
    height: 120px;
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
