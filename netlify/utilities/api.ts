const API_TOKEN = process.env.IMGCHEST_API_TOKEN;
const API_BASE_URL = process.env.IMGCHEST_API_BASE_URL;
const USERNAME = process.env.IMGCHEST_USERNAME;


const options = {
    headers: {
        Authorization: `Bearer ${API_TOKEN}`,
    },
};

const fetchData = async (endpoint: string) => {
    const url = new URL(endpoint, API_BASE_URL);

    try {
        const response = await fetch(url, options);

        if (!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);

        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const getAllPosts = () => fetchData(`user/${USERNAME}/posts`);
export const getPostById = async (id: string) => {
    const post = await fetchData(`post/${id}`);

    post.data.images.sort((a: { position: number }, b: { position: number }) => a.position - b.position);

    return post;
};