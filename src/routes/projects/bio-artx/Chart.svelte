<script>
	// @ts-nocheck

	import { afterUpdate, onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	export let data;

	var ctx;
	var populationsChart;

	function createChart() {
		ctx = document.getElementById('populations');
		if (populationsChart) populationsChart.destroy();
		populationsChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: data.map((row) => row.year),
				datasets: [
                    {
                        label: 'Moose',
                        data: data.map((row) => row.moose),
                        borderColor: 'green',
                        backgroundColor: 'green',
                        fill: false
                    },
                    {
                        label: 'Wolf',
                        data: data.map((row) => row.wolf),
                        borderColor: 'red',
                        backgroundColor: 'red',
                        fill: false
                    }
				]
			}
		});
	}

	function updateChart() {
        if (!populationsChart) return;
        console.log("updateChart");
		populationsChart.data.labels = data.map((row) => row.year);
		populationsChart.data.datasets[0].data = data.map((row) => row.moose);
        populationsChart.data.datasets[1].data = data.map((row) => row.wolf);
		populationsChart.update();
	}

	onMount(createChart);
	afterUpdate(updateChart);
</script>

<canvas id="populations" width="16" height="9" />
