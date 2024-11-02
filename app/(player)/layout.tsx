"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import styles from "./styles/player.module.css";
import NowPlaying from "./components/NowPlaying";
import { useMediaQuery } from "@/hooks/use-media-query";

function PlayerLayout({ children }: { children: React.ReactNode }) {
  const isLargeScreen = useMediaQuery("(min-width: 700px)");
  const [showNowPlaying, setShowNowPlaying] = useState(true);

  return (
    <div className={`${styles.player} `}>
      {isLargeScreen ? <Sidenav /> : ""}

      <div
        className={`${styles.player__main} thin-scrollbar ${
          showNowPlaying ? styles["player__main--with-now-playing"] : ""
        }`}
      >
        <Header />
        <div className="container">{children}</div>
        {showNowPlaying ? <NowPlaying /> : ""}
      </div>
    </div>
  );
}

export default PlayerLayout;
