import { useEffect } from "react";

function SEO({
  title,
  description,
  canonical,
  image = "/og-image.jpg",
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, content) => {
      if (!content) return;

      let element = document.querySelector(
        `meta[name="${name}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      if (!content) return;

      let element = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const setCanonical = (url) => {
      let element = document.querySelector(
        'link[rel="canonical"]'
      );

      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", "canonical");
        document.head.appendChild(element);
      }

      element.setAttribute("href", url);
    };

    setMeta("description", description);

    setProperty("og:type", "website");
    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:image", image);

    setProperty("twitter:card", "summary_large_image");
    setProperty("twitter:title", title);
    setProperty("twitter:description", description);
    setProperty("twitter:image", image);

    if (canonical) {
      setCanonical(canonical);
      setProperty("og:url", canonical);
    }
  }, [title, description, canonical, image]);

  return null;
}

export default SEO;