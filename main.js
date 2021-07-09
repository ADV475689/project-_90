function login(){

    player_1_username= document.getElementById("player1_login").value;
    player_2_username= document.getElementById("player2_login").value;

    localStorage.setItem("player1-username" , player_1_username);
    localStorage.setItem("player2-username" , player_2_username);

    window.location="gamepage_.html";
}