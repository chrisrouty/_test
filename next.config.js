module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/club',
                permanent: true,
            },
        ]
    },
    env: {
        DATABASE_URL: 'postgres://dbvovietnam:postgres@localhost:5432/dbvovietnam?schema=public',
    },
}