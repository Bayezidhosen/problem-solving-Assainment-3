function filterActiveUsers(users) {
    // write your code here

    if (!Array.isArray(users) || users.length === 0) {
        return "Invalid";
    }

  
    for (let user of users) {
        if (
            typeof user !== "object" ||
            user === null ||
            !("isActive" in user)
        ) {
            return "Invalid";
        }
    }

  
    return users.filter(user => user.isActive === true);
}

