const path = require("path");

module.exports = {
    swcMinify: true,
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
