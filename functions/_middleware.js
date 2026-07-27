// Redirect the temporary pages.dev domain (and www) to the canonical domain.
// Cloudflare Pages auto-detects functions/_middleware.js and runs it on every request.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (url.hostname === "plainworkflows.pages.dev" || url.hostname === "www.plainworkflows.com") {
    url.hostname = "plainworkflows.com";
    return Response.redirect(url.toString(), 301);
  }
  return context.next();
}
