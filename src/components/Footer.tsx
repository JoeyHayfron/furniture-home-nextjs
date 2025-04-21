"use client";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import InstagramIcon from "@/app/images/socials-instagram.svg";
import FacebookIcon from "@/app/images/socials-facebook.svg";
import TwitterIcon from "@/app/images/socials-twitter.svg";
import Copyright from "@/app/images/copyright.svg";
import Image from "next/image";

const Footer = () => {
  const [newsletterEmail, setNewsLetterEmail] = useState("");

  return (
    <footer className="border-t-[1px] border-t-[#dddddd] w-full mt-[100px] flex flex-col items-center">
      <div
        id="wrapper"
        className="w-[80%] flex flex-wrap justify-between mt-[55px]"
      >
        <div id="links-section" className="flex flex-wrap gap-[100px]">
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold">Company</h2>
            <Link href="/" className="text-[#6c757d]">
              Home
            </Link>
            <Link href="/" className="text-[#6c757d]">
              Features
            </Link>
            <Link href="/" className="text-[#6c757d]">
              Pricing
            </Link>
            <Link href="/" className="text-[#6c757d]">
              {`FAQ's`}
            </Link>
            <Link href="/" className="text-[#6c757d]">
              About
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold">Resources</h2>
            <Link href="/" className="text-[#6c757d]">
              Get started
            </Link>
            <Link href="/" className="text-[#6c757d]">
              Learn
            </Link>
            <Link href="/" className="text-[#6c757d]">
              Case Studies
            </Link>
            <Link href="/" className="text-[#6c757d]">
              {`FAQ's`}
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold">Community</h2>
            <Link href="/" className="text-[#6c757d]">
              Discord
            </Link>
            <Link href="/" className="text-[#6c757d]">
              Events
            </Link>
            <Link href="/" className="text-[#6c757d]">
              {`FAQ's`}
            </Link>
            <Link href="/" className="text-[#6c757d]">
              Blog
            </Link>
          </div>
        </div>
        <div
          id="subscribe-to-newsletter-section"
          className="flex flex-col gap-[8px]"
        >
          <h2 className="font-semibold">Subscribe to our newsletter</h2>
          <p className="w-[300px] text-[#6c757d] text-[12px] font-[family-name:var(--font-poppins)]">
            Join our community to get weekly updates and unique gifts every
            friday
          </p>
          <form className="flex flex-col gap-[8px]">
            <input
              className="h-[40px] rounded-[6px] w-[100%] border-[1px] px-[12px] text-[14px] text-[#6c757d] focus:outline-none focus:border-[#3c82f6]"
              value={newsletterEmail}
              onChange={(e) => setNewsLetterEmail(e.target.value)}
              placeholder="Email address"
            />
            <Button customStyle={{ width: "50%" }}>Subscribe</Button>
          </form>
        </div>
      </div>

      <div
        id="socials-section"
        className="w-full flex flex-wrap justify-between border-t-[1px] border-t-[#dddddd] px-[10%] py-[32px] mt-[76px]"
      >
        <p className="text-[#6c757d] text-[12px] font-[family-name:var(--font-poppins)]">
          <Image src={Copyright} alt="copyright" className="inline mr-5" />
          2022 Company, Inc. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link href="/">
            <Image src={TwitterIcon} alt="socials-twitter" />
          </Link>
          <Link href="/">
            <Image src={InstagramIcon} alt="socials-instagram" />
          </Link>
          <Link href="/">
            <Image src={FacebookIcon} alt="socials-facebook" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
