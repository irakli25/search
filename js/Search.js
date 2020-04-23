class Search {
            
    constructor (){
        this.messages = new Array();
        this.getList(); 
        this.word = ""; // search word
    }

    set setWord (word){
        this.word = word;
    }
    
    
    messagesPush = (item) => {
        let message = item.commit.message;
        this.messages.push(message);
    }


    async getList(){
        // let url = "json/commits.json"; // offline
        let url = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits"; // online
        let response = await fetch(url); // response
        
        let obj = await response.json();
        obj.map(this.messagesPush); // fill array

        this.done(); 
    }

    draw = (item) => {
        let pos = item.indexOf(this.word);
        if (pos >= 0){ // if exist
            let ul = document.getElementById("messageList");
            let li = document.createElement("li");
            let text = document.createTextNode(item);
            li.appendChild(text);
            ul.appendChild(li);
        } 
    }

    filterMessage = () => {
        let ul = document.getElementById("messageList");
        ul.innerHTML = "";
        if(this.word !="")
            this.messages.filter(this.draw);
    }

    done = () =>{
        let search = document.getElementById("search");
        search.classList.add("show"); // show input
    }


}