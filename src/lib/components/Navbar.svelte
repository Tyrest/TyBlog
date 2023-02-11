<script>
	import authStore from '$lib/stores/authStore';
	import firebase from 'firebase/compat/app';
	import { Button } from 'sveltestrap';
	import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'sveltestrap';

	async function logOut() {
		await firebase.auth().signOut();
		authStore.set({
			isLoggedIn: false,
			user: null,
			firebaseControlled: true
		});
	}

	import { onMount } from 'svelte';
	let atTop = true;
	let scrolledUp = false;
	onMount(() => {
		var previousScroll = window.pageYOffset;
		window.onscroll = () => {
			if (window.pageYOffset < previousScroll) {
				scrolledUp = true;
			} else {
				scrolledUp = false;
			}

			if (window.pageYOffset === 0) {
				atTop = true;
				scrolledUp = false;
			} else if (window.pageYOffset > 75) {
				atTop = false;
			}

			previousScroll = window.pageYOffset;
		};

		return () => {
			window.onscroll = () => {};
		};
	});
</script>

<Navbar
	id="mainNav"
	class="fixed-top {atTop ? '' : 'navbar-is-fixed'}
        {scrolledUp ? 'navbar-is-visible' : ''}"
	light
	expand="md"
	container
>
	<NavbarBrand href="/">TyBlog</NavbarBrand>
	<button
		class="navbar-toggler"
		data-bs-toggle="collapse"
		data-bs-target="#navbarResponsive"
		aria-controls="navbarResponsive"
		aria-expanded="false"
		aria-label="Toggle navigation"
		><i class="fa fa-bars" />
	</button>
	<div id="navbarResponsive" class="collapse navbar-collapse">
		<Nav class="ms-auto" navbar>
			<NavItem><NavLink href="/">Home</NavLink></NavItem>
			<NavItem><NavLink href="/about">About</NavLink></NavItem>
			<NavItem><NavLink href="/blog">Blog</NavLink></NavItem>
			{#if $authStore.user}
				<NavItem>
					<NavLink href="/admin">Admin</NavLink>
				</NavItem>
				<NavItem>
					<Button outline on:click={logOut} color="light">Logout</Button>
				</NavItem>
			{/if}
		</Nav>
	</div>
</Navbar>

<style>
	:global(#mainNav) {
		position: absolute;
		transition: background-color 0.2s ease;
		transform: translate3d(0, 0, 0);
	}

	:global(#mainNav.navbar-is-visible) {
		transform: translate3d(0, 100%, 0);
	}

	:global(#mainNav.navbar-is-fixed) {
		position: fixed;
		top: -75px;
		transition: transform 0.2s;
		background-color: var(--color-bg-0);
	}

	:global(.navbar .navbar-brand) {
		font-weight: 800;
		font-size: 2rem;
		color: white;
	}
	
	:global(.navbar .navbar-brand:hover) {
		color: white;
		text-decoration: underline;
		scale: 1;
	}

	:global(.navbar .nav-item) {
		padding-left: 2rem;
	}

	:global(.navbar .nav-link) {
		font-weight: 600;
		font-size: 1.5rem;
		color: white;
		text-decoration: none;
	}
	
	:global(.navbar .nav-link:hover) {
		color: white;
		text-decoration: underline;
		scale: 1;
	}

	:global(.navbar .nav-item .btn) {
		font-weight: 600;
		font-size: 1.5rem;
	}
</style>
