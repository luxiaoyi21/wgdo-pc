<template>
    <div class="item">
        <div class="content">
            <!-- <div class="content-in" v-for="save in saveDatas" :key="save.benefitId"> -->
            <div class="content-in">
                <p class="dynamic">世界环境日丨从源头保护我们的地球</p>
                <!-- <p class="dynamic">{{ save.title }}</p> -->

                <div class="info">
                    <div class="info-browser">浏览次数：1214</div>
                    <div class="info-create">发布时间：2018-05-18 08:27:46</div>
                </div>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style="margin-bottom: 15px;"></div>

                <!-- <div class="dynamic-dsc">
                    <div style="opacity: 1;
                    font-size: 15px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 25px;
                    color: rgba(51, 51, 51, 1);
                    text-align: justify;
                    vertical-align: top;" v-html="save.contentDetails"></div>
                </div> -->

                <div class="dynamic-dsc">
                    正如联合国环境规划署执行主任英格.安德森在COP27埃及峰会前所言：“到2030年减碳45%控制升温1.5度以内”的全人类目标已经迫在眉睫，且很不足够！没有人可置身事外；我们要更强有力的国家承诺，更强有力的实施方案，来减少排放。倘若不处理损失损害的问题，公正便绝无可能。每年1000亿美元的融资承诺，现在必须兑现。G20必须在节能减排方面起到带头作用。<br>
                    ----气候变化问题并非出现在地平线，并非刚来到我们家门口，它已经进到我们的家中，我们必须紧急采取相应行动，并加速推进。从现在开始<br>
                    在此大背景下，维护全球绿色、和平、可持续发展成为当下世界各国各部门各行业领域的共同呼声。减碳、减排，维护地球绿色生态平衡成为各国政府、机构、企业和公民个人的使命担当。从《欧洲绿色新政》和高密度出台的一揽子与之配套的包括强制性碳关税在内的法律法规的出台，再到中国双碳目标战略和二十大“绿色发展”的驱使下，九大部委成立“双碳领导小组”，从中央到地方，都在以前所未有的力度贯彻实施“全面节约战略，发展绿色低碳产业，倡导绿色消费，统筹产业结构调整、污染治理、生态保护、应对气候变化，加快发展方式绿色转型”策略。<br>
                    “世界绿色设计论坛”旨在全球范围内倡导和传播“绿色设计”理念，最终实现人与自然融合共生。自2011年起，已经连续在世界各地（瑞士卢加诺、比利时布鲁塞尔、意大利米兰、德国弗莱堡、坦桑尼亚达累斯萨拉姆、韩国首尔、中国扬州等）成功举办论坛，在全球范围内影响政府与行业企业关注能源消耗、环境恶化等诸多影响人类生存和发展的日益严峻的挑战，倡导各行业领域应用“绿色设计”的理念和方法论，把“绿色设计”作为环境治理的源头手段，通过信息、技术、材料、项目、资本、人才的创新设计规划，引导人类现代社会在生产方式、生活方式、消费方式的变革。<br>
                    12月15日下午，2022世界绿色设计论坛成功召开，因疫情防控要求，论坛采用线上方式进行并同步直播。本次论坛在北京市科学技术协会、工信部国和中心指导下，由北京光华设计发展基金会主办，中挪绿色创新中心协办，世界绿色设计组织绿色设计研究院承办，得到中国国际贸易学会自贸区港专委会、北京绿色设计促进会、瑞士绿建协会、意大利亚得里亚华商会、韩国绿色设计协会、光华产业投资基金、华夏银行、中创碳投、索比咨询、新华社中国名牌、美啊、凤凰龙行等机构支持。<br>
                    论坛围绕“绿色设计赋能产业转型”主题，邀请国内外专家、企业家代表探讨在当下充满挑战的国际环境中，如何以绿色设计手段加速我国双碳目标的实现路径，探索产业绿色化转型的经济增长极的关键点，积极推动中国及全球的可持续发展。<br>
                    国务院原参事、世界绿色设计组织石定寰，世界绿色设计组织执委AugustKeder，世界绿色设计组织学术委员会主席辛向阳，全球生态可持续发展联盟轮值主席、全球气候创新与治理研究中心研究员、跨国公司碳中和50人论坛常务理事车巍，俄罗斯工程院院士、中国科协海智专家马昕，中国地质大学(武汉)可持续能源实验室主任、国家“千人计划”特聘教授、国家“特聘专家”程寒松，国际能源机构（IEA）能源效率政策分析师ConorGask
                    ，广东合一新材料研究院董事长王伟，北京中创碳投科技有限公司总经理、国家发改委CDM项目审核理事会专家、联合国开发计划署（UNDP）专家库成员唐人虎，环境标准联盟执行主任JustingWilkes，奈琦尔董事长姜明和来自意大利、法国、德国、比利时、美国等代表出席了会议。论坛由世界绿色设计组织（比利时）北京代表处国际合作总监于爱华主持。
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Research } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Designinfo",
    props: ['tabDatas'],
    data() {
        return {
            designinfoDatas: [...this.tabDatas],
        };
    },
    mounted() {
        this.getDesigninfoData()
    },
    methods: {
        getDesigninfoData(p = this.$store.state.lang.version) {
            Research({ moduleType: '5', status: '1', version: p }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.saveDatas = res.data.rows
                    console.log(this.saveDatas);
                }
            })
        },
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getDesigninfoData(), this.$store.state.lang.version)
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
    width: 17%;
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
    width: 29%;
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

.dynamic-dsc {
    opacity: 1;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 23.87px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
    vertical-align: top;
    margin-bottom: 150px;
}

</style>
