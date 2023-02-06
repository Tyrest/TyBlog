<script lang="ts">
	import { Container } from 'sveltestrap';
	import CreateBlog from '$lib/components/blog/CreateBlog.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Container>
	<CreateBlog />
</Container>
