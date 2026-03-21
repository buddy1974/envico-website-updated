import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Envico Supported Living",
  description: "Photos of Bishops House supported living accommodation in Hayes, Middlesex.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <GalleryClient />
      <Footer />
    </>
  );
}
