/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

module.exports = nextConfig