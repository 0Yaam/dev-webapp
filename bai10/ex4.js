function getUser(userId, callback) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => callback(null, data))
        .catch((error) => console.error('Error:', error));
}

getUser(1,function(error, user) {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('User:', user.name);
    }
});
