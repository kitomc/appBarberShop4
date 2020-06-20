<?php
function retornarConexion() {
  $con=mysqli_connect("localhost","root","","usuarios",3306);
  return $con;
}
?>