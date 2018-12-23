





$(document).ready(function() {
	var $popup = $("#popup"); //caches the DOMS
	var $closeBtn= $(".close-btn");
	
	


	function popUp(){
		
		$popup.fadeIn(500); //fades in the popup window
		console.log('popiu');
	}
	
	if(Cookies.get('firstVisit') == null){ //checks if the cookies are saved into the browser if theyre not they will show the disclaime of the site
		//sessionStorage.setItem('firstVisit', '1');
	setTimeout(popUp,800); //after the page loads popup will fade in 
	}


	$closeBtn.click(function(){
		$popup.fadeOut(100); //once discalimer is read you can close it by clicking the button on bottom


	})
    
    	Cookies.set('firstVisit', '1'); //sets a cookie to the session after the session is closed cookie is deleted and the disclaimer will popup again
	//sessionStorage.setItem('firstVisit', '1');

	
	$('#calendar').fullCalendar({ 
	  height: 700,
	  firstDay: 1,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'listWeek,listDay,agendaWeek'
      },


      // customize the button names,
      // otherwise they'd all just say "list"
      views: {
        listDay: { buttonText: 'list day' },
        listWeek:{buttonText:'list week'},
        agendaWeek: { buttonText: 'calendar week' }
      },

      defaultView: 'listWeek',
     
      minTime: "09:00:00",
      maxTime: "23:00:00",
      slotEventOverlap: false,
      navLinks: false, // can click day/week names to navigate views
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      allDaySlot:false,
      events: [
       
        {
          title:"Muay Thai",
    	  start: '12:00', // a start time (12pm )
    	  end: '13:00', // an end time (1pm )
    	  color:'#2f73b7',
    	  dow: [ 1, 3, 5 ] // Repeat monday and thursday
        },
        {
          title:"kids Muay Thai",
    	  start: '16:00', // a start time (12pm in this example)
    	  end: '17:00', // an end time (1pm in this example)
    	  color:'#000066',
    	  dow: [ 1, 2,3,4] // Repeat monday and thursday
        },
        {
          title:"Chute Boxe Muay Thai",
    	  start: '18:00', // a start time (12pm in this example)
    	  end: '19:30', // an end time (1pm in this example)
    	  color:'#131313',
    	  dow: [ 1, 3] // Repeat monday and thursday
        },

         {
          title:"Brazilian Jiu Jitsu - gi",
    	  start: '19:30', // a start time (7:30pm in this example)
    	  end: '21:00', // an end time (9pm in this example)
    	  color:'#ab1d1d',
    	  dow: [ 1, 3] // Repeat monday and wed
        },
         {
          title:"Muay Thai",
    	  start: '20:00', // a start time 8pm
    	  end: '21:00', // an end time 9pm
    	  color:'#2f73b7',
    	  dow: [ 1, 3 ] // Repeat monday and wed
        },

        //tuesday
        {
          title:"MMA: fundementals",
    	  start: '10:00', // a start time 10am
    	  end: '11:00', // an end time 11am
    	  color:'#864b02',
    	  dow: [ 2, 4 ] // Repeat monday and wed
        },
        {
          title:"Sanda Kickboxing",
    	  start: '17:30', // a start time 5:30PM
    	  end: '18:30', // an end time 6:30PM
    	  color:'#7e35b4',
    	  dow: [ 2, 4 ] // Repeat monday and wed
        },

        {
          title:"Boxing",
    	  start: '18:30', // a start time 5:30PM
    	  end: '20:00', // an end time 6:30PM
    	  color:'#375349',
    	  dow: [ 2 ] // Repeat TUES
        },
         {
          title:"Brazilian Jiu Jitsu - no gi",
    	  start: '19:00', // a start time (7pm in this example)
    	  end: '20:00', // an end time (8pm in this example)
    	  color:'#cb4b00',
    	  dow: [ 2, 4] // Repeat monday and wed
        },
          {
          title:"Muay Thai: fundamentals -(basic technique and pads)",
    	  start: '20:00', // a start time (6:30 in this example)
    	  end: '21:00', // an end time (7:30pm in this example)
    	  color:'#739db6',
    	  dow: [ 2] // Repeat monday and wed
        },
        //WED
        {
          title:"MMA Sparring - invitational only",
    	  start: '21:00', // a start time (9 in this example)
    	  end: '22:00', // an end time (10pm in this example)
    	  color:'#833d0d',
    	  dow: [ 3] // Repeat monday and wed
        },
        //thurs
        {
          title:"Muay Thai: fundamentals -(basic technique and pads)",
    	  start: '18:30', // a start time (6:30 in this example)
    	  end: '19:30', // an end time (7:30pm in this example)
    	  color:'#739db6',
    	  dow: [ 4] // Repeat monday and wed
        },
         {
          title:"Muay Thai: advanced",
    	  start: '19:30', // a start time (6:30 in this example)
    	  end: '20:30', // an end time (7:30pm in this example)
    	  color:'#739db6',
    	  dow: [ 4] // Repeat monday and wed
        },
         {
          title:"Muay Thai: clinch",
    	  start: '20:30', // a start time (6:30 in this example)
    	  end: '21:30', // an end time (7:30pm in this example)
    	  color:'#739db6',
    	  dow: [ 4] // Repeat monday and wed
        },
        //friday
        {
          title:"intro to striking",
    	  start: '18:00', // a start time (6:30 in this example)
    	  end: '19:00', // an end time (7:30pm in this example)
    	  color:'#213668',
    	  dow: [5] // Repeat monday and wed
        },
        {
          title:"Wrestling",
    	  start: '18:00', // a start time (6:30 in this example)
    	  end: '19:00', // an end time (7:30pm in this example)
    	  color:'#2a8a23',
    	  dow: [ 5] // Repeat monday and wed
        },
        {
          title:"MMA Striking -invitational only",
    	  start: '19:00', // a start time (6:30 in this example)
    	  end: '20:30', // an end time (7:30pm in this example)
    	  color:'#008080',
    	  dow: [ 5] // Repeat monday and wed
        },
        //SAT
          {
          title:"Chute Boxe Muay Thai",
    	  start: '11:00', // a start time (12pm in this example)
    	  end: '12:30', // an end time (1pm in this example)
    	  color:'#131313',
    	  dow: [ 6] // Repeat monday and thursday
        },
         {
          title:"Brazilian Jiu Jitsu - gi",
    	  start: '12:30', // a start time (7:30pm in this example)
    	  end: '14:00', // an end time (9pm in this example)
    	  color:'#ab1d1d',
    	  dow: [ 6] // Repeat monday and wed
        },
        //sun
        {
          title:"Wrestling",
    	  start: '11:00', // a start time (6:30 in this example)
    	  end: '12:00', // an end time (7:30pm in this example)
    	  color:'#2a8a23',
    	  dow: [ 0] // Repeat monday and wed
        },
        {
          title:"Boxing",
    	  start: '12:00', // a start time 5:30PM
    	  end: '13:30', // an end time 6:30PM
    	  color:'#375349',
    	  dow: [ 0] // Repeat TUES
        },
        {
          title:"Intro to Striking",
    	  start: '13:30', // a start time (6:30 in this example)
    	  end: '14:30', // an end time (7:30pm in this example)
    	  color:'#213668',
    	  dow: [0] // Repeat monday and wed
        },
        {
          title:"MMA Striking -invitational only",
    	  start: '14:30', // a start time (6:30 in this example)
    	  end: '16:00', // an end time (7:30pm in this example)
    	  color:'#008080',
    	  dow: [ 0] // Repeat monday and wed
        },
        

      ],
      timeFormat: 'h:mma', // uppercase hour, min, am or pm
       

    });




});
