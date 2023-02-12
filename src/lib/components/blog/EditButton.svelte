<script lang="ts">
	import { Container } from 'sveltestrap';

	export let slug: string;
</script>

<Container class="text-end">
	<a href="/blog/{slug}/edit">
		<span class="fa-stack fa-lg">
			<i class="fa fa-circle fa-stack-2x" />
			<i class="fa fa-pen-to-square fa-stack-1x fa-inverse" />
		</span>
	</a>
</Container>
