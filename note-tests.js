

function testNoteTest() {
  var note = new Note('learn to code');
  assert.isTrue(note.getText() === 'learn to code','note text test');
};

testNoteTest();

function testNoteIDTest() {
  counter = 0;
  var note = new Note('learn to code');
  assert.isTrue(note.id === 0, 'note id test' )
};

testNoteIDTest();
