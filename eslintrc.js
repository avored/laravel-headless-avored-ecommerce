{
	parser: "babel-eslint",
  	rules: {
    	"graphql/template-strings": [
			'error', {env: 'apollo',}
		]
  },
  plugins: [
    'graphql'
  ]
}
