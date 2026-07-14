import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditProductPage() {

  const { productId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    shortDescription: "",
    description: "",
    price: "",
    discountPrice: "",
    stock: "",
    sku: "",
    category: "",
    subcategory: "",
    brand: "",
    tags: [],
    featured: false,
    isActive: true,
  });
  useEffect(() => {
  async function fetchProduct() {
    const data = await getProduct(productId);

    if (data.success) {
      setFormData({
        name: data.product.name,
        shortDescription: data.product.shortDescription,
        description: data.product.description,
        price: data.product.price,
        discountPrice: data.product.discountPrice,
        stock: data.product.stock,
        sku: data.product.sku,
        category: data.product.category,
        subcategory: data.product.subcategory,
        brand: data.product.brand,
        tags: data.product.tags,
        featured: data.product.featured,
        isActive: data.product.isActive,
      });
    }
  }

  fetchProduct();
}, [productId]);

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};

<form>
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Product Name"
  />
  <input
    type="number"
    name="price"
    value={formData.price}
    onChange={handleChange}
    placeholder="Price"
  />

  <textarea
    name="description"
    value={formData.description}
    onChange={handleChange}
    placeholder="Description"
  />

  <label>
    <input
      type="checkbox"
      name="featured"
      checked={formData.featured}
      onChange={handleChange}
    />
    Featured
  </label>

  <label>
    <input
      type="checkbox"
      name="isActive"
      checked={formData.isActive}
      onChange={handleChange}
    />
    Active
  </label>


</form>
  return (
    <section>
      Edit Page
    </section>
  );
}

export default EditProductPage;