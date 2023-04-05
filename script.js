function calculateBatteryLife() {
  var batteryCapacity = document.getElementById("batteryCapacity").value;
  var voltage = document.getElementById("voltage").value;
  var averageDraw = document.getElementById("averageDraw").value;

  // convert battery capacity from mAh to Ah
  batteryCapacity /= 1000;

  // calculate battery life
  var batteryLife = batteryCapacity / (averageDraw * voltage);

  document.getElementById("batteryLife").innerHTML = "Estimated Battery Life: " + batteryLife.toFixed(2) + " hours";
}
