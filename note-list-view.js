(function(exports) {
  function NoteListView(noteList) {
    this.list = noteList
  };

  NoteListView.prototype.getHTML = function (limit = 20) {

    var notearray = this.list.getList();
    var textarray = [];

    for(let i = 0; i < notearray.length; i++) {
      textarray.push('<a href="#notes/' + notearray[i].id + '">' + notearray[i].getText().slice(0,limit) + '</a>');
    }

    return '<ul><li><div>' + textarray.join('</div></li><li><div>') + '</div></li></ul>';

  };
  exports.NoteListView = NoteListView;
})(this);
