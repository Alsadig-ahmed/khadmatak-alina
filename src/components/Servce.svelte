<script>
	export let title = 'servce name';
	export let url = '';
</script>
<h3 class="service">
<a href={url}>
		{title}
	</a>
</h3>


<style lang="scss">
	a{
		color: inherit;
		&:hover{
			color: blue;

		}

	}

	.service {
		background-color: rgb(210, 230, 210);
		margin: 0.4rem;
		border-radius: 0.5rem;
	}
</style>
