//this is a variation on our module theme
(() => {
    let vue_vm = new Vue({
        //link Vue to an element in our HTML
        // el: "#app",
        data: {
            message: "Hello from Vue!",
            gotcha: "BOO! Scared You! HAHA!",
            collection: [
                { name: "Justin", role: "coordinator", nickname: "Nitsuj" },
                { name: "John", role: "prof", nickname: "Chill Guy" },
                { name: "Joe", role: "prof", nickname: "Teddy Bear" },
                { name: "Pan", role: "prof", nickname: "Spiderpan" },
                { name: "Trevor", role: "prof", nickname: "TERVOR" }

            ]
        },
        methods: {
            logClicked() {
                console.log("clicked on a prof name");
            },
            clickHeader() {
                console.log("You done clicked on the header");
            },
            click() {
                console.log("click,click,click,click");
            }
        }
    }).$mount("#app"); //also connects vue to your wrapper in HTML - does the same thing as el: "#app"
})();