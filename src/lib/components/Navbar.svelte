<script>
	import authStore from '$lib/stores/authStore';
	import firebase from 'firebase/compat/app';
	import { Button } from 'sveltestrap';
	import Login from './Login.svelte';

	async function logOut() {
		await firebase.auth().signOut();
		authStore.set({
			isLoggedIn: false,
			user: null,
			firebaseControlled: true
		});
	}
</script>

<nav id="mainNav" class="navbar navbar-light navbar-expand-lg fixed-top">
	<div class="container">
		<a class="navbar-brand" href="#top">TyBlog</a><button
			class="navbar-toggler"
			data-bs-toggle="collapse"
			data-bs-target="#navbarResponsive"
			aria-controls="navbarResponsive"
			aria-expanded="false"
			aria-label="Toggle navigation"><i class="fa fa-bars" /></button
		>
		<div id="navbarResponsive" class="collapse navbar-collapse">
			<ul class="navbar-nav ms-auto">
				<li class="nav-item"><a class="nav-link" href="/">Home</a></li>
				<li class="nav-item"><a class="nav-link" href="/about">About</a></li>
				<li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
				<li class="nav-item"><a class="nav-link" href="/post">Blog</a></li>
				<li class="nav-item">
					{#if $authStore.user}
						<Button outline on:click={logOut} color="light" class="m-2">Logout</Button>
					{:else}
						<a class="nav-link" href="/auth/login">Login</a>
					{/if}
				</li>
			</ul>
		</div>
	</div>
</nav>

<style>
	nav.navbar .navbar-brand {
		font-family: var(--font-mono);
		font-weight: 800;
		font-size: 2rem;
		color: white;
	}

	nav.navbar .nav-item {
		padding-left: 2rem;
	}

	nav.navbar .nav-link {
		font-family: var(--font-mono);
		font-weight: 600;
		font-size: 1.5rem;
		color: white;
	}
</style>
