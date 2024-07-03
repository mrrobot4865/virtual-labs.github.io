function updateValue(sliderId,numberId) {
  document.getElementById(numberId).value = document.getElementById(sliderId).value;
  
}

function updateSlider(sliderId,numberId) {
document.getElementById(sliderId).value = document.getElementById(numberId).value;
}


function calculateDivision() {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const result = number1 / number2;

  if (isNaN(result) || !isFinite(result)) {
      document.getElementById('result').value = 'Invalid division';
  } else {
      document.getElementById('result').value = result;
  }
}

function storeResult() {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const result = parseFloat(document.getElementById('result').value);

  if (!isNaN(result) && isFinite(result)) {
      results.push({ number1, number2, result });
      updateTable();
  }
}

function updateTable() {
  const tbody = document.getElementById('resultsTable').querySelector('tbody');
  tbody.innerHTML = '';

  results.forEach((entry, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${entry.number1}</td>
          <td>${entry.number2}</td>
          <td>${entry.result}</td>
      `;
      tbody.appendChild(row);
  });
}

function executeMaster(){
  calculateDivision();
  // storeResult();
  // updateTable();
}

















window.onload = function() {

  // document.addEventListener('DOMContentLoaded', function() {
    var instance = jsPlumb.getInstance();
    // Your jsPlumb code here


    var instance = jsPlumb.getInstance();
    var connections = {
      'point1_point2': false,
      'point3_point4': false,
      'point5_point6': false,

  };

  document.getElementById('v75_54').style.top = '572px'; 
  document.getElementById('v75_54').style.left = '274px';

  document.getElementById('v75_55').style.top = '702px';
  document.getElementById('v75_55').style.left = '274px';


  document.getElementById('v75_58').style.top = '499px';
  document.getElementById('v75_58').style.left = '341px';

  document.getElementById('v75_61').style.top = '499px';
  document.getElementById('v75_61').style.left = '534px';


  document.getElementById('v75_64').style.top = '572px';
  document.getElementById('v75_64').style.left = '617px';

  document.getElementById('v75_67').style.top = '702px';
  document.getElementById('v75_67').style.left = '617px';


  instance.makeSource('v75_54', {
    anchor: 'Top',
    connector: ['Flowchart', {
      stub: [55, 0],              // Initial segment length of 30 pixels
      gap: 0,               // Gap of 10 pixels from the source element
      cornerRadius: 0,       // Rounded corners with a radius of 5 pixels
      alwaysRespectStubs: true // Ensures the stub length is always respected
    }]
  });
  
  instance.makeSource('v75_61', {
    anchor: 'Right',
    connector: ['Flowchart', {
      stub: [55, 0],              // Initial segment length of 30 pixels
      gap: 0,               // Gap of 10 pixels from the source element
      cornerRadius: 0,       // Rounded corners with a radius of 5 pixels
      alwaysRespectStubs: true // Ensures the stub length is always respected
    }]
  });
  
  instance.makeSource('v75_67', {
    anchor: 'Left',
    connector: ['Flowchart', {
      stub: [55, 0],              // Initial segment length of 30 pixels
      gap: 0,               // Gap of 10 pixels from the source element
      cornerRadius: 0,       // Rounded corners with a radius of 5 pixels
      alwaysRespectStubs: true // Ensures the stub length is always respected
    }]
  });


  instance.makeTarget('v75_55', {
    anchor: 'Continuous',
    allowLoopback: false
});

instance.makeTarget('v75_58', {
    anchor: 'Continuous',
    allowLoopback: false
  });

instance.makeTarget('v75_64', {
    anchor: 'Continuous',
    allowLoopback: false
  });


  function showLED() {
    var div1 = document.getElementById("LEDON");
    // var div1 = document.getElementById("94_9");
    
    if (div1.classList.contains("hidden")) {
        div1.classList.remove("hidden");
        div1.classList.add("visible");
        div2.classList.remove("visible")
      div2.classList.add("hidden")
    } else {
        div.classList.remove("visible");
        div.classList.add("hidden");
    }
}


function donotshowLED() {
  var div1 = document.getElementById("LEDON");
  
  if (div1.classList.contains("visible")) {
      div1.classList.remove("visible");
      div1.classList.add("hidden");
      
  } else {
      div1.classList.remove("visible");
      div1.classList.add("hidden");
  }


}


  instance.bind('connection', function(info) {
    var sourceId = info.sourceId;
    var targetId = info.targetId;

    if ((sourceId === 'v75_54' && targetId === 'v75_58')) {
        connections['point1_point2'] = true;
    }

    if ((sourceId === 'v75_61' && targetId === 'v75_64')) {
        connections['point3_point4'] = true;
    }

    if ((sourceId === 'v75_67' && targetId === 'v75_55') || 
    (sourceId === 'point6' && targetId === 'point5')) {
    connections['point5_point6'] = true;
    }

    if (connections['point1_point2'] && connections['point3_point4']&& connections['point5_point6']) {
        console.log("Hello Sai Your code is a success");
        // alert("Connected Success You are ok to proceed");
        onButton = document.getElementById("ON-button");
        offButton = document.getElementById("OFF-button");
        onButton.addEventListener('click', function() {
          alert("Circuit is ON")
          showLED()
          });

        offButton.addEventListener('click', function() {
            // document.getElementById('switchImage1').style.display = 'none';
            // document.getElementById('bulbImage1').style.display = 'none';
            donotshowLED()
            alert("Circuit is OFF")
            // console.log("Off button works");
        });
        // onButton.addEventListener('click', function() {
        //     document.getElementById('switchImage1').style.display = 'block';
        //     document.getElementById('bulbImage1').style.display = 'block';
        // });

        // offButton.addEventListener('click', function() {
        //     document.getElementById('switchImage1').style.display = 'none';
        //     document.getElementById('bulbImage1').style.display = 'none';
        //     console.log("Off button works");
        // });
        // document.getElementById('successImage').style.display = 'block'; // assuming 'successImage' is the id of the image element
    } else /*if ((sourceId === 'point1' && targetId === 'point4') || 
               (sourceId === 'point3' && targetId === 'point2'))*/ {
       console.warn('Warning: Invalid connection!');
    //    alert("Warning");
    }
});  
// });

};





// window.onload = function () {
//     var instance = jsPlumb.getInstance();
//     var isConnected = false;

//     var connections = {
//         'point1_point2': false,
//         'point3_point4': false
//     };
//     console.log("Your script is running now")
//     // Position the points
//     document.getElementById('v75_53').style.top = '572px';
//     document.getElementById('v75_53').style.left = '274px';
//     document.getElementById('v75_60').style.top = '750px';
//     document.getElementById('v75_60').style.left = '530px';




//     // Make the points connectable
//     instance.makeSource('v75_53', {
//         anchor: 'Continuous',
//         connector: ['Straight']
//     });

//     // instance.makeSource('point3', {
//     //     anchor: 'Continuous',
//     //     connector: ['Straight']
//     // });

//     instance.makeTarget('v75_60', {
//         anchor: 'Continuous',
//         allowLoopback: true
//     });

//     // instance.makeTarget('point4', {
//     //     anchor: 'Continuous',
//     //     allowLoopback: false
//     // });


//     // instance.bind('connection', function(info) {
//     //     isConnected = true;
//     //     alert('Connected!');
//     // });

//     instance.bind('connection', function(info) {
//         var sourceId = info.sourceId;
//         var targetId = info.targetId;

//         if ((sourceId === 'v75_53' && targetId === 'v75_60') || 
//             (sourceId === 'v75_60' && targetId === 'v75_53')) {
//             connections['point1_point2'] = true;
//         }

       

//         // if (connections['point1_point2'] && connections['point3_point4'])
//         if (connections['point1_point2']){
//             console.log("Hello Sai Your code is a success");
//             alert("Connected Success You are ok to proceed");
//             document.getElementById('successImage').style.display = 'block'; // assuming 'successImage' is the id of the image element
//         } else if ((sourceId === 'v75_53' && targetId === 'point4') || 
//                    (sourceId === 'point3' && targetId === 'v75_60')) {
//            console.warn('Warning: Invalid connection!');
//            alert("Warning");
//         }
//     });



// };

