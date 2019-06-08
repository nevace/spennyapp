import React from 'react';
import Svg, { G, Text, TSpan } from 'react-native-svg';

const SpennyLogo = ({ hide }) =>
	!hide ? (
		<Svg width={210} height={31}>
			<G fill="none" fillRule="evenodd" fontFamily="Ubuntu" fontSize={38} fontWeight="bold" letterSpacing="7.238">
				<Text fill="#FFDCDC" transform="translate(0 -7)">
					<TSpan x={2} y={37}>
						{'SPENNY.'}
					</TSpan>
				</Text>
				<Text stroke="#946B6B" strokeWidth={2} fill="#FFF" fillOpacity={0} transform="translate(0 -7)">
					<TSpan x={0} y={35}>
						{'SPENNY.'}
					</TSpan>
				</Text>
			</G>
		</Svg>
	) : null;

export default SpennyLogo;
