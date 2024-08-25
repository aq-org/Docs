import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AQ Docs',
			logo: {
				light: '/src/assets/aq-logo.svg',
				dark: '/src/assets/aq-logo.svg',
				replacesTitle: true,
			},
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
				blueSky: 'https://bsky.app/profile/aq-org.bsky.social',
				codeberg: 'https://codeberg.org/aq-org/AQ',
				openCollective: 'https://opencollective.com/aq-org',
				mastodon: 'https://mastodon.social/@aqorg',
				patreon: 'https://www.patreon.com/AQORG',
				reddit: 'https://www.reddit.com/r/aq_organization',
				slack: 'https://aq-organization.slack.com',
				stackOverflow: 'https://stackoverflow.com/users/25469681/aq-org',
			},
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				ar: {
					label: 'عربي',
					lang: 'ar',
				},
				'zh-Hans': {
					label: '简体中文',
					lang: 'zh-Hans',
				},
				fr: {
					label: 'Français',
					lang: 'fr',
				},
				ru: {
					label: 'Русский',
					lang: 'ru',
				},
				es: {
					label: 'Español',
					lang: 'es',
				},
			},
			sidebar: [
				{
					label: 'Get Started',
					translations: {
						ar: 'ابدأ',
						'zh-Hans': '快速开始',
						fr: 'Commencer',
						ru: 'Начало работы',
						es: 'Empezar',
					},
				},
				{
					label: 'Guides',
					translations: {
						ar: 'أدلة',
						'zh-Hans': '指南',
						fr: 'Guides',
						ru: 'Руководства',
						es: 'Guías',
					},
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Developer Docs',
					translations: {
						ar: 'وثائق المطور',
						'zh-Hans': '开发者文档',
						fr: 'Docs Développeur',
						ru: 'Документация разработчика',
						es: 'Documentación de Desarrollador',
					},
					autogenerate: { directory: 'developer' },
				},
				{
					label: 'FAQs',
					translations: {
						ar: 'الأسئلة الشائعة',
						'zh-Hans': '常见问题',
						fr: 'FAQs',
						ru: 'Часто задаваемые вопросы',
						es: 'Preguntas Frecuentes',
					},
					autogenerate: { directory: 'faqs' },
				},
			],			
		}),
	],
});
