import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingResumeButton from "@/components/FloatingResumeButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://nehruperumalla.com"),
  title: {
    default: "Nehru Perumalla | Senior Full Stack .NET Developer",
    template: "%s | Nehru Perumalla",
  },
  description:
    "Senior Full Stack .NET Developer (8+ years) building secure enterprise platforms with .NET 6/7/8, microservices, Azure/AWS, Kubernetes, Kafka/RabbitMQ, and applied AI/ML.",
  keywords: [
    "Senior .NET Developer",
    "Full Stack .NET",
    ".NET 8",
    "ASP.NET Core",
    "Microservices",
    "Azure",
    "AWS",
    "Kubernetes",
    "Docker",
    "Kafka",
    "RabbitMQ",
    "React",
    "Next.js",
    "OAuth2",
    "JWT",
    "Applied AI",
    "Machine Learning",
  ],
  authors: [{ name: "Nehru Perumalla" }],
  openGraph: {
    title: "Nehru Perumalla | Senior Full Stack .NET Developer",
    description:
      "Enterprise .NET + cloud + microservices + applied AI/ML. Clean case studies, ATS-friendly resume, and contact.",
    url: "https://nehruperumalla.com",
    siteName: "Nehru P Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nehru P Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nehru P | Senior Full Stack .NET Developer",
    description:
      "Enterprise .NET + cloud + microservices + applied AI/ML. Clean case studies and ATS resume.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-5 py-10">{children}</main>
        <Footer />
        <FloatingResumeButton />
      </body>
    </html>
  );
}
