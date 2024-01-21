const withImages = require('next-images')

module.exports = withImages({
	typescript: {
		// Incremental TypeScript migration
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		ignoreBuildErrors: true,
	},
	webpack: (config) => {
		// Add Babel loader for JavaScript and JSX files
		config.module.rules.push({
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/preset-react'],
				},
			},
		})

		config.resolve.extensionAlias = {
			'.js': ['.ts', '.tsx', '.js'],
		}
		return config
	},
	images: {
		domains: [
			'cdn.shopify.com',
			'res.cloudinary.com',
			'assets.vercel.com',
			'images.ctfassets.net',
			'placehold.co',
			'images.unsplash.com',
			'via.placeholder.com',
			'placehold.jp',
		],
	},
	async rewrites() {
		return [
			// Shop routes
			{
				source: '/search',
				destination: '/search/all',
			},
			{
				source: '/login',
				destination: '/auth/login',
			},
			{
				source: '/signup',
				destination: '/auth/signup',
			},
			{
				source: '/forgot-password',
				destination: '/auth/forgot-password',
			},
			{
				source: '/my-account',
				destination: '/auth/my-account',
			},
			{
				source: '/addresses',
				destination: '/auth/addresses',
			},
			{
				source: '/addresses/:address_id',
				destination: '/auth/addresses/:address_id',
			},
			{
				source: '/orders',
				destination: '/auth/orders',
			},
			{
				source: '/orders/:order_id',
				destination: '/auth/orders/:order_id',
			},
		]
	},
})
