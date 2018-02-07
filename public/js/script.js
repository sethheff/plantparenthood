var wateringCalendar = document.getElementById('wateringCalendar');

if(wateringCalendar) {
	wateringCalendar.valueAsDate = new Date();
}

// Semantic UI
$('.ui.rating')
  .rating()
;

$('.dropdown').dropdown({ 
	transition: 'slide down', 
	fullTextSearch: true,
	sortSelect: true, 
	match: 'text'
});

$(".nav-hamburger").click(function(){
	$(".desktop-nav").toggle("blind", 500);
});