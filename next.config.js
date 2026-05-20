const nextConfig = {
    turbopack: {
        root: __dirname,
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Clacks-Overhead',
                        value: 'GNU Terry Pratchett',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
