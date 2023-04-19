import { useState } from 'react'
import Button from '../../ui-kit/Button/Button'
import Input from '../../ui-kit/Input/Input'
import styles from './Login.module.scss'

const Login: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	})

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}

	return (
		<form className={styles.login__form} onSubmit={handleSubmit}>
			<Input
				label="Email"
				name="email"
				type="email"
				placeholder="Enter your email"
				value={formData.email}
				onChange={handleInputChange}
				className={styles.login__input}
			/>

			<Input
				label="Password"
				name="password"
				type="password"
				showPassword
				placeholder="Enter your password"
				value={formData.password}
				onChange={handleInputChange}
				className={styles.login__input}
			/>

			<Button value="Submit" type="submit" />
		</form>
	)
}

export default Login
