import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { dashboardAlerts } from "../helpers/alerts";
import OverviewSec from "../components/dashboard/overview-sec";
import SummaryCardSec from "../components/dashboard/summaryCard-sec";
import PanelsSec from "../components/dashboard/panels-sec";
import RecentOrderSec from "../components/dashboard/recentOrder-sec";
import DashboardSkeleton from "../components/dashboard/DashboardSkeleton";
import DashboardNotice from "../components/dashboard/DashboardNotice";
import { useAuth } from "../hooks/useAuth";
import { getAdminDashboardStats } from "../services/dashboard-api";

export const PanelDataContext = createContext({});

function emptyArray(length) {
  return Array.from({ length });
}

function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [summaryData, setSummaryData] = useState(emptyArray(6));
  const [ordersStatus, setOrdersStatus] = useState(emptyArray(6));
  const [topProducts, setTopProducts] = useState(emptyArray(5));
  const [recentOrders, setRecentOrders] = useState(emptyArray(5));

  useEffect(() => {
    getAdminDashboardStats()
      .then((res) => {
        if (!res.success) {
          toast.error(res.message);
          setHasError(true);
          return;
        }

        setSummaryData([
          {
            id: "total-orders",
            label: "Total Orders",
            value: res.dashboard.orders.total,
            helper: "All orders received",
            accent: "from-emerald-400 to-teal-500",
            icon: "shoppingBag",
          },
          {
            id: "pending-orders",
            label: "Pending Orders",
            value: res.dashboard.orders.pending,
            helper: "Awaiting action",
            accent: "from-amber-400 to-orange-500",
            icon: "clock",
          },
          {
            id: "revenue",
            label: "Revenue",
            value: "$" + res.dashboard.revenue.total,
            helper: "Total gross revenue",
            accent: "from-pink-500 to-rose-500",
            icon: "dollar",
          },
          {
            id: "this-month",
            label: "This Month",
            value: "$" + res.dashboard.revenue.thisMonth,
            helper: "Monthly sales target",
            accent: "from-cyan-400 to-sky-500",
            icon: "cart",
          },
          {
            id: "top-product",
            label: "Top Product",
            value: res.dashboard.topProducts[0].name,
            helper: res.dashboard.topProducts[0].totalSold + " sold",
            accent: "from-violet-500 to-fuchsia-500",
            icon: "box",
          },
          {
            id: "users",
            label: "Users",
            value: res.dashboard.totalCustomers,
            helper: "Registered customers",
            accent: "from-slate-400 to-slate-600",
            icon: "users",
          },
        ]);
        setOrdersStatus(res.dashboard.ordersByStatus);
        setTopProducts(res.dashboard.topProducts);
        setRecentOrders(
          res.dashboard.recentOrders.map((i) => ({
            id: i._id,
            customer: i.user ? i.user.username : i.shippingAddress.fullName,
            product: i.items.map((it) => it.name).join(" | "),
            date: i.updatedAt.split("T")[0],
            status: i.status,
            amount: i.totalPrice,
          })),
        );
      })
      .catch((e) => {
        toast.error(e.message || "Network error please check your connection");
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (hasError) {
    return <DashboardNotice state={dashboardAlerts.error} />;
  }

  return (
    <div className="p-4 lg:p-8 space-y-8 w-full">
      <div className="space-y-8">
        {isLoading ? (
          <DashboardSkeleton
            summaryData={summaryData}
            ordersStatus={ordersStatus}
          />
        ) : (
          <>
            <OverviewSec />
            <SummaryCardSec summaryData={summaryData} />
            <PanelDataContext.Provider value={{ ordersStatus, topProducts }}>
              <PanelsSec />
            </PanelDataContext.Provider>
            <RecentOrderSec recentOrders={recentOrders} />
          </>
        )}
      </div>
    </div>
  );
}

export default React.memo(DashboardPage);
