"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[834],{3329:function(t,a,e){e.d(a,{A:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[t._m(0),a("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},t._l(t.urlData,(function(e){return a("el-breadcrumb-item",{attrs:{to:{path:e.path}}},[a("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),t._v(" "+t._s(e.name)+" ")])})),1)],1)},n=[function(){var t=this,a=t._self._c;return a("a",{attrs:{href:"/"}},[a("img",{attrs:{src:e(8605)}})])}],r=(e(2964),{name:"Breadcrumb",props:["urlData"],data(){return{}},mounted(){},computed:{},methods:{addBreadcrumb(t){const a={name:"组织动态详情",path:`${t.path}/dynamicinfo`};this.$emit("update:urlData",[...this.urlData,a])}}}),i=r,o=e(1656),l=(0,o.A)(i,s,n,!1,null,"3b7e43d3",null),c=l.exports},4453:function(t,a,e){e.r(a),e.d(a,{default:function(){return p}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("Headers"),a("div",{staticClass:"content"},[a("Breadcrumb",{staticClass:"mianbai",attrs:{urlData:t.urlDatas}}),t._l(t.detData,(function(e){return a("div",{key:e.hpId,staticClass:"cont"},[a("div",{staticClass:"title",class:"en"===t.$store.state.lang.isEn?"titleEN":"title"},[t._v(t._s(e.title))]),a("div",{staticClass:"titletwo"},[a("span",[t._v(t._s(t.$t("meet.browser"))+":"+t._s(e.clickVolume))]),a("span",[t._v(t._s(t.$t("meet.create"))+":"+t._s(e.releaseTime))])]),t._m(0,!0),a("div",{staticClass:"dsc",staticStyle:{"margin-top":"15px","font-size":"15px","font-weight":"400","letter-spacing":"0px","line-height":"25px",color:"rgba(51, 51, 51, 1)","text-align":"justify"},domProps:{innerHTML:t._s(e.contentDetails)}})])}))],2),a("div",{staticClass:"footer"},[a("Footers")],1)],1)},n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"lines"},[a("div",{staticClass:"line"}),a("div",{staticClass:"line"})])}],r=(e(4114),e(3038)),i=e(3329),o=e(5341),l=e(2964),c=e(1981),h={name:"Det",components:{Headers:r.A,Breadcrumb:i.A,Footers:o.A},data(){let t,a=[],e=[];return{detData:a,urlDatas:e,orders:t}},mounted(){"string"===typeof this.$route.params.orders?this.getSecondData():(this.orders=this.$route.params.orders,this.getSecondData(this.orders)),"en"!==this.$store.state.lang.isEn?(this.urlDatas=[],this.urlDatas.push({path:"/",name:"首页"},{path:this.$route.path,name:"组织动态"})):(this.urlDatas=[],this.urlDatas.push({path:"/",name:"Home"},{path:this.$route.path,name:"Organizational dynamics"})),this.ImageStyles()},methods:{getSecondData(t="",a=this.$store.state.lang.version){(0,l.Cs)({moduleType:"2",status:"1",version:a,currentIndex:t}).then((a=>{a.data&&Array.isArray(a.data.rows)&&a.data.rows.length>0&&(""===t?this.detData=a.data.rows:(this.detData.pop(),this.detData.push(a.data.rows[t])))}))},ImageStyles(){const t=document.createElement("style");t.type="text/css",t.innerHTML="\n                .dsc img {\n                    width: 100%;\n                    \n                    background-size: cover;\n                    background-position: center;\n                }\n            ",document.head.appendChild(t)}},watch:{"$store.state.lang.version":{handler(){this.orders>9999?(0,c.A)(this.getSecondData(),this.$store.state.lang.version):(0,c.A)(this.getSecondData(this.orders),this.$store.state.lang.version),"en"!==this.$store.state.lang.isEn?(this.urlDatas=[],this.urlDatas.push({path:"/",name:"首页"},{path:this.$route.path,name:"组织动态"})):(this.urlDatas=[],this.urlDatas.push({path:"/",name:"Home"},{path:this.$route.path,name:"Organizational dynamics"}))}}}},u=h,g=e(1656),d=(0,g.A)(u,s,n,!1,null,"20e8fdc4",null),p=d.exports},3038:function(t,a,e){e.d(a,{A:function(){return c}});var s=function(){var t=this,a=t._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"bgs"}),a("div",{staticClass:"f"},[a("div",{staticClass:"hTop"},[a("a",{attrs:{href:"/"}},[a("div",{staticClass:"logo"},[a("img",{style:t.getLogoStyle(),attrs:{src:t.getLogoPath(),alt:"Logo"}})])]),a("div",{staticClass:"right"},[a("div",{staticClass:"search"},[a("i",{staticClass:"iconfont icon-sousuo scarchI"}),a("el-input",{staticClass:"searchIn",attrs:{placeholder:t.$t("headernav.search")},model:{value:t.searchInp,callback:function(a){t.searchInp=a},expression:"searchInp"}})],1),a("div",{staticClass:"rightList"},[a("div",{staticClass:"login"},[a("a",{attrs:{href:"login"}},[t._v(t._s(t.$t("headernav.Login")))])]),a("div",{staticClass:"loginO"}),a("div",{staticClass:"sed"},[t._v(t._s(t.$t("headernav.Be our merber")))]),a("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:t.changeLang}},[a("div",{staticClass:"lang"},[t._v(t._s(t.lang))]),t._m(0)])])])]),a("div",{ref:"changeLangue",class:"中文"===t.$store.state.lang.langs?"zhBottom":"enBottom"},[a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/about"===t.$route.path},attrs:{to:"/about"}},[t._v(" "+t._s(t.$t("headernav.Aboutus"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/meet"===t.$route.path},attrs:{to:"/meet"}},[t._v(" "+t._s(t.$t("headernav.Conferenceactivity"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/media"===t.$route.path},attrs:{to:"/media"}},[t._v(" "+t._s(t.$t("headernav.Mediacenter"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/research"===t.$route.path},attrs:{to:"/research"}},[t._v(" "+t._s(t.$t("headernav.Academicresearch"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/project"===t.$route.path},attrs:{to:"/project"}},[t._v(" "+t._s(t.$t("headernav.Publicwelfareproject"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/prize"===t.$route.path},attrs:{to:"/prize"}},[t._v(" "+t._s(t.$t("headernav.InternationalGreenAward"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn,active:"/wgdo"===t.$route.path},attrs:{to:"/wgdo"}},[t._v(" "+t._s(t.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),a("router-link",{ref:"changeLanguea",class:{isEn:"en"===t.$store.state.lang.isEn,ha:"en"!==t.$store.state.lang.isEn},attrs:{to:"http://lyb.wgdo.net/"}},[t._v(" "+t._s(t.$t("headernav.Greenleaflabel"))+" ")])],1)])])},n=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"langO",staticStyle:{display:"none"}},[a("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],r={name:"HeaderNav",data(){let t="",a="中文";return{searchInp:t,lang:a,currentRoute:""}},created(){this.lang=this.$store.state.lang.langs},mounted(){this.$nextTick((()=>{const t="中文"===this.lang?"zhBottom":"enBottom",a="中文"===this.lang?"ens":"zhs";this.$refs.changeLangue&&this.$refs.changeLangue.classList.add(t),this.$refs.changeLanguea&&this.$refs.changeLanguea.length&&this.$refs.changeLanguea.forEach((t=>{t.classList.add(a)}))}))},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")},getLogoPath(){return"en"===this.$store.state.lang.isEn?e(6140):e(5158)},getLogoStyle(){return"en"===this.$store.state.lang.isEn?{transform:"scale(0.78) translateX(-54px)"}:null},setCurrentRoute(t){this.currentRoute=t}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},i=r,o=e(1656),l=(0,o.A)(i,s,n,!1,null,"2055e38b",null),c=l.exports},8605:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=834.68259f6e.js.map