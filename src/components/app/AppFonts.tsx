import React, { useState, useEffect } from 'react'
import GoogleFontLoader from 'react-google-font-loader'

type AppFontsProps = {
	app: any
}

const AppFonts: React.FC<AppFontsProps> = (props) => {
	const { app } = props
	const [googleFonts, setGoogleFonts] = useState<any>()

	const { header_font, body_font } = app || {}

	useEffect(() => {
		if (header_font || body_font) {
			let fonts = [
				{ font: 'Inter', weights: [400, 600, 700, 800] },
				{ font: 'Roboto', weights: [400, 600, 700, 800] },
			]
			if (header_font) {
				fonts.push({
					font: header_font,
					weights: [400, 600, 700, 800],
				})
			}
			if (body_font) {
				fonts.push({
					font: body_font,
					weights: [400, 600, 700, 800],
				})
			}
			setGoogleFonts(fonts)
		}
	}, [header_font, body_font])

	if (!googleFonts) return null
	return <GoogleFontLoader fonts={googleFonts} />
}

export default AppFonts
