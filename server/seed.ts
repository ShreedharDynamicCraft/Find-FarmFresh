import mongoose from "mongoose";
const Comment = require("./models/comment");
const Consumer = require("./models/consumer");
const Farmer = require("./models/farmer");
const Order = require("./models/order");
const Product = require("./models/product");


// MongoDB Connection
const MONGO_URI = "mongodb+srv://anandshri:abcd1234@cluster0.srwl3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// **Farmer Data**
const farmers = [
  {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@example.com",
    password: "hashed_password_here",
    description: "Third-generation farmer specializing in organic rice and wheat farming in the fertile plains of Punjab.",
    mobileNo: "+91 9876543210",
    location: "Amritsar, Punjab",
    locationCoordinates: { latitude: 31.6340, longitude: 74.8723 },
    farmerRating: { rating: 4.7, count: 24 },
    comments: [],
  },
  {
    name: "Sunita Patel",
    email: "sunita.patel@example.com",
    password: "hashed_password_here",
    description: "Organic vegetable farmer with 15 years of experience growing seasonal produce in Gujarat.",
    mobileNo: "+91 8765432109",
    location: "Ahmedabad, Gujarat",
    locationCoordinates: { latitude: 23.0225, longitude: 72.5714 },
    farmerRating: { rating: 4.9, count: 36 },
    comments: [],
  },
  {
    name: "Ramesh Yadav",
    email: "ramesh.yadav@example.com",
    password: "hashed_password_here",
    description: "Experienced dairy farmer managing a sustainable milk production unit in Uttar Pradesh.",
    mobileNo: "+91 9988776655",
    location: "Lucknow, Uttar Pradesh",
    locationCoordinates: { latitude: 26.8467, longitude: 80.9462 },
    farmerRating: { rating: 4.5, count: 18 },
    comments: [],
  },
];

// **Consumer Data**
const consumers = [
  {
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    password: "hashed_password_here",
    mobileNo: "+91 9988776655",
    location: "Delhi, Delhi",
    locationCoordinates: { latitude: 28.7041, longitude: 77.1025 },
    following: [],
    cart: {},
  },
  {
    name: "Priya Patel",
    email: "priya.patel@example.com",
    password: "hashed_password_here",
    mobileNo: "+91 9988776654",
    location: "Mumbai, Maharashtra",
    locationCoordinates: { latitude: 19.0760, longitude: 72.8777 },
    following: [],
    cart: {},
  },
];

// **Product Data**
const products = [
  {
    images: ["https://res.cloudinary.com/youraccount/image/upload/v1646579632/basmati_rice.jpg"],
    title: "Organic Basmati Rice",
    price: 120,
    parentCategory: "Grains",
    category: "Rice",
    isVisible: true,
    delivery: true,
    organic: true,
    transaction: true,
    cashOnDelivery: true,
    returnableChoice: false,
    onSiteShopping: true,
    hasDiscount: false,
    discountPercentage: 0,
    farmerID: "farmer_id_1",
    farmerName: "Rajesh Kumar",
    productRating: { rating: 4.8, count: 15 },
    comments: [],
  },
  {
    images: ["https://res.cloudinary.com/youraccount/image/upload/v1646579632/alphonso_mango.jpg"],
    title: "Premium Alphonso Mangoes",
    price: 400,
    parentCategory: "Fruits",
    category: "Seasonal Fruits",
    isVisible: true,
    delivery: true,
    organic: true,
    transaction: true,
    cashOnDelivery: true,
    returnableChoice: false,
    onSiteShopping: true,
    hasDiscount: true,
    discountPercentage: 10,
    farmerID: "farmer_id_10",
    farmerName: "Kavita Desai",
    productRating: { rating: 4.9, count: 28 },
    comments: [],
  },
];

// **Function to Insert Data**
const seedDatabase = async () => {
  try {
    await Farmer.insertMany(farmers);
    console.log("Farmers added");

    await Consumer.insertMany(consumers);
    console.log("Consumers added");

    await Product.insertMany(products);
    console.log("Products added");

    mongoose.disconnect();
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Run Seeding
seedDatabase();