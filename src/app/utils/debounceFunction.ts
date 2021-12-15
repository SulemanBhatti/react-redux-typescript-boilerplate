export function debounceFunction<T extends Function>(func: T, timeout = 300){
    let timer: ReturnType<typeof setTimeout>;
    const debounce = (...args: any[]) =>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(null, args);
        }, timeout);
    };
    return <T>(<any>debounce);
}