import React from 'react'
import Product from './Product'

const productsData = [
  {
    id: 1,
    name: "Apple iPhone 17 (Sage, 256 GB)",
    brand: "Apple",
    category: "Mobiles",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/v/e/-original-imahft5gfchxyewy.jpeg?q=70",
    price: 82900,
    exchangeOffer: "Upto ₹54,100 Off on Exchange",
    bankOffer: "Bank Offer Available",
    specs: [
      "256 GB ROM",
      "16.0 cm (6.3 inch) Super Retina XDR Display",
      "48MP + 48MP | 18MP Front Camera",
      "A19 Chip, 6 Core Processor",
      "1 Year Warranty",
    ],
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 (Black, 256 GB)",
    brand: "Samsung",
    category: "Mobiles",
    image: "https://www.designinfo.in/wp-content/uploads/2024/01/Samsung-Galaxy-S24-128GB-Onyx-Black-1-485x485.webp",
    price: 74999,
    exchangeOffer: "Upto ₹40,000 Off on Exchange",
    bankOffer: "Bank Offer Available",
    specs: [
      "256 GB ROM",
      "15.8 cm (6.2 inch) AMOLED Display",
      "50MP + 12MP + 10MP | 12MP Front Camera",
      "Exynos 2400 Processor",
      "1 Year Warranty",
    ],
  },
  {
    id: 3,
    name: "OnePlus 12 (Flowy Emerald, 256 GB)",
    brand: "Samsung",
    category: "Mobiles",
    image: "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UF1000,1000_QL80_.jpg",
    price: 64999,
    exchangeOffer: "Upto ₹35,000 Off on Exchange",
    bankOffer: "Bank Offer Available",
    specs: [
      "256 GB ROM",
      "17.2 cm (6.82 inch) AMOLED Display",
      "50MP + 48MP + 64MP | 32MP Front Camera",
      "Snapdragon 8 Gen 3 Processor",
      "1 Year Warranty",
    ],
  },
  
];

const ProductsList = ({ searchQuery, filter }) => {
  console.log(filter);

  const filteredProducts = productsData.filter((product) => {
    let search = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    let category,brand,price;

    if (filter.category.length > 0) {
      category = filter.category.includes(product.category);
    } else {
      category = true;
    }
    
    if (filter.brand.length > 0) {
      brand = filter.brand.includes(product.brand);
    } else {
      brand = true;
    }
    
    if (filter.price.length > 0) {
      if (product.price >= filter.price[0] && product.price <= filter.price[1]) {
        price = true;
      } else {
        price = false;
      }
    } else {
      price = true;
    }

    return search && category && brand && price;
  })

  console.log(filteredProducts);


  return (
    <div style={{
      width: "80%",
      height: "100%",
      border: "2px solid black",
      overflowY: "auto",
    }}>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Product</h1>
      </div>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => <Product key={product.id} product={product} />)
      ) : <p style={{ textAlign: "center" }}>No products found</p>}

    </div>
  )
}

export default ProductsList
