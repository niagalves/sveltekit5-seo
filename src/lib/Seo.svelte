<script lang="ts">
	import { page } from '$app/state';

	const { metatag }: Metatag = $props();
	let { title, description, keywords = [], author, follow = true, language = 'en', og } = metatag;
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={page.url.href} />
	<meta name="language" content={language} />
	<meta name="description" content={description} />

	{#if keywords.length}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}
	{#if author}
		<meta name="author" content={author} />
	{/if}

	<meta name="robots" content={follow ? 'index,follow' : 'noindex,nofollow'} />
	<meta name="url" content={page.url.href} />

	<meta property="og:title" content={title} />
	<meta property="og:site_name" content={og.siteName} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:type" content={og.type} />
	<meta property="og:locale" content={language} />
	{#if og.fbAppId}
		<meta property="fb:app_id" content={og.fbAppId} />
	{/if}

	{#if og.image.url}
		<meta property="og:image" content={og.image.url} />
	{/if}
	{#if og.image.secureUrl}
		<meta property="og:image:secure_url" content={og.image.secureUrl} />
	{/if}
	{#if og.image.type}
		<meta property="og:image:type" content={og.image.type} />
	{/if}
	{#if og.image.width}
		<meta property="og:image:width" content={og.image.width} />
	{/if}
	{#if og.image.height}
		<meta property="og:image:height" content={og.image.height} />
	{/if}
	{#if og.image.alt}
		<meta property="og:image:alt" content={og.image.alt} />
	{/if}

	{#if og.video.url}
		<meta property="og:video" content={og.video.url} />
		<meta property="og:video:url" content={og.video.url} />
	{/if}
	{#if og.video.secureUrl}
		<meta property="og:video:secure_url" content={og.video.secureUrl} />
	{/if}
	{#if og.video.type}
		<meta property="og:video:type" content={og.video.type} />
	{/if}
	{#if og.video.width}
		<meta property="og:video:width" content={og.video.width} />
	{/if}
	{#if og.video.height}
		<meta property="og:video:height" content={og.video.height} />
	{/if}

	{#if og.audio.url}
		<meta property="og:audio" content={og.audio.url} />
	{/if}
	{#if og.audio.secureUrl}
		<meta property="og:audio:secure_url" content={og.audio.secureUrl} />
	{/if}
	{#if og.audio.type}
		<meta property="og:audio:type" content={og.audio.type} />
	{/if}
</svelte:head>
