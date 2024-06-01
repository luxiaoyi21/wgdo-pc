import { getHomeAllTitle } from '@/api/requests.js'
import store from '@/store/index.js'

export default (fun, version) => {
    return function () {
        return fun(version)
    }
}

export const getTitle = function (pid) {
    getHomeAllTitle({ 'parentId': pid }).then(res => {
        if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
            let newArr = res.data.rows[0].children
            let temps = []
            newArr.forEach(v => {
                temps.push(v.classifyName)
            })
            store.commit('getST', temps)
        }
    })
}