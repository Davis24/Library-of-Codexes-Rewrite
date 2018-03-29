function gamepopup(game_choice){
	document.getElementById('popup').style.display='block';
	reloadGame(game_choice);
}
function reloadGame(game_choice){
	if(game_choice){
		$.ajax ({
			type: 'post',
			url: './loadgame.php',
			data: {
				game: game_choice,
			},
			success: function(response){
				$('#game_info').html(response);
			}
		});
	}
}

function ebookText(ebook_choice){
	console.log("reaching ebookText: " +ebook_choice);
	if(ebook_choice){
		$.ajax ({
			type: 'post',
			url: './loadgame.php',
			data: {
				ebook: ebook_choice,
			},
			success: function(response){
				$('#ebook_info').html(response);
			},
			error: function(){
				console.log("Something went wrong");
			}
		});
	}
}

function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
}

$("select[name='game']").change(function() {
    console.log($("select").val());    
	ebookText($("select").val());
	console.log("Base URL" +getBaseUrl());
	$ebook_path = getBaseUrl() +"ebooks/" + $("select").val() + "." + $("select[name='ebook'").val();
	$('#download').attr('href',$ebook_path);
})

$("select[name='ebook']").change(function() {
	$ebook_path = getBaseUrl() +"ebooks/" + $("select").val() + "." + $("select[name='ebook'").val();
	$('#download').attr('href',$ebook_path);
})

