import request from "@/utils/request";


export const findBrand = (limit) => {
    return request('/home/brand', 'get', { limit })
}

/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
    return request('/home/banner', 'get')
}

// 获取新鲜好物的数据
export const findNew = () => {
        return request('home/new', 'get')
    }
    // 获取人气推荐数据
export const findHot = () => {
        return request('home/hot', 'get')
    }
    // 获取商品数据
export const findGoods = () => {
        return request('home/goods', 'get')
    }
    // 获取最新专题数据
export const findSpecial = () => {
    return request('home/special', 'get');
}