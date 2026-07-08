import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

export function useSidebar() {
  const x = useContext(SidebarContext);
  if (!x) throw new Error("useSidebar must be used inside SidebarProvider");
  return x;
}
