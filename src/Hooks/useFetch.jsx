import { useState, useEffect } from "react";

function useFetch(initialItems, URL) {
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [controller, setController] = useState(null);

  useEffect(() => {
    // const abortController = new AbortController();
    // setController(abortController);
    setLoading(true);
    fetch(URL) //, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((err) => {
        // if (err.name === "AbortError") {
        //   console.log("Request cancelled");
        // }
        setError(err);
      })
      .finally(() => setLoading(false));

    // return () => abortController.abort();
  }, [URL]);

  // const handleCancelRequest = () => {
  //   if (controller) {
  //     controller.abort();
  //     setError("Request cancelled");
  //   }
  //};

  return { items, loading, error }; //handleCancelRequest
}

export { useFetch };
