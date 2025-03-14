import React, { Component } from 'react';

class ProductDetails extends Component {
  // Initialize state with static product information
  constructor() {
    super();
    this.state = {
        products:  [
            {
                "id": 1,
                "productCategory": "Smartphone",
                "name": "iPhone 12 Pro",
                "brand": "Apple",
                "description": "The iPhone 12 Pro features a new design and edge-to-edge Super Retina XDR display.",
                "basePrice": 999,
                "inStock": true,
                "stock": 43,
                "featuredImage": "https://images.pexels.com/photos/10914594/pexels-photo-10914594.jpeg?auto=compress&cs=tinysrgb&w=400",
                "thumbnailImage": "https://placehold.co/400x300?text=iPhone+12+Pro",
                "storageOptions": [
                    "128GB",
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Graphite",
                    "Silver",
                    "Gold",
                    "Pacific Blue"
                ],
                "display": "6.1-inch Super Retina XDR display",
                "CPU": "A14 Bionic chip",
                "camera": {
                    "rearCamera": "Pro 12MP camera system: Ultra Wide, Wide, and Telephoto cameras",
                    "frontCamera": "12MP TrueDepth front camera"
                }
            },
            {
                "id": 2,
                "productCategory": "Tablet",
                "name": "iPad Pro 12.9-inch",
                "brand": "Apple",
                "description": "The iPad Pro features the powerful M1 chip and a stunning XDR display.",
                "basePrice": 1099,
                "inStock": true,
                "stock": 26,
                "featuredImage": "https://images.pexels.com/photos/3082341/pexels-photo-3082341.jpeg?auto=compress&cs=tinysrgb&w=400",
                "thumbnailImage": "https://placehold.co/400x300?text=iPad+Pro+12.9-inch+(5th+generation)",
                "storageOptions": [
                    "64GB",
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Silver",
                    "Space Gray"
                ],
                "display": "Liquid Retina display",
                "CPU": "M1 chip",
                "GPU": "M1 chip",
                "camera": {
                    "rearCamera": "12MP Wide camera",
                    "frontCamera": "12MP Ultra Wide front camera with Center Stage"
                }
            },
            {
                "id": 3,
                "productCategory": "Laptop",
                "name": "MacBook Pro 14-inch",
                "brand": "Apple",
                "description": "The MacBook Pro 14-inch (2023) offers a Liquid Retina XDR display, powered by the M2 Pro chip, delivering breakthrough performance and amazing battery life.",
                "basePrice": 1999,
                "inStock": true,
                "stock": 10,
                "featuredImage": "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400",
                "thumbnailImage": "https://placehold.co/400x300?text=MacBook+Pro+14-inch",
                "storageOptions": [
                    "512GB",
                    "1TB",
                    "2TB"
                ],
                "colorOptions": [
                    "Space Gray",
                    "Silver"
                ],
                "display": "14.2-inch Liquid Retina XDR display",
                "CPU": "M2 Pro chip",
                "GPU": "M2 Pro chip"
            },
            {
                "id": 4,
                "productCategory": "Smartphone",
                "name": "iPhone 14 Pro Max",
                "brand": "Apple",
                "description": "The iPhone 14 Pro Max offers the best performance and largest display in the iPhone 14 series.",
                "basePrice": 1099,
                "inStock": true,
                "stock": 38,
                "featuredImage": "https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=400",
                "thumbnailImage": "https://placehold.co/400x300?text=iPhone+14+Pro+Max",
                "storageOptions": [
                    "128GB",
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Graphite",
                    "Silver",
                    "Gold",
                    "Pacific Blue"
                ],
                "display": "6.7-inch Super Retina XDR display",
                "CPU": "A15 Bionic chip",
                "camera": {
                    "rearCamera": "Advanced Pro camera system: Ultra Wide, Wide, and Telephoto cameras",
                    "frontCamera": "12MP TrueDepth front camera"
                }
            },
            {
                "id": 5,
                "productCategory": "Smartphone",
                "name": "iPhone 14",
                "brand": "Apple",
                "description": "The iPhone 14 introduces an advanced dual-camera system and A15 Bionic chip.",
                "basePrice": 799,
                "inStock": true,
                "stock": 55,
                "featuredImage": "https://images.pexels.com/photos/18525573/pexels-photo-18525573/free-photo-of-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=400",
                "thumbnailImage": "https://placehold.co/400x300?text=iPhone+14",
                "storageOptions": [
                    "128GB",
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Graphite",
                    "Silver",
                    "Gold",
                    "Pacific Blue"
                ],
                "display": "6.7-inch Super Retina XDR display",
                "CPU": "A15 Bionic chip",
                "camera": {
                    "rearCamera": "Advanced Pro camera system: Ultra Wide, Wide, and Telephoto cameras",
                    "frontCamera": "12MP TrueDepth front camera"
                }
            },
            {
                "id": 6,
                "productCategory": "Smartphone",
                "name": "Samsung Galaxy S22 Ultra",
                "brand": "Samsung",
                "description": "The Samsung Galaxy S22 Ultra offers a premium experience with its advanced camera and display.",
                "basePrice": 1199,
                "inStock": true,
                "stock": 50,
                "featuredImage": "https://images.pexels.com/photos/13780425/pexels-photo-13780425.jpeg?auto=compress&cs=tinysrgb&w=400",
                "thumbnailImage": "https://placehold.co/400x300?text=Samsung+Galaxy+S22+Ultra",
                "storageOptions": [
                    "128GB",
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Black",
                    "White",
                    "Burgundy",
                    "Green"
                ],
                "display": "Dynamic AMOLED 2X display",
                "CPU": "Exynos 2200 / Snapdragon 8 Gen 1",
                "camera": {
                    "rearCamera": "Advanced multi-lens camera system",
                    "frontCamera": "High-resolution front camera"
                }
            },
            {
                "id": 7,
                "productCategory": "Smartphone",
                "name": "Samsung Galaxy Z Flip4",
                "brand": "Samsung",
                "description": "The Galaxy Z Flip4 combines style and innovation with its unique foldable design.",
                "basePrice": 999,
                "inStock": true,
                "stock": 94,
                "featuredImage": "https://images.pexels.com/photos/4716356/pexels-photo-4716356.jpeg?auto=compress&cs=tinysrgb&w=400",
                "thumbnailImage": "https://placehold.co/400x300?text=Samsung+Galaxy+Z+Flip4",
                "storageOptions": [
                    "128GB",
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Black",
                    "White",
                    "Burgundy",
                    "Green"
                ],
                "display": "Dynamic AMOLED 2X display",
                "CPU": "Exynos 2200 / Snapdragon 8 Gen 1",
                "camera": {
                    "rearCamera": "Advanced multi-lens camera system",
                    "frontCamera": "High-resolution front camera"
                }
            },
            {
                "id": 8,
                "productCategory": "Smartphone",
                "name": "Samsung Galaxy A53",
                "brand": "Samsung",
                "description": "The Galaxy A53 offers a balance of performance and affordability, with a versatile camera.",
                "basePrice": 449,
                "inStock": true,
                "stock": 88,
                "featuredImage": "https://placehold.co/800x600?text=Samsung+Galaxy+A53",
                "thumbnailImage": "https://placehold.co/400x300?text=Samsung+Galaxy+A53",
                "storageOptions": [
                    "128GB",
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Black",
                    "White",
                    "Burgundy",
                    "Green"
                ],
                "display": "Dynamic AMOLED 2X display",
                "CPU": "Exynos 2200 / Snapdragon 8 Gen 1",
                "camera": {
                    "rearCamera": "Advanced multi-lens camera system",
                    "frontCamera": "High-resolution front camera"
                }
            },
            {
                "id": 9,
                "productCategory": "Smartphone",
                "name": "Samsung Galaxy S21 FE",
                "brand": "Samsung",
                "description": "The S21 FE (Fan Edition) combines flagship features at a more accessible price point.",
                "basePrice": 699,
                "inStock": true,
                "stock": 54,
                "featuredImage": "https://placehold.co/800x600?text=Samsung+Galaxy+S21+FE",
                "thumbnailImage": "https://placehold.co/400x300?text=Samsung+Galaxy+S21+FE",
                "storageOptions": [
                    "128GB",
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Black",
                    "White",
                    "Burgundy",
                    "Green"
                ],
                "display": "Dynamic AMOLED 2X display",
                "CPU": "Exynos 2200 / Snapdragon 8 Gen 1",
                "camera": {
                    "rearCamera": "Advanced multi-lens camera system",
                    "frontCamera": "High-resolution front camera"
                }
            },
            {
                "id": 10,
                "productCategory": "Smartphone",
                "name": "iPhone SE (3rd generation)",
                "brand": "Apple",
                "description": "The iPhone SE (3rd generation) offers powerful performance in a classic design.",
                "basePrice": 429,
                "inStock": true,
                "stock": 76,
                "featuredImage": "https://placehold.co/800x600?text=iPhone+SE+(3rd+generation)",
                "thumbnailImage": "https://placehold.co/400x300?text=iPhone+SE+(3rd+generation)",
                "storageOptions": [
                    "128GB",
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Graphite",
                    "Silver",
                    "Gold",
                    "Pacific Blue"
                ],
                "display": "6.7-inch Super Retina XDR display",
                "CPU": "A15 Bionic chip",
                "camera": {
                    "rearCamera": "Advanced Pro camera system: Ultra Wide, Wide, and Telephoto cameras",
                    "frontCamera": "12MP TrueDepth front camera"
                }
            },
            {
                "id": 11,
                "productCategory": "Smartphone",
                "name": "iPhone 13 Mini",
                "brand": "Apple",
                "description": "The iPhone 13 Mini packs all the features of the iPhone 13 in a compact form.",
                "basePrice": 599,
                "inStock": true,
                "stock": 77,
                "featuredImage": "https://placehold.co/800x600?text=iPhone+13+Mini",
                "thumbnailImage": "https://placehold.co/400x300?text=iPhone+13+Mini",
                "storageOptions": [
                    "128GB",
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Graphite",
                    "Silver",
                    "Gold",
                    "Pacific Blue"
                ],
                "display": "6.7-inch Super Retina XDR display",
                "CPU": "A15 Bionic chip",
                "camera": {
                    "rearCamera": "Advanced Pro camera system: Ultra Wide, Wide, and Telephoto cameras",
                    "frontCamera": "12MP TrueDepth front camera"
                }
            },
            {
                "id": 12,
                "productCategory": "Tablet",
                "name": "iPad Air (5th generation)",
                "brand": "Apple",
                "description": "The iPad Air offers powerful performance with the A15 Bionic chip in a thin design.",
                "basePrice": 599,
                "inStock": true,
                "stock": 26,
                "featuredImage": "https://placehold.co/800x600?text=iPad+Air+(5th+generation)",
                "thumbnailImage": "https://placehold.co/400x300?text=iPad+Air+(5th+generation)",
                "storageOptions": [
                    "64GB",
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Silver",
                    "Space Gray"
                ],
                "display": "Liquid Retina display",
                "CPU": "M1 chip",
                "GPU": "M1 chip",
                "camera": {
                    "rearCamera": "12MP Wide camera",
                    "frontCamera": "12MP Ultra Wide front camera with Center Stage"
                }
            },
            {
                "id": 13,
                "productCategory": "Tablet",
                "name": "iPad (9th generation)",
                "brand": "Apple",
                "description": "The iPad features the A13 Bionic chip and a 10.2-inch Retina display.",
                "basePrice": 329,
                "inStock": true,
                "stock": 91,
                "featuredImage": "https://placehold.co/800x600?text=iPad+(9th+generation)",
                "thumbnailImage": "https://placehold.co/400x300?text=iPad+(9th+generation)",
                "storageOptions": [
                    "64GB",
                    "256GB",
                    "512GB",
                    "1TB"
                ],
                "colorOptions": [
                    "Silver",
                    "Space Gray"
                ],
                "display": "Liquid Retina display",
                "CPU": "Apple M1 chip",
                "camera": {
                    "rearCamera": "12MP Wide camera",
                    "frontCamera": "12MP Ultra Wide front camera"
                }
            },
            {
                "id": 14,
                "productCategory": "Laptop",
                "name": "MacBook Air M2",
                "brand": "Apple",
                "description": "The MacBook Air with M2 chip (2023) features a redesigned thin and light chassis, with a 13.6-inch Liquid Retina display, and offers remarkable performance with incredible battery life.",
                "basePrice": 1199,
                "inStock": true,
                "stock": 15,
                "featuredImage": "https://placehold.co/800x600?text=MacBook+Air+M2",
                "thumbnailImage": "https://placehold.co/400x300?text=MacBook+Air+M2",
                "storageOptions": [
                    "256GB",
                    "512GB",
                    "1TB"
                ],
                "colorOptions": [
                    "Midnight",
                    "Starlight",
                    "Space Gray",
                    "Silver"
                ],
                "display": "13.6-inch Liquid Retina display",
                "CPU": "M2 chip",
                "GPU": "M2 chip"
            },
            {
                "id": 15,
                "productCategory": "Laptop",
                "name": "MacBook Pro 16-inch",
                "brand": "Apple",
                "description": "The MacBook Pro 16-inch (2023) is a powerhouse for professionals, featuring the M2 Max chip for ultimate performance, a Liquid Retina XDR display, and a long-lasting battery.",
                "basePrice": 2499,
                "inStock": true,
                "stock": 8,
                "featuredImage": "https://placehold.co/800x600?text=MacBook+Pro+16-inch",
                "thumbnailImage": "https://placehold.co/400x300?text=MacBook+Pro+16-inch",
                "storageOptions": [
                    "1TB",
                    "2TB",
                    "4TB"
                ],
                "colorOptions": [
                    "Space Gray",
                    "Silver"
                ],
                "display": "16.2-inch Liquid Retina XDR display",
                "CPU": "M2 Max chip",
                "GPU": "M2 Max chip"
            },
            {
                "id": 16,
                "productCategory": "Laptop",
                "name": "MacBook Air M2 13-inch",
                "brand": "Apple",
                "description": "The MacBook Air M2 13-inch (2023) combines efficiency and power in a slim design, featuring a 13-inch Liquid Retina display, the M2 chip, and an all-day battery life.",
                "basePrice": 1299,
                "inStock": true,
                "stock": 12,
                "featuredImage": "https://placehold.co/800x600?text=MacBook+Air+M2+13-inch",
                "thumbnailImage": "https://placehold.co/400x300?text=MacBook+Air+M2+13-inch",
                "storageOptions": [
                    "256GB",
                    "512GB",
                    "1TB"
                ],
                "colorOptions": [
                    "Midnight",
                    "Starlight",
                    "Space Gray",
                    "Silver"
                ],
                "display": "13-inch Liquid Retina display",
                "CPU": "M2 chip",
                "GPU": "M2 chip"
            },
            {
                "id": 17,
                "productCategory": "Laptop",
                "name": "Lenovo ThinkPad X1 Carbon Gen 9",
                "brand": "Lenovo",
                "description": "The Lenovo ThinkPad X1 Carbon Gen 9 (2023) is a premium ultrabook, offering a perfect blend of lightweight portability and high performance with its 14-inch display, Intel Core processors, and robust security features.",
                "basePrice": 1429,
                "inStock": true,
                "stock": 20,
                "featuredImage": "https://placehold.co/800x600?text=Lenovo+ThinkPad+X1+Carbon+Gen+9",
                "thumbnailImage": "https://placehold.co/400x300?text=Lenovo+ThinkPad+X1+Carbon+Gen+9",
                "storageOptions": [
                    "256GB",
                    "512GB",
                    "1TB"
                ],
                "colorOptions": [
                    "Black"
                ],
                "display": "14-inch FHD+ (1920 x 1200) IPS, anti-glare",
                "CPU": "11th Gen Intel Core i5/i7",
                "GPU": "Integrated Intel Iris Xe Graphics"
            },
            {
                "id": 18,
                "productCategory": "Laptop",
                "name": "Lenovo Yoga Slim 7i",
                "brand": "Lenovo",
                "description": "The Lenovo Yoga Slim 7i (2023) combines versatility and performance in a sleek design, featuring a 13.3-inch QHD display, 11th Gen Intel Core processors, and excellent battery life.",
                "basePrice": 999,
                "inStock": true,
                "stock": 15,
                "featuredImage": "https://placehold.co/800x600?text=Lenovo+Yoga+Slim+7i",
                "thumbnailImage": "https://placehold.co/400x300?text=Lenovo+Yoga+Slim+7i",
                "storageOptions": [
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Slate Grey",
                    "Orchid"
                ],
                "display": "13.3-inch QHD (2560 x 1600) IPS, glossy",
                "CPU": "11th Gen Intel Core i5/i7",
                "GPU": "Integrated Intel Iris Xe Graphics"
            },
            {
                "id": 19,
                "productCategory": "Laptop",
                "name": "Lenovo ThinkPad L14 (2023)",
                "brand": "Lenovo",
                "description": "The Lenovo ThinkPad L14 (2023) is a reliable business laptop known for its durability and performance. It features a 14-inch Full HD display, AMD Ryzen processors, and long-lasting battery life.",
                "basePrice": 899,
                "inStock": true,
                "stock": 12,
                "featuredImage": "https://placehold.co/800x600?text=Lenovo+ThinkPad+L14",
                "thumbnailImage": "https://placehold.co/400x300?text=Lenovo+ThinkPad+L14",
                "storageOptions": [
                    "256GB SSD",
                    "512GB SSD"
                ],
                "colorOptions": [
                    "Black",
                    "Silver"
                ],
                "display": "14-inch Full HD (1920 x 1080) IPS, anti-glare",
                "CPU": "AMD Ryzen 5/Ryzen 7",
                "GPU": "Integrated AMD Radeon Graphics"
            },
            {
                "id": 20,
                "productCategory": "Laptop",
                "name": "Lenovo IdeaPad Flex 5 (2023)",
                "brand": "Lenovo",
                "description": "The Lenovo IdeaPad Flex 5 (2023) is a versatile 2-in-1 laptop that adapts to your needs. It features a 15.6-inch touchscreen display, Intel Core processors, and a 360-degree hinge for flexible usage.",
                "basePrice": 799,
                "inStock": true,
                "stock": 18,
                "featuredImage": "https://placehold.co/800x600?text=Lenovo+IdeaPad+Flex+5",
                "thumbnailImage": "https://placehold.co/400x300?text=Lenovo+IdeaPad+Flex+5",
                "storageOptions": [
                    "512GB SSD",
                    "1TB SSD"
                ],
                "colorOptions": [
                    "Graphite Grey",
                    "Abyss Blue"
                ],
                "display": "15.6-inch Full HD (1920 x 1080) touchscreen, IPS",
                "CPU": "10th Gen Intel Core i5/i7",
                "GPU": "Integrated Intel UHD Graphics"
            },
            {
                "id": 21,
                "productCategory": "Laptop",
                "name": "MacBook Pro 13-inch (2021)",
                "brand": "Apple",
                "description": "The MacBook Pro 13-inch (2021) delivers impressive performance with the M1 chip, a 13-inch Retina display, and exceptional battery life.",
                "basePrice": 1299,
                "inStock": true,
                "stock": 18,
                "featuredImage": "https://placehold.co/800x600?text=MacBook+Pro+13-inch+(2021)",
                "thumbnailImage": "https://placehold.co/400x300?text=MacBook+Pro+13-inch+(2021)",
                "storageOptions": [
                    "256GB",
                    "512GB",
                    "1TB"
                ],
                "colorOptions": [
                    "Space Gray",
                    "Silver"
                ],
                "display": "13-inch Retina display",
                "CPU": "Apple M1 chip",
                "GPU": "Apple M1 chip"
            },
            {
                "id": 22,
                "productCategory": "Laptop",
                "name": "MacBook Air (2021)",
                "brand": "Apple",
                "description": "The MacBook Air (2021) is ultra-thin and lightweight, powered by the Apple M1 chip for excellent performance and energy efficiency.",
                "basePrice": 999,
                "inStock": true,
                "stock": 22,
                "featuredImage": "https://placehold.co/800x600?text=MacBook+Air+(2021)",
                "thumbnailImage": "https://placehold.co/400x300?text=MacBook+Air+(2021)",
                "storageOptions": [
                    "256GB",
                    "512GB"
                ],
                "colorOptions": [
                    "Gold",
                    "Silver",
                    "Space Gray"
                ],
                "display": "13-inch Retina display",
                "CPU": "Apple M1 chip",
                "GPU": "Apple M1 chip"
            },
            {
                "id": 23,
                "productCategory": "Laptop",
                "name": "MacBook Pro 16-inch (2021)",
                "brand": "Apple",
                "description": "The MacBook Pro 16-inch (2021) offers desktop-class performance with Intel Core processors, a stunning Retina display, and advanced graphics.",
                "basePrice": 2399,
                "inStock": true,
                "stock": 14,
                "featuredImage": "https://placehold.co/800x600?text=MacBook+Pro+16-inch+(2021)",
                "thumbnailImage": "https://placehold.co/400x300?text=MacBook+Pro+16-inch+(2021)",
                "storageOptions": [
                    "512GB",
                    "1TB",
                    "2TB",
                    "4TB"
                ],
                "colorOptions": [
                    "Space Gray",
                    "Silver"
                ],
                "display": "16-inch Retina display",
                "CPU": "Intel Core i9",
                "GPU": "AMD Radeon Pro"
            },
            {
                "id": 24,
                "productCategory": "Laptop",
                "name": "MacBook Air (M1, 2021)",
                "brand": "Apple",
                "description": "The MacBook Air (M1, 2021) redefines performance and portability with the Apple M1 chip, a 13-inch Retina display, and silent fanless design.",
                "basePrice": 1099,
                "inStock": true,
                "stock": 20,
                "featuredImage": "https://placehold.co/800x600?text=MacBook+Air+(M1,+2021)",
                "thumbnailImage": "https://placehold.co/400x300?text=MacBook+Air+(M1,+2021)",
                "storageOptions": [
                    "256GB",
                    "512GB",
                    "1TB"
                ],
                "colorOptions": [
                    "Gold",
                    "Silver",
                    "Space Gray"
                ],
                "display": "13-inch Retina display",
                "CPU": "Apple M1 chip",
                "GPU": "Apple M1 chip"
            }
        ]
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div style={styles.productList}>
        {products.map(product => (
          <div key={product.id} style={styles.card}>
            <h2>{product.name}</h2>
            <img src={product.featuredImage} style={styles.imagecss}/>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Category:</strong> {product.productCategory}</p>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.basePrice}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
          </div>
        ))}
      </div>
    );
  }
}

const styles = {
    productList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    width: '300px',
    padding: '16px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px',
    textAlign: 'center',
  },
  imagecss: {
   width:'300px',
   height:'300px',
  },
};

export default ProductDetails;
