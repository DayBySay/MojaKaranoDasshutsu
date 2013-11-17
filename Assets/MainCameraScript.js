#pragma strict

var touchStartPositionX : float;
var touchStartPositionY : float;
var touchStartTime : int;
var touchEndPositionX : float;
var touchEndPositionY : float;

function Update () {

	//  flick
	if (Input.touchCount > 0) {
	
		var touch = Input.GetTouch(0);
		if (touch.phase == TouchPhase.Began) {
			touchStartPositionX = touch.position.x;
			touchStartPositionY = touch.position.y;
			touchStartTime = Time.time;
		}
		
 	 	if (touch.phase == TouchPhase.Ended) {
 	 		
 	 		 var elapsedTime = Time.time;
 	 		 
 	 		 
 	 		 if (elapsedTime - 1 < touchStartTime) {
 	 		 	 var  flickRenge = 150;
 	 		 	 touchEndPositionX = touch.position.x;
 	 		 	 touchEndPositionY = touch.position.y;
	Debug.Log("hanni sX =" + touchStartPositionX + " eX =" + touchEndPositionX + " sY = " + touchStartPositionY + " eY =" + touchEndPositionY);
 	 		 	if (touchStartPositionX - flickRenge > touchEndPositionX) {
 	 		 		flick(1);
 	 		 	} else if (touchStartPositionX + flickRenge < touchEndPositionX) {
 	 		 		flick(2);
 	 		 	} else if (touchStartPositionY - flickRenge  > touchEndPositionY) {
 	 		 		flick(3);
 	 		 	} else if (touchStartPositionY + flickRenge < touchEndPositionY) {
 	 		 		flick(4);
 	 		 	}
 	 		 }
 	 	}
	}

}

 function flick (type : int) 
{
	switch (type) {
		case 1: 
			transform.eulerAngles.y -= 90;
			break;
		case 2:
			transform.eulerAngles.y += 90;
			break;
	}
	Debug.Log("hurikku!!" + type);
}