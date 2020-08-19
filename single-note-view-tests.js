function singleNoteViewTest() {
  var note = new Note('a new single note');
  var singlenote = new SingleNote(note);
  console.log(singlenote.returnHTML());
  assert.isTrue(singlenote.returnHTML() === '<div>a new single note</div>');
};

singleNoteViewTest();
