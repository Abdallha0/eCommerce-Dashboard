
import axios from "axios";
import { useEffect, useState } from "react";

function CartsContainer() {
  const [cartsData, setCartsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("https://e-commerce-api-3wara.vercel.app/orders/admin/carts?page=1&limit=20", {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log(response.data.carts)
        setCartsData(response.data.carts);
      } catch (error) {
        console.error("Error fetching Cart:", error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, [token]);

  if (loading) return <div className="flex justify-center p-12">Loading...</div>;

  return (
    <div className="w-full p-6 overflow-x-auto ">

      <div className="w-full overflow-x-auto bg-white shadw shadow-xl dark:bg-slate-900/60 p-6 rounded-3xl border border-slate-200 dark:border-slate-800">
        <table className="w-full table-auto text-left">
          <thead className="text-gray-400 text-sm  uppercase">
            <tr>
              <th className="md:p-3 p-2 text-xs md:text-sm font-bold">ID</th>
              <th className="md:p-3 p-2 text-xs md:text-sm font-bold">User ID</th>
              <th className="md:p-3 p-2 text-xs md:text-sm font-bold">Date</th>
              
              <th className="md:p-3 p-2 text-xs md:text-sm font-bold">itemCount</th>
              <th className="md:p-3 p-2 text-xs md:text-sm font-bold">Coupon</th>
              <th className="md:p-3 p-2 text-xs md:text-sm font-bold">Subtotal</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 text-sm dark:text-slate-200">
            {cartsData.map((cart) => (
              <tr key={cart._id} className="border-b border-slate-100  hover:text-gray-800 hover:bg-cyan-100 dark:border-slate-800">
                <td className="p-4 text-xs font-bold">#{cart._id.slice(-8)}</td>
                <td className="p-4">{cart.user ? cart.user.username : "No User"}</td>
                <td className="p-4 text-gray-500 text-xs">{cart.createdAt}</td>
                <td className="p-4 flex items-center gap-3 ">{cart.itemCount}</td>
               <td className="p-4 text-sm">{cart.coupon.code?cart.coupon.code:"No coupon"}</td>
               <td className="p-4 font-semibold">{cart.subtotal?.toFixed(2)} EGP</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CartsContainer;