import { cToastify } from "@/Shared";

interface GetCallProps {
  endpoint: string;
  data?: any;
  body?: any;
  customConfig?: any;
  query?: object;
  revalidate?: number;
  cache?: any;
}
let apiUrl = "https://example.com/api";

export async function getCall(
  endpoint: GetCallProps["endpoint"],
  {
    data: data = {},
    body: body,
    query: query = {},
    // revalidate will be after 4 min
    revalidate: revalidate = 240,
    cache: cache = "default",
    ...customConfig
  }: GetCallProps["body"] & {
    data?: any;
    customConfig?: any;
    query?: object;
    revalidate?: number;
    cache?: any;
  }
) {
  const headers = { "Content-Type": "application/json" };
  try {
    let url = `${apiUrl}/${endpoint}`;

    if (data?.id) {
      url = `${url}/${data.id}`;
    }

    const searchParams = Object?.keys?.(query)?.length
      ? new URLSearchParams(query)?.toString()
      : null;

    if (searchParams) {
      url = `${url}?${searchParams}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        ...headers,
        ...customConfig.headers,
      },
      next: {
        revalidate: revalidate,
      },
      ...(cache && { cache }),
    });
    const result = await response.json();
    // console.log(data);
    if (!response.ok) {
      cToastify({
        type: "error",
        message: "Something went wrong at Brands Data",
      });
      throw new Error(response.statusText);
    }

    if (response.ok) {
      return result;
    }
  } catch (error) {
    //console.log(error);
    return Promise.reject(error);
  }
}
