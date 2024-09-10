import React, { ReactNode } from 'react';
import AccessBoundary from '../..';

interface RouteGuardProps {
	permissions?: string[];
	children: ReactNode;
}

export const RouteGuard = ({ permissions, children }: RouteGuardProps) => {
	if (!permissions || !permissions.length) {
		return children;
	}

	return (
		<AccessBoundary to={permissions} isDefaultFallback>
			{children}
		</AccessBoundary>
	);
};

