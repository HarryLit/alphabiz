(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"0818":function(e,t,s){},2618:function(e,t,s){},"3a45":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"flex"},[s("q-scroll-area",{staticStyle:{"min-height":"100%","min-width":"100%"}},[s("div",{staticClass:"q-my-lg q-mx-md"},[s("q-input",{attrs:{outlined:"",dense:"",label:"Resource Title"},scopedSlots:e._u([{key:"before",fn:function(){},proxy:!0},{key:"after",fn:function(){return[s("alphabiz-button",{attrs:{label:e.$t("lib_search"),"on-click":e.handleSearch}})]},proxy:!0}]),model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1),s("q-separator",{staticClass:"q-mb-md"}),s("div",{staticClass:"resource-layout"},e._l(e.resources,(function(t,a){return s("div",{key:a},[t?s("ResourceCard",{attrs:{data:t}}):e._e()],1)})),0)],1)],1)},r=[],i=(s("ddb0"),s("d573")),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-card",{staticClass:"resource-card",attrs:{flat:"",bordered:""}},[s("q-dialog",{model:{value:e.showDetailDialog,callback:function(t){e.showDetailDialog=t},expression:"showDetailDialog"}},[e.title&&e.source?s("q-card",{staticClass:"q-pa-md",staticStyle:{"min-width":"600px"},attrs:{flat:"",bordered:""}},[s("div",{staticClass:"text-weight-bold",staticStyle:{"font-size":"1.4rem"}},[e._v(e._s(e.title["en-us"]))]),s("div",{staticClass:"text-caption non-selectable"},[e._v(e._s(e.id))]),s("div",{staticClass:"q-py-sm",staticStyle:{margin:"0 -8px"}},e._l(e.source,(function(t,a){return s("div",{key:a,staticClass:"q-pa-md source-item",on:{click:function(t){return e.handleSourceClick(a)}}},[s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("div",{staticClass:"q-mr-md",staticStyle:{"font-weight":"bold","font-size":"1rem"}},[e._v(e._s(e.$t("lib_resource_rating"))+": ")]),s("q-rating",{attrs:{value:parseInt(t.rating),size:"1.4rem",max:10,color:"primary"}})],1),s("div",{staticClass:"q-my-sm"},[s("span",{staticClass:"q-mr-md",staticStyle:{"font-weight":"bold","font-size":"1rem"}},[e._v(e._s(e.$t("lib_resource_link"))+":")]),s("span",{staticStyle:{"font-weight":"bold","font-size":"1rem"}},[e._v(e._s(t.link))])]),s("div",[s("div",{staticStyle:{"font-weight":"bold","font-size":"1rem"}},[e._v(e._s(e.$t("lib_resource_comments"))+":")]),s("div",[e._v(e._s(t.comments))])])])})),0)]):e._e()],1),s("div",{staticClass:"resource-button"},[s("alphabiz-button",{attrs:{"button-type":"icon",size:"xl",icon:"play_arrow"},on:{click:e.handleClick}})],1),s("div",{staticClass:"resource-bottom"},[s("div",{staticClass:"resource-info"},[e.title&&e.title["en-us"]?[s("div",{staticClass:"text-weight-bold",staticStyle:{"font-size":"1.4rem"}},[e._v(e._s(e.title["en-us"]))]),s("div",{staticClass:"text-caption non-selectable"},[e._v(e._s(e.id))])]:[s("q-skeleton",{staticStyle:{"font-size":"1.4rem"},attrs:{type:"text"}}),s("q-skeleton",{attrs:{type:"text"}})]],2)]),s("div",{staticClass:"resource-mask"}),s("div",{staticClass:"resource-cover"},[e.coverLoaded?e._e():s("q-skeleton",{staticClass:"full-height",attrs:{type:"rect"}}),s("img",{directives:[{name:"show",rawName:"v-show",value:e.coverLoaded,expression:"coverLoaded"}],attrs:{src:e.coverSrc,referrer:"no-referrer",referrerpolicy:"no-referrer"},on:{load:e.onCoverLoad,error:e.onCoverError}})],1)],1)},c=[],l={name:"ResourceCard",props:{data:Object,edit:Boolean},data(){return{coverLoaded:!1,showDetailDialog:!1,id:null,title:null,cover:null,source:null}},created(){this.id=this.data.id;const e=[["titles","title"],["covers","cover"],["sources","source"]],t=e.map((([e,t])=>async()=>{const s=i["a"][e].ref(this.data[t]["#"]),a=await s.oncePromise(),r=i["a"].parseRawValue(a);"source"!==t?this[t]=r:(this.source={},Object.entries(r).forEach((async([e,{"#":t}])=>{const s=await i["a"].sources.ref(t).oncePromise();this.source[e]=i["a"].parseRawValue(s)})))}));Promise.all(t.map((e=>e())))},computed:{coverSrc(){return this.cover?this.cover[Object.keys(this.cover)[0]]:null}},methods:{handleClick(){this.showDetailDialog=!0},async handleSourceClick(e){await navigator.clipboard.writeText(this.source[e].link),this.$q.notify({message:this.$t("lib_resource_link_copied"),type:"positive",position:"bottom-right",timeout:5e3})},onCoverLoad(){this.coverLoaded=!0},onCoverError(){console.log("cover load err"),this.coverLoaded=!1}}},n=l,u=(s("afd3"),s("2877")),d=s("f09f"),h=s("24e8"),m=s("daf4"),f=s("293e"),p=s("eebe"),v=s.n(p),b=Object(u["a"])(n,o,c,!1,null,"295b9f4e",null),y=b.exports;v()(b,"components",{QCard:d["a"],QDialog:h["a"],QRating:m["a"],QSkeleton:f["a"]});var _={name:"Library",components:{ResourceCard:y},data(){return{searchText:"The Godfather",resources:{},legacyResources:{}}},methods:{async handleSearch(){if(!this.searchText)return;this.legacyResources=Object.assign({},this.resources),this.resources={};const e=this.searchText,t=t=>{if(!t)return!1;const s=Object.values(t).filter((t=>!!t&&t.toLowerCase().indexOf(e.toLowerCase())>=0));return s.length>0},s=e=>this.updateResource("append",e),a=await i["a"].titles.oncePromise(),r=i["a"].parseRawValue(a),o=Object.entries(r).map((([e,a])=>async()=>{if(!a)return;const r=i["a"].titles.get(e).ref(a["#"]),o=await r.oncePromise(),c=i["a"].parseRawValue(o);t(c)&&s(e)}));await Promise.all(o.map((e=>e()))),this.resources=Object.assign({},this.resources)},async updateResource(e,t){const s=this.resources;if(!s[t]){if(this.legacyResources[t])s[t]=this.legacyResources[t];else{const e=await i["a"].resources.get(t).oncePromise(),a=i["a"].parseRawValue(e);a&&a.id&&(s[t]=a)}this.resources=s}}}},g=_,w=(s("3fa7"),s("9989")),C=s("4983"),x=s("27f9"),k=s("eb85"),q=Object(u["a"])(g,a,r,!1,null,"6356dea9",null);t["default"]=q.exports;v()(q,"components",{QPage:w["a"],QScrollArea:C["a"],QInput:x["a"],QSeparator:k["a"]})},"3fa7":function(e,t,s){"use strict";s("0818")},afd3:function(e,t,s){"use strict";s("2618")}}]);