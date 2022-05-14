const UserService = require('../services/user.service')

class UserController {
	async getUser(req, res) {
		try {
			const user = await UserService.getUser(req.user.id)
			return res.json(user)
		} catch (e) {
			res.status(404).send({
				message: 'Error when get users profile',
				error: e.message,
			})
		}
	}

	async editUser(req, res) {
		try {
			// console.log(req.body)
			const parseTel =
				'7' + req.body.tel.replace(/[{(\+)}\s\-]/g, '').slice(1)

			const { email, old_password, new_password, full_name, birthday } =
				req.body
			const user = await UserService.editUser(req.user.id, {
				email,
				old_password,
				new_password,
				tel: parseTel,
				full_name,
				birthday,
			})
			return res.json(user)
		} catch (e) {
			res.status(400).send({
				message: 'Error when edit profile',
				error: e.message,
			})
		}
	}
}

module.exports = new UserController()
