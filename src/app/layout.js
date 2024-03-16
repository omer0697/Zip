import { Inter } from "next/font/google";
import "./globals.css";
import WhatsApp from "./components/WhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Зип пакеты с бегунком",
  description: "Мы предлагаем: зип пакеты с бегунком, оптовые зип лок пакеты, пакеты для вальбериса, пакеты для WB, пакеты для Ozon, матовые, Прозрачный",
  keywords: "зип пакеты с бегунком, оптовые зип лок пакеты, пакеты для вальбериса, пакеты для WB, пакеты для Ozon, матовые, Прозрачный"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <WhatsApp />
      </body>
    </html>
  );
}
