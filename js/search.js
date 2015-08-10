var initSearchBar = function() {
	var container = document.getElementById('search-container');
	var input = container.getElementsByTagName('input')[0];
	var icon = container.getElementsByTagName('i')[0];


	var changeDisplay = function(containers, value){
		for (var i = containers.length - 1; i >= 0; i--) {
			containers[i].style.display = value;
		};
	}

	var handleSearch = function(e){
		var searchText = e.target.value;
		var contents = document.getElementsByClassName('content');
		var results = [];
		if (searchText !== ''){ //User actually searched something
			changeDisplay(contents, 'none');
			// show some sort of loader
			for (var i = contents.length - 1; i >= 0; i--) {
				console.log(contents[i].textContent);
				if (contents[i].textContent.search(searchText) !== -1)
					results.push(contents[i]);
			};
			console.log("Found in: "+results);
		} else { //User deleted all text, reshow everything
			changeDisplay(contents, '');
		}
	}

	// Possible to detect IE8?
	input.addEventListener('input',handleSearch);
	input.addEventListener('keyup',handleSearch);

	input.addEventListener('blur', function(){
		var contents = document.getElementsByClassName('content');
		changeDisplay(contents, ''); //Show all elements
	});


	icon.addEventListener('click', function(){
		console.log(input.offsetWidth);
		//Input is already open. Close it.
		if (input.offsetWidth !== 0){ 
			input.blur();
		//Input is collapsed
		} else {
			handleSearch({'target': input}); // If there is existing text, search for it again
			input.focus();
		}
	});
}

initSearchBar();