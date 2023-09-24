import Script from "next/script";

export default function GoogleAnalytics({ tagId }: { tagId: string }) {
  if (process.env.NODE_ENV === "development") return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`} />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${tagId}');
          `}
      </Script>
    </>
  );
}
