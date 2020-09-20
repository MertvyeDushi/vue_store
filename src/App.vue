<template lang="pug">

	#app
		router-view

</template>

<script>

export default {
	name: 'app'
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;700&display=swap')

#app
	font-family: 'Quicksand', sans-serif
	font-weight: 500
	letter-spacing: .2px
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale

</style>
