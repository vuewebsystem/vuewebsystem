import axios from "./axios";
export const getMenu=(param)=>{
    return axios.request({
        url:'/permission/getMenu',
        method:'post',
        data:param

    })
}
export const getData=()=>{
    return axios.request({
        url:'/home/getData'

    })
}

export const getJCdata=()=>{
    return axios.request({
        url:'/JC'
    })
}