"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[678],{3008:function(t,s,a){a.d(s,{A:function(){return l}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[t._m(0),s("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(a){return s("el-breadcrumb-item",{attrs:{to:{path:a.path}}},[s("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(a.name)+" ")])})),1)],1)},r=[function(){var t=this,s=t._self._c;return s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:a(8605)}})])}],n={name:"Breadcrumb",props:["urlData"],mounted(){}},i=n,o=a(1656),h=(0,o.A)(i,e,r,!1,null,"0b00c7bb",null),l=h.exports},6678:function(t,s,a){a.r(s),a.d(s,{default:function(){return p}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("Headers"),s("div",{staticClass:"content"},[s("Breadcrumb",{staticClass:"mianbai",attrs:{urlData:t.urlDatas}}),t._l(t.detData,(function(a,e){return s("div",{key:a.index,staticClass:"cont"},[s("div",{staticClass:"title"},[t._v(t._s(a.title))]),t._m(0,!0),s("div",{staticClass:"dsc",domProps:{innerHTML:t._s(a.contentDetails)}})])}))],2),s("div",{staticClass:"footer"},[s("Footers")],1)],1)},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"lines"},[s("div",{staticClass:"line"}),s("div",{staticClass:"line"})])}],n=(a(4114),a(7613)),i=a(7329),o=a(3008),h=a(2964),l=a(1981),c={name:"Details",components:{Headers:n.A,Breadcrumb:o.A,Footers:i.A},data(){let t,s=[],a=[],e="";return{urlDatas:a,detData:s,types:e,indexs:t,currentIndexSession:Number(sessionStorage.getItem("currentIndex"))}},mounted(){isNaN(this.currentIndexSession)||this.getCurrentData(this.currentIndexSession,this.$store.state.lang.version,sessionStorage.getItem("currentType")),this.types=this.$route.params.types,"fourAll"===this.types||"fiveAll"===this.types?this.getCurrentData():"fourList"!==this.types&&"fiveList"!==this.types||(this.indexs=this.$route.params.orders,window.sessionStorage.setItem("currentIndex",this.$route.params.orders),window.sessionStorage.setItem("currentType",this.$route.params.types),this.currentIndexSession=Number(sessionStorage.getItem("currentIndex")),this.getCurrentData(this.indexs)),"en"!==this.$store.state.lang.isEn?(this.urlDatas=[],"fourList"===this.types||"fourAll"===this.types?this.urlDatas.push({path:"/",name:"首页"},{path:this.$route.path,name:"世界绿色设计园"}):this.urlDatas.push({path:"/",name:"首页"},{path:this.$route.path,name:"品牌项目"})):(this.urlDatas=[],"fourList"===this.types||"fourAll"===this.types?this.urlDatas.push({path:"/",name:"Home"},{path:this.$route.path,name:"World Green Design Park"}):this.urlDatas.push({path:"/",name:"Home"},{path:this.$route.path,name:"Brand Project"}))},methods:{getCurrentData(t="",s=this.$store.state.lang.version,a){let e=this;switch(a||e.types){case"fourAll":return void(0,h.Cs)({moduleType:"5",status:"1",version:s}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(e.detData=t.data.rows)}));case"fourList":return void(0,h.Cs)({moduleType:"5",status:"1",version:s,currentIndex:t}).then((s=>{s.data&&Array.isArray(s.data.rows)&&s.data.rows.length>0&&s.data.rows.forEach(((s,a)=>{a===t&&(this.detData.pop(),this.detData.push(s))}))}));case"fiveAll":return void(0,h.Cs)({moduleType:"6",status:"1",version:s}).then((t=>{if(t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0){let[s,...a]=t.data.rows;e.detData=[],e.detData.push(s)}}));case"fiveList":return void(0,h.Cs)({moduleType:"6",status:"1",version:s,currentIndex:t}).then((s=>{if(s.data&&Array.isArray(s.data.rows)&&s.data.rows.length>0){let[a,...r]=s.data.rows;e.detData=[],r.forEach(((s,a)=>{t===a&&(e.detData.pop(),e.detData.push(s))}))}}))}}},watch:{"$store.state.lang.version":{handler(){"fourAll"===this.types||"fiveAll"===this.types?(0,l.A)(this.getCurrentData(),this.$store.state.lang.version):(0,l.A)(this.getCurrentData(this.indexs),this.$store.state.lang.version),isNaN(this.currentIndexSession)||this.getCurrentData(this.currentIndexSession,this.$store.state.lang.version,sessionStorage.getItem("currentType")),"en"!==this.$store.state.lang.isEn?(this.urlDatas=[],"fourList"===this.types||"fourAll"===this.types?this.urlDatas.push({path:"/",name:"首页"},{path:this.$route.path,name:"世界绿色设计园"}):this.urlDatas.push({path:"/",name:"首页"},{path:this.$route.path,name:"品牌项目"})):(this.urlDatas=[],"fourList"===this.types||"fourAll"===this.types?this.urlDatas.push({path:"/",name:"Home"},{path:this.$route.path,name:"World Green Design Park"}):this.urlDatas.push({path:"/",name:"Home"},{path:this.$route.path,name:"Brand Project"}))}}},beforeRouteLeave(t,s,a){sessionStorage.removeItem("currentIndex"),sessionStorage.removeItem("currentType"),a()}},u=c,d=a(1656),g=(0,d.A)(u,e,r,!1,null,"ff456cd8",null),p=g.exports},7613:function(t,s,a){a.d(s,{A:function(){return l}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("div",{staticClass:"bgs"}),s("div",{staticClass:"f"},[s("div",{staticClass:"hTop"},[t._m(0),s("div",{staticClass:"right"},[s("div",{staticClass:"search"},[s("i",{staticClass:"iconfont icon-sousuo scarchI"}),s("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(s){t.searchInp=s},expression:"searchInp"}})],1),s("div",{staticClass:"rightList"},[s("div",{staticClass:"login"},[s("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),s("div",{staticClass:"loginO"}),s("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),s("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[s("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(1)])])])]),s("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[s("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),s("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),s("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),s("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),s("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),s("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),s("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),s("a",{ref:"changeLanguea",class:"zh"===t.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])])])])},r=[function(){var t=this,s=t._self._c;return s("a",{attrs:{href:"/"}},[s("div",{staticClass:"logo"},[s("img",{staticClass:"logoImg",attrs:{src:"https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3"}}),s("div",{staticClass:"logoDsc"},[s("div",{staticClass:"logoDscTop"},[t._v("世界绿色设计组织")]),s("div",{staticClass:"logoDscBot"},[t._v("World Green Design Organization")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"langO",staticStyle:{display:"none"}},[s("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],n={name:"HeaderNav",data(){let t,s="";return{searchInp:s,lang:t}},created(){this.lang=this.$store.state.lang.langs,"中文"===this.$store.state.lang.langs?(this.$refs.changeLangue.classList.add("enBottom"),this.$refs.changeLanguea.classList.add("ens")):(this.$refs.changeLangue.classList.add("zhBottom"),this.$refs.changeLanguea.classList.add("zhs"))},mounted(){this.lang=this.$store.state.lang.langs},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},i=n,o=a(1656),h=(0,o.A)(i,e,r,!1,null,"1cc270e2",null),l=h.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=678.42c68b8d.js.map