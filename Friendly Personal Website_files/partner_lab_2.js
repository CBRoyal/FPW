function renderWebpage()
{
    let greetingLabel= document.getElementById("greeting");
    let userName= document.getElementById("name");
    greetingLabel.textContent= "Hello " + userName.value;
    let messageLabel= document.getElementById("welcome_message");
    let welcomeMessage= document.getElementById("message");
    messageLabel.textContent= welcomeMessage.value;
    let pageColor= document.getElementById("color_list");
    let customPage= document.getElementById("personal_greeting_webpage");
    customPage.style.backgroundColor= pageColor.value;
}
function addItem()
{
    var listItem= document.getElementById("to_do_list_item");
    const toDoListItem= document.createElement('li');
    const toDoListItemText= document.createTextNode(listItem.value);
    toDoListItem.appendChild(toDoListItemText);
    document.getElementById("to_do_list").appendChild(toDoListItem);
}
