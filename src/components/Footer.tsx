import InstaIcon from "@/public/icons/insta.svg";
import XIcon from "@/public/icons/x-social.svg";
import TikTokIcon from "@/public/icons/tiktok.svg";
import YoutubeIcon from "@/public/icons/youtube.svg";
import { TIMEOUT } from "dns";

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-black py-5 text-white/60">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <p className="text-center">
            @ 2024 Your Company, Inc. All rights reserved
          </p>
          <ul className="flex justify-center gap-2.5">
            <li>
              <XIcon />
            </li>
            <li>
              <InstaIcon />
            </li>
            <li>
              <TikTokIcon />
            </li>
            <li>
              <YoutubeIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
