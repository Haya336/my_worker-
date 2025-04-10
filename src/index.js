export default {
  async fetch(request) {
    return new Response("Hello from GitHub + Cloudflare!", {
      headers: { "Content-Type": "text/plain" },
    });
  }
}
