import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

function MySocial() {
  return (
    <div className="w-80 h-[450px] border border-black dark:border-white mt-7 mx-auto rounded-2xl overflow-hidden">
      <div className="relative w-full h-[300px]  rounded-2xl overflow-hidden">
        <Image
          fill
          objectFit="cover"
          src={"me.jpg"}
          alt="Front-End Developer"
        />
      </div>
      <div className="mt-2 flex flex-col gap-y-2 items-center">
        <h3 className="text-lg">Parsa Dehghan Pour</h3>
        <h2 className="text-sm font-bold">Front-End Developer</h2>
      </div>
      <ul className="flex justify-around mt-4">
        <li>
          <Link
            href={"https://www.instagram.com/parsa_dehghanpour_dv"}
            target="_blank"
          >
            <InstagramLogoIcon className="w-10 h-10" />
          </Link>
        </li>
        <li>
          <Link
            href={
              "http://linkedin.com/in/parsa-dehghan-pour-farashah-85ab04250"
            }
            target="_blank"
          >
            <LinkedInLogoIcon className="w-10 h-10" />
          </Link>
        </li>
        <li>
          <Link href={"http://github.com/parsa-farshah"} target="_blank">
            <GitHubLogoIcon className="w-10 h-10" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MySocial;
