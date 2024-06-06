/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'back-api.tatpnu.com'
            },
            {
                protocol: 'https',
                hostname: 'u-profile.tatpnu.com'
            },{
                protocol: 'https',
                hostname: 'auth.tatpnu.com'
            },{
                protocol: 'https',
                hostname: 'tatpnu.com'
            },
        ]
    }
};

export default nextConfig;
