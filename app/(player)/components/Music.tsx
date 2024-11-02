import { CloudDownload, Ellipsis, Heart } from "lucide-react";
import React from "react";
import { Music as MusicInterface } from "@/types";

export default function Music({ song }: { song: MusicInterface }) {
  return (
    <div className="flex justify-start items-center hover:bg-secondary  px-3 py-2 rounded-md h-16 transition-all">
      <div className="flex gap-4 items-center w-2/5">
        <div>
          <Heart className="cursor-pointer " />
        </div>
          <img
            className="w-10 h-10 object-cover rounded-lg"
            src={song.song_art}
            alt={song.title}
          />
        <div className="">{song.title}</div>
      </div>
      <div className="flex gap-10 items-center flex-1">
        <div className="cursor-pointer hover:font-bold">{song.artist.name}</div>
        <div className="cursor-pointer hover:font-bold">{song.album.name}</div>
      </div>
      <div className="flex gap-4 w-20 justify-self-end">
        <div>
          <CloudDownload />
        </div>
        <div>
          <Ellipsis />
        </div>
      </div>
    </div>
  );
}
