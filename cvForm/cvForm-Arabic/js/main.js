// to upload photo
(function () {
  var uploader = document.createElement('input'),
    image = document.getElementById('img-result');

  uploader.type = 'file';
  uploader.accept = 'image/*';

  image.onclick = function() {
    uploader.click();
  }

  uploader.onchange = function() {
    var reader = new FileReader();
    reader.onload = function(evt) {
      image.classList.remove('no-image');
      image.style.backgroundImage = 'url(' + evt.target.result + ')';
      var request = {
        itemtype: 'test 1',
        brand: 'test 2',
        images: [{
          data: evt.target.result
        }]
      };
      
      document.querySelector('.show-button').style.display = 'none';
    }
    reader.readAsDataURL(uploader.files[0]);
  }
  
  document.querySelector('.hide-button').onclick = function () {
    document.querySelector('.upload-result').style.display = 'none';
  };
  
})();

// to add/remove excperience field input

$(document).ready(function() {
var buttonAdd = $("#add-button");
var buttonRemove = $("#remove-button");
var className = ".dynamic-field";
var line = "#line";
var count = 0;
var field = "";
var maxFields = 5;

function totalFields() {
  return $(className).length;
}
  function addNewField() {
  $(line).css('display', 'block');
  count = totalFields() + 1;
  field = $("#dynamic-field-1").clone();
  field.attr("id", "dynamic-field-" + count);
  field.children("label").text("Field " + count);
  field.find("input").val("");
  $(className + ":last").after($(field));
}

function removeLastField() {
  if (totalFields() > 1) {
    $(className + ":last").remove();
  }
  $(line).css('display', 'none');
}

function enableButtonRemove() {
  if (totalFields() === 2) {
    buttonRemove.removeAttr("disabled");
    buttonRemove.addClass("shadow-sm");
  }
}

function disableButtonRemove() {
  if (totalFields() === 1) {
    buttonRemove.attr("disabled", "disabled");
    buttonRemove.removeClass("shadow-sm");
  }
}

function disableButtonAdd() {
  if (totalFields() === maxFields) {
    buttonAdd.attr("disabled", "disabled");
    buttonAdd.removeClass("shadow-sm");
  }
}

function enableButtonAdd() {
  if (totalFields() === (maxFields - 1)) {
    buttonAdd.removeAttr("disabled");
    buttonAdd.addClass("shadow-sm");
  }
}

buttonAdd.click(function() {
  addNewField();
  enableButtonRemove();
  disableButtonAdd();
});

buttonRemove.click(function() {
  removeLastField();
  disableButtonRemove();
  enableButtonAdd();


});
});
// to add/remove education field input
$(document).ready(function() {
var buttonAdd = $("#add-edu");
var buttonRemove = $("#remove-edu");
var className = ".education-field";
var line = "#line1";
var count = 0;
var field = "";
var maxFields = 4;

function totalFields() {
  return $(className).length;
}
  function addNewField() {
  $(line).css('display', 'block');
  count = totalFields() + 1;
  field = $("#education-field-1").clone();
  field.attr("id", "education-field-" + count);
  field.children("label").text("Field " + count);
  field.find("input").val("");
  $(className + ":last").after($(field));
  }
  function removeLastField() {
    if (totalFields() > 1) {
      $(className + ":last").remove();
    }
    $(line).css('display', 'none');
  }
  
  function enableButtonRemove() {
    if (totalFields() === 2) {
      buttonRemove.removeAttr("disabled");
      buttonRemove.addClass("shadow-sm");
    }
  }
  
  function disableButtonRemove() {
    if (totalFields() === 1) {
      buttonRemove.attr("disabled", "disabled");
      buttonRemove.removeClass("shadow-sm");
    }
  }
  
  function disableButtonAdd() {
    if (totalFields() === maxFields) {
      buttonAdd.attr("disabled", "disabled");
      buttonAdd.removeClass("shadow-sm");
    }
  }
  
  function enableButtonAdd() {
    if (totalFields() === (maxFields - 1)) {
      buttonAdd.removeAttr("disabled");
      buttonAdd.addClass("shadow-sm");
    }
  }
  
  buttonAdd.click(function() {
    addNewField();
    enableButtonRemove();
    disableButtonAdd();
  });
  
  buttonRemove.click(function() {
    removeLastField();
    disableButtonRemove();
    enableButtonAdd();
  
  });

});
// to add/remove skill field input
$(document).ready(function() {
var buttonAdd = $("#add-skill");
var buttonRemove = $("#remove-skill");
var className = ".skill-field";
var line = "#line2";
var count = 0;
var field = "";
var maxFields = 5;

function totalFields() {
  return $(className).length;
}
  function addNewField() {
  $(line).css('display', 'block');
  count = totalFields() + 1;
  field = $("#skill-field-1").clone();
  field.attr("id", "skill-field-" + count);
  field.children("label").text("Field " + count);
  field.find("input").val("");
  $(className + ":last").after($(field));
  }
  function removeLastField() {
    if (totalFields() > 1) {
      $(className + ":last").remove();
    }
    $(line).css('display', 'none');
  }
  
  function enableButtonRemove() {
    if (totalFields() === 2) {
      buttonRemove.removeAttr("disabled");
      buttonRemove.addClass("shadow-sm");
    }
  }
  
  function disableButtonRemove() {
    if (totalFields() === 1) {
      buttonRemove.attr("disabled", "disabled");
      buttonRemove.removeClass("shadow-sm");
    }
  }
  
  function disableButtonAdd() {
    if (totalFields() === maxFields) {
      buttonAdd.attr("disabled", "disabled");
      buttonAdd.removeClass("shadow-sm");
    }
  }
  
  function enableButtonAdd() {
    if (totalFields() === (maxFields - 1)) {
      buttonAdd.removeAttr("disabled");
      buttonAdd.addClass("shadow-sm");
    }
  }
  
  buttonAdd.click(function() {
    addNewField();
    enableButtonRemove();
    disableButtonAdd();
  });
  
  buttonRemove.click(function() {
    removeLastField();
    disableButtonRemove();
    enableButtonAdd();
  
  });

});
//to print cv
$('#printCv').click(function() {
  window.print();
  return false;
});

// to download cv
window.onload = function () {
  document.getElementById("downloadCv")
      .addEventListener("click", () => {
          const invoice = this.document.getElementById("content");
          console.log(invoice);
          console.log(window);
          var opt = {
              margin: 1,
              filename: 'myfile.pdf',
              image: { type: 'jpeg', quality: 0.98 },
              html2canvas: { scale: 2 },
              jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
          html2pdf().from(invoice).set(opt).save();
      })
}
//starRatio
$(function () {
 
  $(".rateYo").rateYo({
    rating: 0,
    starWidth: "20px"
  });
 
});
//to share on social media
var pageLink = window.location.href;
var pageTitle = String(document.title).replace(/\&/g, '%26');

function fbs_click() { window.open(`http://www.facebook.com/sharer.php?u=${pageLink}&quote=${pageTitle}`, 'sharer', 'toolbar=0,status=0,width=626,height=436'); return false; }
function tbs_click() { window.open(`https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageLink}`, 'sharer', 'toolbar=0,status=0,width=626,height=436'); return false; }
function lbs_click() { window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${pageLink}`, 'sharer', 'toolbar=0,status=0,width=626,height=436'); return false; }
