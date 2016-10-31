<template>
	<div>
		<p>this is vuex old version,  {{msg}}</p>
		<button @click="add(1)">+</button>

		<div>
			<app-footer></app-footer>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue';
	import Vuex from 'vuex';
	import appFooter from './footer.vue';
	Vue.use(Vuex);
	export default {
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
	    },
	    components:{
	        appFooter
	    }
	}
</script>