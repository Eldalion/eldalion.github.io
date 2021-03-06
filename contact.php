<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow:400,400i,700,700i" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Shadows+Into+Light" rel="stylesheet">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="css/font.css">
    <link rel="stylesheet" href="css/contact.css">
    <!-- FAVICON -->
    <link rel="icon" href="myfavicon.ico" type="image/x-icon"> 
    <link rel="shortcut icon" href="myfavicon.ico" type="image/x-icon">
    <title>Contact</title>
</head>
<body>
    <span class="tag_body bounce">&ltbody&gt</span>
    <span class="tag_body_close bounce">&lt/body&gt</span>
    <span class="tag_html_close bounce">&lt/html&gt</span>   
    <div id="particles-js"></div>
<!-- -------------------------- MENU -------------------------- -->    
    <div class="menu">
        <div class="logo"><span class="letter_f">F</span></div>
        <div class="navigation">
            <a href="index.html">
                <i class="icon-home"></i>
                <div class="text-home">Home</div>
            </a>
            <a href="about.html">
                <i class="icon-user-secret"></i>
                <div class="text-user-secret">About</div>
            </a>
            <a href="skills.html">
                <i class="icon-code"></i>
                <div class="text-code">Skills</div>
            </a>
            <a href="portfolio.html">
                <i class="icon-picture-o"></i>
                <div class="text-picture-o">My<br>Work</div>
            </a>
            <a href="contact.php">
                <i class="icon-mail"></i>
                <div class="text-mail">Contact</div>
            </a>
        </div>
        <div class="social_icons">
            <a href="https://github.com/Eldalion">
                <i class="icon-mark-github"></i>
            </a>
            <a href="#">
                <i class="icon-linkedin"></i>
            </a>
            <a href="#">
                <i class="icon-google-plus"></i>
            </a>
        </div>
    </div>
<!-- ----------------------- INTRODUCTION - FORM ----------------------- -->    
    <div class="introduction">
        <h1>
            <span>C</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span><span>&nbsp;</span><span>m</span><span>e</span>
        </h1>
        
        <form action="mailer.php" method="post">
            <input name="name" type="text" placeholder="Name" class="name" required>
            <input name="email" type="email" placeholder="Email" class="email" required> 
            <input name="subject" type="text" placeholder="Subject" class="subject" required>
            <textarea name="message" cols="30" rows="10" placeholder="Message" required></textarea>
            
            <?php
                
                if($_GET['success'] == 1) {
                    echo "<div class=\"success\">Sent !</div>";
                }
            
                if($_GET['success'] == -1) {
                    echo "<div class=\"success\">Error !</div>";
                }
            
            ?>

            <input type="submit" value="SEND" class="button bounce">
        </form>
        
        <span class="tag_h1">&lth1&gt</span>
        <span class="tag_h1_close">&lt/h1&gt</span>
    </div>
<!-- --------------------------- MAP --------------------------- --> 
    <div id="map"></div>
<!-- -------------------------- FOOTER -------------------------- -->     
    <div class="footer">  
        <span class="green">&lt</span>
        <span class="name">Frantisek Meciar, &copy; 2017</span>
        <span class="green">/&gt</span>
    </div>
    <a href="http://www.eldalion.com"><img src="img/blog.svg" alt="" class="blog"></a>
<!-- scripts -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="js/particles.js"></script>
    <script src="js/particle_settings.js"></script>
    <script src="js/map.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD-0e7Esjaw5yb9IOy3Ei1n93E4taTXTaU&callback=initMap"></script>
    <script src="js/app.js"></script>
</body>
</html>






















