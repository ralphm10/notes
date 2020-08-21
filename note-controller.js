(function(exports) {

  this.nl = new NoteList();  // global scope

  function NoteController(notelist = nl) {
    //notelist.createNew('Favourite drink: Beer');
    this.view = new NoteListView(notelist)
  };

  NoteController.prototype.insertHTML = function () {

    var element = document.getElementById("app")
    element.innerHTML = this.view.getHTML();

    };
  exports.NoteController = NoteController;
})(this);
