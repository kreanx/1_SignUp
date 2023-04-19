import { useState } from 'react'
import Button from '../../ui-kit/Button/Button'
import Input from '../../ui-kit/Input/Input'
import styles from './Registration.module.scss'

const Registration: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		number: '',
		password: '',
		confirmPassword: '',
	})

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<form className={styles.registration__form} onSubmit={handleSubmit}>
			<Input
				label="Email"
				name="email"
				type="email"
				placeholder="Enter email"
				value={formData.email}
				onChange={handleInputChange}
				className={styles.registration__input}
			/>

			<Input
				label="Name"
				name="name"
				type="text"
				placeholder="Create User name"
				value={formData.name}
				onChange={handleInputChange}
				className={styles.registration__input}
			/>
			<Input
				label="Number"
				name="number"
				type="number"
				placeholder="Contact number"
				value={formData.email}
				onChange={handleInputChange}
				className={styles.registration__input}
			/>

			<Input
				label="Password"
				name="password"
				type="password"
				showPassword
				placeholder="Enter your password"
				value={formData.password}
				onChange={handleInputChange}
				className={styles.registration__input}
			/>
			<Input
				label="Confirm Password"
				name="confirmPassword"
				type="password"
				showPassword
				placeholder="Confirm Password"
				value={formData.confirmPassword}
				onChange={handleInputChange}
				className={styles.registration__input}
			/>

			<Button value="Register" type="submit" />
		</form>
	)
}

export default Registration
