var counter = 0;

(function(exports) {

  function Note(text) {
    this.text = text;
    this.id = counter;
    counter ++;
  };

    Note.prototype.getText = function () {
    return this.text;

  };
  exports.Note = Note;
})(this);
