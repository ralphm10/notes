function testNoteListViewTest() {
  var noteList = new NoteList();
  noteList.createNew('some text')
  noteList.createNew('more text')
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === '<ul><li><div>some text</div></li><li><div>more text</div></li></ul>')
};

testNoteListViewTest();
