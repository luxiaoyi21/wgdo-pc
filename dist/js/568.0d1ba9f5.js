"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[568,752,51,937,53,206],{3008:function(t,a,s){s.d(a,{A:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[t._m(0),a("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(s){return a("el-breadcrumb-item",{attrs:{to:{path:s.path}}},[a("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(s.name)+" ")])})),1)],1)},i=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:s(8605)}})])}],r={name:"Breadcrumb",props:["urlData"],mounted(){}},n=r,o=s(1656),l=(0,o.A)(n,e,i,!1,null,"0b00c7bb",null),c=l.exports},4927:function(t,a,s){s.d(a,{A:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"bgs"}),a("div",{staticClass:"f"},[a("div",{staticClass:"hTop"},[t._m(0),a("div",{staticClass:"right"},[a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo scarchI"}),a("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(a){t.searchInp=a},expression:"searchInp"}})],1),a("div",{staticClass:"rightList"},[a("div",{staticClass:"login"},[a("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),a("div",{staticClass:"loginO"}),a("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),a("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[a("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(1)])])])]),a("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},i=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("div",{staticClass:"logo"},[a("img",{staticClass:"logoImg",attrs:{src:"https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3"}}),a("div",{staticClass:"logoDsc"},[a("div",{staticClass:"logoDscTop"},[t._v("世界绿色设计组织")]),a("div",{staticClass:"logoDscBot"},[t._v("World Green Design Organization")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"langO",staticStyle:{display:"none"}},[a("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],r={name:"HeaderNav",data(){let t="",a="中文";return{searchInp:t,lang:a}},created(){this.lang=this.$store.state.lang.langs,"中文"===this.$store.state.lang.langs?(this.$refs.changeLangue.classList.add("enBottom"),this.$refs.changeLanguea.classList.add("ens")):(this.$refs.changeLangue.classList.add("zhBottom"),this.$refs.changeLanguea.classList.add("zhs"))},mounted(){this.lang=this.$store.state.lang.langs},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},n=r,o=s(1656),l=(0,o.A)(n,e,i,!1,null,"214f4e0d",null),c=l.exports},1044:function(t,a,s){s.d(a,{A:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("el-tabs",{staticClass:"ets",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[t._l(t.tabName,(function(s,e){return[a("el-tab-pane",{key:e,staticClass:"etp",attrs:{label:s,name:s}},[a("Breadcrumb",{attrs:{urlData:t.urlData}})],1)]}))],2)],1)},i=[],r=(s(4114),s(3008)),n=s(2964),o=(s(1981),{components:{Breadcrumb:r.A},props:["tabName"],data(){return{activeName:"",tabDatas:[],routesData:[],currentRoute:[],urlData:[],aboutmap:{"组织介绍":"1","组织架构":"2","重要人物":"3","联系我们":"4"},meetmap:{"活动预告":"1","正在进行":"2","历届回顾":"3","活动详情":"4"},mediamap:{"组织动态":"1","论坛视频":"2","媒体报告":"3","动态详情":"4","报告详情":"5"},researchmap:{"绿色设计报告":"1","绿色设计国际标准":"2","绿色设计国际实验室":"3","共享资源":"4","绿色设计报告详情":"5"},projectmap:{"绿叶之家":"1","绿丝带":"2","绿丝带物资到货记录":"3","绿丝带行动捐赠光荣榜":"5","可信供方清单":"4","抗疫宣传":"7","联系方式":"6"},prizemap:{"绿色设计国际大奖":"1","绿色设计国际贡献奖":"3","评定规则":"2","获奖个人":"5","获奖机构":"5"},Mapping:{"机构简介":"1","分支拓建":"2","品牌服务":"3","绿色政策":"4","绿色设计培训":"5"},Map:{...this.aboutmap,...this.meetmap,...this.mediamap,...this.researchmap,...this.projectmap,...this.prizemap,...this.Mapping}}},mounted(){this.activeName=this.tabName[0],this.routesData=this.$router.options.routes,this.currentRoute=this.$router.history.current,this.routesData.forEach((t=>{t.name===this.currentRoute.name&&this.urlData.push(t)}))},methods:{handleClick(t,a){this.urlData.length>1&&this.urlData.pop();let s=t.$options.propsData.name;this.urlData.push({name:s});for(const e in this.Map)if(e===this.urlData[1].name)return this.getHomeAllTitleData(this.Map[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.aboutmap)if(e===this.urlData[1].name)return this.getAboutusData(this.aboutmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.meetmap)if(e===this.urlData[1].name)return this.getMeetData(this.meetmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.mediamap)if(e===this.urlData[1].name)return this.getMediaData(this.mediamap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.researchmap)if(e===this.urlData[1].name)return this.getResearchData(this.researchmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.projectmap)if(e===this.urlData[1].name)return this.getProjectData(this.projectmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.prizemap)if(e===this.urlData[1].name)return this.getPrizeData(this.prizemap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.Mapping)if(e===this.urlData[1].name)return this.getWgdoData(this.Mapping[e]),void this.$emit("tabclickDatas",this.urlData[1].name)},getAboutusData(t){(0,n.aJ)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Aboutus",this.tabDatas)}))},getMeetData(t){(0,n.wk)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Meet",this.tabDatas)}))},getMediaData(t){(0,n.$U)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Media",this.tabDatas)}))},getResearchData(t){(0,n.is)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Research",this.tabDatas)}))},getProjectData(t){(0,n.MM)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Project",this.tabDatas)}))},getPrizeData(t){(0,n.zE)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Prize",this.tabDatas)}))},getWgdoData(t){(0,n.Ev)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("WgdoData",this.tabDatas)}))},getHomeAllTitleData(t){(0,n.rk)({parentId:t}).then((t=>{this.tabDatas=t.data.rows,this.$emit("getHomeAllTitle",this.tabDatas)}))}}}),l=o,c=s(1656),h=(0,c.A)(l,e,i,!1,null,"4ab3f9a1",null),d=h.exports},51:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("wgdo.branch")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticStyle:{"margin-bottom":"50px"}},t._l(t.branchDatas,(function(s,e){return a("div",{key:s.greeninstituteId},[a("div",{staticClass:"intro"},[a("div",{ref:"left1",refInFor:!0,staticClass:"left"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+s.cover}})]),a("div",{staticClass:"right"},[a("div",{ref:"right1",refInFor:!0,staticClass:"right-top"},[a("p",{staticClass:"ch"},[t._v(t._s(s.title))])]),a("div",{staticClass:"right-bottom"},[t._v(" "+t._s(s.intro)+" ")])])]),e!==t.branchDatas.length-1?a("div",{staticClass:"dsc-line",staticStyle:{margin:"50px 0"}}):t._e()])})),0)])])])},i=[],r=s(2964),n=s(1981),o={name:"Branch",props:["tabDatas"],data(){return{branchDatas:[...this.tabDatas]}},mounted(){this.getBranchData()},methods:{getBranchData(t=this.$store.state.lang.version){(0,r.Ev)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.branchDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,n.A)(this.getBranchData(),this.$store.state.lang.version)}}}},l=o,c=s(1656),h=(0,c.A)(l,e,i,!1,null,"45282634",null),d=h.exports},6568:function(t,a,s){s.r(a),s.d(a,{default:function(){return f}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("Headers"),a("div",{staticClass:"content"},[a("TabControl",{attrs:{tabName:t.tabName},on:{getHomeAllTitle:t.getWgdoData,tabclickDatas:t.getTabName}}),"机构简介"===t.tabclickDatas?a("Intro",{attrs:{tabDatas:t.tabDatas}}):t._e(),"分支拓建"===t.tabclickDatas?a("Branch",{attrs:{tabDatas:t.tabDatas}}):t._e(),"品牌服务"===t.tabclickDatas?a("Service",{attrs:{tabDatas:t.tabDatas}}):t._e(),"绿色设计培训"===t.tabclickDatas?a("Train",{attrs:{tabDatas:t.tabDatas}}):t._e(),"绿色政策"===t.tabclickDatas?a("Policy",{attrs:{tabDatas:t.tabDatas}}):t._e()],1),a("div",{staticClass:"foot"},[a("Footers")],1)],1)},i=[],r=s(4927),n=s(1044),o=s(7329),l=s(2964),c=s(752),h=s(51),d=s(5937),u=s(4053),g=s(5206),m=s(1981),v={name:"Wgdo",components:{Headers:r.A,TabControl:n.A,Footers:o.A,Intro:c["default"],Branch:h["default"],Service:d["default"],Train:u["default"],Policy:g["default"]},props:["urlData"],data(){return{tabName:[],wgdoDatas:[],tabDatas:[],tabclickDatas:"机构简介",name:[]}},mounted(){},created(){this.getWgdoData("机构简介"),this.getTabNameData()},methods:{getWgdoData(){(0,l.rk)({parentId:"8"}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.tabDatas=t.data.rows)})),(0,l.rk)({parentId:"150"}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.tabDatas=t.data.rows)}))},getTabNameData(t=this.$store.state.lang.version){(0,l.rk)({parentId:"8",version:t}).then((t=>{if(t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0){let a=t.data.rows[0].children;this.tabName=a.map((t=>t.classifyName))}})),(0,l.rk)({parentId:"150",version:t}).then((t=>{if(t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0){let a=t.data.rows[0].children;this.tabName=a.map((t=>t.classifyName))}}))},getTabName(t){this.tabclickDatas=t}},watch:{"$store.state.lang.version":{handler(){(0,m.A)(this.getTabNameData(),this.$store.state.lang.version)}}}},p=v,D=s(1656),b=(0,D.A)(p,e,i,!1,null,"ae0d6f9e",null),f=b.exports},752:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("wgdo.intro")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),t._l(t.introDatas,(function(s){return a("div",{key:s.greeninstituteId,staticClass:"intro"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+s.cover}})]),a("div",{staticClass:"right"},[a("div",{staticClass:"right-top"},[a("p",{staticClass:"ch"},[t._v(t._s(s.title))])]),a("div",{staticClass:"right-bottom"},[t._v(" "+t._s(s.intro)+" ")])])])}))],2)])])},i=[],r=s(2964),n=s(1981),o={name:"Intro",props:["tabDatas"],data(){return{introDatas:[...this.tabDatas]}},mounted(){this.getIntroData()},methods:{getIntroData(t=this.$store.state.lang.version){(0,r.Ev)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.introDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,n.A)(this.getIntroData(),this.$store.state.lang.version)}}}},l=o,c=s(1656),h=(0,c.A)(l,e,i,!1,null,"0c7b1fc0",null),d=h.exports},5206:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("wgdo.policy")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"intro"},t._l(t.policyDatas,(function(s){return a("div",{key:s.greeninstituteId,staticClass:"intro-in"},[a("p",{staticStyle:{opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(s.contentDetails)}})])})),0)])])])},i=[],r=s(2964),n=s(1981),o={name:"Policy",props:["tabDatas"],data(){return{policyDatas:[...this.tabDatas]}},mounted(){this.getPolicyData()},methods:{getPolicyData(t=this.$store.state.lang.version){(0,r.Ev)({moduleType:"5",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.policyDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,n.A)(this.getPolicyData(),this.$store.state.lang.version)}}}},l=o,c=s(1656),h=(0,c.A)(l,e,i,!1,null,"3db3b448",null),d=h.exports},5937:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("wgdo.service")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"serviceall"},t._l(t.serviceDatas,(function(s){return a("div",{key:s.greeninstituteId,staticClass:"servicein"},[a("p",{staticClass:"service-content",domProps:{innerHTML:t._s(s.contentDetails)}})])})),0)])])])},i=[],r=s(2964),n=s(1981),o={name:"Service",props:["tabDatas"],data(){return{serviceDatas:[...this.tabDatas]}},mounted(){this.getServiceData()},methods:{getServiceData(t=this.$store.state.lang.version){(0,r.Ev)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.serviceDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,n.A)(this.getServiceData(),this.$store.state.lang.version)}}}},l=o,c=s(1656),h=(0,c.A)(l,e,i,!1,null,"3131db96",null),d=h.exports},4053:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("wgdo.train")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.trainDatas,(function(s){return a("a",{key:s.greeninstituteId,staticClass:"doing-in",attrs:{href:s.externalLink}},[a("div",{staticClass:"doing-img"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+s.cover}}),a("div",{staticClass:"image-caption"},[a("p",{staticClass:"image-title"},[t._v(t._s(s.title))]),a("p",{staticClass:"image-content"},[t._v(" "+t._s(s.intro)+" ")])])])])})),0)])])])},i=[],r=s(2964),n=s(1981),o={name:"Train",props:["tabDatas"],data(){return{trainDatas:[...this.tabDatas]}},mounted(){this.getTrainData()},methods:{getTrainData(t=this.$store.state.lang.version){(0,r.Ev)({moduleType:"4",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.trainDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,n.A)(this.getTrainData(),this.$store.state.lang.version)}}}},l=o,c=s(1656),h=(0,c.A)(l,e,i,!1,null,"0ac50f8e",null),d=h.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=568.0d1ba9f5.js.map