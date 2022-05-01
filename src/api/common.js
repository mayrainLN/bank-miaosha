import request from "../utils/request";

export function login(data){
    //request函数返回一个已经配置好了的axios对象
    console.log("data",data);
    return request({
        // url:"/user/login",
        url:"/api/login",
        method:"POST",
        reqData:data,
    })
}

export function register(data){
    return request({
        // url:"/user/register",
        url:"/api/reguser",
        method:"POST",
        reqData:data,
    })
}


export function getActivityList(data){
    return request({
        url:"/activity/list",
        method:"GET",
        reqData:data,
    })
}

export function activityCheck(data){
    return request({
        url:"/activity/check",
        method:"POST",
        reqData:data,
    })
}

export function getProductList(data){
    return request({
        url:"/product/list",
        method:"GET",
        reqData:data,
    })
}


