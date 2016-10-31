import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messages: 0
    },
    mutations:{
        "ADD": function(state, msg) {
            state.messages += msg;
        }
    },
    actions:{
        "ADD" : function(store , param){
            return new Promise(function(resolve, reject) {
                store.commit('ADD',param)
                resolve("ok");
            })
        },
    },
    getters:{
        getMessage:function(state){
            return state.messages
        }
    }
})