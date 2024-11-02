"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import styles from "../styles/nowPlaying.module.css";
import {
  Pause,
  Play,
  Repeat,
  Repeat1,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeOffIcon,
} from "lucide-react";
import { VolumeSlider } from "./VolumeSlider";
import { NowPlayingTrack } from "./NowPlayingTrack";
import { MediaPlayer } from "dashjs";

export default function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lastVolumeLevel, setLastVolumeLevel] = useState(0.5);
  const [volumeLevel, setVolumeLevel] = useState(1);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [songDuration, setSongDuration] = useState("0:00");
  const [percentagePlayed, setPercentagePlayed] = useState(0.1);
  const [nowPlaying, setNowPlaying]: [HTMLAudioElement, Function] = useState(
    document.createElement("audio")
  );

  function formatTime(seconds: number): string {
    let formattedTime = new Date(seconds * 1000).toISOString();
    if (seconds < 3600) {
      formattedTime = formattedTime.slice(14, 19);
    } else {
      formattedTime = formattedTime.slice(11, 19);
    }
    return formattedTime;
  }
  useEffect(() => {
    const player = MediaPlayer().create();
    player.extend(
      'RequestModifier',
      () => {
        return {
          modifyRequestHeader: function (xhr: any) {
            xhr.setRequestHeader(
              'Authorization',
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImlhdCI6MTczMDIzMzg1NCwiZXhwIjozNDYwNDY3NzEwfQ.ztXzqNqgvwRwHI95I3idRM-FahixjF6ShujHKkbVY4k',
            );
            return xhr;
          },
        };
      },
      true,
    );
    player.initialize(
      nowPlaying,
      "http://127.0.0.1:2000/api/stream/song/--xy/output.mpd",
      true
    );
    player.on(MediaPlayer.events.BUFFER_LOADED, () => {
      const bufferLength = player.getBufferLength("audio");
      console.log("Buffered length:", bufferLength, "seconds");
  });
  player.on(MediaPlayer.events.BUFFER_LEVEL_UPDATED, () => {
    console.log("[BUFFER_LEVEL_UPDATED] - ", player.getBufferLength("audio"))
  })
    // if (nowPlaying && nowPlaying.canPlayType("audio/mpeg")) {
    //   nowPlaying.setAttribute("src", "/Neptune.mp3");
    // }
    console.log("adding event");
    nowPlaying.addEventListener("timeupdate", () => {
      setCurrentTime(formatTime(nowPlaying.currentTime));
      setPercentagePlayed((nowPlaying.currentTime / nowPlaying.duration) * 100);
    });
    nowPlaying.addEventListener("canplay", () => {
      setSongDuration(formatTime(nowPlaying.duration));
    });
    nowPlaying.addEventListener("ended", () => {
      setIsPlaying(false);
    });
    return () => {
      nowPlaying.removeEventListener("timeupdate", () => {});
      nowPlaying.removeEventListener("canplay", () => {});
      nowPlaying.removeEventListener("ended", () => {});
    };
  }, []);
  useEffect(() => {
    if (isPlaying) {
      nowPlaying.play();
    } else {
      nowPlaying.pause();
    }
  }, [isPlaying]);
  function mute() {
    if (!nowPlaying.muted) {
      nowPlaying.muted = true;
      setLastVolumeLevel(volumeLevel);
      setVolumeLevel(0);
    }
  }
  function maxVolume() {
    console.log("maxing", " nowPlaying.muted =>", nowPlaying.muted);
    if (nowPlaying.muted) {
      nowPlaying.muted = false;
      setVolumeLevel(lastVolumeLevel);
      nowPlaying.volume = lastVolumeLevel;
    } else {
      setVolumeLevel(1);
      nowPlaying.volume = 1;
    }
  }
  function next() {}
  function prev() {}

  function seek(vl: number[]) {
    let ratioSeeked = vl[0] / 1000000;
    let timeSeeked = ratioSeeked * nowPlaying.duration;
    nowPlaying.currentTime = timeSeeked;
  }
  function changeVolume(vl: number[]) {
    let newVolume = vl[0];
    if (nowPlaying.muted && newVolume > 0) {
      nowPlaying.muted = false;
    }
    setVolumeLevel(newVolume);

    nowPlaying.volume = newVolume;
  }

  return (
    <div className={styles["now-playing__wrapper"]}>
      <div className={styles["now-playing__track"]}>
        <NowPlayingTrack
          className={cn("w-full")}
          max={1000000}
          // step={1}
          value={[percentagePlayed * 10000]}
          onValueChange={seek}
        />
      </div>
      <div className={styles["now-playing__components"]}>
        <div className={styles["now-playing__song-details"]}>
          <img
            className="w-10 h-10 object-cover"
            src={"/album-art.jpg"}
            alt="song-art"
          />
          <div className="flex flex-col gap-1 items-center">
            <div className="text-sm">
              <span>Daughter</span>
              <span> - </span>
              <span className=""> Fossa </span>
            </div>
            <div className="text-sm">Not To Disappear</div>
          </div>
        </div>
        <div className={styles["now-playing__controls__wrapper"]}>
          <div className={styles["now-playing__controls"]}>
            <div className={`${styles["now-playing__components__icon"]}`}>
              <Shuffle size={"1em"} color="hsl(var(--muted))" />
            </div>

            <div className={`${styles["now-playing__components__icon"]}`}>
              <SkipBack size={"1.7em"} />
            </div>
            <div
              className={`${styles["now-playing__components__icon"]} ${styles.musicP}`}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={"1.7em"} /> : <Play size={"1.7em"} />}
            </div>
            <div className={`${styles["now-playing__components__icon"]}`}>
              <SkipForward size={"1.7em"} />
            </div>
            <div className={`${styles["now-playing__components__icon"]}`}>
              <Repeat size={"1em"} color="hsl(var(--muted))" />
            </div>
            <div className={`${styles["now-playing__components__icon"]}`}>
              {/* <Repeat1 size={"1em"} color="hsl(var(--muted))" /> */}
            </div>
          </div>
          <div className="flex gap-2 hidden w-full">
            <div className="font-mono text-xs">{currentTime}</div>
            <NowPlayingTrack
              className={cn("w-full")}
              max={1000000}
              value={[percentagePlayed * 10000]}
              onValueChange={seek}
            />
            <div className="font-mono text-xs">{songDuration}</div>
          </div>
        </div>
        <div className={styles["now-playing__volume-control"]}>
          <div
            className={`${styles["now-playing__components__icon"]}`}
            onClick={mute}
          >
            <VolumeOffIcon size={"1em"}></VolumeOffIcon>
          </div>
          <VolumeSlider
            className={cn("w-full")}
            max={1}
            step={0.02}
            value={[volumeLevel]}
            onValueChange={changeVolume}
          />
          <div className={`${styles["now-playing__components__icon"]}`}>
            <Volume2 size={"1em"} onClick={maxVolume}></Volume2>
          </div>
        </div>
      </div>

      <div className="font-mono text-xs absolute top-2 left-2">
        {currentTime}
      </div>
      <div className="font-mono text-xs absolute top-2 right-2">
        {songDuration}
      </div>
    </div>
  );
}
