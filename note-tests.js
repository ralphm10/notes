

function testNoteTest() {
  var note = new Note('learn to code');
  assert.isTrue(note.getText() === 'learn to code');
};

testNoteTest();
