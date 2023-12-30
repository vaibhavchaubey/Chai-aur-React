import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'table wooden',
      price: 200,
      image:
        'https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'table glass',
      price: 250,
      image:
        'https://www.pexels.com/photo/turkish-coffee-served-in-glass-on-table-19552544/',
    },
    {
      id: 3,
      name: 'table plastic',
      price: 150,
      image:
        'https://www.pexels.com/photo/street-cafe-with-round-table-and-chairs-5273119/',
    },
    {
      id: 4,
      name: 'table metal',
      price: 300,
      image:
        'https://images.pexels.com/photos/3822844/pexels-photo-3822844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      name: 'table polyester',
      price: 150,
      image:
        'https://images.pexels.com/photos/19569904/pexels-photo-19569904/free-photo-of-photo-of-a-set-table-with-a-lit-candle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  // http://localhost:3000/api/products?search=metal
  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }
  
  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
