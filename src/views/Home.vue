<template lang="pug">
	.empty
		p Working with storage && Pagination && Sorting
			span by Mark Nikolsky
		Table(:users_data="USERS")
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Table from '../components/table/Table'

export default {

	name: 'Home',

	components: {
		Table
	},
	
	mounted() {
		this.GET_USERS_FROM_API()
	},

	computed: {
		...mapGetters(['USERS'])
	},

	methods: {
		...mapActions(['GET_USERS_FROM_API'])
	}

}
</script>

<style lang="sass" scoped>

p
	font-size: 16px
	color: #9acd3291
	text-align: center

	margin-top: 50px


	span
		font-size: 12px
		color: #06111d6e

		margin-left: 10px
	
</style>