import "./globals.css";


export const metadata = {
  title: "dogmatch",
  description: "Matched with dog breed",
};

export default function App({ Component, pageProps }) {
  return (
    <html lang="en">

        <Component {...pageProps} />


    </html>
  );
}
