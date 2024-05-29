import instanceRequest from '@/api/index.js';

//获取验证码
export const getPrimaryImg = async function (url, method = 'GET') {
    return await instanceRequest({
        url,
        method
    });
};
//登录
export const toLogin = async function (url, method = 'POST', data = {}) {
    return await instanceRequest({
        url,
        method,
        data
    })
}

//获取内容
export const getContentList = async function (params) {
    return await instanceRequest({
        url: '/content/hp/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}

//获取首页全部标题
export const getHomeAllTitle = async function (params) {
    return await instanceRequest({
        url: 'system/classify/selectSysClassifyByParentId',
        method: 'GET',
        params
    })
}

//获取关于我们
export const Aboutus = async function (params) {
    return await instanceRequest({
        url: '/content/aboutus/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}

//发送留言信息 没接口
export const Message = async function (params) {
    return await instanceRequest({
        url: '/content/aboutus/list?pageNum=1&pageSize=10',
        method: 'post',
        data: params
    })
}

//获取会议活动
export const Meet = async function (params) {
    return await instanceRequest({
        url: '/content/conference/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}

//获取媒体中心
export const Media = async function (params) {
    return await instanceRequest({
        url: '/content/mediacenter/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}

//获取学术研究
export const Research = async function (params) {
    return await instanceRequest({
        url: '/content/academic/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}

//获取公益项目
export const Project = async function (params) {
    return await instanceRequest({
        url: '/content/benefit/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}

//获取国际绿奖
export const Prize = async function (params) {
    return await instanceRequest({
        url: '/content/greenaward/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}

//获取WGDO绿研究院
export const getWgdo = async function (params) {
    return await instanceRequest({
        url: '/content/greeninstitute/list?pageNum=1&pageSize=10',
        method: 'GET',
        params
    })
}