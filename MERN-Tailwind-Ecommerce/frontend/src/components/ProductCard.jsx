const ProductCard = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="h-56 bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{product.category}</p>
        <h3 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h3>
        <p className="mt-2 text-slate-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
            Stock {product.countInStock}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
