export const setData= (name, data) => {
    window.sessionStorage.setItem(`${name}`, JSON.stringify(data));
    
}

export const getData = (name) => {
    const data = window.sessionStorage.getItem(`${name}`);
    return data? JSON.parse(data) : null;
};