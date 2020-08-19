function singleNoteViewTest() {
  var note = new Note('a new single note');
  var singlenote = new SingleNote(note);
  assert.isTrue(singlenote.returnHTML() === '<div>a new single note</div>', 'single note view test');
};

singleNoteViewTest();


// to update other tests - add titile as string arguement to isTrue
