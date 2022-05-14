const User = require('../models/User')
const bcrypt = require('bcrypt')

class UserService {
	async getUser(id) {
		const user = await User.findByPk(id)
		return {
			user: {
				id: user.id,
				email: user.email,
				tel: user.tel,
				full_name: user.full_name,
				birthday: user.birthday,
				createdAt: user.createdAt,
			},
		}
	}
	async editUser(id, profile) {
		const user = await this.getUser(id)
		if (profile.hasOwnProperty('old_password')) {
			const isPassEquals = await bcrypt.compare(
				profile.old_password,
				user.password
			)
			if (!isPassEquals) {
				throw new Error(
					'The old password and the entered password do not match'
				)
			}
			delete profile.old_password
		}
		const hashedPassword = await bcrypt.hash(profile.new_password, 3)
		await User.update(
			{
				...profile,
				password: hashedPassword,
			},
			{ where: { id } }
		)
		const updatedProfile = await User.findByPk(id)
		return {
			user: {
				id: updatedProfile.id,
				tel: updatedProfile.tel,
				full_name: updatedProfile.full_name,
				email: updatedProfile.email,
				birthday: updatedProfile.birthday,
				createdAt: updatedProfile.createdAt,
			},
		}
	}
}
module.exports = new UserService()
