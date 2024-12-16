<?php
$user = "ifivica_try";
$password = "pass333Toronto";
$database = "ifivica_try2";
$table = "todo_list";

try {
  $db = new PDO("mysql:host=localhost;dbname=$database", $user, $password);
  echo "<h2>todoList fromDatabase: ifivica_try2</h2>"; 
  echo "<p>  CREATE DATABASE ifivica_try2; </p>";  
  
  echo "
  CREATE TABLE ifivica_try2.todo_list (
	item_id INT AUTO_INCREMENT,
	content VARCHAR(255),
	PRIMARY KEY(item_id)
	);
  <br/>"; 
  
  echo "
  INSERT INTO ifivica_try2.todo_list (content) VALUES ('My important item22');
 <br/><br/> "; 
  
  echo "
  SELECT * FROM `todo_list`
  <ol>"; 
  
  foreach($db->query("SELECT content FROM $table") as $row) {
    echo "<li>" . $row['content'] . "</li>";
  }
  echo "</ol>";
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}