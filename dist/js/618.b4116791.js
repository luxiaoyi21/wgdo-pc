"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[618,581,413,31,444,566],{3008:function(t,a,s){s.d(a,{A:function(){return o}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[t._m(0),a("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(s){return a("el-breadcrumb-item",{attrs:{to:{path:s.path}}},[a("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(s.name)+" ")])})),1)],1)},i=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:s(8605)}})])}],n={name:"Breadcrumb",props:["urlData"],mounted(){}},r=n,l=s(1656),c=(0,l.A)(r,e,i,!1,null,"0b00c7bb",null),o=c.exports},7613:function(t,a,s){s.d(a,{A:function(){return o}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"bgs"}),a("div",{staticClass:"f"},[a("div",{staticClass:"hTop"},[t._m(0),a("div",{staticClass:"right"},[a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo scarchI"}),a("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(a){t.searchInp=a},expression:"searchInp"}})],1),a("div",{staticClass:"rightList"},[a("div",{staticClass:"login"},[a("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),a("div",{staticClass:"loginO"}),a("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),a("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[a("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(1)])])])]),a("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[a("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),a("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),a("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),a("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),a("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),a("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),a("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),a("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])])])])},i=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("div",{staticClass:"logo"},[a("img",{staticClass:"logoImg",attrs:{src:"https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3"}}),a("div",{staticClass:"logoDsc"},[a("div",{staticClass:"logoDscTop"},[t._v("世界绿色设计组织")]),a("div",{staticClass:"logoDscBot"},[t._v("World Green Design Organization")])])])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"langO",staticStyle:{display:"none"}},[a("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],n={name:"HeaderNav",data(){let t,a="";return{searchInp:a,lang:t}},created(){this.lang=this.$store.state.lang.langs,"中文"===this.$store.state.lang.langs?(this.$refs.changeLangue.classList.add("enBottom"),this.$refs.changeLanguea.classList.add("ens")):(this.$refs.changeLangue.classList.add("zhBottom"),this.$refs.changeLanguea.classList.add("zhs"))},mounted(){this.lang=this.$store.state.lang.langs},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},r=n,l=s(1656),c=(0,l.A)(r,e,i,!1,null,"1cc270e2",null),o=c.exports},489:function(t,a,s){s.d(a,{A:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("el-tabs",{staticClass:"ets",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[t._l(t.tabName,(function(s){return[a("el-tab-pane",{staticClass:"etp",attrs:{label:s,name:s}},[a("Breadcrumb",{attrs:{urlData:t.urlData}})],1)]}))],2)],1)},i=[],n=(s(4114),s(3008)),r=s(2964),l=(s(1981),{components:{Breadcrumb:n.A},props:["tabName"],data(){return{activeName:"",tabDatas:[],routesData:[],currentRoute:[],urlData:[],aboutmap:{"组织介绍":"1","组织架构":"2","重要人物":"3","联系我们":"4"},meetmap:{"活动预告":"1","正在进行":"2","历届回顾":"3","活动详情":"4"},mediamap:{"组织动态":"1","论坛视频":"2","媒体报告":"3","动态详情":"4","报告详情":"5"},researchmap:{"绿色设计报告":"1","绿色设计国际标准":"2","绿色设计国际实验室":"3","共享资源":"4","绿色设计报告详情":"5"},projectmap:{"绿叶之家":"1","绿丝带":"2","绿丝带物资到货记录":"3","绿丝带行动捐赠光荣榜":"5","可信供方清单":"4","抗疫宣传":"7","联系方式":"6"},prizemap:{"绿色设计国际大奖":"1","绿色设计国际贡献奖":"3","评定规则":"2","获奖个人":"5","获奖机构":"5"},Mapping:{"机构简介":"1","分支拓建":"2","品牌服务":"3","绿色政策":"4","绿色设计培训":"5"},Map:[]}},mounted(){this.routesData=this.$router.options.routes,this.currentRoute=this.$router.history.current,this.routesData.forEach((t=>{t.name===this.currentRoute.name&&this.urlData.push(t)}))},methods:{handleClick(t,a){this.urlData.length>1&&this.urlData.pop();let s=t.$options.propsData.name;this.urlData.push({name:s});for(const e in this.Map)if(e===this.urlData[1].name)return this.getHomeAllTitleData(this.Map[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.aboutmap)if(e===this.urlData[1].name)return this.getAboutusData(this.aboutmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.meetmap)if(e===this.urlData[1].name)return this.getMeetData(this.meetmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.mediamap)if(e===this.urlData[1].name)return this.getMediaData(this.mediamap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.researchmap)if(e===this.urlData[1].name)return this.getResearchData(this.researchmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.projectmap)if(e===this.urlData[1].name)return this.getProjectData(this.projectmap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.prizemap)if(e===this.urlData[1].name)return this.getPrizeData(this.prizemap[e]),void this.$emit("tabclickDatas",this.urlData[1].name);for(const e in this.Mapping)if(e===this.urlData[1].name)return this.getWgdoData(this.Mapping[e]),void this.$emit("tabclickDatas",this.urlData[1].name)},getAboutusData(t){(0,r.aJ)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Aboutus",this.tabDatas)}))},getMeetData(t){(0,r.wk)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Meet",this.tabDatas)}))},getMediaData(t){(0,r.$U)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Media",this.tabDatas)}))},getResearchData(t){(0,r.is)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Research",this.tabDatas)}))},getProjectData(t){(0,r.MM)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Project",this.tabDatas)}))},getPrizeData(t){(0,r.zE)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("Prize",this.tabDatas)}))},getWgdoData(t){(0,r.Ev)({moduleType:t,status:"1"}).then((t=>{this.tabDatas=t.data.rows,this.$emit("WgdoData",this.tabDatas)}))},getHomeAllTitleData(t,a){(0,r.rk)({parentId:a}).then((t=>{this.tabDatas=t.data.rows,this.$emit("getHomeAllTitle",this.tabDatas)}))}}}),c=l,o=s(1656),h=(0,o.A)(c,e,i,!1,null,"9b85ad76",null),d=h.exports},5581:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[t._m(0),t._l(t.bigDatas,(function(s){return a("div",{key:s.greenawardId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(s.title))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"big-content",domProps:{innerHTML:t._s(s.contentDetails)}})])}))],2)])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"big-leader"},[a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:"/prize/big"}},[a("span",[t._v("绿色设计国际大奖")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:"/prize/rule"}},[a("span",[t._v("评定规则")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:"/prize/personal"}},[a("span",[t._v("2015国际奖获奖个人")]),a("i",{staticClass:"el-icon-arrow-right"})])])}],n=s(2964),r=s(1981),l={name:"Big",props:["tabDatas"],data(){return{bigDatas:[...this.tabDatas]}},mounted(){this.getBigData(),this.addImageStyles()},methods:{getBigData(t=this.$store.state.lang.version){(0,n.zE)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.bigDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img {\n                    width: 560px;\n                    height: 436.4px;\n                    mix-blend-mode: multiply;\n                    opacity: 1;\n                    margin: auto;\n                    background-size: cover;\n                    background-position: center;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getBigData(),this.$store.state.lang.version)}}}},c=l,o=s(1656),h=(0,o.A)(c,e,i,!1,null,"87f0cdea",null),d=h.exports},7031:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[t._m(0),t._l(t.contriDatas,(function(s){return a("div",{key:s.greenawardId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(s.title))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticStyle:{opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(s.contentDetails)}})])}))],2)])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"big-leader"},[a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"95%",margin:"10px 10px"},attrs:{href:"/prize/contribute"}},[a("span",[t._v("绿色设计国际贡献奖")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"95%",margin:"10px 10px"},attrs:{href:"/prize/rule"}},[a("span",[t._v("评定规则")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"95%",margin:"10px 10px"},attrs:{href:"/prize/personal"}},[a("span",[t._v("2011国际贡献奖获奖个人")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"95%",margin:"10px 10px"},attrs:{href:""}},[a("span",[t._v("2011国际贡献奖获奖机构")]),a("i",{staticClass:"el-icon-arrow-right"})])])}],n=s(2964),r=s(1981),l={name:"Contribute",props:["tabDatas"],data(){return{contriDatas:[...this.tabDatas]}},mounted(){this.getContriData(),this.addImageStyles()},methods:{getContriData(t=this.$store.state.lang.version){(0,n.zE)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.contriDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img {\n                    width: 560px;\n                    height: 436.4px;\n                    mix-blend-mode: multiply;\n                    opacity: 1;\n                    margin: auto;\n                    display:flex;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getContriData(),this.$store.state.lang.version)}}}},c=l,o=s(1656),h=(0,o.A)(c,e,i,!1,null,"5c07c164",null),d=h.exports},2618:function(t,a,s){s.r(a),s.d(a,{default:function(){return D}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("Headers"),a("div",{staticClass:"content"},[a("TabControl",{attrs:{tabName:t.tabName},on:{getHomeAllTitle:t.getPrizeData,tabclickDatas:t.getTabName}}),"绿色设计国际大奖"===t.tabclickDatas?a("Big",{attrs:{tabDatas:t.tabDatas}}):t._e(),"绿色设计国际贡献奖"===t.tabclickDatas?a("Contribute",{attrs:{tabDatas:t.tabDatas}}):t._e(),"评定规则"===t.tabclickDatas?a("Rule",{attrs:{tabDatas:t.tabDatas}}):t._e(),"获奖个人"===t.tabclickDatas?a("Personal",{attrs:{tabDatas:t.tabDatas}}):t._e(),"获奖机构"===t.tabclickDatas?a("Mechanism",{attrs:{tabDatas:t.tabDatas}}):t._e()],1),a("div",{staticClass:"foot"},[a("Footers")],1)],1)},i=[],n=s(7613),r=s(489),l=s(7329),c=s(2964),o=s(5581),h=s(7031),d=s(8413),u=s(3444),g=s(2566),p=s(1981),m={name:"Prize",components:{Headers:n.A,TabControl:r.A,Footers:l.A,Big:o["default"],Contribute:h["default"],Rule:d["default"],Personal:u["default"],Mechanism:g["default"]},props:["urlData"],data(){return{tabName:[],PrizeDatas:[],tabDatas:[],tabclickDatas:"绿色设计国际大奖",name:[]}},mounted(){this.getPrizeData("绿色设计国际大奖"),this.getTabNameData()},methods:{async getPrizeData(t=this.$store.state.lang.version){(0,c.rk)({parentId:"7",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.tabDatas=t.data.rows)}))},getTabNameData(t=this.$store.state.lang.version){(0,c.rk)({parentId:"7",version:t}).then((t=>{if(t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0){let a=t.data.rows[0].children;this.tabName=a.map((t=>t.classifyName))}}))},getTabName(t){this.tabclickDatas=t}},watch:{"$store.state.lang.version":{handler(){(0,p.A)(this.getTabNameData(),this.$store.state.lang.version)}}}},f=m,v=s(1656),b=(0,v.A)(f,e,i,!1,null,"53586f06",null),D=b.exports},2566:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"content-in"},t._l(t.mechanismDatas,(function(s){return a("div",{key:s.greenawardId},[a("p",{staticClass:"dynamic"},[t._v(t._s(s.title))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("p",{staticClass:"paper"},[t._v("2011绿色设计国际贡献奖机构获奖名单：")]),a("div",{staticClass:"person"},[a("div",{staticClass:"person-in"},[a("div",{domProps:{innerHTML:t._s(s.contentDetails)}})]),a("div",{staticClass:"person-line"})])])})),0)])])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"big-leader"},[a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"90%"},attrs:{href:"/prize/contribute"}},[a("span",[t._v("绿色设计国际贡献奖")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"90%"},attrs:{href:"/prize/rule"}},[a("span",[t._v("评定规则")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"90%"},attrs:{href:"/prize/personal"}},[a("span",[t._v("2011国际贡献奖获奖个人")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"90%"},attrs:{href:""}},[a("span",[t._v("2011国际贡献奖获奖机构")]),a("i",{staticClass:"el-icon-arrow-right"})])])}],n=s(2964),r=s(1981),l={name:"Mechanism",props:["tabDatas"],data(){return{mechanismDatas:[...this.tabDatas]}},mounted(){this.getMechanismData()},methods:{getMechanismData(t=this.$store.state.lang.version){(0,n.zE)({moduleType:"5",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.mechanismDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getMechanismData(),this.$store.state.lang.version)}}}},c=l,o=s(1656),h=(0,o.A)(c,e,i,!1,null,"0947c5b9",null),d=h.exports},3444:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"content-in"},t._l(t.perDatas,(function(s){return a("div",{key:s.greenawardId},[a("p",{staticClass:"dynamic"},[t._v(t._s(s.title))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("p",{staticClass:"paper"},[t._v("2011绿色设计国际贡献奖个人获奖名单：")]),a("div",{staticClass:"person"},[t._l(t.perDatas,(function(s){return a("div",{staticClass:"person-in"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:"http://106.3.97.14:9002"+s.cover,alt:""}})]),a("div",{staticClass:"intro"},[a("div",{staticClass:"intro-top"},[a("div",{staticClass:"name"},[t._v(t._s(s.awardName))])]),a("div",{staticClass:"intro-bottom"},[t._v(t._s(s.awardIntro)+" ")])])])})),a("div",{staticClass:"person-line"})],2)])})),0)])])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"big-leader"},[a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"90%"},attrs:{href:"/prize/contribute"}},[a("span",[t._v("绿色设计国际贡献奖")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"90%"},attrs:{href:"/prize/rule"}},[a("span",[t._v("评定规则")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"90%"},attrs:{href:"/prize/personal"}},[a("span",[t._v("2011国际贡献奖获奖个人")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"90%"},attrs:{href:""}},[a("span",[t._v("2011国际贡献奖获奖机构")]),a("i",{staticClass:"el-icon-arrow-right"})])])}],n=s(2964),r=s(1981),l={name:"Personal",props:["tabDatas"],data(){return{perDatas:[...this.tabDatas]}},mounted(){this.getPersonalData()},methods:{getPersonalData(t=this.$store.state.lang.version){(0,n.zE)({moduleType:"6",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.perDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getPersonalData(),this.$store.state.lang.version)}}}},c=l,o=s(1656),h=(0,o.A)(c,e,i,!1,null,"55aea550",null),d=h.exports},8413:function(t,a,s){s.r(a),s.d(a,{default:function(){return d}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[t._m(0),t._l(t.ruleDatas,(function(s){return a("div",{key:s.greenawardId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(s.title))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"rule-all"},[a("div",{staticStyle:{opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(s.contentDetails)}})])])}))],2)])},i=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"big-leader"},[a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"90%"},attrs:{href:"/prize/contribute"}},[a("span",[t._v("绿色设计国际贡献奖")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"90%"},attrs:{href:"/prize/rule"}},[a("span",[t._v("评定规则")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"90%"},attrs:{href:"/prize/personal"}},[a("span",[t._v("2011国际贡献奖获奖个人")]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"90%"},attrs:{href:""}},[a("span",[t._v("2011国际贡献奖获奖机构")]),a("i",{staticClass:"el-icon-arrow-right"})])])}],n=s(2964),r=s(1981),l={name:"Rule",props:["tabDatas"],data(){return{ruleDatas:[...this.tabDatas]}},mounted(){this.getRuleData()},methods:{getRuleData(t=this.$store.state.lang.version){(0,n.zE)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.ruleDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getContriData(),this.$store.state.lang.version)}}}},c=l,o=s(1656),h=(0,o.A)(c,e,i,!1,null,"063e878f",null),d=h.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=618.b4116791.js.map