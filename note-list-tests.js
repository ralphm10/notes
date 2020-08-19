function testNoteListTest() {
  var noteList = new NoteList();
  assert.isTrue(noteList.getList().constructor === Array, 'note list array test')
};

testNoteListTest();

function testCreateNoteListTest() {
  var noteList = new NoteList();
  noteList.createNew('some text')
  assert.isTrue(noteList.notes[0].getText() === 'some text', 'note list text from array test')
};

testCreateNoteListTest();
