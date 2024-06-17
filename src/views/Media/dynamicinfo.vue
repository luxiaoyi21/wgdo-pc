<template>
    <div class="item">
        <!-- <router-view :key="$route.query.id" /> -->
        <div class="content">
            <div class="content-in" v-for="dyninfo in dynamicinfoDatas" :key="dyninfo.mediacenterId">
                <!-- <div class="content-in"> -->
                <p class="dynamic">{{ dyninfo.title }}</p>

                <div class="info">
                    <div class="info-browser">{{ $t('meet.browser') }}：{{ dyninfo.clickVolume }}</div>
                    <div class="info-create">{{ $t('meet.create') }}：{{ dyninfo.releaseTime }}</div>
                </div>

                <div class="dsc-line" style="margin-top: 15px; margin-bottom: 5px;"></div>
                <div class="dsc-line" style="margin-bottom: 15px;"></div>

                <div class="dynamic-dsc">
                    <div style="opacity: 1;
                    font-size: 15px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 25px;
                    color: rgba(51, 51, 51, 1);
                    text-align: justify;
                    vertical-align: top;" v-html="dyninfo.contentDetails"></div>
                </div>

                <!-- <div class="dynamic-dsc">
                    <div class="dsc-intro">
                        正如联合国环境规划署执行主任英格.安德森在COP27埃及峰会前所言：“到2030年减碳45%控制升温1.5度以内”的全人类目标已经迫在眉睫，且很不足够！没有人可置身事外；我们要更强有力的国家承诺，更强有力的实施方案，来减少排放。倘若不处理损失损害的问题，公正便绝无可能。每年1000亿美元的融资承诺，现在必须兑现。G20必须在节能减排方面起到带头作用。<br>
                        ----气候变化问题并非出现在地平线，并非刚来到我们家门口，它已经进到我们的家中，我们必须紧急采取相应行动，并加速推进。从现在开始<br><br>
                        在此大背景下，维护全球绿色、和平、可持续发展成为当下世界各国各部门各行业领域的共同呼声。减碳、减排，维护地球绿色生态平衡成为各国政府、机构、企业和公民个人的使命担当。从《欧洲绿色新政》和高密度出台的一揽子与之配套的包括强制性碳关税在内的法律法规的出台，再到中国双碳目标战略和二十大“绿色发展”的驱使下，九大部委成立“双碳领导小组”，从中央到地方，都在以前所未有的力度贯彻实施“全面节约战略，发展绿色低碳产业，倡导绿色消费，统筹产业结构调整、污染治理、生态保护、应对气候变化，加快发展方式绿色转型”策略。<br><br>
                        “世界绿色设计论坛”旨在全球范围内倡导和传播“绿色设计”理念，最终实现人与自然融合共生。自2011年起，已经连续在世界各地（瑞士卢加诺、比利时布鲁塞尔、意大利米兰、德国弗莱堡、坦桑尼亚达累斯萨拉姆、韩国首尔、中国扬州等）成功举办论坛，在全球范围内影响政府与行业企业关注能源消耗、环境恶化等诸多影响人类生存和发展的日益严峻的挑战，倡导各行业领域应用“绿色设计”的理念和方法论，把“绿色设计”作为环境治理的源头手段，通过信息、技术、材料、项目、资本、人才的创新设计规划，引导人类现代社会在生产方式、生活方式、消费方式的变革。<br><br>
                        12月15日下午，2022世界绿色设计论坛成功召开，因疫情防控要求，论坛采用线上方式进行并同步直播。本次论坛在北京市科学技术协会、工信部国和中心指导下，由北京光华设计发展基金会主办，中挪绿色创新中心协办，世界绿色设计组织绿色设计研究院承办，得到中国国际贸易学会自贸区港专委会、北京绿色设计促进会、瑞士绿建协会、意大利亚得里亚华商会、韩国绿色设计协会、光华产业投资基金、华夏银行、中创碳投、索比咨询、新华社中国名牌、美啊、凤凰龙行等机构支持。<br><br>
                        论坛围绕“绿色设计赋能产业转型”主题，邀请国内外专家、企业家代表探讨在当下充满挑战的国际环境中，如何以绿色设计手段加速我国双碳目标的实现路径，探索产业绿色化转型的经济增长极的关键点，积极推动中国及全球的可持续发展。<br><br>
                        国务院原参事、世界绿色设计组织石定寰，世界绿色设计组织执委August Keder
                        ，世界绿色设计组织学术委员会主席辛向阳，全球生态可持续发展联盟轮值主席、全球气候创新与治理研究中心研究员、跨国公司碳中和50人论坛常务理事车巍，俄罗斯工程院院士、中国科协海智专家马昕，中国地质大学(武汉)可持续能源实验室主任、国家“千人计划”特聘教授、国家“特聘专家”程寒松，国际能源机构（IEA）能源效率政策分析师Conor
                        Gask ，广东合一新材料研究院董事长王伟，北京中创碳投科技有限公司总经理、国家发改委CDM项目审核理事会专家、联合国开发计划署（UNDP）专家库成员唐人虎，环境标准联盟执行主任Justing
                        Wilkes，奈琦尔董事长姜明和来自意大利、法国、德国、比利时、美国等代表出席了会议。论坛由世界绿色设计组织（比利时）北京代表处国际合作总监于爱华主持。<br><br>
                        论坛内容从全球可持续发展目标到国家绿色发展战略，从减碳政策法规解读到监管措施和碳评估方法应用，从绿色建筑、氢储能、生物基、纳米铜、新型固态电池等新技术的前景交流到绿色设计驱动创新的市场化应对，从丹麦绿色故事到中国的30、60蓝图，各位与会专家为会议主题和时代需要带来了丰富的信息。
                    </div>

                    <br>

                    <div class="dsc-title">开幕致辞</div>
                    <div class="dsc-intro">
                        世界绿色设计组织执委August
                        Keder在致辞中强调绿色设计是绿色发展的源头，是实现零碳目标的手段，世界绿色设计论坛多年来一直推动绿色产业高质量发展，搭建国际间对话交流平台，希望给大家启迪，携手推动中欧间绿色可持续发展与合作。
                    </div>

                    <br>

                    <div class="dsc-title">主题演讲</div>
                    <div class="dsc-intro">
                        全球生态可持续发展联盟轮值主席、全球气候创新与治理研究中心研究院、跨国公司碳中和50人论坛常务理事车巍作《利用全球最佳绿色生态设计
                        助力中国实现“碳中和”》演讲，对丹麦能源童话、联合国“人人享有可持续能源”与区域能源系统、源于丹麦的生态设计——主动式建筑进行详细介绍并展开污水处理、低碳数据中心热回收等案例分享，希望给与大家启迪，共同助力碳中和。<br>
                        俄罗斯工程院外籍院士、中国科协海智专家马昕以“中国电池和氢能绿色硬科技应用突围之路”为题，做了主旨报告，就硬科技定义、双碳的真实需求、固态电池中新型负极应用、提高固态电池性能的科学方法等进行了精彩的阐述。<br><br>
                        中国地质大学(武汉)可持续能源实验室主任、国家“千人计划”特聘教授、国家“特聘专家”程寒松详细介绍了有机液体储氢技术及其应用场景，与国外同类技术相比，氢阳能源有机液体储氢技术具有效率高，成本低，易于规模化，脱氢温度低，脱氢系统体积小等特点，既可用于固定场景，也可用于动力系统，在规模化储能、工业用氢和车载动力等领域有着广泛的应用前景。<br><br>
                        国际能源机构（IEA）能源效率政策分析师Conor
                        Gask指出，面对全球能源危机，可通过增加能源效率、使用可再生能源、自动化集成开发、热泵等技术手段，优先部署清洁能源，助力2030年零碳建筑的达成。<br><br>
                        北京中创碳投科技有限公司总经理、国家发改委CDM项目审核理事会专家、联合国开发计划署（UNDP）专家库成员唐人虎分享到，碳中和时代，企业开展碳中和的指导要求逐步出台；碳中和愿景下企业面临挑战与发展机遇。企业实施碳中和面临企业碳数据基础薄弱、缺少专职的管理人才、缺少有计划的减碳行动方案和国内碳管理标准缺失等问题亟待解决。最后，他指出中小企业实现碳中和目标的行动指南，积极开展技术和能力培训；利用数字化工具赋能企业碳管理。<br>
                        广东合一新材料研究院董事长王伟介绍了新材料纳米铜的产生及特性，分享了纳米铜在野战/医疗；加速酒的淳化等方面的应用场景。<br>
                        奈琦尔董事长姜明从应用研发、成果转化、服务三方面重点介绍了奈琦尔及其发展历史，重点阐述了奈琦尔海洋材料具有可再生可持续、环保可降解的特性，及产品在军用、生物医用、母婴针纺、运动健康、医疗健康、抗菌健康护理、阻燃防护、海洋美妆等8个方面的具体应用。<br>
                        环境标准联盟ECOS执行主任（比利时）Justing
                        Wilkes介绍了机构通过制定标准、减少碳足迹、提高能源效率、材料可溯源等手段，重点阐述了生态设计如何促进纺织、电池、供暖及建筑业可持续发展。
                    </div>

                    <br>

                    <div class="dsc-title">项目路演</div>
                    <div class="dsc-intro">
                        山高新能源集团、挪威polybo公司分别进行了项目路演，介绍了企业及重点项目技术，从光伏新能源应用及节能建筑减排赋能产业转型，助力实现“双碳”目标。
                    </div>

                    <br>

                    <div class="dsc-title">闭幕致辞</div>
                    <div class="dsc-intro">
                        国务院原参事、世界绿色设计组织石定寰做闭幕致辞。他指出，论坛各位专家分享了绿色设计推动绿色发展各个领域的成果，为未来绿色发展增加创新活力和动力。加强国际合作，坚持不断创新，持续推动经济绿色转型与发展。同时，推动建立适合绿色低碳循环经济体系，推动各级政府、企业重视绿色设计，通过绿色设计源头推动产业创新。<br>
                        2022年世界绿色设计论坛洽在中国疫情防控措施优化、国际合作环境迎向春天复苏的季节召开。 期待来年的世界绿色设计论坛与各界联手，一同推动全球绿色设计的引领和担当。
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import { Media } from "@/api/requests.js";
import funs from '@/utils/index.js'

export default {
    name: "Dynamicinfo",
    props: ['tabDatas'],
    data() {
        return {
            dynamicinfoDatas: [...this.tabDatas],
            id: this.$route.query.id,
        };
    },
    created() {
        this.getDynamicinfoData();
        // console.log(this.externalLink); 
    },
    mounted() {
        this.getDynamicinfoData()
    },
    methods: {
        getDynamicinfoData(p = this.$store.state.lang.version) {
            const id = this.$route.query.id;
            Media({ moduleType: '1', status: '1', version: p, id: id }).then(res => {
                if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
                    this.dynamicinfoDatas = res.data.rows
                }
            })
        },
    },
    watch: {
        "$store.state.lang.version": {
            handler() {
                funs(this.getDynamicinfoData(), this.$store.state.lang.version)
            }
        },
        '$route.query.id': {
            handler(newId) {
                this.id = newId;
                this.getDynamicinfoData(newId);
            },
            immediate: true
        },
    }
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

.dsc-title {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 30px;
    color: rgba(51, 51, 51, 1);
}

.dsc-intro {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 30px;
    color: rgba(51, 51, 51, 1);
    text-align: justify;
}
</style>
