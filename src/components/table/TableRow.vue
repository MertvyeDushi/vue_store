<template lang="pug">

	.table-row
		p.table-row__item.table-row__item--1 {{ row_data.name }}
		p.table-row__item.table-row__item--2 {{ row_data.points_earned }}
		p.table-row__item.table-row__item--3 {{ row_data.points_spent }}
		p.table-row__item.table-row__item--4 {{ row_data.registration_date }}

</template>

<script>
export default {

	name: 'TableRow',

	props: {
		row_data: {
			type: Object,
			default: () => {
				return {}
			}
		}
	}

}
</script>

<style lang="sass" scoped>

.table-row
	display: flex
	justify-content: space-between


	&__item
		
		&--1
			flex-basis: 25%


		&--2, &--3, &--4
			flex-basis: 25%
			text-align: center


</style>