<script lang="ts">
	import { page } from '$app/state';

	const { metatag }: Metatag = $props();
	let {
		title,
		description,
		keywords = [],
		author,
		follow = true,
		language = 'en',
		og,
		x,
		jsonLd
	} = metatag;

	const getJsonLd = () => {
		return JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: title,
			description: description,
			url: page.url.href,
			image: {
				'@type': 'ImageObject',
				url: jsonLd?.image?.url,
				width: jsonLd?.image?.width,
				height: jsonLd?.image?.height
			},
			author: {
				'@type': 'Organization',
				name: jsonLd?.author?.name
			},
			publisher: {
				'@type': 'Organization',
				name: jsonLd?.publisher?.name,
				logo: {
					'@type': 'ImageObject',
					url: jsonLd?.publisher?.logo?.url,
					width: jsonLd?.publisher?.logo?.width,
					height: jsonLd?.publisher?.logo?.height
				}
			}
		});
	};
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

	{#if og.video?.url}
		<meta property="og:video" content={og.video.url} />
		<meta property="og:video:url" content={og.video.url} />
	{/if}
	{#if og.video?.secureUrl}
		<meta property="og:video:secure_url" content={og.video.secureUrl} />
	{/if}
	{#if og.video?.type}
		<meta property="og:video:type" content={og.video.type} />
	{/if}
	{#if og.video?.width}
		<meta property="og:video:width" content={og.video.width} />
	{/if}
	{#if og.video?.height}
		<meta property="og:video:height" content={og.video.height} />
	{/if}

	{#if og.audio?.url}
		<meta property="og:audio" content={og.audio.url} />
	{/if}
	{#if og.audio?.secureUrl}
		<meta property="og:audio:secure_url" content={og.audio.secureUrl} />
	{/if}
	{#if og.audio?.type}
		<meta property="og:audio:type" content={og.audio.type} />
	{/if}

	<meta name="twitter:description" content={description} />
	<meta name="twitter:title" content={title} />
	{#if x?.siteId}
		<meta name="twitter:site:id" content={x.siteId} />
	{/if}
	{#if x?.site}
		<meta name="twitter:site" content={x.site} />
	{/if}
	{#if x?.creatorId}
		<meta name="twitter:creator:id" content={x.creatorId} />
	{/if}
	{#if x?.creator}
		<meta name="twitter:creator" content={x.creator} />
	{/if}
	{#if x?.card}
		<meta name="twitter:card" content={x.card} />
	{/if}
	{#if x?.image?.url}
		<meta name="twitter:image" content={x.image.url} />
	{/if}
	{#if x?.image?.alt}
		<meta name="twitter:image:alt" content={x.image.alt} />
	{/if}
	{#if x?.player?.url}
		<meta name="twitter:player" content={x.player.url} />
	{/if}
	{#if x?.player?.width}
		<meta name="twitter:player:width" content={x.player.width} />
	{/if}
	{#if x?.player?.height}
		<meta name="twitter:player:height" content={x.player.height} />
	{/if}
	{#if x?.player?.stream}
		<meta name="twitter:player:stream" content={x.player.stream} />
	{/if}

	{#if jsonLd && jsonLd.image && jsonLd.author && jsonLd.publisher}
		{@html `<script type="application/ld+json">${getJsonLd()}</script>`}
	{/if}
</svelte:head>
