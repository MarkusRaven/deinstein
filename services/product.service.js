const Products = require('../models/Products')
const FileService = require('../services/file.service')

class ProductService {
	async getProducts() {
		const products = await Products.findAll()
		return products
	}
	async getProduct(id) {
		const products = await Products.findOne({ where: { id: id } })
		return products 
	}
	async getProductsWithFilter(productTypeId) {
		const products = await Products.findAll({
			where: { productTypeId },
		})
		return products
	}
	async addProduct(
		name,
		short_desc,
		item_desc,
		price,
		photos = {},
		productTypeId
	) {
		let fileName = []
		console.log(photos.photo)
		for (let i = 0; i < photos.photo.length; i++) {
			console.log(photos)
			const product = photos.photo[i]
			fileName.push(FileService.saveFile(product, 'items'))
		}
		const product = await Products.create({
			name,
			short_desc,
			item_desc,
			price,
			photo: fileName,
			productTypeId,
		})
		return product
	}
}
module.exports = new ProductService()
