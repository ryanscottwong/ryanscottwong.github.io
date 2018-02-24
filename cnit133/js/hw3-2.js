/* This script calculates how much the salesperson sold, how much they earned, and then outputs the results */
function total()
{
  salaryWeekly = 200.00;
  commissionRate = 0.09;
  item1Sold = document.getElementById("item1Sold").value;
  item2Sold = document.getElementById("item2Sold").value;
  item3Sold = document.getElementById("item3Sold").value;
  item4Sold = document.getElementById("item4Sold").value;
  item1Price = 239.99;
  item2Price = 129.75;
  item3Price = 99.95;
  item4Price = 350.89;
  item1Total = (salaryWeekly + (commissionRate * item1Sold * item1Price)).toFixed(2);
  item2Total = (salaryWeekly + (commissionRate * item2Sold * item2Price)).toFixed(2);
  item2Total = (salaryWeekly + (commissionRate * item3Sold * item3Price)).toFixed(2);
  item2Total = (salaryWeekly + (commissionRate * item4Sold * item4Price)).toFixed(2);
  document.getElementById("item1Total").value = (gbp_value);
  document.getElementById("item2Total").value = (can_value);
  document.getElementById("item3Total").value = (eur_value);
  document.getElementById("item4Total").value = (jpn_value);
}
