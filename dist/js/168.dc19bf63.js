"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[168],{3008:function(t,s,a){a.d(s,{A:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[t._m(0),s("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(a){return s("el-breadcrumb-item",{attrs:{to:{path:a.path}}},[s("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(a.name)+" ")])})),1)],1)},r=[function(){var t=this,s=t._self._c;return s("a",{attrs:{href:"/"}},[s("img",{attrs:{src:a(8605)}})])}],i={name:"Breadcrumb",props:["urlData"],mounted(){}},n=i,o=a(1656),l=(0,o.A)(n,e,r,!1,null,"0b00c7bb",null),c=l.exports},4168:function(t,s,a){a.r(s),a.d(s,{default:function(){return g}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("Headers"),s("div",{staticClass:"content"},[s("Breadcrumb",{staticClass:"mianbai",attrs:{urlData:t.urlDatas}}),t._l(t.detData,(function(a,e){return s("div",{key:a.index,staticClass:"cont"},[s("div",{staticClass:"title"},[t._v(t._s(a.title))]),t._m(0,!0),s("div",{staticClass:"dsc",domProps:{innerHTML:t._s(a.contentDetails)}})])}))],2),s("div",{staticClass:"footer"},[s("Footers")],1)],1)},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"lines"},[s("div",{staticClass:"line"}),s("div",{staticClass:"line"})])}],i=(a(4114),a(62)),n=a(7329),o=a(3008),l=a(2964),c=a(1981),d={name:"Details",components:{Headers:i.A,Breadcrumb:o.A,Footers:n.A},data(){let t,s=[],a=[],e="";return{urlDatas:a,detData:s,types:e,indexs:t}},mounted(){this.types=this.$route.params.types,"fourAll"===this.types||"fiveAll"===this.types?this.getCurrentData():(this.indexs=this.$route.params.orders,this.getCurrentData(this.indexs)),this.urlDatas.push({path:this.$route.params.fromPath,name:this.$route.params.fromName},{path:this.$route.path,name:this.$route.name})},methods:{getCurrentData(t="",s=this.$store.state.lang.version){let a=this;switch(a.types){case"fourAll":return void(0,l.Cs)({moduleType:"5",status:"1",version:s}).then((t=>{t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0&&(a.detData=t.data.rows)}));case"fourList":return void(0,l.Cs)({moduleType:"5",status:"1",version:s,currentIndex:t}).then((s=>{s.data&&Array.isArray(s.data.rows)&&s.data.rows.length>0&&s.data.rows.forEach(((s,a)=>{a===t&&(this.detData.pop(),this.detData.push(s))}))}));case"fiveAll":return void(0,l.Cs)({moduleType:"6",status:"1",version:s}).then((t=>{if(t.data&&Array.isArray(t.data.rows)&&t.data.rows.length>0){let[s,...e]=t.data.rows;a.detData=[],a.detData.push(s)}}));case"fiveList":return void(0,l.Cs)({moduleType:"6",status:"1",version:s,currentIndex:t}).then((s=>{if(s.data&&Array.isArray(s.data.rows)&&s.data.rows.length>0){let[e,...r]=s.data.rows;a.detData=[],r.forEach(((s,e)=>{t===e&&(a.detData.pop(),a.detData.push(s))}))}}))}}},watch:{"$store.state.lang.version":{handler(){"fourAll"===this.types||"fiveAll"===this.types?(0,c.A)(this.getCurrentData(),this.$store.state.lang.version):(0,c.A)(this.getCurrentData(this.indexs),this.$store.state.lang.version)}}}},h=d,u=a(1656),v=(0,u.A)(h,e,r,!1,null,"2b242f02",null),g=v.exports},62:function(t,s,a){a.d(s,{A:function(){return c}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"box"},[s("div",{staticClass:"bgs"}),s("div",{staticClass:"f"},[s("div",{staticClass:"hTop"},[t._m(0),s("div",{staticClass:"right"},[s("div",{staticClass:"search"},[s("i",{staticClass:"iconfont icon-sousuo scarchI"}),s("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(s){t.searchInp=s},expression:"searchInp"}})],1),s("div",{staticClass:"rightList"},[s("div",{staticClass:"login"},[s("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),s("div",{staticClass:"loginO"}),s("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),s("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[s("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(1)])])])]),s("div",{staticClass:"hBottom",class:"en"===t.$store.state.lang.isEn?"isBottom":"hBottom"},[s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),s("router-link",{class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},r=[function(){var t=this,s=t._self._c;return s("a",{attrs:{href:"/"}},[s("div",{staticClass:"logo"},[s("img",{staticClass:"logoImg",attrs:{src:"https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3"}}),s("div",{staticClass:"logoDsc"},[s("div",{staticClass:"logoDscTop"},[t._v("世界绿色设计组织")]),s("div",{staticClass:"logoDscBot"},[t._v("World Green Design Organization")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"langO",staticStyle:{display:"none"}},[s("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],i={name:"HeaderNav",data(){let t="",s=["关于我们","会议活动","媒体中心","学术研究","公益项目","国际绿奖","WGDO绿研院","绿叶标"],a=!0,e="En";return{searchInp:t,bannerNavList:s,isText1Visible:a,lang:e}},mounted(){this.isText1Visible=!1},methods:{changeLang(){this.isText1Visible=!this.isText1Visible,1==this.isText1Visible?this.lang="中文":this.lang="En",this.$store.commit("getLocalLang",this.lang),this.$store.commit("getVersion")}}},n=i,o=a(1656),l=(0,o.A)(n,e,r,!1,null,"2e0058fd",null),c=l.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=168.dc19bf63.js.map