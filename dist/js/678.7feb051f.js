"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[678],{5322:function(t,s,e){e.d(s,{A:function(){return h}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[t._m(0),s("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(e){return s("el-breadcrumb-item",{attrs:{to:{path:e.path}}},[s("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(e.name)+" ")])})),1)],1)},r=[function(){var t=this,s=t._self._c;return s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:e(8605)}})])}],n=(e(2964),{name:"Breadcrumb",props:["urlData"],mounted(){}}),i=n,o=e(1656),l=(0,o.A)(i,a,r,!1,null,"729f9c65",null),h=l.exports},6678:function(t,s,e){e.r(s),e.d(s,{default:function(){return p}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("Headers"),s("div",{staticClass:"content"},[s("Breadcrumb",{staticClass:"mianbai",attrs:{urlData:t.urlDatas}}),t._l(t.detData,(function(e,a){return s("div",{key:e.index,staticClass:"cont"},[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._m(0,!0),s("div",{staticClass:"dsc",domProps:{innerHTML:t._s(e.contentDetails)}})])}))],2),s("div",{staticClass:"footer"},[s("Footers")],1)],1)},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"lines"},[s("div",{staticClass:"line"}),s("div",{staticClass:"line"})])}],n=(e(4114),e(1097)),i=e(7329),o=e(5322),l=e(2964),h=e(1981),c={name:"Details",components:{Headers:n.A,Breadcrumb:o.A,Footers:i.A},data(){let t,s=[],e=[],a="";return{urlDatas:e,detData:s,types:a,indexs:t,currentIndexSession:Number(sessionStorage.getItem("currentIndex"))}},mounted(){isNaN(this.currentIndexSession)||this.getCurrentData(this.currentIndexSession,this.$store.state.lang.version,sessionStorage.getItem("currentType")),this.types=this.$route.params.types,"fourAll"===this.types||"fiveAll"===this.types?this.getCurrentData():"fourList"!==this.types&&"fiveList"!==this.types||(this.indexs=this.$route.params.orders,window.sessionStorage.setItem("currentIndex",this.$route.params.orders),window.sessionStorage.setItem("currentType",this.$route.params.types),this.currentIndexSession=Number(sessionStorage.getItem("currentIndex")),this.getCurrentData(this.indexs)),"en"!==this.$store.state.lang.isEn?(this.urlDatas=[],"fourList"===this.types||"fourAll"===this.types?this.urlDatas.push({path:"/",name:"首页"},{path:this.$route.path,name:"世界绿色设计园"}):this.urlDatas.push({path:"/",name:"首页"},{path:this.$route.path,name:"品牌项目"})):(this.urlDatas=[],"fourList"===this.types||"fourAll"===this.types?this.urlDatas.push({path:"/",name:"Home"},{path:this.$route.path,name:"World Green Design Park"}):this.urlDatas.push({path:"/",name:"Home"},{path:this.$route.path,name:"Brand Project"}))},methods:{getCurrentData(t="",s=this.$store.state.lang.version,e){let a=this;switch(e||a.types){case"fourAll":return void(0,l.Cs)({moduleType:"5",status:"1",version:s}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(a.detData=t.data.rows)}));case"fourList":return void(0,l.Cs)({moduleType:"5",status:"1",version:s,currentIndex:t}).then((s=>{s.data&&Array.isArray(s.data.rows)&&s.data.rows.length>0&&s.data.rows.forEach(((s,e)=>{e===t&&(this.detData.pop(),this.detData.push(s))}))}));case"fiveAll":return void(0,l.Cs)({moduleType:"6",status:"1",version:s}).then((t=>{if(t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0){let[s,...e]=t.data.rows;a.detData=[],a.detData.push(s)}}));case"fiveList":return void(0,l.Cs)({moduleType:"6",status:"1",version:s,currentIndex:t}).then((s=>{if(s.data&&Array.isArray(s.data.rows)&&s.data.rows.length>0){let[e,...r]=s.data.rows;a.detData=[],r.forEach(((s,e)=>{t===e&&(a.detData.pop(),a.detData.push(s))}))}}))}}},watch:{"$store.state.lang.version":{handler(){"fourAll"===this.types||"fiveAll"===this.types?(0,h.A)(this.getCurrentData(),this.$store.state.lang.version):(0,h.A)(this.getCurrentData(this.indexs),this.$store.state.lang.version),isNaN(this.currentIndexSession)||this.getCurrentData(this.currentIndexSession,this.$store.state.lang.version,sessionStorage.getItem("currentType")),"en"!==this.$store.state.lang.isEn?(this.urlDatas=[],"fourList"===this.types||"fourAll"===this.types?this.urlDatas.push({path:"/",name:"首页"},{path:this.$route.path,name:"世界绿色设计园"}):this.urlDatas.push({path:"/",name:"首页"},{path:this.$route.path,name:"品牌项目"})):(this.urlDatas=[],"fourList"===this.types||"fourAll"===this.types?this.urlDatas.push({path:"/",name:"Home"},{path:this.$route.path,name:"World Green Design Park"}):this.urlDatas.push({path:"/",name:"Home"},{path:this.$route.path,name:"Brand Project"}))}}},beforeRouteLeave(t,s,e){sessionStorage.removeItem("currentIndex"),sessionStorage.removeItem("currentType"),e()}},u=c,d=e(1656),g=(0,d.A)(u,a,r,!1,null,"ff456cd8",null),p=g.exports},1097:function(t,s,e){e.d(s,{A:function(){return h}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("div",{staticClass:"bgs"}),s("div",{staticClass:"f"},[s("div",{staticClass:"hTop"},[t._m(0),s("div",{staticClass:"right"},[s("div",{staticClass:"search"},[s("i",{staticClass:"iconfont icon-sousuo scarchI"}),s("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(s){t.searchInp=s},expression:"searchInp"}})],1),s("div",{staticClass:"rightList"},[s("div",{staticClass:"login"},[s("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),s("div",{staticClass:"loginO"}),s("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),s("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[s("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(1)])])])]),s("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[s("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),s("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),s("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),s("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),s("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),s("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),s("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),s("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},r=[function(){var t=this,s=t._self._c;return s("a",{attrs:{href:"/"}},[s("div",{staticClass:"logo"},[s("img",{staticClass:"logoImg",attrs:{src:"https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3"}}),s("div",{staticClass:"logoDsc"},[s("div",{staticClass:"logoDscTop"},[t._v("世界绿色设计组织")]),s("div",{staticClass:"logoDscBot"},[t._v("World Green Design Organization")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"langO",staticStyle:{display:"none"}},[s("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],n={name:"HeaderNav",data(){let t="",s="中文";return{searchInp:t,lang:s}},created(){this.lang=this.$store.state.lang.langs},mounted(){this.$nextTick((()=>{const t="中文"===this.lang?"zhBottom":"enBottom",s="中文"===this.lang?"ens":"zhs";this.$refs.changeLangue&&this.$refs.changeLangue.classList.add(t),this.$refs.changeLanguea&&this.$refs.changeLanguea.length&&this.$refs.changeLanguea.forEach((t=>{t.classList.add(s)}))}))},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},i=n,o=e(1656),l=(0,o.A)(i,a,r,!1,null,"086ece08",null),h=l.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=678.7feb051f.js.map