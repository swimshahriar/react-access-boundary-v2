import React from 'react';
import AccessBoundary from '../..';
import { Operation } from '../../types';

interface RouteGuardProps {
	permissions?: string[];
	operation?: Operation;
}

export const RouteGuard = ({ permissions, operation, children }: React.PropsWithChildren<RouteGuardProps>) => {
	if (!permissions || !permissions.length) {
		return children;
	}

	return (
		<AccessBoundary to={permissions} operation={operation} isDefaultFallback>
			{children}
		</AccessBoundary>
	);
};

