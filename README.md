# react-access-boundary-v2

A lightweight React utility for managing access control by checking user permissions before rendering UI components. With `react-access-boundary-v2`, you can easily protect routes, pages, and individual elements based on a user's permissions, ensuring secure and seamless access control throughout your application.

- 🔒 Protect UI components with user permission checks.
- 🛡️ Secure routes using the RouteGuard component for access control.
- ✅ Supports single and multiple permission checks.
- 🔀 Allows AND/OR logic for permission requirements.
- 🎨 Customizable fallback UI for unauthorized users.
- ⚙️ Simple setup via `AccessProvider` for global permissions.
- 🪝 Use `useAccessContext` hook for permission-based rendering.
- 📝 Full TypeScript support for better developer experience.

[![version][version-badge]][package] [![MIT License][license-badge]][license]

## Quick Start

1. **Installation**: It should be installed in your React project's `dependencies` by running either of the following:

```bash
yarn add react-access-boundary-v2
# or
npm i react-access-boundary-v2
```

2. **Usage**: First, you need to wrap the application or private layouts with `<AccessProvider>`. Once done, you are ready to use the `<AccessBoundary>` component.

```jsx
const App = () => {
	const permissions = ['MY_ACCOUNT', 'ORDER_VIEW', 'ORDER_EDIT', 'ORDER_UPDATE', 'ORDER_DELETE'];

	return (
		<AccessProvider permissions={permissions}>
			<YourApplicationRoutes />
		</AccessProvider>
	);
};
```

### Protecting a Page

```jsx
const CustomerOrders = () => {
	return (
		<AccessBoundary to="ORDER_VIEW" isDefaultFallback>
			{/* Your Customer Order component */}
		</AccessBoundary>
	);
};

export default CustomerOrders;
```

You can customize the fallback component by passing the `fallback` prop to replace the default one. Here's how you can protect a page with a custom fallback:

### Protecting a Page with Custom Fallback

```jsx
const CustomerOrders = () => {
	return (
		<AccessBoundary to="ORDER_VIEW" fallback={<div>You do not have permission to view this page.</div>}>
			{/* Your Customer Order component */}
		</AccessBoundary>
	);
};

export default CustomerOrders;
```

In this example, if the user doesn't have the required `ORDER_VIEW` permission, a custom message is displayed instead of the default fallback.

### Protecting a UI Component

```jsx
<AccessBoundary to="ORDER_DELETE">
	<button class="ActionButton">Delete Order</button>
</AccessBoundary>
```

### Conditional Rendering with useContext

```jsx
const { isAllowedTo } = useAccessContext();

<button class="ActionButton">{isAllowedTo('ORDER_UPDATE') ? 'Update Order' : 'Preview Order'}</button>;
```

### RouteGuard Component

A new `RouteGuard` component has been added to help manage routes based on permissions. Wrap your routes with `RouteGuard` to ensure they are protected based on the user's permissions:

```jsx
<Route
	key={index}
	path={path}
	element={
		<Suspense fallback={<Spin type="content-centre" size="large" />}>
			<RouteGuard permissions={permissions}>
				<Component />
			</RouteGuard>
		</Suspense>
	}
/>
```

### `isAllowedTo` Operation Support

The `isAllowedTo` function and `AccessBoundary` now support the `AND` operation for permission checks. This means you can require multiple permissions to be present before granting access.

```jsx
const { isAllowedTo } = useAccessContext();

// Use 'AND' operation to check if the user has all specified permissions
isAllowedTo(['ORDER_UPDATE', 'ORDER_EDIT'], 'AND');
```

Similarly, the `AccessBoundary` component supports the `AND` operation for permissions:

```jsx
<AccessBoundary to={['ORDER_VIEW', 'ORDER_EDIT']} operation="AND">
	<button class="ActionButton">Edit and View Orders</button>
</AccessBoundary>
```

## Credit

This package is inspired by the `react-access-boundary` [package](https://www.npmjs.com/package/react-access-boundary).

### Migration from `react-access-boundary` to `react-access-boundary-v2`

Migrating from `react-access-boundary` to `react-access-boundary-v2` is seamless and won't introduce breaking changes. The core functionality remains the same, ensuring your existing permission-based access controls continue to work as expected.

#### Key points:

- **No Breaking Changes**: You can upgrade without needing to refactor existing components or logic.
- **Enhanced Features**: `react-access-boundary-v2` introduces new features like the `RouteGuard` component and support for `AND/OR` permission logic, giving you more flexibility without altering current behavior.

To migrate, simply install the new package:

```bash
yarn add react-access-boundary-v2
# or
npm i react-access-boundary-v2
```

And you're good to go! No further changes are necessary for your existing code.

## Can I contribute?

Absolutely! Open an issue to point out any errors or suggest improvements. If you'd like to fix something yourself, you're welcome to open a PR, and it will be much appreciated.

## License

[MIT][license]

[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[package]: https://www.npmjs.com/package/react-access-boundary-v2
[version-badge]: https://img.shields.io/npm/v/react-access-boundary-v2?style=flat-square
[license-badge]: https://img.shields.io/npm/l/react-access-boundary-v2?style=flat-square
[license]: https://github.com/swimshahriar/react-access-boundary-v2/blob/main/LICENSE
