/* This script inputs an amount in U.S. dollars and displays in a table its equivalent in each of the above foreign currencies, rounded to 2 decimal places. */
function exchange()
{
  usd_value = document.getElementById("usd").value;
  gbp_xrate = 0.77521;
  can_xrate = 1.34461;
  eur_xrate = 0.88754;
  jpn_xrate = 109.350;
  mex_xrate = 18.2806;
  gbp_value = (gbp_xrate * usd_value).toFixed(2);
  can_value = (can_xrate * usd_value).toFixed(2);
  eur_value = (eur_xrate * usd_value).toFixed(2);
  jpn_value = (jpn_xrate * usd_value).toFixed(2);
  mex_value = (mex_xrate * usd_value).toFixed(2);
  document.getElementById("gbp").value = (gbp_value);
  document.getElementById("can").value = (can_value);
  document.getElementById("eur").value = (eur_value);
  document.getElementById("jpn").value = (jpn_value);
  document.getElementById("mex").value = (mex_value);
}
