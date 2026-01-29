import "./globals.css";

export const metadata = {
  title: "JerseySingles — Jersey-first • UK-wide",
  description: "A Jersey-first dating experience with stronger safety and a calmer vibe.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
