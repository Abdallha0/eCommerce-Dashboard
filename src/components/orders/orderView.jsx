

import { useState, useEffect } from "react";
import { X, ChevronDown } from "lucide-react";
import { toast } from "react-toastify";
import api from "../../lib/api";
import {
  basePaymentClasses,
  baseStatusClasses,
  paymentClasses,
  pointClasses,
  statusClasses,
} from "../../utils/orderClasses";

export default function OrderView({ order, onClose, onOrderUpdated }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(order?.status || "pending");
  const [note, setNote] = useState(order?.adminNote || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Entrance animation
    setTimeout(() => setOpen(true), 10);
  }, []);

  useEffect(() => {
    if (order) {
      setStatus(order.status);
      setNote(order.adminNote || "");
    }
  }, [order]);

  const handleUpdateStatus = async () => {
    try {
      setLoading(true);
      const { data } = await api.patch(`/orders/admin/${order._id}/status`, {
        status,
        adminNote: note,
      });

      toast.success(data.message || "Status updated");
      onOrderUpdated?.(data.order);
      handleClose();
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm"
      />

      {/* Sidebar Container */}
      <div className="fixed inset-0 z-50 flex justify-end pointer-events-none">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
            fixed right-0 top-0 h-screen w-full max-w-md
            bg-white dark:bg-slate-900
            shadow-2xl transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-full"}
            pointer-events-auto border-l border-slate-200 dark:border-slate-800
          `}
        >
          {/* Header */}
          <div className="flex justify-between items-start p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40">
            <div>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider mb-1 uppercase">
                Order Detail
              </p>
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                # {order?._id?.slice(-8) || "N/A"}
              </h2>
            </div>
            <button
              onClick={handleClose}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto h-[calc(100vh-80px)] custom-scrollbar">
            {/* Status Indicators */}
            <div className="flex gap-2 mb-8">
              <span className={`${baseStatusClasses} ${statusClasses[status] || statusClasses.pending}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${pointClasses[status] || pointClasses.pending}`}></span>
                {status}
              </span>
              <span className={`${basePaymentClasses} ${paymentClasses[order?.paymentStatus] || paymentClasses.pending}`}>
                {order?.paymentStatus}
              </span>
            </div>

            {/* Info Block */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Info</h3>
              <div className="bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-xl p-1">
                {[
                  { label: "Placed", value: order?.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A" },
                  { label: "Customer", value: order?.user?.username || "Unknown" },
                  { label: "Email", value: order?.user?.email || "N/A" },
                  { label: "Ship to", value: order?.shippingAddress?.address || "No address" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 px-4 border-b last:border-0 border-slate-200 dark:border-slate-700/50">
                    <span className="text-slate-500 dark:text-slate-400 text-sm">{item.label}</span>
                    <span className="text-slate-900 dark:text-white font-medium text-sm truncate max-w-[60%]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="mb-8">
              <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Total Summary</h3>
              <div className="bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-xl p-1">
                {[{l: "Subtotal", v: order?.subtotal}, {l: "Shipping", v: order?.shippingFee}, {l: "Tax", v: order?.tax}].map((row, i) => (
                  <div key={i} className="flex justify-between py-2 px-4 text-sm">
                    <span className="text-slate-500 dark:text-slate-400">{row.l}</span>
                    <span className="text-slate-900 dark:text-white font-semibold">{row.v} EGP</span>
                  </div>
                ))}
                <div className="flex justify-between py-3 px-4 bg-slate-100 dark:bg-slate-800 rounded-b-xl border-t border-slate-200 dark:border-slate-700">
                  <span className="text-slate-900 dark:text-white font-bold">Total</span>
                  <span className="text-slate-900 dark:text-white font-bold text-lg">{order?.totalPrice} EGP</span>
                </div>
              </div>
            </div>

            {/* Update Section */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Update Status</h3>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full mb-4 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="shipped">Shipped</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full mb-4 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg p-3 outline-none text-sm"
                  placeholder="Admin note..."
                />
                <button
                  onClick={handleUpdateStatus}
                  disabled={loading}
                  className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 py-3 rounded-lg font-semibold transition-colors"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}