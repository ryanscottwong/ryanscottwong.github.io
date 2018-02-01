function process()
{
  var number1, number2, number3, number4, number5, n1, n2, n3, n4, n5;
  // number1 = document.forms["myform"].elements["num1"].value;
  number1 = document.getElementById("num1").value;
  number2 = document.getElementById("num2").value;
  number3 = document.getElementById("num3").value;
  number4 = document.getElementById("num4").value;
  number5 = document.getElementById("num5").value;
  n1 = parseInt(number1);
  n2 = parseInt(number2);
  n3 = parseInt(number3);
  n4 = parseInt(number4);
  n5 = parseInt(number5);
  var numbers = [n1, n2, n3, n4, n5];
  for (i = 0, negative = 0, positive = 0, zero = 0; i < 5; i++)
  {
    if (numbers[i] < 0)
    {
      negative++;
    }
    else if (numbers[i] > 0)
    {
      positive++;
    }
    else if (numbers[i] == 0)
    {
      zero++;
    }
  }
  document.getElementById("result").value = ("The number of the negative numbers is " +
    negative + ".\n" +
    "The number of the positive numbers is " + positive + ".\n" +
    "The number of zeros is " + zero + "."
); }
