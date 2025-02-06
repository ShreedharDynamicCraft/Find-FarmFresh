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

| Action |  Route  | Method |
|:-----|:--------:|------:|
| User login for farmers and Consumers   | `/api/v1/auth/login` | **POST** |
| Checks if email is already registered    |  `/api/v1/auth/userExists/email/:email`  |   **GET** |
| Checks if name is already registered   | `/api/v1/auth/userExists/:name` |    **GET** |
| Register Farmer   | `/api/v1/auth/register/farmer` |    **POST** |
| Register Consumer   | `/api/v1/auth/register/consumer` |    **POST** |
| Gets User Profile Information if token is present   | `/api/v1/auth` |    **GET** |


### 2. Farmer Routes

| Action |  Route  | Method |
|:-----|:--------:|------:|
| Gets products of Farmer   | `/api/v1/farmers/:farmerID/products` | **GET** |
| Add comment to Farmer    |  `/api/v1/farmers/:farmerID/comments`  |   **PATCH** |
| Get Farmer profile information   | `/api/v1/farmers/:farmerID` |    **GET** |
| Update Farmer   | `/api/v1/farmers/` |    **PATCH** |


### 3. Consumer Routes

| Action |  Route  | Method |
|:-----|:--------:|------:|
| Gets products in shopping cart of Consumer   | `/api/v1/consumers/shoppingCart` | **GET** |
| Adds farmer to following list of Consumer    |  `/api/v1/consumers/followFarmer`  |   **PATCH** |
| Removes farmer from following list of Consumer   | `/api/v1/consumers/unFollowFarmer` |    **PATCH** |
| Get Consumer profile Information   | `/api/v1/consumers/:consumerID` |    **GET** |
| Update Consumer   | `/api/v1/consumers` |    **PATCH** |


### 4. Product Routes

| Action |  Route  | Method |
|:-----|:--------:|------:|
| Get All Products   | `/api/v1/products/` | **GET** |
| Add Product   | `/api/v1/products/` | **POST** |
| Get Top Rated Products    |  `/api/v1/products/topRatedProducts`  |   **GET** |
| Get Discounted Products    |  `/api/v1/products/discountedProducts`  |   **GET** |
| Get Recently added products of Farmer   | `/api/v1/products/lastThirtyDayProducts/:farmerID` |    **GET** |
| Get Product Detail   | `/api/v1/products/:productID` |    **GET** |
| Delete Product   | `/api/v1/products/:productID` |    **DELETE** |
| Update Product   | `/api/v1/products/:productID` |    **PATCH** |
| Get Products of Category   | `/api/v1/products/category/:parentCategory` |    **GET** |
| Get Product Detail for Order   | `/api/v1/products/orderDetail/:productID` |    **GET** |


### 5. Order Routes

| Action |  Route  | Method |
|:-----|:--------:|------:|
| Get Orders of User   | `/api/v1/orders/` | **GET** |
| Add Order   | `/api/v1/orders/` | **POST** |
| Get Orders that need Review    |  `/api/v1/orders/reviewOrders`  |   **GET** |
| Get Earning stats of Farmer For Graph    |  `/api/v1/orders/getEarningsForLast30Days`  |   **GET** |
| Update Order   | `/api/v1/orders/:orderID` |    **PATCH** |
| Delete Order   | `/api/v1/orders/:orderID` |    **DELETE** |


### 6. Comment Routes

| Action |  Route  | Method |
|:-----|:--------:|------:|
| Get Number of Comments for Farmer   | `/api/v1/comments/farmer/:farmerID/count` | **GET** |
| Get Comments of Farmer   | `/api/v1/comments//farmer/:farmerID` | **GET** |
| Get Number of Comments for Product   | `/api/v1/comments/product/:productID/count` | **GET** |
| Get Comments of Product   | `/api/v1/comments/product/:productID` | **GET** |

<p align="right"><a href="#readme-top">back to top</a></p>
