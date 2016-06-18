function Application () {
  var self = this;

  this.user_age = 28;

  this.real_pension = 0;

  this.question_age_card = new QuestionAgeCard(this);

  this.questions = [
    "Auch im Alter wollen Sie einen gewissen Lebensstandard im Alltag und beim Wohnen erhalten. <br> Darf’s noch etwas mehr sein?",
    "Auch im Alter wollen Sie einen gewissen Lebensstandard im Alltag und beim Wohnen erhalten. <br> Darf’s noch etwas mehr sein?",
    "Auch im Alter wollen Sie einen gewissen Lebensstandard im Alltag und beim Wohnen erhalten. <br> Darf’s noch etwas mehr sein?",
  ].map(function(question_text, index){
    var q = new QuestionCard(self, index + 1, question_text);
  });
};

Application.prototype.init = function() {
    
};


/* QUESTION CARD */

function QuestionCard ( app, question_number, question_text ) {
  this.app = app;
  this.num = question_number;
  this.text = question_text;

  this.is_transition = false;

  this.$this = $("#Question_" + this.num);

  this.$ = function(query) {
    return this.$this.find(query);
  }

  this.slider = this.$( ".pension-question-slider" ).slider({
    min: 1,
    max: 5,
    animate: false,
    range: "min",
    value: 1,
    start: function( event, ui ) {
      prev_value = ui.value;
    },
    stop: function( event, ui ) {
      self.swapImages(prev_value, ui.value);
    },
    change: function( event, ui ) {
      self.app.answers[ self.num - 1 ] = ui.value;
    }
  });
};


QuestionAgeCard = function(app) {
    this.app = app;
    
    this.age_slider = $("#SliderUserAge").slider({
        min: 18,
        max: 67,
        animate: true,
        range: "min",
        value: app.user_age,
        slide: function(event, ui) {
          app.user_age = ui.value;
          $("#SliderUserAge .ui-handle-text").text(ui.value + " Jahre");
        }
        });
    $("#SliderUserAge .ui-slider-handle").append("<span class='ui-handle-text'>" + app.user_age + " Jahre</span>");

    this.$this = $("#QuestionAge");
    //this.$this.hide();
}

$(function() {

  window.app = new Application();
  app.init();
});