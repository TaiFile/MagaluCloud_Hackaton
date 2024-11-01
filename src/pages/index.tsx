import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-center w-screen min-h-screen font-[family-name:var(--font-geist-sans)]`}
    >
      <h1>Hello MagaluCloud!</h1>
      <h2>Miranha is here, lets enjoy the night!</h2>
    </div>
  );
}
