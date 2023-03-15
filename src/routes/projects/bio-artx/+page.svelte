<script>
	import { afterUpdate } from 'svelte';
	import { Container, Row, Col, Button } from 'sveltestrap';
	import headerData from '$lib/stores/headerData';
	import background from '$lib/images/isleroyale.webp';

	$headerData.title = 'ArtX Project';
	$headerData.subtitle = 'A Biology Project showcasing Isle Royale National Park';
	$headerData.background = background;

	import Chart from './Chart.svelte';

	let mooseGrowthRate = 1;
	let mooseDeathsPer = 0.05;
	let wolfDeathRate = 0.5;
	let wolfGrowthPer = 0.01;
	let initialMoosePopulation = 100;
	let initialWolfPopulation = 10;
	let carryingCapacity = 1000;
	let years = 100;

	function calculatePopulation() {
		console.log('calculatePopulation');
		console.table({
			mooseGrowthRate,
			mooseDeathsPer,
			wolfDeathRate,
			wolfGrowthPer,
			initialMoosePopulation,
			initialWolfPopulation,
			years
		});

		let moosePopulation = initialMoosePopulation;
		let wolfPopulation = initialWolfPopulation;
		let data = [];

		data.push({ year: 0, moose: moosePopulation, wolf: wolfPopulation });

		for (let i = 0; i < years; i++) {
			moosePopulation =
				moosePopulation +
				mooseGrowthRate * moosePopulation * (1 - moosePopulation / carryingCapacity) -
				mooseDeathsPer * moosePopulation * wolfPopulation;
			wolfPopulation =
				wolfPopulation -
				wolfDeathRate * wolfPopulation +
				wolfGrowthPer * moosePopulation * wolfPopulation;
			if (moosePopulation < 1) moosePopulation = 0;
			if (wolfPopulation < 1) wolfPopulation = 0;
			data.push({ year: i, moose: moosePopulation, wolf: wolfPopulation });
			if (moosePopulation == 0 && wolfPopulation == 0) break;
		}

		return data;
	}

	let data = calculatePopulation();

	function updateChart() {
		data = calculatePopulation();
	}

	afterUpdate(updateChart);
</script>

<svelte:head>
	<title>BioArtX</title>
	<meta name="description" content="Biology Lab ArtX Project" />
</svelte:head>

<section>
	<h1>Starting Parameters</h1>
	<Row>
		<Col>
			<label for="mooseGrowthRate">Moose Growth Rate</label>
			<input type="number" bind:value={mooseGrowthRate} />
		</Col>
		<Col>
			<label for="mooseDeathsPer">Moose Deaths per M x W</label>
			<input type="number" bind:value={mooseDeathsPer} />
		</Col>
		<Col>
			<label for="wolfDeathRate">Wolf Death Rate</label>
			<input type="number" bind:value={wolfDeathRate} />
		</Col>
		<Col>
			<label for="wolfGrowthPer">Wolf Growth per M x W</label>
			<input type="number" bind:value={wolfGrowthPer} />
		</Col>
	</Row>
	<br />
	<Row>
		<Col>
			<label for="initialMoosePopulation">Initial Moose Population</label>
			<input type="number" bind:value={initialMoosePopulation} />
		</Col>
		<Col>
			<label for="initialWolfPopulation">Initial Wolf Population</label>
			<input type="number" bind:value={initialWolfPopulation} />
		</Col>
		<Col>
			<label for="carryingCapacity">Moose Carrying Capacity</label>
			<input type="number" bind:value={carryingCapacity} />
		</Col>
		<Col>
			<label for="years">Years to Observe for</label>
			<input type="number" bind:value={years} />
		</Col>
	</Row>

	<br />

	<h1>Populations Over the Next {years} Years</h1>
	<Chart {data} />

	<br />

	<h1>Sources</h1>
	<a href="https://www.informs-sim.org/wsc08papers/360.pdf">MODELS OF A PREDATOR-PREY RELATIONSHIP IN A CLOSED HABITAT</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
