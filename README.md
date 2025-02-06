&nbsp;

<p display="flex" align="center" justify="center">
    <img src="https://github.com/Ktn-mariam/FarmFresh-Finder/assets/113761859/148e7c5a-ad43-480c-bb06-725f77eae9df" alt="farmfresh-logo" />
    <h3 align="center">Find Farm Fresh</h3>
</p>
<p align="center">
    <em>Connecting consumers with local farmers for a direct and fresh produce experience</em> 🧑‍🌾
    <br/>
    <a href="">View Demo</a>
    ·
    <a href="https://github.com/Ktn-mariam/FarmFresh-Finder/issues">Report Bug</a>
    ·
    <a href="https://github.com/Ktn-mariam/FarmFresh-Finder/issues">Request Feature</a>
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

&nbsp;

<h2>About the Project:</h2>

<!-- <div align="center">
       <img src="https://github.com/Ktn-mariam/FarmFresh-Finder/assets/113761859/7c2ff919-aeae-421d-b300-0f32aa1de144" alt="image1" width="75%"/>
</div> -->

FarmFresh Finder is a platform designed to seamlessly connect farmers with consumers, fostering a direct and transparent exchange of fresh, locally sourced produce. Our application empowers farmers by providing a digital space to showcase their yields while offering consumers a convenient way to discover and purchase high-quality, sustainably grown products.

<!-- <h3 align="center" >!! Note: This is a Demo Project !!</h3> -->
<p>This project is for demonstration purposes only. The data displayed or curated is for illustrative purposes only and does not represent real-world information.</p>

<!-- <h3 align="center">Consumer's Profile</h3> -->
<div display="flex" align="center">
       <img src="https://github.com/user-attachments/assets/48ec8886-4a44-47cc-916c-ff35af453c82" alt="image1" width="49%"/>
       <img src="https://github.com/user-attachments/assets/ca45ba1b-c05b-4886-8456-144e740b3fe6" alt="image1" width="49%"/>
</div>

<!-- <div align="center">
</div> -->

<!-- <h3 align="center">Products displayed under categories</h3> -->
<div display="flex" align="center">
       <img src="https://github.com/user-attachments/assets/b53ab44b-35de-4df1-b012-9dc2a55d0d4c" alt="image1" width="49%"/>
       <img src="https://github.com/user-attachments/assets/ea6b53d8-d8f0-4fc3-8a81-76b193e717e3" alt="image1" width="49%"/>
</div>

<!-- <h3 align="center">Product Detail Page</h3>
<div align="center">
</div> -->

<!-- <h3 align="center">Shopping Cart Page</h3> -->
<div display="flex" align="center">
    <img src="https://github.com/user-attachments/assets/0f109b2f-8fc9-4922-aae4-724240f2da00" alt="image1" width="49%"/>
    <img src="https://github.com/user-attachments/assets/e94bd2aa-55fa-4c2b-af1b-8213653eafa1" alt="image1" width="49%"/>
</div>

<!-- <h3 align="center">Farmer's Profile</h3> -->
<div display="flex" align="center">
    <img src="https://github.com/user-attachments/assets/a899482c-55e0-44e4-9394-047cd530ec99" alt="image1" width="49%"/>
    <img src="https://github.com/user-attachments/assets/6fb27a5e-48ec-494f-bbf4-79bf6277abc1" alt="image2" width="49%"/>
    <!-- <img src="https://github.com/user-attachments/assets/d121772c-fec4-455f-bd03-2b12c7a37781" alt="image2" width="49%"/>
    <img src="https://github.com/user-attachments/assets/ae633af6-08a5-4635-a9b5-20bd68053474" alt="image2" width="49%"/> -->
</div>
<!-- 
<h3 align="center">Order's Page</h3>
<div align="center">
</div> -->

<!-- <h3 align="center">Sign Up</h3> -->
<!-- <div display="flex" align="center">
       <img src="https://github.com/Ktn-mariam/FarmFresh-Finder/assets/113761859/6e3359da-2dcb-49b2-94fb-fcfbfb2f7b43" alt="image1" width="49%"/>
       <img src="https://github.com/Ktn-mariam/FarmFresh-Finder/assets/113761859/e3255f6f-fd4f-4f9c-a8ce-261537175a15" alt="image1" width="49%"/>
</div> -->

<!-- <div align="center">
</div> -->

<!-- <h3 align="center">Log In</h3> -->
<!-- <div align="center">
    <img src="https://github.com/user-attachments/assets/1837b757-7666-43dd-bc34-c8f3f977796d" alt="image1" width="70%"/>
</div> -->


### As a consumer, you can:

- Discover fresh farm produce with doorstep delivery.
- Connect with local farmers, explore profiles, and access contact information.
- Leave and read reviews for transparent, trustworthy relationships.
- Join for free, enjoying an open marketplace for farmers and consumers.

### As a farmer, you can:

- Expand your market, and sell directly to consumers beyond local markets.
- Tailor product offerings, pricing, and promotions for market demands and consumer preferences.
- Collect valuable consumer feedback for continuous improvement in product quality and farming practices.
- Utilize a 30-day sales graph to track daily sales, gaining valuable insights.
- Showcase products online for visibility, even without delivery services.

<p align="right"><a href="#readme-top">back to top</a></p>

## API Routes

### 1. Authentication Routes

| Action |  Route  | Method | Auth Required | Role Authorization
|:--------:|:--------:|:--------:|:--------:|:--------:|
| User login for farmers and Consumers   | `/auth/login` | **POST** | **NO** | - |
| Checks if email is already registered    |  `/auth/userExists/email/:email`  |   **GET** | **NO** | - |
| Checks if name is already registered   | `/auth/userExists/name/:name` |    **GET** | **NO** | - |
| Register Farmer   | `/auth/register/farmer` |    **POST** | **NO** | - |
| Register Consumer   | `/auth/register/consumer` |    **POST** | **NO** | - |
| Gets User Profile Information if token is present   | `/auth` |    **GET** | **YES** | - |


### 2. Farmer Routes

| Action |  Route  | Method |
|:-----|:--------:|------:|
| Gets products of Farmer   | `/farmers/:farmerID/products` | **GET** |
| Add comment to Farmer    |  `/farmers/:farmerID/comments`  |   **PATCH** |
| Get Farmer profile information   | `/farmers/:farmerID` |    **GET** |
| Update Farmer   | `/farmers/` |    **PATCH** |


### 3. Consumer Routes

| Action |  Route  | Method |
|:-----|:--------:|------:|
| Gets products in shopping cart of Consumer   | `/consumers/shoppingCart` | **GET** |
| Adds farmer to following list of Consumer    |  `/consumers/followFarmer`  |   **PATCH** |
| Removes farmer from following list of Consumer   | `/consumers/unFollowFarmer` |    **PATCH** |
| Get Consumer profile Information   | `/consumers/:consumerID` |    **GET** |
| Update Consumer   | `/consumers` |    **PATCH** |


### 4. Product Routes

| Action |  Route  | Method |
|:-----|:--------:|------:|
| Get All Products   | `/products/` | **GET** |
| Add Product   | `/products/` | **POST** |
| Get Top Rated Products    |  `/products/topRatedProducts`  |   **GET** |
| Get Discounted Products    |  `/products/discountedProducts`  |   **GET** |
| Get Recently added products of Farmer   | `/products/lastThirtyDayProducts/:farmerID` |    **GET** |
| Get Product Detail   | `/products/:productID` |    **GET** |
| Delete Product   | `/products/:productID` |    **DELETE** |
| Update Product   | `/products/:productID` |    **PATCH** |
| Get Products of Category   | `/products/category/:parentCategory` |    **GET** |
| Get Product Detail for Order   | `/products/orderDetail/:productID` |    **GET** |


### 5. Order Routes

| Action |  Route  | Method |
|:-----|:--------:|------:|
| Get Orders of User   | `/orders/` | **GET** |
| Add Order   | `/orders/` | **POST** |
| Get Orders that need Review    |  `/orders/reviewOrders`  |   **GET** |
| Get Earning stats of Farmer For Graph    |  `/orders/getEarningsForLast30Days`  |   **GET** |
| Update Order   | `/orders/:orderID` |    **PATCH** |
| Delete Order   | `/orders/:orderID` |    **DELETE** |


### 6. Comment Routes

| Action |  Route  | Method |
|:-----|:--------:|------:|
| Get Number of Comments for Farmer   | `/comments/farmer/:farmerID/count` | **GET** |
| Get Comments of Farmer   | `/comments//farmer/:farmerID` | **GET** |
| Get Number of Comments for Product   | `/comments/product/:productID/count` | **GET** |
| Get Comments of Product   | `/comments/product/:productID` | **GET** |

<p align="right"><a href="#readme-top">back to top</a></p>
