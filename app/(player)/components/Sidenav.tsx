"use client";
import {
  LucideMusic2,
  MicVocal,
  Disc2,
  Radio,
  Podcast,
  Settings,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/player.module.css";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import SearchInput from "./SearchInput";

export default function Sidenav() {
  const [sidenavLinks, _] = useState([
    {
      title: "",
      links: [
        {
          name: "explore",
          link: "explore",
          icon: <LucideMusic2 size={17} color="hsl(var(--primary))" />,
        },
        {
          name: "podcast",
          link: "podcast",
          icon: <Podcast size={17} color="hsl(var(--primary))" />,
        },
        {
          name: "radio",
          link: "radio",
          icon: <Radio size={17} color="hsl(var(--primary))" />,
        },
      ],
    },
    {
      title: "library",
      links: [
        {
          name: "all songs",
          link: "/library/songs",
          icon: <LucideMusic2 size={17} color="hsl(var(--primary))" />,
        },
        {
          name: "artist",
          link: "/library/artist",
          icon: <MicVocal size={17} color="hsl(var(--primary))" />,
        },
        {
          name: "album",
          link: "/library/album",
          icon: <Disc2 size={17} color="hsl(var(--primary))" />,
        },
      ],
    },
    {
      title: "playlist",
      links: [
        { name: "Astral traveling", link: "/playlist/1", icon: undefined },
        { name: "Driving vocals", link: "/playlist/2", icon: undefined },
        { name: "Nostalgic Journeys", link: "/playlist/3", icon: undefined },
        {
          name: "A Playlist for Every Occasion",

          link: "/playlist/4",
          icon: undefined,
        },
        { name: "Music that Heals", link: "/playlist/5", icon: undefined },
        { name: "Airplane Mode", link: "/playlist/6", icon: undefined },
      ],
    },
  ]);
  const [sideNavIsOpen, setSideNavIsOpen] = useState(false);
  return (
    <div
      className={styles.player__sidenav__wrapper}
    >
      <div className={`${styles.player__sidenav} thin-scrollbar`}>
        <div className={`${styles.player__sidenav__logo} thin-scrollbar mb-5 m-1`}>
          <Logo />
        </div>

        <div
          className={`${styles.player__sidenav__section} mb-5 m-1 ${styles.player__sidenav__search}`}
        >
          <div className={`${styles.player__sidenav__section_title} mb-1`}>
            Search
          </div>
          <div className="ml-1.5">
            <SearchInput />
          </div>
        </div>

        {sidenavLinks.map((section, index) => (
          <div className={styles.player__sidenav__section} key={index}>
            <div className={styles.player__sidenav__section_title}>
              {section.title}
            </div>
            <div className={styles.player__sidenav__section_links}>
              {section.links.map((link, i) => (
                <Button
                  size={"sm"}
                  key={i}
                  variant={"ghost"}
                  className="pl-1"
                  asChild
                >
                  <Link
                    href={link.link}
                    className={styles.player__sidenav__section_link}
                  >
                    {link.icon ? <div>{link?.icon}</div> : ""}
                    <div>{link.name}</div>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        ))}
        <Button size={"sm"} variant={"ghost"} asChild className="mt-auto pl-1">
          <Link
            href="/settings"
            className={styles.player__sidenav__section_link}
          >
            <div>
              <Settings />
            </div>
            <div className="text-lg">Settings</div>
          </Link>
        </Button>
        <div className="text-xs my-4 font-sans">
          Copyright <strong className="text-base"> ©</strong>: 2024 Oludare
          Theo. All rights reserved
        </div>
      </div>
    </div>
  );
}
