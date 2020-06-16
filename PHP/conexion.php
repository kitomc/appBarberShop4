<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","burgos",3306);
  return $con;
}


?>