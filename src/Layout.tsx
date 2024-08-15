import { SVGProps, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NavItem from "./components/NavItem";

function Layout() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="relative w-full min-h-screen h-full">
      <div className="grid min-h-screen h-full w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div className="min-h-screen hidden border-r bg-gray-50 md:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link className="flex items-center gap-2 font-semibold" to="/">
                <LogoIcon className="lucide lucide-package2 h-6 w-6" />
                Acme Inc
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <NavItem
                  link="/"
                  icon={
                    <ContactIcon className="lucide lucide-line-chart h-4 w-4" />
                  }
                  label="Contacts"
                />
                <NavItem
                  link="/maps-charts"
                  icon={
                    <ChartsIcon className="lucide lucide-line-chart h-4 w-4" />
                  }
                  label="Charts and Maps"
                />
              </nav>
            </div>
            <div className="mt-auto p-4">
              <div className="rounded-xl border bg-white shadow">
                <div className="flex gap-2 items-center p-2 pt-0 md:p-4">
                  <ContactCircleIcon className="lucide lucide-circle-user h-8 w-8" />
                  <div className="flex flex-col space-y-0.5 ">
                    <h3 className="font-semibold leading-none tracking-tight">
                      Admin
                    </h3>
                    <p className="text-sm text-slate-500 cursor-pointer">
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="md:hidden flex h-14 items-center gap-4 border-b bg-gray-50 px-4 lg:h-[60px] lg:px-6">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 shrink-0 md:hidden"
              type="button"
              onClick={() => setSidebar(true)}
            >
              <HamburgerMenuIcon className="lucide lucide-menu h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </button>
          </div>
          <Outlet />
        </div>
      </div>
      {sidebar && (
        <div className="absolute top-0 left-0 min-h-screen w-9/12 bg-white shadow-lg transition ease-in-out">
          <div className="h-full w-full relative">
            <button
              type="button"
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-none"
              onClick={() => setSidebar(false)}
            >
              <CrossIcon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
            <div className="pt-6">
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link className="flex items-center gap-2 font-semibold" to="/">
                  <LogoIcon className="lucide lucide-package2 h-6 w-6" />
                  Acme Inc
                </Link>
              </div>
              <nav className="grid items-start px-2 text-sm font-medium pt-4 lg:px-4">
                <NavItem
                  link="/"
                  icon={
                    <ContactIcon className="lucide lucide-line-chart h-4 w-4" />
                  }
                  label="Contacts"
                  onClick={() => setSidebar(false)}
                />
                <NavItem
                  link="/maps-charts"
                  icon={
                    <ChartsIcon className="lucide lucide-line-chart h-4 w-4" />
                  }
                  label="Charts and Maps"
                  onClick={() => setSidebar(false)}
                />
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Layout;

const LogoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
      <path d="M12 3v6"></path>
    </svg>
  );
};

const CrossIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const HamburgerMenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <line x1="4" x2="20" y1="6" y2="6"></line>
      <line x1="4" x2="20" y1="18" y2="18"></line>
    </svg>
  );
};

const ContactIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
};

const ChartsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18"></path>
      <path d="m19 9-5 5-4-4-3 3"></path>
    </svg>
  );
};

const ContactCircleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="10" r="3"></circle>
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
    </svg>
  );
};
