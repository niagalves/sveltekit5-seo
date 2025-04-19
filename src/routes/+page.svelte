<script>
	import Seo from '$lib/Seo.svelte';

	const metatag = {
		title: 'My Page Title',
		description: 'A short description of the page.',
		keywords: ['svelte', 'seo', 'component'],
		author: 'Your Name',
		follow: true,
		language: 'en',
		og: {
			siteName: 'MySite',
			type: 'website',
			fbAppId: '123456789',
			image: {
				url: 'https://example.com/image.jpg',
				width: '1200',
				height: '630',
				alt: 'An image',
				type: 'image/jpeg',
				secureUrl: 'https://example.com/image.jpg'
			},
			video: {
				url: 'https://example.com/video.mp4',
				width: '1200',
				height: '630',
				type: 'video/mp4',
				secureUrl: 'https://example.com/video.mp4'
			},
			audio: {
				url: 'https://example.com/audio.wav',
				type: 'audio/wav',
				secureUrl: 'https://example.com/audio.wav'
			}
		},
		x: {
			siteId: '123456789',
			site: '@yoursite',
			creator: '@yourhandle',
			creatorId: '123456789',
			card: 'summary_large_image',
			image: {
				url: 'https://example.com/image.jpg',
				alt: 'An image'
			},
			player: {
				url: 'https://example.com/player.html',
				width: '1280',
				height: '720',
				stream: 'https://example.com/stream.m3u8'
			}
		},
		jsonLd: {
			image: {
				url: 'https://example.com/image.jpg',
				width: '1280',
				height: '720'
			},
			author: {
				name: 'Your Name'
			},
			publisher: {
				name: 'Your Name',
				logo: {
					url: 'https://example.com/image.jpg',
					width: '1280',
					height: '720'
				}
			}
		}
	};
</script>

<Seo {metatag} />
