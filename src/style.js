import styled, { css } from 'styled-components';

export const Container = styled.div(
	() => css`
		display: flex;
		flex-direction: column;
		height: 100%;
		align-items: center;
		padding: 10px 0;
		box-sizing: border-box;
		padding: 10px;
	`
);

export const TabsContainer = styled.div(
	() => css`
		width: 100vw;
		padding-bottom: 30px;
		overflow: auto;
		margin: 10px;
		::-webkit-scrollbar {
			display: none;
		}
	`
);

export const Tabs = styled.div(
	() => css`
		display: flex;
		@media only screen and (min-width: 954px) {
			align-items: center;
			justify-content: center;
		}
	`
);

export const Tab = styled.div(
	() => css`
		display: inline-block;
		font-size: 12px;
		text-align: center;
		flex-shrink: 0;
		width: 90px;
		border: 1px solid transparent;
		padding: 4px;
		border-radius: 4px;
		cursor: pointer;
		color: #007bff;

		${({ selectedTab, type }) =>
			selectedTab === type &&
			css`
				background: #007bff;
				color: white;
			`}
	`
);

export const Pieces = styled.div(
	() => css`
		display: inline-block;
		position: relative;
		overflow: hidden;

		:hover {
			background-color: #cce5ff;
			cursor: pointer;
		}
	`
);

export const Color = styled.div(
	() => css`
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		width: 50px;
		cursor: pointer;
		font-size: 30;

		[color='#FFFFFF'] {
			border: 1px solid #ccc;
		}
	`
);

export const None = styled.div(
	() => css`
		opacity: 0.2;
		font-size: 11px;
		position: absolute;
		top: 20px;
		left: 9px;
	`
);

export const StyledAvatar = styled.div(
	() => css`
		display: block;
		width: 315px;
		height: 235px;
		padding-left: 20px;
	`
);

export const Tabpane = styled.div(
	() => css`
		box-sizing: border-box;
		display: none;
		width: 400px;
		padding: 0 10px 10px;
		${({ selectedTab, type }) =>
			selectedTab === type &&
			css`
				display: flex;
				align-items: center;
				justify-items: center;
				flex-wrap: wrap;
				align-content: center;
				justify-content: center;
			`}
	`
);
export const DownloadRow = styled.div(
	() => css`
		text-align: center;
	`
);

export const ColorContainer = styled.div(
	() => css`
		display: flex;
		align-items: center;
		justify-items: center;
		flex-wrap: wrap;
		align-content: center;
		justify-content: center;
		padding-top: 10px;
	`
);

export const Tabpanes = styled.div(
	() => css`
		box-sizing: border-box;
		display: inline-block;
		width: 400px;
	`
);

export const Button = styled.button(
	() => css`
		border-radius: 7px;
		color: #e6e6ee;
		background-color: #001f3f;
		border: 1px solid transparent;
		padding: 5px 7px;
		font-size: 20px;
		letter-spacing: 0.6px;
		margin: 0 5px;
		cursor: s-resize;
		:active {
			cursor: progress;
		}
		:hover {
			text-decoration: none;
			color: #fff;
		}
		> svg {
			fill: #e6e6ee;
			height: 20px;
		}
		> svg:hover {
			color: #fff;
		}
	`
);
