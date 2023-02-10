<script>
	import { Container, Row, Col } from 'sveltestrap';
	import headerData from '$lib/stores/headerData';
</script>

<header class="masthead" style="background-image: url({$headerData.background});">
	<Container class="text-center">
		<Row>
			<Col md="10" lg="8" class="mx-auto position-relative">
				<div class="site-heading">
					<h1>{$headerData.title}</h1>
					<span class="subheading">{$headerData.subtitle}</span>
				</div>
			</Col>
		</Row>
	</Container>
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