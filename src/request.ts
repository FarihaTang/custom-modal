export function getUser() {
    const endpoint = "https://jsonplaceholder.typicode.com/users/1";
    return wrapPromise(fetchData(endpoint));
}
async function fetchData(url: string) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (err: any) {
        throw new Error(err);
    }
}
function wrapPromise(promise: any) {
    let status = "pending";
    let result: any;
    let suspender = promise.then(
        (r: any) => {
            status = "success";
            result = r;
        },
        (e: any) => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else {
                return result;
            }
        },
    };
}
