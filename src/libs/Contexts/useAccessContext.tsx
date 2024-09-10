import React, { useContext, createContext } from 'react';
import { AccessContextType, AccessProviderProps, Operation, Permission } from '../types';

const initialState = {
	isAllowedTo: () => false,
};

const AccessContext = createContext<AccessContextType>(initialState);

export const AccessProvider = ({ permissions, children }: React.PropsWithChildren<AccessProviderProps>) => {
	const isAllowedTo = (permission: Permission | Permission[], operation?: Operation) => {
		if (!Array.isArray(permission)) {
			return permissions.includes(permission);
		}

		if (operation === 'AND') {
			return permission.every((perm) => permissions.includes(perm));
		}

		return permissions.some((perm) => permission.includes(perm));
	};

	return <AccessContext.Provider value={{ isAllowedTo }}>{children}</AccessContext.Provider>;
};

export const useAccessContext = () => useContext(AccessContext);

