export async function fetchCars() {
  const { RAPID_API_KEY, RAPID_API_HOST, API_BASE_URL } = process.env;
  const headers = {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': RAPID_API_HOST,
  };

  const response = await fetch(`${API_BASE_URL}/cars?model=corolla`, {
    headers: headers,
  });

  const result = await response.json();

  return result;
}
