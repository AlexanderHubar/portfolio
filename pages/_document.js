import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" className="page">
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="favicon.ico" rel="shortcut icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="page__body">
          <style jsx global>{`
            :root {
              --primary: hsl(54, 100%, 48%);
              --accents-8: hsl(0, 0%, 98%);
              --accents-7: hsl(0, 0%, 92%);
              --accents-6: hsl(0, 0%, 60%);
              --accents-5: hsl(0, 0%, 53%);
              --accents-4: hsl(0, 0%, 40%);
              --accents-3: hsl(0, 0%, 27%);
              --accents-2: hsl(0, 0%, 20%);
              --accents-1: hsl(0, 0%, 7%);
              --accents-0: hsl(0, 0%, 0%);
              --box-shadow-primary: hsla(54, 100%, 48%, 50%);
              --box-shadow-secondary: hsla(0, 0%, 98%, 50%);
              --radius: 5px;
              --fz-md: 1rem;
              --fz-sm: 0.875rem;
            }

            *,
            *::before,
            *::after {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            ul {
              list-style: none;
            }

            .page {
              font-size: 16px;
            }

            .page__container {
              width: 100%;
              max-width: calc(1140px + 1rem);
              margin: 0 auto;
              padding: 0 1rem;
            }

            .page__body {
              font-family: "Inter", sans-serif;
              font-size: var(--fz-md);
              color: var(--accents-8);
            }
          `}</style>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
