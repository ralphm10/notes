var counter = 0;

(function(exports) {

  function Note(text) {
    this.text = text;
    this.id = counter;
    counter ++;
  };

  exports.Note = Note;

  Note.prototype.getText = function () {
    return this.text;

  };

})(this);
``
