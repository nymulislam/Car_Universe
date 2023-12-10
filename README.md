# CarUniverse Website

Welcome to CarUniverse, a website dedicated to showcasing products from renowned automotive brands. This MERN Stack application is designed to meet the specific requirements outlined for our company's upcoming website.

## Features and Functionality

### Home Page

- **Navbar:**
  - Website name with logo
  - Home
  - Add Product
  - My Cart
  - Login

- **Sections:**
  - Banner
  - At least 6 types of brand names (loaded from the database or using fake data)
  - Footer

- **Additional Sections:**
  - Two extra sections on the home page

### Add Product Page

- Form for users to add a product with the following fields:
  - Image
  - Name
  - Brand Name
  - Type (based on the selected category)
  - Price
  - Short description
  - Rating
  - Add button
- Private/protected route

### Brand Page

- Clicking on a brand redirects to a page with:
  - Slider with at least 3 advertisement images
  - At least 4 products displaying:
    - Image
    - Name
    - Brand Name
    - Type
    - Price
    - Rating
    - Details button
    - Update button
- Relevant message for brand types with no available products
- Private/protected route

### Product Detail Route

- Displays detailed information of the product
- Includes Add to Cart button
- Private/protected route, redirects to login if not logged in

### My Cart Page

- Displays all added products
- Allows users to delete products
- Private/protected route

### Update Product Page

- Form with fields for updating product information
- Private/protected route

### Authentication

- Email and password-based authentication
- Registration page with error messages for password requirements
- Login page with error messages for incorrect password and email
- Additional login options (e.g., Facebook, GitHub, Google)
- User name, profile picture, and logout button appear on the navbar after login
- Logout functionality

### Miscellaneous

- 404 Page (Not Found Page)
- Success message using toast/alert for adding products to the cart

## Live Demo

Explore the live demo of CarUniverse: [CarUniverse Live](https://car-universe.vercel.app/)

