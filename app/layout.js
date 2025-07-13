import "./globals.css";
import { Roboto } from "next/font/google";
import { Work_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Sumit Technical | Learn Web Development",
    template: "%s | Sumit Technical",
  },
  description:
    "Free tutorials on React.js, Next.js, and web development by Sumit Technical.",
  keywords: ["React", "Next.js", "Web Development", "Sumit Technical"],
  icons: {
    icon: "/images/kody.ico"
  },
  metadataBase: new URL("https://sumittechical.com"),
  openGraph: {
    title: "Sumit Technical",
    description: "Join the best web dev tutorials!",
    url: "https://yourdomain.com",
    siteName: "Sumit Technical",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sumit Technical Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Technical",
    description: "Learn Web Dev from scratch with Sumit Technical!",
    creator: "@sumittechnical",
    images: ["/og-image.png"],
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto"
});

const robotoWeight = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-weight"
});

const workSans = Work_Sans(
  {
    subsets: ["latin"],
    variable: "--font-work-sans",
    weight: "600"
  }
)

function RootLayout({ children }) {

  return (
    <html>
      <body className={`${roboto.variable} ${workSans.variable} ${robotoWeight.variable}`}>
        {children}
      </body>
    </html>
  );
};
export default RootLayout;