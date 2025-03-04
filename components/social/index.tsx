import { BsGithub, BsTwitterX } from "react-icons/bs";

import { FaProductHunt } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

export default function () {
  return (
    <div className="mx-auto flex flex-row items-center">
      <a
        href="https://twitter.com/shawn_sg45849"
        target="_blank"
        className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
      >
        <BsTwitterX className="text-lg" />
      </a>
    </div>
  );
}
