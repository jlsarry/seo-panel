module.exports = ({ env }) => ({
	slugify: {
		enabled: true,
		config: {
			contentTypes: {
				category: {
					field: 'slug',
					references: 'name',
				},
                subcategory: {
					field: 'slug',
					references: 'name',
				},
                brand: {
					field: 'slug',
					references: 'name',
				},
                product: {
					field: 'slug',
					references: 'name',
				},
                print_provider: {
					field: 'slug',
					references: 'name',
				},
			},
		},
	},
});