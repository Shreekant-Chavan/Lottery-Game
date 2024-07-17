function genTickets (n) {
    let arr = new Array(n);
    for (let i=0; i<n; i++) {
        arr [i] = Math.floor(Math.random() * 10);
    }

    return arr;
}


function sum (add) {
    return add.reduce((sum, val) => sum + val, 0);
} 


export {genTickets, sum};