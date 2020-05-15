
document.getElementById('searchBtn').addEventListener('click', searchImg);










function searchImg() {


  $.ajax({

    "success": true,
    "data": {
      "memes": [{
          "id": "61579",
          "name": "One Does Not Simply",
          "url": "https://i.imgflip.com/1bij.jpg",
          "width": 568,
          "height": 335,
          "box_count": 2
        },
        {
          "id": "101470",
          "name": "Ancient Aliens",
          "url": "https://i.imgflip.com/26am.jpg",
          "width": 500,
          "height": 437,
          "box_count": 2
        }
        // probably a lot more memes here..
      ]
    },

    method: 'GET',
    url: 'https://api.imgflip.com/get_memes',
    success: successMsg,
    error: errorMsg



  })
  console.log(data)

 };



 function successMsg(result){
  // console.log('result: ', result);
  // console.log(imgSearchTerm.value);


  $('#resultImgs').html('')

  for(var i = 0; i < result.data.memes.length; i++) {
    var thisMeme = result.data.memes[i];


    var regex = new RegExp('\\b' + imgSearchTerm.value + '\\b', 'gi')

    if (regex.test(thisMeme.name)) {
      // console.log(thisMeme);
      $("#resultImgs").append('<img src="' + thisMeme.url + '" />');
    }

  }



 };

 function errorMsg(error){
   console.error('error: ', error);
 };
