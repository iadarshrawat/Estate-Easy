import apiRequest from "./apiRequest"

export const singlePageLoader = async ({request, params})=>{
    const res = await apiRequest(`/posts/${params.id}`);
    console.log(res);
    return res.data;
}