"use client";
import {
  ArrowRightEndOnRectangleIcon,
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "./ui/dialog";

const Header = () => {
  const [IsNavOpen, setIsNavOpen] = useState(false);
  return (
    <header className="bg-bookingPrimary ">
      <nav
        className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className="-m-1.5 p-1.5 text-primary-foreground font-bold tracking-tight text-xl"
          >
            <span className="sr-only">JetSet-Stay!</span>
            JetSet-<span className="text-bookingPrimaryText">Stay!</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-foreground"
            onClick={() => {
              setIsNavOpen((open) => !open);
            }}
          >
            <span className="sr-only">Open main menu</span>
            {IsNavOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="links hidden lg:flex gap-4">
          <Link
            href="#"
            className="text-sm font-medium leading-6 text-primary-foreground"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium leading-6 text-primary-foreground"
          >
            Flights
          </Link>
          <Link
            href="#"
            className="text-sm font-medium leading-6 text-primary-foreground"
          >
            Car rentals
          </Link>
          <Link
            href="#"
            className="text-sm font-medium leading-6 text-primary-foreground"
          >
            Contact
          </Link>
        </div>
        <div className="login hidden lg:flex lg:flex-1 lg:  justify-end">
          <Link
            href="/"
            className="text-sm font-medium leading-6 text-primary-foreground"
          >
            Login
          </Link>
        </div>

        <Dialog
          open={IsNavOpen}
          onOpenChange={() => {
            setIsNavOpen((open) => !open);
          }}
        >
          <DialogOverlay className="lg:hidden bg-bookingPrimary sm:w-[20rem]  shadow-2xl shadow-slate-950/30 flex flex-col justify-start items-start px-4 py-8">
            <div className="links flex flex-col gap-2 w-full">
              <Link
                href="#"
                className="text-lg px-auto py-2 font-medium leading-6 text-primary-foreground flex justify-between"
              >
                About
                <ArrowRightIcon className="h-5 w-5 mr-4" />
              </Link>
              <Link
                href="#"
                className="text-lg px-auto py-2 font-medium leading-6 text-primary-foreground flex justify-between"
              >
                Flights
                <ArrowRightIcon className="h-5 w-5 mr-4" />
              </Link>
              <Link
                href="#"
                className="text-lg px-auto py-2 font-medium leading-6 text-primary-foreground flex justify-between"
              >
                Car rentals
                <ArrowRightIcon className="h-5 w-5 mr-4" />
              </Link>
              <Link
                href="#"
                className="text-lg px-auto py-2 font-medium leading-6 text-primary-foreground flex justify-between"
              >
                Contact
                <ArrowRightIcon className="h-5 w-5 mr-4" />
              </Link>
            </div>
          </DialogOverlay>
        </Dialog>
      </nav>
    </header>
  );
};

export default Header;
