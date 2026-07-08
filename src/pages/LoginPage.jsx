import LoginSidePanel from "../components/login/sidePanel";
import LoginForm from "../components/login/loginForm";
import React from "react";

function LoginPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-linear-to-br from-slate-100 via-white to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-black flex items-center justify-center px-4 py-8">
      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid overflow-hidden rounded-4xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl lg:grid-cols-2">
          <LoginSidePanel />

          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default React.memo(LoginPage);
