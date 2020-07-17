<?php
/*
* sanitize_html() A function that will sanitize user inputs
*
* @param $user_input - Accept any string
* @return Sanitized String
*
*/
function sanitize_html($user_input)
{
    foreach ($user_input as $key => $val) {
        $user_input[$key] = htmlentities($val);
    }
    //print_r($user_input);
    return $user_input;
} // end  of sanitize_html
?>
