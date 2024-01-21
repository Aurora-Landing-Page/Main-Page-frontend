import React, { useEffect } from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function TabbedLayout({ navigation, setNavigation }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;
  const [currentPath, setCurrentPath] = useState(pathname);
  const [defaultidx, setDefaultIdx] = useState(0);
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    let hasTouchScreen = false;
    if ("maxTouchPoints" in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ("msMaxTouchPoints" in navigator) {
      hasTouchScreen = navigator.msMaxTouchPoints > 0;
    } else {
      const mQ = window.matchMedia && matchMedia("(pointer:coarse)");
      if (mQ && mQ.media === "(pointer:coarse)") {
        hasTouchScreen = !!mQ.matches;
      } else if ("orientation" in window) {
        hasTouchScreen = true; // deprecated, but good fallback
      } else {
        // Only as a last resort, fall back to user agent sniffing
        var UA = navigator.userAgent;
        hasTouchScreen =
          /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
          /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
      }
    }
    if (hasTouchScreen) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("Desktop");
    }
  }, []);

  function handleChange(idx) {
    const path = navigation[idx].id;

    setCurrentPath(path);
    setDefaultIdx(idx);

    navigate(path);
    // setNavigation(path);
  }

  return deviceType !== "Mobile" ? (
    <>
      <Tab.Group defaultIndex={0} onChange={(idx) => {}} vertical>
        <div className="hidden sm:flex h-[100vh] w-72 bg-black opacity-[75%] absolute left-0">

        </div>
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 h-full   ">
          <div className="flex items-center justify-start gap-2  pt-10 pb-4">
            <img src="./logo.png" className="h-12 w-12 z-10"></img>
            <div className="text-xl z-10">Aurora 2024</div>
          </div>
          <nav
            aria-label="Sidebar"
            className="sticky  divide-y divide-gray-300  flex items-start "
          >
            <div className=" space-y-1 pb-8 ">
              {navigation && navigation.length > 0 && (
                <Tab.List className="space-y-2">
                  {navigation.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <Tab
                        key={index + 10}
                        className={({ selected }) =>
                          clsx(
                            selected
                              ? " text-brand-600  dark:text-brand-500"
                              : "text-gray-500 hover:text-brand-300 dark:hover:text-brand-400",
                            "group flex items-center px-3 py-2 text-sm font-medium rounded-md w-full "
                          )
                        }
                      >
                        {({ selected }) => (
                          <span className="truncate flex items-center">
                            <Icon
                              className={clsx(
                                selected
                                  ? "text-brand-700"
                                  : " group-hover:text-black dark:group-hover:text-white text-brand-500",
                                "flex-shrink-0 mr-3 h-6 w-6"
                              )}
                            />
                            <p className="linksText">{item.name}</p>
                          </span>
                        )}
                      </Tab>
                    );
                  })}
                </Tab.List>
              )}
            </div>
          </nav>
        </aside>
        <Tab.Panels className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          {navigation.map((panel, index) => {
            return <Tab.Panel key={index}>{panel.component}</Tab.Panel>;
          })}
        </Tab.Panels>
      </Tab.Group>
    </>
  ) : (
    <>
      <Tab.Group
        defaultIndex={0}
        onChange={(idx) => {
          handleChange(idx);
        }}
      >
        <div className="w-full">
          <section
            id="bottom-navigation"
            className="block fixed inset-x-0 bottom-0 z-10"
          >
            <div id="tabs" className="">
              {navigation && navigation.length > 0 && (
                <Tab.List className="flex flex-row">
                  {navigation.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <>
                        <Tab
                          key={index}
                          className="dark:bg-black bg-slate-200 flex flex-grow"
                        >
                          {({ selected }) => (
                            <span className="w-full focus:text-teal-500 hover:text-teal-500 justify-center  text-center pt-2 pb-1">
                              <Icon
                                className={
                                  selected
                                    ? "inline-block pb-1 text-brand-800 h-9 w-9"
                                    : "inline-block pb-1 dark:text-white text-gray-800 h-9 w-9"
                                }
                              />
                            </span>
                          )}
                        </Tab>
                      </>
                    );
                  })}
                </Tab.List>
              )}
            </div>
          </section>
        </div>
        <Tab.Panels className="">
          {navigation.map((panel, index) => {
            return <Tab.Panel key={index}>{panel.component}</Tab.Panel>;
          })}
        </Tab.Panels>
      </Tab.Group>
    </>
  );
}
