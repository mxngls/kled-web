const path = require("path");

module.exports = {
    swcMinify: true,
    envVar: {
        key: process.env.NEXT_PUBLIC_SUPABASE_APIKEY,
        auth: process.env.NEXT_PUBLIC_SUPABASE_AUTH,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        config.experiments = Object.assign(config.experiments || {}, {
            asyncWebAssembly: true,
        });

        config.module.rules.push({
            test: /\.wasm$/,
            type: "javascript/auto",
        });
        return config;
    },
    webpackDevMiddleware: (config) => config,
};
