<!doctype html>
<html lang="en-US">

<head>
  <title>Nikkojh Solutions</title>
  <meta name="author" content="Jhimlie Eustaquio">
  <meta charset="UTF-8">
  <meta name="description" content="Nikkojh Solutions Website">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Link own css -->
  <link rel="stylesheet" href="../css/style.css">
  <!-- Others -->
  <!-- <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Raleway&display=swap" rel="stylesheet"> -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>

  <main>

    <nav>
      <img id="navLogo" src="../images/nikkojh-inverse.png" alt="Nikkojh Solutions Inc. logo">
      <ul id="navLinks">
        <li><a href="../html/index.html">Home</a></li>
        <li><a href="../html/services.html">Services</a></li>
        <li><a href="contactus.php">Contact Us</a></li>
      </ul>
      <a id="menuIcon" href="javascript:void(0);" onclick="openMenu()">
        <i class="fa fa-bars"></i>
      </a>
    </nav>

    <section id="contactUs">
        <h3>CONTACT US</h3>
        <div id="contactForm">
            <h4>Let's Talk about Your IT Needs!</h4>
            <form method="POST" action="">
                <input type="text" id="name" name="name" placeholder="Name" required>
                <input type="text" id="email" name="email" placeholder="Email" required>
                <input type="text" id="phoneNum" name="phoneNum" placeholder="Phone Number" required>
                <input type="text" id="companyURL" name="companyURL" placeholder="Company URL">               
                <textarea id="tellUs" name="theMessage" rows="5" cols="40" placeholder="Tell us how we can help."></textarea>             
                <div class="g-recaptcha" data-sitekey="6LehSbIZAAAAAAXMUk2dvDUsoXJaiwbGWSN6ZoJy"></div>
                <input type="submit" value="">
                <div class="status">
                  <?php
                  // Start the session
                  session_start();

                  use PHPMailer\PHPMailer\PHPMailer;
                  include 'functions.php';

                  // Sanitize post data
                  $cleaned_post_array = sanitize_html($_POST);

                  // Get sanitized user input
                  if(isset($cleaned_post_array['name']) && isset($cleaned_post_array['email']) && isset($cleaned_post_array['phoneNum'])){
                    $user_name = $cleaned_post_array['name'];
                    $user_email = $cleaned_post_array['email'];
                    $user_phoneNum = $cleaned_post_array['phoneNum'];
                    $user_companyURL = $cleaned_post_array['companyURL'];
                    $user_message = $cleaned_post_array['theMessage'];;

                      // Use PHP Mailer
                      require 'PHPMailer/PHPMailer.php';
                      require 'PHPMailer/SMTP.php';
                      require 'PHPMailer/Exception.php';

                      // Instantiation and passing `true` enables exceptions
                      $mail = new PHPMailer(true);

                      $mail->isSMTP();                                            // Send using SMTP
                      $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
                      $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
                      $mail->Username   = 'jacoby.eustaquio@gmail.com';                     // SMTP username
                      $mail->Password   = '031486Je!';                               // SMTP password
                      $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
                      $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

                      //Recipients
                      $mail->setFrom('noreply@nikkojhsolutions.com', 'Mailer');
                      $mail->addAddress('jhimlie.eustaquio@gmail.com', 'J Eustaquio');     // Add a recipient
                      $mail->addAddress('mark.d.b.eustaquio@gmail.com', 'M Eustaquio');               // Name is optional

                      // Content
                      $mail->isHTML(true); // Set email format to HTML
                      $mail->Subject = 'Nikkojh Solutions - Contact Form Submission';
                      $mail->Body    = "Name: $user_name \n".
                                      "Email Address: $user_email \n" .
                                      "Phone Number: $user_phoneNum \n" .
                                      "Company URL: $user_companyURL \n" . 
                                      "User Message: $user_message \n";

                      // Google captcha keys
                      $secretKey = "6LehSbIZAAAAAMtl5_-MBBJJHoP-PGZiCgNviEaG";
                      $responeKey = $_POST['g-recaptcha-response'];

                      $userIP = $_SERVER['REMOTE_ADDR'];
                      $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responeKey&remoteip=$userIP";

                      $response = file_get_contents($url);
                      $response = json_decode($response);

                      if($response->success){
                          $mail->send();
                          echo "Message sent successfully.";
                      } else {
                          echo "<span>Invalid Captcha, please try again.</span>";
                      }
                  }

                  ?>
                </div>
            </form>
        </div>
        <div id="getStarted">
            <h4>Get started today!</h4>
            <p>Everyone company needs support, connectivity, and security. However, the specific needs of your company are unique to you. Send us a message, and we can help you find the services that best fit your needs. </p>
        </div>
        <div>
            <img id="pageLogo" src="../images/nikkojh.png" alt="Nikkojh Solutions Inc. logo">
        </div>
    </section>

    <footer>
      <div><h5>&copy2020 NIKKOJH SOLUTIONS INC. <br/> ALL RIGHTS RESERVED. </h5></div>
    </footer>

  </main>
  
  <!-- Link JavaScript file -->
  <script type="text/javascript" src="../js/openMenu.js"></script>
  <!-- External JS files -->
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</body>

</html>