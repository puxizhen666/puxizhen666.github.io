"use strict";(self["webpackChunkvue_prject"]=self["webpackChunkvue_prject"]||[]).push([[854],{854:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("div",[t("el-container",{staticStyle:{height:"700px",border:"1px solid #eee"}},[t("el-header",{staticStyle:{"font-size":"40px","background-color":"rgb(238, 241, 246)"}},[e._v("商品销售信息系统")]),t("el-container",[t("el-aside",{staticStyle:{border:"1px solid #eee"},attrs:{width:"230px"}},[t("el-menu",{attrs:{"default-openeds":["1","3"]}},[t("el-submenu",{attrs:{index:"1"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-message"}),e._v("商品管理")]),t("el-menu-item",{attrs:{index:"1-1"}},[t("router-link",{attrs:{to:"/Spin"}},[e._v("商品信息管理")])],1),t("el-menu-item",{attrs:{index:"1-2"}},[t("router-link",{attrs:{to:"/XiaoShou"}},[e._v("商品销售管理")])],1),t("el-menu-item",{attrs:{index:"1-3"}},[t("router-link",{attrs:{to:"/Purchase"}},[e._v("商品采购管理")])],1),t("el-menu-item",{attrs:{index:"1-4"}},[t("router-link",{attrs:{to:"/Baogao"}},[e._v("结业报告")])],1)],2),t("el-submenu",{attrs:{index:"2"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-menu"}),e._v("订单管理")]),t("el-menu-item",{attrs:{index:"2-1"}},[t("router-link",{attrs:{to:"/Dingd"}},[e._v("订单管理")])],1)],2),t("el-submenu",{attrs:{index:"3"}},[t("template",{slot:"title"},[t("i",{staticClass:"el-icon-setting"}),e._v("客户信息管理")]),t("el-menu-item",{attrs:{index:"3-1"}},[t("router-link",{attrs:{to:"/Client"}},[e._v("客户基本信息管理")])],1)],2)],1)],1),t("el-main",[t("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.searchForm}},[t("el-form-item",{attrs:{label:"销售编号"}},[t("el-input",{attrs:{placeholder:"销售编号"},model:{value:e.searchForm.GoodsName,callback:function(t){e.$set(e.searchForm,"GoodsName",t)},expression:"searchForm.GoodsName"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1),t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"250",border:""}},[t("el-table-column",{attrs:{prop:"sale_id",label:"销售编号",width:"150"}}),t("el-table-column",{attrs:{prop:"goods_id",label:"商品编号",width:"150"}}),t("el-table-column",{attrs:{prop:"client_id",label:"客户编号",width:"150"}}),t("el-table-column",{attrs:{prop:"sale_price",label:"销售单价",width:"100"}}),t("el-table-column",{attrs:{prop:"sale_num",label:"销售数量",width:"100"}}),t("el-table-column",{attrs:{prop:"sale_total",label:"销售金额",width:"100"}}),t("el-table-column",{attrs:{prop:"sale_date",label:"销售日期",width:"200"}}),t("el-table-column",{attrs:{label:"操作",width:"230"}},[t("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("编辑")]),t("el-button",{attrs:{type:"danger",size:"mini"}},[e._v("删除")])],1)],1),t("el-pagination",{attrs:{background:"",layout:"prev, pager, next,jumper,sizes,total",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)],1)},r=[],n={data(){return{tableData:[],searchForm:{sale_id:""}}},methods:{onSubmit:function(){alert("查询数据")},handleSizeChange(e){alert("每页记录数变化"+e)},handleCurrentChange(e){alert("页码发生变化"+e)}}},i=n,s=l(1001),o=(0,s.Z)(i,a,r,!1,null,null,null),u=o.exports}}]);
//# sourceMappingURL=854.b4b97a73.js.map