"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Button from "./button";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  {
    label: "Resources",
    href: "/resources",
    // children: [
    //   { label: "Software Guide", href: "/software-guide" },
    //   { label: "About us", href: "/about-us" },
    //   { label: "Software Guide", href: "/software-guide" },
    //   { label: "Software Guide", href: "/software-guide" },
    // ],
  },
  { label: "Guidebook", href: "/software-guidebook" },
  { label: "Login", href: "/login" },
];

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <nav className="sticky top-0 z-50 border-b border-border-subtle bg-primary backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="relative flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={96} height={28} />
          {/* <span className="text-sm font-semibold tracking-wide text-text-primary">
            Umaku
          </span> */}
        </Link>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-md border border-border-subtle text-white transition duration-200 hover:bg-background-muted hover:text-primary md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <Icon icon="iconamoon:menu-burger-horizontal" width={22} />
          </button>
          <ul className="hidden items-center gap-2 text-sm font-medium text-white md:flex">
            {navigation.map((item) => {
              const isActive =
                item.href && pathname === item.href
                  ? true
                  : item.children?.some((child) => child.href === pathname) ??
                    false;
              const firstChild = item.children?.[0];

              return (
                <li key={item.label} className="group relative">
                  {item.children?.length ? (
                    <>
                      <Link
                        href={firstChild?.href ?? item.href ?? "/"}
                        className={`flex items-center gap-1 rounded-md px-4 py-2 transition duration-200 hover:text-secondary ${
                          isActive ? "text-secondary font-semibold" : ""
                        }`}
                      >
                        <span className="">{item.label}</span>
                        <span>
                          <Icon
                            icon="iconamoon:arrow-down-2-thin"
                            className="text-white"
                            width={20}
                          />
                        </span>
                      </Link>
                      <div className="pointer-events-none absolute left-0 top-full mt-2 w-52 translate-y-2 rounded-md border border-border-subtle bg-background-soft/95 p-2 text-text-secondary opacity-0 shadow-lg transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="absolute -top-2 left-0 h-2 w-full" />
                        {item.children.map((child) => {
                          const isChildActive = child.href === pathname;

                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className={`flex items-center justify-between rounded-md px-3 py-2 transition duration-200 hover:text-secondary ${
                                isChildActive ? "text-secondary font-bold" : ""
                              }`}
                            >
                              <span className="">{child.label}</span>
                              <span className="text-xs text-primary-soft">
                                <Icon
                                  icon="iconamoon:arrow-right-2-thin"
                                  className="text-primary-soft"
                                  width={20}
                                />
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative rounded-md px-4 py-2 transition duration-200 hover:text-secondary ${
                        isActive ? "text-secondary font-semibold" : ""
                      }`}
                    >
                      <span
                        className={`${
                          isActive ? "text-secondary font-semibold" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Button
            type="secondary-fill"
            text="Sign up"
            size={2}
            to="/sign-up"
            className="hidden md:inline-flex font-medium"
          />
        </div>
      </div>
      {/* Mobile Menu  */}
      <div
        className={`border-t border-border-subtle bg-background-soft/95 px-5 py-4 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-2 text-sm font-medium text-text-muted">
          {navigation.map((item) => {
            const isActive =
              item.href && pathname === item.href
                ? true
                : item.children?.some((child) => child.href === pathname) ??
                  false;
            const firstChild = item.children?.[0];
            const isItemOpen = openMenu === item.label;

            return (
              <li key={item.label} className="flex flex-col gap-1">
                {item.children?.length ? (
                  <div
                    className={`flex items-center justify-between rounded-md px-3 py-2 transition duration-200 hover:bg-background-muted hover:text-text-primary ${
                      isActive ? "text-secondary font-semibold" : ""
                    }`}
                  >
                    <Link
                      href={firstChild?.href ?? item.href ?? "/"}
                      className="flex-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="ml-2 flex h-8 w-8 items-center justify-center rounded-md border border-border-subtle text-primary-soft"
                      aria-label={`Toggle ${item.label}`}
                      aria-expanded={isItemOpen}
                      onClick={() =>
                        setOpenMenu((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                    >
                      <Icon
                        icon="iconamoon:arrow-down-2-thin"
                        width={18}
                        className={`transition duration-200 ${
                          isItemOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between rounded-md px-3 py-2 transition duration-200 hover:bg-background-muted hover:text-text-primary ${
                      isActive ? "text-secondary font-semibold" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                  </Link>
                )}
                {item.children?.length ? (
                  <div
                    className={`ml-3 flex flex-col gap-1 border-l border-border-subtle pl-3 ${
                      isItemOpen ? "block" : "hidden"
                    }`}
                  >
                    {item.children.map((child) => {
                      const isChildActive = child.href === pathname;

                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`rounded-md px-3 py-2 text-sm transition duration-200 hover:bg-background-muted hover:text-text-primary ${
                            isChildActive ? "text-secondary font-bold" : ""
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </li>
            );
          })}

          <li className="flex justify-center">
            <Button
              type="secondary-fill"
              text="Sign up"
              size={2}
              to="/sign-up"
              className="md:hidden inline-flex"
            />
          </li>
        </ul>
      </div>
    </nav>
  );

  // version 2
  // return (
  //   <nav className="overflow-hidden sticky top-0 z-50 border-b border-border-subtle bg-background-soft/95 backdrop-blur">
  //     <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
  //       <Link href="/" className="relative flex items-center gap-2">
  //         <Image src="/logo.png" alt="Logo" width={96} height={28} />
  //         {/* <div className="absolute h-[280px] w-[120px] transform-[rotate(-45deg)] left-[-10px] top-[-110px] bg-primary -z-1"></div>
  //         <div className="absolute h-[280px] w-[15px] transform-[rotate(-45deg)] left-[160px] top-[-110px] bg-primary -z-1"></div> */}
  //         <div className="absolute h-[400px] w-[100px] transform-[rotate(-60deg)] left-[-10px] top-[-180px] bg-primary -z-1"></div>
  //         <div className="absolute h-[400px] w-[15px] transform-[rotate(-60deg)] left-[180px] top-[-180px] bg-primary -z-1"></div>
  //         {/* <span className="text-sm font-semibold tracking-wide text-text-primary">
  //           Umaku
  //         </span> */}
  //       </Link>
  //       <div className="flex items-center gap-3">
  //         <button
  //           type="button"
  //           className="flex h-10 w-10 items-center justify-center rounded-md border border-border-subtle text-text-primary transition duration-200 hover:bg-background-muted md:hidden"
  //           aria-label="Toggle navigation"
  //           aria-expanded={isOpen}
  //           onClick={() => setIsOpen((open) => !open)}
  //         >
  //           <Icon icon="iconamoon:menu-burger-horizontal" width={22} />
  //         </button>
  //         <ul className="hidden items-center gap-2 text-sm font-medium text-text-muted md:flex">
  //           {navigation.map((item) => {
  //             const isActive =
  //               item.href && pathname === item.href
  //                 ? true
  //                 : item.children?.some((child) => child.href === pathname) ??
  //                   false;
  //             const firstChild = item.children?.[0];

  //             return (
  //               <li key={item.label} className="group relative">
  //                 {item.children?.length ? (
  //                   <>
  //                     <Link
  //                       href={firstChild?.href ?? item.href ?? "/"}
  //                       className={`flex items-center gap-1 rounded-md px-4 py-2 transition duration-200 hover:bg-background-muted hover:text-text-primary ${
  //                         isActive
  //                           ? "bg-background-muted text-text-primary"
  //                           : ""
  //                       }`}
  //                     >
  //                       <span>{item.label}</span>
  //                       <span>
  //                         <Icon
  //                           icon="iconamoon:arrow-down-2-thin"
  //                           className="text-primary-soft"
  //                           width={20}
  //                         />
  //                       </span>
  //                     </Link>
  //                     <div className="pointer-events-none absolute left-0 top-full mt-2 w-52 translate-y-2 rounded-md border border-border-subtle bg-background-soft/95 p-2 text-text-secondary opacity-0 shadow-lg transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
  //                       <div className="absolute -top-2 left-0 h-2 w-full" />
  //                       {item.children.map((child) => {
  //                         const isChildActive = child.href === pathname;

  //                         return (
  //                           <Link
  //                             key={child.label}
  //                             href={child.href}
  //                             className={`flex items-center justify-between rounded-md px-3 py-2 transition duration-200 hover:bg-background-muted hover:text-text-primary ${
  //                               isChildActive
  //                                 ? "bg-background-muted text-text-primary"
  //                                 : ""
  //                             }`}
  //                           >
  //                             <span>{child.label}</span>
  //                             <span className="text-xs text-primary-soft">
  //                               <Icon
  //                                 icon="iconamoon:arrow-right-2-thin"
  //                                 className="text-primary-soft"
  //                                 width={20}
  //                               />
  //                             </span>
  //                           </Link>
  //                         );
  //                       })}
  //                     </div>
  //                   </>
  //                 ) : (
  //                   <Link
  //                     href={item.href}
  //                     className={`relative rounded-md px-4 py-2 transition duration-200 hover:bg-background-muted hover:text-text-primary ${
  //                       isActive ? "bg-background-muted text-text-primary" : ""
  //                     }`}
  //                   >
  //                     <span
  //                       className={`relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:bg-primary after:transition after:duration-200 ${
  //                         isActive
  //                           ? "after:scale-x-100"
  //                           : "after:scale-x-0 hover:after:scale-x-100"
  //                       }`}
  //                     >
  //                       {item.label}
  //                     </span>
  //                   </Link>
  //                 )}
  //               </li>
  //             );
  //           })}
  //         </ul>
  //         <Button
  //           type="primary-fill"
  //           text="Sign up"
  //           size={2}
  //           to="/sign-up"
  //           className="hidden md:inline-flex"
  //         />
  //       </div>
  //     </div>
  //     {/* Mobile Menu  */}
  //     <div
  //       className={`border-t border-border-subtle bg-background-soft/95 px-5 py-4 md:hidden ${
  //         isOpen ? "block" : "hidden"
  //       }`}
  //     >
  //       <ul className="flex flex-col gap-2 text-sm font-medium text-text-muted">
  //         {navigation.map((item) => {
  //           const isActive =
  //             item.href && pathname === item.href
  //               ? true
  //               : item.children?.some((child) => child.href === pathname) ??
  //                 false;
  //           const firstChild = item.children?.[0];
  //           const isItemOpen = openMenu === item.label;

  //           return (
  //             <li key={item.label} className="flex flex-col gap-1">
  //               {item.children?.length ? (
  //                 <div
  //                   className={`flex items-center justify-between rounded-md px-3 py-2 transition duration-200 hover:bg-background-muted hover:text-text-primary ${
  //                     isActive ? "bg-background-muted text-text-primary" : ""
  //                   }`}
  //                 >
  //                   <Link
  //                     href={firstChild?.href ?? item.href ?? "/"}
  //                     className="flex-1"
  //                     onClick={() => setIsOpen(false)}
  //                   >
  //                     {item.label}
  //                   </Link>
  //                   <button
  //                     type="button"
  //                     className="ml-2 flex h-8 w-8 items-center justify-center rounded-md border border-border-subtle text-primary-soft"
  //                     aria-label={`Toggle ${item.label}`}
  //                     aria-expanded={isItemOpen}
  //                     onClick={() =>
  //                       setOpenMenu((current) =>
  //                         current === item.label ? null : item.label
  //                       )
  //                     }
  //                   >
  //                     <Icon
  //                       icon="iconamoon:arrow-down-2-thin"
  //                       width={18}
  //                       className={`transition duration-200 ${
  //                         isItemOpen ? "rotate-180" : ""
  //                       }`}
  //                     />
  //                   </button>
  //                 </div>
  //               ) : (
  //                 <Link
  //                   href={item.href}
  //                   className={`flex items-center justify-between rounded-md px-3 py-2 transition duration-200 hover:bg-background-muted hover:text-text-primary ${
  //                     isActive ? "bg-background-muted text-text-primary" : ""
  //                   }`}
  //                   onClick={() => setIsOpen(false)}
  //                 >
  //                   <span>{item.label}</span>
  //                 </Link>
  //               )}
  //               {item.children?.length ? (
  //                 <div
  //                   className={`ml-3 flex flex-col gap-1 border-l border-border-subtle pl-3 ${
  //                     isItemOpen ? "block" : "hidden"
  //                   }`}
  //                 >
  //                   {item.children.map((child) => {
  //                     const isChildActive = child.href === pathname;

  //                     return (
  //                       <Link
  //                         key={child.label}
  //                         href={child.href}
  //                         className={`rounded-md px-3 py-2 text-sm transition duration-200 hover:bg-background-muted hover:text-text-primary ${
  //                           isChildActive
  //                             ? "bg-background-muted text-text-primary"
  //                             : ""
  //                         }`}
  //                         onClick={() => setIsOpen(false)}
  //                       >
  //                         {child.label}
  //                       </Link>
  //                     );
  //                   })}
  //                 </div>
  //               ) : null}
  //             </li>
  //           );
  //         })}

  //         <li className="flex justify-center">
  //           <Button
  //             type="primary fill"
  //             text="Sign up"
  //             size={2}
  //             to="/sign-up"
  //             className="md:hidden inline-flex"
  //           />
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );
}

export default Navbar;
