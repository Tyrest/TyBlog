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

	import { onMount, onDestroy } from 'svelte';
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
			} else if (window.pageYOffset > 74) {
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
	class="navbar-light fixed-top {atTop ? '' : 'navbar-is-fixed'} {scrolledUp ? 'navbar-is-visible' : ''}"
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
			<NavItem><NavLink href="/contact">Contact</NavLink></NavItem>
			<NavItem><NavLink href="/post">Blog</NavLink></NavItem>
			<NavItem>
				{#if $authStore.user}
					<Button outline on:click={logOut} color="light" class="m-2">Logout</Button>
				{:else}
					<NavLink href="/auth/login">Login</NavLink>
				{/if}
			</NavItem>
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
		top: -74px;
		transition: transform 0.2s ease;
		background-color: var(--color-bg-0);
	}

	:global(.navbar .navbar-brand) {
		font-weight: 800;
		font-size: 2rem;
		color: white;
	}

	:global(.navbar .nav-item) {
		padding-left: 2rem;
	}

	:global(.navbar .nav-link) {
		font-weight: 600;
		font-size: 1.5rem;
		color: white;
	}
</style>
