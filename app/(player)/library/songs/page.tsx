"use client";
import React, { useState } from "react";
import SearchInput from "../../components/SearchInput";
import Music from "../../components/Music";
import { Music as MusicInterface } from "@/types";

export default function SongsPage() {
  const [songs, setSongs]: [MusicInterface[], Function] = useState([
      {
        song_id: 1,
        is_favorite: true,
        downloadable: false,
        song_art: "https://loremflickr.com/400/300/nature",
        title: "Fossa",
        duration: 399,
        artist: { name: "Daughter", artist_id: 1 },
        album: { name: "Not To Disappear", album_id: 1 },
      },
      {
        song_id: 2,
        is_favorite: false,
        downloadable: true,
        song_art: "https://loremflickr.com/400/300/music",
        title: "How",
        duration: 312,
        artist: { name: "Aurora", artist_id: 2 },
        album: { name: "A Different Kind of Human", album_id: 2 },
      },
      {
        song_id: 3,
        is_favorite: true,
        downloadable: false,
        song_art: "https://loremflickr.com/400/300/landscape",
        title: "Into the Wild",
        duration: 280,
        artist: { name: "Bon Iver", artist_id: 3 },
        album: { name: "22, A Million", album_id: 3 },
      },
      {
        song_id: 4,
        is_favorite: false,
        downloadable: true,
        song_art: "https://loremflickr.com/400/300/mountains",
        title: "Circles",
        duration: 198,
        artist: { name: "Post Malone", artist_id: 4 },
        album: { name: "Hollywood's Bleeding", album_id: 4 },
      },
      {
        song_id: 5,
        is_favorite: true,
        downloadable: false,
        song_art: "https://loremflickr.com/400/300/sea",
        title: "Night Owl",
        duration: 255,
        artist: { name: "Galimatias", artist_id: 5 },
        album: { name: "Renaissance Boy", album_id: 5 },
      },
      {
        song_id: 6,
        is_favorite: false,
        downloadable: true,
        song_art: "https://loremflickr.com/400/300/forest",
        title: "Skyline",
        duration: 220,
        artist: { name: "FKJ", artist_id: 6 },
        album: { name: "Just Piano", album_id: 6 },
      },
      {
        song_id: 7,
        is_favorite: true,
        downloadable: true,
        song_art: "https://loremflickr.com/400/300/city",
        title: "Alaska",
        duration: 204,
        artist: { name: "Maggie Rogers", artist_id: 7 },
        album: { name: "Heard It in a Past Life", album_id: 7 },
      },
      {
        song_id: 8,
        is_favorite: false,
        downloadable: false,
        song_art: "https://loremflickr.com/400/300/river",
        title: "Electric",
        duration: 299,
        artist: { name: "Alina Baraz", artist_id: 8 },
        album: { name: "The Color of You", album_id: 8 },
      },
      {
        song_id: 9,
        is_favorite: true,
        downloadable: true,
        song_art: "https://loremflickr.com/400/300/desert",
        title: "Breezeblocks",
        duration: 203,
        artist: { name: "Alt-J", artist_id: 9 },
        album: { name: "An Awesome Wave", album_id: 9 },
      },
      {
        song_id: 10,
        is_favorite: false,
        downloadable: false,
        song_art: "https://loremflickr.com/400/300/lake",
        title: "The Night We Met",
        duration: 232,
        artist: { name: "Lord Huron", artist_id: 10 },
        album: { name: "Strange Trails", album_id: 10 },
      }
  ]);
  return (
    <div>
      <div className="w-full border-b-2 p-3 flex justify-between">
        <h1 className="text-2xl">All songs</h1>
        <SearchInput />
      </div>
      <div className="w-full pt-5">
        {songs.map((song) => (
          <Music song={song} key={song.song_id} />
        ))}
      </div>
    </div>
  );
}
