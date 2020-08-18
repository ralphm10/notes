function testNoteListTest() {
  var noteList = new NoteList();
  assert.isTrue(noteList.getList().constructor === Array)
};

testNoteListTest();

function testCreateNoteListTest() {
  var noteList = new NoteList();
  noteList.createNew('some text')
  assert.isTrue(noteList.notes[0].getText() === 'some text')
};

testCreateNoteListTest();
