import React from "react";

export const Avatar = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			version="1.1"
			shapeRendering="crispEdges">
			<path
				d="M8 15v1H4v1H3v3h14v-3h-1v-1h-4v-1h3v-1h1v-1h1v-3h1V7h-1V4h-1V3h-1V2H5v1H4v1H3v3H2v3h1v3h1v1h1v1h3z"
				fill="#CB9E6E"
			/>
			<path
				d="M5 15v-1H4v-1H3v-3H2V7h1V4h1V3h1V2h10v1h1v1h1v3h1v3h-1v3h-1v1h-1v1H5z"
				fill="#FFF"
				fillOpacity=".1"
			/>
			<path d="M5 7h3v2H5V7zm7 0h3v2h-3V7z" fill="#FFF" />
			<path d="M7 8h1v1H7V8zm5 0h1v1h-1V8z" fill="#5b7c8b" />
			<path d="M6 5h3v2H8V6H6V5zm5 0h3v1h-2v1h-1V5z" fillRule="evenodd" fill="#000000" />
			<path d="M8 13h3v1H8v-1z" fill="#eec1ad" />
			<path d="M5 8h3v1H5V8zm7 0h3v1h-3V8z" fillRule="evenodd" fill="#FFF" fillOpacity=".2" />
			<path d="M7 8h1v1H7V8zm7 0h1v1h-1V8z" fillRule="evenodd" fill="#FFF" fillOpacity=".2" />
			<path
				d="M5 8v1h3V8H5zM3 7v1h1v1h1v1h3V9h1V8h2v1h1v1h3V9h1V8h1V7H3zm9 1v1h3V8h-3z"
				fillRule="evenodd"
				fill="#5f705c"
			/>
			<path
				d="M3 7v1h1V7H3zm6 0v1h2V7H9zm7 0v1h1V7h-1z"
				fillRule="evenodd"
				fill="#FFF"
				fillOpacity=".2"
			/>
			<path d="M5 16H4v1H3v3h14v-3h-1v-1h-3v1H7v-1H5z" fill="#03396c" />
			<path d="M10 20v-1h3v1h-3z" fill="#FFF" fillOpacity=".5" />
			<path
				d="M5 16H4v1H3v3h1v-1h1v-3zm1 0h1v1h6v-1h1v2H6v-2zm9 0h1v1h1v3h-1v-1h-1v-3z"
				fillRule="evenodd"
				fill="#FFF"
				fillOpacity=".8"
			/>
			<path d="M4 4h12V3h-1V2H5v1H4v1z" fill="#090806" />
			<path d="M2 4V2h2V0h12v2h2v2H2z" fill="#18293b" />
			<path d="M4 0v2h12V0H4z" fill="#FFF" fillOpacity=".2" />
		</svg>
	);
};

export const UserAvatar = (props) => {
	const { user, size } = props;
	let width = size === "small" ? "81%" : "100%";

	return (
		<div className="user_avatar">
			<div style={{ width: width, display: "block", margin: "0 auto" }}>
				<Avatar />
				<div style={{ color: "white", margin: "16px 0" }}>
					<strong> {user}</strong>
				</div>
			</div>
		</div>
	);
};
