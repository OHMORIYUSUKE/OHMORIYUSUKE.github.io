import { defineConfig } from 'astro/config';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserOrOrganizationSite = repositoryName?.endsWith('.github.io');

export default defineConfig({
  output: 'static',
  site: process.env.GITHUB_REPOSITORY_OWNER
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
    : undefined,
  base: repositoryName && !isUserOrOrganizationSite ? `/${repositoryName}` : '/',
  vite: {
    server: { host: true }
  }
});
