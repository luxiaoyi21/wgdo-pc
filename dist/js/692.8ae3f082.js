"use strict";(self["webpackChunkwgdo"]=self["webpackChunkwgdo"]||[]).push([[692],{3008:function(a,t,s){s.d(t,{A:function(){return o}});var e=function(){var a=this,t=a._self._c;return t("div",{staticClass:"box"},[a._m(0),t("el-breadcrumb",{staticClass:"ebc",attrs:{"separator-class":"el-icon-arrow-left"}},a._l(a.urlData,(function(s){return t("el-breadcrumb-item",{attrs:{to:{path:s.path}}},[t("i",{staticClass:"iconfont icon-zuojiantou",attrs:{id:"lef"}}),a._v(" "+a._s(s.name)+" ")])})),1)],1)},n=[function(){var a=this,t=a._self._c;return t("a",{attrs:{href:"/"}},[t("img",{attrs:{src:s(8605)}})])}],i={name:"Breadcrumb",props:["urlData"],mounted(){}},r=i,c=s(1656),l=(0,c.A)(r,e,n,!1,null,"0b00c7bb",null),o=l.exports},7613:function(a,t,s){s.d(t,{A:function(){return o}});var e=function(){var a=this,t=a._self._c;return t("div",{staticClass:"box"},[t("div",{staticClass:"bgs"}),t("div",{staticClass:"f"},[t("div",{staticClass:"hTop"},[a._m(0),t("div",{staticClass:"right"},[t("div",{staticClass:"search"},[t("i",{staticClass:"iconfont icon-sousuo scarchI"}),t("el-input",{staticClass:"searchIn",attrs:{placeholder:a.$t("headernav.search")},model:{value:a.searchInp,callback:function(t){a.searchInp=t},expression:"searchInp"}})],1),t("div",{staticClass:"rightList"},[t("div",{staticClass:"login"},[t("a",{attrs:{href:"login"}},[a._v(a._s(a.$t("headernav.Login")))])]),t("div",{staticClass:"loginO"}),t("div",{staticClass:"sed"},[a._v(a._s(a.$t("headernav.Be our merber")))]),t("div",{staticClass:"langs",staticStyle:{cursor:"pointer"},on:{click:a.changeLang}},[t("div",{staticClass:"lang"},[a._v(a._s(a.lang))]),a._m(1)])])])]),t("div",{ref:"changeLangue",class:"中文"===a.$store.state.lang.langs?"zhBottom":"enBottom"},[t("a",{ref:"changeLanguea",class:"zh"===a.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/about"}},[a._v(" "+a._s(a.$t("headernav.Aboutus"))+" ")]),t("a",{ref:"changeLanguea",class:"zh"===a.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/meet"}},[a._v(" "+a._s(a.$t("headernav.Conferenceactivity"))+" ")]),t("a",{ref:"changeLanguea",class:"zh"===a.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/media"}},[a._v(" "+a._s(a.$t("headernav.Mediacenter"))+" ")]),t("a",{ref:"changeLanguea",class:"zh"===a.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/research"}},[a._v(" "+a._s(a.$t("headernav.Academicresearch"))+" ")]),t("a",{ref:"changeLanguea",class:"zh"===a.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/project"}},[a._v(" "+a._s(a.$t("headernav.Publicwelfareproject"))+" ")]),t("a",{ref:"changeLanguea",class:"zh"===a.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/prize"}},[a._v(" "+a._s(a.$t("headernav.InternationalGreenAward"))+" ")]),t("a",{ref:"changeLanguea",class:"zh"===a.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"/wgdo"}},[a._v(" "+a._s(a.$t("headernav.WGDOGreenResearchInstitute"))+" ")]),t("a",{ref:"changeLanguea",class:"zh"===a.$store.state.lang.isEn?"ha":"isEn",attrs:{href:"http://lyb.wgdo.net/"}},[a._v(" "+a._s(a.$t("headernav.Greenleaflabel"))+" ")])])])])},n=[function(){var a=this,t=a._self._c;return t("a",{attrs:{href:"/"}},[t("div",{staticClass:"logo"},[t("img",{staticClass:"logoImg",attrs:{src:"https://img.js.design/assets/img/656e8dc581ed4034e8a418ee.png#680cdd771a71f03f8da7ef2659786ac3"}}),t("div",{staticClass:"logoDsc"},[t("div",{staticClass:"logoDscTop"},[a._v("世界绿色设计组织")]),t("div",{staticClass:"logoDscBot"},[a._v("World Green Design Organization")])])])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"langO",staticStyle:{display:"none"}},[t("i",{staticClass:"iconfont icon-xiangxiajiantou"})])}],i={name:"HeaderNav",data(){let a,t="";return{searchInp:t,lang:a}},created(){this.lang=this.$store.state.lang.langs,"中文"===this.$store.state.lang.langs?(this.$refs.changeLangue.classList.add("enBottom"),this.$refs.changeLanguea.classList.add("ens")):(this.$refs.changeLangue.classList.add("zhBottom"),this.$refs.changeLanguea.classList.add("zhs"))},mounted(){this.lang=this.$store.state.lang.langs},methods:{changeLang(){this.$store.commit("getLocalLang"),this.$store.commit("getVersion")}},watch:{"$store.state.lang.isText1Visible":{handler(){this.lang=this.$store.state.lang.langs}}}},r=i,c=s(1656),l=(0,c.A)(r,e,n,!1,null,"1cc270e2",null),o=l.exports},5692:function(a,t,s){s.r(t),s.d(t,{default:function(){return v}});var e=function(){var a=this,t=a._self._c;return t("div",{staticClass:"item"},[t("Headers"),t("div",{staticClass:"content"},[t("div",{staticClass:"content-in"},[t("Breadcrumb",{attrs:{urlData:a.urlData}}),t("p",{staticClass:"dynamic"},[a._v("绿色设计观点")]),t("div",{staticClass:"dsc-line",staticStyle:{"margin-top":"15px","margin-bottom":"5px"}}),t("div",{staticClass:"dynamic-dsc"},a._l(a.moredetDatas,(function(s){return t("a",{key:s.mediacenterId,staticClass:"dynamic-content",attrs:{href:s.externalLink}},[t("div",{staticClass:"dynamic-time"},[t("div",{staticClass:"dynamic-time-top"},[a._v(a._s(s.timer))]),t("div",{staticClass:"dynamic-time-buttom"},[a._v(a._s(s.year))])]),a._m(0,!0),t("div",{staticClass:"dynamic-dscall"},[t("div",{staticClass:"dynamic-dscall-top"},[a._v(a._s(s.title))]),t("div",{staticClass:"dynamic-dscall-buttom"},[a._v(a._s(s.intro))])])])})),0),t("div",{staticClass:"dynamic-data"},[t("div",{staticClass:"dynamic-data-num"},[t("div",{staticClass:"data-page"},[a._v("第"+a._s(a.currentPage)+"页")]),t("div",{staticClass:"data-limit"},[a._v("共"+a._s(a.totalItems)+"条")])]),t("div",{staticClass:"devide-page"},[t("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:a.totalItems,"page-size":a.pageSize,"current-page":a.currentPage},on:{"update:currentPage":function(t){a.currentPage=t},"update:current-page":function(t){a.currentPage=t},"current-change":a.handlePageChange}},[a._v("> ")])],1)])],1)]),t("div",{staticClass:"foot"},[t("Footers")],1)],1)},n=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"dynamic-blank"},[t("div",{staticClass:"dynamic-blankin"})])}],i=(s(4114),s(2964)),r=s(7613),c=s(3008),l=s(7329),o=s(1981),d={name:"MoreDet",components:{Headers:r.A,Breadcrumb:c.A,Footers:l.A},data(){let a=[],t=[];return{moredetDatas:a,currentPage:1,totalItems:0,pageSize:10,urlData:t}},mounted(){this.getMoredetData(),(this.$store.state.lang.version="1")&&this.urlData.push({path:"/",name:"首页"},{path:"/sedmore",name:"绿色设计观点"})},computed:{currentTabDatas(){const a=(this.currentPage-1)*this.pageSize,t=a+this.pageSize;return this.moredetDatas.slice(a,t)}},methods:{getMoredetData(a=this.$store.state.lang.version){(0,i.Cs)({moduleType:"1",status:"1",version:a}).then((a=>{a.data&&Array.isArray(a.data.rows)&&a.data.rows.length>0&&(this.moredetDatas=a.data.rows.map((a=>{const t=this.gettime(a.releaseTime);return{...a,year:t.year,timer:t.timer}})),this.totalItems=a.data.rows.length)}))},gettime(a){const t=new Date(a),s=t.getFullYear(),e=("0"+(t.getMonth()+1)).slice(-2),n=("0"+t.getDate()).slice(-2);return{year:s,timer:e+"-"+n}},handlePageChange(a){this.currentPage=a}},watch:{"$store.state.lang.version":{handler(){(0,o.A)(this.getMoredetData(),this.$store.state.lang.version)}}}},g=d,h=s(1656),u=(0,h.A)(g,e,n,!1,null,"50903b1d",null),v=u.exports},8605:function(a){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACzSURBVCiRlY69DcIwEEbfOYyBEA07uEnkdDhbMAnxUoQuFjTZgQqJOXI0WOLHicjX+T6/uweZVI1tK2+19LbP9fI9KL3tBVx6K8RCCfE8xB/I7a0bhexmAKPUCTRJZw4AGIXe7a0DkKqxLcpxDviIEKTyVv8GkqpR6kWEEARgybVLN4jJFQoRIUzqTW48Da1CzHWr3FDAzSmb169JlfekywXA/faIm93aCWwnCSFcu+EA8ARWXDZVPMtimgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=692.8ae3f082.js.map