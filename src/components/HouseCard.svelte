<script>
	export let text = '';
	export let description = '';
	export let price = '';
	export let url = '';
	export let img = '/home.jpg';
</script>

<div class="c">
	<a href={url}>
		<!-- <div id="imgBG" class="img"></div> -->
		<img src={img} alt={text} />
		<h3>{text}</h3>
		<div class="description">
			<h5>{price}</h5>
			<p>{description}</p>
		</div>
	</a>
</div><br>

<style lang="scss">
	div.c {
		background-color: rgb(255, 247, 247);
		position: relative;
		margin: 0.8rem 1rem;
		height: 25rem;
		box-shadow: 0 0 0.5rem 0.2rem rgba(36, 35, 35, 0.623);
		border-radius: 1rem;
		.description{
			color: rgba(59, 55, 55, 0.918);
			background:rgba(255, 255, 255, 0.788);
			margin-top: 0rem;
			border-radius: 1rem;
			
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
            z-index: 5;
		}
		h3 {
            position: absolute;
            color: rgba(255, 255, 255, 0.863);
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 4;
			font-size: 2rem;
			text-align: right;
            height: 20%;
			border-radius: 0 0 1rem 1rem;
			// margin:1rem;
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0.089), rgba(8, 8, 8, 0.733),rgba(8, 8, 8, 0.226));
		}
	}
	img {
		// background-image: url('/home.jpg');
		border-radius: 1rem;
		// height: 20rem;
		width: 100%;
		position: absolute;
        top:0;bottom: 0;left: 0;right: 0;

	}
	a {
		text-decoration: none;
		color: unset;
	}
</style>
