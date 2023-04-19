export type buttonTypes = 'button' | 'submit' | 'reset'

interface IButton {
	type?: buttonTypes
	disabled?: boolean
	className?: string
	children?: React.ReactNode
	name?: string
	value?: string
	onClick?: () => void
	loading?: boolean
}

interface IInput {
	value: string
	name: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	label?: string
	type?: string
	placeholder?: string
	className?: string
	children?: React.ReactNode
	showPassword?: boolean
	validation?: (value: string) => string | undefined
}
export type { IButton, IInput }
