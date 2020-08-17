var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
}

function testNoteTest() {
  var note = new Note('learn to code');
  assert.isTrue(note.text === 'learn to code');
};

testNoteTest();
