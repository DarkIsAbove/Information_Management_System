function validator(valid,check) {
    if (!check) return {message: "no parameter given", isSuccess: false};

    const validKeys = Object.keys(valid);
    const keys = Object.keys(check);

    for (let i = 0;i < keys.length;i++) {
        const key = keys[i];
        if (!validKeys.includes(key)) return {message: `${key} is not a valid parameter.`, isSuccess: false};
        if (typeof check[key] !== valid[key].type) return {message: `given ${key} is not a valid type.`, isSuccess: false};
    }

    for (let i = 0;i < validKeys.length;i++) {
        const key = validKeys[i];
        if (valid[key].required && !keys.includes(key)) return {message: `${key} is required.`, isSuccess: false};
    }

    return {message: "Success!", isSuccess: true};
}

export default validator;