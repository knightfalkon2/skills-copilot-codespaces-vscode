function skillsMember() {
  var member = document.getElementById("member");
  var memberValue = member.options[member.selectedIndex].value;
  var memberSkills = document.getElementById("memberSkills");
  var memberSkillsValue = memberSkills.options[memberSkills.selectedIndex].value;

  if (memberValue == "member" && memberSkillsValue == "skills") {
    alert("Please select a member and a skill to add.");
  } else if (memberValue == "member") {
    alert("Please select a member to add the skill.");
  } else if (memberSkillsValue == "skills") {
    alert("Please select a skill to add to the member.");
  } else {
    // AJAX
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("memberSkillsTable").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "skillsMember.php?member=" + memberValue + "&skill=" + memberSkillsValue, true);
    xhttp.send();
  }
}