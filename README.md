# react-access-boundary-v2

A simple component to check the user has permission to access wrapped UI components or not.

[![version][version-badge]][package]
[![MIT License][license-badge]][license]

## Quick Start

1. Installation: It should be installed on your react project `dependencies` by running either of the following:

```
yarn add react-access-boundary-v2
# or
npm i react-access-boundary-v2
```

2. Usage: First, you need to wrap the application or private layouts with `<AccessProvider>` then you are ready to use this `<AccessBoundary>`

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

Protect page

```jsx
const CustomerOrders = () => {
  return (
    <AccessBoundary to="ORDER_VIEW" isDefaultFallback>
      // Your Customer Order component
    </AccessBoundary>
  );
};

export default CustomerOrders;
```

Protect UI component

```jsx
<AccessBoundary to="ORDER_DELETE">
  <button class="ActionButton">Delete Order</button>
</AccessBoundary>
```

Conditional render with useContext

```jsx
const { isAllowedTo } = useAccessContext();

<button class="ActionButton">{isAllowedTo('ORDER_UPDATE') ? 'Update Order' : 'Preview Order'}</button>;
```

## Can I contribute?

Sure, open an issue, point out errors, and what not. Wanna fix something yourselves, you're welcome to open a PR and I appreciate it.

## Credit
This package is inspired from `react-access-boundary` [package](https://www.npmjs.com/package/react-access-boundary).

## License

[MIT][license]

[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[package]: https://www.npmjs.com/package/react-access-boundary-v2
[version-badge]: https://img.shields.io/npm/v/react-access-boundary-v2?style=flat-square
[license-badge]: https://img.shields.io/npm/l/react-access-boundary-v2?style=flat-square
[license]: https://github.com/swimshahriar/react-access-boundary-v2/blob/main/LICENSE
