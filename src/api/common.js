import request from "../utils/request";

export function login(data){
    //request函数返回一个已经配置好了的axios对象
    console.log("data",data);
    return request({
        url:"/user/login",
        method:"POST",
        reqData:data,
    })
}

