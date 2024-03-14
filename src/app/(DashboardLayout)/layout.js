'use client'
import React from "react";
import { Container } from "reactstrap";
import Header from "./layouts/header/Header";
import AuthContextProvider from '../context/AuthContextProvider';
// import Sidebar from "./layouts/sidebars/vertical/Sidebar";

import NavSideBar from "./layouts/sidebars/custom/Navsidebar";
import { useAuthContext } from "../context/AuthContextProvider";
import { useRouter } from "next/navigation";
import {
    getAuth
} from 'firebase/auth';
import firebase_app from '../firebase/config';

const auth = getAuth(firebase_app);
const FullLayout = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const { user , setUser } = useAuthContext();
  const router = useRouter();

  if (user == null) router.push("/pages/signin");
  const showMobilemenu = () => {
    setOpen(!open);
  };

  return (
    <main>
      <div className="pageWrapper d-md-block d-lg-flex">
        {/******** Sidebar **********/}
        <aside
          className={`sidebarArea shadow bg-white ${
            !open ? "" : "showSidebar"
          }`}
        >
          <NavSideBar showMobilemenu={() => showMobilemenu()} />
        </aside>
        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <Header showMobmenu={() => showMobilemenu()} />

          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <div><AuthContextProvider>{children}</AuthContextProvider></div>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayout;
