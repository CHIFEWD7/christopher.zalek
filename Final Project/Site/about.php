<?php include 'validation.php';?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Gogobones</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->
        <link rel="shortcut icon" type="image/ico" href="img/favicon.ico" />

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <script src="js/vendor/modernizr-2.8.3.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
        <div class="site">

            <header class="north clearfix">
                <a href="index.html">
                        <span class="logo">Gogobones</span>
                </a>
                <a href="#" class="hamburger-icon">
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
                </a>
                <nav class="main-navigation clearfix">
                    <ul>
                        <li><b><a href="roll.html">Roll</a></b></li>
                        <li><b><a href="about.php">About</a></b></li>
                    </ul>
                </nav>
            </header><!-- /.north -->

            <section class="banner clearfix">
                <div class="wrapper">
                    <img src="img/ggb-banner.png" alt="banner" height="193"/>
                </div>
            </section>

            <section class="double-column clearfix">
                <section class="west clearfix">
                    <div class="west-inner">
                        <h1>About</h1>
                        <ul>
                            <li><a href="#about-gogobones">About Gogobones</a></li>
                            <li><a href="#about-chris">About Chris Zalek</a></li>
                            <li><a href="#contact-us">Contact Us</a></li>
                        </ul>
                        <h2 id="about-gogobones">About Gogobones</h2>
                            <img class="full-width" src="img/dice.png" alt="dice" />
                            <p>In all honesty, we don’t believe that Gogobones could match the actual experience of throwing dice. Aside from the excitement built through pre-emptive rattling and the unique sound of each cast, we know that gamers have often tailored their art of “throwing bones” into personal rituals... be that through using a favorite set of dice, employing unique body mechanics and/or shouting a colorful soliloquy. These expressions are something that we would never want to replace.</p>
 
                            <p>Gogobones was created as an answer to the need for making dice rolling available to roleplaying and board game sessions with remote players. While there are some solutions out there already, we wanted to simply focus on the ability to set up and roll in an environment that could be shared online. We also thought the interface should be clean and work well with touchscreen and mobile devices.
 
                            <p>Thank you for taking a chance with Gogobones.</p>
                        <h2 id="about-chris">About Chris Zalek</h2>
                            <img class="profile" src="img/cZ.png" alt="Chris Zalek" /><p>Chris Zalek is a freelance designer and digital artisan living in Chicago, Illinois. When he is not working, he maintains a regular Tai Chi practice and enjoys keeping busy as a tinkersmith and chaotic do-gooder.</p>
                    </div>
                 </section><!-- /.west -->

                 <section class="east clearfix">
                    <div class="contact-header clearfix">
                        <img class="header-icon" src="img/mail-icon.jpg" alt="die-icon" height="24" width="36" />
                            <h3>Contact Us</h3>
                    </div>
                    <div class="east-inner clearfix">
                        <p>We welcome feedback from our high-stakes rollers. Let us 
                            know how you are using Gogobones, along with any 
                            comments or suggestions, by filling out the form below.</p>
                        <div class="main">
                        <form method="post" action="about.php">
                            <div class="form-input"><label>Name:</label><br>
                            <input class="text" type="text" name="name" value=""><br>
                            <span class="error"><?php echo $nameError;?></span></div>
                            <div class="form-input"><label>Email:</label><br>
                            <input class="text" type="text" name="email" value=""><br>
                            <span class="error"><?php echo $emailError;?></span></div>
                            <div class="form-input"><label>Subject:</label><br>
                            <input class="text" type="text" name="subject" value=""><br>
                            <span class="error"><?php echo $subjectError;?></span></div>
                            <div class="form-input" ><label>Message:</label><br>
                            <textarea name="message" val=""></textarea>
                            <span class="error"><?php echo $messageError;?></span><br>
                            <input class="formButton" type="submit" name="submit" value="Say Hello"><br>
                            <span class="success"><?php echo $successMessage;?></span></div>
                        </form>
                </div>
                    </div>
                 </section><!-- /.east -->
            </section><!-- /.double-column -->

            <footer class="south clearfix">
                &copy; 2015-16 Christopher Zalek <span>|</span> <a href="https://twitter.com/chriszalek" target="_blank"><img src="img/icon-tw.png" height="28" width="28" alt="Twitter"></a>
            </footer><!-- /.south -->

        </div><!-- /.site -->

        <!-- JS -->
        <!--<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>-->
        <!--<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>-->
        <script src="http://code.jquery.com/jquery-latest.min.js"></script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID.
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script> -->
    </body>
</html>
