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
		const user = await User.findByPk(id)
		const newProfile = { ...profile }
		if (profile.old_password) {
			if (!profile.new_password) {
				throw new Error('Новый пароль не задан')
			}
			const isPassEquals = await bcrypt.compare(
				profile.old_password,
				user.password
			)
			if (!isPassEquals) {
				throw new Error('Неверно введён старый пароль')
			}
			delete profile.old_password
			const hashedPassword = await bcrypt.hash(profile.new_password, 3)
			if (hashedPassword) {
				newProfile.password = hashedPassword
			}
		}
		await User.update(newProfile, { where: { id } })
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
