<?php

if(!empty($_POST)){
    extract($_POST);
    $valid = true;

    if(!preg_match("/^[a-z0-9\-_.]+@[a-z0-9\-_.]+\.[a-z]{2,3}$/i",$email)){
        $valid=false;
        $erreuremail="invalid email";
    }
    if(empty($email)){
        $valid=false;
        $erreuremail="Please fill the email field";
    }

    if($valid){
        $to="xvalmorin@bamboostep.com";
        $sujet= "Un visiteur vous a contacté";
        $message= "Voici l'email de l'utilisateur : " .$email;
        $header="Bamboo step, nouveau message \n";
        $header .="Reply-to: $email";
        if(mail($to,$sujet,$message,$header)){
            unset($email);
            unset($message);
        }
        else
        {
            $erreur="An error occured and your email has not been sent";
        }
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Bamboo step</title>
        <link rel="stylesheet" type="text/css" href="animate.css">
        <link rel="stylesheet" type="text/css" href="style.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"/>
    </head>
    <body id="body-elt">
        <header id="header-elt">
            <h1 id="title-header-elt"><img src="img/logo_blanc.svg" alt="white ogo bamboo step"></h1>
            <div id="white-title-header-elt" class="white-container">
                <div>
                    <p>
                        We believe in building a <span class="grey-content">sustainable world.</span><br>
                        We develop finely designed products that have<br>
                        a mesurable positive <span class="grey-content">Impact</span> on the environment.
                    </p>
                    <p>
                        Our first mission: <span class="brown-content">The drinking straw.</span>
                    </p>
                </div>
                <img src="img/1500_1200_small_pic_01.jpg" alt="a drink of blue cocktail" class="desktop-img">
            </div>
        </header>
        <main>
            <section class="the-bamboo-straws">
                <div class="the-bamboo-title-container">
                    <h1 id="bamboo-title">
                        THE<br>
                        BAMBOO<br>
                        STRAWS
                    </h1>
                    <p><span>We are crafting bamboo drinking straws.</span></p>
                </div>
                <div class="grey-content-container">
                    <p id="the-bamboo-straws-white-square" class="white-square grey-content">When “Eco”<br> makes so<br> much sense…</p>
                </div>
                <div class="card-container">
                    <div class="card">
                        <p>Design</p>
                    </div>
                    <div class="card">
                        <p>Natural</p>
                    </div>
                    <div class="card">
                        <p>Waste Free</p>
                    </div>
                </div>
            </section>
            <section class="purchase">
                <a data-text="purchase our bamboo straws">
                    <span class="border-button"></span>
                    <span class="border-button"></span>
                    <span class="border-button"></span>
                    <span class="border-button"></span>
                    <span>purchase our bamboo straws</span>
                </a>
            </section>
            <section class="the-change">
                <div class="the-change-title-container">
                    <h1>
                        THE<br>
                        CHANGE
                    </h1>
                    <p>
                        These tiny objects are yet a great <span class="grey-content">move toward<br class="break-none"> a sustainable world.</span><br>
                        <span class="brown-content">The bamboo straw</span> is our response to damages caused by the single-use plastic straws.
                    </p>
                </div>
                <div class="card-container">
                    <div class="card">
                        <h2>FACT 1</h2>
                        <p>Billions of plastic straws are used and littered every single days.</p>
                    </div>
                    <div class="card">
                        <h2>FACT 2</h2>
                        <p>Plastic straw are usually made of the cheapest plastic that includes harmful chemicals such as BPA.</p>
                    </div>
                    <div class="card">
                        <h2>FACT 3</h2>
                        <p>Plastic straws are never recycled. They are use once and live for over 500 years, spoiling our oceans, beach and wildlife.
                        </p>
                    </div>
                </div>
            </section>
            <section class="use-of-bamboo-straws">
                <div class="title-container">
                    <h1>
                        USE OF<br>
                        BAMBOO<br>
                        STRAWS
                    </h1>
                </div>

                <div class="photo-container-1">
                    <div>
                        <h2 class="brown-content">SIZE:</h2>
                        <p>
                            Bamboo straws come in different sizes. Choose the suitable size for the drink and for the glass.
                        </p>
                    </div>
                    <img src="img/1500_1200_small_pic_08.jpg" alt="bamboo straws in a coconut">
                    <img src="img/1500_1200_small_pic_09.jpg" alt="a yellow cokctail in a glass">
                    <img src="img/1500_1200_small_pic_10.jpg" alt="a brown cocktail in a glass">
                    <img src="img/850_750_500_small_pic_08.jpg" class="smallDevicesImg" alt="bamboo straws in a coconut">
                    <img src="img/850_750_500_small_pic_09.jpg" class="smallDevicesImg" alt="a yellow cokctail in a glass">
                    <img src="img/850_750_500_small_pic_10.jpg" class="smallDevicesImg" alt="a brown cocktail in a glass">

                </div>
                <div class="photo-container-2">
                    <div>
                        <h2 class="brown-content">MAINTENANCE:</h2>
                        <p>
                            Washed after each use and stored in a dry place, your straws will last years.<br>
                            Straw can simply be washed by hand, put in the dishwasher or boiled for 5-10 minutes for full
                            disinfection recommended for public places.
                        </p>
                    </div>
                    <img src="img/all_small_pic_11.jpg" class="displayAllTime" alt="an hand handling straws under water to clean it">
                    <img src="img/all_small_pic_12.jpg" class="displayAllTime" alt="a bamboo straw in a dishwasher">
                    <img src="img/all_small_pic_13.jpg" class="displayAllTime" alt="a bamboo straw in a kettle">
                </div>
            </section>
            <section class="about-us">
                <h1>ABOUT US</h1>
                <div class="white-container">
                    <div>
                        <p>"The positive Change we can make as a society is only the sum of the small steps we take as individuals, as insignificant as they can seem."
                        </p>
                    </div>
                </div>

                <ul>
                    <li>
                        <h2 class="white-content"><img src="img/all_picto_vision.svg" alt="an icon represanting an eye"><span>VISION:</span></h2>
                        <p>
                            Live in a world where individuals
                            take ownership of our environment.
                        </p>
                    </li>
                    <li>

                        <h2 class="white-content"><img src="img/all_picto_purpose.svg" alt="an icon represanting a target"><span>PURPOSE:</span></h2>
                        <p>
                            Enable people to make conscious choices. Empower people with a "positive<br>
                            impact" lifestyle.
                        </p>
                    </li>
                    <li>

                        <h2 class="white-content"><img src="img/all_picto_strategy.svg" alt="an icon represanting a bulb"><span>STRATEGY:</span></h2>
                        <p>
                            Create finely designed products that have a measurable positive impact. So design and sustainability<br>
                            become inseparable.
                        </p>
                        <p>
                            By making great sustainable alternative to everyday products, we allow individuals<br>
                            to move towards a responsible world, a step at a time.
                        <p>
                            We are addressing conscious people, those who have embraced sustainability as<br>
                            part of their lifestyle.
                        </p>
                        <p>
                            We have chosen responsible entrepreneurship as our way to take actions.<br>
                            And we know that people who choose our products want to make a difference too.
                        </p>
                    </li>
                </ul>

            </section>
            <section class="contact-us">
                <h1>CONTACT US</h1>
                <ul>
                    <li><span class="brown-content">Xavier Valmorin </span><span class="grey-content">- Founder</span></li>
                    <li>Responsible entrepreneur and <span class="grey-content">World Green Citizen</span></li>
                    <li><a href="mailto:xvalmorin@bamboostep.com">xvalmorin@bamboostep.com</a></li>
                </ul>
            </section>
            <section class="newsletter">
                <h1>NEWSLETTER</h1>
                <p>We will keep you posted on Bamboo Step progress</p>
                <form action="http://www.bamboostep.com/" method="post" >
                    <input type="email" placeholder="email address" name="email" id="email">
                    <?php
                        if(!empty($erreuremail)){
                            echo '<span>' . $erreuremail . '</span>';
                        }

                        if(!empty($erreur)){
                            echo '<span>' . $erreur . '</span>';
                        }
                    ?>
                    <label data-text="submit" for="subscribe" id="label-submit">
                        <span class="border-button"></span>
                        <span class="border-button"></span>
                        <span class="border-button"></span>
                        <span class="border-button"></span>
                        <span>submit</span>
                    </label>
                    <input id="subscribe" type="submit" value="subscribe" name="subscribe">
                </form>
            </section>
        </main>
        <footer>
            <h1>FOLLOW US</h1>
            <div>
                <ul>
                    <li><a href="https://www.facebook.com/BamboostepCom/" target="_blank"><img src="img/all_picto_facebook.svg" class="show" alt="facebook icon"><img src="img/all_picto_facebook_black.svg" class="hide" alt="facebook icon"></a></li>
                    <li><a href="https://www.instagram.com/bamboostepcom/" target="_blank"><img src="img/all_picto_instagram.svg" class="show" alt="instagram icon"><img src="img/all_picto_instagram_black.svg" class="hide" alt="instagram icon"></a></li>
                    <li><a href="https://twitter.com/BamboostepCom/" target="_blank"><img src="img/all_picto_twitter.svg" class="show" alt="twitter icon"><img src="img/all_picto_facebook_black.svg" class="hide" alt="twitter icon"></a></li>
                </ul>
                <img class="logo" src="img/logo_marron.svg">
            </div>
            <a class="superjoli-button" data-text="Bamboo Step 2017. Conception, design and development: SUPERJOLI.COM" href="http://www.superjoli.com/#/" target="_blank">
                <span class="border-button"></span>
                <span class="border-button"></span>
                <span class="border-button"></span>
                <span class="border-button"></span>
                <span>Bamboo Step 2017. Conception, design and development: SUPERJOLI.COM</span>
            </a>
        </footer>

        <div class="pop-up">
            <div class="pop-up-container">
                <a href="mailto:xvalmorin@bamboostep.com"> For a quote, please contact us at xvalmorin@bamboostep.com</a>
            </div>
        </div>
        <script
                src="https://code.jquery.com/jquery-3.2.1.min.js"
                integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
                crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script>
        <script src="app.js"></script>
        <script src="script.js"></script>
    </body>
</html>