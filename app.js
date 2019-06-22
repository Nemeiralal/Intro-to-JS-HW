// data preparation and major assignments

var data_Table = data;

var $tbody = document.querySelector("tbody");
var $input_Date = document.querySelector("#datetime");
var $input_State = document.querySelector("#state");
var $search_Btn = document.querySelector("#search");
var $input_City = document.querySelector("#city");
var $input_Country = document.querySelector("#country");
var $input_Shape = document.querySelector("#shape");

$search_Btn.addEventListener("click", search_Btn_click);

//Methods for table operation
function search_Btn_click() {
  var filter_by_Date = $input_Date.value;
  var filter_by_State = $input_State.value.trim().toLowerCase();
  var filter_by_City = $input_City.value.trim().toLowerCase();
  var filter_by_Country = $input_Country.value.trim().toLowerCase();
  var filter_by_Shape = $input_Shape.value.trim().toLowerCase();

  if (filter_by_Date != "")
  {
    data_Table = data.filter(function(address) 
    {
      var addressDate = address.datetime; 
    
    return addressDate === filter_by_Date;
    });
  }
  else {data_Table};
  

  if(filter_by_State != "")
  {
    data_Table = data_Table.filter(function(address)
    {
      var addressState = address.state;
      return addressState === filter_by_State;
    });
  }
  else{data_Table};

  if(filter_by_City != "")
  {
    data_Table = data_Table.filter(function(address)
    {
      var addressCity = address.city;
      return addressCity === filter_by_City;
    });
  }

  else{data_Table};

  if(filter_by_Country != "")
  {
    data_Table = data_Table.filter(function(address)
    {
      var addressCountry = address.country;
      return addressCountry === filter_by_Country;
    });
  }
  else{data_Table};

  if(filter_by_Shape != "")
  {
    data_Table = data_Table.filter(function(address)
    {
      var addressShape = address.shape;
      return addressShape === filter_by_Shape;
    });
  }
  else{data_Table};

renderTable();

}


function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < data_Table.length; i++) {
    var address = data_Table[i];
    var fields = Object.keys(address);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}



renderTable();


$(document).ready(function() {
  $('#table').DataTable();
});