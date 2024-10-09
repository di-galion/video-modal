import { useEffect, useState } from 'react'
import ReactSwitch from 'react-switch'
import './style.scss'

const Switch = ({ reduxKey, defaultValue = false, onChange = () => {} }) => {
	const [value, setValue] = useState(defaultValue)

	useEffect(() => {
		onChange({ [reduxKey]: value })
	}, [value])

	const handleChange = checked => {
		if (checked) {
			const el = document.querySelector('.react-switch-handle')
			setTimeout(() => {
				el.setAttribute('style', 'transform:translateX(20px) !important')
			}, 10)
		}
		setValue(checked)
	}

	return (
		// <div className={styles.container}>
		<ReactSwitch
			// handleDiameter={100}
			onColor={'#5e72d9'}
			offColor='#888888'
			height={16}
			width={33}
			borderRadius={5}
			boxShadow='box-shadow: 1px 1px 1px #7f86a8, -0.5px -0.5px 1px #a8acc4 '
			onChange={handleChange}
			checked={value}
		/>
		// </div>
	)
}

export default Switch
