<script lang="ts">
	import { page } from '$app/state';

	type Props = {
		title: string;
		description: string;
		keywords?: string[] | undefined;
		author?: string;
		follow?: boolean;
		language?: string;
	};

	let {
		title,
		description,
		keywords = undefined,
		author,
		follow = true,
		language = 'en'
	}: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="language" content={language} />
	<meta name="description" content={description} />

	{#if keywords && keywords.length}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}

	{#if author}
		<meta name="author" content={author} />
	{/if}

	<meta name="robots" content={follow ? 'index,follow' : 'noindex,nofollow'} />
	<meta name="url" content={page.url.href} />
	<link rel="canonical" href={page.url.href} />
</svelte:head>
