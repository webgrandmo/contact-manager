<template>
	<div class="hello">
		<div class="contact" v-for="contact in contacts" :key="contact.id">
			{{ contact.name }}
		</div>
	</div>
</template>

<script>
	import ContactService from '../ContactService';
	export default {
		name: 'ContactComponent',
		data() {
			return {
				contacts: [],
				error: '',
			};
		},

		async created() {
			try {
				this.contacts = await ContactService.getContacts();
			} catch (error) {
				this.error = error;
			}
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
