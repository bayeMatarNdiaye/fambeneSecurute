export function authorizeRequest(request: Request) {
  const adminKey = process.env.ADMIN_DASHBOARD_KEY;
  if (!adminKey) return false;

  const headerKey = request.headers.get("x-admin-key");
  const queryKey = new URL(request.url).searchParams.get("key");

  return headerKey === adminKey || queryKey === adminKey;
}




