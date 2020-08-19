function testNoteListViewTest() {
  var noteList = new NoteList();
  noteList.createNew('The quick brown fox jumps over the lazy dog.')
  noteList.createNew('This is a different note from the first one I passed in')
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === '<ul><li><div>The quick brown fox </div></li><li><div>This is a different </div></li></ul>','note list view test')
};

testNoteListViewTest();
