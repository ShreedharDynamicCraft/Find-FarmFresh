<p align="center">⭐ Give this repo a star if you liked it!</p>
&nbsp;

<p display="flex" align="center" justify="center">
    <img src="https://github.com/Ktn-mariam/FarmFresh-Finder/assets/113761859/148e7c5a-ad43-480c-bb06-725f77eae9df" alt="farmfresh-logo" />
    <h3 align="center">Find Farm Fresh</h3>
    <div display="flex" align="center">
      <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="farmfresh-logo" />
      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="farmfresh-logo" />
      <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="farmfresh-logo" />
      <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" alt="farmfresh-logo" />
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="farmfresh-logo" />
      <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="farmfresh-logo" />
      <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="farmfresh-logo" />
      <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="farmfresh-logo" />
      <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=Cloudinary&logoColor=white" alt="farmfresh-logo" />
      <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="farmfresh-logo" />
    </div>
</p>
<p align="center">
    <em>Connecting consumers with local farmers for a direct and fresh produce experience</em> 🧑‍🌾
    <br/>
    <a href="">View Demo</a>
    ·
    <a href="https://github.com/Ktn-mariam/Find-FarmFresh/issues/new?template=Blank+issue">Report Bug</a>
    ·
    <a href="https://github.com/Ktn-mariam/Find-FarmFresh/issues/new?template=Blank+issue">Request Feature</a>
    <br/>
</p>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## 🧐 Description

FarmFresh Finder is a platform designed to seamlessly connect farmers with consumers, fostering a direct and transparent exchange of fresh, locally sourced produce. Our application empowers farmers by providing a digital space to showcase their yields while offering consumers a convenient way to discover and purchase high-quality, sustainably grown products.

<div display="flex" align="center">
       <img src="https://github.com/user-attachments/assets/48ec8886-4a44-47cc-916c-ff35af453c82" alt="image1" width="49%"/>
       <img src="https://github.com/user-attachments/assets/ca45ba1b-c05b-4886-8456-144e740b3fe6" alt="image1" width="49%"/>
</div>

<div display="flex" align="center">
       <img src="https://github.com/user-attachments/assets/b53ab44b-35de-4df1-b012-9dc2a55d0d4c" alt="image1" width="49%"/>
       <img src="https://github.com/user-attachments/assets/ea6b53d8-d8f0-4fc3-8a81-76b193e717e3" alt="image1" width="49%"/>
</div>

<div display="flex" align="center">
    <img src="https://github.com/user-attachments/assets/0f109b2f-8fc9-4922-aae4-724240f2da00" alt="image1" width="49%"/>
    <img src="https://github.com/user-attachments/assets/e94bd2aa-55fa-4c2b-af1b-8213653eafa1" alt="image1" width="49%"/>
</div>

<div display="flex" align="center">
    <img src="https://github.com/user-attachments/assets/a899482c-55e0-44e4-9394-047cd530ec99" alt="image1" width="49%"/>
    <img src="https://github.com/user-attachments/assets/6fb27a5e-48ec-494f-bbf4-79bf6277abc1" alt="image2" width="49%"/>
</div>
<div display="flex" align="center">
    <img src="https://github.com/user-attachments/assets/bb1fa6bd-d282-47b3-810b-7b29ee45ff5c" alt="image1" width="49%"/>
    <img src="https://github.com/user-attachments/assets/e1edfe60-4916-4a57-b1ed-b31a4659c385" alt="image2" width="49%"/>
</div>

<p align="center">
<em>This project is for demonstration purposes only. The data displayed or curated is for illustrative purposes only and does not represent real-world information.</em>
</p>

<p align="right"><a href="#top">back to top</a></p>

## 🖥️ Prerequisites
The v22.12.0 version of Node is required for the installation and building of this application.

## ⚙️ Installation
1. Clone this repository by running the following command in your terminal:
```
git clone https://github.com/Ktn-mariam/Find-FarmFresh.git
cd Find-FarmFresh
```
2. Run the following command in the frontend side to install the dependencies:
```
cd client
npm install
```
3. Run the following command in the server side to install the dependencies:
```
cd server
npm install
```
<p align="right"><a href="#top">back to top</a></p>

## 📚 Envirnoment variables
This project is connected to a mongodb database and cloudinary for storing images. Create a .env file in the server side of the application with the following required variables:
```
MONGO_URI=
JWT_SECRET=
JWT_LIFETIME=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_URL=
```

<p align="right"><a href="#top">back to top</a></p>

## ▶️ Run the project

1. To run the React frontend:
```
cd client
npm start
```
2. To run the NodeJS backend:
```
cd server
npm start
```

<p align="right"><a href="#top">back to top</a></p>

## 💡 Features

### As a consumer, you can:

- <ins>Register</ins>: Create an account and buy products from local farmers
- <ins>Update Profile</ins>: Update contact information as per needs.
- <ins>Search products</ins>: Discover products based on categories, filter them based on ratings and sort them as per preferences.
- <ins>View Farmer Profiles</ins>: View farmer information and ratings, and access contact information.
- <ins>Persistent Shopping Cart</ins>: Add products to the shopping cart and access them anytime, as they are also saved in the database.
- <ins>Track orders</ins>: View all your orders, their delivery and payment statuses, and cancel them as well.
- <ins>Add comments</ins>: Leave and read reviews of products and farmers for transparent, trustworthy relationships.
- <ins>Follow Farmers</ins>: View recently added products of farmers you follow in your main store page.
- <ins>Top rated products</ins>: View top rated products in your main store page.
- <ins>View discounts</ins>: Take advantage of time limited discounts on products in your main store page.

### As a farmer, you can:

- <ins>Register</ins>: Create an account and sell directly to consumers beyond local markets.
- <ins>Update Profile</ins>: Update profile information as per needs.
- <ins>Add and update Products</ins>: Add and update products, add or remove promotional discounts, and change visibility.
- <ins>View comments</ins>: View consumer ratings and comments on your products and on your services for continuous improvement.
- <ins>30 Day Sales Graph</ins>: Utilize a 30-day sales graph to track daily sales, gaining valuable insights.
- <ins>Track orders</ins>: Track all your orders, update delivery and payment statuses, and delete them as well.
- <ins>Showcase products</ins>: Showcase products online for visibility, even without delivery services.
- <ins>View products of other farmers</ins>: View pricing of products of other farmers to maintain competitive.

<p align="right"><a href="#top">back to top</a></p>

## 🛠️ Schema Design

![Blank diagram (3)](https://github.com/user-attachments/assets/491524c4-c373-496a-b676-62ae829800ee)

<p align="right"><a href="#top">back to top</a></p>

## 🚧 API Documentation

### 1. 🛡️ Authentication Routes

| Action                                            |                 Route                 |   Method |
| :------------------------------------------------ | :-----------------------------------: | -------: |
| User login for farmers and Consumers              |          `api/v1/auth/login`          | **POST** |
| Checks if email is already registered             | `api/v1/auth/userExists/email/:email` |  **GET** |
| Checks if name is already registered              |  `api/v1/auth/userExists/name/:name`  |  **GET** |
| Register Farmer                                   |     `api/v1/auth/register/farmer`     | **POST** |
| Register Consumer                                 |    `api/v1/auth/register/consumer`    | **POST** |
| Gets User Profile Information if token is present |             `api/v1/auth`             |  **GET** |

### 2. 🧑‍🌾 Farmer Routes

| Action                         |                Route                |    Method |
| :----------------------------- | :---------------------------------: | --------: |
| Gets products of Farmer        | `api/v1/farmers/:farmerID/products` |   **GET** |
| Add comment to Farmer          | `api/v1/farmers/:farmerID/comments` | **PATCH** |
| Get Farmer profile information |     `api/v1/farmers/:farmerID`      |   **GET** |
| Update Farmer                  |          `api/v1/farmers/`          | **PATCH** |

### 3. 👨 Consumer Routes

| Action                                         |               Route               |    Method |
| :--------------------------------------------- | :-------------------------------: | --------: |
| Gets products in shopping cart of Consumer     |  `api/v1/consumers/shoppingCart`  |   **GET** |
| Adds farmer to following list of Consumer      |  `api/v1/consumers/followFarmer`  | **PATCH** |
| Removes farmer from following list of Consumer | `api/v1/consumers/unFollowFarmer` | **PATCH** |
| Get Consumer profile Information               |  `api/v1/consumers/:consumerID`   |   **GET** |
| Update Consumer                                |        `api/v1/consumers`         | **PATCH** |

### 4. 🌾 Product Routes

| Action                                |                       Route                       |     Method |
| :------------------------------------ | :-----------------------------------------------: | ---------: |
| Get All Products                      |                `api/v1/products/`                 |    **GET** |
| Add Product                           |                `api/v1/products/`                 |   **POST** |
| Get Top Rated Products                |        `api/v1/products/topRatedProducts`         |    **GET** |
| Get Discounted Products               |       `api/v1/products/discountedProducts`        |    **GET** |
| Get Recently added products of Farmer | `api/v1/products/lastThirtyDayProducts/:farmerID` |    **GET** |
| Get Product Detail                    |           `api/v1/products/:productID`            |    **GET** |
| Delete Product                        |           `api/v1/products/:productID`            | **DELETE** |
| Update Product                        |           `api/v1/products/:productID`            |  **PATCH** |
| Get Products of Category              |    `api/v1/products/category/:parentCategory`     |    **GET** |
| Get Product Detail for Order          |     `api/v1/products/orderDetail/:productID`      |    **GET** |

### 5. 🚚 Order Routes

| Action                                |                  Route                   |     Method |
| :------------------------------------ | :--------------------------------------: | ---------: |
| Get Orders of User                    |             `api/v1/orders/`             |    **GET** |
| Add Order                             |             `api/v1/orders/`             |   **POST** |
| Get Orders that need Review           |       `api/v1/orders/reviewOrders`       |    **GET** |
| Get Earning stats of Farmer For Graph | `api/v1/orders/getEarningsForLast30Days` |    **GET** |
| Update Order                          |         `api/v1/orders/:orderID`         |  **PATCH** |
| Delete Order                          |         `api/v1/orders/:orderID`         | **DELETE** |

### 6. 💬 Comment Routes

| Action                             |                   Route                    |  Method |
| :--------------------------------- | :----------------------------------------: | ------: |
| Get Number of Comments for Farmer  |  `api/v1/comments/farmer/:farmerID/count`  | **GET** |
| Get Comments of Farmer             |    `api/v1/comments//farmer/:farmerID`     | **GET** |
| Get Number of Comments for Product | `api/v1/comments/product/:productID/count` | **GET** |
| Get Comments of Product            |    `api/v1/comments/product/:productID`    | **GET** |

<p align="right"><a href="#top">back to top</a></p>

## 🔗 Deployment

This application was deployed on Vercel. Make sure you enter the Environment Variables before deploying it. You also need to add vercel.json file with the following content:
```
{ "version": 2, "rewrites": [{ "source": "/(.*)", "destination": "/api" }] }
```

You also need to make sure the main file is named `index.ts` and is in the /api folder.

<p align="right"><a href="#top">back to top</a></p>
