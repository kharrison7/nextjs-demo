
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

**Note: the Next.Js tutorial recommends `pnpm`. The application can be setup an run using `npm` but the `node_modules`folder needs to be deleted when switching between package managers.

##  Updating to Node V18 (needs at least V18) and git init
https://nodejs.org/en/blog/announcements/v18-release-announce
https://www.geeksforgeeks.org/how-to-install-the-previous-version-of-node-js-and-npm/

```sh
pnpm install -g node@22.5.1
nvm use 22.5.1
git init
```

Pull the repository, cloning via ssh

Then in the `nextjs-dashboard` project run

```sh
pnpm i
```

```sh
pnpm dev
```

This starts your app in development mode, rebuilding assets on file changes.
Runs the application locally ->  http://localhost:3000


** for npm use:
```sh
npm install -g node@22.5.1
nvm use 22.5.1
git init
npm i
npm start
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
1) routing
2) form building
3) validation/typing
4) internationalization
5) ideally a better data grid
6) Testing Library


## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.
