import { useAccessContext } from './useAccessContext';

/**
 * This hook to check if the user has a specific permission or not.
 * If the user has the permission, the function returns true.
 * Otherwise, it returns false.
 */
export const useAccess = () => {
	const { isAllowedTo } = useAccessContext();
	return isAllowedTo;
};
