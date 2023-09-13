// example of using a loader function to fetch data from an API
export const loader: LoaderFunction = async (args) => {
  try {
    const { userId, getToken, sessionId } = await getAuth(args);

    if (!userId) {
      return null;
    }

    const token = await getToken();

    const res = await fetch(`${process.env.BASE_URL}/properties`, {
      headers: {
        authorization: `${token}`,
        sessionId: `${sessionId}`,
      },
    });

    if (!res.ok) {
      console.error(`An error occurred: ${res.statusText}`);
      return null;
    }

    return json(await res.json());
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
};
