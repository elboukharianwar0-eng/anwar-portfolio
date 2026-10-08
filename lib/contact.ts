import { contactEndpoint } from "@/lib/site";

export type ContactPayload = {
  name: string;
  email: string;
  description: string;
  budget: string;
};

export type ContactResult =
  | { status: "success" }
  | { status: "not-configured" }
  | { status: "error"; message: string };

export async function submitContact(
  payload: ContactPayload,
): Promise<ContactResult> {
  const endpoint = contactEndpoint || "/api/contact";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (response.status === 503) {
      return { status: "not-configured" };
    }

    if (!response.ok) {
      return {
        status: "error",
        message: "The message could not be sent. Please try again.",
      };
    }

    return { status: "success" };
  } catch {
    return {
      status: "error",
      message: "Network error. Please try again in a moment.",
    };
  }
}
