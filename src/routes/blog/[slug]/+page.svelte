<script lang="ts">
    import { Container } from 'sveltestrap';
    import type { PageData } from './$types';
    
    export let data: PageData;

    import headerData from '$lib/stores/headerData';

	$headerData.title = data.post?.title ?? '404';
	$headerData.subtitle = data.post?.subtitle ?? 'Post not found';
</script>

<Container>
    <p>{@html data.post?.content ?? ''}</p>
</Container>