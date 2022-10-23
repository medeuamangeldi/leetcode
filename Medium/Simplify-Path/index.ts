function simplifyPath(path: string): string {
    
    const stack: string[] = [];
    let res: string = '/';

    const pathArr: string[] = path.split('/');

    for(let part of pathArr){
        
        if(part == ".."){
            if(stack.length != 0){
                stack.pop()
            }
        } else if(part == '.' || part.length == 0){
            continue
        } else {
            stack.push(part)
        }
    }

    res += stack.join('/')

    return res
};

console.log(simplifyPath("/home/"))