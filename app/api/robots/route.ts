export async function GET() {
  const robots = `# Robots.txt for Metabolic Health Authority
User-agent: *
Allow: /

# Disallow API routes
Disallow: /api/

# Sitemap
Sitemap: https://metabolicscience.org/api/sitemap
`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
