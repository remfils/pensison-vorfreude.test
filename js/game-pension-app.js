function Application () {
  var self = this;

  this.$app = $("#App");

  this.DEBUG = false;
  if ( this.DEBUG ) {
    this.runDebugOptimisations();
  }

  this.user_age = 28;

  this.answers = [1,1,1];

  this.real_pension = 0;

  this.title_card = new TitleCard(this);

  this.question_age_card = new QuestionAgeCard(this);

  this.question_form = new QuestionFormCard(this);

  this.result_card = new ResultCard(this);

  this.title_card.$this.show();

  this.current_card = this.title_card;

  $(window).on("resize", this.onResizeListener.bind(this));

  $("#GameOverScreen").dialog({
    autoOpen: false,
    modal: true,
    width: 440,
    /*height: 255,*/
    create: function (event, ui) {
        $('.ui-dialog-titlebar').css({'background':'none','border':'none'});
        $("#dialog-model").css({ 'padding': '0' });
        $(".ui-dialog-titlebar").html('');
    },
    show: {
      effect: "shake",
      duration: 300
    }
  });
};

Application.prototype.runDebugOptimisations = function() {
  this.$app.height(9999);
  $(".question-card-section").css("position", "relative");
};

Application.prototype.onResizeListener = function(e) {
  // $(".if6_outer.if6_openerstage").height(window.outerHeight - $(".if6_outer.if6_header").height());
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

Application.prototype.allQuestionsFinishedListener = function() {
  var self = this;

  this.swapTwoCards(this.question_form, this.result_card, function() {
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

  $("html, body").animate({ scrollTop: $b.offset().top }, 1000);

  $a.fadeOut({
    duration: 1000,
    complete: function() {
      $b.animate({opacity: 1}, 1000, callback);
    }
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

  this.imaginary_pension = imag_pension;

  return imag_pension;
};

Application.prototype.calculateSavings = function() {
  var p = this.imaginary_pension;
  var p_a = Application.PENSION_DATA_ARRAY[this.user_age];

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

Application.prototype.showGameOverScreen = function() {
  $("#GameOverScreen").dialog("open");
};


/* TITLE CARD */

function TitleCard ( app ) {
  this.$this = $("#TitleCard");

  this.app = app;

  $("#TitleCardStartButton").click(app.titleCardStartButtonListener.bind(app));

  if ( this.app.DEBUG ) {
    return;
  }

  this.$this.hide();
}


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

    if ( this.app.DEBUG ) {
      return;
    }

    this.$this.hide();
}


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

  if ( this.app.DEBUG ) {
    return;
  }
  this.$this.hide();
}

QuestionFormCard.prototype.questionFormWeiterClickListerner = function(e) {
  var prev_q = this.questions[this.current_question_index++];

  if ( this.current_question_index >= this.questions.length ) {
    this.app.allQuestionsFinishedListener();
  }
  else {
    var current_question_index = this.current_question_index;
    var q = this.questions[current_question_index];

    $("#QuestionNumbers span").each(function(i, item) {
      $(item).removeClass("current-question");
      if ( i == current_question_index ) {
        $(item).addClass("red");
        $(item).addClass("current-question");
      }
    });

    this.swapTwoQuestions(prev_q, q);
  }

  e.preventDefault();
  return false;
};

QuestionFormCard.prototype.swapTwoQuestions = function(q1, q2) {
  var $q1 = q1.$this;
  var $q2 = q2.$this;

  this.changeQuestionText(q2.text);

  $q1.removeClass("current-question");
  $q2.addClass("current-question");
  $q2.css("opacity", 0).show();

  $q1.fadeOut({
    duration: 1000,
    complete: function() {
      $q2.animate({opacity: 1}, 1000);
    }
  });
};

QuestionFormCard.prototype.changeQuestionText = function(text) {
  var $c = $("#QuestionCardText");
  var $t = $("#QuestionCardText p");
  var h = $c.height();
  var diff = $c.outerHeight(true) - h;

  $c.height(h);

  console.log($t.height());

  $t.animate({opacity: 0}, 1000, function() {
    $t.html(text);

    $c.animate({height: $t.height() + diff}, 500);
    $t.animate({opacity: 1}, 1000);
  });
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

  this.createSliders();

  var text_cell_height = this.$(".text-cell").height();

  this.$(".slider-cell").css({
      "line-height": (text_cell_height - 6) + "px"
    });
  text_cell_height = this.$(".text-cell").innerHeight();

  this.$(".image-cell").each(function(i, item) {
    $(item).innerHeight(text_cell_height);
  });

  this.updateImagesLeftPosition();

  $("#ResultCardDisplayCalculatorBtn").click(this.resultCardDisplayCalculatorBtnClickListener.bind(this));

  this.$calculator_screen = $("#PensionCalculatorFirstMessage, #PensionCalculatorInput, #PensionCalculatorAfterMessage, #PensionCalculatorButtonLine");

  if ( this.app.DEBUG ) {
    return;
  }

  this.$calculator_screen.hide();
  this.$this.hide();
};

ResultCard.prototype.createSliders = function() {
  var self = this;

  this.sliders = [];

  $("#PensionPrice").css("opacity", 0)

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

            $container.animate({left: -1 * width * (ui.value - 1)}, 1000);
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
      self.$("#ResultPayment .value").text(ui.value);
      self.updateCalculatorResult();
    },
    stop: function() {
      self.app.showGameOverScreen();
    }
  });

  this.year_slider = $("#ResultWorkYears").slider({
    min: 18,
    max: 55,
    animate: true,
    range: "min",
    value: self.app.user_age,
    slide: function(e, ui) {
      self.app.user_age = ui.value;

      $("#ResultWorkYears .value").text(ui.value);

      var pens_array = Application.PENSION_DATA_ARRAY[ui.value];
      var min = pens_array[0];
      var max = pens_array[4];

      self.payment_slider.slider("option", "min", min);
      $("#ResultPayment .min").text(min);

      self.payment_slider.slider("option", "max", max);
      $("#ResultPayment .max").text(max);

      self.updateCalculatorResult();
    }
  });
};

ResultCard.prototype.updateCalculatorResult = function() {
  var PENSIONS = [200, 400, 600, 800, 1000];
  var payment = this.payment_slider.slider("value");
  var year = this.app.user_age;

  var pens_array = Application.PENSION_DATA_ARRAY[year];

  for ( var i=0; i < pens_array.length; i++ ) {
    if ( payment < pens_array[i] ) {
      break;
    }
  }

  if ( i == 0 || i >= pens_array.length  ) {
    return;
  }

  var norm = (PENSIONS[i] - PENSIONS[i-1]) / (pens_array[i] - pens_array[i-1]);
  var result = PENSIONS[i] - (pens_array[i] - payment) * norm;

  self.app.real_pension = result;

  $("#ResultPension").val( Math.round(result / 10) * 10 + " Euro");
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
  console.log("ResultCard.prototype.updatePension");
  var p = Math.round( this.app.calculateImaginaryPension() / 10 ) * 10;

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
}

ResultCard.prototype.displayPensionCalculator = function() {
  var self = this;

  self.$calculator_screen
    .css("opacity", 0)
    .show();

  this.app.$app.animate({
    height: this.$this.outerHeight(true)
  }, 1000, function() {
    self.$calculator_screen.animate({opacity: 1}, 1000);
  });

  this.year_slider.slider("value", this.app.user_age);
  this.year_slider.find(".value").text(this.app.user_age);

  $("html, body").animate({ scrollTop: $('#PensionCalculatorFirstMessage').offset().top - 14 }, 1000);

  var p = this.app.calculateImaginaryPension();

  var savings = Math.round(this.app.calculateSavings());

  var p_a = Application.PENSION_DATA_ARRAY[this.app.user_age];
  var min = p_a[0];
  var max = p_a[4];

  $("#ResultPension").val( Math.round(p / 10) * 10 + " Euro");

  $("#ResultPayment .min").text(min);
  this.payment_slider.slider("option", "min", min);

  $("#ResultPayment .max").text(max);
  this.payment_slider.slider("option", "max", max);

  this.payment_slider.slider("value", savings);
  $("#ResultPayment .value").text( savings);
};



$(function() {

  window.app = new Application();
  app.init();
});



var pens_array = [];
pens_array[18] = [27.07, 51.86, 76.65, 101.42, 126.23];
pens_array[19] = [28.41, 54.54, 80.67, 106.79, 132.92];
pens_array[20] = [29.83, 57.37, 136.59, 112.46, 140.01];
pens_array[21] = [31.34, 60.39, 129.52, 118.47, 147.53];
pens_array[22] = [32.93, 63.56, 122.83, 124.82, 155.46];
pens_array[23] = [34.62, 66.94, 116.39, 131.59, 163.92];
pens_array[24] = [36.41, 70.52, 110.32, 138.73, 172.86];
pens_array[25] = [38.3, 74.31, 104.63, 146.33, 182.35];
pens_array[26] = [40.32, 78.36, 99.27, 154.41, 192.44];
pens_array[27] = [42.47, 82.65, 94.2, 163.01, 203.19];
pens_array[28] = [42.47, 87.1, 89.42, 171.92, 214.32];
pens_array[29] = [42.47, 91.81, 84.92, 181.35, 226.11];
pens_array[30] = [42.47, 96.88, 80.67, 191.46, 238.74];
pens_array[31] = [52.26, 102.24, 76.65, 202.19, 252.16];
pens_array[32] = [55.12, 107.97, 160.8, 213.64, 266.48];
pens_array[33] = [58.19, 114.08, 169.99, 225.91, 281.8];
pens_array[34] = [61.46, 120.65, 179.83, 239.03, 298.21];
pens_array[35] = [64.96, 127.65, 190.34, 253.03, 315.72];
pens_array[36] = [68.73, 135.21, 201.68, 268.14, 334.61];
pens_array[37] = [72.79, 143.3, 213.81, 284.32, 354.85];
pens_array[38] = [77.14, 152.02, 226.9, 301.77, 376.65];
pens_array[39] = [81.86, 161.43, 241.03, 320.62, 400.21];
pens_array[40] = [86.95, 171.63, 256.31, 341.01, 425.69];
pens_array[41] = [92.45, 182.64, 272.84, 363.03, 453.22];
pens_array[42] = [98.46, 194.66, 290.88, 387.07, 483.28];
pens_array[43] = [4.99, 207.73, 310.45, 413.19, 515.93];
pens_array[44] = [12.13, 222.01, 331.89, 441.76, 551.63];
pens_array[45] = [19.97, 237.68, 355.39, 473.1, 590.82];
pens_array[46] = [28.57, 254.88, 381.19, 507.52, 633.82];
pens_array[47] = [38.1, 273.97, 409.82, 545.69, 681.54];
pens_array[48] = [48.67, 295.09, 441.52, 587.95, 734.37];
pens_array[49] = [60.46, 318.68, 476.9, 635.11, 793.33];
pens_array[50] = [73.65, 345.07, 516.48, 687.9, 859.31];
pens_array[51] = [88.61, 374.97, 561.33, 747.7, 934.05];
pens_array[52] = [25.56, 408.89, 612.21, 815.53, 1018.85];
pens_array[53] = [25.01, 447.77, 670.54, 893.31, 1116.07];
pens_array[54] = [47.52, 492.79, 738.06, 983.35, 1228.63];
pens_array[55] = [73.78, 545.33, 816.89, 1088.44, 1359.99];
Application.PENSION_DATA_ARRAY = pens_array;