<template lang="pug">

	.table
		.table__header
			p.table__header--item.table__header--item--1(@click="sortByName") Name
			p.table__header--item.table__header--item--2(@click="sortByPointsEarned") Points earned
			p.table__header--item.table__header--item--3(@click="sortByPointsSpent") Points spent
			p.table__header--item.table__header--item--4(@click="sortByDate") Registration date

		.table__body
			TableRow(v-for="row in paginatedUsers" :row_data="row" :key="row.id")

		.table__pagination
			.table__page(:class="{'table__page--active' : page === pageNumber }" v-for="(page, index) in pages" :key="index" @click="updateCurrentPage(page)") {{ page }}


</template>

<script>
import TableRow from './TableRow'

export default {

	name: 'Table',

	components: {
		TableRow
	},

	props: {
		users_data: {
			type: Array,
			default: () => {
				return []
			}
		}
	},

	computed: {
		pages() {
			return Math.ceil( this.users_data.length / this.usersPerPage )
		},
		paginatedUsers() {
			let from = (this.pageNumber - 1) * this.usersPerPage
			let to = from + this.usersPerPage
			return this.users_data.slice(from, to)
		}
	},

	data() {
		return {
			usersPerPage: 10,
			pageNumber: 1
		}
	},

	methods: {
		updateCurrentPage(page) {
			this.pageNumber = page
		},
		resetCurrentPage() {
			this.pageNumber = 1
		},
		sortByName() {
			this.users_data.sort( (a, b) => a.name.localeCompare(b.name) )
			this.resetCurrentPage()
		},
		sortByPointsEarned() {
			this.users_data.sort( (a, b) => a.points_earned - b.points_earned )
			this.resetCurrentPage()
		},
		sortByPointsSpent() {
			this.users_data.sort( (a, b) => a.points_spent - b.points_spent )
			this.resetCurrentPage()
		},
		sortByDate() {
			this.users_data.sort( (a, b) => a.registration_date.localeCompare(b.registration_date) )
			this.resetCurrentPage()
		}
	}

}
</script>

<style lang="sass" scoped>

.table
	max-width: 805px
	margin: 0 auto


	&__header, &__body
		padding: 0 75px


	&__header
		display: flex
		justify-content: space-between


		&--item
			font-size: 18px
			position: relative
			margin-left: 20px

			cursor: pointer


			&--1, &--2, &--3, &--4
				flex-basis: 25%
				text-align: left


				&::after
					position: absolute
					top: 2px
					left: -25px
					content: ''
					background: url('~@/assets/img/unfold_more.svg') no-repeat center / contain
					width: 20px
					height: 20px


			&--4
				text-align: center


				&::after
					left: -8px


	&__body
		display: flex
		flex-direction: column


	&__pagination
		display: flex
		flex-wrap: wrap
		justify-content: center

		margin-top: 15px


	&__page
		display: flex
		justify-content: center
		align-items: center

		margin-top: 5px
		margin-right: 5px

		width: 22px
		padding: 8px
		border: 1px solid #e7e7e7
		background-color: #9acd32b8

		cursor: pointer

		transition: all .2s


		&:hover
			background: #9acd32


		&--active
			background: #9acd32
		

</style>