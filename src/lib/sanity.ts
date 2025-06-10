import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "loiab2wq", // 🟡 from sanity.json or sanity manage page
  dataset: "production", // 🔴 or your dataset
  useCdn: true, // ✅ true for caching
  apiVersion: "2025-6-9",
});
