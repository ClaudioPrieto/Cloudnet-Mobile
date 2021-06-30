export async function getArticlesFromApi(){
    fetch('http://cloudnet-backoffice.tk:8000/api/devices/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        //   'Access-Control-Request-Method': 'GET',
        //   'Access-Control-Request-Headers': 'Content-Type, Accept',
        //   'Origin': 'http://localhost:19006',
        }}
    )
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data =>{
        console.log(data);
        return data;
    }).catch(err => {
    console.log("Error Reading data " + err);
    });
}
async function getArticlesFromApi_async(){
    return fetch('http://cloudnet-backoffice.tk:8000/api/devices/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        //   'Content-Type': 'application/json',
        //   'Access-Control-Request-Method': 'GET',
        //   'Access-Control-Request-Headers': 'Content-Type, Accept',
        //   'Origin': 'http://localhost:19006',
        }}
    )
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data =>{
        console.log(data);
        return data;
    }).catch(err => {
    console.log("Error Reading data " + err);
    });
}

export async function match_device(device){
    getArticlesFromApi_async().then(device_list =>{

        console.log(device_list);
        if (device_list != []) {
            device_list.forEach(item => {
                if (item.name == device) {
                    return item;
                }
            });
        }
        return null;
    })
}

const api_calls = {getArticlesFromApi, match_device}

export default api_calls;