import React from 'react';
import { AccessFallback } from './Components/AccessFallback';
import { AccessBoundaryProps } from './types';
import { useAccessContext } from './useAccessContext';

const AccessBoundary = ({ to, children, isDefaultFallback, fallback }: React.PropsWithChildren<AccessBoundaryProps>) => {
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
