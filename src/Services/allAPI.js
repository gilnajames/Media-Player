import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

// to upload a new video
export const uploadAllVedio = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}vedio`, reqBody);
}

// to get all videos alrady inserted

export const getAllVedios = async () => {
    return await commonAPI('GET', `${serverURL}vedio`, "")
}
//to delete a specfic vedio
export const deleteVedio = async (id) => {
    return await commonAPI('DELETE', `${serverURL}vedio/${id}`, {})
}

// add details to watch history
export const addToHistory = async (vedioDetails) => {
    return await commonAPI('POST', `${serverURL}history`, vedioDetails)
}
//get all details of watch history
export const getHistory = async () => {
    return await commonAPI('GET', `${serverURL}history`, "")
}
// to delete specfic history
export const deleteHistory = async (id) => {
    return await commonAPI('DELETE', `${serverURL}history/${id}`, {})
}

//  add category  
export const addCategory = async (reqBody) => {
    return await commonAPI('POST', `${serverURL}category`, reqBody);

}

//get all category
export const getAllCategory = async () => {
    return await commonAPI('GET', `${serverURL}category`, "")
}
//delete category
export const deleteCategory = async (id) => {
    return await commonAPI('DELETE', `${serverURL}category/${id}`, {})
}

//get vedio details with vedio id
export const getVedioDetails = async (id) => {
    return await commonAPI(`GET`, `${serverURL}vedio/${id}`, "")

}


