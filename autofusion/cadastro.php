<?php

include("conexao.php");

$nome=$_POST['nome'];
$sobrenome=$_POST['sobrenome'];
$email=$_POST['email'];
$senha=md5($_POST['senha']);

$sql="INSERT INTO cadastro(nome, sobrenome, email, senha) 
VALUES ('$nome', '$sobrenome', '$email', '$senha')";

 
if(mysqli_query($conexao, $sql)) {
    header("Location: index.html", TRUE, 301);
}
else{
    echo "Erro".mysqli_connect_erro($conexao);
}
mysqli_close($conexao);

?>