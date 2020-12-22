import http from "./http";

export const getBannerListApi = params => http.get("/index/getBanner", params);
