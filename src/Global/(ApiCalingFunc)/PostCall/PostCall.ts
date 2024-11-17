import { cToastify } from "@/Shared";

interface PostCallProps {
  endpoint: string;
  body: Record<string, unknown>;
  customConfig?: {
    headers?: Record<string, string>;
  };
}

const apiUrl = "https://example.com/api";

export async function postCall(
  endpoint: PostCallProps["endpoint"],
  {
    body: body,
    ...customConfig
  }: PostCallProps["body"] & { customConfig?: PostCallProps["customConfig"] },
) {
  const headers = { "Content-Type": "application/json" };
  try {
    const url = `${apiUrl}/${endpoint}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...headers,
        ...(customConfig?.headers || {}),
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    // console.log(data);
    if (!response.ok) {
      cToastify({
        type: "error",
        message: "Something went wrong at Brands Data",
      });
    }
    if (response.ok) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (error) {
    //console.log(error);
    return Promise.reject(error);
  }
}
