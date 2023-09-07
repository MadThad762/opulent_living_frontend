// example of using a loader function to fetch data from an API
export const loader: LoaderFunction = async (args) => {
  try {
    const { userId, getToken } = await getAuth(args);
    if (!userId) {
      return redirect('/sign-in');
    }

    const res = await fetch(`${process.env.BASE_URL}/properties`, {
      headers: {
        Authorization: `Bearer ${await getToken()}`,
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
