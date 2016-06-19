function Application () {
  var self = this;

  this.$app = $("#App");

  this.user_age = 28;

  this.real_pension = 0;

  this.title_card = new TitleCard(this);

  this.question_age_card = new QuestionAgeCard(this);

  this.question_form = new QuestionFormCard(this);

  this.answers = [1,1,1];

  this.result_card = new ResultCard(this);

  this.title_card.$this.show();
};

Application.prototype.init = function() {
    
};

Application.prototype.titleCardStartButtonListener = function (e) {
  this.swapTwoCards(this.title_card, this.question_age_card);

  e.preventDefault();
  return false;
}

Application.prototype.questionAgeWeiterListener = function (e) {
  this.swapTwoCards(this.question_age_card, this.question_form);

  e.preventDefault();
  return false;
}

Application.prototype.swapTwoCards = function(a, b, callback) {
  var $a = a.$this;
  var $b = b.$this;

  this.$app.animate({height: $b.outerHeight(true)}, 1000);

  $a.removeClass("current-question-card");
  $b.addClass("current-question-card");

  $b.css("opacity", 0).show();

  $("html, body").animate({ scrollTop: $b.offset().top - 14 }, 1000);

  $a.fadeOut({
    duration: 1000,
    complete: function() {

      $b.animate({opacity: 1}, 1000);
    }
  });

  console.log($b, $b.offset().top);
};


/* TITLE CARD */

function TitleCard ( app ) {
  this.$this = $("#TitleCard");

  this.$this.hide();

  this.app = app;

  $("#TitleCardStartButton").click(app.titleCardStartButtonListener.bind(app));
}


/* QUESTION AGE CARD */

QuestionAgeCard = function(app) {
    this.app = app;

    this.$this = $("#QuestionAge");
    
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

    this.$this.hide();

    this.$this.find("#QuestionAgeWeiter").click(this.app.questionAgeWeiterListener.bind(app));
}


/* QUESTION FORM CARD */

function QuestionFormCard ( app ) {
  this.$this = $("#QuestionsForm");

  this.questions = [
    "Auch im Alter wollen Sie einen gewissen Lebensstandard im Alltag und beim Wohnen erhalten. <br> Darf’s noch etwas mehr sein?",
    "Auch im Alter wollen Sie einen gewissen Lebensstandard im Alltag und beim Wohnen erhalten. <br> Darf’s noch etwas mehr sein?",
    "Auch im Alter wollen Sie einen gewissen Lebensstandard im Alltag und beim Wohnen erhalten. <br> Darf’s noch etwas mehr sein?",
  ].map(function(question_text, index){
    var q = new QuestionCard(self, index + 1, question_text);
    return q;
  });

  this.questions[0].$this.show();

  this.$this.hide();
}


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

  this.$this.hide();
};



function ResultCard(app) {
  this.app = app;

  this.$this = $("#Result");

  this.$ = function(a) {
    return this.$this.find(a);
  }

  this.createSliders();

  var text_cell_height = this.$(".text-cell").height();

  this.$(".slider-cell").each(function(i, item) {
    var $item = $(item);
    $item.height(text_cell_height);
    var padding_top = ( text_cell_height) / 2;
    $item.css("padding-top", padding_top);
  });

  text_cell_height = this.$(".text-cell").innerHeight();

  this.$(".image-cell").each(function(i, item) {
    $(item).innerHeight(text_cell_height);
  });

  this.$this.hide();
};

ResultCard.prototype.createSliders = function() {
  var self = this;

  this.sliders = [];

  this.app.answers.map(function(num, index) {
    var i = index + 1;
    self.sliders.push(
        $("#FinalPageSlider_" + i).slider({
          min: 1,
          max: 5,
          animate: false,
          range: "min",
          value: num,
          change: function( event, ui ) {
            self.app.answers[index] = ui.value;

            /*TweenLite.to($("#PensionPrice"), 0.4, {"opacity": 0, onComplete: function() {
              $("#PensionPrice").text( Math.round(self.app.imaginary_pension / 10 ) * 10 + " Euro*");

              TweenLite.to($("#PensionPrice"), 0.4, {"opacity": 1});
            }});*/

            //self.app.calculateImaginaryPension();

            //var $this = $("#FinalSliderImages_" + i);

            //TweenLite.to( $this, 1, {x: -1 * $this.width() * (ui.value - 1)});
          }
        })
      );
  });

  this.payment_slider = this.$("#ResultPayment").slider({
    min: 20,
    max: 500,
    step: 1,
    animate: true,
    range: "min",
    value: 0,
    slide: function (e, ui) {
      //self.$("#ResultPayment .value").text(ui.value);
      //self.updateCalculatorResult();
    },
    stop: function() {
      //self.app.showGameOverScreen();

      //var app = self.app;
      //if ( app.real_pension < app.imag_pension ) {
        // console.log("THIS IS IT");
        
      //}
    }
  });

  this.year_slider = $("#ResultWorkYears").slider({
    min: 18,
    max: 55,
    animate: true,
    range: "min",
    value: self.app.user_age,
    slide: function(e, ui) {
      /*self.app.user_age = ui.value;

      $("#ResultWorkYears .value").text(ui.value);

      var pens_array = Application.PENSION_DATA_ARRAY[ui.value];
      var min = pens_array[0];
      var max = pens_array[4];

      self.payment_slider.slider("option", "min", min);
      $("#ResultPayment .min").text(min);

      self.payment_slider.slider("option", "max", max);
      $("#ResultPayment .max").text(max);

      self.updateCalculatorResult();*/
    }
  });
};


ResultCard.prototype.createCalculator = function() {
  var self = this;

  

  $("#ResultWorkYears .value").text(this.app.user_age);
};



$(function() {

  window.app = new Application();
  app.init();
});