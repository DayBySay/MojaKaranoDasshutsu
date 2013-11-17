#pragma strict

function Update () {
	var axis = Input.GetAxisRaw("Horizontal");
	
	if (axis == 1) {
		transform.eulerAngles.y += 90.0;
	} else if (axis == -1) {
		transform.eulerAngles.y -= 90.0;
	}
	
	 Debug.Log(Input.touchCount);
	if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Moved) {
 		Debug.Log(" hurikku ");
		transform.eulerAngles.y += 90.0;
 	}

}