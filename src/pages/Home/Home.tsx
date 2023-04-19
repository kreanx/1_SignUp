import styles from './Home.module.scss'
import man from '../../assets/man.png'
import google from '../../assets/google.svg'
import Login from '../../components/Login/Login'
import { useState } from 'react'
import Registration from '../../components/Registration/Registration'
// import Auth from '../../components/Auth/Auth'

const Home: React.FC = () => {
	const [signText, setSignText] = useState<string>('Sign in')

	const handleRegister = () => {
		if (signText === 'Sign up') {
			setSignText('Sign in')
		} else {
			setSignText('Sign up')
		}
	}

	return (
		<section className={styles.home}>
			<div className={styles.home__wrapper}>
				<div className={styles.home__block}>
					<div className={styles.home__topText}>
						<h2 className={styles.home__title}>Sign in to </h2>
						<p className={styles.home__subtitle}>Lorem Ipsum is simply </p>
					</div>
					<div className={styles.home__bottomContent}>
						<div className={styles.home__bottomContent_text}>
							{signText === 'Sign in'
								? ' If you already have an account '
								: ' If you don’t have an account register'}
							<br /> You can
							<span onClick={handleRegister}>
								{signText === 'Sign in' ? ' Register here !' : ' Login here !'}
							</span>
						</div>
						<div className={styles.home__bottomContent_img}>
							<img src={man} alt="man" />
						</div>
					</div>
				</div>
				<div className={styles.home__block}>
					<h3 className={styles.home__sign}>{signText}</h3>
					<div className={styles.home__login}>
						{signText === 'Sign in' ? <Login /> : <Registration />}
					</div>
					<p className={styles.home__register}>or continue with</p>
					<div className={styles.home__links}>
						<img src={google} alt="google" />
					</div>
					{/* <Auth /> */}
				</div>
			</div>
		</section>
	)
}

export default Home
