import React from 'react';
import { AccessFallback } from './Components/AccessFallback';
import { AccessBoundaryProps } from './types';
import { useAccessContext } from './Contexts/useAccessContext';

const AccessBoundary = ({ to, operation, children, isDefaultFallback, fallback }: React.PropsWithChildren<AccessBoundaryProps>) => {
	const { isAllowedTo } = useAccessContext();

	if (isAllowedTo(to, operation)) {
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

