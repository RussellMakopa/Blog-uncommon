import { subscribedData } from "../styled/subscribeform";

export function subscribeFunc(
  data: subscribedData,
  setLoading: (loading: boolean) => void,
  setIsSuccess: (isSuccess: boolean) => void,
  setMessage: (message: string) => void
) {
  const apiEndpoint = "/api/subscribe";
  setLoading(true);
  fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      setLoading(false);
      setIsSuccess(true);
      setMessage(response.message);
    })
    .catch((err) => {
      setLoading(false);
      setMessage(err);
    });
}
