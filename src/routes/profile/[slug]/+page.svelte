<script lang="ts">
    import { Container } from 'sveltestrap';
    import PostView from '$lib/components/PostView.svelte';

    import type { PageData } from './$types';

    export let data: PageData;
</script>

<Container>
    <PostView header={"Your Blog Posts"} data={data.posts} />
</Container>