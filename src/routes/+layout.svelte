<script>
	import '../theme/main.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();
</script>

<Header />
<main class="max-w-screen-xl p-4 mx-auto min-h-screen">
	{@render children()}
</main>
<Footer />
