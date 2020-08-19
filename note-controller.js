(function(exports) {

  this.nl = new NoteList();  // global scope

  function NoteController(notelist = nl) {
    notelist.createNew('Favourite drink: Beer');
    this.view = new NoteListView(notelist)
  };



  NoteController.prototype.insertHTML = function () {

    return this.view.getHTML();

    // var element = document.getElementById("app")
    // element.innerHTML = this.view.getHTML();

    };
  exports.NoteController = NoteController;
})(this);




/*
Code uses the constructor and prototype pattern to define a note controller that can be instantiated.
The note controller constructor does the following:

Takes a note list as a parameter.
Adds a note that says Favourite drink: seltzer.
Creates a note list view, passing in the note list.

The note controller has a method that gets HTML from the note list view and inserts it into the app element.
*/
