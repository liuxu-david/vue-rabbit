import { topCategory } from "@/api/constants"
import { findAllCategory } from '@/api/category'


export default {
    namespaced: true,
    state() {
        return {
            list: topCategory.map(item => ({ name: item }))
        }
    },
    // 加载数据成功后需要修改list所以需要mutations函数
    mutations: {
        setCategory(state, headCategory) {
            state.list = headCategory
        },
        show(state, item) {
            const category = state.list.find(category => category.id === item.id)
            category.open = true
        },
        hide(state, item) {
            const category = state.list.find(category => category.id === item.id)
            category.open = false
        }
    },
    // 需要向后台加载数据，所以需要actions函数获取数据
    actions: {
        async getCategory({ commit }) {
            const { result } = await findAllCategory()
                // 给一级分类加上一个控制二级分类显示隐藏的数据open
            result.forEach(item => {
                item.open = false
            });
            // 获取数据成功，提交mutations进行数据修改
            commit('setCategory', result)
        }
    }
}