const options = {
    headers: {
        Authorization: `Bearer ${process.env.IMGCHEST_API_TOKEN}`,
    },
};

const fetchData = async (endpoint: string) => {
    const url = new URL(endpoint, process.env.IMGCHEST_API_BASE_URL as string);

    try {
        const response = await fetch(url, options);

        if (!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);

        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const getAllPosts = () => fetchData(`user/${process.env.IMGCHEST_USERNAME}/posts`);
export const getPostById = (id: number) => fetchData(`post/${id}`);