export const MENU_ITEMS = {
	app: [
		{
			id: 'apps',
			value: '/apps',
			label: 'Apps',
			icon: 'Grip',
		},
		{
			id: 'pages',
			value: '/editor',
			label: 'Pages',
			icon: 'Layers',
		},
		{
			id: 'collections',
			value: '/collections',
			label: 'Collections',
			icon: 'Database',
		},
		{
			id: 'storage',
			value: '/storage',
			label: 'Storage',
			icon: 'Image',
		},
		{
			id: 'settings',
			value: '/settings/brand',
			label: 'Settings',
			icon: 'Settings',
		},
	],
	noapp: [
		{
			id: 'apps',
			value: '/apps',
			label: 'App Builder',
			icon: 'Grip',
		},
	],
}

export const LINK_TABS = [{ label: 'Navigation', value: 'links' }]

export const SETTINGS_TABS = [
	{ label: 'Brand', value: 'brand' },
	{ label: 'Menu', value: 'links' },  
	{ label: 'Social', value: 'social' },
	{ label: 'Addons', value: 'addons' },
	{ label: 'API Keys', value: 'api-keys' },
	{ label: 'Locales', value: 'locales' },
	{ label: 'Team', value: 'accounts' },
  { label: 'Notifications', value: 'notifications' },
]

export const ADDONS_TABS = [
	{ label: 'All', value: 'all' },
	{ label: 'Installed', value: 'installed' },
]
