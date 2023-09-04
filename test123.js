const obj = {
    name: "Saif",
    run: function (name) {
        console.log(this);
    }
}

const obj1 = {
    name: "Saif",
    run: () => {
        //var self=this
        const t = () => {
            console.log(this);
        }
        t();
    }
}
console.log(obj1.run());