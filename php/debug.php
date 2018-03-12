<?php
/*
 * Function for debug your PHP.
 *
 * @param {String} $var - Content to debug
 * @param {String} $aff - Show debug
 * @example debug(['test_1', 'test_2'])
 * @return {Array} Array( ['test_1', 'test_2'] )
 */

function debug($var, $aff=false){
    ob_start();
  
    echo '<pre style="text-align: left; white-space: pre;">';
    
    switch(gettype($var)){
      case "array":
      case "object":
        print_r($var);
        break;
      default:
        var_dump($var);
    }
  
    echo '</pre>';
    
    $f = ob_get_contents();
    ob_end_clean();
    
    if(!$aff)
        echo $f;
    
    return $f;
}
