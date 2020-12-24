import http from "./http";
//轮播图
export const getBannerListApi:any = (params:any):any => http.get("/index/getBanner", params);
//八个宫格
export const getGridListApi:any = (params:any):any => http.get("/index/getGrid", params);
//设计首页
export const getDesignListApi:any = (params:any):any => http.get("/index/getDesign", params);
//设计师页面
export const getDesignerListApi:any = (params:any):any => http.get("/index/getDesigner", params);
