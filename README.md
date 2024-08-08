
## register-nextjs-demo
This is a demo repository for nextjs testing pertaining to 9703

JIRA: https://jrsnbbi.atlassian.net/browse/JRS-9703

---

##  Next.js Documentation
https://nextjs.org/docs
##  Next.js Building an Application:
https://nextjs.org/docs/app/building-your-application
##  Next.js Tutorial
https://nextjs.org/learn/dashboard-app/getting-started

---

## Development - pnpm (package manager) installation & documentation:
https://pnpm.io/

From your terminal:

```sh
npm install -g pnpm
```

**Note: the Next.Js tutorial recommends `pnpm` as it is faster than `npm` or `yarn`. The application can be setup an run using `npm` but the `node_modules`folder needs to be deleted when switching between package managers.

**`npm` alternative instructions can be found below:**

##  Updating to Node V18 (needs at least V18) and git init
https://nodejs.org/en/blog/announcements/v18-release-announce

https://www.geeksforgeeks.org/how-to-install-the-previous-version-of-node-js-and-npm/

```sh
pnpm install -g node@22.5.1
nvm use 22.5.1
git init
```

Clone the repository via ssh

Then in the `nextjs-dashboard` project run

```sh
pnpm i
```

```sh
pnpm dev
```

This starts your app in development mode, rebuilding assets on file changes.
Runs the application locally ->  http://localhost:3000


**Alternatively, for `npm` use:**
```sh
npm install -g node@22.5.1
nvm use 22.5.1
git init
npm i
npm run start
```

**Be sure to use React v18.3.1

**Swapping from `pnpm` to `npm`:
```sh
rm -rf node_modules
npm install
```

---

## Adding Packages:

```sh
pnpm add react-hook-form
```

or

```sh
npm install react-hook-form 
```

---

This starts your app in development mode, rebuilding assets on file changes.

## Deployment
https://nextjs.org/docs/app/building-your-application/deploying

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm run start
```

![Alt text](/images/JRS-9703.gif?raw=true "Demo Gif")

Now you'll need to pick a host to deploy it to.

A Next.js app can be deployed to any hosting provider that supports Node.js

**Note: Next.js is made by Vercel: https://vercel.com/frameworks/nextjs

---

##  Relevant Links:
NextJS:
 - https://nextjs.org/learn/dashboard-app/getting-started
 - https://nextjs.org/learn-pages-router/basics/create-nextjs-app/setup
 - https://github.com/vercel/next-learn/tree/main/dashboard/starter-example
 - https://www.freecodecamp.org/news/build-a-full-stack-application-with-nextjs/
 - https://www.educative.io/blog/nextjs-tutorial-examples#example

Bulletproof React:
 - https://github.com/alan2207/bulletproof-react

Whiteboarding:
 - https://whiteboard.office.com/me/whiteboards/p/c3BvOmh0dHBzOi8vbmF0aW9uYWxib2FyZC1teS5zaGFyZXBvaW50LmNvbS9wZXJzb25hbC9zbW9zaGVyX25hdGlvbmFsYm9hcmRfb3Jn/b!oq_H_2b8S06s_EyeYg8XD48sQpq70SFGlzFhx8BVB72u3v7itFonS5ctQhpGTxoh/012NJGKRE7CALJAD2FXFG2WUBGZNZDTOIP?sharingv2=true&fromShare=true&at=9&fromShare=true

---

# Project Objective:
1) Generate Documentation/Notes
2) Generate a Demo Application

# Core Needs (Stretch Goals):
1) routing - in demo & notes
2) form building - in demo & notes
3) validation/typing - in demo & notes
4) internationalization - mentioned in the notes
5) ideally a better data grid - n/a
6) testing library - mentioned in the notes


## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.
