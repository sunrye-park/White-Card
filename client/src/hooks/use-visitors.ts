import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";

// Only need to create visitors, no reading needed for this frontend
export function useTrackVisitor() {
  return useMutation({
    mutationFn: async () => {
      const res = await fetch(api.visitors.record.path, {
        method: api.visitors.record.method,
        headers: { "Content-Type": "application/json" },
        // Send user agent implicitly, or explicit empty body as schema permits
        body: JSON.stringify({ userAgent: navigator.userAgent }),
        credentials: "include",
      });
      
      if (!res.ok) {
        // Silent failure is acceptable for analytics
        console.error("Failed to track visitor");
        return null;
      }
      return api.visitors.record.responses[201].parse(await res.json());
    },
  });
}
