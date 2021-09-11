# DreamBoard
Plan your next perfect room by selecting any color palette of your choice. This website will then scout the ideal furniture choices for your dream room along with the perfect side pieces to go along!

# MVP
  - 1. Return furniture suggestions to a user based on a given color palette.
  - 2. Upload images of your own furniture to get a matching color palette back.
  - 3. Create a "saved" section to save multiple ideas of a room with its corresponding pieces of furniture, similar to Instagram “collections”

# Stretch Goals
  - 1. Provide a suggested/trending color palette generator for users.
  - 2. Give furniture suggestions based on past searches/viewed items.
  - 3. Create public "rooms" to get other opinions on your furniture combinations!

# Tech Stack
  - Front-end: 
    - Vue.js + Bootstrap/Tailwind
  - Back-end: 
    -  Node.js
    -  Mongoose (package to create API's & Schema's for MongoDB databases)
  - API’s
    - Imagga Color Extractor + documentation (You can insert an image endpoint to this API and it returns a palette of colors to use)
      - https://docs.imagga.com/#introduction
      - https://docs.imagga.com/?node#colors 
  - Google Cloud Vision API for furniture images + pricing
     - https://cloud.google.com/vision/product-search/docs/searching
     - Narrow the search results to only return furniture products
     - You can add filters to only return products of a specific color.
   - Database storage
    - MongoDB
      - Use this for database. Easy to store in NoSQL because there’s no structure and Express/Mongoose are Node.js friendly. 

# Software to Install
 

# Tutorials
