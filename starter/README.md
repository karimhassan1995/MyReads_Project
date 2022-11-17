# MyReads Project

by: Karim Hassan Elmorsy - karimelmorsy95@gmail.com

It is a BookStore web app created by the `REACT` framework that lets you save and know how many books you read, want to read, and search for new books.

The books data is fetched from the following API: `https://reactnd-books-api.udacity.com`.

#### To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

 #### Enviroment:
- npm version: 8.15.0
- node version: v16.17.1
 #### To get started developing right away:

- "@testing-library/jest-dom": "^5.11.4",
- "@testing-library/react": "^11.1.0",
- "@testing-library/user-event": "^12.1.10",
- "prop-types": "^15.8.1",
- "react": "^17.0.2",
- "react-dom": "^17.0.2",
- "react-router-dom": "^6.4.3",
- "react-scripts": "4.0.3",
- "web-vitals": "^1.0.1"
      

#### Project structure

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of the app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── Home.js # Displaying different shelves.
    ├── Shelf.js # Used storing and displaying books.
    ├── Book.js # Used for displaying the title , author and images of the books.
    ├── Search.js # Used for searching the API data to find and add new books to the shelves.
    ├── NotFound.js # Used for handeling the random url searching.
    ├── BookDetails.js # Used for dsiplaying the information of chosen book.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.SVG
    │   ├── arrow-back.SVG
    │   └── arrow-drop-down.SVG
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

#### Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) represent an API client that contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently on the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms. That list of terms is the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) by a Udacity starter template. You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

- Clone
- Creat a branch
- Push changes
- Open a pull request
