<script>
	export let title = 'servce name';
	export let url = '';
	export let bg = '#d2e6d2';
</script>

<a href={url}>
	<h3 style="background-color:{bg};" class="service">
		{title}
	</h3>
</a>

<style lang="scss">
	a {
		color: inherit;
		text-decoration: none;
		&:hover {
			color: blue;
			text-decoration: underline;
		}
	}

	.service {
		background-color: #d2e6d2;
		margin: 0.4rem;
		padding: .4rem;
		border-radius: 0.5rem;
	}
</style>
