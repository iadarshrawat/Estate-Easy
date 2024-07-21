import apiRequest from "./apiRequest"

export const singlePageLoader = async ({request, params})=>{
    const res = await apiRequest(`/posts/${params.id}`);
    console.log(res);
    return res.data;
}
export const listPageLoader = async ({request, params})=>{
    console.log(request);
    const query = request.url.split("?")[1];
    const res = await apiRequest(`/posts?${query}`);
    return res.data;
}