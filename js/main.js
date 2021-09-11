/* Drop down collapsible menu*/
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});

$(function () {
  /* Header animation */
  const backgroundHeader = $(".background .block__header");
  $(backgroundHeader).on("mouseEnter", function () {
    backgroundHeader.addClass("animate__headShake");
  });
  $(backgroundHeader).on("mouseOut", function () {
    setTimeout(() => {
      backgroundHeader.removeClass("animate__headShake");
    }, 1500);
  });

  /* Projects tab selector */
  const inputbtn = $(".input__button");
  inputbtn.on("click", function (e) {
    $(this).toggleClass("active animate__animated animate__pulse");
    $(this).siblings().removeClass("active animate__animated animate__pulse");
    if ($(this).parents("#projects").length) {
      if ($(this).hasClass("active")) filterByEnd($(this).attr("id"));
      else {
        filterByEnd("");
      }
    }
    if ($(this).parents("#certifications").length) {
      if ($(this).hasClass("active"))
        filterCertificateByEnd($(this).attr("id"));
      else {
        filterCertificateByEnd("");
      }
    }

    $(".select__trigger").children("span").text("All");
    $(".custom-option").removeClass("selected");
  });

  /* project language selector*/
  $(".select-wrapper").on("click", function () {
    $(this).children(".select").toggleClass("open");
  });
  for (const option of $(".custom-option")) {
    option.addEventListener("click", function () {
      if (!this.classList.contains("selected")) {
        $(this).siblings(".custom-option.selected").removeClass("selected");
        $(this).addClass("selected");
        $(this)
          .parent()
          .siblings(".select__trigger")
          .children("span")
          .text($(this).text());
        $(".input__button").removeClass(
          "active animate__animated animate__pulse"
        );
        if ($(this).parents("#projects").length) {
          filterByLanguage($(this).attr("data-value"));
        } else if ($(this).parents("#certifications").length) {
          filterCertificateByLanguage($(this).attr("data-value"));
        }
      }
    });
  }

  /* project filter */
  function filterByEnd(filter) {
    if (filter == "") {
      $(".project__list").children().show();
      return;
    }
    $(".project__list").children().not(`.${filter}`).hide();
    $(".project__list").children(`.${filter}`).show();
  }

  function filterByLanguage(language) {
    if (language === "all") {
      $(".project__list").children().show();
    } else {
      $(".project__list").children().not(`.${language}`).hide();
      $(".project__list").children(`.${language}`).show();
    }
  }

  function filterCertificateByEnd(filter) {
    if (filter == "") {
      $(".certificate__list").children().show();
      return;
    }
    $(".certificate__list").children().not(`.${filter}`).hide();
    $(".certificate__list").children(`.${filter}`).show();
  }

  function filterCertificateByLanguage(language) {
    if (language === "all") {
      $(".certificate__list").children().show();
    } else {
      $(".certificate__list").children().not(`.${language}`).hide();
      $(".certificate__list").children(`.${language}`).show();
    }
  }
});
