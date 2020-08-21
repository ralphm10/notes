function testNoteListViewTest() {
  var noteList = new NoteList();
  noteList.createNew('The quick brown fox jumps over the lazy dog.')
  noteList.createNew('This is a different note from the first one I passed in')
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === '<ul><li><div><a href="#notes/2">The quick brown fox </a></div></li><li><div><a href="#notes/3">This is a different </a></div></li></ul>','note list view test')
};

testNoteListViewTest();
