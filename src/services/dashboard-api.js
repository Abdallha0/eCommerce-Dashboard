import api from "../lib/api";
import { handleError } from "../helpers/handleErrorMSG";

export async function getAdminDashboardStats() {
  try {
    const res = await api.get("/orders/admin/dashboard");
    const data = res.data;

    if (!data.success) {
      throw new Error(data.message || "Error Occurred!");
    }

    return data;
  } catch (error) {
    return handleError(error);
  }
}
