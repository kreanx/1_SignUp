import { GoogleLogin } from '@leecheuk/react-google-login'

const Auth = () => {
	const handleSuccess = (response: any) => {
		console.log('Авторизация прошла успешно:', response)
	}

	const handleFailure = (response: any) => {
		console.log('Ошибка авторизации:', response)
	}

	return (
		<GoogleLogin
			clientId="YOUR_CLIENT_ID"
			buttonText="Войти с помощью Google"
			onSuccess={handleSuccess}
			onFailure={handleFailure}
			cookiePolicy={'single_host_origin'}
		/>
	)
}

export default Auth
