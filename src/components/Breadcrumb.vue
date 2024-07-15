<template>
    <div class="box">
        <a href="/"><img src="@/static/imgs/home.png"></a>
        <el-breadcrumb class="ebc" separator-class="el-icon-arrow-left">
            <el-breadcrumb-item v-for="item in urlData" :to="{ path: item.path }">
                <i class="iconfont icon-zuojiantou" id="lef"></i>
                <!-- {{ item.name }} -->
                {{ getBreadcrumbName(item) }}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
import { getHomeAllTitle } from '@/api/requests.js'

export default {
    name: 'Breadcrumb',
    props: ['urlData'],
    data() {
        return {
            // currentPath: [],
        }
    },
    mounted() {
        // this.updateBreadcrumb();
    },
    computed: {

    },
    methods: {
        // addBreadcrumb(item) {
        //     const newItem = { name: '组织动态详情', path: `${item.path}/dynamicinfo` };
        //     this.$emit('update:urlData', [...this.urlData, newItem]);
        // },
        getBreadcrumbName(item) {
            if (item.meta && item.meta.breadcrumbName) {
                let language = this.$store.state.lang.isEn;
                if (item.meta.breadcrumbName[language]) {
                    return item.meta.breadcrumbName[language];
                }

            }
            return item.name;
        },
        popBreadcrumb() {
            this.$emit('update:urlData', this.urlData.slice(0, -1));
        },
        // updateBreadcrumb() {
        //     const matchedRoutes = this.$route.matched;
        //     const currentRouteIndex = matchedRoutes.findIndex(route => route.path === this.$route.path);
        //     this.currentPath = matchedRoutes.slice(0, currentRouteIndex + 1).map(route => ({
        //         name: route.meta.breadcrumbName || route.name,
        //         path: route.path,
        //     }));
        // },
        updateUrlData(newUrlData) {
            // console.log(newUrlData);
        },
    },
    watch: {
        // $route: 'updateBreadcrumb',
        urlData: {
            handler: 'updateUrlData',
            immediate: true
        }
    },
}
</script>

<style scoped>
.box {
    width: 100%;
    display: flex;
    align-items: center;
    height: 19px;
    margin-top: 13px;
}

.box img {
    display: block;
    margin: 0 5px;
    width: 13px;
    height: 13px;
    background-size: cover;
    background-position: center;
    transform: translateY(-.6px);
}

#lef {
    display: inline-block;
    margin-right: 5px;
    width: 6.33px;
    height: 11.33px;
    color: rgba(150, 150, 150, 1);
}

.el-breadcrumb__item {
    margin-left: -5px;
    width: auto;
    height: 19px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 18.56px;
    color: rgba(150, 150, 150, 1);
    text-align: center;
}

:deep(.el-breadcrumb__inner) {
    width: 100%;
    height: 14.48px;
    font-size: 10.67px;
    font-weight: 400;
    letter-spacing: 0.76px;
    line-height: 14.14px;
    color: rgba(150, 150, 150, 1);
    text-align: left;
}

:deep(.el-breadcrumb__item:last-child .el-breadcrumb__inner) {
    margin-left: -9px;
}

:deep(.is-link) {
    width: 100%;
    height: 19px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 18.56px;
    color: rgba(150, 150, 150, 1);
    text-align: left;
}

:deep(.is-link:hover) {
    color: rgba(150, 150, 150, 1);
}

:deep(.el-icon-arrow-left:before) {
    display: none;
}
</style>