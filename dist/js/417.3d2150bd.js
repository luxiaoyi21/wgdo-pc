"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[417,395,824,157,20,926,400],{3329:function(t,a,e){e.d(a,{A:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[t._m(0),a("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(e){return a("el-breadcrumb-item",{attrs:{to:{path:e.path}}},[a("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(e.name)+" ")])})),1)],1)},n=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:e(8605)}})])}],i=(e(2964),{name:"Breadcrumb",props:["urlData"],data(){return{}},mounted(){},computed:{},methods:{addBreadcrumb(t){const a={name:"组织动态详情",path:`${t.path}/dynamicinfo`};this.$emit("update:urlData",[...this.urlData,a])}}}),r=i,o=e(1656),l=(0,o.A)(r,s,n,!1,null,"3b7e43d3",null),c=l.exports},3038:function(t,a,e){e.d(a,{A:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"bgs"}),a("div",{staticClass:"f"},[a("div",{staticClass:"hTop"},[a("a",{attrs:{href:"/"}},[a("div",{staticClass:"logo"},[a("img",{style:t.getLogoStyle(),attrs:{src:t.getLogoPath(),alt:"Logo"}})])]),a("div",{staticClass:"right"},[a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo scarchI"}),a("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(a){t.searchInp=a},expression:"searchInp"}})],1),a("div",{staticClass:"rightList"},[a("div",{staticClass:"login"},[a("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),a("div",{staticClass:"loginO"}),a("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),a("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[a("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(0)])])])]),a("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"langO",staticStyle:{display:"none"}},[a("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],i={name:"HeaderNav",data(){let t="",a="中文";return{searchInp:t,lang:a,currentRoute:""}},created(){this.lang=this.$store.state.lang.langs},mounted(){this.$nextTick((()=>{const t="中文"===this.lang?"zhBottom":"enBottom",a="中文"===this.lang?"ens":"zhs";this.$refs.changeLangue&&this.$refs.changeLangue.classList.add(t),this.$refs.changeLanguea&&this.$refs.changeLanguea.length&&this.$refs.changeLanguea.forEach((t=>{t.classList.add(a)}))}))},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")},getLogoPath(){return"en"===this.$store.state.lang.isEn?e(6140):e(5158)},getLogoStyle(){return"en"===this.$store.state.lang.isEn?{transform:"scale(0.78) translateX(-54px)"}:null},setCurrentRoute(t){this.currentRoute=t}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},r=i,o=e(1656),l=(0,o.A)(r,s,n,!1,null,"2055e38b",null),c=l.exports},2400:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("project.contactform")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line"}),t._m(0)])])])},n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"dynamic-dsc"},[a("div",{staticClass:"dsc-img"},[a("img",{attrs:{src:"https://img.js.design/assets/img/664dc37f4ae252d9eb123351.png#9aa2310b24408c59b8ff34f3e199d9d1",alt:""}})])])}],i=e(2964),r=e(1981),o={name:"Inventory",props:["tabDatas"],data(){return{contactDatas:[]}},mounted(){this.getInventData()},methods:{getInventData(t=this.$store.state.lang.version){(0,i.MM)({moduleType:"6",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.contactDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getInventData(),this.$store.state.lang.version)}}}},l=o,c=e(1656),d=(0,c.A)(l,s,n,!1,null,"7008a0bc",null),h=d.exports},5926:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},t._l(t.saveDatas,(function(e){return a("div",{key:e.benefitId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(e.title))]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(e.clickVolume))]),a("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(e.releaseTime))])]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line"}),a("div",{staticClass:"dynamic-dsc"},[a("div",{staticStyle:{opacity:"1","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify","vertical-align":"top"},domProps:{innerHTML:t._s(e.contentDetails)}})])])})),0)])},n=[],i=e(2964),r=e(1981),o={name:"Disseminate",props:["tabDatas"],data(){return{saveDatas:[]}},mounted(){this.addImageStyles(),this.getDissminateData()},methods:{getDissminateData(t=this.$store.state.lang.version){(0,i.MM)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.saveDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img:nth-of-type(1) {\n                    width: 100%;\n                    height: 323px;\n                },\n                .content-in img:nth-of-type(2) {\n                    width: 589px;\n                    height: 883px;\n        }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getDissminateData(),this.$store.state.lang.version)}}}},l=o,c=e(1656),d=(0,c.A)(l,s,n,!1,null,"57db22ac",null),h=d.exports},2157:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},t._l(t.gloryDatas,(function(e){return a("div",{key:e.benefitId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("project.glory")))]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(e.clickVolume))]),a("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(e.releaseTime))])]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"grip"},[a("div",{domProps:{innerHTML:t._s(e.contentDetails)}})])])})),0)])},n=[],i=e(2964),r=e(1981),o={name:"Glory",props:["tabDatas"],data(){return{gloryDatas:[]}},mounted(){this.getGloryData()},methods:{getGloryData(t=this.$store.state.lang.version){(0,i.MM)({moduleType:"5",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.gloryDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getGloryData(),this.$store.state.lang.version)}}}},l=o,c=e(1656),d=(0,c.A)(l,s,n,!1,null,"4cb6a7ac",null),h=d.exports},7395:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},t._l(t.ghomeDatas,(function(e){return a("div",{key:e.benefitId,staticClass:"content-in"},[a("p",{staticClass:"aintro"},[t._v(t._s(e.title))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"content-dsc"},[a("p",{domProps:{innerHTML:t._s(e.contentDetails)}})])])})),0)])},n=[],i=e(2964),r=e(1981),o={name:"Greenhome",props:["tabDatas"],data(){return{ghomeDatas:[]}},mounted(){this.getGhomeData(),this.addImageStyles()},methods:{getGhomeData(t=this.$store.state.lang.version){(0,i.MM)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.ghomeDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .content-in img {\n                    width: 100%;\n                    height: 280px;\n                    opacity: 1;\n                    margin: auto;\n                    display:flex;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getGhomeData(),this.$store.state.lang.version)}}}},l=o,c=e(1656),d=(0,c.A)(l,s,n,!1,null,"1359fd8c",null),h=d.exports},7417:function(t,a,e){e.r(a),e.d(a,{default:function(){return L}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("Headers"),a("div",{staticClass:"content"},[(t.tabName,t.tabDatas?a("newTabControl",{attrs:{tabName:t.tabName,tabDatas:t.tabDatas},on:{gindex:t.getGindex}}):t._e())],1),a("div",{staticClass:"foot"},[a("Footers")],1)],1)},n=[],i=e(3038),r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"tc"},[a("el-tabs",{staticClass:"ets",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[t._l(t.tabName[0]?.children,(function(e,s){return a("el-tab-pane",{key:s,staticClass:"etp",attrs:{label:e.classifyName,name:e.classifyName}},[a("Breadcrumb",{attrs:{urlData:t.urlData}})],1)})),1===t.currentNum?a("Greenhome",{attrs:{tabDatas:t.localDatas}}):t._e(),2===t.currentNum?a("Publicity",{attrs:{tabDatas:t.localDatas}}):t._e()],2)],1)},o=[],l=(e(4114),e(2964)),c=e(3329),d=e(7395),h=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"big-leader"},[a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:""}},[a("span",[t._v(t._s(t.$t("project.require")))]),a("i",{staticClass:"el-icon-arrow-right"})]),a("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{to:{name:"Inventory"}}},[a("span",[t._v(t._s(t.$t("project.inventory")))]),a("i",{staticClass:"el-icon-arrow-right"})]),a("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{to:{name:"Publicity"}}},[a("span",[t._v(t._s(t.$t("project.publicity")))]),a("i",{staticClass:"el-icon-arrow-right"})]),a("a",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{href:""}},[a("span",[t._v(t._s(t.$t("project.news")))]),a("i",{staticClass:"el-icon-arrow-right"})]),a("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{to:{name:"Disseminate"}}},[a("span",[t._v(t._s(t.$t("project.disseminate")))]),a("i",{staticClass:"el-icon-arrow-right"})]),a("router-link",{staticStyle:{display:"flex","align-items":"center","justify-content":"space-between",width:"80%"},attrs:{to:{name:"Contactform"}}},[a("span",[t._v(t._s(t.$t("project.contactform")))]),a("i",{staticClass:"el-icon-arrow-right"})])],1),a("div",{staticClass:"content-in"},[a("router-view"),a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("project.publicity")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line"}),a("div",{staticClass:"dynamic-dsc"},t._l(t.pubDatas,(function(e,s){return a("div",{key:e.benefitId,staticClass:"dynamic-content",on:{click:function(a){return t.toNext(s)}}},[a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dynamic-dscall-top"},[t._v(t._s(e.title))])]),a("div",{staticClass:"grip-time"},[t._v(t._s(e.createTime))])])})),0)],1)])])},u=[],m=e(1981),g={name:"Publicity",props:["tabDatas"],data(){return{pubDatas:[],show:!1}},mounted(){this.getPubData()},methods:{getPubData(t=this.$store.state.lang.version){(0,l.MM)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.pubDatas=t.data.rows)}))},toNext(t){0===t?this.$router.push({path:"/Project/publicity/record"}):1===t&&this.$router.push({path:"/Project/publicity/glory"})}},watch:{"$store.state.lang.version":{handler(){(0,m.A)(this.getPubData(),this.$store.state.lang.version)}}}},v=g,p=e(1656),f=(0,p.A)(v,h,u,!1,null,"3cab224a",null),y=f.exports,b=e(7824),C=e(2157),_=e(6020),D=e(5926),$=e(2400),w={name:"Tc",components:{Breadcrumb:c.A,Greenhome:d["default"],Publicity:y,Glory:C["default"],Inventory:_["default"],Disseminate:D["default"],Contactform:$["default"]},props:["tabName","tabDatas"],data(){return{activeName:"",currentNum:1,localName:[],localDatas:[],routesData:[],currentRoute:[],urlData:[]}},mounted(){this.getCurrentData(),setTimeout((()=>{this.activeName=this.tabName[0]?.children[0]?.classifyName,this.handleClick({$options:{propsData:{name:this.activeName}}})}),500),this.routesData=this.$router.options.routes,this.currentRoute=this.$router.history.current,this.routesData.forEach((t=>{t.name===this.currentRoute.name&&this.urlData.push(t)}))},methods:{handleClick(t){this.currentNum=Number(t.index)+1,sessionStorage.setItem("currentNums",this.currentNum),this.urlData.length>1&&this.urlData.pop();let a=t.$options.propsData.name;this.urlData.push({name:a})},getCurrentData(){let t=sessionStorage.getItem("currentNums");this.localName=this.tabName,this.localDatas=this.tabDatas;let a=JSON.parse(sessionStorage.getItem("ln"));if(!a){sessionStorage.setItem("ln",JSON.stringify(this.localName));JSON.parse(sessionStorage.getItem("ln"))}this.$emit("gindex",this.currentNum),void 0===t?(this.currentNum=1,this.activeName=a[0].children[0].classifyName):(this.currentNum=t,a[0].children.forEach(((t,a)=>{Number(a)+1==this.currentNum&&(this.activeName=t.classifyName)})))},getTabNameData(t){"6"===t?(0,l.rk)({parentId:6}).then((t=>{this.localName=t.data.rows,sessionStorage.setItem("ln",JSON.stringify(this.localName))})):"148"===t&&(0,l.rk)({parentId:148}).then((t=>{this.localName=t.data.rows,sessionStorage.setItem("ln",JSON.stringify(this.localName))}))}},watch:{currentNum:{handler(){this.$emit("gindex",this.currentNum);let t=JSON.parse(sessionStorage.getItem("ln"));if(t&&t[0]&&t[0].children&&t[0].children.length>0){let a=t[0].children.find((t=>Number(t.index)===Number(this.currentNum)));a&&(this.activeName=a.classifyName)}}},tabDatas:{handler(t){this.localDatas=t}},"$store.state.lang.version":{handler(){"en"===this.$store.state.lang.isEn?this.getTabNameData("148"):this.getTabNameData("6")}}},beforeRouteLeave(t,a,e){sessionStorage.removeItem("currentNums"),sessionStorage.removeItem("ln"),e()}},A=w,x=(0,p.A)(A,r,o,!1,null,"6ec3c972",null),N=x.exports,I=e(5341),S={name:"Project",components:{Headers:i.A,newTabControl:N,Footers:I.A,Greenhome:d["default"],Publicity:y,Record:b["default"],Glory:C["default"],Inventory:_["default"],Disseminate:D["default"],Contactform:$["default"]},props:["urlData"],data(){return{tabName:[],ProjectDatas:[],tabDatas:[],currentNum:1,name:[],gindex:-1}},mounted(){"en"===this.$store.state.lang.isEn?this.getTabNameData("148"):this.getTabNameData("6"),this.getProjectData()},methods:{getTabNameData(t){"6"===t?(0,l.rk)({parentId:6}).then((t=>{this.tabName=t.data.rows})):"148"===t&&(0,l.rk)({parentId:148}).then((t=>{this.tabName=t.data.rows}))},getProjectData(t,a=this.$store.state.lang.version){(0,l.MM)({moduleType:t,version:a,status:"1"}).then((t=>{this.tabDatas=t.data.rows}))},getGindex(t){this.gindex=t}},watch:{"$store.state.lang.version":{handler(){(0,m.A)(this.getTabNameData(),this.$store.state.lang.version),"en"===this.$store.state.lang.isEn?this.getTabNameData("148"):this.getTabNameData("6"),this.getProjectData(this.gindex,this.$store.state.lang.version)}},gindex:{handler(){this.getProjectData(this.gindex,this.$store.state.lang.version)}}}},k=S,E=(0,p.A)(k,s,n,!1,null,"6c40a597",null),L=E.exports},6020:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},t._l(t.inventDatas,(function(e){return a("div",{key:e.benefitId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(e.title))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line"}),a("div",{staticClass:"dynamic-dsc"},[a("div",{domProps:{innerHTML:t._s(e.contentDetails)}})])])})),0)])},n=[],i=e(2964),r=e(1981),o={name:"Inventory",props:["tabDatas"],data(){return{inventDatas:[]}},mounted(){this.getInventData(),this.addImageStyles()},methods:{getInventData(t=this.$store.state.lang.version){(0,i.MM)({moduleType:"4",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.inventDatas=t.data.rows)}))},addImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .dynamic-dsc p{\n                    display: flex;\n                    flex-wrap:wrap;\n                }\n\n                .dynamic-dsc img {\n                    display: flex;\n                    width: 50%;\n                    height: 1064px;\n                    margin-bottom:20px;\n                },\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getInventData(),this.$store.state.lang.version)}}}},l=o,c=e(1656),d=(0,c.A)(l,s,n,!1,null,"606d9caf",null),h=d.exports},7824:function(t,a,e){e.r(a),e.d(a,{default:function(){return h}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},t._l(t.recordDatas,(function(e){return a("div",{key:e.benefitId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("project.record")))]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(e.clickVolume))]),a("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(e.releaseTime))])]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"grip"},[a("div",{domProps:{innerHTML:t._s(e.contentDetails)}})])])})),0)])},n=[],i=e(2964),r=e(1981),o={name:"Record",props:["tabDatas"],data(){return{recordDatas:[]}},mounted(){this.getRecordData()},methods:{getRecordData(t=this.$store.state.lang.version){(0,i.MM)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.recordDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getRecordData(),this.$store.state.lang.version)}}}},l=o,c=e(1656),d=(0,c.A)(l,s,n,!1,null,"5704e392",null),h=d.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="},6140:function(t,a,e){t.exports=e.p+"img/logoen.b57f11d2.png"}}]);
//# sourceMappingURL=417.3d2150bd.js.map