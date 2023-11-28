"use client"
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import React from "react";
import Notfound from "../images/404.png"
import Testimonials from "@/components/Testimonials";

const NotFound = () => {
  return (
    <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-32">
       <Testimonials
      className="mt-24 sm:mt-32 lg:mt-40"
      client={{
        name: "Image",
        logo: Notfound
      }}
      style={{ borderRadius: "4px" }}
    >
 I think you're lost
      </Testimonials>
      <FadeIn className="flex flex-col items-center">
        {/* <p className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          Sorry, we could ont find the page you are looking for.
        </p> */}
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          Go to the home page
        </Link>
      </FadeIn>
    </Container>
  );
};

export default NotFound;
