import Spinner from '../Spinner/Spinner'
import { IButton } from '../types'
import styles from './Button.module.scss'

const Button: React.FC<IButton> = (props) => {
	const {
		children = null,
		type = 'button',
		name = 'button',
		disabled = false,
		className = styles.button,
		value,
		onClick,
		loading,
	} = props

	return (
		<button
			className={
				className === styles.button
					? styles.button
					: `${className} ${styles.button}`
			}
			name={name}
			disabled={disabled || loading}
			value={value}
			onClick={onClick}
			type={type}
		>
			{loading ? <Spinner /> : value}
			{children}
		</button>
	)
}

export default Button
