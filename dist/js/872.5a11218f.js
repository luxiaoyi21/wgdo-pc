"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[872,986,578,552,902,671],{3008:function(t,a,s){s.d(a,{A:function(){return l}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[t._m(0),a("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(s){return a("el-breadcrumb-item",{attrs:{to:{path:s.path}}},[a("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(s.name)+" ")])})),1)],1)},i=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:s(8605)}})])}],n={name:"Breadcrumb",props:["urlData"],mounted(){}},r=n,o=s(1656),c=(0,o.A)(r,e,i,!1,null,"0b00c7bb",null),l=c.exports},62:function(t,a,s){s.d(a,{A:function(){return l}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"bgs"}),a("div",{staticClass:"f"},[a("div",{staticClass:"hTop"},[t._m(0),a("div",{staticClass:"right"},[a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo scarchI"}),a("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(a){t.searchInp=a},expression:"searchInp"}})],1),a("div",{staticClass:"rightList"},[a("div",{staticClass:"login"},[a("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),a("div",{staticClass:"loginO"}),a("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),a("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[a("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(1)])])])]),a("div",{staticClass:"hBottom",class:"en"===t.$store.state.lang.isEn?"isBottom":"hBottom"},[a("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),a("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),a("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),a("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),a("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),a("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),a("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),a("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},i=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("div",{staticClass:"logo"},[a("img",{staticClass:"logoImg",attrs:{src:"https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3"}}),a("div",{staticClass:"logoDsc"},[a("div",{staticClass:"logoDscTop"},[t._v("世界绿色设计组织")]),a("div",{staticClass:"logoDscBot"},[t._v("World Green Design Organization")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"langO",staticStyle:{display:"none"}},[a("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],n={name:"HeaderNav",data(){let t="",a=["关于我们","会议活动","媒体中心","学术研究","公益项目","国际绿奖","WGDO绿研院","绿叶标"],s=!0,e="En";return{searchInp:t,bannerNavList:a,isText1Visible:s,lang:e}},mounted(){this.isText1Visible=!1},methods:{changeLang(){this.isText1Visible=!this.isText1Visible,1==this.isText1Visible?this.lang="中文":this.lang="En",this.$store.commit("getLocalLang",this.lang),this.$store.commit("getVersion")}}},r=n,o=s(1656),c=(0,o.A)(r,e,i,!1,null,"2e0058fd",null),l=c.exports},7085:function(t,a,s){s.d(a,{A:function(){return u}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("el-tabs",{staticClass:"ets",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[t._l(t.tabName,(function(s){return[a("el-tab-pane",{staticClass:"etp",attrs:{label:s,name:s}},[a("Breadcrumb",{attrs:{urlData:t.urlData}})],1)]}))],2)],1)},i=[],n=(s(4114),s(3008)),r=s(2964),o=(s(1981),{components:{Breadcrumb:n.A},props:["tabName"],data(){return{activeName:"",tabDatas:[],routesData:[],currentRoute:[],urlData:[],aboutmap:{"组织介绍":"1","组织架构":"2","重要人物":"3","联系我们":"4"},meetmap:{"活动预告":"1","正在进行":"2","历届回顾":"3","活动详情":"4"},mediamap:{"组织动态":"1","论坛视频":"2","媒体报告":"3","动态详情":"4","报告详情":"5"},researchmap:{"绿色设计报告":"1","绿色设计国际标准":"2","绿色设计国际实验室":"3","共享资源":"4","绿色设计报告详情":"5"},projectmap:{"绿叶之家":"1","绿丝带":"2","绿丝带物资到货记录":"3","绿丝带行动捐赠光荣榜":"5","可信供方清单":"4","抗疫宣传":"7","联系方式":"6"},prizemap:{"绿色设计国际大奖":"1","绿色设计国际贡献奖":"3","评定规则":"2","获奖个人":"5","获奖机构":"5"},Mapping:{"机构简介":"1","分支拓建":"2","品牌服务":"3","绿色政策":"4","绿色设计培训":"5"},Map:[]}},mounted(){this.routesData=this.$router.options.routes,this.currentRoute=this.$router.history.current,this.routesData.forEach((t=>{t.name===this.currentRoute.name&&this.urlData.push(t)}))},methods:{handleClick(t,a){this.urlData.length>1&&this.urlData.pop();let s=t.$options.propsData.name;this.urlData.push({name:s});for(const e in this.Map)if(e===this.urlData[1].name)return this.getHomeAllTitleData(this.Map[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.aboutmap)if(e===this.urlData[1].name)return this.getAboutusData(this.aboutmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.meetmap)if(e===this.urlData[1].name)return this.getMeetData(this.meetmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.mediamap)if(e===this.urlData[1].name)return this.getMediaData(this.mediamap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.researchmap)if(e===this.urlData[1].name)return this.getResearchData(this.researchmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.projectmap)if(e===this.urlData[1].name)return this.getProjectData(this.projectmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.prizemap)if(e===this.urlData[1].name)return this.getPrizeData(this.prizemap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.Mapping)if(e===this.urlData[1].name)return this.getWgdoData(this.Mapping[e]),void this.$emit("tabclickDatas",this.urlData[1].name)},getAboutusData(t){(0,r.aJ)({moduleType:t,status:"1"}).then((t=>{console.log(t.data.rows),this.tabDatas=t.data.rows,this.$emit("Aboutus",this.tabDatas)}))},getMeetData(t){(0,r.wk)({moduleType:t,status:"1"}).then((t=>{console.log(t.data.rows),this.tabDatas=t.data.rows,this.$emit("Meet",this.tabDatas)}))},getMediaData(t){(0,r.$U)({moduleType:t,status:"1"}).then((t=>{console.log(t.data.rows),this.tabDatas=t.data.rows,this.$emit("Media",this.tabDatas)}))},getResearchData(t){(0,r.is)({moduleType:t,status:"1"}).then((t=>{console.log(t.data.rows),this.tabDatas=t.data.rows,this.$emit("Research",this.tabDatas)}))},getProjectData(t){(0,r.MM)({moduleType:t,status:"1"}).then((t=>{console.log(t.data.rows),this.tabDatas=t.data.rows,this.$emit("Project",this.tabDatas)}))},getPrizeData(t){(0,r.zE)({moduleType:t,status:"1"}).then((t=>{console.log(t.data.rows),this.tabDatas=t.data.rows,this.$emit("Prize",this.tabDatas)}))},getWgdoData(t){(0,r.Ev)({moduleType:t,status:"1"}).then((t=>{console.log(t.data.rows),this.tabDatas=t.data.rows,this.$emit("WgdoData",this.tabDatas)}))},getHomeAllTitleData(t,a){(0,r.rk)({parentId:a}).then((t=>{console.log(t.data.rows),this.tabDatas=t.data.rows,this.$emit("getHomeAllTitle",this.tabDatas)}))}}}),c=o,l=s(1656),d=(0,l.A)(c,e,i,!1,null,"9ff45468",null),u=d.exports},1986:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v("组织动态")]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line"}),a("div",{staticClass:"dynamic-dsc"},t._l(t.dynamicDatas,(function(s){return a("a",{key:s.mediacenterId,staticClass:"dynamic-content",attrs:{href:s.externalLink}},[a("div",{staticClass:"dynamic-time"},[a("div",{staticClass:"dynamic-time-top"},[t._v(t._s(s.timer))]),a("div",{staticClass:"dynamic-time-buttom"},[t._v(t._s(s.year))])]),t._m(0,!0),a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dynamic-dscall-top"},[t._v(t._s(s.title))]),a("div",{staticClass:"dynamic-dscall-buttom"},[t._v(t._s(s.intro))])])])})),0),a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])])])])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"dynamic-blank"},[a("div",{staticClass:"dynamic-blankin"})])}],n=s(2964),r=s(1981),o={name:"Dynamic",props:["tabDatas"],data(){return{dynamicDatas:[...this.tabDatas],currentPage:1,totalItems:0,pageSize:10,time:[],day:[]}},mounted(){this.getMediaData()},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.dynamicDatas.slice(t,a)}},methods:{getMediaData(t=this.$store.state.lang.version){(0,n.$U)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.dynamicDatas=t.data.rows.map((t=>{const a=this.gettime(t.releaseTime);return{...t,year:a.year,timer:a.timer}})),this.totalItems=t.data.rows.length,console.log(this.dynamicDatas))}))},gettime(t){const a=new Date(t),s=a.getFullYear(),e=("0"+(a.getMonth()+1)).slice(-2),i=("0"+a.getDate()).slice(-2);return{year:s,timer:e+"-"+i}},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getMediaData(),this.$store.state.lang.version)}}}},c=o,l=s(1656),d=(0,l.A)(c,e,i,!1,null,"6c990e2a",null),u=d.exports},4578:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var e=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v("2022世界绿设计论坛成功举办")]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-browser"},[t._v("浏览次数：1214")]),a("div",{staticClass:"info-create"},[t._v("发布时间：2018-05-18 08:27:46")])]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},[a("div",{staticClass:"dsc-intro"},[t._v(" 正如联合国环境规划署执行主任英格.安德森在COP27埃及峰会前所言：“到2030年减碳45%控制升温1.5度以内”的全人类目标已经迫在眉睫，且很不足够！没有人可置身事外；我们要更强有力的国家承诺，更强有力的实施方案，来减少排放。倘若不处理损失损害的问题，公正便绝无可能。每年1000亿美元的融资承诺，现在必须兑现。G20必须在节能减排方面起到带头作用。"),a("br"),t._v(" ----气候变化问题并非出现在地平线，并非刚来到我们家门口，它已经进到我们的家中，我们必须紧急采取相应行动，并加速推进。从现在开始"),a("br"),a("br"),t._v(" 在此大背景下，维护全球绿色、和平、可持续发展成为当下世界各国各部门各行业领域的共同呼声。减碳、减排，维护地球绿色生态平衡成为各国政府、机构、企业和公民个人的使命担当。从《欧洲绿色新政》和高密度出台的一揽子与之配套的包括强制性碳关税在内的法律法规的出台，再到中国双碳目标战略和二十大“绿色发展”的驱使下，九大部委成立“双碳领导小组”，从中央到地方，都在以前所未有的力度贯彻实施“全面节约战略，发展绿色低碳产业，倡导绿色消费，统筹产业结构调整、污染治理、生态保护、应对气候变化，加快发展方式绿色转型”策略。"),a("br"),a("br"),t._v(" “世界绿色设计论坛”旨在全球范围内倡导和传播“绿色设计”理念，最终实现人与自然融合共生。自2011年起，已经连续在世界各地（瑞士卢加诺、比利时布鲁塞尔、意大利米兰、德国弗莱堡、坦桑尼亚达累斯萨拉姆、韩国首尔、中国扬州等）成功举办论坛，在全球范围内影响政府与行业企业关注能源消耗、环境恶化等诸多影响人类生存和发展的日益严峻的挑战，倡导各行业领域应用“绿色设计”的理念和方法论，把“绿色设计”作为环境治理的源头手段，通过信息、技术、材料、项目、资本、人才的创新设计规划，引导人类现代社会在生产方式、生活方式、消费方式的变革。"),a("br"),a("br"),t._v(" 12月15日下午，2022世界绿色设计论坛成功召开，因疫情防控要求，论坛采用线上方式进行并同步直播。本次论坛在北京市科学技术协会、工信部国和中心指导下，由北京光华设计发展基金会主办，中挪绿色创新中心协办，世界绿色设计组织绿色设计研究院承办，得到中国国际贸易学会自贸区港专委会、北京绿色设计促进会、瑞士绿建协会、意大利亚得里亚华商会、韩国绿色设计协会、光华产业投资基金、华夏银行、中创碳投、索比咨询、新华社中国名牌、美啊、凤凰龙行等机构支持。"),a("br"),a("br"),t._v(" 论坛围绕“绿色设计赋能产业转型”主题，邀请国内外专家、企业家代表探讨在当下充满挑战的国际环境中，如何以绿色设计手段加速我国双碳目标的实现路径，探索产业绿色化转型的经济增长极的关键点，积极推动中国及全球的可持续发展。"),a("br"),a("br"),t._v(" 国务院原参事、世界绿色设计组织石定寰，世界绿色设计组织执委August Keder ，世界绿色设计组织学术委员会主席辛向阳，全球生态可持续发展联盟轮值主席、全球气候创新与治理研究中心研究员、跨国公司碳中和50人论坛常务理事车巍，俄罗斯工程院院士、中国科协海智专家马昕，中国地质大学(武汉)可持续能源实验室主任、国家“千人计划”特聘教授、国家“特聘专家”程寒松，国际能源机构（IEA）能源效率政策分析师Conor Gask ，广东合一新材料研究院董事长王伟，北京中创碳投科技有限公司总经理、国家发改委CDM项目审核理事会专家、联合国开发计划署（UNDP）专家库成员唐人虎，环境标准联盟执行主任Justing Wilkes，奈琦尔董事长姜明和来自意大利、法国、德国、比利时、美国等代表出席了会议。论坛由世界绿色设计组织（比利时）北京代表处国际合作总监于爱华主持。"),a("br"),a("br"),t._v(" 论坛内容从全球可持续发展目标到国家绿色发展战略，从减碳政策法规解读到监管措施和碳评估方法应用，从绿色建筑、氢储能、生物基、纳米铜、新型固态电池等新技术的前景交流到绿色设计驱动创新的市场化应对，从丹麦绿色故事到中国的30、60蓝图，各位与会专家为会议主题和时代需要带来了丰富的信息。 ")]),a("br"),a("div",{staticClass:"dsc-title"},[t._v("开幕致辞")]),a("div",{staticClass:"dsc-intro"},[t._v(" 世界绿色设计组织执委August Keder在致辞中强调绿色设计是绿色发展的源头，是实现零碳目标的手段，世界绿色设计论坛多年来一直推动绿色产业高质量发展，搭建国际间对话交流平台，希望给大家启迪，携手推动中欧间绿色可持续发展与合作。 ")]),a("br"),a("div",{staticClass:"dsc-title"},[t._v("主题演讲")]),a("div",{staticClass:"dsc-intro"},[t._v(" 全球生态可持续发展联盟轮值主席、全球气候创新与治理研究中心研究院、跨国公司碳中和50人论坛常务理事车巍作《利用全球最佳绿色生态设计 助力中国实现“碳中和”》演讲，对丹麦能源童话、联合国“人人享有可持续能源”与区域能源系统、源于丹麦的生态设计——主动式建筑进行详细介绍并展开污水处理、低碳数据中心热回收等案例分享，希望给与大家启迪，共同助力碳中和。"),a("br"),t._v(" 俄罗斯工程院外籍院士、中国科协海智专家马昕以“中国电池和氢能绿色硬科技应用突围之路”为题，做了主旨报告，就硬科技定义、双碳的真实需求、固态电池中新型负极应用、提高固态电池性能的科学方法等进行了精彩的阐述。"),a("br"),a("br"),t._v(" 中国地质大学(武汉)可持续能源实验室主任、国家“千人计划”特聘教授、国家“特聘专家”程寒松详细介绍了有机液体储氢技术及其应用场景，与国外同类技术相比，氢阳能源有机液体储氢技术具有效率高，成本低，易于规模化，脱氢温度低，脱氢系统体积小等特点，既可用于固定场景，也可用于动力系统，在规模化储能、工业用氢和车载动力等领域有着广泛的应用前景。"),a("br"),a("br"),t._v(" 国际能源机构（IEA）能源效率政策分析师Conor Gask指出，面对全球能源危机，可通过增加能源效率、使用可再生能源、自动化集成开发、热泵等技术手段，优先部署清洁能源，助力2030年零碳建筑的达成。"),a("br"),a("br"),t._v(" 北京中创碳投科技有限公司总经理、国家发改委CDM项目审核理事会专家、联合国开发计划署（UNDP）专家库成员唐人虎分享到，碳中和时代，企业开展碳中和的指导要求逐步出台；碳中和愿景下企业面临挑战与发展机遇。企业实施碳中和面临企业碳数据基础薄弱、缺少专职的管理人才、缺少有计划的减碳行动方案和国内碳管理标准缺失等问题亟待解决。最后，他指出中小企业实现碳中和目标的行动指南，积极开展技术和能力培训；利用数字化工具赋能企业碳管理。"),a("br"),t._v(" 广东合一新材料研究院董事长王伟介绍了新材料纳米铜的产生及特性，分享了纳米铜在野战/医疗；加速酒的淳化等方面的应用场景。"),a("br"),t._v(" 奈琦尔董事长姜明从应用研发、成果转化、服务三方面重点介绍了奈琦尔及其发展历史，重点阐述了奈琦尔海洋材料具有可再生可持续、环保可降解的特性，及产品在军用、生物医用、母婴针纺、运动健康、医疗健康、抗菌健康护理、阻燃防护、海洋美妆等8个方面的具体应用。"),a("br"),t._v(" 环境标准联盟ECOS执行主任（比利时）Justing Wilkes介绍了机构通过制定标准、减少碳足迹、提高能源效率、材料可溯源等手段，重点阐述了生态设计如何促进纺织、电池、供暖及建筑业可持续发展。 ")]),a("br"),a("div",{staticClass:"dsc-title"},[t._v("项目路演")]),a("div",{staticClass:"dsc-intro"},[t._v(" 山高新能源集团、挪威polybo公司分别进行了项目路演，介绍了企业及重点项目技术，从光伏新能源应用及节能建筑减排赋能产业转型，助力实现“双碳”目标。 ")]),a("br"),a("div",{staticClass:"dsc-title"},[t._v("闭幕致辞")]),a("div",{staticClass:"dsc-intro"},[t._v(" 国务院原参事、世界绿色设计组织石定寰做闭幕致辞。他指出，论坛各位专家分享了绿色设计推动绿色发展各个领域的成果，为未来绿色发展增加创新活力和动力。加强国际合作，坚持不断创新，持续推动经济绿色转型与发展。同时，推动建立适合绿色低碳循环经济体系，推动各级政府、企业重视绿色设计，通过绿色设计源头推动产业创新。"),a("br"),t._v(" 2022年世界绿色设计论坛洽在中国疫情防控措施优化、国际合作环境迎向春天复苏的季节召开。 期待来年的世界绿色设计论坛与各界联手，一同推动全球绿色设计的引领和担当。 ")])])])])])}],n=s(2964),r=s(1981),o={name:"Dynamicinfo",props:["tabDatas"],data(){return{dynamicinfoDatas:[...this.tabDatas]}},mounted(){this.getDynamicinfoData()},methods:{getDynamicinfoData(t=this.$store.state.lang.version){(0,n.$U)({moduleType:"4",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.saveDatas=t.data.rows,console.log(this.saveDatas))}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getDynamicinfoData(),this.$store.state.lang.version)}}}},c=o,l=s(1656),d=(0,l.A)(c,e,i,!1,null,"46a127ac",null),u=d.exports},2872:function(t,a,s){s.r(a),s.d(a,{default:function(){return b}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("Headers"),a("div",{staticClass:"content"},[a("TabControl",{attrs:{tabName:t.tabName},on:{getHomeAllTitle:t.getMediaData,tabclickDatas:t.getTabName}}),"组织动态"===t.tabclickDatas?a("Dynamic",{attrs:{tabDatas:t.tabDatas}}):t._e(),"动态详情"===t.tabclickDatas?a("Dynamicinfo",{attrs:{tabDatas:t.tabDatas}}):t._e(),"论坛视频"===t.tabclickDatas?a("Video",{attrs:{tabDatas:t.tabDatas}}):t._e(),"媒体报告"===t.tabclickDatas?a("Report",{attrs:{tabDatas:t.tabDatas}}):t._e(),"报告详情"===t.tabclickDatas?a("Reportinfo",{attrs:{tabDatas:t.tabDatas}}):t._e()],1),a("div",{staticClass:"foot"},[a("Footers")],1)],1)},i=[],n=s(62),r=s(7085),o=s(7329),c=(s(2964),s(1986)),l=s(4578),d=s(552),u=s(2902),h=s(671),m=s(1981),v={name:"Media",components:{Headers:n.A,TabControl:r.A,Footers:o.A,Dynamic:c["default"],Video:d["default"],Report:u["default"],Dynamicinfo:l["default"],Reportinfo:h["default"]},props:["urlData"],data(){return{tabName:["组织动态","论坛视频","媒体报告"],MediaDatas:[],tabDatas:[],tabclickDatas:"组织动态",name:[]}},mounted(){this.getMediaData("组织动态")},methods:{async getMediaData(t=this.$store.state.lang.version){try{this.tabDatas=response.data,console.log(this.tabDatas)}catch{}},getTabName(t){this.tabclickDatas=t,console.log(this.tabclickDatas)}},watch:{"$store.state.lang.version":{handler(){(0,m.A)(this.getMediaData(),this.$store.state.lang.version)}}}},g=v,p=s(1656),D=(0,p.A)(g,e,i,!1,null,"13573ea8",null),b=D.exports},2902:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v("媒体报道")]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.reportDatas,(function(s){return a("a",{key:s.mediacenterId,staticClass:"dynamic-content",attrs:{href:s.externalLink}},[a("div",{staticClass:"dynamic-time"},[a("div",{staticClass:"dynamic-time-top"},[t._v(t._s(s.timer))]),a("div",{staticClass:"dynamic-time-buttom"},[t._v(t._s(s.year))])]),t._m(0,!0),a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dynamic-dscall-top"},[t._v(t._s(s.title))]),a("div",{staticClass:"dynamic-dscall-buttom"},[t._v(t._s(s.intro))])])])})),0)])])])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"dynamic-blank"},[a("div",{staticClass:"dynamic-blankin"})])}],n=s(2964),r=s(1981),o={name:"Report",props:["tabDatas"],data(){return{reportDatas:[...this.tabDatas]}},mounted(){this.getReportData()},methods:{getReportData(t=this.$store.state.lang.version){(0,n.$U)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.reportDatas=t.data.rows.map((t=>{const a=this.gettime(t.releaseTime);return{...t,year:a.year,timer:a.timer}})),console.log(this.reportDatas))}))},gettime(t){const a=new Date(t),s=a.getFullYear(),e=("0"+(a.getMonth()+1)).slice(-2),i=("0"+a.getDate()).slice(-2);return{year:s,timer:e+"-"+i}}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getReportData(),this.$store.state.lang.version)}}}},c=o,l=s(1656),d=(0,l.A)(c,e,i,!1,null,"03fa8fd7",null),u=d.exports},671:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var e=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v("中华人民共和国科学技术部新闻报道")]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-browser"},[t._v("浏览次数：1214")]),a("div",{staticClass:"info-create"},[t._v("发布时间：2018-05-18 08:27:46")])]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},[a("img",{attrs:{src:"https://img.js.design/assets/img/664c585ee95bdb802e70fe67.png",alt:""}})])])])])}],n=s(2964),r=s(1981),o={name:"Reportinfo",props:["tabDatas"],data(){return{getReportinfoData:[...this.tabDatas]}},mounted(){this.getReportinfoData()},methods:{getReportinfoData(t=this.$store.state.lang.version){(0,n.$U)({moduleType:"5",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.saveDatas=t.data.rows,console.log(this.saveDatas))}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getReportinfoData(),this.$store.state.lang.version)}}}},c=o,l=s(1656),d=(0,l.A)(c,e,i,!1,null,"d7ca49ce",null),u=d.exports},552:function(t,a,s){s.r(a),s.d(a,{default:function(){return u}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v("论坛视频")]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.videoDatas,(function(s){return a("div",{key:s.mediacenterId,staticClass:"doing-in"},[a("div",{staticClass:"doing-img"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+s.cover,alt:""}})]),a("p",{staticClass:"doing-intro"},[t._v(t._s(s.title))])])})),0),a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.currentPage},on:{"update:currentPage":function(a){t.currentPage=a},"update:current-page":function(a){t.currentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])])])])},i=[],n=s(2964),r=s(1981),o={name:"Video",props:["tabDatas"],data(){return{videoDatas:[...this.tabDatas],currentPage:1,totalItems:0,pageSize:9}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.videoDatas.slice(t,a)}},mounted(){this.getVideoData()},methods:{getVideoData(t=this.$store.state.lang.version){(0,n.$U)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.videoDatas=t.data.rows,this.totalItems=t.data.rows.length,console.log(this.videoDatas))}))},handlePageChange(t){this.currentPage=t}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getVideoData(),this.$store.state.lang.version)}}}},c=o,l=s(1656),d=(0,l.A)(c,e,i,!1,null,"c78c5c5c",null),u=d.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=872.5a11218f.js.map