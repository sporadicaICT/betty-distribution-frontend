"# betty-distriution-frontend" 

## This is the repo for the Betty Distribution Frontend
This React app is using Typescript to prevent errors during build time. It's basically just JavaScript with
extra features, so you can ignore all the crazy stuff.

## Folder Structure
The folder structure is as follows.
/components - This will contain the reusable components that the app needs e.g the Navbar
/contexts - This will contain all the contexts/global state that our app will need, don't worry I'll handle this
/types - This contains the custom types that we will need, it'll basically help to know what you're expecting from the backend, plus it gives auto-complete...
/pages - This will contain the different pages of the app, will have a similar structire to the /components folder

As at the time of writing this, I have not created the /pages folder, will do that later

## Todos for Now
These are the things we need to do first of all.
1. Create all the components we need
2. Initialize Firebase
3. Create a loading screen
4. Create an admin page where we can add products to the database

## Running the Project
To serve this project loacally run `npm run dev` not `npm start`, because this React app was created with Vite, I heard
it performs better than create-react-app.

To build the project before deploying run `npm run build` as always.

If you have any questions, you know what to do. Good luck boys!

And let out commit messages make sense abeg😐 (Read the article Stephen sent)

