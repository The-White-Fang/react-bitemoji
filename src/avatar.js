import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Piece } from 'avataaars';
import Avatar from 'avataaars';
import map from 'lodash/map';
import FileSaver from 'file-saver';
import options from './options';
import {
	Button,
	DownloadRow,
	Tabs,
	Tabpanes,
	ColorContainer,
	Container,
	StyledAvatar,
	Pieces,
	Color,
	None,
	Tab,
	Tabpane,
	TabsContainer,
} from './style';

export default function Avataaar(props) {
	const avatarRef = useRef(null);
	/** @type {React.RefObject<HTMLDivElement>} */
	const tabsRef = useRef(null);
	/** @type {React.RefObject<HTMLCanvasElement>} */
	const canvasRef = useRef(null);
	const [selectedTab, setSelectedTab] = useState('top');

	const pieceClicked = (attr, val) => {
		var newAttributes = {
			...props.value,
			[attr]: val,
		};
		if (props.onChange) {
			props.onChange(newAttributes);
		}
	};

	const onSaveImg = () => {
		const svgNode = ReactDOM.findDOMNode(avatarRef.current);
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const anyWindow = window;
		const DOMURL = anyWindow.URL || anyWindow.webkitURL || window;

		const data = svgNode.outerHTML;
		const img = new Image();
		const svg = new Blob([data], { type: 'image/svg+xml' });
		const url = DOMURL.createObjectURL(svg);

		img.onload = () => {
			ctx.save();
			ctx.scale(2, 2);
			ctx.drawImage(img, 0, 0);
			ctx.restore();
			DOMURL.revokeObjectURL(url);
			canvasRef.current.toBlob((imageBlob) => {
				const file = new File([imageBlob], 'avatar.png', { type: 'image/png' });
				const form = new FormData();
				form.set('file', file);

				const queryParams = new URLSearchParams(window.location.search);
				const url = decodeURIComponent(queryParams.get('action'));

				fetch(url, {
					method: 'POST',
					body: form,
				});
			});
		};
		img.src = url;
	};

	const onSelect = (option, i) => {
		setSelectedTab(option.type);
		tabsRef.current && tabsRef.current.scroll({ left: (i - 1) * 100, behavior: 'smooth' });
	};

	return (
		<Container>
			<Avatar ref={avatarRef} style={{ height: '25vh', width: '25vh' }} {...props.value} />
			<TabsContainer ref={tabsRef}>
				<Tabs>
					{map(options, (option, i) => {
						return (
							<Tab selectedTab={selectedTab} type={option.type} onClick={() => onSelect(option, i)}>
								{option.label}
							</Tab>
						);
					})}
				</Tabs>
			</TabsContainer>
			<Tabpanes>
				{options.map((option) => {
					return (
						<Tabpane selectedTab={selectedTab} type={option.type}>
							{option.values.map((val) => {
								var attr = {};
								attr[option.attribute] = val;
								if (option.transform) {
									attr.style = { transform: option.transform };
								}
								return (
									<Pieces onClick={() => pieceClicked(option.attribute, val)} style={option.style}>
										{option.type === 'avatarStyle' ? (
											<span style={{ margin: '5px' }}>{val}</span>
										) : (
											<Piece
												pieceSize={option.pieceSize || '50'}
												pieceWidth={option.pieceWidth}
												pieceType={option.type}
												{...attr}
											/>
										)}
										{(val === 'Blank' || val === 'NoHair') && <None>(none)</None>}
									</Pieces>
								);
							})}
							<ColorContainer>
								{option.colors &&
									(option.type !== 'top' || option.hats.indexOf(props.value.topType) === -1) &&
									props.value.topType !== 'Eyepatch' &&
									props.value.topType !== 'LongHairShavedSides' &&
									props.value.topType !== 'LongHairFrida' &&
									map(option.colors, (color, colorName) => {
										return (
											<Color
												style={{
													backgroundColor: color,
													border:
														color === '#FFFFFF' ? '1px solid #ccc' : '1px solid ' + color,
												}}
												onClick={() => pieceClicked(option.colorAttribute, colorName)}
											>
												{props.value[option.colorAttribute] === colorName &&
													String.fromCharCode(0x2713)}
											</Color>
										);
									})}

								{option.hatColors &&
									option.hats.indexOf(props.value.topType) !== -1 &&
									props.value.topType !== 'Hat' &&
									map(option.hatColors, (color, colorName) => {
										return (
											<Color
												style={{
													backgroundColor: color,
													border:
														color === '#FFFFFF' ? '1px solid #ccc' : '1px solid ' + color,
												}}
												onClick={() => pieceClicked('hatColor', colorName)}
											>
												{props.value.hatColor === colorName && String.fromCharCode(0x2713)}
											</Color>
										);
									})}
							</ColorContainer>
						</Tabpane>
					);
				})}
			</Tabpanes>
			<canvas style={{ display: 'none' }} width='528' height='560' ref={canvasRef} />
		</Container>
	);
}
