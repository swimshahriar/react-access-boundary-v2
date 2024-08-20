import React from 'react';
import { AccessContextType, AccessProviderProps, Permission } from './types';

const defaultValue = {
	isAllowedTo: () => false,
};

/**
 * Default behaviour for the Access Provider Context
 * i.e. if for whatever reason the consumer is used outside of a provider.
 * The permission will not be granted unless a provider says otherwise
 */
const AccessContext = React.createContext<AccessContextType>(defaultValue);

/**
 * This provider is intended to be surrounding the whole application.
 * It should receive the users permissions as parameter
 */
export const AccessProvider: React.FC<React.PropsWithChildren<AccessProviderProps>> = ({ permissions, children }) => {
	const isAllowedTo = (permission: Permission | Permission[]) => {
		if (Array.isArray(permission)) {
			return permissions.some((perm) => permission.includes(perm));
		}

		return permissions.includes(permission);
	};

	return <AccessContext.Provider value={{ isAllowedTo }}>{children}</AccessContext.Provider>;
};

export const useAccessContext = () => React.useContext(AccessContext);
