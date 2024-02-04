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

  return (
    <>
      <Tab.Group defaultIndex={0} onChange={(idx) => { }} vertical>
        <div className="h-[25vh]  flex justify-center z-[9] lg:h-full w-full lg:w-80 bg-black opacity-50  sm:opacity-[75%] fixed left-0 ">

        </div>
        <aside className="sm:py-6 px-2 sm:px-[25vw] lg:py-0 lg:px-6 lg:col-span-3 fixed  z-10 flex flex-col items-center justify-center sm:flex sm:justify-start    ">
          <a className="flex items-center justify-start gap-2 pt-6  sm:pt-10 pb-4" href="/">

            <img src="./logo.png" className="h-12 w-12 z-10"></img>
            <div className="text-xl z-10">Aurora 2024</div>
          </a>
          <nav
            aria-label="Sidebar"
            className="sticky   divide-y divide-gray-300  flex items-start "
          >
            <div className=" space-y-1 pb-8">
              {navigation && navigation.length > 0 && (
                <Tab.List className="grid grid-cols-2   lg:grid-cols-1   sm:space-y-2">
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
                            "group  flex items-center px-3 py-2 tetx-xs sm:text-sm lg:text-sm sm:font-medium rounded-md  "
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
                                "flex-shrink-0 sm:mr-3 mr-1 h-5 w-5  sm:h-6 sm:w-6"
                              )}
                            />
                            <p className="linksText text-[1rem]">{item.name}</p>
                          </span>
                        )}
                      </Tab>
                    );
                  })}
                </Tab.List>
              )}
            </div>
          </nav>

          {/* <div className="mt-[45vh] hidden lg:block" >
            <div className="text-base">
              For any queries, contact:
            </div>
            <div >
              Mrigank Shukla - <a href="tel:8224094514" className="font-extralight">
                8224094514
              </a>
            </div>
            <div>
              Divyansh Pathak - <a href="tel:9560421964" className="font-extralight">
              9560421964
              </a>
            </div>

          </div> */}
        </aside>

        <Tab.Panels className="space-y-6 flex w-full items-center justify-center sm:px-6 lg:px-0 lg:col-span-9 pt-[25vh] sm:pt-0">
          {navigation.map((panel, index) => {
            return <Tab.Panel className="flex w-full items-center justify-center relative left-6 sm:left-3 lg:left-[20vw] bottom-6" key={index}>{panel.component}</Tab.Panel>
          })}
        </Tab.Panels>

      </Tab.Group>
    </>

  );
}
