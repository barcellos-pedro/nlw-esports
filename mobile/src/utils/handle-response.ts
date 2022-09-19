export const handleResponse = <T>(
  response: Response,
  errorMessage: string = 'Failed to fetch'
): Promise<T> => {
  if (response.ok) {
    return response.json();
  }
  throw new Error(errorMessage);
};
