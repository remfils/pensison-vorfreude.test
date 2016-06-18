function Application () {
  this.user_age = 28;

  this.real_pension = 0;

  this.question_age_card = new QuestionAgeCard(this);
};

Application.prototype.init = function() {
    
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