import React from 'react';
import { Fallback403, Fallback403__Image, Fallback403__Subtitle, Fallback403__Title } from './styles';
import Unauthorised from './Unauthorised';

export const AccessFallback = () => (
	<div className="Fallback403" style={Fallback403}>
		<div style={Fallback403__Image}>
			<Unauthorised />
		</div>
		<h2 style={Fallback403__Title}>403</h2>
		<p style={Fallback403__Subtitle}>Sorry, you are not authorized to access this page.</p>
	</div>
);
