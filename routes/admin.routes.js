const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminBroSequelize = require('@adminjs/sequelize')

const Products = require('../models/Products')

AdminJS.registerAdapter(AdminBroSequelize)

const adminJs = new AdminJS({
	databases: [Products],
	rootPath: '/admin',
	resource: {
		Products,
	},
})

const router = AdminJSExpress.buildRouter(adminJs)

module.exports = router
