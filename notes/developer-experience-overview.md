## How does routing work
- By default Next.js offers two directory options:

  1: The Page Directory - automatically creates routes within the `pages` folder.

  2: The App Router which organizes routes in the `app` folder.

I. Using the default Page Directory:

  - The folder containing the filename will map to route's url pathname .
  - Example: src > pages > login > index.js -> the content of index.js would appear at the /login route.
  - To route between pages, the Next.js `link` component can be used to pass in the corresponding url.

II. Using the App Router: (recommended)

  - The folder containing the filename will map to route's url pathname.
  - Example: app > login > page.tsx -> the content of page.tsx would appear at the /login route.
  - The Layout Component:
      - works with routing as it remains active when routes change. Its state is retained, allowing for reusable layouts.
      - Can receive `children`as a prop and wrap page files in the same directory with it.
      - Layouts can be nested to serve as modular components. 
      - Additionally, Layouts can be used with `i18nDictionary` components for internationalization.
  - Other useful component types:
      - Template Components: like layout but create a new instance on navigation, resetting state.
          - Can be useful when a state reset is helpful, ex. tracking page views.
      - Loading Component: shows on first load and during sibling navigation.
          - Can be made in any app folder directory.
      - Streaming Component: sends and displays data s it is received.
      - Error Component: displays when an error occurs.

Routing Documentation:
https://nextjs.org/docs/app/building-your-application/routing

---

## How is fetching performed?
There are 4 main ways to fetch data with Next.js:
 1: using `fetch`, on the server
 2: using third-party libraries, on the server
 3: using `Route Handler`, on the client
 4: using third-party libraries, on the client

I. Using  `fetch`, on the server:

  - Use `fetch` with `async`/`await` in Server COmponents, Route Handlers, and Server Actions:

Example
```
async function getData() {
  const res = await fetch('https://api.example.com/...')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
export default async function Page() {
  const data = await getData()
 
  return <main></main>
}
```

Data Fetching Documentation:
https://nextjs.org/docs/app/building-your-application/data-fetching

---

## How does form submission work?


## What if I want to delete an item?


## How do I validate a form?

```