function myFunction () {
  var x = document.getElementById('combo').value
  var xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var str = this.responseText
      var obj = JSON.parse(str)
      document.getElementById('worker').innerHTML = x
      switch (x) {
        case 'USD':
          document.getElementById('worker').innerHTML = obj.rates.USD
          break
        case 'AUD':
          document.getElementById('worker').innerHTML = obj.rates.AUD
          break
        case 'NZD':
          document.getElementById('worker').innerHTML = obj.rates.NZD
          break
        case 'CAD':
          document.getElementById('worker').innerHTML = obj.rates.CAD
          break
        default:
          break
      }
    }
  }
  xhttp.open('GET', 'https://frankfurter.app/latest?to=' + x, true)
  xhttp.send()
}
