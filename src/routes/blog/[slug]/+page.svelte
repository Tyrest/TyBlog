<script lang="ts">
    import { Container } from 'sveltestrap';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<Container>
    <h1>{data.post?.title}</h1>
    <h2>{data.post?.subtitle}</h2>
    <p>{@html data.post?.content}</p>
</Container>