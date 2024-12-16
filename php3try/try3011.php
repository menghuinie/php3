<body><tt>
    <?php
    $txt = "PHP";
    echo "I learn $txt!";
    ?>


    <ol>
      <li>
        <?php
        echo "My first PHP script!";
        ?>
      </li>

      <li>
        <?php
        // This is a single-line comment        
        # This is also a single-line comment
        $color = "red";
        echo "My99 car is " . $color . "<br>";

        /*
        This is a multiple-lines comment block
        that spans over multiple
        lines
        */

        ?>
      </li>


      <li>
        <?php
        $x = 5; // global scope
        
        function myTest31()
        {
          // using x inside this function will generate an error
          echo "Variable x inside function is: $x";
        }
        myTest31();

        echo "Variable x outside function is: $x";
        ?>
      </li>
    </ol>


    <?php
    function myTest32()
    {
      static $x = 0;
      echo $x;
      $x++;
    }

    myTest32();
    echo "<br>";
    myTest32();
    echo "<br>";
    myTest32();
    ?>
    <br /><br />

    <?php
    $x = 5;
    $y = 10;

    function myTest()
    {
      $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
    }

    myTest();
    echo $y; // outputs 15
    ?>
    <br /><br />


    <?php
    $txt1 = "Learn PHP";
    $txt2 = "W3Schools.com";
    $x = 5;
    $y = 4;

    print "<h2>" . $txt1 . "</h2>";
    print "Study99 PHP at " . $txt2 . "<br>";
    print $x + $y;
    ?>
    <br /><br />

    <?php
    class Car
    {
      public $color;
      public $model;
      public function __construct($color, $model)
      {
        $this->color = $color;
        $this->model = $model;
      }
      public function message()
      {
        return "My car is a " . $this->color . " " . $this->model . "!";
      }
    }

    $myCar = new Car("black", "Volvo");
    echo $myCar->message();
    echo "<br>";
    $myCar = new Car("red", "Toyota");
    echo $myCar->message();
    echo "<br><br>"; //  \n is not meant to be seen as a new line by end user, you must use <br/> for that. 

    define("cars", [    // Constants are automatically global 
      "Jeep",
      "BMW",
      "Toyota"
    ]);
    echo cars[0];

    ?>
    <br /><br />
</tt></body>
</html>