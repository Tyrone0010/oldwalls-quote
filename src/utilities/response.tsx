
export const handleResponse = (response:any, onSuccess:any, onFailure:any) => {
    if(response.status === 200){
        return onSuccess(response.data);
    } else{
        return onFailure({ success: false, errorMessage: response.payload.message });
    }
};
