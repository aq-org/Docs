import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AQ Docs',
			social: {
				github: 'https://github.com/aq-org/AQ',
				gitlab: 'https://gitlab.com/aqorg/AQ',
				'x.com': 'https://x.com/aq_organization',
				twitter: 'https://twitter.com/aq_organization',
				youtube: 'https://www.youtube.com/@aq-org',
				facebook: 'https://www.facebook.com/aq.organization',
				email: 'mailto:admin@axa6.com',
				discord: 'https://discord.gg/JCKzxavG',
				twitch: 'https://www.twitch.tv/axa6t',
			},
		}),
	],
});
