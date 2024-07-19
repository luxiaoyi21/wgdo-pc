"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[5539,4202,7667,4660,2855],{2847:function(t,a,e){e.d(a,{A:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[t._m(0),a("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(e){return a("el-breadcrumb-item",{attrs:{to:{path:e.path}}},[a("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(t.getBreadcrumbName(e))+" ")])})),1)],1)},n=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:e(8605)}})])}],i=(e(2964),{name:"Breadcrumb",props:["urlData"],data(){return{}},mounted(){},computed:{},methods:{getBreadcrumbName(t){if(t.meta&&t.meta.breadcrumbName){let a=this.$store.state.lang.isEn;if(t.meta.breadcrumbName[a])return t.meta.breadcrumbName[a]}return t.name},popBreadcrumb(){this.$emit("update:urlData",this.urlData.slice(0,-1))},updateUrlData(t){}},watch:{urlData:{handler:"updateUrlData",immediate:!0}}}),r=i,o=e(1656),c=(0,o.A)(r,s,n,!1,null,"12b8bd4c",null),l=c.exports},7575:function(t,a,e){e.d(a,{A:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"bgs"}),a("div",{staticClass:"f"},[a("div",{staticClass:"hTop"},[a("a",{attrs:{href:"/"}},[a("div",{staticClass:"logo"},[a("img",{style:t.getLogoStyle(),attrs:{src:t.getLogoPath(),alt:"Logo"}})])]),a("div",{staticClass:"right"},[a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo scarchI"}),a("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(a){t.searchInp=a},expression:"searchInp"}})],1),a("div",{staticClass:"rightList"},[a("div",{staticClass:"login"},[a("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),a("div",{staticClass:"loginO"}),a("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),a("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[a("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(0)])])])]),a("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path||t.$route.path.startsWith("/about/")},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path||t.$route.path.startsWith("/meet/")},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path||t.$route.path.startsWith("/media/")},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path||t.$route.path.startsWith("/research/")},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path||t.$route.path.startsWith("/project/")},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path||t.$route.path.startsWith("/prize/")},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path||t.$route.path.startsWith("/wgdo/")},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"langO",staticStyle:{display:"none"}},[a("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],i={name:"HeaderNav",data(){let t="",a="中文";return{searchInp:t,lang:a,currentRoute:""}},created(){this.lang=this.$store.state.lang.langs},mounted(){this.$nextTick((()=>{const t="中文"===this.lang?"zhBottom":"enBottom",a="中文"===this.lang?"ens":"zhs";this.$refs.changeLangue&&this.$refs.changeLangue.classList.add(t),this.$refs.changeLanguea&&this.$refs.changeLanguea.length&&this.$refs.changeLanguea.forEach((t=>{t.classList.add(a)}))}))},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")},getLogoPath(){return"en"===this.$store.state.lang.isEn?e(6140):e(5158)},getLogoStyle(){return"en"===this.$store.state.lang.isEn?{transform:"scale(0.78) translateX(-4vw)"}:null},setCurrentRoute(t){this.currentRoute=t}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},r=i,o=e(1656),c=(0,o.A)(r,s,n,!1,null,"e8fd8aa0",null),l=c.exports},4536:function(t,a,e){e.d(a,{A:function(){return l}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"dynamic-data"},[a("div",{staticClass:"dynamic-data-num"},[a("div",{staticClass:"data-page"},[t._v("第"+t._s(t.currentPage)+"页")]),a("div",{staticClass:"data-limit"},[t._v("共"+t._s(t.totalItems)+"条")])]),a("div",{staticClass:"devide-page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalItems,"page-size":t.pageSize,"current-page":t.localCurrentPage},on:{"update:currentPage":function(a){t.localCurrentPage=a},"update:current-page":function(a){t.localCurrentPage=a},"current-change":t.handlePageChange}},[t._v("> ")])],1)])},n=[],i={name:"Pagination",props:["tabDatas","currentPage","totalItems","pageSize"],data(){return{localCurrentPage:this.currentPage}},computed:{currentTabDatas(){const t=(this.localCurrentPage-1)*this.pageSize,a=t+this.pageSize;return this.tabDatas.slice(t,a)}},methods:{handlePageChange(t){this.localCurrentPage=t,this.$emit("update:currentPage",t)}}},r=i,o=e(1656),c=(0,o.A)(r,s,n,!1,null,"9e83a6dc",null),l=c.exports},4202:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},t._l(t.designinfoDatas,(function(e){return a("div",{key:e.academicId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(e.title))]),a("div",{staticClass:"info"},[a("div",{staticClass:"info-browser"},[t._v(t._s(t.$t("meet.browser"))+"："+t._s(e.clickVolume))]),a("div",{staticClass:"info-create"},[t._v(t._s(t.$t("meet.create"))+"："+t._s(e.releaseTime))])]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"10px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},[a("div",{staticClass:"intro",domProps:{innerHTML:t._s(e.contentDetails)}})])])})),0)])},n=[],i=e(2964),r=e(1981),o={name:"Designinfo",props:["tabDatas"],data(){return{designinfoDatas:[]}},mounted(){this.getDesigninfoData()},methods:{getDesigninfoData(t=this.$store.state.lang.version){const a=this.$route.query.id;(0,i.is)({moduleType:"1",status:"1",version:t,id:a}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.designinfoDatas=t.data.rows.filter((t=>t.academicId===a)))}))},ImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .intro img {\n                    width: 100%;\n                    \n                    background-size: cover;\n                    background-position: center;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getDesigninfoData(),this.$store.state.lang.version)}},"$route.query.id":{handler(t){this.id=t,this.getDesigninfoData()},immediate:!0}}},c=o,l=e(1656),d=(0,l.A)(c,s,n,!1,null,"19a0a44f",null),u=d.exports},5539:function(t,a,e){e.r(a),e.d(a,{default:function(){return L}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("Headers"),a("div",{staticClass:"content"},[(t.tabName,t.tabDatas?a("newTabControl",{attrs:{tabName:t.tabName,tabDatas:t.tabDatas},on:{gindex:t.getGindex}}):t._e())],1),a("div",{staticClass:"foot"},[a("Footers")],1)],1)},n=[],i=e(7575),r=function(){var t=this,a=t._self._c;return a("div",{staticClass:"tc"},[a("el-tabs",{staticClass:"ets",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[t._l(t.tabName[0]?.children,(function(e,s){return a("el-tab-pane",{key:s,staticClass:"etp",attrs:{label:e.classifyName,name:e.classifyName}},[a("Breadcrumb",{attrs:{urlData:t.urlData}})],1)})),1===t.currentNum?a("Design",{attrs:{tabDatas:t.localDatas}}):t._e(),2===t.currentNum?a("Standard",{attrs:{tabDatas:t.localDatas}}):t._e(),3===t.currentNum?a("Laboratory",{attrs:{tabDatas:t.localDatas}}):t._e(),4===t.currentNum?a("Resource",{attrs:{tabDatas:t.localDatas}}):t._e()],2)],1)},o=[],c=(e(4114),e(2964)),l=e(2847),d=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[t.showChild?a("router-view"):t._e(),t.showChild?t._e():a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("research.design")))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"10px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},t._l(t.designDatas,(function(e){return a("router-link",{key:e.academicId,staticClass:"doing-in",attrs:{to:t.isSecondLink(t.index)?{name:"Designinfo",query:{id:e.academicId}}:{path:e.externalLink}},nativeOn:{click:function(a){return t.handleLinkClick()}}},[a("div",{staticClass:"doing-img"},[a("img",{attrs:{src:"http://www.wgdo.net"+e.cover,alt:""}})]),a("div",{staticClass:"image-caption"},[t._v(t._s(e.title))])])})),1),a("Pagination",{attrs:{tabDatas:t.tabDatas,pageSize:t.pageSize,currentPage:t.currentPage,totalItems:t.totalItems},on:{currentTabDatas:t.currentTabDatas}})],1)])],1)},u=[],h=e(1981),g=e(4536),m={name:"Design",components:{Pagination:g.A},props:["tabDatas"],data(){return{designDatas:[],currentPage:1,totalItems:0,pageSize:9,showChild:!1}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.designDatas.slice(t,a)}},mounted(){this.getDesignData()},methods:{isSecondLink(t){return t%2===0},getDesignData(t=this.$store.state.lang.version){(0,c.is)({moduleType:"1",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.designDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.currentPage=t},handleLinkClick(t){const a=this.$route.query;this.showChild=!0,a||this.$router.push({name:"Designinfo"})}},watch:{"$store.state.lang.version":{handler(){(0,h.A)(this.getDesignData(),this.$store.state.lang.version)}}}},p=m,v=e(1656),b=(0,v.A)(p,d,u,!1,null,"7ac5e525",null),f=b.exports,D=e(7667),C=e(4660),_=e(2855),y=e(4202),$={name:"Tc",components:{Breadcrumb:l.A,Design:f,Standard:D["default"],Laboratory:C["default"],Resource:_["default"],Designinfo:y["default"]},props:["tabName","tabDatas"],data(){return{activeName:"",currentNum:1,localName:[],localDatas:[],routesData:[],currentRoute:[],urlData:[]}},created(){this.activeName=this.tabName[0]?.children[0]?.classifyName,this.$nextTick((()=>{this.currentNum=1,this.handleClick({$options:{propsData:{name:this.activeName}}})}))},mounted(){this.getCurrentData(),setTimeout((()=>{this.activeName=this.tabName[0]?.children[0]?.classifyName,this.handleClick({$options:{propsData:{name:this.activeName}}})}),500),this.routesData=this.$router.options.routes,this.currentRoute=this.$router.history.current,this.routesData.forEach((t=>{t.name===this.currentRoute.name&&this.urlData.push(t)}))},methods:{handleClick(t){const a=parseInt(t.index);if(!isNaN(a)){this.currentNum=a+1,sessionStorage.setItem("currentNums",this.currentNum),this.urlData.length>1&&this.urlData.pop();let e=t.$options.propsData.name;this.urlData.push({name:e})}},getCurrentData(){let t=sessionStorage.getItem("currentNums");this.localName=this.tabName,this.localDatas=this.tabDatas;let a=JSON.parse(sessionStorage.getItem("ln"));if(!a){sessionStorage.setItem("ln",JSON.stringify(this.localName));JSON.parse(sessionStorage.getItem("ln"))}this.$emit("gindex",this.currentNum),void 0===t?(this.currentNum=1,this.activeName=a[0].children[0].classifyName):(this.currentNum=t,a[0].children.forEach(((t,a)=>{Number(a)+1==this.currentNum&&(this.activeName=t.classifyName)})))},getTabNameData(t){"5"===t?(0,c.rk)({parentId:5}).then((t=>{this.localName=t.data.rows,sessionStorage.setItem("ln",JSON.stringify(this.localName))})):"147"===t&&(0,c.rk)({parentId:147}).then((t=>{this.localName=t.data.rows,sessionStorage.setItem("ln",JSON.stringify(this.localName))}))}},watch:{currentNum:{handler(){this.$emit("gindex",this.currentNum);let t=JSON.parse(sessionStorage.getItem("ln"));if(t&&t[0]&&t[0].children&&t[0].children.length>0){let a=t[0].children.find((t=>Number(t.index)===Number(this.currentNum)));a&&(this.activeName=a.classifyName)}}},tabDatas:{handler(t){this.localDatas=t}},"$store.state.lang.version":{handler(){"en"===this.$store.state.lang.isEn?this.getTabNameData("147"):this.getTabNameData("5")}}},beforeRouteLeave(t,a,e){sessionStorage.removeItem("currentNums"),sessionStorage.removeItem("ln"),e()}},w=$,N=(0,v.A)(w,r,o,!1,null,"4ecef0da",null),A=N.exports,x=e(993),k={name:"Research",components:{Headers:i.A,newTabControl:A,Footers:x.A,Design:f,Standard:D["default"],Laboratory:C["default"],Resource:_["default"],Designinfo:y["default"]},props:["urlData"],data(){return{tabName:[],ResearchDatas:[],tabDatas:[],currentNum:1,name:[],gindex:-1}},mounted(){"en"===this.$store.state.lang.isEn?this.getTabNameData("147"):this.getTabNameData("5"),this.getResearchData()},methods:{getTabNameData(t){"5"===t?(0,c.rk)({parentId:5}).then((t=>{this.tabName=t.data.rows})):"147"===t&&(0,c.rk)({parentId:147}).then((t=>{this.tabName=t.data.rows}))},getResearchData(t,a=this.$store.state.lang.version){(0,c.is)({moduleType:t,version:a,status:"1"}).then((t=>{this.tabDatas=t.data.rows}))},getGindex(t){this.gindex=t}},watch:{"$store.state.lang.version":{handler(){(0,h.A)(this.getTabNameData(),this.$store.state.lang.version),"en"===this.$store.state.lang.isEn?this.getTabNameData("147"):this.getTabNameData("5"),this.getResearchData(this.gindex,this.$store.state.lang.version)}},gindex:{handler(){this.getResearchData(this.gindex,this.$store.state.lang.version)}}}},S=k,I=(0,v.A)(S,s,n,!1,null,"fdc26dc6",null),L=I.exports},4660:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},t._l(t.labDatas,(function(e){return a("div",{key:e.academicId},[a("p",{staticClass:"dynamic"},[t._v(t._s(e.title))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"10px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc",staticStyle:{"margin-bottom":"50px"}},[a("div",{staticClass:"lab",domProps:{innerHTML:t._s(e.contentDetails)}})])])})),0)])])},n=[],i=e(2964),r=e(1981),o={name:"Laboratory",props:["tabDatas"],data(){return{labDatas:[]}},mounted(){this.getLabData()},methods:{getLabData(t=this.$store.state.lang.version){(0,i.is)({moduleType:"3",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.labDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getLabData(),this.$store.state.lang.version)}}}},c=o,l=e(1656),d=(0,l.A)(c,s,n,!1,null,"19620544",null),u=d.exports},2855:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},[a("div",{staticClass:"content-in"},[a("div",{staticClass:"titleintro"},[a("p",{staticClass:"dynamic"},[t._v(t._s(t.$t("research.resource")))]),a("div",{staticStyle:{display:"flex"}},[t.showCheckbox?a("div",{staticClass:"batch-download-btn",staticStyle:{display:"flex","margin-right":"15px"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.batchDownload}},[t._v(t._s(t.$t("research.document")))])],1):t._e(),a("el-button",{attrs:{type:"text"},on:{click:t.toggleCheckbox}},[t._v(t._s(t.$t("research.download")))])],1)]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"10px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{}}),t._l(t.resourceDatas,(function(s){return a("div",{key:s.academicId,staticClass:"dynamic-dsc"},t._l(s.gxfileList,(function(n){return a("div",{key:n.name,staticClass:"dynamic-content"},[a("div",{staticClass:"dynamic-dscall"},[a("div",{staticClass:"dynamic-dscall-top"},[t._v(t._s(n.name))]),a("div",{staticClass:"dynamic-dscall-buttom"},[t._v(t._s(s.createTime))])]),t.showCheckbox?a("el-checkbox",{attrs:{label:n},model:{value:t.selectedFiles,callback:function(a){t.selectedFiles=a},expression:"selectedFiles"}},[t._v(t._s(n.iii))]):t._e(),t.showCheckbox?t._e():a("el-button",{attrs:{type:""},on:{click:function(a){return t.downloadFile(n.url)}}},[a("i",{staticClass:"el-icon--right"},[a("img",{staticStyle:{width:"30px",height:"30px"},attrs:{src:e(3980)}})])])],1)})),0)})),a("Pagination",{attrs:{tabDatas:t.tabDatas,pageSize:t.pageSize,currentPage:t.currentPage,totalItems:t.totalItems},on:{currentTabDatas:t.currentTabDatas}})],2)])])},n=[],i=(e(4603),e(7566),e(8721),e(2964)),r=e(1981),o=e(4373),c=e(4536),l={name:"Resource",props:["tabDatas"],components:{Pagination:c.A},data(){return{resourceDatas:[],currentPage:1,totalItems:0,pageSize:10,selectedFiles:[],showCheckbox:!1}},computed:{currentTabDatas(){const t=(this.currentPage-1)*this.pageSize,a=t+this.pageSize;return this.resourceDatas.slice(t,a)}},mounted(){this.getResourceData()},methods:{getResourceData(t=this.$store.state.lang.version){(0,i.is)({moduleType:"4",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.resourceDatas=t.data.rows,this.totalItems=t.data.rows.length)}))},handlePageChange(t){this.currentPage=t},async downloadFile(t){if(!t)return;const a="http://www.wgdo.net"+t,e=t.split("/").pop();try{const t=await o.A.get(a,{responseType:"blob"}),s=new Blob([t.data]),n=document.createElement("a");n.href=URL.createObjectURL(s),n.download=e,document.body.appendChild(n),n.click(),setTimeout((()=>{document.body.removeChild(n),URL.revokeObjectURL(n.href)}),100)}catch(s){}},toggleCheckbox(){this.showCheckbox=!this.showCheckbox,this.showCheckbox||(this.selectedFiles=[])},batchDownload(){this.selectedFiles.forEach((t=>{this.downloadFile(t.url)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getResourceData(),this.$store.state.lang.version)}}}},d=l,u=e(1656),h=(0,u.A)(d,s,n,!1,null,"f22911c8",null),g=h.exports},7667:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"item"},[a("div",{staticClass:"content"},t._l(t.standardDatas,(function(e){return a("div",{key:e.academicId,staticClass:"content-in"},[a("p",{staticClass:"dynamic"},[t._v(t._s(e.title))]),a("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"10px","margin-bottom":"5px"}}),a("div",{staticClass:"dsc-line",staticStyle:{"margin-bottom":"15px"}}),a("div",{staticClass:"dynamic-dsc"},[a("div",{staticClass:"intro",domProps:{innerHTML:t._s(e.contentDetails)}})])])})),0)])},n=[],i=e(2964),r=e(1981),o={name:"Standard",props:["tabDatas"],data(){return{standardDatas:[]}},mounted(){this.getStandardData()},methods:{getStandardData(t=this.$store.state.lang.version){(0,i.is)({moduleType:"2",status:"1",version:t}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(this.standardDatas=t.data.rows)}))}},watch:{"$store.state.lang.version":{handler(){(0,r.A)(this.getStandardData(),this.$store.state.lang.version)}}}},c=o,l=e(1656),d=(0,l.A)(c,s,n,!1,null,"459f5293",null),u=d.exports},3980:function(t,a,e){t.exports=e.p+"img/download.5355f8a8.png"},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=5539.7915741b.js.map