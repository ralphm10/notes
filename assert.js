var assert = {
  isTrue: function(assertionToCheck, title = 'untitled') {
    if (!assertionToCheck) {
      console.log(this.isTrue.caller)
      throw new Error("Assertion failed: (" + title + '): ' + assertionToCheck + " is not truthy")

    } else {
      console.log(title + ': PASSED!');
    }
  }
}
