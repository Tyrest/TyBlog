<script lang="ts">
	import { Form, FormGroup, Input, Button } from 'sveltestrap';
</script>

<div class="create-blog">
	<h1>Create a New Blog Post</h1>
	<Form>
		<FormGroup floating label="Title">
			<Input placeholder="Enter a titles" />
		</FormGroup>
		<FormGroup floating label="Subtitle">
			<Input placeholder="Enter a subtitle" />
		</FormGroup>
	</Form>
	<h2>Markdown Content</h2>
	<Form>
		<textarea class="form-control" placeholder="Enter some content" rows="8" />
		<Button block color="primary">Create</Button>
	</Form>
</div>

<style>
	:global(form) {
		color: black;
	}

	:global(form button) {
		margin-top: 2rem;
	}
</style>
