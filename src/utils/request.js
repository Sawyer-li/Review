const headers = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json"
})
function get(url){
    return fetch(url, {
        method: 'GET',
        headers: headers
    }).then(response => {
        return handleResponse(url, response);
    }).catch(err=>{
        console.error(`Request failed. Url = ${url}. Message=${err}`);
        return Promise.reject({
            error:{
                message: "Request failed due to request failed."
            }
        })
    })
}
function post(url, data){
    return fetch(url, {
        method: 'GET',
        headers: headers,
        body: data
    }).then(response => {
        handleResponse(url, response);
    }).catch(err=>{
        console.error(`Request failed. Url = ${url}. Message=${err}`);
        return Promise.reject({
            error:{
                message: "Request failed due to request failed."
            }
        })
    })
}
function handleResponse(url, response){
    if(response.status === 200){
        return response.json();
    }else{
        console.error(`Request failed. Url = ${url}`);
        return Promise.reject({
            error:{
                message: "Request failed due to server error"
            }
        })

    }
}
export {get, post}