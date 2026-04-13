setTimeout(() => {
    console.log("buoc 1 hoan tat");
    setTimeout(() => {
        console.log("buoc 2 hoan tat");
        setTimeout(() => {
            console.log("buoc 3 hoan tat");
        }, 1000);
    }, 1000);
}, 1000);