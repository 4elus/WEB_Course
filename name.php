<?php
/*$colors = ["red", "green", "blue"];
$colors[] = "yellow";
print_r($colors);

echo "<br>";
$names[0] = "Alex";
$names[1] = "Sam";
$names["name"] = "Clover";
print_r($names);
unset($names["name"]); //remove
print_r($names);

echo "<br>";
echo $names["name"];


$years["Alex"] = 1999;
$years["Sam"] = 1989;
$years["Clover"] = 2009;

echo "<br>";
print_r($years);
echo sizeof($years);*/


/*$login = "Alex";
$age = 15;
$access = true;

if ($access || $age >= 18){
    echo "Access allowed";
}else{
    echo "Access denied";
}*/

/*for($i = 0; $i <= 20; $i++){
    if ($i % 2 != 0){
        echo $i . "<br>";
    }
}

$colors = ["red", "green", "yellow", "brown"];

echo "<br>";
for ($i = 0; $i < sizeof($colors); $i++){
    echo $colors[$i] . "<br>";
}

echo "<br>";
foreach ($colors as $key => $value){
    echo $key . " " . $value . "<br>";
}*/

$i = 0;

while ($i < 10){
    echo $i . " ";
    $i++;
}

echo "<br>";
$i = 0;
do{
    echo $i . " ";
    $i++;
}while($i < 10);

$colors = ["red", "green", "yellow", "brown"];
$j = 0;

echo "<br>";
while ($j < sizeof($colors)){
    echo $colors[$j] . "<br>";
    $j++;
}

?>