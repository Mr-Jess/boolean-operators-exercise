function moreThan5(name) {
  return name > 5;
}

function topScore(topNum,num) {
  return num < topNum;
}

function isInDanger(grade) {
  return grade >=60 && grade <=71;
}

function isCoasting(grade) {
  return grade >=72 && grade<=83;
}

function isSucceeding(grade) {
  return grade >=84 && grade<=92;
}

function isFailing(grade) {
  return grade < 60;
}

function isAcing(grade) {
  return grade > 92;
}

function isStudent(jesse) {
  return jesse === 'student';
}

function isTeacher(colin) {
  return colin === 'teacher';
}

function isAdmin(job) {
  return job === 'admin';
}

function isElementary(grade) {
  return grade === 'elementary';
}

function notAnElementarySchoolAdministrator(job, grade) {
  return job !== 'elementary' || grade !== 'admin';
}

function isMiddleSchoolTeacher(job, grade) {
  return job === 'teacher' && grade >=6 && grade<=8
}

function differentPeople() {

}

module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
  differentPeople,
}