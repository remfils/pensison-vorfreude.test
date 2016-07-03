function Application () {
  var self = this;

  this.$app = $("#App");

  this.user_age = 28;

  this.answers = [1,1,1];

  this.real_pension = 0;

  this.title_card = new TitleCard(this);

  this.question_age_card = new QuestionAgeCard(this);

  this.question_form = new QuestionFormCard(this);

  this.result_card = new ResultCard(this);

  this.title_card.$this.show();

  this.current_card = this.title_card;

  $("#GameOverScreen").dialog({
    autoOpen: false,
    modal: true,
    width: 440,
    resizable: true,
    create: function (event, ui) {
        $('.ui-dialog-titlebar').css({'background':'none','border':'none'});
        $("#dialog-model").css({ 'padding': '0' });
        $(".ui-dialog-titlebar").html('');
    }
  });

  $(window).on("resize", this.onResizeListener.bind(this));

  $(window).on("scroll", this.onScrollListener.bind(this));
};

var doit;
Application.prototype.onResizeListener = function(e) {
  var current_card = this.current_card;

  clearTimeout(doit);
  doit = setTimeout(this.onResizeEndListener.bind(this), 100);

  if ( current_card.updateSize ) {
    current_card.updateSize();
  }
};

Application.prototype.onResizeEndListener = function() {
  this.$app.css({height: this.current_card.$this.outerHeight(true)});
};

Application.prototype.onScrollListener = function(e) {
  var $icon_bar = $(".if6_iconbar");
  var $window = $(window);
  if ( $window.scrollTop() > $icon_bar.offset().top ) {
    $icon_bar.addClass("iconbar-fixed");
  }
  else {
    $icon_bar.removeClass("iconbar-fixed");
  }
};

Application.prototype.titleCardStartButtonListener = function (e) {
  this.swapTwoCards(this.title_card, this.question_age_card);

  e.preventDefault();
  return false;
};

Application.prototype.questionAgeWeiterListener = function (e) {
  this.swapTwoCardsWithAnimation(this.question_age_card, this.question_form);

  e.preventDefault();
  return false;
};

Application.prototype.goBackToAgeQuestion = function() {
  this.swapTwoCardsWithAnimation(this.question_form, this.question_age_card);
};

Application.prototype.allQuestionsFinishedListener = function() {
  var self = this;

  this.swapTwoCardsWithAnimation(this.question_form, this.result_card, function() {
    self.result_card.init();
  });
};

Application.prototype.swapTwoCards = function(a, b, callback) {
  var $a = a.$this;
  var $b = b.$this;

  this.current_card = b;

  this.$app.animate({height: $b.outerHeight(true)}, 1000);

  var left_offset = $a.offset().left;

  $a.removeClass("current-question-card");
  $b.addClass("current-question-card");

  $a.css("left", left_offset);

  $b.css("opacity", 0).show();

  if ( b.updateSize ) {
    b.updateSize();
  }

  $a.fadeOut({
    duration: 1000,
    complete: function() {
      $b.animate({opacity: 1}, 1000, callback);
    }
  });
};

Application.prototype.swapTwoCardsWithAnimation = function(a, b, callback) {
  this.swapTwoCards(a, b, callback);

  this.animatedChangeApplicationHeight(b.$this.outerHeight(true));

  this.scrollTo(b.$this, 1000);
};

Application.prototype.scrollTo = function($item, duration) {
  console.log("ScrollTo started");
  $("html, body").animate({ scrollTop: $item.offset().top - $(".if6_iconbar").outerHeight() }, duration, function() {
    console.log("Scroll To finished");
  });
};

Application.prototype.animatedChangeApplicationHeight = function(height, time) {
  time = time ? time : 1000;
  this.$app.animate({height: height}, time);
};

Application.prototype.calculateImaginaryPension = function() {
  var imag_pension = 0;
  var MAX_PENSION = 1000;
  var QUESTIONS_COUNT = 3;
  var QUESTION_OPTIONS_COUNT = 5;

  this.answers.map(function(num) {
    imag_pension += num / QUESTION_OPTIONS_COUNT;
  });

  imag_pension = imag_pension / QUESTIONS_COUNT * MAX_PENSION;

  this.imaginary_pension = imag_pension;

  return Math.round(imag_pension / 10) * 10;
};

var PENSIONS = [200, 400, 600, 800, 1000]
Application.prototype.calculateRealPension = function(age, savings) {
  var pens_array = PENSION_ARRAY[age];

  for ( var i=0; i < pens_array.length; i++ ) {
    if ( savings < pens_array[i] ) {
      break;
    }
  }

  if ( i == 0  ) {
    i = 1;
  }

  if ( i >= pens_array.length ) {
    i = pens_array.length - 1;
  }

  var norm = (PENSIONS[i] - PENSIONS[i-1]) / (pens_array[i] - pens_array[i-1]);
  var result = PENSIONS[i] - (pens_array[i] - savings) * norm;

  console.log(result, pens_array[i] - pens_array[i-1]);

  return result;
};

Application.prototype.calculateSavings = function(pension) {
  var p = pension || this.imaginary_pension;
  var p_a = PENSION_ARRAY[this.user_age];

  var savings = 0;

  if ( p < 400 ) {
    savings = p_a[0] + ( p_a[1] - p_a[0] ) * ( p - 200 ) / 200;
  }
  else if ( p < 600 ) {
    savings = p_a[1] + ( p_a[2] - p_a[1] ) * ( p - 400 ) / 200;
  }
  else if ( p < 800 ) {
    savings = p_a[2] + ( p_a[3] - p_a[2] ) * ( p - 600 ) / 200;
  }
  else {
    savings = p_a[3] + ( p_a[4] - p_a[3] ) * ( p - 800 ) / 200;
  }

  return savings;
};
var resize_listener_timer;
function gameOverResizeListener () {
  clearTimeout(resize_listener_timer);
  resize_listener_timer = setTimeout(gameOverResizeTimeout, 100);
};

function gameOverResizeTimeout() {
  var window_width = window.innerWidth;

  $("html, body").scrollTop( $('#PensionPrice').offset().top - $(".if6_iconbar").outerHeight());

  if ( window_width <= 400 ) {
    $("#GameOverScreen").dialog("option", "width", window_width - 40);
  }
  else {
    $("#GameOverScreen").dialog("option", "width", 440);
  }

  $("#GameOverScreen").dialog("option", "position", { my: "center-5 bottom", at: "center top", of: $("#PensionDisplayRow") } );
};

Application.prototype.showGameOverScreen = function() {
  this.scrollTo($('#PensionPrice'), 1000);

  var window_width = window.innerWidth;

  if ( window_width <= 400 ) {
    $("#GameOverScreen").dialog("option", "width", window_width - 40);
  }

  $("#GameOverScreen")
    .dialog("option", "position", { my: "center-5 bottom", at: "center top", of: $("#PensionDisplayRow") })
    .dialog("open");

  $(window).on("resize", gameOverResizeListener);

  $("#RestartGameButton").on("click", this.restartGameButtonClickListener.bind(this));
};

Application.prototype.restartGameButtonClickListener = function(e) {
  $(window).off("resize", gameOverResizeListener);
  $("#RestartGameButton").unbind("click");

  $("#GameOverScreen").dialog("close");

  this.result_card.hideCalculator();

  this.scrollTo(this.result_card.$this, 1000);

  e.preventDefault();
  return false;
};


/* TITLE CARD */

function TitleCard ( app ) {
  this.$this = $("#TitleCard");

  this.app = app;

  $("#TitleCardStartButton").click(app.titleCardStartButtonListener.bind(app));

  this.$this.hide();
};


/* QUESTION AGE CARD */

QuestionAgeCard = function(app) {
    this.app = app;

    this.$this = $("#QuestionAge");
    
    this.age_slider = $("#SliderUserAge").slider({
        min: 18,
        max: 55,
        animate: true,
        range: "min",
        value: app.user_age,
        slide: function(event, ui) {
          app.user_age = ui.value;
          $("#SliderUserAge .ui-handle-text").text(ui.value + " Jahre");
        }
        });
    $("#SliderUserAge .ui-slider-handle").append("<span class='ui-handle-text'>" + app.user_age + " Jahre</span>");

    this.$this.find("#QuestionAgeWeiter").click(this.app.questionAgeWeiterListener.bind(app));

    this.$this.hide();
};


/* QUESTION FORM CARD */

function QuestionFormCard ( app ) {
  this.app = app;
  this.$this = $("#QuestionsForm");

  this.questions = [
    "Auch im Alter wollen Sie einen gewissen Lebensstandard im Alltag und beim Wohnen erhalten. <br> Darf’s noch etwas mehr sein?",
    "Urlaub auf Balkonien oder unter Südseepalmen, einmal im Jahr wegfahren oder jederzeit ab <br />an den Strand – wie viel Reisefreiheit möchten Sie sich gönnen?",
    "Endlich hab ich Zeit dafür! Schauen Sie sich an, wie viel Rente Sie brauchen, damit Ihre Vorstellungen <br />vom Ruhestand wahr werden – und wie viel Vorsorge dafür nötig ist.",
  ].map(function(question_text, index){
    var q = new QuestionCard(app, index + 1, question_text);
    return q;
  });

  this.current_question_index = 0;

  this.questions[this.current_question_index].$this.show();

  $("#QuestionFormWeiter").click(this.questionFormWeiterClickListerner.bind(this));

  $("#QuestionFormBack").click(this.questionFormBackClickListener.bind(this));

  this.$this.hide();
};

QuestionFormCard.prototype.questionFormWeiterClickListerner = function(e) {
  if ( this.current_question_index >= this.questions.length - 1 ) {
    this.app.allQuestionsFinishedListener();
  }
  else {
    this.displayQuestion(this.current_question_index + 1);
  }

  e.preventDefault();
  return false;
};

QuestionFormCard.prototype.displayQuestion = function(question_index) {
  var prev_q = this.questions[this.current_question_index];
  var q = this.questions[question_index];

  this.current_question_index = question_index;

  this.updateQuestionNumbers();

  this.swapTwoQuestions(prev_q, q);
};

QuestionFormCard.prototype.updateQuestionNumbers = function() {
  var current_question_index = this.current_question_index;

  $("#QuestionNumbers span").each(function(i, item) {
    $(item).removeClass("current-question");
    if ( i == current_question_index ) {
      $(item).addClass("red");
      $(item).addClass("current-question");
    }
  });
};

QuestionFormCard.prototype.swapTwoQuestions = function(q1, q2) {
  var $q1 = q1.$this;
  var $q2 = q2.$this;

  this.changeQuestionText(q2.text);

  $q1.removeClass("current-question");
  $q2.addClass("current-question");
  $q2.css("opacity", 0).show();

  q2.updateSize();

  $q1.fadeOut({
    duration: 1000,
    complete: function() {
      $q2.animate({opacity: 1}, 1000);
    }
  });

  this.app.scrollTo(this.$this);
};

QuestionFormCard.prototype.changeQuestionText = function(text) {
  var self = this;
  var $c = $("#QuestionCardText");
  var $t = $("#QuestionCardText p");
  var h = $c.height();
  var diff = $c.outerHeight(true) - h;

  $c.height(h);

  var text_height_diff = $t.height();

  $t.animate({opacity: 0}, 1000, function() {
    $t.html(text);

    text_height_diff -= $t.height();

    self.app.animatedChangeApplicationHeight(self.$this.outerHeight(true) - text_height_diff, 500);

    $c.animate({height: $t.height() + diff}, 500, function() {
      $c.css("height", "");
    });
    $t.animate({opacity: 1}, 1000);
  });
};

QuestionFormCard.prototype.questionFormBackClickListener = function(e) {
  if ( this.current_question_index < 1 ) {
    this.app.goBackToAgeQuestion();
  }
  else {
    this.displayQuestion(this.current_question_index - 1);
  }

  e.preventDefault();
  return false;
};

QuestionFormCard.prototype.updateSize = function() {
  this.questions[this.current_question_index].updateSize();
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

  this.createSlider();

  this.addClickListeners();

  this.$(".answer-images img").each(function(i, item){
    if ( i != 0 ) {
      $(item).hide();
    }
  });

  this.updateSize();

  if ( this.app.DEBUG ) {
    return;
  }

  this.$this.hide();
};

QuestionCard.prototype.createSlider = function() {
  var self = this;
  var prev_value = 1;
  var self = this;

  var $slider = this.$( ".pension-question-slider" );

  var percents = [0, 25, 50, 75, 100];

  this.slider = $slider.slider({
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
      $slider.find(".ui-handle-text").text( percents[ui.value-1] + " %" );
    }
  });

  $slider.find(".ui-slider-handle").append("<span class='ui-handle-text'>" + 0 + " %</span>");

};

QuestionCard.prototype.addClickListeners = function() {
  var self = this;

  this.$(".plus-btn-cell span").click(function() {
    var $s = self.$(".pension-question-slider");
    var value = $s.slider( "option", "value" ) + 1;

    if ( value > $s.slider("option", "max") ) {
      return;
    }

    $s.slider("option", "value", value);

    self.swapImages(value-1, value);
  });

  this.$(".minus-btn-cell span").click(function() {
    var $s = self.$(".pension-question-slider");
    var value = $s.slider( "option", "value" ) - 1;

    if ( value <= 0 ) {
      return;
    }

    $s.slider("option", "value", value);

    self.swapImages(value+1, value);
  });
};

QuestionCard.prototype.updateSize = function() {
  var image_height = this.$(".answer-images .current-question-image").height();
  if ( image_height > 50 ) {
    this.$(".answer-images").height(image_height);
  }
};

QuestionCard.prototype.swapImages = function(img_from_index, img_to_index) {
  var $from = this.$("#Img_" + this.num + "_" + img_from_index);
  var $to = this.$("#Img_" + this.num + "_" + img_to_index);

  $from.removeClass("current-question-image");
  $to.addClass("current-question-image");

  $from.fadeOut();
  $to.fadeIn();
};


function ResultCard(app) {
  this.app = app;

  this.$this = $("#Result");

  this.$ = function(a) {
    return this.$this.find(a);
  }

  ResultCard.MOBILE_STATE = 1;
  ResultCard.TABLET_STATE = 2;
  ResultCard.WEB_STATE = 3;

  this.display_width_state = ResultCard.WEB_STATE;

  this.createSliders();

  this.createMobileFunctions();

  var text_cell_height = this.$(".text-cell").height();

  $("#ResultCardDisplayCalculatorBtn").click(this.resultCardDisplayCalculatorBtnClickListener.bind(this));

  this.$calculator_screen = $("#PensionCalculatorFirstMessage, #PensionCalculatorInput, #PensionCalculatorAfterMessage, #PensionCalculatorButtonLine");

  this.is_calculator_displayed = false;

  this.is_short_calculator_label_displayed = false;

  this.question_short_labels = [
    "Rinotera allundum Rinotera allundum est erando entalia.",
    "Rinotera allundum Rinotera allundum est erando entalia.",
    "Rinotera allundum Rinotera allundum est erando entalia."
  ];

  this.question_normal_labels = [
    "Rinotera allundum est erando entalia bueno kanitustra enorum klibum espana",
    "Rinotera allundum est erando entalia bueno kanitustra enorum klibum espana",
    "Rinotera allundum est erando entalia bueno kanitustra enorum klibum espana"
  ];

  if ( this.app.DEBUG ) {
    return;
  }

  this.$calculator_screen.hide();
  this.$this.hide();
};

ResultCard.prototype.createSliders = function() {
  var self = this;

  this.sliders = [];

  $("#PensionPrice").css("opacity", 0);

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

            self.updatePension();

            var $container = $("#FinalSliderImages_" + i);
            var width = $container.width();

            $container.animate({left: - $container[0].getBoundingClientRect().width * (ui.value - 1)}, 1000);
          }
        })
      );
  });

  var paymentResultSlideListener = function (e, ui) {
    self.$("#ResultPayment .value").text( Math.round(ui.value * 100) / 100 );
    self.updateCalculatorResult();
  }

  this.payment_slider = this.$("#ResultPayment").slider({
    min: 20,
    max: 500,
    step: 0.01,
    animate: true,
    range: "min",
    value: 0,
    slide: paymentResultSlideListener,
    change: paymentResultSlideListener,
    stop: function() {
      self.app.showGameOverScreen();
    }
  });

  var yearSlideFunction = function(e, ui) {
    self.app.user_age = ui.value;

    $("#ResultWorkYears .value").text(ui.value);

    var pens_array = PENSION_ARRAY[ui.value];
    var min = Math.round( pens_array[0] * 100 ) / 100;
    var max = Math.round( pens_array[4] * 100 ) / 100;

    self.payment_slider.slider("option", "min", min);
    $("#ResultPayment .min").text(min);

    self.payment_slider.slider("option", "max", max);
    $("#ResultPayment .max").text(max);

    var val = Math.round( (max - 0.5) * 100 ) / 100;

    var savings = self.payment_slider.slider("option", "value");
    self.payment_slider.slider("option", "value", savings);

    self.updateCalculatorResult();
  }

  this.year_slider = $("#ResultWorkYears").slider({
    min: 18,
    max: 55,
    animate: true,
    range: "min",
    value: self.app.user_age,
    slide: yearSlideFunction,
    change: yearSlideFunction
  });
};

ResultCard.prototype.createMobileFunctions = function() {
  var $all_cells = this.$(".slider-cell, .image-cell, .text-cell");
  var $slider_cell = this.$(".slider-cell");
  var $image_cell = this.$(".image-cell");
  var $text_cell = this.$(".text-cell");

  this.clearSizeOfResultCells = function() {
    $all_cells.css({
        width: "",
        height: ""
      });

    $slider_cell.css("padding-top", "");
  };

  var $question_image_containers = this.$(".question-image-container");
  var answers = this.app.answers;
  var fixImageContainerPosition = function(index, container) {
    console.log("This is timeout");
    var $container = $(container);

    $container.css("left", - $container[0].getBoundingClientRect().width * (answers[index] - 1) );
  };

  this.updatePositionsOfAnswerImages = function() {
    $question_image_containers.each(fixImageContainerPosition);
  };

  this.updateMobileSize = function() {
    var image_cell_height = $image_cell.innerHeight();
    var text_cell_height;

    $text_cell.css("height", "");

    text_cell_height = $text_cell.innerHeight();

    if ( image_cell_height > text_cell_height ) {
      $text_cell.outerHeight(image_cell_height);
    }
  };

  this.updateTabletSize = function() {
    var row_height = $text_cell.outerHeight(true);

    var image_width = row_height * 1000 / 667;

    $slider_cell
      .outerWidth(this.$(".row").width() - $image_cell.outerWidth(true) - $text_cell.outerWidth(true) - 2);
  };

  this.updateWebSize = function() {

  };
};

ResultCard.prototype.updateCalculatorResult = function() {
  var payment = this.payment_slider.slider("value");
  var year = this.app.user_age;

  var result = self.app.real_pension = this.app.calculateRealPension(year, payment);

  $("#ResultPension").val( Math.round(result / 10 ) * 10 + " Euro");
};

ResultCard.prototype.resultCardDisplayCalculatorBtnClickListener = function(e) {
  this.displayPensionCalculator();

  e.preventDefault();
  return false;
};


ResultCard.prototype.createCalculator = function() {
  var self = this;

  

  $("#ResultWorkYears .value").text(this.app.user_age);
};

ResultCard.prototype.init = function() {
  this.sliders.map(function(item, index) {
    item.slider("value", self.app.answers[index]);
  });

  this.updatePension(true);

  $("#PensionPrice")
    .stop(true)
    .animate({opacity: 1}, 300);
};

ResultCard.prototype.updatePension = function(is_instant_change) {
  var p = this.app.calculateImaginaryPension();

  var $pension_field = $("#PensionPrice");

  if ( is_instant_change ) {
    $pension_field.text(p);
  }
  else {
    $pension_field.animate({"opacity": 0}, 500, function() {
      $pension_field
        .text(p)
        .animate({"opacity": 1}, 500);
    });
  }
};

ResultCard.prototype.updateSize = function() {
  var self = this;

  var window_width = window.innerWidth;

  if ( window_width < 400 ) {
    if ( !this.is_short_text_displayed ) {
      this.$(".text-cell p").each(function(i, item) {
        $(item).html(self.question_short_labels[i]);
      });
    }
    this.is_short_text_displayed = true;
  }
  else {
    if ( this.is_short_text_displayed ) {
      this.$(".text-cell p").each(function(i, item) {
        $(item).html(self.question_normal_labels[i]);
      });
    }
    this.is_short_text_displayed = false;
  }

  if ( window_width < 400 ) {
    if ( !this.is_short_calculator_label_displayed ) {
      $("#ResultCardDisplayCalculatorBtn").text("Vorfreude berechnen");
      this.is_short_calculator_label_displayed = true;
    }
  }
  else {
    if ( this.is_short_calculator_label_displayed ) {
      $("#ResultCardDisplayCalculatorBtn").text("Wie wenig kostet meine Vorfreude?");
      this.is_short_calculator_label_displayed = false;
    }
  }

  if ( window_width <= 600 ) {
    if ( this.display_width_state != ResultCard.MOBILE_STATE ) {
      this.clearSizeOfResultCells();
    }

    this.updateMobileSize();

    this.display_width_state = ResultCard.MOBILE_STATE;
  }
  else if ( window_width <= 999 ) {
    if ( this.display_width_state != ResultCard.TABLET_STATE ) {
      this.clearSizeOfResultCells();
    }

    this.updateTabletSize();

    this.display_width_state = ResultCard.TABLET_STATE;
  }
  else {
    if ( this.display_width_state != ResultCard.WEB_STATE ) {
      this.clearSizeOfResultCells();
      this.updatePositionsOfAnswerImages();
    }

    this.display_width_state = ResultCard.WEB_STATE;
  }

  if ( window_width <= 999 ) {
    this.updatePositionsOfAnswerImages();
  }
};

ResultCard.prototype.updateImagesLeftPosition = function() {
  var width = $(".question-image-container img").first().width();

  $(".question-image-container").width(width);

  var iterateThroughImages = function(i, item) {
    if ( i != 0 ) {
      $(item).css("left", i * width);
    }
  }
  
  $(".question-image-container").each(function(i, item) {
    $(item).children().each(iterateThroughImages);
  });
};

ResultCard.prototype.displayPensionCalculator = function() {
  if ( this.is_calculator_displayed ) {
    return;
  }

  this.is_calculator_displayed = true;

  var self = this;

  self.$calculator_screen
    .css("opacity", 0)
    .show();

  this.app.$app.animate({
    height: this.$this.outerHeight(true)
  }, 1000, function() {
    self.$calculator_screen.animate({opacity: 1}, 400);
  });

  this.app.scrollTo($('#PensionCalculatorFirstMessage'), 1000);

  this.year_slider.slider("value", this.app.user_age);
  this.year_slider.find(".value").text(this.app.user_age);

  var p = this.app.calculateImaginaryPension();

  var savings = Math.round(this.app.calculateSavings(p));

  var p_a = PENSION_ARRAY[this.app.user_age];
  var min = p_a[0];
  var max = p_a[4];

  $("#ResultPayment .min").text(min);
  this.payment_slider.slider("option", "min", min);

  $("#ResultPayment .max").text(max);
  this.payment_slider.slider("option", "max", max);

  this.payment_slider.slider("value", savings);
  $("#ResultPayment .value").text( savings);

  $("#ResultPension").val( p + " Euro");
};

ResultCard.prototype.hideCalculator = function() {
  if ( !this.is_calculator_displayed ) {
    return;
  }

  this.is_calculator_displayed = false;

  var self = this;
  this.$calculator_screen.fadeOut(400);

  setTimeout(function () {
    self.$calculator_screen.hide();
    self.app.animatedChangeApplicationHeight(self.$this.outerHeight(true), 1000);
  }, 400);
};



$(function() {
  window.app = new Application();
});



var PENSION_ARRAY = [];
PENSION_ARRAY[18] = [27.07, 51.86, 76.65, 101.42, 126.23];
PENSION_ARRAY[19] = [28.41, 54.54, 80.67, 106.79, 132.92];
PENSION_ARRAY[20] = [29.83, 57.37, 84.92, 112.46, 140.01];
PENSION_ARRAY[21] = [31.34, 60.39, 89.42, 118.47, 147.53];
PENSION_ARRAY[22] = [32.93, 63.56, 94.2, 124.82, 155.46];
PENSION_ARRAY[23] = [34.62, 66.94, 99.27, 131.59, 163.92];
PENSION_ARRAY[24] = [36.41, 70.52, 104.63, 138.73, 172.86];
PENSION_ARRAY[25] = [38.3, 74.31, 110.32, 146.33, 182.35];
PENSION_ARRAY[26] = [40.32, 78.36, 116.39, 154.41, 192.44];
PENSION_ARRAY[27] = [42.47, 82.65, 122.83, 163.01, 203.19];
PENSION_ARRAY[28] = [42.47, 87.1, 129.52, 171.92, 214.32];
PENSION_ARRAY[29] = [42.47, 91.81, 136.59, 181.35, 226.11];
PENSION_ARRAY[30] = [42.47, 96.88, 144.16, 191.46, 238.74];
PENSION_ARRAY[31] = [52.260, 102.24, 152.22, 202.19, 252.16];
PENSION_ARRAY[32] = [55.12, 107.97, 160.8, 213.64, 266.48];
PENSION_ARRAY[33] = [58.19, 114.08, 169.99, 225.91, 281.8];
PENSION_ARRAY[34] = [61.46, 120.65, 179.83, 239.03, 298.21];
PENSION_ARRAY[35] = [64.96, 127.65, 190.34, 253.03, 315.72];
PENSION_ARRAY[36] = [68.73, 135.21, 201.68, 268.14, 334.61];
PENSION_ARRAY[37] = [72.79, 143.3, 213.81, 284.32, 354.85];
PENSION_ARRAY[38] = [77.14, 152.02, 226.9, 301.77, 376.65];
PENSION_ARRAY[39] = [81.86, 161.43, 241.03, 320.62, 400.21];
PENSION_ARRAY[40] = [86.95, 171.63, 256.31, 341.01, 425.69];
PENSION_ARRAY[41] = [92.45, 182.64, 272.84, 363.03, 453.22];
PENSION_ARRAY[42] = [98.46, 194.66, 290.88, 387.07, 483.28];
PENSION_ARRAY[43] = [104.99, 207.73, 310.45, 413.19, 515.93];
PENSION_ARRAY[44] = [112.13, 222.01, 331.89, 441.76, 551.63];
PENSION_ARRAY[45] = [119.97, 237.68, 355.39, 473.1, 590.82];
PENSION_ARRAY[46] = [128.57, 254.88, 381.19, 507.52, 633.82];
PENSION_ARRAY[47] = [138.1, 273.97, 409.82, 545.69, 681.54];
PENSION_ARRAY[48] = [148.67, 295.09, 441.52, 587.95, 734.37];
PENSION_ARRAY[49] = [160.46, 318.68, 476.9, 635.11, 793.33];
PENSION_ARRAY[50] = [173.65, 345.07, 516.48, 687.9, 859.31];
PENSION_ARRAY[51] = [188.61, 374.97, 561.33, 747.7, 934.05];
PENSION_ARRAY[52] = [205.56, 408.89, 612.21, 815.53, 1018.85];
PENSION_ARRAY[53] = [225.01, 447.77, 670.54, 893.31, 1116.07];
PENSION_ARRAY[54] = [247.52, 492.79, 738.06, 983.35, 1228.63];
PENSION_ARRAY[55] = [273.78, 545.33, 816.89, 1088.44, 1359.99];