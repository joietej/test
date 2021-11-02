# Getting Started with File Explorer Test solution

## Requirements
- [Design](https://www.figma.com/proto/4v2vqqsnubWyedOb0bZuVU/File-Selector-case?node-id=1%3A1944&viewport=1477%2C398%2C1.2320507764816284&scaling=min-zoom&page-id=0%3A1)
- [Use case](https://reoso.notion.site/File-Selector-case-7fb10e9fa9f242e9b30228dcaca7eb87)

## CI / CD
- [Project Vercel](https://vercel.com/new/import?s=https%3A%2F%2Fgithub.com%2Fjoietej%2Ftest) 
- [Portal](https://test-sooty-phi-25.vercel.app/)
## Bootstrap
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Assumptions & Comments
- Sample Data
  - MimeType and file extension mismatched hence using file extension to determine file type.
  - Image urls are not accusable hence using file icons instated of image.
- UI / UX
  - Fonts & Colors are not 100% matched with given design.
  - Used overlay to create model dialog.
  - By default dialog is centered on screen.
  - Clicking outside the dialog closes the dialog.
## Libraries

This project uses libraries which are available for Vue and React for seamless transition.
- [Headeless UI](https://headlessui.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Testing Library](https://testing-library.com)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
