var SCREEN_GAME_OVER_MIN_WIDTH = 480;

function toStandartNumbers(number) {
  var n = Math.ceil(number * 100) / 100;
  return n.toFixed(2).replace(".", ",");
}


function Application () {
  var self = this;

  this.$app = $("#App");

  this.is_game_started = false;

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

  $("#TitleStartButton").on("click", this.titleStartButtonClickListener.bind(this));

  $(window).on("resize", this.onResizeListener.bind(this));

  $(window).on("scroll", this.onScrollListener.bind(this));

  this.onResizeListener(null);
};

Application.prototype.titleStartButtonClickListener = function(e) {
  e.preventDefault();

  if ( this.is_game_started ) {
    return false;
  }

  this.startGame();

  $("html, body")
    .stop()
    .clearQueue()
    .animate({ scrollTop: $("#Footer").offset().top - $(window).outerHeight(true) }, 400);

  return false;
};

Application.prototype.startGame = function() {
  this.is_game_started = true;

  this.swapTwoCardsWithAnimation(this.title_card, this.question_age_card);

  $("#TitleStartButton .linktext").animate({opacity: 0});
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
  this.$app.css({height: this.current_card.getHeight() });

  if ( !this.tryToFixFooterHeight() ) {
    $(".if6_footer").css("height", "");

    this.tryToFixFooterHeight();
  }
};

Application.prototype.tryToFixFooterHeight = function() {
  var $footer = $(".if6_footer");
  var empty_footer_height = window.innerHeight - $footer.offset().top - $footer.innerHeight();

  if ( empty_footer_height > 0 ) {
    $footer.height($footer.height() + empty_footer_height);
    return true;
  }
  
  return false;
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
  this.startGame();

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

  var left_offset = $a.offset().left;

  $a.removeClass("current-question-card");
  $b.addClass("current-question-card");

  $a.css("left", left_offset);

  $b.css({
    "opacity": 0,
    "left": 0
  }).show();

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

Application.prototype.scrollTo = function($item, duration, is_strict) {
  if ( !is_strict ) {
    is_strict = false;
  }

  if ( (!is_strict) && ($item.outerHeight(true) < window.innerHeight) ) {
    this.scrollToPosition(this.$app.offset().top + $item.outerHeight(true) - window.innerHeight, duration);
  }
  else {
    this.scrollToPosition($item.offset().top - $(".if6_iconbar").outerHeight(), duration);
  }
};


Application.prototype.scrollToPosition = function(num, duration) {
  $("html, body").animate({ scrollTop: num }, duration);
};

Application.prototype.animatedChangeApplicationHeight = function(height, time) {
  var self = this;

  var delta_height = height - this.$app.height();

  var $footer = $(".if6_footer");
  var empty_footer_height = window.innerHeight - delta_height - $footer.offset().top - $footer.innerHeight();

  if ( empty_footer_height > 0 ) {
    $footer
      .delay(100)
      .animate({"height":$footer.height() + empty_footer_height}, 100);
  }

  time = time ? time : 1000;
  this.$app.animate({height: height}, time, function() {
    self.onResizeListener(null);
  });
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

  return result;
};

Application.prototype.calculateSavings = function(age, pension) {
  var p = pension || this.imaginary_pension;
  var p_a = PENSION_ARRAY[age];

  var savings = 0;

  if ( p == 200 ) {
    savings = p_a[0];
  }
  else if ( p == 400 ) {
    savings = p_a[1];
  }
  else if ( p == 600 ) {
    savings = p_a[2];
  }
  else if ( p == 800 ) {
    savings = p_a[3];
  }
  else if ( p == 1000 ) {
    savings = p_a[4];
  }
  else if ( p < 400 ) {
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

  if ( window_width <= SCREEN_GAME_OVER_MIN_WIDTH ) {
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

  if ( window_width <= SCREEN_GAME_OVER_MIN_WIDTH ) {
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
  var $this = $("#TitleCard");
  this.$this = $this;

  this.app = app;

  $("#TitleCardStartButton").click(app.titleCardStartButtonListener.bind(app));

  $this.hide();

  this.getHeight = function () {
    return $this.outerHeight(true);
  }
};


/* QUESTION AGE CARD */

QuestionAgeCard = function(app) {
    this.app = app;

    var $this = $("#QuestionAge");
    this.$this = $this;
    
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

    $this.find("#QuestionAgeWeiter").click(this.app.questionAgeWeiterListener.bind(app));

    $this.hide();

    this.getHeight = function () {
      return $this.outerHeight(true);
    }
};


/* QUESTION FORM CARD */

function QuestionFormCard ( app ) {
  this.app = app;
  this.$this = $("#QuestionsForm");

  this.questions = [
    "Auch im Alter wollen Sie einen gewissen Lebensstandard im Alltag und beim Wohnen erhalten. Darf’s noch etwas mehr sein?",
    "Urlaub auf Balkonien oder unter Südseepalmen, einmal im Jahr wegfahren oder jederzeit ab an den Strand – wie viel Reisefreiheit möchten Sie sich gönnen?",
    "Endlich hab ich Zeit dafür! Schauen Sie sich an, wie viel Rente Sie brauchen, damit Ihre Vorstellungen vom Ruhestand wahr werden – und wie viel Vorsorge dafür nötig ist.",
  ].map(function(question_text, index){
    var q = new QuestionCard(app, index + 1, question_text);
    return q;
  });

  this.current_question_index = 0;

  this.questions[this.current_question_index].$this.show();

  $("#QuestionFormWeiter").click(this.questionFormWeiterClickListerner.bind(this));

  $("#QuestionFormBack").click(this.questionFormBackClickListener.bind(this));

  this.$this.hide();

  var self = this;
  this.getHeight = function () {
    return self.$this.outerHeight(true);
  }
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

  if ( this.is_question_transition ) {
    return;
  }

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
  var self = this;
  var $q1 = q1.$this;
  var $q2 = q2.$this;
  var $c = $("#QuestionContainer");

  this.is_question_transition = true;

  this.changeQuestionText(q2.text);

  $c.height($c.height());

  $q1.removeClass("current-question");
  $q2.addClass("current-question");
  $q2.css("opacity", 0).show();

  q2.updateSize();

  var delta = $q2.outerHeight(true) - $q1.outerHeight(true);

  
  $q1.fadeOut({
    duration: 1000,
    complete: function() {
      $c.animate({height: $c.outerHeight(true) + delta});
      self.is_question_transition = false;
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

  var $this = $("#Question_" + this.num);
  this.$this = $this;

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

  this.getHeight = function () {
    return $this.outerHeight(true);
  }

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

  this.slider = $slider.slider({
    min: 1,
    max: 5,
    animate: false,
    range: "min",
    value: 1,
    start: function( event, ui ) {
      prev_value = ui.value;
    },
    slide: function( event, ui ) {
      self.app.answers[ self.num - 1 ] = ui.value;

      self.swapImages(prev_value, ui.value);
      prev_value = ui.value;
    },
    change: function ( event, ui) {
      prev_value = ui.value;
    }
  });

  $slider.find(".ui-slider-handle").append("<span class='ui-handle-text'>" + 0 + " %</span>");

};

QuestionCard.prototype.swapImages = function(img_from_index, img_to_index) {
  var $from = this.$("#Img_" + this.num + "_" + img_from_index);
  var $to = this.$("#Img_" + this.num + "_" + img_to_index);

  this.setSliderHandleText(img_to_index);

  this.$(".pension-image").css("z-index", 0);

  $from.removeClass("current-question-image");
  $to.addClass("current-question-image");

  $from
    .finish()
    .clearQueue()
    .css("z-index", 1);
    
  $to
    .show()
    .css({"opacity" : 0, "z-index": 100})
    .animate({opacity: 1});
};

var percents = [0, 25, 50, 75, 100];
QuestionCard.prototype.setSliderHandleText = function(ui_value) {
  var $handle = this.$( ".pension-question-slider .ui-handle-text" );
  $handle.text(percents[ui_value-1] + " %");
};

QuestionCard.prototype.addClickListeners = function() {
  var self = this;
  var $span = this.$(".plus-btn-cell span");

  $span.click(function() {
    var $s = self.$(".pension-question-slider");
    var value = $s.slider( "option", "value" ) + 1;

    if ( value > $s.slider("option", "max") ) {
      return;
    }

    self.app.answers[ self.num - 1 ] = value;

    self.swapImages(value-1, value);
    $s.slider( "option", "value", value );
  });

  disableSelection($span[0]);

  $span = this.$(".minus-btn-cell span");

  $span.click(function() {
    var $s = self.$(".pension-question-slider");
    var value = $s.slider( "option", "value" ) - 1;

    if ( value <= 0 ) {
      return;
    }

    self.app.answers[ self.num - 1 ] = value;

    $s.slider("option", "value", value);

    self.swapImages(value+1, value);
  });

  disableSelection($span[0]);
};

function disableSelection(target){
if (typeof target.onselectstart!="undefined") //IE route
  target.onselectstart=function(){return false}
else if (typeof target.style.MozUserSelect!="undefined") //Firefox route
  target.style.MozUserSelect="none"
else //All other route (ie: Opera)
  target.onmousedown=function(e){if(e && e.target && e.target.tagName){if(/^(input|select)$/i.test(e.target.tagName)){return true;}}return false;}
}

QuestionCard.prototype.updateSize = function() {
  var image_height = this.$(".answer-images .current-question-image").height();
  if ( image_height > 50 ) {
    this.$(".answer-images").height(image_height);
  }
};


function ResultCard(app) {

  ResultCard.MESSAGE_HIDDEN = 1;
  ResultCard.MESSAGE_ALERT = 2;
  ResultCard.MESSAGE_NORMAL = 3;

  this.app = app;
  this.answers = [1,1,1];

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
    "So hoch soll Ihr Lebensstandard im Alltag.",
    "So viel Reisefreiheit möchten Sie sich im Alter gönnen.",
    "Solche Aktivitäten wollen Sie sich leisten können."
  ];

  this.question_normal_labels = [
    "So hoch soll Ihr Lebensstandard im Alltag und beim Wohnen sein.",
    "So viel Reisefreiheit möchten Sie sich im Alter gönnen.",
    "Solche Aktivitäten und Hobbys wollen Sie sich leisten können."
  ];


  var $c = $("#CalculatorMsg");
  var $this = this.$this;
  this.getHeight = function () {
    return $this.outerHeight(true) + $c.outerHeight(true);
  }

  this.message_state = ResultCard.MESSAGE_HIDDEN;

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

  this.answers.map(function(num, index) {
    var i = index + 1;
    self.sliders.push(
        $("#FinalPageSlider_" + i)
          .slider({
            min: 1,
            max: 5,
            animate: false,
            range: "min",
            value: num,
            slide: function( event, ui ) {
              self.answers[index] = ui.value;

              self.app.imaginary_pension = self.app.calculateImaginaryPension();

              self.updatePension();

              self.changeAnswerImageInQuestion(i, ui.value);

              self.sliders[index].find(".ui-handle-text").text(percents[ui.value-1] + " %");

              self.updateMessage();

              if ( self.is_calculator_displayed ) {
                self.updateSavings();

                var app = self.app;
                
                self.updateMessage(self.app.imaginary_pension);
              }
            }
          })
      );
  });

  self.sliders.map(function ($slider) {
    $slider.find(".ui-slider-handle").append("<span class='ui-handle-text'>" + 0 + " %</span>")
  })

  var paymentResultSlideListener = function (e, ui) {
    var payment = ui.value;
    self.updateCalculatorResult();

    var app = self.app;

    var p = self.app.calculateImaginaryPension();

    self.updateMessage(p);

    if ( app.imaginary_pension == 1000 ) {
      var a = PENSION_ARRAY[app.user_age];
      self.$("#ResultPayment .value").text( toStandartNumbers(a[4]) );
    }
    else {
      self.$("#ResultPayment .value").text( toStandartNumbers(payment) );
    }
  }

  this.payment_slider = this.$("#ResultPayment").slider({
    min: 20,
    max: 500,
    step: 0.01,
    animate: false,
    range: "min",
    value: 0,
    slide: paymentResultSlideListener,
    change: paymentResultSlideListener
  });

  var yearSlideFunction = function(e, ui) {
    self.app.user_age = ui.value;

    var user_pension = Math.round(self.app.imaginary_pension / 10) * 10;

    $("#ResultWorkYears .value").text(ui.value);

    var pens_array = PENSION_ARRAY[ui.value];
    var min = Math.round( pens_array[0] * 100 ) / 100;
    var max = Math.round( pens_array[4] * 100 ) / 100;

    var savings = self.app.calculateSavings(ui.value, user_pension);

    self.setResultPaymentSlider(min, max, savings);

    var p = self.app.calculateImaginaryPension();
    self.updateMessage(p);
  }

  this.year_slider = $("#ResultWorkYears").slider({
    min: 18,
    max: 55,
    animate: false,
    range: "min",
    value: self.app.user_age,
    slide: yearSlideFunction,
    change: yearSlideFunction
  });
};

ResultCard.prototype.updateMessage = function(p) {
  if ( p == Math.round(this.app.imaginary_pension) ) {
    var a = this.app.user_age;
    if ( a >= 28 && a <= 30 ) {
      this.alertYearStatement();
    }
    else {
      this.hideMessage();
    }
  }
  else {
    this.alertPensionIsWrongSatement();
  }
};

ResultCard.prototype.changeAnswerImageInQuestion = function(question_id, ui_value) {
  var $container = $("#FinalSliderImages_" + question_id);

  $container
    .stop()
    .clearQueue()
    .animate({left: - $container[0].getBoundingClientRect().width * (ui_value - 1)}, 1000);
};

ResultCard.prototype.createMobileFunctions = function() {
  var self = this;
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
  var answers = this.answers;
  var fixImageContainerPosition = function(index, container) {
    var $container = $(container);

    $container.css("left", - $container[0].getBoundingClientRect().width * (self.answers[index] - 1) );
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
      $text_cell.outerHeight(image_cell_height - 1);
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

  this.app.imaginary_pension = this.app.calculateRealPension(year, payment);

  this.app.imaginary_pension = Math.round(this.app.imaginary_pension / 10 ) * 10;

  console.log("Imag:", this.app.imaginary_pension);

  $("#ResultPension").val( this.app.imaginary_pension + " Euro");
};

ResultCard.prototype.resultCardDisplayCalculatorBtnClickListener = function(e) {
  this.displayPensionCalculator();

  e.preventDefault();
  return false;
};

// D!
ResultCard.prototype.createCalculator = function() {
  var self = this;

  

  $("#ResultWorkYears .value").text(this.app.user_age);
};

ResultCard.prototype.init = function() {
  var self = this;

  this.answers = this.app.answers;

  this.sliders.map(function(item, index) {
    item.slider("value", self.answers[index]);

    item.find(".ui-handle-text").text(percents[self.answers[index] - 1] + " %");;

    self.changeAnswerImageInQuestion(index + 1, self.answers[index]);
  });

  this.updatePension(true);

  $("#PensionPrice")
    .stop(true)
    .animate({opacity: 1}, 300);
};

ResultCard.prototype.updateSavings = function() {
  var pension = this.app.imaginary_pension;
  var age = this.app.user_age;

  var savings = this.app.calculateSavings(age, pension);
  this.payment_slider.slider("value", savings);
};

ResultCard.prototype.updatePension = function(is_instant_change) {
  var p = this.app.calculateImaginaryPension();

  var $pension_field = $("#PensionPrice");

  if ( is_instant_change ) {
    $pension_field.text(p);
  }
  else {
    $pension_field
      .stop()
      .clearQueue()
      .animate({"opacity": 0}, 500, function() {
        $pension_field
          .text(p)
          .animate({"opacity": 1}, 500);
    });
  }
};

ResultCard.prototype.updateSize = function() {
  var self = this;

  var window_width = window.innerWidth;

  if ( window_width < 425 ) {
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

  if ( window_width < 425 ) {
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

    self.year_slider.find(".value").text(self.app.user_age);
    self.year_slider.slider("value", self.app.user_age);

    var p = self.app.calculateImaginaryPension();

    var savings = Math.round(self.app.calculateSavings(self.app.user_age, p) * 100) / 100;

    var p_a = PENSION_ARRAY[self.app.user_age];
    var min = p_a[0];
    var max = p_a[4];

    self.setResultPaymentSlider(min, max, savings);

    $("#ResultPension").val( p + " Euro");
  });

  this.app.scrollToPosition(this.$this.offset().top + this.$this.outerHeight(true) - window.innerHeight);

  if ( !(this.app.user_age >= 28 && this.app.user_age <= 30) ) {
    $("#CalculatorMsg").hide();
  }
};

ResultCard.prototype.setResultPaymentSlider = function(min, max, value) {
  this.payment_slider
    .slider("option", "min", min)
    .slider("option", "max", max)
    .slider("value", value);

  $("#ResultPayment .min").text( toStandartNumbers(min) );
  $("#ResultPayment .max").text( toStandartNumbers(max) );
  $("#ResultPayment .value").text(  toStandartNumbers(value) );
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

ResultCard.prototype.alertYearStatement = function() {
  if ( this.message_state == ResultCard.MESSAGE_NORMAL ) {
    return;
  }
  this.message_state = ResultCard.MESSAGE_NORMAL;

  this.displayMessage("<b>Hinweis:</b> Mindestbeitrag beachten!<br>Ab einem versicherungstechnischen Eintrittsalter der versicherten Person ab 28 Jahren: bei mtl. Zahlweise 50,00 Euro", "msg");
};

ResultCard.prototype.alertPensionIsWrongSatement = function() {
  if ( this.message_state == ResultCard.MESSAGE_ALERT ) {
    return;
  }
  this.message_state = ResultCard.MESSAGE_ALERT;

  this.displayMessage("<span class='exlamation-point'>!</span><span>Achtung: Vorfreude und Rentenziel stimmen nicht mehr überein. Bitte passen Sie Ihre Wünsche oder den monatlichen Beitrag an.</span>", "alert");
};

ResultCard.prototype.displayMessage = function(msg, message_class) {
  $("#CalculatorMsg").show()
    .html("<p class='"+message_class+"'>"+msg+"</p>");
};

ResultCard.prototype.hideMessage = function() {
  if ( this.message_state == ResultCard.MESSAGE_HIDDEN ) {
    return;
  }
  this.message_state = ResultCard.MESSAGE_HIDDEN;

  $("#CalculatorMsg").hide();

  this.app.onResizeEndListener();
}



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