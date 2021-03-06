(function() {
  var todo = {
    list: [],
    // tableRowString: "<tr><td>" + (i + 1) + "</td><td>" + todoList[i] + "</td></tr>"
    init: function() {
      this.DOMobjects();
      this.bindEvent();
    },

    DOMobjects: function() {
      this.todoForm = $("#todo-input-form");
      this.todoInput = this.todoForm.find('input[type=text]');
      this.todoTableBody = $("#todo-table-body");
      this.todoTotalNumber = $("#number-of-todo");
    },
    bindEvent: function() {
      this.todoForm.on("submit", this.updateTodoTable.bind(this));
    },
    updateTodoTable: function(event) {
      event.preventDefault();
      var input = this.todoInput.val();
      this.list.push(input);
      this.todoTableBody.empty();
      for(var i = 0; i < this.list.length; i++) {
        $("#todo-table-body").append("<tr><td>" + (i + 1) + "</td><td>" + this.list[i] + "</td></tr>")
      }
      this.todoTotalNumber.text(this.list.length);
      this.todoForm.val('');
    }
  };

  todo.init();

})();



// var todoList = [];

// $("#todo-input-form").on("submit", function(event) {
//   event.preventDefault();
// // get input
//   var input = $(this).val();
//   todoList.push(input);


// // updating dom
//   $("#todo-table-body").empty();

//   for(var i = 0; i < todoList.length; i++) {
//     $("#todo-table-body").append("<tr><td>" + (i + 1) + "</td><td>" + todoList[i] + "</td></tr>")
//   }
// //update number of total tasks display
//   $("#number-of-todo").text(todoList.length);

// //clear the input text field
//   $(this).find('input[type=text]').val('');
// });


