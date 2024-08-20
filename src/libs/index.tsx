import React from 'react';
import { AccessFallback } from './AccessFallback';
import { AccessBoundaryProps } from './types';
import { useAccessContext } from './useAccessContext';

/**
 * AccessBoundary is a wrapper component that provides access
 * to the user's permissions and provides a fallback component
 * if the user does not have access.
 */
const AccessBoundary: React.FC<React.PropsWithChildren<AccessBoundaryProps>> = (props) => {
	const { to, children, isDefaultFallback, fallback } = props;

	const { isAllowedTo } = useAccessContext();

	if (isAllowedTo(to)) {
		return <>{children}</>;
	}

	if (fallback) {
		return <>{fallback}</>;
	}

	if (isDefaultFallback) {
		return <AccessFallback />;
	}

	return null;
};

export default AccessBoundary;
