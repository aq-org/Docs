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
				bitbucket: 'https://bitbucket.org/ax-6/aq',
				bluesky: 'https://bsky.app/profile/aq-org.bsky.social',
				codeberg: 'https://codeberg.org/aq-org/AQ',
				openCollective: 'https://opencollective.com/aq-org',
				mastodon: 'https://mastodon.social/@aqorg',
				patreon: 'https://www.patreon.com/AQORG',
				reddit: 'https://www.reddit.com/r/aq_organization',
				slack: 'https://aq-organization.slack.com',
			},
		}),
	],
});
