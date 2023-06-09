
export const urlUsersApi = "http://localhost:3002/users"
export const socketURL = "http://localhost:3002"

export const getUser = async (user_id:string) => {
    try{
        const response = await fetch(`${urlUsersApi}?user_id=${user_id}`,{ 
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
            }  
        })
        const result = (await response.json());
        return result;
    }
    catch{
        return "error getting user"
    }
}

export const getLadeboard = async() =>{
    try{
        const response = await fetch(`${urlUsersApi}?ladeboard=string`,{ 
            method: "GET", 
            headers: {
                "Content-Type": "application/json",
            }  
        })
        const result = (await response.json());
        return result;
    }
    catch{
        return "error getting ladeboard"
    }
}

