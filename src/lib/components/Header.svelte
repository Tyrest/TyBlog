<script>
    import background from '$lib/images/blurry-gradient-haikei.svg';
</script>

<header class="masthead" style="background-image: url({background});">
	<div class="container">
		<div class="row">
			<div class="col-md-10 col-lg-8 mx-auto position-relative">
				<div class="site-heading">
					<h1>TyBlog</h1>
					<span class="subheading">A home for Tyler's thoughts</span>
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	header.masthead {
		width: 100%;
		margin-bottom: 50px;
		background: no-repeat center center;
		background-color: #6c757d;
		background-attachment: scroll;
		position: relative;
		background-size: cover;
		text-align: center;
	}

	header.masthead .site-heading {
		padding: 100px 0;
		color: white;
		font-family: var(--font-mono);
		font-weight: 700;
	}

    header.masthead .site-heading h1 {
        font-size: 80px;
    }

    header.masthead .site-heading span {
        font-size: 24px;
    }

	@media only screen and (min-width: 768px) {
		header.masthead .site-heading {
			padding: 200px 0;
		}
	}
</style>