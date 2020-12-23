import http from "./http";

export const getBannerListApi:any = (params:any):any => http.get("/index/getBanner", params);
