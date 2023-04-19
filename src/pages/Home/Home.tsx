import styles from './Home.module.scss'
import man from '../../assets/man.png'
import Login from '../../components/Login/Login'

const Home: React.FC = () => {
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
							If you don’t have an account register
							<br /> You can
							<span>Register here !</span>
						</div>
						<div className={styles.home__bottomContent_img}>
							<img src={man} alt="man" />
						</div>
					</div>
				</div>
				<div className={styles.home__block}>
					<Login />
				</div>
			</div>
		</section>
	)
}

export default Home
