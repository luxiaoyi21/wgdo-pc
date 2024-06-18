import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            isAuth: false
        }
    },
    {
        path: '/sedmore',
        name: 'SedMore',
        component: () => import('@/views/Home/Second/components/MoreDet.vue'),
        meta: {
            toTop: true
        }
    },
    {
        path: '/details',
        name: 'Details',
        component: () => import('@/components/Details.vue'),
        meta: {
            isAuth: false,
            toTop: true
        }
    },
    {
        path: '/det',
        name: 'Det',
        component: () => import('@/components/Det.vue'),
        meta: {
            isAuth: false,
            toTop: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login/index.vue'),
        meta: {
            isAuth: true
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About/index'),
        children: [
            {
                path: 'aboutintro',
                name: 'AboutIntro',
                component: () => import('@/views/About/aboutintro.vue'),
                meta: { isAuth: false },
            },
            {
                path: 'aboutor',
                name: 'AboutOr',
                component: () => import('@/views/About/aboutor.vue'),
                meta: { isAuth: false },
            },
            {
                path: 'person',
                name: 'Person',
                component: () => import('@/views/About/person.vue'),
                meta: { isAuth: false },
            },
            {
                path: 'contact',
                name: 'Contact',
                component: () => import('@/views/About/contact.vue'),
                meta: { isAuth: false },
            },
        ]
    },
    // 会议活动
    {
        path: '/meet',
        name: 'Meet',
        component: () => import('@/views/Meet/index'),
        children: [
            {
                // /Meet/preview 活动预告
                path: 'preview',
                name: 'Preview',
                // component: {render(c){return c('router-view')}},
                // redirect:'preview',
                component: () => import('@/views/Meet/preview.vue'),
                meta: { auth: true },
                children: [
                    {
                        // /Meet/previewinfo 活动预告详情
                        path: '/preview/previewinfo',
                        name: 'Previewinfo',
                        component: () => import('@/views/Meet/previewinfo.vue'),
                        meta: { auth: true },
                    },
                ]
            },
            {
                // /Meet/doing 正在进行
                path: 'doing',
                name: 'Doing',
                component: () => import('@/views/Meet/doing.vue'),
                meta: { auth: true },
                children: [
                    {
                        // /Meet/doinginfo 正在进行详情
                        path: '/doing/doinginfo',
                        name: 'Doinginfo',
                        component: () => import('@/views/Meet/doinginfo.vue'),
                        meta: { auth: true },
                    },
                ]
            },
            {
                // /Meet/lookback 历届回顾
                path: 'lookback',
                name: 'Lookback',
                component: () => import('@/views/Meet/lookback.vue'),
                meta: { auth: true },
                children: [
                    {
                        // /Meet/lookbackinfo 历届回顾详情
                        path: '/lookback/lookbackinfo',
                        name: 'Lookbackinfo',
                        component: () => import('@/views/Meet/lookbackinfo.vue'),
                        meta: { auth: true },
                    },
                ]
            }
        ]
    },
    // 媒体中心
    {
        path: '/media',
        name: 'Media',
        // name: '媒体中心',
        component: () => import('@/views/Media/index'),
        // meta: {
        //     name_zh: '媒体中心',
        //     name_en: 'Media',
        // },
        children: [
            {
                // /Media/dynamic 组织动态
                path: 'dynamic',
                name: 'Dynamic',
                component: () => import('@/views/Media/dynamic.vue'),
                meta: { auth: true },
                children: [
                    {
                        // /Media/dynamicinfo 动态详情
                        path: '/dynamic/dynamicinfo',
                        name: 'Dynamicinfo',
                        component: () => import('@/views/Media/dynamicinfo.vue'),
                        meta: { auth: true },
                    },
                ]
            },
            {
                // /Media/video 论坛视频
                path: 'video',
                name: 'Video',
                component: () => import('@/views/Media/video.vue'),
                meta: { auth: true },
            },
            {
                // /Media/report 媒体报告
                path: 'report',
                name: 'Report',
                component: () => import('@/views/Media/report.vue'),
                meta: { auth: true },
                children: [
                    {
                        // /Media/reportinfo 报告详情
                        path: '/report/reportinfo',
                        name: 'Reportinfo',
                        component: () => import('@/views/Media/reportinfo.vue'),
                        meta: { auth: true },
                    },
                ]
            },
        ]
    },
    // 学术研究
    {
        path: '/research',
        name: 'Research',
        component: () => import('@/views/Research/index'),
        children: [
            {
                // /Research/design 绿色设计报告
                path: 'design',
                name: 'Design',
                component: () => import('@/views/Research/design.vue'),
                meta: { auth: true },
                children: [
                    {
                        // /Research/designinfo 绿色设计报告详情
                        path: '/design/designinfo',
                        name: 'Designinfo',
                        component: () => import('@/views/Research/designinfo.vue'),
                        meta: { auth: true },
                    },
                ]
            },
            {
                // /Research/standard 绿色设计国际标准
                path: 'standard',
                name: 'Standard',
                component: () => import('@/views/Research/standard.vue'),
                meta: { auth: true },
            },
            {
                // /Research/laboratory 绿色设计国际实验室
                path: 'laboratory',
                name: 'Laboratory',
                component: () => import('@/views/Research/laboratory.vue'),
                meta: { auth: true },
            },
            {
                // /Research/resource 共享资源
                path: 'resource',
                name: 'Resource',
                component: () => import('@/views/Research/resource.vue'),
                meta: { auth: true },
            },
        ]
    },
    // 公益项目
    {
        path: '/project',
        name: 'Project',
        component: () => import('@/views/Project/index'),
        children: [
            {
                // /Project/greenhome  绿叶之家
                path: 'greenhome',
                name: 'Greenhome',
                component: () => import('@/views/Project/greenhome.vue'),
                meta: { auth: true },
            },
            {
                // /Project/publicity 捐赠公示
                path: 'publicity',
                name: 'Publicity',
                component: () => import('@/views/Project/publicity.vue'),
                meta: { auth: true },
                children: [
                    {
                        // /Project/record 绿丝带物资到货记录
                        path: 'record',
                        name: 'Record',
                        component: () => import('@/views/Project/record.vue'),
                        meta: { auth: true },
                    },
                    {
                        // /Project/glory 绿丝带行动捐赠光荣榜
                        path: 'glory',
                        name: 'Glory',
                        component: () => import('@/views/Project/glory.vue'),
                        meta: { auth: true },
                    },
                    {
                        // /Project/inventory 可信供方清单
                        path: '/publicity/inventory',
                        name: 'Inventory',
                        component: () => import('@/views/Project/inventory.vue'),
                        meta: { auth: true },
                    },
                    {
                        // /Project/disseminate 抗疫宣传
                        path: '/publicity/disseminate',
                        name: 'Disseminate',
                        component: () => import('@/views/Project/disseminate.vue'),
                        meta: { auth: true },
                    },
                    {
                        // /Project/contactform 联系方式
                        path: '/publicity/contactform',
                        name: 'Contactform',
                        component: () => import('@/views/Project/contactform.vue'),
                        meta: { auth: true },
                    },
                ]
            },
        ]
    },
    // 国际绿奖
    {
        path: '/prize',
        name: 'Prize',
        component: () => import('@/views/Prize/index'),
        children: [
            // 绿色设计国际大奖
            {
                // /Prize/big
                path: 'big',
                name: 'Big',
                component: () => import('@/views/Prize/big.vue'),
                meta: { auth: true },
                children: [
                    {
                        // /Prize/rule 评定规则
                        path: '/big/rule',
                        name: 'bRule',
                        component: () => import('@/views/Prize/rule.vue'),
                        meta: { auth: true },
                    },
                    {
                        // /Prize/personal 获奖个人
                        path: '/big/personal',
                        name: 'bPersonal',
                        component: () => import('@/views/Prize/personal.vue'),
                        meta: { auth: true },
                    },
                ]
            },
            {
                // /Prize/contribute 绿色设计国际贡献奖
                path: 'contribute',
                name: 'Contribute',
                component: () => import('@/views/Prize/contribute.vue'),
                meta: { auth: true },
                children: [
                    {
                        // /Prize/rule 评定规则
                        path: '/contribute/rule',
                        name: 'cRule',
                        component: () => import('@/views/Prize/rule.vue'),
                        meta: { auth: true },
                    },
                    {
                        // /Prize/personal 获奖个人
                        path: '/contribute/personal',
                        name: 'cPersonal',
                        component: () => import('@/views/Prize/personal.vue'),
                        meta: { auth: true },
                    },
                    {
                        // /Prize/mechanism 获奖机构
                        path: '/contribute/mechanism',
                        name: 'Mechanism',
                        component: () => import('@/views/Prize/mechanism.vue'),
                        meta: { auth: true },
                    },
                ]
            },
        ]
    },
    // WGDO绿研院
    {
        path: '/wgdo',
        name: 'Wgdo',
        component: () => import('@/views/Wgdo/index'),
        children: [
            {
                // /WGDO/intro 机构介绍
                path: 'intro',
                name: 'Intro',
                component: () => import('@/views/Wgdo/intro.vue'),
                meta: { auth: true },
            },
            {
                // /WGDO/branch 分支拓建
                path: 'branch',
                name: 'Branch',
                component: () => import('@/views/Wgdo/branch.vue'),
                meta: { auth: true },
            },
            {
                // /WGDO/service 品牌服务
                path: 'service',
                name: 'Service',
                component: () => import('@/views/Wgdo/service.vue'),
                meta: { auth: true },
            },
            {
                // /WGDO/train 绿色设计培训
                path: 'train',
                name: 'Train',
                component: () => import('@/views/Wgdo/train.vue'),
                meta: { auth: true },
            },
            {
                // /WGDO/policy 绿色政策
                path: 'policy',
                name: 'Policy',
                component: () => import('@/views/Wgdo/policy.vue'),
                meta: { auth: true },
            },
        ]
    },
    // 绿叶标
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        let token = localStorage.getItem('token')
        let stoken = sessionStorage.getItem('stoken')
        if (to.path === '/login' || token || stoken) {
            next()
        } else {
            next('/login')
        }
    } else {
        next()
    }
    if (to.meta.toTop) {
        window.scrollTo(0, 0)
    } else {
        next()
    }
})

export default router