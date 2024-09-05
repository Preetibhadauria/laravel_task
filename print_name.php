<?php

class User {
    // Define the name property
    public $name;

    // Constructor with a default value for the name property
    public function __construct($name = "Default Name") {
        $this->name = $name;
    }

    // Method to print the name
    public function printName() {
        echo "Name: " . $this->name . "\n";
    }
}

// Example 1: Instantiate User without providing a name
$user1 = new User();
$user1->printName(); // Output: Name: Default Name

// Example 2: Instantiate User with a specific name
$user2 = new User("Priti bhaduria");
$user2->printName(); // Output: Name: Priti bhadauria

?>
