import { createStore } from 'vuex'
import createPersistedstate from "vuex-persistedstate"

import user from "./modules/user"
import category from './modules/category'
import cart from './modules/cart'
export default createStore({
    modules: {
        user,
        category,
        cart
    },
    plugins: [
        createPersistedstate({
            key: 'rabbit_client_pc',
            paths: ['user', 'cart']
        })
    ]
})