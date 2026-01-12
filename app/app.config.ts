export default defineAppConfig({
  title: 'RCS Link Shortener',
  email: 'toni.kuschan@vonage.com',
  github: 'https://github.com/klapperkopp/sink-rcs-to-cf-worker',
  twitter: 'https://vonage.com',
  telegram: 'https://vonage.com',
  mastodon: 'https://vonage.com',
  blog: 'https://vonage.com',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://i.ytimg.com/vi/fnwOkrPmZ1o/maxresdefault.jpg',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
