import type { MetadataRoute } from "next";

/**
 * Crawling policy. AI search/answer engines are explicitly allowed so the
 * site can be read, cited and recommended by ChatGPT, Perplexity, Claude,
 * Gemini, etc.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // AI crawlers (explicit allow)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "meta-externalagent", allow: "/" },
      { userAgent: "Bytespider", allow: "/" },
    ],
    sitemap: "https://gruponoix.com/sitemap.xml",
  };
}
