// toggle on/off linenumber display in all codecells

var toggle_all = function(){
    this.state = !this.state;
    var cells = IPython.notebook.get_cells()
    for(var i in cells ){
        cells[i].toggle_line_numbers(this.state)
    }
}


IPython.toolbar.add_buttons_group([{
      label:'toggle all line number',
      icon:'fa-sort-numeric-asc',
      callback:toggle_all,
}])
