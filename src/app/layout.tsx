import type { Metadata } from "next";

export const metadata: Metadata = {
  // title: "Czytam przed seksem - Hubert Pajączkowski",
  // keywords:
  //   "książki, literatura, inspiracje, czytanie, seks, przed seksem, instagram, edukator seksualny, czytam przed seksem, pozytywna seksualność, przemiany ról płciowych, różne modele związków, trendy, dzieciństwo i dojrzewanie, Hubert Pajączkowski",
  // description:
  //   "Odwiedź oficjalną stronę 'Czytam Przed Seksem'. Znajdziesz tu inspiracje literackie na wyjątkowe chwile. Edukator seksualny - zajrzyj na nasz Instagram!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
