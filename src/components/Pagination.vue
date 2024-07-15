<template>
    <div class="dynamic-data">
        <div class="dynamic-data-num">
            <div class="data-page">第{{ currentPage }}页</div>
            <div class="data-limit">共{{ totalItems }}条</div>
        </div>

        <div class="devide-page">
            <el-pagination background layout="prev, pager, next" :total="totalItems" :page-size="pageSize"
                :current-page.sync="localCurrentPage" @current-change="handlePageChange">>
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ['tabDatas', 'currentPage', 'totalItems', 'pageSize'],
    data() {
        return {
            localCurrentPage: this.currentPage
        }
    },
    computed: {
        currentTabDatas() {
            const start = (this.localCurrentPage - 1) * this.pageSize;
            const end = start + this.pageSize;
            return this.tabDatas.slice(start, end);
        }
    },
    methods: {
        handlePageChange(newPage) {
            this.localCurrentPage = newPage;
            this.$emit('update:currentPage', newPage);
        }
    }
}
</script>

<style scoped>
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