import api from "../lib/api";
import { handleError } from "../helpers/handleErrorMSG";

export async function getProduct(id) {
  try {
    const res = await api.get(
      `https://e-commerce-api-3wara.vercel.app/products/${id}`,
    );
    const data = res.data;

    if (!data.success) {
      throw new Error(data.message || "Error Occurred!");
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}
