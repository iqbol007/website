import { AxiosResponse } from "axios"
import { Dispatch } from "react"
import agent from "../../api"
import { getAccessToken } from "../../utils"
import { logout } from "../Users"
import {
    IcreatePostFailure,
    IcreatePostRequest,
    IcreatePostSuccess,
    IgetAllPostsFailure,
    IgetAllPostsRequest,
    IgetAllPostsSuccess,
    IgetPostByIdFailure,
    IgetPostByIdRequest,
    IgetPostByIdSuccess,
    IpostActions,
    IremovePostFailure,
    IremovePostRequest,
    IremovePostSuccess,
    IupdatePostFailure,
    IupdatePostRequest,
    IupdatePostSuccess,
    PostsActions,
    Ipost,
    IlikePostRequest,
    IlikePostSuccess,
    IlikePostFailure,
} from "./interface"
interface IPostsResponse {
    posts: Ipost[]

}

agent.interceptors.request.use((accepted) => {
    const token = getAccessToken()
    accepted.headers = { ...accepted.headers, 'Authorization': `Bearer ${token}` }
    return accepted
}, (rejrcted) => {
    console.log('rejrcted', rejrcted)
    return Promise.reject(rejrcted)
})
export const getAllPostsRequest = (): IgetAllPostsRequest => {
    return { type: PostsActions.GET_ALL_POSTS_REQUEST }
}
export const getAllPostsSuccess = (posts: Ipost[]): IgetAllPostsSuccess => {
    return { type: PostsActions.GET_ALL_POSTS_SUCCESS, payload: { posts } }
}
export const getAllPostsFailure = (error: Error | string | null): IgetAllPostsFailure => {
    return { type: PostsActions.GET_ALL_POSTS_FAILURE, payload: { error } }
}
export const getAllPosts = () => async (dispatch: Dispatch<IpostActions>) => {
    try {
        dispatch(getAllPostsRequest())
        const { data: { posts } }: AxiosResponse<IPostsResponse> = await agent.get('/posts/getAll')
        dispatch(getAllPostsSuccess(posts))
    } catch (error) {
        dispatch(getAllPostsFailure(error))
        checkUnauthorizedResponse(error, dispatch)
    }
}
export const createPostRequest = (): IcreatePostRequest => {
    return { type: PostsActions.CREATE_POST_REQUEST }
}
export const createPostSuccess = (post: Ipost): IcreatePostSuccess => {
    return { type: PostsActions.CREATE_POST_SUCCESS, payload: { post } }
}
export const createPostFailure = (error: null | string | Error): IcreatePostFailure => {
    return { type: PostsActions.CREATE_POST_FAILURE, payload: { error } }
}
export const createPost = (content: string, file: File | null) => async (dispatch: Dispatch<IpostActions>, getState: any) => {
    try {
        const { user } = getState().users
        dispatch(createPostRequest())
        const data = new FormData()
        data.append('content', content)
        data.append('owner_id', user.id)
        if (file) {
            data.append('post_media', file)
        }
        const response: AxiosResponse<Ipost> = await agent.post('/posts/createPost', data)
        dispatch(createPostSuccess(response.data))
    } catch (error) {
        dispatch(createPostFailure(error))
    }
}
export const updatePostRequest = (): IupdatePostRequest => {
    return { type: PostsActions.UPDATE_POST_REQUEST }
}
export const updatePostSuccess = (post: Ipost): IupdatePostSuccess => {
    return { type: PostsActions.UPDATE_POST_SUCCESS, payload: { post } }
}
export const updaatePostFailure = (error: Error | string | null): IupdatePostFailure => {
    return { type: PostsActions.UPDATE_POST_FAILURE, payload: { error } }
}
export const updatePost = (content: string, file: File) => async (dispatch: Dispatch<IpostActions>) => {
    try {
        dispatch(updatePostRequest())
        const data = new FormData()
        data.append('content', content)
        data.append('file', file)
        const response: AxiosResponse<Ipost> = await agent.post('/posts/update', { data })
        dispatch(updatePostSuccess(response.data))
    } catch (error) {
        dispatch(updaatePostFailure(error))
    }
}
export const getPostByIdRequest = (): IgetPostByIdRequest => {
    return { type: PostsActions.GET_POST_BY_ID_REQUEST }
}
export const getPostByIdSuccess = (post: Ipost): IgetPostByIdSuccess => {
    return { type: PostsActions.GET_POST_BY_ID_SUCCESS, payload: { post } }
}
export const getPostByIdFailure = (error: Error | string | null): IgetPostByIdFailure => {
    return { type: PostsActions.GET_POST_BY_ID_FAILURE, payload: { error } }
}
export const getPostById = (id: string | number) => async (dispatch: Dispatch<IpostActions>) => {
    try {
        dispatch(getPostByIdRequest())
        const response: AxiosResponse<Ipost> = await agent.get(`/getbyId?id=${id}`)
        dispatch(getPostByIdSuccess(response.data))
    } catch (error) {
        dispatch(getAllPostsFailure(error))
    }
}
export const removePostRequest = (): IremovePostRequest => {
    return { type: PostsActions.REMOVE_POST_REQUEST }
}
export const removePostSuccess = (id: string | number): IremovePostSuccess => {
    return { type: PostsActions.REMOVE_POST_SUCCESS, payload: { id } }
}
export const removePostFailure = (error: Error | string | null): IremovePostFailure => {
    return { type: PostsActions.REMOVE_POST_FAILURE, payload: { error } }
}
export const removePost = (id: number | string) => async (dispatch: Dispatch<IpostActions>) => {
    try {
        dispatch(removePostRequest())
        const response: AxiosResponse<any> = await agent.delete(`/posts/delete?id=${id}`)
        dispatch(removePostSuccess(response.data.id))
    } catch (error) {
        dispatch(removePostFailure(error))
    }
}
const checkUnauthorizedResponse = (error: any, dispatch: any) => {
    if (error.response.status === 401) {
        dispatch(logout())
    }
}
const postLikeRequest = (): IlikePostRequest => {
    return { type: PostsActions.POST_LIKE_REQUEST }
}
const postLikeSuccess = (post: Ipost): IlikePostSuccess => {
    return { type: PostsActions.POST_LIKE_SUCCESS, payload: { post } }
}
const postLikeFailure = (error: Error | string | null): IlikePostFailure => {
    return { type: PostsActions.POST_LIKE_FAILURE, payload: { error } }
}

export const postLike = (post_id: string | number) => async (dispatch: Dispatch<IpostActions>, getState: any) => {
    try {
        const { user: { id } } = getState().users
        dispatch(postLikeRequest())
        const { data }: AxiosResponse<Ipost> = await agent.post('/posts/like', { user_id: id, post_id })
        console.log(data)

        dispatch(postLikeSuccess(data))
    } catch (error) {
        dispatch(postLikeFailure(error))
    }
}