import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (err) {
        setError('Unable to load products. Please start the backend.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="mx-auto max-w-7xl">
      <div className="mb-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-16 text-white shadow-xl sm:px-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Modern MERN E-commerce</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200">
          A starter store built with MongoDB, Express, React, Node.js, and Tailwind CSS.
        </p>
      </div>

      {loading ? (
        <div className="rounded-3xl bg-white p-8 text-center shadow-sm">Loading products...</div>
      ) : error ? (
        <div className="rounded-3xl bg-rose-50 p-8 text-center text-rose-700 shadow-sm">{error}</div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default HomePage;
