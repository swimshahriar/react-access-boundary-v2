import React from 'react';

export type Permission = string;

export type AccessContextType = {
	isAllowedTo: (permission: Permission | Permission[]) => boolean;
};

export type AccessProviderProps = {
	children: React.ReactNode;
	permissions: Permission[];
};

export type AccessBoundaryProps = {
	to: Permission | Permission[];
	isDefaultFallback?: boolean;
	fallback?: React.ReactNode;
};
