import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { locales } from "@/navigation";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "Boilerplate" });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
