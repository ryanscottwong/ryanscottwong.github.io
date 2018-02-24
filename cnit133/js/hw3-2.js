/* This script calculates how much the salesperson sold, how much they earned, and then outputs the results */
function total()
{
  salaryWeekly = 200.00;
  commissionRate = 0.09;
  item1SoldB = document.getElementById("item1Sold").value;
  item2SoldB = document.getElementById("item2Sold").value;
  item3SoldB = document.getElementById("item3Sold").value;
  item4SoldB = document.getElementById("item4Sold").value;
  item1Price = 239.99;
  item2Price = 129.75;
  item3Price = 99.95;
  item4Price = 350.89;
  item1Total = (salaryWeekly + (commissionRate * item1SoldB * item1Price)).toFixed(2);
  item2Total = (salaryWeekly + (commissionRate * item2SoldB * item2Price)).toFixed(2);
  item2Total = (salaryWeekly + (commissionRate * item3SoldB * item3Price)).toFixed(2);
  item2Total = (salaryWeekly + (commissionRate * item4SoldB * item4Price)).toFixed(2);
  document.getElementById("item1TotalB").value = (item1Total);
  document.getElementById("item2TotalB").value = (item2Total);
  document.getElementById("item3TotalB").value = (item3Total);
  document.getElementById("item4TotalB").value = (item4Total);
}
