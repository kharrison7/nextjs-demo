## How does routing work
- By default Next.js offers two directory options:

  1: The Page Directory - automatically creates routes within the `pages` folder.

  2: The App Router which organizes routes in the `app` folder.

I. Using the default Page Directory:

  - The folder containing the filename will map to route's url pathname .
  - Example: src > pages > login > index.js -> the content of index.js would appear at the /login route.
  - To route between pages, the Next.js `link` component can be used to pass in the corresponding url.
  - For dynamic routing, the `useRouter` can be employed witheither [id] or [slug].

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
- Next.js uses API routes to handle submission. The gneral recommendation is to use Server Actions to handle form submissions and data mutations.
- Server Actions can be used to define asynchronous server functions that can be called directly from your components, without needing to manually create an API Route.

Example
```
"use server";

type FormState = {
  message: string;
}

export async function onFormPostAction(prevState: FormState, data: FormData) {
   // Process the data
   return {
      message: "Form data processed";
   }
}
```

Data Form & Submission Documentation:
https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations
https://www.pronextjs.dev/form-actions-with-the-useformstate-hook


---

## How do I validate a form?

 - The Next.js docs recommend using HTML validation like required and type="email" for basic client-side form validation.

- For more advanced server-side validation, you can use a schema validation library like zod
to validate the form fields before mutating the data.

Example
```
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
 
const schema = z.object({
  // ...
})
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const parsed = schema.parse(req.body)
  // ...
}
```

Form Validation Documentation:
https://nextjs.org/docs/pages/building-your-application/data-fetching/forms-and-mutations

zod:
https://zod.dev/

---

## What if I want to delete an item?

- Deleting a value via an API request can be accomplished using fetch:

Example
```
const deleteComment =async (commentId) => {
  const response = await fetch(`/api/comments/${commentId}, {
    method: 'DELETE',
  });
  const data await = response.json();
  return data;
}
```

Delete API Tutorial:
https://www.youtube.com/watch?v=je8jPi8KOY4

https://www.youtube.com/watch?v=A_tx4cZP1bE

---

Alternatively, for deletion methods:
- Create a file as this will act as our route.
- Export an action method within our newly created file. The method will house the deletion functionality. This method may be imported for reusability.
- Within our original contact component we will create a new form and button to direct us to the delete method. The action will allow us to specify the file to look for.

Example
```

// components > DeleteForm.jsx
import { deleteTask } from "@utils/actions";

const DeleteForm = ({ id }) => {
  return(
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id}>
      <button className+"btn">Delete</button>
    </form>
  );
};

export default DeleteForm;

// utils > actions.tsx
export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: { id },
  });

  revalidatePath("/todo-list");
}

```

Delete Task Tutorial:
https://www.youtube.com/watch?v=S9rL4_UDLFQ


```