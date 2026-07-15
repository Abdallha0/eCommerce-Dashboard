import { ShoppingBag, Star, Tag } from "lucide-react";

function ProductsDataSec({ product }) {
  const cardClass =
    "rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 backdrop-blur-2xl shadow-xl shadow-slate-900/5 p-5";

  const stats = [
    { title: "Price", value: `$${product.price}` },
    { title: "Discount", value: `$${product.discountPrice}` },
    { title: "Stock", value: product.stock },
    { title: "SKU", value: product.sku },
  ];

  return (
    <section>
      
    </section>
  )
}

export default ProductsDataSec;