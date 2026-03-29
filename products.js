// ============================================================
// CATALOG CONFIGURATION
// Edit these values to customise your catalog.
// ============================================================
const CATALOG_CONFIG = {
    title: "My Shop",       // Title shown at top of the catalog
    currency: "USD",        // Currency code: USD, EUR, GBP, CAD, AUD …
    accentColor: "#4361ee", // Main colour used for buttons, prices, etc.
    showSearch: true,       // Show/hide the search bar
    showSort: true,         // Show/hide the sort dropdown
    showCategories: true,   // Show/hide the category filter buttons
};

// ============================================================
// PRODUCTS
// Add, edit, or remove products in this array.
//
// Fields:
//   id          - unique number for each product  (required)
//   name        - product name                    (required)
//   price       - numeric price, e.g. 29.99       (required)
//   category    - category name for filtering     (required)
//   image       - URL to product image            (optional)
//   description - product description             (optional)
//   link        - URL to buy / checkout page      (optional, omit or use
//                 "#" to hide the Buy Now button)
// ============================================================
const PRODUCTS = [
    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        price: 24.99,
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
        description: "Premium 100% cotton t-shirt — soft, breathable, and available in a wide range of sizes. Perfect for everyday wear.",
        link: "#"
    },
    {
        id: 2,
        name: "Leather Wallet",
        price: 49.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
        description: "Slim genuine leather bifold wallet with multiple card slots and a cash compartment. Elegant and durable.",
        link: "#"
    },
    {
        id: 3,
        name: "Ceramic Coffee Mug",
        price: 15.99,
        category: "Home",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80",
        description: "Handcrafted ceramic mug, 350 ml. Microwave and dishwasher safe. A lovely gift for coffee lovers.",
        link: "#"
    },
    {
        id: 4,
        name: "Wireless Earbuds",
        price: 79.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
        description: "True wireless earbuds with Bluetooth 5.0, 6-hour battery life, and noise isolation. Compact charging case included.",
        link: "#"
    },
    {
        id: 5,
        name: "Scented Candle Set",
        price: 34.99,
        category: "Home",
        image: "https://images.unsplash.com/photo-1602607837660-dc59d8c3a1de?w=500&q=80",
        description: "Set of 3 hand-poured soy wax candles in lavender, vanilla, and sandalwood. 40-hour burn time each.",
        link: "#"
    },
    {
        id: 6,
        name: "Polarised Sunglasses",
        price: 39.99,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
        description: "UV400 polarised lenses with a lightweight frame. Great for everyday use and outdoor activities.",
        link: "#"
    }
];
