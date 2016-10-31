import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

var App = Vue.extend({
    template:`<div><p>this is vuex2.0 demo {{msg}}</p><button @click="add()">+</button> <br/></div>`,
    computed:Vuex.mapGetters({
        msg : 'getMessage'
    }),
    mounted:function(){
        console.log(this.$store)
    },
    methods:{
        add : function(param){
            this.$store.dispatch('ADD',param).then(function(resp){
                console.log(resp)
            })
        }
    }
})

var store =  new Vuex.Store({
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


new Vue({
    el: '#app',
    store,
    render: (h)=>h(App)
})