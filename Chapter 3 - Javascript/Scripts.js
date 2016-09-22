
        var clickedTime; 
        var createdTime; 
        var reactionTime;
        
        function getRandomColor() {
          var characters = '0123456789ABCDEF';
          var hash = "#";
          for (var i = 0; i < 6; i++){
            hash += characters[Math.floor(Math.random()*16)];
          };
          return hash;
        };
        function makebox() {
          var time = 1000*Math.random();
          var marginTB = 40*Math.random();
          var marginLR = 80*Math.random();
          setTimeout(function(){
            createdTime = Date.now();
            document.getElementById('box').style.display = "block";
            document.getElementById('box').style.margin = marginTB + "%" + marginLR + "%";
            document.getElementById('box').style.backgroundColor = getRandomColor();
            if (Math.floor(time) > 600){
            document.getElementById('box').style.borderRadius = "100px";
          } else{
            document.getElementById('box').style.borderRadius = "0";
          };
          },time);
        };

          makebox();

        document.getElementById('box').onclick = function() {
          clickedTime = Date.now();
          reactionTime = (clickedTime - createdTime)/1000;
          document.getElementById('time').innerHTML = reactionTime + ' Sec';
          document.getElementById('box').style.display = "none";
          makebox();
        };