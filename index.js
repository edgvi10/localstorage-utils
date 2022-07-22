const isJson = (str) => {
    try { JSON.parse(str); }
    catch (e) { return false; }
}

export default localstorage = {
    listAll: () => Object.keys(localStorage),
    getAll: () => localstorage.get(localstorage.listAll()),
    get: (key) => {
        if (Array.isArray(key)) {
            const object = {};
            for (const item of key) object[item] = localstorage.get(item);
            return object;
        } else if (typeof key === "string") {
            const value = localStorage.getItem(key);
            return (isJson(value)) ? JSON.parse(value) : value;
        }
    },
    save: (key, value) => {
        if (typeof key === "object")
            for (const item of Object.keys(key))
                localstorage.save(item, key[item]);
        else if (typeof key === "string")
            localStorage.setItem(key, (isJson(value)) ? JSON.stringify(value) : value);
    },
    remove: (key) => (typeof key === "string") ? localStorage.removeItem(key) : key.map(k => localstorage.remove(k)),
};