"use client";

import Image from "next/image";
import { useState, type PointerEvent, type ReactNode } from "react";

function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const [transform, setTransform] = useState(
    "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
  );

  const [shine, setShine] = useState({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = x / rect.width;
    const percentY = y / rect.height;

    // Subtle but noticeable 3D movement
    const rotateY = (percentX - 0.5) * 10;
    const rotateX = (0.5 - percentY) * 10;

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(12px)`
    );

    setShine({
      x: percentX * 100,
      y: percentY * 100,
      opacity: 1,
    });
  };

  const handleLeave = () => {
    setTransform(
      "perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
    );

    setShine({
      x: 50,
      y: 50,
      opacity: 0,
    });
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] ${className}`}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{
        transform,
        transformStyle: "preserve-3d",
        transition:
          "transform 420ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 420ms ease",
        background: "rgba(255, 255, 255, 0.38)",
        backdropFilter: "blur(28px) saturate(150%)",
        WebkitBackdropFilter: "blur(28px) saturate(150%)",
        border: "1px solid rgba(255, 255, 255, 0.72)",
        boxShadow:
          "0 30px 80px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(255,255,255,0.35)",
      }}
    >
      {/* Moving glass reflection */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          opacity: shine.opacity,
          background: `radial-gradient(
            circle 180px at ${shine.x}% ${shine.y}%,
            rgba(255,255,255,0.62),
            rgba(255,255,255,0.20) 35%,
            transparent 72%
          )`,
          mixBlendMode: "screen",
          transition: "opacity 300ms ease",
        }}
      />

      {/* Glossy top reflection */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-1/2"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.55), rgba(255,255,255,0.08) 45%, transparent 70%)",
          opacity: 0.65,
        }}
      />

      {/* Glass edge highlight */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-[28px]"
        style={{
          boxShadow:
            "inset 1px 1px 0 rgba(255,255,255,0.85), inset -1px -1px 0 rgba(255,255,255,0.28)",
        }}
      />

      {/* Actual content */}
      <div
        className="relative z-30"
        style={{
          transform: "translateZ(20px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  

  return (
    <main className="min-h-screen bg-white text-[#1D1D1F]">

      {/* NAVBAR */}
      <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-32px)] max-w-6xl -translate-x-1/2">
        <GlassCard className="px-5 py-3">
          <div className="flex items-center justify-between">

            <a
              href="#top"
              className="text-lg font-semibold tracking-tight"
            >
              Rishitchawla
            </a>

            <div className="hidden items-center gap-8 text-sm font-medium md:flex">
              <a href="#work" className="transition-opacity hover:opacity-50">
                Work
              </a>

              <a
                href="#services"
                className="transition-opacity hover:opacity-50"
              >
                Services
              </a>

              <a
                href="#about"
                className="transition-opacity hover:opacity-50"
              >
                About
              </a>
            </div>

            <a
              href="#contact"
              className="rounded-full bg-[#1D1D1F] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              Let's Talk
            </a>

          </div>
        </GlassCard>
      </nav>


      {/* HERO */}
      <section
        id="top"
        className="flex min-h-screen items-center px-6 pb-20 pt-32 sm:px-10"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          {/* HERO TEXT */}
          <div>

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.14em] text-black/45">
              Video Editor · Startups & Growing Businesses
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Founder-led content.
              <br />
              Product-focused storytelling.
              <br />
              Edited to engage.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/55 sm:text-xl">
              I turn founder-led, product-focused content into engaging
              short-form & long-form videos for social media.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
<a
  href="#work"
  className="rounded-full px-7 py-4 text-[15px] font-medium text-[#1D1D1F] transition-all duration-300 hover:-translate-y-0.5"
  style={{
    background: "rgba(220, 225, 230, 0.55)",
    backdropFilter: "blur(18px) saturate(140%)",
    WebkitBackdropFilter: "blur(18px) saturate(140%)",
    border: "1px solid rgba(255,255,255,0.9)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.95), 0 8px 25px rgba(0,0,0,0.08)",
  }}
>
  View My Work
</a>

<a
  href="#contact"
  className="rounded-full px-7 py-4 text-[15px] font-medium text-[#1D1D1F] transition-all duration-300 hover:-translate-y-0.5"
  style={{
    background: "rgba(220, 225, 230, 0.38)",
    backdropFilter: "blur(18px) saturate(140%)",
    WebkitBackdropFilter: "blur(18px) saturate(140%)",
    border: "1px solid rgba(255,255,255,0.9)",
    boxShadow:
      "inset 0 1px 0 rgba(255,255,255,0.95), 0 8px 25px rgba(0,0,0,0.06)",
  }}
>
  Let's Work Together
</a>
              

              

            </div>

          </div>


          {/* PERSONAL GLASS CARD */}
          <div className="mx-auto w-full max-w-[430px]">

            <GlassCard className="p-3">

              <div className="overflow-hidden rounded-[25px]">

                {/* PHOTO */}
                <div className="relative aspect-[4/4.7] overflow-hidden rounded-[22px] bg-[#eeeeee]">

                  <Image
                    src="/rishit.jpg"
                    alt="Rishit Chawla - Video Editor"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 90vw, 430px"
                  />

                  {/* Photo glass overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-white/10" />

                  {/* Name over photo */}
                  <div className="absolute bottom-5 left-5 right-5">

                    <div className="flex items-end justify-between">

                      <div>
                        <p className="text-xl font-semibold tracking-tight text-white">
                          Rishit Chawla
                        </p>

                        <p className="mt-1 text-sm text-white/70">
                          Video Editor
                        </p>
                      </div>

                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                        2026
                      </span>

                    </div>

                  </div>

                </div>


                {/* ABOUT */}
                <div className="px-5 pb-5 pt-6">

                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/35">
                    A little about me
                  </p>

                  <p className="mt-3 max-w-sm text-[15px] leading-6 text-black/60">
                    I help startups turn ideas and products into engaging
                    videos.
                  </p>


                  {/* SPECIALTIES */}
                  <div className="mt-5 flex flex-wrap gap-2">

                    <span className="rounded-full border border-black/[0.07] bg-white/60 px-3 py-1.5 text-xs text-black/55">
                      Short-form
                    </span>

                    <span className="rounded-full border border-black/[0.07] bg-white/60 px-3 py-1.5 text-xs text-black/55">
                      Long-form
                    </span>

                    <span className="rounded-full border border-black/[0.07] bg-white/60 px-3 py-1.5 text-xs text-black/55">
                      Social Media
                    </span>

                  </div>

                </div>

              </div>

            </GlassCard>

          </div>

        </div>
      </section>


      {/* SELECTED WORK */}
      <section
        id="work"
        className="border-t border-black/[0.07] px-6 py-28 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">

          <div className="mb-14">

            <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-black/40">
              Selected Work
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
              Work built to
              <br />
              communicate.
            </h2>

          </div>


          


          {/* PROJECT GRID */}
          <div className="space-y-16">

  {/* PERSONAL BRAND */}
  <div>
    <h3 className="mb-6 text-2xl font-semibold tracking-tight">
      Personal Brand
    </h3>

    <div className="grid gap-6 md:grid-cols-3">
      {[1, 2, 3].map((project) => (
        <GlassCard
          key={`personal-${project}`}
          className="group cursor-pointer"
        >
          <div className="p-4">
            <div className="overflow-hidden rounded-2xl bg-black">
              <div className="aspect-[9/16]">
                <video
                  src={`/videos/personal-${project}.mp4`}
                  className="h-full w-full object-contain"
                  controls
                  preload="metadata"
                />
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-semibold tracking-tight">
                {[
                  "The Hidden Cost of Ad Usage",
                  "Why Movement Becomes Unpredictable",
                  "Making Audio Conversion Easy",
                ][project - 1]}
              </h3>

              <p className="mt-1 text-sm text-black/45">
                {[
                  "Editing · Storytelling · Motion",
                  "Editing · Educational · Motion",
                  "Editing · Product Education · Motion",
                ][project - 1]}
              </p>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  </div>

  {/* PRODUCT & PROMOTIONAL */}
  <div>
    <h3 className="mb-6 text-2xl font-semibold tracking-tight">
      Product & Promotional Content
    </h3>

    <div className="grid gap-6 md:grid-cols-3">
      {[1, 2, 3].map((project) => (
        <GlassCard
          key={`product-${project}`}
          className="group cursor-pointer"
        >
          <div className="p-4">
            <div className="overflow-hidden rounded-2xl bg-black">
              <div className="aspect-[9/16]">
                <video
                  src={`/videos/product-${project}.mp4`}
                  className="h-full w-full object-contain"
                  controls
                  preload="metadata"
                />
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-xl font-semibold tracking-tight">
                {[
                  "Before & After: Clearer Skin",
                  "The Fragrance That Stands Out",
                  "Glow That Speaks for Itself",
                ][project - 1]}
              </h3>

              <p className="mt-1 text-sm text-black/45">
                {[
                  "Product · Before & After · Ad",
                  "Product · Branding · Ad",
                  "Product · Beauty · Ad",
                ][project - 1]}
              </p>
            </div>
          </div>
        </GlassCard>
      ))}
    </div>
  </div>

</div>

        </div>
      </section>


      {/* SERVICES */}
<section
  id="services"
  className="border-t border-black/[0.07] px-6 py-28 sm:px-10"
>
  <div className="mx-auto max-w-6xl">
    <div className="mb-14">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-black/40">
        Services
      </p>

      <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-6xl">
        Video that makes
        <br />
        your business move.
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-3">
      <GlassCard className="p-8">
        <div className="flex min-h-[280px] flex-col justify-between">
          <span className="text-sm font-medium text-black/40">01</span>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Short-form Editing
            </h3>

            <p className="mt-3 text-sm leading-6 text-black/50">
              Reels, shorts and social-first videos built to hold attention
              and communicate your message quickly.
            </p>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="p-8">
        <div className="flex min-h-[280px] flex-col justify-between">
          <span className="text-sm font-medium text-black/40">02</span>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Long-form Editing
            </h3>

            <p className="mt-3 text-sm leading-6 text-black/50">
              YouTube and long-form content edited with clear structure,
              pacing and storytelling.
            </p>
          </div>
        </div>
      </GlassCard>

      <GlassCard className="p-8">
        <div className="flex min-h-[280px] flex-col justify-between">
          <span className="text-sm font-medium text-black/40">03</span>

          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Product & Promotional
            </h3>

            <p className="mt-3 text-sm leading-6 text-black/50">
              Product-focused videos and promotional content designed to
              showcase value and make products easier to understand.
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  </div>
</section>


    {/* ABOUT */}
<section
  id="about"
  className="border-t border-black/[0.07] px-6 py-28 sm:px-10"
>
  <div className="mx-auto max-w-6xl">

    <div className="flex flex-col gap-14 md:flex-row md:justify-between">

      {/* LEFT */}
      <div className="md:w-[35%]">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-black/40">
          About me
        </p>

        <p className="mt-6 text-2xl font-medium leading-9 tracking-tight">
          I edit with the viewer in mind.
        </p>
      </div>

      {/* RIGHT */}
      <div className="md:w-[55%]">
        <p className="text-lg leading-8 text-black/65 sm:text-xl">
          I’m Rishit Chawla, a video editor focused on startups and growing
          businesses.
        </p>

        <p className="mt-6 text-lg leading-8 text-black/50">
          I take raw ideas, footage and products and turn them into videos
          that are clear, engaging and built for modern social media.
        </p>

        <div className="mt-12 border-t border-black/10">

          <div className="flex items-center justify-between border-b border-black/10 py-6">
            <span className="text-sm text-black/40">01</span>
            <span className="text-base font-medium">Understand the idea</span>
          </div>

          <div className="flex items-center justify-between border-b border-black/10 py-6">
            <span className="text-sm text-black/40">02</span>
            <span className="text-base font-medium">Build the story</span>
          </div>

          <div className="flex items-center justify-between border-b border-black/10 py-6">
            <span className="text-sm text-black/40">03</span>
            <span className="text-base font-medium">Edit for attention</span>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-black/[0.07] px-6 py-32 sm:px-10"
      >
        <div className="mx-auto max-w-6xl">

          <GlassCard className="p-10 sm:p-16">

            <p className="text-sm font-medium uppercase tracking-[0.14em] text-black/40">
              Let's Build Something.
            </p>

            <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Good ideas deserve
<br />
good execution.
            </h2><p className="mt-6 max-w-2xl text-base leading-7 text-black/50 sm:text-lg">
  If you have footage, a concept, or simply a rough idea, let's turn it
  into something people want to watch.
</p>

            <a
              href="mailto:rishitchawla.rc67@gmail.com"
              className="mt-10 inline-flex rounded-full bg-[#1D1D1F] px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105"
            >
              Get in touch →
            </a>

          </GlassCard>

        </div>
      </section>


     {/* FOOTER */}
<footer className="border-t border-black/[0.07] px-6 py-8 sm:px-10">
  <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

    <div>
      <p className="text-sm font-semibold tracking-tight">
        Rishitchawla
      </p>

      <p className="mt-1 text-sm text-black/40">
        Video Editor for Startups & Growing Businesses
      </p>
    </div>

    <div className="flex flex-wrap items-center gap-5 text-sm text-black/50">
      <a
        href="#work"
        className="transition-colors hover:text-black"
      >
        Work
      </a>

      <a
        href="#services"
        className="transition-colors hover:text-black"
      >
        Services
      </a>

      <a
        href="#about"
        className="transition-colors hover:text-black"
      >
        About
      </a>

      <a
        href="#contact"
        className="transition-colors hover:text-black"
      >
        Contact
      </a>
    </div>

    <p className="text-sm text-black/35">
      © 2026
    </p>

  </div>
</footer>
    </main>
  );
}