


	var diametres = [4878, 12104, 12756, 6787,142800,120000, 51200, 48600];
        var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
        var main = document.getElementById("main");
        for (var i = 0; i < names.length; i++) {
          var d = document.createElement('div');
          d.textContent = names[i];
          d.style.width = diametres[i]*(500/142800)+"px";
          d.style.margin = "10px";
          d.style['padding'] = "0 0 0 30px";
          main.appendChild(d);
        }

