import React, { useContext, useState, useEffect } from 'react'
import { EditorContext } from 'context'
import { ThemeProvider } from 'webstudio-mui/context'

type AppThemeProps = {
	app: any
	editor?: boolean
	children: React.ReactNode
}

const AppTheme: React.FC<AppThemeProps> = (props) => {
	const { app, editor = false, children } = props
	const { deviceSize } = useContext(EditorContext)
	const [offset, setOffset] = useState(0)
	const [mobile, setMobile] = useState(false)

	const {
		primary_color,
		background_color,
		header_font,
		border_radius,
		body_font,
		top_nav,
	} = app || {}

	useEffect(() => {
		if (deviceSize === 'mobile') {
			setMobile(true)
		} else {
			setMobile(false)
		}
	}, [deviceSize])

	useEffect(() => {
		let xOffset = 0
		if (!top_nav) {
			xOffset = 280
		}
		if (editor) {
			xOffset += 780
		}
		setOffset(xOffset)
	}, [top_nav, editor])

	return (
		<ThemeProvider
			primaryColor={primary_color}
			bgcolor={background_color}
			headerFont={header_font}
			bodyFont={body_font}
			borderRadius={border_radius}
			offset={offset}
			mobile={mobile}
		>
			{children}
		</ThemeProvider>
	)
}

export default AppTheme
