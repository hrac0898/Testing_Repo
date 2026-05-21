import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <section className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Your Shopping Cart</h2>
          <p className="mt-2 text-slate-500">Simple cart layout ready for integration with state or context.</p>
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <p className="text-slate-600">No items in your cart yet.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-white hover:bg-slate-700">
          Continue shopping
        </Link>
      </div>
    </section>
  );
};

export default CartPage;
