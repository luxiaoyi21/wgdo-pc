"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[367,663,959,132,244,323],{3329:function(t,a,s){s.d(a,{A:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[t._m(0),a("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(s){return a("el-breadcrumb-item",{attrs:{to:{path:s.path}}},[a("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(s.name)+" ")])})),1)],1)},i=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:s(8605)}})])}],n=(s(2964),{name:"Breadcrumb",props:["urlData"],data(){return{}},mounted(){},computed:{},methods:{addBreadcrumb(t){const a={name:"组织动态详情",path:`${t.path}/dynamicinfo`};this.$emit("update:urlData",[...this.urlData,a])}}}),r=n,o=s(1656),l=(0,o.A)(r,e,i,!1,null,"3b7e43d3",null),c=l.exports},4350:function(t,a,s){s.d(a,{A:function(){return c}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"bgs"}),a("div",{staticClass:"f"},[a("div",{staticClass:"hTop"},[t._m(0),a("div",{staticClass:"right"},[a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo scarchI"}),a("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(a){t.searchInp=a},expression:"searchInp"}})],1),a("div",{staticClass:"rightList"},[a("div",{staticClass:"login"},[a("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),a("div",{staticClass:"loginO"}),a("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),a("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[a("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(1)])])])]),a("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},i=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:s(5158),alt:""}})])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"langO",staticStyle:{display:"none"}},[a("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],n={name:"HeaderNav",data(){let t="",a="中文";return{searchInp:t,lang:a}},created(){this.lang=this.$store.state.lang.langs},mounted(){this.$nextTick((()=>{const t="中文"===this.lang?"zhBottom":"enBottom",a="中文"===this.lang?"ens":"zhs";this.$refs.changeLangue&&this.$refs.changeLangue.classList.add(t),this.$refs.changeLanguea&&this.$refs.changeLanguea.length&&this.$refs.changeLanguea.forEach((t=>{t.classList.add(a)}))}))},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},r=n,o=s(1656),l=(0,o.A)(r,e,i,!1,null,"39d5561d",null),c=l.exports},3959:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("wgdo.branch")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticStyle:{"margin-bottom":"50px"}},t._l(t.branchDatas,(function(s,e){return a("div",{key:s.greeninstituteId},[a("div",{staticClass:"intro"},[a("div",{ref:"left1",refInFor:!0,staticClass:"left"},[a("img",{attrs:{src:"http://www.wgdo.net"+s.cover}})]),a("div",{staticClass:"right"},[a("div",{ref:"right1",refInFor:!0,staticClass:"right-top"},[a("p",{staticClass:"ch"},[t._v(t._s(s.title))])]),a("div",{staticClass:"right-bottom"},[t._v(" "+t._s(s.intro)+" ")])])]),e!==t.branchDatas.length-1?a("div",{staticClass:"dsc-line",staticStyle:{margin:"50px 0"}}):t._e()])})),0)])])])},i=[],n=s(2964),r=s(1981),o={name:"Branch",props:["tabDatas"],data(){return{branchDatas:[]}},mounted(){this.getBranchData()},methods:{getBranchData(t=this.$store.state.lang.version){(0,n.Ev)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.branchDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getBranchData(),this.$store.state.lang.version)}}}},l=o,c=s(1656),d=(0,c.A)(l,e,i,!1,null,"48a5ad93",null),h=d.exports},2367:function(t,a,s){s.r(a),s.d(a,{default:function(){return y}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("Headers"),a("div",{staticClass:"content"},[(t.tabName,t.tabDatas?a("newTabControl",{attrs:{tabName:t.tabName,tabDatas:t.tabDatas},on:{gindex:t.getGindex}}):t._e())],1),a("div",{staticClass:"foot"},[a("Footers")],1)],1)},i=[],n=s(4350),r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"tc"},[a("el-tabs",{staticClass:"ets",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[t._l(t.tabName[0]?.children,(function(s,e){return a("el-tab-pane",{key:e,staticClass:"etp",attrs:{label:s.classifyName,name:s.classifyName}},[a("Breadcrumb",{attrs:{urlData:t.urlData}})],1)})),1===t.currentNum?a("Intro",{attrs:{tabDatas:t.localDatas}}):t._e(),2===t.currentNum?a("Branch",{attrs:{tabDatas:t.localDatas}}):t._e(),3===t.currentNum?a("Service",{attrs:{tabDatas:t.localDatas}}):t._e(),4===t.currentNum?a("Train",{attrs:{tabDatas:t.localDatas}}):t._e(),5===t.currentNum?a("Policy",{attrs:{tabDatas:t.localDatas}}):t._e()],2)],1)},o=[],l=(s(4114),s(2964)),c=s(3329),d=s(4663),h=s(3959),u=s(6132),g=s(2244),m=s(9323),v={name:"Tc",components:{Breadcrumb:c.A,Intro:d["default"],Branch:h["default"],Service:u["default"],Train:g["default"],Policy:m["default"]},props:["tabName","tabDatas"],data(){return{activeName:"",currentNum:1,localName:[],localDatas:[],routesData:[],currentRoute:[],urlData:[]}},mounted(){this.getCurrentData(),setTimeout((()=>{this.activeName=this.tabName[0]?.children[0]?.classifyName,this.handleClick({$options:{propsData:{name:this.activeName}}})}),500),this.routesData=this.$router.options.routes,this.currentRoute=this.$router.history.current,this.routesData.forEach((t=>{t.name===this.currentRoute.name&&this.urlData.push(t)}))},methods:{handleClick(t){this.currentNum=Number(t.index)+1,sessionStorage.setItem("currentNums",this.currentNum),this.urlData.length>1&&this.urlData.pop();let a=t.$options.propsData.name;this.urlData.push({name:a})},getCurrentData(){let t=sessionStorage.getItem("currentNums");this.localName=this.tabName,this.localDatas=this.tabDatas;let a=JSON.parse(sessionStorage.getItem("ln"));if(!a){sessionStorage.setItem("ln",JSON.stringify(this.localName));JSON.parse(sessionStorage.getItem("ln"))}this.$emit("gindex",this.currentNum),void 0===t?(this.currentNum=1,this.activeName=a[0].children[0].classifyName):(this.currentNum=t,a[0].children.forEach(((t,a)=>{Number(a)+1==this.currentNum&&(this.activeName=t.classifyName)})))},getTabNameData(t){"8"===t?(0,l.rk)({parentId:8}).then((t=>{this.localName=t.data.rows,sessionStorage.setItem("ln",JSON.stringify(this.localName))})):"150"===t&&(0,l.rk)({parentId:150}).then((t=>{this.localName=t.data.rows,sessionStorage.setItem("ln",JSON.stringify(this.localName))}))}},watch:{currentNum:{handler(){this.$emit("gindex",this.currentNum);let t=JSON.parse(sessionStorage.getItem("ln"));if(t&&t[0]&&t[0].children&&t[0].children.length>0){let a=t[0].children.find((t=>Number(t.index)===Number(this.currentNum)));a&&(this.activeName=a.classifyName)}}},tabDatas:{handler(t){this.localDatas=t}},"$store.state.lang.version":{handler(){"en"===this.$store.state.lang.isEn?this.getTabNameData("150"):this.getTabNameData("8")}}},beforeRouteLeave(t,a,s){sessionStorage.removeItem("currentNums"),sessionStorage.removeItem("ln"),s()}},p=v,f=s(1656),b=(0,f.A)(p,r,o,!1,null,"5123e37f",null),C=b.exports,D=s(5341),_=s(1981),$={name:"Wgdo",components:{Headers:n.A,newTabControl:C,Footers:D.A,Intro:d["default"],Branch:h["default"],Service:u["default"],Train:g["default"],Policy:m["default"]},props:["urlData"],data(){return{tabName:[],wgdoDatas:[],tabDatas:[],currentNum:1,name:[],gindex:-1}},mounted(){"en"===this.$store.state.lang.isEn?this.getTabNameData("150"):this.getTabNameData("8"),this.getWgdoData()},methods:{getTabNameData(t){"8"===t?(0,l.rk)({parentId:8}).then((t=>{this.tabName=t.data.rows})):"150"===t&&(0,l.rk)({parentId:150}).then((t=>{this.tabName=t.data.rows}))},getWgdoData(t,a=this.$store.state.lang.version){(0,l.Ev)({moduleType:t,version:a,status:"1"}).then((t=>{this.tabDatas=t.data.rows}))},getGindex(t){this.gindex=t}},watch:{"$store.state.lang.version":{handler(){(0,_.A)(this.getTabNameData(),this.$store.state.lang.version),"en"===this.$store.state.lang.isEn?this.getTabNameData("150"):this.getTabNameData("8"),this.getWgdoData(this.gindex,this.$store.state.lang.version)}},gindex:{handler(){this.getWgdoData(this.gindex,this.$store.state.lang.version)}}}},A=$,N=(0,f.A)(A,e,i,!1,null,"4faf186c",null),y=N.exports},4663:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("wgdo.intro")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),t._l(t.introDatas,(function(s){return a("div",{key:s.greeninstituteId,staticClass:"intro"},[a("div",{staticClass:"left"},[a("img",{attrs:{src:"http://www.wgdo.net"+s.cover}})]),a("div",{staticClass:"right"},[a("div",{staticClass:"right-top"},[a("p",{staticClass:"ch"},[t._v(t._s(s.title))])]),a("div",{staticClass:"right-bottom"},[t._v(" "+t._s(s.intro)+" ")])])])}))],2)])])},i=[],n=s(2964),r=s(1981),o={name:"Intro",props:["tabDatas"],data(){return{introDatas:[]}},mounted(){this.getIntroData()},methods:{getIntroData(t=this.$store.state.lang.version){(0,n.Ev)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.introDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getIntroData(),this.$store.state.lang.version)}}}},l=o,c=s(1656),d=(0,c.A)(l,e,i,!1,null,"6a4f8e6a",null),h=d.exports},9323:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("wgdo.policy")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"intro"},t._l(t.policyDatas,(function(s){return a("div",{key:s.greeninstituteId,staticClass:"intro-in"},[a("p",{staticStyle:{opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(s.contentDetails)}})])})),0)])])])},i=[],n=s(2964),r=s(1981),o={name:"Policy",props:["tabDatas"],data(){return{policyDatas:[]}},mounted(){this.getPolicyData()},methods:{getPolicyData(t=this.$store.state.lang.version){(0,n.Ev)({moduleType:"5",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.policyDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getPolicyData(),this.$store.state.lang.version)}}}},l=o,c=s(1656),d=(0,c.A)(l,e,i,!1,null,"92d09de0",null),h=d.exports},6132:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(t.$t("wgdo.service")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"serviceall"},t._l(t.serviceDatas,(function(s){return a("div",{key:s.greeninstituteId,staticClass:"servicein"},[a("p",{staticClass:"service-content",domProps:{innerHTML:t._s(s.contentDetails)}})])})),0)])])])},i=[],n=s(2964),r=s(1981),o={name:"Service",props:["tabDatas"],data(){return{serviceDatas:[]}},mounted(){this.getServiceData()},methods:{getServiceData(t=this.$store.state.lang.version){(0,n.Ev)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.serviceDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getServiceData(),this.$store.state.lang.version)}}}},l=o,c=s(1656),d=(0,c.A)(l,e,i,!1,null,"30d3da88",null),h=d.exports},2244:function(t,a,s){s.r(a),s.d(a,{default:function(){return h}});var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("wgdo.train")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.trainDatas,(function(s){return a("a",{key:s.greeninstituteId,staticClass:"doing-in",attrs:{href:s.externalLink}},[a("div",{staticClass:"doing-img"},[a("img",{attrs:{src:"http://www.wgdo.net"+s.cover}}),a("div",{staticClass:"image-caption"},[a("p",{staticClass:"image-title"},[t._v(t._s(s.title))]),a("p",{staticClass:"image-content"},[t._v(" "+t._s(s.intro)+" ")])])])])})),0)])])])},i=[],n=s(2964),r=s(1981),o={name:"Train",props:["tabDatas"],data(){return{trainDatas:[]}},mounted(){this.getTrainData()},methods:{getTrainData(t=this.$store.state.lang.version){(0,n.Ev)({moduleType:"4",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.trainDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getTrainData(),this.$store.state.lang.version)}}}},l=o,c=s(1656),d=(0,c.A)(l,e,i,!1,null,"4dd9bb0b",null),h=d.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=367.e34157d0.js.map