(function(exports) {
  function Note(text) {
    this.text = text;
  };

  exports.Note = Note;

  Note.prototype.getText = function () {
    return this.text;

  };

})(this);
