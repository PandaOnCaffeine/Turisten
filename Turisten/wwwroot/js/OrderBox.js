
function test() {
    alert("Test");
};

function Margherita(){
    let maindiv = document.getElementById("test")
    maindiv.innerHTML = "<iframe class=\"Box\" id=\"orderBox\" src=@Url.Action(\"OrderBox\", \"Home\")\" frameBorder=\"0\"></iframe>";
}