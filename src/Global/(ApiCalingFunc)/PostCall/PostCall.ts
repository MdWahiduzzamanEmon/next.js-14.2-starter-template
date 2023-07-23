import { cToastify } from "@/Shared";

interface PostCallProps {
  endpoint: string;
  body: any;
  customConfig?: any;
}

let apiUrl ="https://example.com/api";

export async function postCall(
  endpoint: PostCallProps["endpoint"],
  { body: body, ...customConfig }: PostCallProps["body"] & { customConfig?: any }
) {
  const headers = { "Content-Type": "application/json" };
  try {
    let url = `${apiUrl}/${endpoint}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...headers,
        ...customConfig.headers,
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
