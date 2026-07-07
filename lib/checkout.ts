// Studio Copilot subscription checkout — talks to the control-plane Worker.
// Swap CONTROL_PLANE to https://api.bimopsstudio.com once the custom domain is wired.
export const CONTROL_PLANE = "https://studio-copilot-control-plane.weber-262.workers.dev";

// POST /checkout -> { url }. Redirect the browser to Stripe's hosted checkout.
export async function startCheckout(): Promise<void> {
  const res = await fetch(`${CONTROL_PLANE}/checkout`, { method: "POST" });
  const data = await res.json().catch(() => ({}));
  if (data && data.url) {
    window.location.href = data.url as string;
    return;
  }
  throw new Error((data && data.error) || "Could not start checkout. Please try again.");
}
