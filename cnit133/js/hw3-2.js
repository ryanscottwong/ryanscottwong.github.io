/* This script calculates how much the salesperson sold, how much they earned, and then outputs the results */
function total()
{
  salaryWeekly = 200.00;
  commissionRate = 0.09;
  item1Price = 239.99;
  item2Price = 129.75;
  item3Price = 99.95;
  item4Price = 350.89;
  item1SoldB = document.getElementById("item1Sold").value;
  item2SoldB = document.getElementById("item2Sold").value;
  item3SoldB = document.getElementById("item3Sold").value;
  item4SoldB = document.getElementById("item4Sold").value;
  item1Total = (item1SoldB * item1Price).toFixed(2);
  item2Total = (item2SoldB * item2Price).toFixed(2);
  item3Total = (item3SoldB * item3Price).toFixed(2);
  item4Total = (item4SoldB * item4Price).toFixed(2);
  amountSold = (item1Total + item2Total + item3Total + item4Total).toFixed(2);
  weeklyEarnings = (salaryWeekly + (commissionRate * amountSold)).toFixed(2);
  document.getElementById("item1SoldB").value = (item1SoldB);
  document.getElementById("item2SoldB").value = (item2SoldB);
  document.getElementById("item3SoldB").value = (item3SoldB);
  document.getElementById("item4SoldB").value = (item4SoldB);
  document.getElementById("item1TotalB").value = (item1Total);
  document.getElementById("item2TotalB").value = (item2Total);
  document.getElementById("item3TotalB").value = (item3Total);
  document.getElementById("item4TotalB").value = (item4Total);
  document.getElementById("amountSoldB").value = (amountSold);
  document.getElementById("weeklyEarningsB").value = (weeklyEarnings);
}
