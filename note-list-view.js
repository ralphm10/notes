(function(exports) {
  function NoteListView(noteList) {
    this.list = noteList
  };

  exports.NoteListView = NoteListView;

  NoteListView.prototype.getHTML = function () {

    return '<ul><li><div>' + this.list.getList()[0].getText() + '</div></li><li><div>' + this.list.getList()[1].getText() + '</div></li></ul>';

  };

})(this);
