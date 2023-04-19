import { useEffect, useState } from 'react'
import { IInput } from '../types'
import styles from './Input.module.scss'
import closedEye from '../../assets/closedEye.svg'
import openedEye from '../../assets/openedEye.svg'

const Input: React.FC<IInput> = (props) => {
	const {
		label,
		onChange,
		value,
		name,
		placeholder,
		type = 'text',
		className,
		showPassword = false,
		validation,
	} = props
	const inputId = `input-${Math.floor(Math.random() * 1000)}`
	const [showText, setShowText] = useState<boolean>(false)
	const customInputType = showPassword ? 'text' : type
	const [inputType, setInputType] = useState<string>(customInputType)
	const [error, setError] = useState<string | undefined>(undefined)

	const handleToggleShowText = () => {
		setShowText(!showText)
	}

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value
		if (validation) {
			const error = validation(newValue)
			setError(error)
		}
		onChange(event)
	}

	useEffect(() => {
		if (!showPassword) {
			setInputType(type)
		}
	}, [])

	useEffect(() => {
		if (showPassword) {
			if (showText) {
				setInputType('text')
			} else {
				setInputType('password')
			}
		}
	}, [showText])

	return (
		<div className={styles.input}>
			<label className={styles.input__label} htmlFor={inputId}>
				{label}
			</label>
			<div
				className={
					className
						? `${styles.input__wrapper} ${className}`
						: styles.input__wrapper
				}
			>
				<input
					className={
						className
							? `${styles.input__input} ${className}`
							: styles.input__input
					}
					id={inputId}
					name={name}
					type={inputType}
					placeholder={placeholder}
					value={value}
					onChange={validation ? handleInputChange : onChange}
				/>
				{showPassword && (
					<button
						className={styles.input__toggle}
						type="button"
						onClick={handleToggleShowText}
					>
						<img
							className={styles.input__eye}
							src={showText ? closedEye : openedEye}
							alt="eye"
						/>
					</button>
				)}
				{error}
			</div>
		</div>
	)
}

export default Input
