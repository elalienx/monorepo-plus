export const metadata = {
  title: "Inbox",
  description: "Generated by create-nx-workspace",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
