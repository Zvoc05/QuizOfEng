<?php
// Initialize the session
session_start();
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
    header("location: login.php");
    exit;
}
?>
 
 <!DOCTYPE html>
<html lang="en">
<head>
<link rel="icon" type="image/x-icon" href="slike/fav.ico">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">

    <meta charset="UTF-8">
    <title>EasyLearn</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="stilstr.css">
    <style>
        body { font: 14px sans-serif;}
        img {
    display: block;
    margin: 0 auto;
    text-align: center;
    padding-top: 2%;
    padding-bottom: 1%;
}

.my {
    text-align:center;


}
.gumbi{
    text-align:end;
    padding-right: 1.5%;
}


    </style>
</head>
<body>
<img src="slike/Logo.png" alt="a">


                <p class="my">Zdravo, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>. Pripremi se za učenje!</p>


                <p class="gumbi">

                </p>

               <nav class="navbar navbar-expand-lg navbar-light bg-info navbar-dark" style="margin-top:2%; text-align: center;">

               <a class="nav-link" href="login.php"style="margin-right:1%;">Naslovna</a>



  <a class="nav-link" href="/zavrsni_rad/O-nama/index.html" style="margin-right:1%;">O nama</a>


  </nav>

                <h1 style="margin-top: 7%;     font-family: 'Bebas Neue', sans-serif;     font-size:600%;">Izaberi jezik</h1>



<div class="kontenjer">
    <a class="englink" href="kvizeng/index.html">
                <div  class="divjezik" style="margin-top:80px; width: 300px">
                <br>
                <p style="padding:10px; font-size:50px;">
                  Engleski
                </p>
                <img src="slike/pngegg.png" alt="" height="150px" style="margin-bottom:20px;">
                <br></a>
</div>


</div>

                <p style="padding-top: 20%; text-align:right; padding-right:1%; margin-bottom: 1%;">
                    <a href="reset-password.php" class="btn btn-warning btn-sm custom-btn">Ponovno postavi lozinku</a>
                    <a href="logout.php" class="btn btn-danger ml-3 btn-sm custom-btn">Odjavi se</a>
                    </p>

                    <div class="footer">
                        <p></p>
                        <p style="padding-top:2%"></p>
                        <a style="color:aliceblue;font-size: large;font-family:sans-serif;">Kontaktiraj nas:</a>
                        <br>
                        <a style="color:aliceblue;font-size: large;font-family:sans-serif;">tel: </a><a class="inf" href="tel:099-853-8355">+385 99-853-8355</a>
                        <br>
                        
                       <a style="color:aliceblue;font-size: large;font-family:sans-serif;">email: </a><a class="inf" href="mailto: begiczvonimir1@gmail.com">begiczvonimir1@gmail.com</a>
                    </div>
</body>
</html>
