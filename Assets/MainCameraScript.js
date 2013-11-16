#pragma strict

function Update () {
	var axis = Input.GetAxisRaw("Horizontal");
	
	if (axis == 1) {
		transform.eulerAngles.y += 90.0;
	} else if (axis == -1) {
		transform.eulerAngles.y -= 90.0;
	}
}