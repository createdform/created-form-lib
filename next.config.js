/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { externalDir: true}
}
const withTM = require('next-transpile-modules')(['@created/created-forms-lib']);

module.exports = nextConfig
