# SvelteKit SEO Component

A simple yet powerful SEO component for **SvelteKit 5**.  
Easily manage your page metadata for search engines and social media platforms like Facebook and Twitter/X.

## ✨ Features

- Dynamic title, description, keywords, and canonical URL
- Open Graph support for Facebook and other platforms
- Twitter/X Cards support
- Control over indexing (robots)
- Easy configuration with a single `metatag` object
- Written in TypeScript and fully typed

## 📦 Installation

Just copy the component into your SvelteKit project. No external dependencies required.

## 🧠 Usage

Pass a `metatag` object as a prop:

```ts
<script lang="ts">
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
```

## 📚 References

- [Facebook Open Graph](https://developers.facebook.com/docs/sharing/webmasters/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter/X Cards](https://developer.x.com/en/docs/x-for-websites/cards/overview/markup)

## 🤝 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/niagalves">
        <img 
          src="https://avatars.githubusercontent.com/u/27209787?v=4" width="100px;" 
          alt="niagalves" />
        <br />
        <sub>
          <b>Niag Alves</b>
        </sub>
      </a>
    </td>
  </tr>
 </table>
