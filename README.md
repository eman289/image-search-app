# Image Search App

This repository contains a web application that allows users to search for images using the Unsplash API. The app is built using HTML, CSS, and JavaScript, and it provides a user-friendly interface to search for and view images from the Unsplash database.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Configuration](#configuration)

## Introduction

The Image Search App utilizes the Unsplash API to provide users with a platform to search for images based on various keywords. The app dynamically fetches images from the API and displays them in a responsive grid layout. Users can click on individual images to view more details and visit the original image source on Unsplash.

## Usage

1. Enter keywords in the search bar and press Enter or click the "Search" button to retrieve relevant images.
2. Click on any image to see more details and open the original source on Unsplash.
3. Use the "Show more" button to load additional images if available.
4. Click on the predefined categories to quickly search for specific types of images.

## Configuration

The app uses the Unsplash API to fetch images. To configure the API access, obtain an API key from the [Unsplash Developer](https://unsplash.com/developers) portal and replace the `accessKey` variable in the `main.js` file with your API key:

```javascript
const accessKey = "YOUR_UNSPLASH_API_KEY";
```

---

Developed by [Eman Negm](https://github.com/eman289) - Feel free to connect!
