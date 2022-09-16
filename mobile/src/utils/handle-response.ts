export const handleResponse = <T>(response: Response): Promise<T> => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Failed to fetch games');
};
