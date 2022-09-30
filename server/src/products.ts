export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string;
  }
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 1499.99,
      description: 'Apple Macbook Air',
      image: 'http://localhost:8080/mac.jpg',
      longDescription:
        'Apple Macbook Air is the best laptop for designers, developers and artists.',
    },
    {
      id: 2,
      name: 'Airpods',
      price: 499.99,
      description: 'Apple Airpods Pro',
      image: 'http://localhost:8080/airpods.jpg',
      longDescription:
        'True Wireless Earpods to easy your life with better surround sound and noise cancellation.',
    },
    {
      id: 3,
      name: 'Watch',
      price: 599.99,
      description: 'Apple Watch 7',
      image: 'http://localhost:8080/watch.jpg',
      longDescription:
        'Apple Watch is the best smart watch in the market to increase your accessibility.',
    },
    {
      id: 4,
      name: 'Tablet',
      price: 699.99,
      description: 'iPad Pro',
      image: 'http://localhost:8080/ipad.jpg',
      longDescription:
        'Apple iPad is the device that is mobile and help you work on the go.',
    },
    {
      id: 5,
      name: 'Mobile',
      price: 899.99,
      description: 'iPhone 13',
      image: 'http://localhost:8080/iphone.jpg',
      longDescription:
        'Apple iPhone 13 is one of the best smartphones available in the market.',
    }   
  ];
  
  export default products;