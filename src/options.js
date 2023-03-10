var options = [
	// {
	// 	label: 'Avatar Style',
	// 	type: 'avatarStyle',
	// 	attribute: 'avatarStyle',
	// 	values: [],
	// 	colorAttribute: 'skinColor',
	// 	colors: {
	// 		Tanned: '#FD9841',
	// 		Yellow: '#F8D25C',
	// 		Pale: '#FFDBB4',
	// 		Light: '#EDB98A',
	// 		Brown: '#D08B5B',
	// 		DarkBrown: '#AE5D29',
	// 		Black: '#614335',
	// 	},
	// },
	{
		label: 'Head',
		type: 'top',
		attribute: 'topType',
		values: [
			'NoHair',
			'Eyepatch',
			'Hat',
			'Hijab',
			'Turban',
			'WinterHat1',
			'WinterHat2',
			'WinterHat3',
			'WinterHat4',
			'LongHairBigHair',
			'LongHairBob',
			'LongHairBun',
			'LongHairCurly',
			'LongHairCurvy',
			'LongHairDreads',
			'LongHairFrida',
			'LongHairFro',
			'LongHairFroBand',
			'LongHairNotTooLong',
			'LongHairShavedSides',
			'LongHairMiaWallace',
			'LongHairStraight',
			'LongHairStraight2',
			'LongHairStraightStrand',
			'ShortHairDreads01',
			'ShortHairDreads02',
			'ShortHairFrizzle',
			'ShortHairShaggyMullet',
			'ShortHairShortCurly',
			'ShortHairShortFlat',
			'ShortHairShortRound',
			'ShortHairShortWaved',
			'ShortHairSides',
			'ShortHairTheCaesar',
			'ShortHairTheCaesarSidePart',
		],
		colorAttribute: 'hairColor',
		colors: {
			Auburn: '#A55728',
			Black: '#2C1B18',
			Blonde: '#B58143',
			BlondeGolden: '#D6B370',
			Brown: '#724133',
			BrownDark: '#4A312C',
			PastelPink: '#F59797',
			Platinum: '#ECDCBF',
			Red: '#C93305',
			SilverGray: '#E8E1E1',
		},
		hats: ['Hat', 'Hijab', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4'],
		hatColors: {
			Black: '#262E33',
			Blue01: '#65C9FF',
			Blue02: '#5199E4',
			Blue03: '#25557C',
			Gray01: '#E6E6E6',
			Gray02: '#929598',
			Heather: '#3C4F5C',
			PastelBlue: '#B1E2FF',
			PastelGreen: '#A7FFC4',
			PastelOrange: '#FFDEB5',
			PastelRed: '#FFAFB9',
			PastelYellow: '#FFFFB1',
			Pink: '#FF488E',
			Red: '#FF5C5C',
			White: '#FFFFFF',
		},
	},
	{
		label: 'Facial Hair',
		type: 'facialHair',
		attribute: 'facialHairType',
		pieceSize: '80',
		values: ['Blank', 'BeardMedium', 'BeardLight', 'BeardMajestic', 'MoustacheFancy', 'MoustacheMagnum'],
		colorAttribute: 'facialHairColor',
		colors: {
			Auburn: '#A55728',
			Black: '#2C1B18',
			Blonde: '#B58143',
			BlondeGolden: '#D6B370',
			Brown: '#724133',
			BrownDark: '#4A312C',
			Platinum: '#ECDCBF',
			Red: '#C93305',
		},
	},
	{
		label: 'Eyes',
		type: 'eyes',
		attribute: 'eyeType',
		transform: 'scale(3.6) translate(14px, 20px)',
		style: { margin: 10 },
		pieceSize: '50',
		pieceWidth: '65',
		values: [
			'Close',
			'Cry',
			'Default',
			'Dizzy',
			'EyeRoll',
			'Happy',
			'Hearts',
			'Side',
			'Squint',
			'Surprised',
			'Wink',
			'WinkWacky',
		],
	},
	{
		label: 'Eyebrows',
		type: 'eyebrows',
		attribute: 'eyebrowType',
		transform: 'scale(3.7) translate(14px, 20px)',
		style: { margin: 15 },
		pieceSize: '50',
		pieceWidth: '65',
		values: [
			'Angry',
			'AngryNatural',
			'Default',
			'DefaultNatural',
			'FlatNatural',
			'RaisedExcited',
			'RaisedExcitedNatural',
			'SadConcerned',
			'SadConcernedNatural',
			'UnibrowNatural',
			'UpDown',
			'UpDownNatural',
		],
	},
	{
		label: 'Accessories',
		type: 'accessories',
		attribute: 'accessoriesType',
		transform: 'scale(3) translate(0px, 0px)',
		style: { margin: 10 },
		pieceSize: '50',
		pieceWidth: '65',
		values: ['Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'],
	},
	{
		label: 'Mouth',
		type: 'mouth',
		attribute: 'mouthType',
		transform: 'scale(3.6) translate(14px, 13px)',
		pieceSize: '50',
		pieceWidth: '65',
		values: [
			'Concerned',
			'Default',
			'Disbelief',
			'Eating',
			'Grimace',
			'Sad',
			'ScreamOpen',
			'Serious',
			'Smile',
			'Tongue',
			'Twinkle',
			'Vomit',
		],
	},
	{
		label: 'Clothes',
		type: 'clothe',
		attribute: 'clotheType',
		transform: 'scale(2)',
		pieceSize: '65',
		pieceWidth: '65',
		style: { margin: 5 },
		pieceWidth: '65',
		values: [
			'BlazerShirt',
			'BlazerSweater',
			'CollarSweater',
			'GraphicShirt',
			'Hoodie',
			'Overall',
			'ShirtCrewNeck',
			'ShirtScoopNeck',
			'ShirtVNeck',
		],
		colorAttribute: 'clotheColor',
		colors: {
			Black: '#262E33',
			Blue01: '#65C9FF',
			Blue02: '#5199E4',
			Blue03: '#25557C',
			Gray01: '#E6E6E6',
			Gray02: '#929598',
			Heather: '#3C4F5C',
			PastelBlue: '#B1E2FF',
			PastelGreen: '#A7FFC4',
			PastelOrange: '#FFDEB5',
			PastelRed: '#FFAFB9',
			PastelYellow: '#FFFFB1',
			Pink: '#FF488E',
			Red: '#FF5C5C',
			White: '#FFFFFF',
		},
	},
	{
		label: 'Skin',
		type: 'skinColor',
		attribute: 'skinColor',
		values: [],
		colorAttribute: 'skinColor',
		colors: {
			Tanned: '#FD9841',
			Yellow: '#F8D25C',
			Pale: '#FFDBB4',
			Light: '#EDB98A',
			Brown: '#D08B5B',
			DarkBrown: '#AE5D29',
			Black: '#614335',
		},
	},
];

export default options;
