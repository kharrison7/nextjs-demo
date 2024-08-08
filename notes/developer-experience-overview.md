## How does routing work
- By default Next.js offers two directory opttions
- 1: The Page Directory - automatically creates routes within the `pages` folder
- 2: The App Router which organizes routes in the `app` folder

- Using the default Page Directory:
    - The folder containing the filename will map to route's url pathname 
    - Example: src > pages > login > index.js -> the content of index.js would appear at the /login route.
    - To route between pages, the Next.js `link` component can be used to pass in the corresponding url.

- Using the App Router: (recommended)
    - The folder containing the filename will map to route's url pathname 
    - Example: app > login > page.tsx -> the content of page.tsx would appear at the /login route.

    ![alt text](image.png)

    - The Layout Component:
        - works with routing as it remains active when routes change. Its state is retained, allowing for reusable layouts.
        - Can recieve `children`as a prop and wrap page files in the same directory with it.
        - Layouts can be nested to serve as modular components
    - Other useful component types:
        - Template Components: like layout but create a new instance on navigation, resetting state.
            - Can be useful when a state reset is helpful, ex. tracking page views
        - Loading Component: shows on first load and during sibling navigation.
            - Can be made in any app folder directory.
        - Streaming Component: sends and displays data s it is received.
        - Error Component: displays when an error occurs.







