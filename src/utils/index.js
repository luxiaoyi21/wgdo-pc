import store from '@/store/index.js'
import { getHomeAllTitle } from '@/api/requests.js'

export default (fun, version) => {
    return function () {
        return fun(version)
    }
}

export const getTitle = function (p = store.state.lang.version) {
    console.log(p);
    getHomeAllTitle({ 'parentId': '1', version: p }).then(res => {
        if (res.data && Array.isArray(res.data.rows) && res.data.rows.length > 0) {
            let newArr = res.data.rows[0].children
            let temps = []
            newArr.forEach(v => {
                temps.push(v.classifyName)
            })
            window.sessionStorage.setItem('titles', JSON.stringify(temps))
            // let ressss = sessionStorage.getItem('titles')
            // console.log(JSON.parse(ressss));
        }
    })
}