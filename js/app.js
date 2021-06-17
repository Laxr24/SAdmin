
// For tabs 
$( function() {
    $( "#tab" ).tabs();
  } );
$( function() {
    $( "#postsTab" ).tabs({
        // collapsible: true
    });
  } );
$( function() {
    $( "#mediaTabs" ).tabs({
        // collapsible: true
    });
  } );
$( function() {
    $( "#menuTabs" ).tabs({
        // collapsible: true
    });
  } );

  // For  Initiate the Document editor
    var editor = CKEDITOR.replace("editor1")
    function showCOntent(){
      var data = CKEDITOR.instances.editor1.getData();
      alert(data)
      
    }


    function showTags(){
      console.log($("#inputtag").val())

    }


/// Copy Image link copy button in Image gallery 


var imageLinkCopyBtn = document.querySelector(".copyImageLink")

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    // console.log('Async: Copying to clipboard was successful!');
    // alert('Copied!')
  }, function(err) {
    // console.error('Async: Could not copy text: ', err);
  });
}

// Actual Button action 
imageLinkCopyBtn.addEventListener('click', function(event) {
  event.preventDefault()
  copyTextToClipboard(imageLinkCopyBtn.href);
});




// Menu tabs in admin panel 

// Disabling menu items links

// For tab 1 

$( function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
} );

// View Sorted items

var list = document.getElementById("sortable")
     function show(){
         var items = document.getElementById("sortable").children
         
         var i = 0 
         for(i; i < items.length ; i++){
           console.log(`${i+1}. `+items[i].textContent)
         }
         
     }
