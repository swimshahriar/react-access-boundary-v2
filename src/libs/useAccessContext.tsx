import React, { useContext, createContext } from 'react';
import { AccessContextType, AccessProviderProps, Permission } from './types';

const initialState = {
	isAllowedTo: () => false,
};

const AccessContext = createContext<AccessContextType>(initialState);

export const AccessProvider: React.FC<React.PropsWithChildren<AccessProviderProps>> = ({ permissions, children }) => {
	const isAllowedTo = (permission: Permission | Permission[]) => {
		if (Array.isArray(permission)) {
			return permissions.some((perm) => permission.includes(perm));
		}

		return permissions.includes(permission);
	};

	return <AccessContext.Provider value={{ isAllowedTo }}>{children}</AccessContext.Provider>;
};

export const useAccessContext = () => useContext(AccessContext);

