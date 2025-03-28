const textarea = document.querySelector("#textarea");
const reset_textarea = document.querySelector("#reset_textarea");

// this function will run every time change in the textarea value, this will help in showing real time markdown converting
textarea.addEventListener("input",(e)=>{
    
    // debugging purpose
    console.log(e.target.value);
    const markdownSyntex = e.target.value;

    document.getElementById('content').innerHTML =
          marked.parse(`${markdownSyntex}`);
    
})


// this function will reset already written code
reset_textarea.addEventListener("click",(e)=>{
    textarea.value = ""
    document.getElementById('content').innerHTML = "";

    // debugging purpose
    // console.log(textarea.value);
    
})