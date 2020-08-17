var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
}

function testNoteListTest() {
  var noteList = new NoteList();
  assert.isTrue(noteList.notes === []);
};

testNoteListTest();
