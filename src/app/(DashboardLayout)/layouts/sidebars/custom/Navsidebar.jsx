/*  https://codesandbox.io/p/sandbox/react-minimal-side-navigation-example-y299d*/

/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import Icon from "awesome-react-icons";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import Image from "next/image";
import fingerprint from "@/../public/images/logos/fingerprint-logo.jpg";
const NavSidebar = () => {

    const location = usePathname();
    const currentURL = location.slice(0, location.lastIndexOf('/'));
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <React.Fragment>
            {/* Sidebar Overlay */}
            <div
                onClick={() => setIsSidebarOpen(false)}
                className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${isSidebarOpen ? "block" : "hidden"
                    }`}
            />

            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
                    }`}
            >
                <div style={{ minHeight: "16vh" , backgroundColor: "rgba(0,0,2,1)" }}>
                    <Image src={fingerprint} alt="logo" height={120} width={120} title="logo"   />
                </div>

                {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
                <Navigation
                    activeItemId={location.pathname}
                    onSelect={({ itemId }) => {
                        // history.push(itemId);
                        window.location.href = itemId;
                    }}                   
                    items={[
                        {
                            title: "Dashboard",
                            itemId: "/",
                            // Optional
                            elemBefore: () => <Icon name="coffee" />
                        },
                        {
                            title: "Students",
                            itemId: "#",
                            elemBefore: () => <Icon name="user" />,
                            subNav: [
                                {
                                    title: "Register",
                                    itemId: "/ui/student/student-register",
                                    // Optional
                                    elemBefore: () => <Icon name="cloud-snow" />
                                },
                                {
                                    title: "List of Students",
                                    itemId: "/ui/student/student-list",
                                    elemBefore: () => <Icon name="coffee" />
                                }
                            ]
                        },
                        {
                            title: "Users",
                            itemId: "#",
                            elemBefore: () => <Icon name="user" />,
                            subNav: [
                                {
                                    title: "Register",
                                    itemId: "/ui/forms",
                                    // Optional
                                    elemBefore: () => <Icon name="calendar" />
                                },
                                {
                                    title: "List Of Users",
                                    itemId: "/ui/badges",
                                    // Optional
                                    elemBefore: () => <Icon name="calendar" />
                                }

                            ]
                        }
                    ]}
                />

                <div className="absolute bottom-0 w-full my-8">
                    <Navigation
                        activeItemId={location.pathname}
                        items={[
                            {
                                title: "Settings",
                                itemId: "/ui/cards",
                                elemBefore: () => <Icon name="activity" />
                            }
                        ]}
                        onSelect={({ itemId }) => {
                            /// history.push(itemId);
                            window.location.href = itemId;
                        }}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};


export default NavSidebar;