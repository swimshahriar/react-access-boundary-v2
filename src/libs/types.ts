import React from 'react';

export type Permission = string;

export type AccessContextType = {
	isAllowedTo: (permission: Permission | Permission[], operation?: Operation) => boolean;
};

export type AccessProviderProps = {
	children: React.ReactNode;
	permissions: Permission[];
};

export type AccessBoundaryProps = {
	to: Permission | Permission[];
	operation?: Operation;
	isDefaultFallback?: boolean;
	fallback?: React.ReactNode;
};

export type Operation = 'AND' | 'OR';