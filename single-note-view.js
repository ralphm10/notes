(function(exports) {

  this.singlenote = new Note();

  function SingleNote(note = singlenote) {
    this.note = note;
  };

  SingleNote.prototype.returnHTML = function () {
    return '<div>' + this.note.getText() + '</div>'

  };
exports.SingleNote = SingleNote;
})(this);
